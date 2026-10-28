// 按清单给数据文件加标记。清单每行：行号@@类型@@文字；类型 k=关键词 ==  a=步骤动作 ++  w=易错 !!
// 文字里用 § 表示"从前面一直到后面"（省得抄长句）。例：12@@a@@先算§再赋值
// C 语言版：标记不能落在 ‹› 行内代码或 ~~~ 代码块里（网页里那两处不认标记）
// 用法：node apply-marks.js 数据文件 清单文件
const fs=require('fs');
const [f,list]=process.argv.slice(2);
const L=fs.readFileSync(f,'utf8').split('\n');
const M={k:'==',a:'++',w:'!!'};
const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
let ok=0,bad=0;
for(const ln of fs.readFileSync(list,'utf8').split('\n')){
  if(!ln.trim())continue;
  const pp=ln.split('@@'),n=pp[0],k=pp[1],t=pp.slice(2).join('@@');const i=+n-1;
  if(!M[k]||!t||!L[i]){console.log('BAD ENTRY',ln.slice(0,60));bad++;continue}
  const re=new RegExp(t.split('§').map(esc).join('[\\s\\S]*?'),'g');
  const ms=[...L[i].matchAll(re)];
  if(ms.length!==1){console.log(ms.length?'MULTI':'MISS',n,t.slice(0,50));bad++;continue}
  const m=ms[0],pre=L[i].slice(0,m.index);
  const dol=s=>(s.replace(/\\\$/g,'').match(/\$/g)||[]).length;
  if(dol(pre)%2||dol(m[0])%2){console.log('MATH',n,t.slice(0,50));bad++;continue}
  const cnt=(x,c)=>x.split(c).length-1;
  if(cnt(pre,'‹')>cnt(pre,'›')||/[‹›]/.test(m[0])||cnt(pre,'~~~')%2){console.log('CODE',n,t.slice(0,50));bad++;continue}
  if(/==|\+\+|!!/.test(m[0])){console.log('NEST',n,t.slice(0,50));bad++;continue}
  L[i]=pre+M[k]+m[0]+M[k]+L[i].slice(m.index+m[0].length);ok++;
}
fs.writeFileSync(f,L.join('\n'));console.log(f,'ok',ok,'bad',bad);
