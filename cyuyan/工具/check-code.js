// 实测题型卡里的程序：读程序卡比对输出，填空卡把答案填回去再比对，编程卡至少要能编译运行。
// 用法：node cyuyan/工具/check-code.js [数据文件...]   （不写文件名就查全部「第*节.js」和「第*章-章末.js」）
// 需要 gcc。卡片字段：output 期望输出；input 标准输入；blanks 各空答案（代码里写【1】【2】…）；
// nocheck: "原因" 跳过比对（例如结果依赖编译器、需要键盘交互、只是代码片段）。
const fs = require("fs"), vm = require("vm"), path = require("path"), os = require("os");
const { execFileSync, spawnSync } = require("child_process");
const dir = path.join(__dirname, "..", "数据");
const files = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(dir).filter(f => /^第.*(节|章末)\.js$/.test(f)).map(f => path.join(dir, f));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cy-"));
let ok = 0, bad = 0, skip = 0;
function codeOf(s) { const all = [...String(s || "").matchAll(/~~~c?\n([\s\S]*?)~~~/g)].map(m => m[1]); return all.find(x => /main\s*\(/.test(x)) || all[0] || null; }
function run(src, input) {
  const c = path.join(tmp, "a.c"), exe = path.join(tmp, "a.out");
  fs.writeFileSync(c, src);
  const cc = spawnSync("gcc", ["-std=c17", "-w", "-o", exe, c, "-lm"], { encoding: "utf8" });
  if (cc.status !== 0) return { err: "编译失败：" + cc.stderr.split("\n").slice(0, 3).join(" | ") };
  const r = spawnSync(exe, [], { input: input || "", encoding: "utf8", timeout: 3000 });
  if (r.error) return { err: "运行失败：" + r.error.message };
  return { out: r.stdout };
}
const norm = s => String(s).replace(/[ \t]+$/gm, "").replace(/\n+$/, "");
for (const f of files) {
  let d; const ctx = { KB: { add: x => (d = x), addChapterEnd: x => (d = x) } };
  vm.createContext(ctx); vm.runInContext(fs.readFileSync(f, "utf8"), ctx);
  if (!d) continue;
  for (const t of d.types || []) {
    const tag = `${d.id || "c" + d.chapter}/${t.id} ${t.name}`;
    if (t.nocheck) { skip++; continue; }
    let src = codeOf(t.example && t.example.q);
    if (t.blanks && src) {
      t.blanks.forEach((b, i) => { src = src.split("【" + (i + 1) + "】").join(b.a); });
      if (/【\d+】/.test(src)) { console.log("✗ 空没填完", tag); bad++; continue; }
    }
    if (t.kind === "编程") { const s2 = (t.steps || []).map(codeOf).find(x => x && /main\s*\(/.test(x)); if (s2) src = s2; }
    if (!src || !/main\s*\(/.test(src)) { if (t.output != null || t.blanks || t.kind === "编程" || t.kind === "读程序") { console.log("? 找不到完整程序", tag); bad++; } continue; }
    const r = run(src, t.input);
    if (r.err) { console.log("✗", tag, r.err); bad++; continue; }
    if (t.output != null && norm(r.out) !== norm(t.output)) {
      console.log("✗ 输出不符", tag, "\n  期望：", JSON.stringify(norm(t.output)), "\n  实际：", JSON.stringify(norm(r.out))); bad++; continue;
    }
    ok++;
  }
}
console.log("通过", ok, "跳过", skip, "问题", bad);
process.exit(bad ? 1 : 0);
