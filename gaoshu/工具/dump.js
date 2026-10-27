// 打印一节里需要读的行（带行号）：知识点、题型的看到/通法/步骤/易错。用法：node dump.js 文件
const fs=require('fs');const L=fs.readFileSync(process.argv[2],'utf8').split('\n');
let mode='',pid='',tid='';
L.forEach((l,i)=>{const n=i+1;
 let m;
 if((m=/^\s*id:\s*"(p\d+|t\d+)"/.exec(l)))console.log('-- '+m[1]+(/name:\s*(R`|")(.*?)[`"]/.exec(l)?' '+/name:\s*(R`|")(.*?)[`"]/.exec(l)[2].slice(0,30):''));
 if((m=/^\s*name:\s*R?[`"](.*)[`"],?\s*$/.exec(l))&&!/id:/.test(l))console.log(n+' N '+m[1]);
 if(/^\s*(body|signal|pitfall):/.test(l))console.log(n+' '+l.trim().replace(/^(\w+):\s*R?`?/,'$1 ').replace(/`,?$/,''));
 if(/^\s*notes:\s*\[/.test(l))mode='n'; else if(/^\s*steps:\s*\[/.test(l))mode='s'; else if(/^\s*how:\s*\[/.test(l))mode='h'; else if(/^\s*\]/.test(l))mode='';
 else if(mode&&/^\s*R`/.test(l))console.log(n+' '+mode+' '+l.trim().replace(/^R`/,'').replace(/`,?$/,''));
 if(/^\s*key:\s*R`/.test(l))console.log(n+' K '+l.trim().replace(/^key:\s*R`/,'').replace(/`,?$/,''));
});
