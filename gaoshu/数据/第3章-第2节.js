/*
类型: 题型
标题: 高等数学 第3章 第2节 洛必达法则 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-28
更新日期: 2026-10-28
状态: 完成

页码一律是印刷页（转换稿的页码标记在每页开头，标记后面的内容属于该页；3.2 从 p129 开始，习题3-2 在 p133–134）。
教材 = 同济第八版上册；习题全解 = 同济第八版上册习题全解指导（习题3-2 在 p97–99）；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；
30讲 = 张宇基础30讲；武忠祥 = 高等数学辅导讲义（强化）；1000题 = 张宇1000题（只写题号）。
吉米本节「基本题型」（§2 洛必达法则 p78–85，【259】–【290】）按考法分 7 类，对应题型 1–7；题型 8–9 是教材和习题全解的题型；题型 10 是武忠祥的考法，标「研」。
网页上不标「⚠️未核验」；所有极限都用 sympy 验算过，没有出处的陷阱小题逐条核对过。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "3.2",
    chapter: 3,
    title: "洛必达法则",
    pages: "教材 p129–134",
    sources: [
      "教材 第三章第二节 p129–134",
      "习题全解 习题3-2 p97–99",
      "吉米 第3章 §2 洛必达法则 p78–85【259】–【290】",
      "30讲 第1讲 洛必达法则 p47–50；未定式的计算 p54–62",
      "武忠祥 第1章 方法4 p18–19；求极限常见题型 p21–26；数列的不定式 p33–34",
      "1000题 基础篇第1章"
    ],
    updated: "2026-10-28",

    framework: {
      main: R`$\frac00$、$\frac\infty\infty$ 型未定式不能用"商的极限等于极限的商"；由柯西中值定理得到洛必达法则：在条件满足时，==分子、分母分别求导再求极限==，右边存在（或为 $\infty$）左边就等于它。其余五种未定式 $0\cdot\infty$、$\infty-\infty$、$0^0$、$1^\infty$、$\infty^0$ 都先变形成 $\frac00$ 或 $\frac\infty\infty$。用之前先判型、先化简，能等价替换就替换。`,
      nodes: [
        { id: "CAU", go: "3.1", col: 0, row: 0, kind: "prop", label: "柯西中值定理（3.1）", sub: R`$\frac{f(x)-f(a)}{F(x)-F(a)}=\frac{f'(\xi)}{F'(\xi)}$` },
        { id: "FAIL", go: "p5", col: 1, row: 0, kind: "prop", label: "条件不满足时", sub: "右边不存在≠左边不存在" },
        { id: "SPD", go: "p6", col: 2, row: 0, kind: "prop", label: "无穷大的快慢", sub: R`$\ln x\ll x^\mu\ll\mathrm e^{\lambda x}$` },
        { id: "LH", go: "p2", col: 0, row: 1, kind: "func", label: "洛必达法则", sub: R`$\lim\frac fF=\lim\frac{f'}{F'}$` },
        { id: "REP", go: "p4", col: 1, row: 1, kind: "build", label: "反复用、先化简", sub: "每用一次先判型" },
        { id: "UND", go: "p1", col: 0, row: 2, kind: "map", label: "未定式", sub: R`$\frac00$、$\frac\infty\infty$` },
        { id: "OTH", go: "p7", col: 1, row: 2, kind: "build", label: R`$0\cdot\infty$、$\infty-\infty$`, sub: "化成分式" },
        { id: "POW", go: "p8", col: 2, row: 2, kind: "build", label: R`$0^0$、$1^\infty$、$\infty^0$`, sub: "取对数" }
      ],
      edges: [
        { from: "CAU", to: "LH", label: "证明" },
        { from: "UND", to: "LH", label: "分子分母分别求导" },
        { from: "LH", to: "FAIL", label: "只是充分条件" },
        { from: "LH", to: "REP", label: "仍是未定式再用" },
        { from: "REP", to: "SPD", label: "连用 n 次比快慢" },
        { from: "OTH", to: "UND", label: "通分、下放分母" },
        { from: "POW", to: "OTH", label: R`$u^v=\mathrm e^{v\ln u}$` }
      ],
      keys: [
        { q: R`洛必达法则有哪三个条件？结论是什么？`, a: R`① $\frac00$（或 $\frac\infty\infty$）型；② 去心邻域内 $f'$、$F'$ 存在且 $F'(x)\neq0$；③ $\lim\frac{f'}{F'}$ 存在或为 $\infty$。则 $\lim\frac fF=\lim\frac{f'}{F'}$（教材 p130–131）。` },
        { q: R`用洛必达之前、之中要做什么？`, a: R`每用一次都先确认还是未定式（教材 例2 注 p131）；能化简先化简：非零因子先求出极限、等价无穷小替换、恒等变形（教材 p133；武忠祥 p21；30讲 p54）。` },
        { q: R`另外五种未定式怎么化成 $\frac00$ 或 $\frac\infty\infty$？`, a: R`$0\cdot\infty$ 把一个因子下放到分母；$\infty-\infty$ 通分，没有分母就提公因式或倒代换；$0^0$、$1^\infty$、$\infty^0$ 写成 $\mathrm e^{v\ln u}$，先求指数的极限（教材 例7–9 p132–133；武忠祥 p18）。` },
        { q: R`$\lim\frac{f'}{F'}$ 不存在时能说明什么？`, a: R`什么也说明不了：法则只是充分条件，原极限仍可能存在，要换别的方法（教材 p133，习题3-2 第2、3题；30讲 p48）。` }
      ]
    },

    points: [
      {
        group: "一、未定式",
        items: [
          {
            id: "p1", kind: "定义", name: "未定式 0/0、∞/∞", page: "教材 p129",
            body: R`如果当 $x\to a$（或 $x\to\infty$）时，两个函数 $f(x)$ 与 $F(x)$ ==都趋于零或都趋于无穷大==，那么极限 $\lim\dfrac{f(x)}{F(x)}$ ==可能存在、也可能不存在==。通常把这种极限叫做==未定式==，分别简记为 $\frac00$ 或 $\frac\infty\infty$。对这类极限，==即使它存在也不能用"商的极限等于极限的商"==这一法则。`,
            notes: [
              R`第一章的 $\lim\limits_{x\to0}\dfrac{\sin x}x$ 就是 $\frac00$ 型未定式的例子（教材 p129）`,
              R`"未定"指只看类型定不出结果：$\frac{x^2}x\to0$，$\frac x{x^2}\to\infty$，$\frac{2x}x\to2$，都是 $\frac00$ 型`,
              R`其余五种未定式：==$0\cdot\infty$、$\infty-\infty$、$0^0$、$1^\infty$、$\infty^0$==，都可以化成 $\frac00$ 或 $\frac\infty\infty$（教材 p132；武忠祥 p18）`,
              R`!!$\frac0\infty$、$\frac\infty0$、$0^\infty$、$\infty^\infty$ 不是未定式!!：$\frac0\infty\to0$，$\frac\infty0\to\infty$，$0^{+\infty}\to0$`
            ],
            quiz: R`$\lim\limits_{x\to0^+}\dfrac{\ln x}{x}$ 是未定式吗？`
          }
        ]
      },
      {
        group: "二、洛必达法则",
        items: [
          {
            id: "p2", kind: "定理", name: "定理 1：x→a 时的 0/0 型", page: "教材 p130",
            body: R`设 (1) 当 $x\to a$ 时，函数 $f(x)$ 及 $F(x)$ ==都趋于零==；(2) 在点 $a$ 的==某去心邻域内，$f'(x)$ 及 $F'(x)$ 都存在且 $F'(x)\neq0$==；(3) ==$\lim\limits_{x\to a}\dfrac{f'(x)}{F'(x)}$ 存在（或为无穷大）==，则 ==$\lim\limits_{x\to a}\dfrac{f(x)}{F(x)}=\lim\limits_{x\to a}\dfrac{f'(x)}{F'(x)}$==。`,
            notes: [
              R`意思是：右边存在，左边也存在且相等；右边为无穷大，左边也是无穷大。这种==分子、分母分别求导==再求极限的方法叫洛必达法则（教材 p130）`,
              R`证明：极限与 $f(a)$、$F(a)$ 无关，==补充定义 $f(a)=F(a)=0$==，在以 $x$、$a$ 为端点的区间上用==柯西中值定理==：$\dfrac{f(x)}{F(x)}=\dfrac{f(x)-f(a)}{F(x)-F(a)}=\dfrac{f'(\xi)}{F'(\xi)}$，$x\to a$ 时 $\xi\to a$（教材 p130）`,
              R`!!是分子、分母各自求导，不是对商 $\frac fF$ 求导!!`,
              R`例 1：$\lim\limits_{x\to0}\dfrac{\sin ax}{\sin bx}=\lim\limits_{x\to0}\dfrac{a\cos ax}{b\cos bx}=\dfrac ab$（$b\neq0$）（教材 p131）`
            ],
            quiz: R`证明里为什么可以假定 $f(a)=F(a)=0$？要用到哪个中值定理？`
          },
          {
            id: "p3", kind: "定理", name: "定理 2 及其他情形：x→∞、∞/∞ 型", page: "教材 p131",
            body: R`设 (1) 当 $x\to\infty$ 时，$f(x)$ 及 $F(x)$ 都趋于零；(2) ==当 $|x|>N$ 时 $f'(x)$ 与 $F'(x)$ 都存在，且 $F'(x)\neq0$==；(3) $\lim\limits_{x\to\infty}\dfrac{f'(x)}{F'(x)}$ 存在（或为无穷大），则 $\lim\limits_{x\to\infty}\dfrac{f(x)}{F(x)}=\lim\limits_{x\to\infty}\dfrac{f'(x)}{F'(x)}$。对于 ==$x\to a$ 或 $x\to\infty$ 时的 $\frac\infty\infty$ 型==，也有相应的洛必达法则。`,
            notes: [
              R`例 4：$\lim\limits_{x\to+\infty}\dfrac{\frac\pi2-\arctan x}{\frac1x}=\lim\limits_{x\to+\infty}\dfrac{-\frac1{1+x^2}}{-\frac1{x^2}}=\lim\limits_{x\to+\infty}\dfrac{x^2}{1+x^2}=1$（教材 p131）`,
              R`单侧极限 $x\to a^\pm$、$x\to\pm\infty$ 同样适用（教材 例4、例7 用的就是 $x\to+\infty$、$x\to0^+$）`,
              R`30讲把两种情形写成法则一（$\frac00$）、法则二（$\frac\infty\infty$），条件和结论形式相同（30讲 p47）`
            ],
            quiz: R`$\lim\limits_{x\to+\infty}\dfrac{\ln x}{\sqrt x}$ 属于哪种情形？结果是多少？`
          },
          {
            id: "p4", kind: "结论", name: "可以连续使用，但每次先判型", page: "教材 p130–131",
            body: R`如果 $\dfrac{f'(x)}{F'(x)}$ 当 $x\to a$ 时==仍属 $\frac00$ 型==，且 $f'(x)$、$F'(x)$ 能满足定理中 $f$、$F$ 所要满足的条件，那么可以==继续使用洛必达法则==：$\lim\dfrac{f}{F}=\lim\dfrac{f'}{F'}=\lim\dfrac{f''}{F''}$，以此类推。但==如果不是未定式，就不能应用洛必达法则==，否则会导致错误结果。`,
            notes: [
              R`例 2：$\lim\limits_{x\to1}\dfrac{x^3-3x+2}{x^3-x^2-x+1}=\lim\limits_{x\to1}\dfrac{3x^2-3}{3x^2-2x-1}=\lim\limits_{x\to1}\dfrac{6x}{6x-2}=\dfrac32$；!!最后一步 $\frac{6x}{6x-2}$ 已不是未定式!!，再求导会得到错误的 1（教材 p131）`,
              R`例 3：$\lim\limits_{x\to0}\dfrac{x-\sin x}{x^3}=\lim\limits_{x\to0}\dfrac{1-\cos x}{3x^2}=\lim\limits_{x\to0}\dfrac{\sin x}{6x}=\dfrac16$（教材 p131）`,
              R`例 6：$\lim\limits_{x\to+\infty}\dfrac{x^n}{\mathrm e^{\lambda x}}$ 相继用 $n$ 次，得 $\lim\dfrac{n!}{\lambda^n\mathrm e^{\lambda x}}=0$（教材 p132）`
            ],
            quiz: R`$\lim\limits_{x\to0}\dfrac{\mathrm e^x-1-x}{x^2}$ 要用几次洛必达？第几次之后就不是未定式了？`
          },
          {
            id: "p5", kind: "结论", name: "条件不满足时，原极限仍可能存在", page: "教材 p133",
            body: R`本节定理给出的是求未定式的==一种方法==。当定理条件满足时，所求的极限当然存在（或为 $\infty$）；但==当定理条件不满足时，所求极限却不一定不存在==：当 $\lim\dfrac{f'(x)}{F'(x)}$ 不存在时（等于无穷大的情况除外），$\lim\dfrac{f(x)}{F(x)}$ ==仍可能存在==。`,
            notes: [
              R`习题3-2 第2题：$\lim\limits_{x\to\infty}\dfrac{x+\sin x}x=1$，但 $\dfrac{(x+\sin x)'}{x'}=1+\cos x$ 没有极限（习题全解 p98）`,
              R`习题3-2 第3题：$\lim\limits_{x\to0}\dfrac{x^2\sin\frac1x}{\sin x}=\lim\dfrac x{\sin x}\cdot x\sin\dfrac1x=0$，但求导后含 $\cos\frac1x$，没有极限（习题全解 p98）`,
              R`30讲的口诀：==右存在，则左存在；但左存在，并不意味着右一定存在==（30讲 p48）`,
              R`遇到这种情况就==换方法==：拆项、有界量乘无穷小、夹逼准则等`
            ],
            quiz: R`$\lim\limits_{x\to+\infty}\dfrac{x-\cos x}{x+\cos x}$ 能用洛必达吗？极限是多少？`
          }
        ]
      },
      {
        group: "三、无穷大的增长快慢",
        items: [
          {
            id: "p6", kind: "结论", name: "ln x ≪ x^μ ≪ e^(λx)（x→+∞）", page: "教材 p132",
            body: R`例 5：$\lim\limits_{x\to+\infty}\dfrac{\ln x}{x^n}=0$（$n>0$）；例 6：$\lim\limits_{x\to+\infty}\dfrac{x^n}{\mathrm e^{\lambda x}}=0$（$\lambda>0$），==$n$ 不是正整数而是任何正数时，极限仍为零==。对数函数、幂函数、指数函数都是 $x\to+\infty$ 时的无穷大，但==幂函数增大的"速度"比对数函数快得多，指数函数又比幂函数快得多==。`,
            notes: [
              R`例 5 一次洛必达：$\lim\dfrac{\frac1x}{nx^{n-1}}=\lim\dfrac1{nx^n}=0$（教材 p132）`,
              R`教材的表：$x=1000$ 时，$\ln x\approx6.9$，$\sqrt x\approx31.6$，$x^2=10^6$，$\mathrm e^x\approx1.97\times10^{434}$（教材 p132）`,
              R`30讲的记法：$x\to+\infty$ 时 ==$\ln^\alpha x\ll x^\beta\ll a^x$==（$\alpha,\beta>0$，$a>1$），考试时直接用（30讲 p50）`
            ],
            quiz: R`$x$ 充分大时，$\ln^{10}x$、$x$、$\mathrm e^{\frac x{10}}$ 谁最大？`
          }
        ]
      },
      {
        group: "四、其他类型的未定式",
        items: [
          {
            id: "p7", kind: "方法", name: "0·∞ 和 ∞−∞：化成分式", page: "教材 p132–133",
            body: R`==$0\cdot\infty$ 型：把一个因子取倒数下放到分母==，化成 $\frac00$ 或 $\frac\infty\infty$。例 7：$x^n\ln x=\dfrac{\ln x}{x^{-n}}$，$\lim\limits_{x\to0^+}x^n\ln x=\lim\limits_{x\to0^+}\dfrac{\frac1x}{-nx^{-n-1}}=\lim\limits_{x\to0^+}\left(-\dfrac{x^n}n\right)=0$。==$\infty-\infty$ 型：通分化成一个分式==。例 8：$\sec x-\tan x=\dfrac{1-\sin x}{\cos x}$，$\lim\limits_{x\to\frac\pi2}\dfrac{-\cos x}{-\sin x}=0$。`,
            notes: [
              R`下放谁有讲究：==简单因式才下放==（$x^\alpha$、$\mathrm e^{\beta x}$、$\sin rx$ 等），$\ln x$、$\arctan x$、$\arcsin x$ 这类留在分子；放错了会越求越繁（30讲 p58）`,
              R`$\infty-\infty$ 没有分母时：==提公因式或倒代换 $t=\frac1x$== 造出分母（30讲 p60–61）`,
              R`结论 ==$\lim\limits_{x\to0^+}x^\alpha\ln x=0$==（$\alpha>0$），以后常直接用（教材 例7 p132）`
            ],
            quiz: R`$\lim\limits_{x\to0^+}x\ln x$ 写成 $\dfrac{x}{\frac1{\ln x}}$ 好，还是写成 $\dfrac{\ln x}{\frac1x}$ 好？`
          },
          {
            id: "p8", kind: "方法", name: "0⁰、1^∞、∞⁰：取对数", page: "教材 p133",
            body: R`幂指函数 $y=u(x)^{v(x)}$ 的这三种未定式，==两端取对数==得 $\ln y=v\ln u$，它是 $0\cdot\infty$ 型；==求出 $\lim\ln y$ 后，$\lim y=\mathrm e^{\lim\ln y}$==。例 9：$\lim\limits_{x\to0^+}x^x$，$\ln y=x\ln x\to0$，所以 ==$\lim\limits_{x\to0^+}x^x=\mathrm e^0=1$==。`,
            notes: [
              R`依据：$y=\mathrm e^{\ln y}$，指数函数连续，$\lim\mathrm e^{\ln y}=\mathrm e^{\lim\ln y}$（教材 p133）`,
              R`常写成 ==$u^v=\mathrm e^{v\ln u}$==，"碰到幂指函数，用 e 抬起来"（30讲 p55、p61）`,
              R`$1^\infty$ 型还可以用第一章的快捷公式 ==$\lim u^v=\mathrm e^{\lim v(u-1)}$==（30讲 p62；1.6 节）`,
              R`!!最后别忘了还原!!：求出的是指数的极限，答案要写成 $\mathrm e^{(\cdot)}$`
            ],
            quiz: R`$\lim\limits_{x\to0^+}x^{\sin x}$ 是哪种未定式？取对数后是哪种？结果是多少？`
          }
        ]
      },
      {
        group: "五、和其他方法结合",
        items: [
          {
            id: "p9", kind: "方法", name: "先化简，再洛必达", page: "教材 p133",
            body: R`洛必达法则是求未定式的一种有效方法，但==最好能与其他求极限的方法结合使用==：==能化简时应尽可能先化简==，==可以应用等价无穷小替换或重要极限时，应尽可能应用==。例 10：$\lim\limits_{x\to0}\dfrac{\tan x-x}{x^2\sin x}$，先把分母的 $\sin x$ 换成 $x$，$=\lim\dfrac{\tan x-x}{x^3}=\lim\dfrac{\sec^2x-1}{3x^2}=\dfrac13$。`,
            notes: [
              R`化简的常用手段：==极限非零的因子先求出来==、有理化、变量代换（武忠祥 p21）；等价无穷小代换、恒等变形（30讲 p54）`,
              R`等价替换只能换==乘除的因子==，!!不能换加减中的一项!!（1.7 节）`,
              R`求导会让式子变繁时（分母是高次乘积、含幂指函数）==先换再导==（教材 例10 p133；武忠祥 例5 p24）`
            ],
            quiz: R`$\lim\limits_{x\to0}\dfrac{(1-\cos x)[x-\ln(1+\tan x)]}{\sin^4x}$ 第一步做什么？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "0/0 型：边化简边洛必达",
        signal: R`分子、分母==都趋于 0==，多为 $x\to0$ 时含 $\sin$、$\tan$、$\arctan$、$\ln(1+\cdot)$、$\mathrm e^{(\cdot)}-1$ 的差`,
        example: { q: R`计算 $\lim\limits_{x\to0}\dfrac{\arctan x-x}{\ln(1+2x^3)}$。`, src: "吉米【263】p79" },
        idea: {
          key: R`==先化简、后求导==：非零因子先求出来，乘除因子先做等价替换；剩下的 $\frac00$ 用洛必达，==每求一次导都先判型、再化简==。`,
          how: [
            R`++确认是 $\frac00$ 型++`,
            R`++化简++：极限非零的因子先算出来，乘除的因子用等价无穷小替换`,
            R`++分子、分母分别求导++，求导后整理（通分、约去公因式）`,
            R`++再判型++：仍是 $\frac00$ 就继续，已经不是就直接代入`
          ],
          refs: [
            { src: "教材 p133", text: R`能化简时应尽可能先化简，可以应用等价无穷小替换或重要极限时，应尽可能应用，这样可以使运算简捷` },
            { src: "武忠祥 p21", text: R`以上三种方法使用的同时要注意将原式化简，化简的方法有极限非零的因子极限先求出来、有理化及变量代换等` },
            { src: "30讲 p55", text: R`①化简先行 ②判断类型（运算类型）③选择方法（洛必达法则、泰勒公式、夹逼准则等）` }
          ]
        },
        think: R`分母 $\ln(1+2x^3)$ 是乘除因子，$x\to0$ 时等价于 $2x^3$，先换掉；分子是差，不能换，留给洛必达。`,
        first: R`等价替换分母：$\ln(1+2x^3)\sim2x^3$`,
        steps: [
          R`++判型++：$x\to0$ 时分子 $\arctan x-x\to0$，分母 $\ln(1+2x^3)\to0$，是 $\frac00$ 型`,
          R`++替换分母++：$\ln(1+2x^3)\sim2x^3$，原式 $=\lim\limits_{x\to0}\dfrac{\arctan x-x}{2x^3}$（1.7 节 等价无穷小替换）`,
          R`++分子分母分别求导++：$=\lim\limits_{x\to0}\dfrac{\frac1{1+x^2}-1}{6x^2}$（洛必达法则，教材 p130）`,
          R`++通分整理++：$\dfrac1{1+x^2}-1=\dfrac{-x^2}{1+x^2}$，所以 $=\lim\limits_{x\to0}\dfrac{-x^2}{6x^2(1+x^2)}$`,
          R`**++约去 $x^2$，代入++** $=-\dfrac16$`
        ],
        pitfall: R`!!把分子的 $\arctan x$ 换成 $x$!!，得到 $0$（加减中的项不能替换）；求导后不整理，接着第二次洛必达，越算越繁`,
        practice: "教材 例1–3（p131）、例10（p133）、习题3-2 第1(1)–(8)(10)题（p133–134，答案习题全解 p98）；吉米【259】–【267】（p78–81）；30讲 例1.22（p49）；检验：1000题基础篇第1章 11、14题"
      },
      {
        id: "t2", name: "∞/∞ 型：对数、幂、指数比快慢",
        signal: R`分子、分母==都趋于无穷大==，常见 $x\to+\infty$ 时含 $\ln x$、$x^\mu$、$\mathrm e^{\lambda x}$，或 $x\to a$ 时含 $\ln(\cdot)$、$\tan$、$\cot$`,
        example: { q: R`求 $\lim\limits_{x\to\frac\pi2^-}\dfrac{\ln\cot x}{\tan x}$。`, src: "吉米【268】p81" },
        idea: {
          key: R`==分子、分母分别求导==，把求导后的式子==化成简单的三角式或幂式==再求；$x\to+\infty$ 的题记住 ==$\ln x\ll x^\mu\ll\mathrm e^{\lambda x}$==，结果往往一眼可见。`,
          how: [
            R`++确认分子、分母都趋于 $\infty$++（注意单侧：$\ln$ 的真数要正）`,
            R`++分子、分母分别求导++`,
            R`++把复合三角式统一成 $\sin$、$\cos$，约分++；含 $\ln$ 的求导后往往直接化成幂式`,
            R`++判断结果++：已不是未定式就代入；仍是 $\frac\infty\infty$ 就再用或换方法`
          ],
          refs: [
            { src: "教材 p131", text: R`对于 $x\to\infty$ 时的未定式 $\frac00$ 以及对于 $x\to a$ 或 $x\to\infty$ 时的未定式 $\frac\infty\infty$，也有相应的洛必达法则` },
            { src: "30讲 p50", text: R`当 $x\to+\infty$ 时，有 $\ln^\alpha x\ll x^\beta\ll a^x$，其中 $\alpha,\beta>0$，$a>1$` },
            { src: "武忠祥 p25", text: R`"$\frac\infty\infty$"型极限 常用方法 (1) 洛必达法则` }
          ]
        },
        think: R`$x\to\frac\pi2^-$ 时 $\cot x\to0^+$，$\ln\cot x\to-\infty$；$\tan x\to+\infty$，是 $\frac\infty\infty$ 型。$\ln\cot x$ 求导得 $\dfrac{-\csc^2x}{\cot x}$，化成 $\sin$、$\cos$ 后很简单。`,
        first: R`判型：$\ln\cot x\to-\infty$，$\tan x\to+\infty$，$\frac\infty\infty$ 型`,
        steps: [
          R`++判型++：$x\to\frac\pi2^-$ 时 $\cot x\to0^+$，$\ln\cot x\to-\infty$；$\tan x\to+\infty$`,
          R`++分子求导++：$(\ln\cot x)'=\dfrac{-\csc^2x}{\cot x}=-\dfrac1{\sin x\cos x}$`,
          R`++分母求导++：$(\tan x)'=\sec^2x=\dfrac1{\cos^2x}$`,
          R`++相除并约分++：原式 $=\lim\limits_{x\to\frac\pi2^-}\left(-\dfrac1{\sin x\cos x}\cdot\cos^2x\right)=\lim\limits_{x\to\frac\pi2^-}\left(-\dfrac{\cos x}{\sin x}\right)$`,
          R`**++代入++** $=-\cot\dfrac\pi2=0$（吉米【268】p81）`
        ],
        pitfall: R`$(\ln\cot x)'$ !!漏乘内层导数 $-\csc^2x$!!；求导后不化简，又对没约分的繁分式继续求导，越算越繁`,
        practice: "教材 例4–6（p131–132）、习题3-2 第1(7)(8)(9)题（p133–134，答案习题全解 p98）；吉米【268】【269】（p81）；30讲 例1.23（p49–50）"
      },
      {
        id: "t3", name: "0·∞ 型：简单因式下放到分母",
        signal: R`两个因子相乘，==一个趋于 0、一个趋于 $\infty$==，常见 $x^\alpha\ln x$（$x\to0^+$）、$\ln x\ln(1-x)$、$x\cot2x$`,
        example: { q: R`求极限 $\lim\limits_{x\to1^-}\ln x\ln(1-x)$。`, src: "30讲 第1讲 例1.28 p58–59" },
        idea: {
          key: R`把==简单的那个因式取倒数下放到分母==，化成 $\frac00$ 或 $\frac\infty\infty$；$\ln$、反三角这类复杂因式留在分子，求导后才会变简单。能先等价替换的先替换。`,
          how: [
            R`++判型++：哪个因子 $\to0$，哪个 $\to\infty$`,
            R`++能替换先替换++：趋于 0 的因子用等价无穷小换成幂函数`,
            R`++选简单因式下放++：$x^\alpha$、$\mathrm e^{\beta x}$、$\sin rx$ 下放，$\ln$、$\arctan$ 留在分子`,
            R`++洛必达，整理++，或直接用 $\lim\limits_{x\to0^+}x^\alpha\ln x=0$`
          ],
          refs: [
            { src: "30讲 p58", text: R`把谁放在分母，是有讲究的。设置分母有原则，简单因式才下放。简单因式有 $x^\alpha$，$\mathrm e^{\beta x}$，$\sin rx$ 等；复杂因式有 $\arctan x$，$\arcsin x$，$\ln x$ 等` },
            { src: "教材 例7 p132", text: R`这是未定式 $0\cdot\infty$。因为 $x^n\ln x=\frac{\ln x}{\frac1{x^n}}$，当 $x\to0^+$ 时，上式右端是未定式 $\frac\infty\infty$` }
          ]
        },
        think: R`$x\to1^-$ 时 $\ln x\to0$，$\ln(1-x)\to-\infty$。$\ln x=\ln[1+(x-1)]\sim x-1$ 可以先换；令 $t=1-x\to0^+$，就变成熟悉的 $t\ln t$。`,
        first: R`等价替换：$x\to1$ 时 $\ln x\sim x-1$`,
        steps: [
          R`++判型++：$x\to1^-$ 时 $\ln x\to0$，$\ln(1-x)\to-\infty$，是 $0\cdot\infty$ 型`,
          R`++等价替换++：$\ln x=\ln[1+(x-1)]\sim x-1$，原式 $=\lim\limits_{x\to1^-}(x-1)\ln(1-x)$`,
          R`++换元++：令 $t=1-x$，$x\to1^-$ 时 $t\to0^+$，原式 $=\lim\limits_{t\to0^+}(-t\ln t)$`,
          R`++简单因式 $t$ 下放++：$-\lim\limits_{t\to0^+}\dfrac{\ln t}{\frac1t}=-\lim\limits_{t\to0^+}\dfrac{\frac1t}{-\frac1{t^2}}=\lim\limits_{t\to0^+}t$`,
          R`**++结果++** $=0$（30讲 例1.28 p58–59）`
        ],
        pitfall: R`!!把 $\ln$ 下放成 $\dfrac{t}{\frac1{\ln t}}$!!，求导后出现 $t\ln^2t$，越来越繁（30讲 p58）；换元时 $t\to0^+$ 的方向写错`,
        practice: "教材 例7（p132）、习题3-2 第1(11)(12)题（p133–134，答案习题全解 p98）；吉米【270】【271】（p81）；1000题基础篇第1章 15题"
      },
      {
        id: "t4", name: "∞−∞ 型：通分化成 0/0",
        signal: R`==两个都趋于无穷大的式子相减==，常见 $\dfrac1{\square}-\dfrac1{\square}$、$\sec x-\tan x$、$\dfrac x{x-1}-\dfrac1{\ln x}$`,
        example: { q: R`计算 $\lim\limits_{x\to1}\left(\dfrac x{x-1}-\dfrac1{\ln x}\right)$。`, src: "吉米【274】p81" },
        idea: {
          key: R`==有分母就通分==，化成一个 $\frac00$ 型分式；==分母里的乘积因子先等价替换==，再洛必达。没有分母就提公因式或倒代换造出分母。`,
          how: [
            R`++判型++：两项都 $\to\infty$ 且同号相减`,
            R`++通分++（没有分母时：提公因式或令 $t=\frac1x$）`,
            R`++分母的乘积因子做等价替换++，化成幂函数`,
            R`++洛必达，每次判型、整理++`
          ],
          refs: [
            { src: "30讲 p60", text: R`如果函数中有分母，则通分，将加减法变形为乘除法，以便于使用其他计算工具（比如洛必达法则）` },
            { src: "30讲 p60", text: R`如果函数中没有分母，则可以通过提取公因式或者作倒代换，出现分母后，再利用通分等恒等变形的方法，将加减法变形为乘除法` },
            { src: "教材 例8 p133", text: R`这是未定式 $\infty-\infty$。因为 $\sec x-\tan x=\frac{1-\sin x}{\cos x}$，当 $x\to\frac\pi2$ 时，上式右端是未定式 $\frac00$` }
          ]
        },
        think: R`$x\to1$ 时两项都趋于 $\infty$，有分母，先通分。通分后分母是 $(x-1)\ln x$，其中 $\ln x\sim x-1$，换成 $(x-1)^2$，再洛必达两次。`,
        first: R`通分：$\dfrac{x\ln x-x+1}{(x-1)\ln x}$`,
        steps: [
          R`++通分++：原式 $=\lim\limits_{x\to1}\dfrac{x\ln x-(x-1)}{(x-1)\ln x}$，$\frac00$ 型`,
          R`++替换分母++：$\ln x=\ln[1+(x-1)]\sim x-1$，原式 $=\lim\limits_{x\to1}\dfrac{x\ln x-x+1}{(x-1)^2}$`,
          R`++第一次洛必达++：分子导数 $\ln x+1-1=\ln x$，分母导数 $2(x-1)$，$=\lim\limits_{x\to1}\dfrac{\ln x}{2(x-1)}$，仍是 $\frac00$`,
          R`++第二次洛必达++：$=\lim\limits_{x\to1}\dfrac{\frac1x}{2}$`,
          R`**++代入++** $=\dfrac12$（吉米【274】p81）`
        ],
        pitfall: R`!!分开求两项的极限!!，得到"$\infty-\infty=0$"；通分后不替换分母，直接对 $(x-1)\ln x$ 求导，式子变繁`,
        practice: "教材 例8（p133）、习题3-2 第1(13)题（p133–134，答案习题全解 p98）；吉米【273】–【277】（p81–82）；30讲 例1.30、例1.31（p60–61）；检验：1000题基础篇第1章 19题"
      },
      {
        id: "t5", name: "幂指型 0⁰、1^∞、∞⁰：取对数",
        signal: R`==底和指数都含 $x$== 的 $u(x)^{v(x)}$，底趋于 $0$、$1$ 或 $\infty$，指数趋于 $0$ 或 $\infty$`,
        example: { q: R`$a>0$，$b>0$ 均为常数，求 $\lim\limits_{x\to0}\left(\dfrac{a^x+b^x}2\right)^{\frac3x}$。`, src: "吉米【280】p82–83" },
        idea: {
          key: R`==写成 $u^v=\mathrm e^{v\ln u}$==（或设 $y=u^v$ 取对数），先求指数 $\lim v\ln u$（一般是 $0\cdot\infty$ 或化成 $\frac00$），==最后还原成 $\mathrm e^{(\cdot)}$==。$1^\infty$ 型也可以用 $\lim u^v=\mathrm e^{\lim v(u-1)}$。`,
          how: [
            R`++判型++：看底和指数各趋于什么`,
            R`++取对数++：$\lim u^v=\mathrm e^{\lim v\ln u}$`,
            R`++求指数的极限++：化成 $\frac00$ 或 $\frac\infty\infty$，洛必达或等价替换`,
            R`++还原++：答案写 $\mathrm e^{\text{指数的极限}}$，能化简就化简`
          ],
          refs: [
            { src: "教材 例9 p133", text: R`设 $y=x^x$，两端取对数得 $\ln y=x\ln x$……因为 $y=\mathrm e^{\ln y}$，而 $\lim y=\lim\mathrm e^{\ln y}=\mathrm e^{\lim\ln y}$` },
            { src: "30讲 p61", text: R`对于"$\infty^0$"和"$0^0$"型这两种未定式，一般来说，用恒等变形 $\lim u^v=\mathrm e^{\lim v\ln u}$，将其化成"$\frac00$""$\frac\infty\infty$""$0\cdot\infty$"这三种类型，然后计算` },
            { src: "30讲 p62", text: R`如果 $\lim u^v$ 属于"$1^\infty$"型，则有一个重要且简单的计算方法：$\lim u^v=\mathrm e^{\lim(u-1)v}$` }
          ]
        },
        think: R`$x\to0$ 时底 $\dfrac{a^x+b^x}2\to1$，指数 $\dfrac3x\to\infty$，是 $1^\infty$ 型。取对数后指数是 $\dfrac{3[\ln(a^x+b^x)-\ln2]}x$，$\frac00$ 型，洛必达一次即可。`,
        first: R`设 $y=\left(\dfrac{a^x+b^x}2\right)^{\frac3x}$，取对数 $\ln y=\dfrac{3[\ln(a^x+b^x)-\ln2]}x$`,
        steps: [
          R`++判型++：底 $\to\dfrac{1+1}2=1$，指数 $\to\infty$，$1^\infty$ 型`,
          R`++取对数++：$\ln y=\dfrac{3[\ln(a^x+b^x)-\ln2]}x$，$\frac00$ 型`,
          R`++洛必达++：$\lim\limits_{x\to0}\ln y=3\lim\limits_{x\to0}\dfrac{a^x\ln a+b^x\ln b}{a^x+b^x}=\dfrac32(\ln a+\ln b)=\ln(ab)^{\frac32}$`,
          R`**++还原++** $\lim\limits_{x\to0}y=\mathrm e^{\ln(ab)^{\frac32}}=(ab)^{\frac32}$（吉米【280】p82–83）`
        ],
        pitfall: R`!!求出 $\lim\ln y$ 就当答案!!，忘了还原成 $\mathrm e^{(\cdot)}$；把 $1^\infty$ 当成 1`,
        practice: "教材 例9（p133）、习题3-2 第1(14)(15)(16)题、第4题（p133–134，答案习题全解 p98–99）；吉米【278】–【282】（p82–83）；30讲 例1.32、例1.33（p61–62）；武忠祥 例2（p19）；检验：1000题基础篇第1章 12、16题"
      },
      {
        id: "t6", name: "数列的未定式：先连续化再洛必达",
        signal: R`求 ==$\lim\limits_{n\to\infty}$== 的未定式，式子里是 $n$（如 $n^3(a^{\frac1n}-a^{\sin\frac1n})$、$(n\tan\frac1n)^{n^2}$）`,
        example: { q: R`求 $\lim\limits_{n\to\infty}n^3\left(a^{\frac1n}-a^{\sin\frac1n}\right)$（$a>0$）。`, src: "吉米【272】p81" },
        idea: {
          key: R`==数列不能直接求导==：先把 $n$ 换成连续变量 $x$，求函数极限 $\lim\limits_{x\to+\infty}f(x)$；函数极限存在，数列极限就等于它。常再作倒代换 $t=\frac1x$。`,
          how: [
            R`++连续化++：把 $n$ 换成 $x$，求 $\lim\limits_{x\to+\infty}f(x)$`,
            R`++倒代换 $t=\frac1x$++，$t\to0^+$，化成熟悉的 $x\to0$ 型`,
            R`++化简、等价替换，再洛必达++`,
            R`++写结论++：函数极限存在，所以数列极限等于它`
          ],
          refs: [
            { src: "吉米【272】分析 p81", text: R`数列求极限若需使用洛必达法则应先连续化` },
            { src: "武忠祥 p33", text: R`求数列不定式极限和求函数不定式极限的方法完全相同，但对数列极限不能直接用洛必达法则，需改写成函数极限后再用洛必达法则` }
          ]
        },
        think: R`$n$ 只能取正整数，不能对它求导，先换成 $x\to+\infty$。再令 $t=\frac1x$，变成 $\dfrac{a^t-a^{\sin t}}{t^3}$；提出 $a^{\sin t}$ 后用 $a^u-1\sim u\ln a$。`,
        first: R`连续化：求 $\lim\limits_{x\to+\infty}x^3\left(a^{\frac1x}-a^{\sin\frac1x}\right)$`,
        steps: [
          R`++连续化并倒代换++：令 $t=\dfrac1x$，$\lim\limits_{x\to+\infty}x^3\left(a^{\frac1x}-a^{\sin\frac1x}\right)=\lim\limits_{t\to0^+}\dfrac{a^t-a^{\sin t}}{t^3}$`,
          R`++提出非零因子++：$a^t-a^{\sin t}=a^{\sin t}\left(a^{t-\sin t}-1\right)$，$a^{\sin t}\to1$`,
          R`++等价替换++：$a^{t-\sin t}-1\sim(t-\sin t)\ln a$，所以 $=\ln a\cdot\lim\limits_{t\to0^+}\dfrac{t-\sin t}{t^3}$`,
          R`++洛必达两次++：$\lim\dfrac{t-\sin t}{t^3}=\lim\dfrac{1-\cos t}{3t^2}=\lim\dfrac{\sin t}{6t}=\dfrac16$`,
          R`**++结论++** 函数极限为 $\dfrac16\ln a$，所以原数列极限 $=\dfrac16\ln a$（吉米【272】p81）`
        ],
        pitfall: R`!!直接对 $n$ 求导!!；提因子时提成 $a^t$ 也可以，但要保证剩下的是 $a^{(\cdot)}-1$ 且指数 $\to0$`,
        practice: "吉米【272】【282】（p81、p83）；武忠祥 数列不定式 例1、例2（p33–34）；检验：1000题基础篇第1章 10题（函数形式）"
      },
      {
        id: "t7", name: "无穷小的比阶、确定参数",
        signal: R`"==……与 $x^n$ 是同阶无穷小，求 $n$==""==是比 $h$ 高阶的无穷小，确定 $a,b$==""极限等于某数，求参数"`,
        example: { q: R`设 $x\to0$ 时，$\mathrm e^{\tan x}-\mathrm e^x$ 与 $x^n$ 是同阶无穷小，则 $n$ 为（　）。(A) 1　(B) 2　(C) 3　(D) 4`, src: "吉米【283】p83" },
        idea: {
          key: R`==把比阶翻译成极限==：$\lim\dfrac{\alpha}{x^n}=c\neq0$；先提非零因子、等价替换，再洛必达，看==极限为非零常数时 $n$ 取几==。求参数时==分母趋于 0 而极限存在，分子必趋于 0==，逐次列方程。`,
          how: [
            R`++写出比值的极限++：$\lim\dfrac{\alpha(x)}{x^n}$ 或题目给的极限`,
            R`++提出非零因子、等价替换++，把式子化简`,
            R`++洛必达++，每求一次导，含参数的题就由"分母 $\to0$ ⇒ 分子 $\to0$"列一个方程`,
            R`++令极限为非零常数（或给定值），解出 $n$ 或参数++`
          ],
          refs: [
            { src: "吉米【286】p84", text: R`$\lim\limits_{h\to0}[af(h)+bf(2h)-f(0)]=(a+b-1)f(0)=0$。由于 $f(0)\neq0$，故必有 $a+b-1=0$。又由洛必达法则……$(a+2b)f'(0)=0$` },
            { src: "30讲 p49", text: R`当遇到"$\frac00$"型未定式时，是看分子、分母中谁趋于零的速度快` },
            { src: "30讲 p47", text: R`若 $\lim\limits_{x\to0}\frac{f(x)}{g(x)}=A\neq0$，且 $\lim\limits_{x\to0}f(x)=0$，则 $\lim\limits_{x\to0}g(x)=0$` }
          ]
        },
        think: R`同阶就是 $\lim\dfrac{\mathrm e^{\tan x}-\mathrm e^x}{x^n}=c\neq0$。提出 $\mathrm e^x$ 后，$\mathrm e^{\tan x-x}-1\sim\tan x-x$，问题变成 $\tan x-x$ 是几阶无穷小。`,
        first: R`提出非零因子：$\mathrm e^{\tan x}-\mathrm e^x=\mathrm e^x\left(\mathrm e^{\tan x-x}-1\right)$`,
        steps: [
          R`++提因子、等价替换++：$\mathrm e^x\to1$，$\mathrm e^{\tan x-x}-1\sim\tan x-x$，所以 $\lim\dfrac{\mathrm e^{\tan x}-\mathrm e^x}{x^n}=\lim\dfrac{\tan x-x}{x^n}$`,
          R`++洛必达++：$=\lim\dfrac{\sec^2x-1}{nx^{n-1}}=\dfrac1n\lim\dfrac{\tan^2x}{x^{n-1}}$`,
          R`++等价替换++：$\tan^2x\sim x^2$，$=\dfrac1n\lim\dfrac{x^2}{x^{n-1}}$`,
          R`**++令极限为非零常数++** 需 $n-1=2$，即 ==$n=3$==，选 (C)（吉米【283】p83）`
        ],
        pitfall: R`把 $\tan x-x$ 当成 $x-x=0$，!!加减项做等价替换!!；没先提 $\mathrm e^x$，直接对 $\mathrm e^{\tan x}-\mathrm e^x$ 求导，式子变繁`,
        practice: "吉米【265】（p79–80）、【283】–【286】（p83–84）；30讲 例1.34 方法二（p62–63）；检验：1000题基础篇第1章 5、7、13题"
      },
      {
        id: "t8", name: "连续性：求参数、补充定义",
        signal: R`"==$f(x)$ 在 $x=0$ 处连续，则 $a=$==""==补充定义 $f(x_0)$ 使 $f$ 连续==""讨论在某点的连续性"，分段点处的极限是未定式`,
        example: { q: R`若 $f(x)=\begin{cases}\dfrac{\sin2x+\mathrm e^{2ax}-1}x,&x\neq0\\a,&x=0\end{cases}$ 在 $(-\infty,+\infty)$ 上连续，则 $a=$ ____。`, src: "吉米【287】p84" },
        idea: {
          key: R`==连续 ⇔ $\lim\limits_{x\to x_0}f(x)=f(x_0)$==：用洛必达（或等价替换）求出分段点处的极限，令它等于函数值，解出参数；分段点两侧表达式不同时==分别求左、右极限==。`,
          how: [
            R`++写出连续的条件++：$\lim\limits_{x\to x_0}f(x)=f(x_0)$（两侧不同就分左右）`,
            R`++判型，求极限++：洛必达或等价替换`,
            R`++列方程解参数++，或令补充的函数值等于极限`
          ],
          refs: [
            { src: "吉米【287】p84", text: R`若 $f(x)$ 在 $(-\infty,+\infty)$ 连续，则 $f(x)$ 在 $x=0$ 处连续，即 $\lim\limits_{x\to0}f(x)=f(0)=a$` },
            { src: "吉米【289】点评 p84", text: R`补充定义使 $f(x)$ 在 $\left[\frac12,1\right]$ 上连续，也就是求 $f(x)$ 左连续问题……在运算过程中，使用了洛必达法则及等价无穷小代换` }
          ]
        },
        think: R`$x=0$ 是分段点，连续要求 $\lim\limits_{x\to0}f(x)=a$。极限是 $\frac00$ 型，洛必达一次得到含 $a$ 的式子。`,
        first: R`写出条件：$\lim\limits_{x\to0}\dfrac{\sin2x+\mathrm e^{2ax}-1}x=a$`,
        steps: [
          R`++写条件++：$f$ 在 $x=0$ 处连续，即 $\lim\limits_{x\to0}f(x)=f(0)=a$`,
          R`++判型++：$x\to0$ 时分子 $\to0+1-1=0$，分母 $\to0$，$\frac00$ 型`,
          R`++洛必达++：$\lim\limits_{x\to0}\dfrac{2\cos2x+2a\mathrm e^{2ax}}1=2+2a$`,
          R`**++列方程++** $2+2a=a$，所以 ==$a=-2$==（吉米【287】p84）`
        ],
        pitfall: R`!!把 $f(0)=a$ 忘了，直接写 $2+2a=0$!!，得到 $a=-1$；左右表达式不同时只算一侧`,
        practice: "教材 习题3-2 第4题（p134，答案习题全解 p98–99）；吉米【287】–【290】（p84–85）；检验：1000题基础篇第1章 19、20题"
      },
      {
        id: "t9", name: "判断能否用洛必达（条件不满足时换方法）",
        signal: R`"==验证极限存在，但不能用洛必达法则得出=="；求导后出现 $\sin x$、$\cos x$（$x\to\infty$）或 $\cos\frac1x$（$x\to0$）这类没有极限的振荡项`,
        example: { q: R`验证极限 $\lim\limits_{x\to\infty}\dfrac{x+\sin x}x$ 存在，但不能用洛必达法则得出。`, src: "教材 习题3-2 第2题 p134" },
        idea: {
          key: R`==洛必达只是充分条件==：$\lim\dfrac{f'}{F'}$ 不存在（且不是 $\infty$）时法则失效，但原极限可能存在。这时==换方法==：拆项、"有界量乘无穷小"、夹逼准则。`,
          how: [
            R`++先试洛必达++：分子、分母分别求导，看 $\lim\dfrac{f'}{F'}$ 是否存在`,
            R`++说明不存在的原因++：振荡项（$\cos x$、$\cos\frac1x$）没有极限`,
            R`++换方法求原极限++：拆项、有界函数乘无穷小、夹逼`
          ],
          refs: [
            { src: "教材 p133", text: R`当定理条件不满足时，所求极限却不一定不存在，这就是说，当 $\lim\frac{f'(x)}{F'(x)}$ 不存在时（等于无穷大的情况除外），$\lim\frac{f(x)}{F(x)}$ 仍可能存在` },
            { src: "30讲 p48", text: R`对于 $\lim\frac{f(x)}{F(x)}=\lim\frac{f'(x)}{F'(x)}$，"右存在，则左存在；但左存在，并不意味着右一定存在"` }
          ]
        },
        think: R`分子分母都 $\to\infty$，形式上是 $\frac\infty\infty$。但求导后是 $1+\cos x$，$x\to\infty$ 时在 $0$ 和 $2$ 之间振荡，没有极限，法则失效。原式可以拆成 $1+\dfrac{\sin x}x$。`,
        first: R`求导后看比值：$\dfrac{(x+\sin x)'}{x'}=1+\cos x$`,
        steps: [
          R`++试洛必达++：$\lim\limits_{x\to\infty}\dfrac{(x+\sin x)'}{(x)'}=\lim\limits_{x\to\infty}(1+\cos x)$`,
          R`++说明失效++：$\cos x$ 在 $[-1,1]$ 振荡，$1+\cos x$ 没有极限，也不是 $\infty$，不满足条件 (3)`,
          R`++拆项++：$\dfrac{x+\sin x}x=1+\dfrac{\sin x}x$`,
          R`++有界量乘无穷小++：$|\sin x|\leqslant1$，$\dfrac1x\to0$，所以 $\dfrac{\sin x}x\to0$`,
          R`**++结论++** 原极限 $=1$，存在，但不能用洛必达法则得出（习题全解 p98）`
        ],
        pitfall: R`!!由"求导后极限不存在"推出"原极限不存在"!!；误认为满足 $\frac\infty\infty$ 型就一定能用洛必达`,
        practice: "教材 习题3-2 第2、3题（p134，答案习题全解 p98）；30讲 p48 例子；武忠祥 例4 命题(1)（p26）"
      },
      {
        id: "t10", tag: "研", name: "抽象函数：用洛必达判断极限命题",
        signal: R`选择题给出 $f$ 可导、$\lim f'(x)$ 或 $\lim[f'(x)+f(x)]$ 存在之类的条件，问 ==$\lim\dfrac{f(x)}x$、$\lim f(x)$ 是否存在==`,
        example: { q: R`判断下列命题是否正确：(1) 若 $f(x)$ 可导，则当 $\lim\limits_{x\to+\infty}\dfrac{f(x)}x$ 存在时，$\lim\limits_{x\to+\infty}f'(x)$ 存在；(2) 若 $\lim\limits_{x\to+\infty}f'(x)$ 存在，则 $\lim\limits_{x\to+\infty}\dfrac{f(x)}x$ 存在；(3) 若 $\lim\limits_{x\to+\infty}[f'(x)+f(x)]$ 存在，则 $\lim\limits_{x\to+\infty}f(x)$ 存在。`, src: "武忠祥 第1章 例4 p26（原题四个命题，这里取前三个）" },
        idea: {
          key: R`洛必达==只能"由右推左"==：已知 $\lim\dfrac{f'}{F'}$ 存在，才能得到 $\lim\dfrac fF$ 存在。"由左推右"的命题找反例（常用 $\sin x$）。$\lim[f'+f]$ 型==乘 $\mathrm e^x$ 凑成 $\dfrac{\mathrm e^xf(x)}{\mathrm e^x}$==。`,
          how: [
            R`++看命题方向++：已知的是导数的极限（右）还是原函数的极限（左）`,
            R`++由右推左：构造分式用洛必达++，$\frac{f(x)}x$ 直接用；$f'+f$ 写成 $\dfrac{(\mathrm e^xf)'}{(\mathrm e^x)'}$`,
            R`++由左推右：找反例++，$\sin x$、$\sin x^2$ 之类振荡函数`
          ],
          refs: [
            { src: "武忠祥 例4 p26", text: R`命题(1)不正确。令 $f(x)=\sin x$，则 $\lim\limits_{x\to+\infty}\frac{f(x)}x=\lim\limits_{x\to+\infty}\frac{\sin x}x=0$，但 $\lim\limits_{x\to+\infty}f'(x)=\lim\limits_{x\to+\infty}\cos x$ 不存在` },
            { src: "武忠祥 例4 p26", text: R`$\lim\limits_{x\to+\infty}f(x)=\lim\limits_{x\to+\infty}\frac{\mathrm e^xf(x)}{\mathrm e^x}=\lim\limits_{x\to+\infty}\frac{\mathrm e^x[f'(x)+f(x)]}{\mathrm e^x}=\lim\limits_{x\to+\infty}[f'(x)+f(x)]$` }
          ]
        },
        think: R`(1) 是"由左推右"，洛必达不保证，找反例；(2)(3) 是"由右推左"，构造合适的分式。(2) 的分母 $x\to+\infty$；武忠祥指出 $\frac\infty\infty$ 型中"分子 $\to\infty$"这一条件可以略去，所以只要分母趋于无穷就能用。`,
        first: R`分清方向：(1) 已知原函数的极限，(2)(3) 已知导数的极限`,
        steps: [
          R`++(1) 找反例++：$f(x)=\sin x$，$\dfrac{\sin x}x\to0$ 存在，但 $f'(x)=\cos x$ 没有极限，==(1) 错==`,
          R`++(2) 由右推左++：$\lim\limits_{x\to+\infty}\dfrac{f(x)}x=\lim\limits_{x\to+\infty}\dfrac{f'(x)}1$，右边存在，所以左边存在，==(2) 对==（武忠祥 p26）`,
          R`++(3) 凑分式++：$f(x)=\dfrac{\mathrm e^xf(x)}{\mathrm e^x}$，$(\mathrm e^xf)'=\mathrm e^x(f'+f)$，$(\mathrm e^x)'=\mathrm e^x$`,
          R`**++(3) 由右推左++** $\lim f(x)=\lim\dfrac{\mathrm e^x[f'(x)+f(x)]}{\mathrm e^x}=\lim[f'(x)+f(x)]$ 存在，==(3) 对==（武忠祥 p26）`
        ],
        pitfall: R`!!把洛必达当成双向等价!!，认为 (1) 也对；(3) 想不到乘 $\mathrm e^x$`,
        practice: "武忠祥 第1章 例4（p26）；对照本节题型 9"
      }
    ],

    pitfalls: [
      { wrong: R`$\lim\limits_{x\to1}\dfrac{6x}{6x-2}$ 还可以继续用洛必达，得 $\lim\dfrac66=1$`, why: R`$x\to1$ 时 $\dfrac{6x}{6x-2}\to\dfrac64$，已经不是未定式`, right: R`每用一次先判型，不是未定式就直接代入，结果是 $\frac32$（教材 例2 p131）`, test: R`$\lim\limits_{x\to0}\dfrac{\mathrm e^x-1}{x+x^2}$，第一次洛必达后还能再用吗？`, ans: R`不能：$\dfrac{\mathrm e^x}{1+2x}\to1$ 已不是未定式，答案 1`, link: "题型 1" },
      { wrong: R`洛必达是对商 $\dfrac{f}{F}$ 求导`, why: R`法则是分子、分母各自求导：$\lim\frac fF=\lim\frac{f'}{F'}$，不是 $\left(\frac fF\right)'$`, right: R`分别写出 $f'$、$F'$ 再相除（教材 p130）`, test: R`$\lim\limits_{x\to0}\dfrac{\sin3x}{\sin5x}=$？`, ans: R`$\lim\dfrac{3\cos3x}{5\cos5x}=\dfrac35$`, link: "知识点 2" },
      { wrong: R`$\lim\dfrac{f'}{F'}$ 不存在，所以 $\lim\dfrac fF$ 也不存在`, why: R`洛必达只是充分条件，右边不存在（且不是 $\infty$）时什么也推不出`, right: R`换方法求原极限（教材 p133；习题3-2 第2、3题）`, test: R`$\lim\limits_{x\to0}\dfrac{x^2\sin\frac1x}{\sin x}=$？`, ans: R`$\lim\dfrac x{\sin x}\cdot x\sin\dfrac1x=1\cdot0=0$（习题全解 p98）`, link: "题型 9" },
      { wrong: R`只要是 $\frac00$ 型，就一路求导到底`, why: R`求导可能让式子越来越繁，甚至循环`, right: R`先化简：非零因子先求出、等价替换、恒等变形（教材 例10 p133）`, test: R`$\lim\limits_{x\to0}\dfrac{\tan x-x}{x^2\sin x}=$？`, ans: R`先换 $\sin x\sim x$，$=\lim\dfrac{\tan x-x}{x^3}=\dfrac13$`, link: "题型 1" },
      { wrong: R`$\lim\limits_{x\to0}\dfrac{\tan x-\sin x}{x^3}$：$\tan x\sim x$，$\sin x\sim x$，分子换成 $x-x=0$，极限为 0`, why: R`等价替换只能用于乘除的因子，加减中的项不能单独替换`, right: R`$\tan x-\sin x=\tan x(1-\cos x)\sim x\cdot\frac12x^2$，极限为 $\frac12$；或者直接洛必达（武忠祥 p17–18）`, test: R`$\lim\limits_{x\to0}\dfrac{\arctan x-x}{x^3}=$？`, ans: R`$-\dfrac13$（洛必达一次后 $\dfrac{-x^2}{3x^2(1+x^2)}$）`, link: "题型 1" },
      { wrong: R`数列极限 $\lim\limits_{n\to\infty}n\left(\arctan n-\dfrac\pi2\right)$ 可以直接对 $n$ 求导`, why: R`$n$ 只取正整数，数列没有导数`, right: R`先连续化成 $\lim\limits_{x\to+\infty}$ 的函数极限，再用洛必达（武忠祥 p33）`, test: R`上面这个极限等于多少？`, ans: R`$\lim\limits_{x\to+\infty}\dfrac{\arctan x-\frac\pi2}{\frac1x}=\lim\dfrac{\frac1{1+x^2}}{-\frac1{x^2}}=-1$（武忠祥 p34）`, link: "题型 6" },
      { wrong: R`$0\cdot\infty$ 型下放哪个因子都一样`, why: R`把 $\ln x$ 下放成 $\frac1{\ln x}$，求导后反而更复杂`, right: R`简单因式（$x^\alpha$、$\mathrm e^{\beta x}$）下放，$\ln$、反三角留在分子（30讲 p58）`, test: R`$\lim\limits_{x\to0^+}x^2\ln x=$？写成哪种分式？`, ans: R`$\dfrac{\ln x}{x^{-2}}$，$=\lim\dfrac{\frac1x}{-2x^{-3}}=\lim\left(-\dfrac{x^2}2\right)=0$`, link: "题型 3" },
      { wrong: R`$\infty-\infty=0$`, why: R`两个无穷大相减是未定式，结果可以是任何数`, right: R`通分化成 $\frac00$ 型再算（教材 例8 p133）`, test: R`$\lim\limits_{x\to0}\left(\dfrac1{x^2}-\dfrac1{x\tan x}\right)=$？`, ans: R`$\dfrac{\tan x-x}{x^2\tan x}\to\dfrac13$（吉米【275】p81）`, link: "题型 4" },
      { wrong: R`$1^\infty=1$`, why: R`底趋于 1 但不等于 1，指数趋于无穷，两者"拉锯"，结果不定`, right: R`取对数：$\lim u^v=\mathrm e^{\lim v\ln u}$（教材 例9 p133）`, test: R`$\lim\limits_{x\to0}(\mathrm e^x+x)^{\frac1x}=$？`, ans: R`$\mathrm e^2$（习题3-2 第1(14)题，习题全解 p98）`, link: "题型 5" },
      { wrong: R`$\lim\limits_{x\to0^+}x^x$：$\ln y=x\ln x\to0$，所以答案是 0`, why: R`求出的是 $\ln y$ 的极限，还没还原`, right: R`$\lim y=\mathrm e^{\lim\ln y}=\mathrm e^0=1$（教材 例9 p133）`, test: R`$\lim\limits_{x\to0^+}x^{\sin x}=$？`, ans: R`$\mathrm e^0=1$（习题全解 p98）`, link: "题型 5" },
      { wrong: R`$0^0$ 一定等于 0（底是 0，几次方都是 0）`, why: R`底趋于 0 但不等于 0，指数也趋于 0，是未定式`, right: R`取对数化成 $0\cdot\infty$（教材 p132–133）`, test: R`$\lim\limits_{x\to0^+}\left(\dfrac1x\right)^{\tan x}$ 是哪种类型？等于多少？`, ans: R`$\infty^0$ 型，$=\mathrm e^{\lim\tan x\ln\frac1x}=\mathrm e^0=1$（习题全解 p98）`, link: "题型 5" },
      { wrong: R`$\lim\limits_{x\to+\infty}\dfrac{\mathrm e^x+\mathrm e^{-x}}{\mathrm e^x-\mathrm e^{-x}}$ 用洛必达就能算出来`, why: R`求导一次得 $\dfrac{\mathrm e^x-\mathrm e^{-x}}{\mathrm e^x+\mathrm e^{-x}}$，再求导又回到原式，陷入循环`, right: R`分子、分母同除以 $\mathrm e^x$：$\dfrac{1+\mathrm e^{-2x}}{1-\mathrm e^{-2x}}\to1$`, test: R`$\lim\limits_{x\to+\infty}\dfrac{\sqrt{1+x^2}}x=$？`, ans: R`$1$（洛必达会循环，直接 $\sqrt{\frac1{x^2}+1}\to1$）`, link: "题型 2" },
      { wrong: R`$\ln x$、$x^{100}$、$\mathrm e^x$ 在 $x\to+\infty$ 时增长速度差不多`, why: R`对数 ≪ 幂 ≪ 指数，$\lim\frac{x^n}{\mathrm e^{\lambda x}}=0$ 对任何 $n>0$ 成立`, right: R`记住 $\ln^\alpha x\ll x^\beta\ll a^x$（教材 例5、例6 p132；30讲 p50）`, test: R`$\lim\limits_{x\to+\infty}\dfrac{\ln(x\ln x)}{x^a}$（$a>0$）$=$？`, ans: R`$0$（吉米【269】p81）`, link: "题型 2" },
      { wrong: R`$\mathrm e^{\tan x}-\mathrm e^x$ 中 $\tan x\sim x$，所以它是比 $x$ 高阶的无穷小，阶数不好定`, why: R`要先化成乘积 $\mathrm e^x(\mathrm e^{\tan x-x}-1)\sim\tan x-x$，再看 $\tan x-x$ 的阶`, right: R`$\tan x-x\sim\frac13x^3$，所以是 3 阶（吉米【283】p83）`, test: R`$x\to0$ 时 $\ln\dfrac{2+x}{2+\sin x}$ 与 $x^n$ 同阶，$n=$？`, ans: R`$n=3$（等价于 $\dfrac{x-\sin x}{2+\sin x}\sim\dfrac{x^3}{12}$）`, link: "题型 7" },
      { wrong: R`$f(x)$ 在 $x=0$ 处连续，所以 $\lim\limits_{x\to0}f(x)=0$`, why: R`连续是"极限等于函数值"，不是"极限等于 0"`, right: R`令 $\lim\limits_{x\to0}f(x)=f(0)$（吉米【287】p84）`, test: R`$f(x)=(\cos x)^{x^{-2}}$（$x\neq0$），$f(0)=a$，在 0 处连续，$a=$？`, ans: R`$\mathrm e^{-\frac12}$（吉米【288】p84）`, link: "题型 8" },
      { wrong: R`$\lim\limits_{x\to+\infty}\dfrac{f(x)}x$ 存在，所以 $\lim\limits_{x\to+\infty}f'(x)$ 也存在`, why: R`洛必达只能由导数比的极限推出原式的极限，反过来不成立`, right: R`反例 $f(x)=\sin x$（武忠祥 例4 p26）`, test: R`$f(x)=\sin x$ 时，$\lim\limits_{x\to+\infty}\dfrac{f(x)}x$ 和 $\lim\limits_{x\to+\infty}f'(x)$ 各是多少？`, ans: R`前者 $0$；后者 $\lim\cos x$ 不存在`, link: "题型 10" },
      { wrong: R`$\dfrac0\infty$、$\dfrac\infty0$ 也是未定式，可以用洛必达`, why: R`它们的结果是确定的：$\frac0\infty\to0$，$\frac\infty0\to\infty$`, right: R`洛必达只直接用于 $\frac00$、$\frac\infty\infty$（30讲 p48；教材 p129）`, test: R`$\lim\limits_{x\to0^+}\dfrac{\ln x}x=$？`, ans: R`$-\infty$（分子 $\to-\infty$，分母 $\to0^+$，不是未定式）`, link: "知识点 1" },
      { wrong: R`$\lim\limits_{x\to\frac\pi2}\dfrac{\ln\sin x}{(\pi-2x)^2}$ 求导时，分母 $(\pi-2x)^2$ 的导数是 $2(\pi-2x)$`, why: R`漏乘内层导数 $-2$`, right: R`分母导数是 $2(\pi-2x)\cdot(-2)=-4(\pi-2x)$，答案 $-\frac18$（习题全解 p98；吉米【260】p78）`, test: R`$\lim\limits_{x\to\pi}\dfrac{\sin3x}{\tan5x}=$？`, ans: R`$\lim\dfrac{3\cos3x}{5\sec^25x}=-\dfrac35$（习题全解 p98）`, link: "题型 1" }
    ]
  });
})();
