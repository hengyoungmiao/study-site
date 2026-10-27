const fs=require('fs'),vm=require('vm'),katex=require('katex');
const file=process.argv[2];let data;
const ctx={KB:{add:d=>data=d,addChapterEnd:d=>data=d,addWrong:d=>data=d}};vm.createContext(ctx);
vm.runInContext(fs.readFileSync(file,'utf8'),ctx);
const strs=[];(function walk(o,p){if(typeof o==='string')strs.push([p,o]);else if(o&&typeof o==='object')for(const k in o)walk(o[k],p+'.'+k)})(data,'');
let n=0,bad=0;
for(const [p,s] of strs){
  // check bold rule
  for(const m of s.matchAll(/\*\*(.+?)\*\*/g)){ if(/^[，。、；：！？,.;:（）()“”"]|[，。、；：！？,.;:（）()“”"]$/.test(m[1])){console.log('BOLD',p,m[1]);bad++} }
  if((s.match(/==/g)||[]).length%2){console.log('MARK ODD',p);bad++}
  const re=/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g;let m;
  let rest=s;
  while((m=re.exec(s))){n++;const tex=m[1]||m[2];try{katex.renderToString(tex,{displayMode:!!m[1],throwOnError:true,strict:'ignore'})}catch(e){bad++;console.log('ERR',p,tex,'\n  ',e.message)}}
  const stripped=s.replace(re,'');if(stripped.includes('$')){bad++;console.log('UNPAIRED',p,s)}
  if(/\\[\(\)\[\]]/.test(stripped)){bad++;console.log('BAD DELIM',p)}
}
console.log('formulas',n,'problems',bad);
