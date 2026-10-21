const fs=require('fs'),vm=require('vm');
const file=process.argv[2];let data;
const ctx={KB:{add:d=>data=d,addChapterEnd:d=>data=d}};vm.createContext(ctx);
vm.runInContext(fs.readFileSync(file,'utf8'),ctx);
const strs=[];(function walk(o,p){if(typeof o==='string')strs.push([p,o]);else if(o&&typeof o==='object')for(const k in o)walk(o[k],p+'.'+k)})(data,'');
let n=0,bad=0;
for(const [p,s] of strs){
  // 加粗规则：**内容** 不以标点开头或结尾
  for(const m of s.matchAll(/\*\*(.+?)\*\*/g)){ if(/^[，。、；：！？,.;:（）()“”"]|[，。、；：！？,.;:（）()“”"]$/.test(m[1])){console.log('BOLD',p,m[1]);bad++} }
  // 代码块 ~~~c ... ~~~ 或 ```c ... ```：每种围栏要成对
  for(const f of ['~~~','```']){
    const cnt=s.split(f).length-1;
    if(cnt%2!==0){console.log('围栏不配对',f,p,s.slice(0,40));bad++}
    n+=Math.floor(cnt/2);
  }
  // 行内代码 ‹x›：‹ 和 › 数量要相等（先去掉代码块）
  const stripped=s.replace(/(~~~|```)[\s\S]*?\1/g,'');
  if((stripped.match(/‹/g)||[]).length!==(stripped.match(/›/g)||[]).length){console.log('‹› 不配对',p,s.slice(0,40));bad++}
  if(/\*\*\s*\*\*/.test(stripped)){console.log('空加粗',p);bad++}
}
console.log('代码块',n,'问题',bad);
process.exit(bad?1:0);
