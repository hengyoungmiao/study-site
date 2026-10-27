// 给题型卡批量加关键步骤标记 ==...==（正面：通法一句话的第一个分句；背面：解答里最关键的一步）
// 用法：node gaoshu/工具/mark-keys.js gaoshu/数据/第N章-第M节.js  （已有 == 的卡会跳过）
const fs = require('fs');
const file = process.argv[2];
let src = fs.readFileSync(file, 'utf8');
const lines = src.split('\n');
const KW = /构造|换元|令 |有理化|裂项|消去|反例|子列|依据|关键|保号|夹逼|配凑|代换|转化|移项|变形|取对数|求导|等价|洛必达|泰勒|凑|定理|化为|化成|整理|拆|作差|换成/;
const SKIP = /^(检验|结论|结果|选|所以|答案|数量级|代回|求极限|验算|注)/;
function splitClause(s) { // 在 $...$ 之外找第一个 ； 或 。
  let inM = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '$') inM = !inM;
    else if (!inM && (s[i] === '；' || s[i] === '。')) return i;
  }
  return -1;
}
let i = 0, cards = 0;
while (i < lines.length) {
  if (/^\s*steps:\s*\[/.test(lines[i])) {
    let j = i + 1; const idx = [];
    while (!/^\s*\]/.test(lines[j])) { if (/^\s*R`/.test(lines[j])) idx.push(j); j++; }
    const texts = idx.map(k => lines[k].replace(/^\s*R`/, '').replace(/`,?\s*$/, ''));
    if (!texts.some(t => t.includes('=='))) {
      let best = -1, bs = -1;
      texts.forEach((t, n) => {
        const head = t.replace(/^\*\*|\(\d\)\s*|^[①②③]\s*/g, '').trim();
        let sc = 0;
        if (/\*\*/.test(t)) sc += 1;
        if (KW.test(t.slice(0, 40))) sc += 3;
        if (SKIP.test(head)) sc -= 10;
        if (n === 0 && texts.length > 2) sc -= 1;
        if (n === texts.length - 1) sc -= 2;
        if (sc > bs) { bs = sc; best = n; }
      });
      if (best < 0) best = Math.min(1, texts.length - 1);
      const k = idx[best];
      lines[k] = lines[k].replace(/^(\s*R`)(.*?)(`,?\s*)$/, (m, a, b, c) => `${a}==${b}==${c}`);
      cards++;
      // 同一张卡往回找 idea.key
      for (let p = i; p > Math.max(0, i - 40); p--) {
        if (/^\s*id:\s*"t\d+"/.test(lines[p]) && p < i) break;
        const m = /^(\s*key:\s*R`)(.*)(`,?\s*)$/.exec(lines[p]);
        if (m && !m[2].includes('==')) {
          const c = splitClause(m[2]);
          const head = c > 0 ? m[2].slice(0, c) : m[2];
          const tail = c > 0 ? m[2].slice(c) : '';
          lines[p] = `${m[1]}==${head}==${tail}${m[3]}`;
          break;
        }
      }
    }
    i = j;
  }
  i++;
}
fs.writeFileSync(file, lines.join('\n'));
console.log(file, 'cards marked', cards);
