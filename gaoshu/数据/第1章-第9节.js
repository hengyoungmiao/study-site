/*
类型: 题型
标题: 高等数学 第1章 第9节 连续函数的运算与初等函数的连续性 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-19
更新日期: 2026-10-19
状态: 完成

页码一律是印刷页。教材 = 同济第八版上册；30讲 = 张宇基础30讲·高数分册；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；
习题全解 = 同济第八版上册习题全解指导；1000题 = 张宇1000题基础篇（只引题号）。
1.7 已经讲过等价无穷小代换和 1^∞ 型；这一节讲它们的来源（连续性），题型侧重"代入、交换、换元成 □→0"。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "1.9",
    chapter: 1,
    title: "连续函数的运算与初等函数的连续性",
    pages: "教材 p59–64",
    sources: ["教材 第一章第九节 p59–64", "习题全解 习题1-9 p36–40", "30讲 第1讲 p25、p62、p65", "吉米 第1章【79】p22、【91】p25", "1000题 第1章 10、15、16、20 题"],
    updated: "2026-10-19",

    framework: {
      main: R`连续性经过四则运算、反函数、复合都保得住，所以基本初等函数、初等函数在定义区间内都连续。由此得到两件好用的事：定义区间内的点求极限直接代入；外层连续时，极限号可以移进函数里面。把极限号移进对数，就得到 $\ln(1+x)$、$\mathrm e^x-1$、$(1+x)^\alpha-1$ 三个等价和幂指函数的极限公式。`,
      nodes: [
        { id: "INV", go: "p2", col: 0, row: 0, kind: "map", label: "反函数", sub: "单调连续 ⇒ 反函数也单调连续" },
        { id: "OP", go: "p1", col: 1, row: 0, kind: "map", label: "四则运算", sub: R`$f\pm g$、$fg$、$\frac fg$（$g(x_0)\neq0$）` },
        { id: "BASIC", go: "p5", col: 0, row: 1, kind: "func", label: "基本初等函数", sub: "在定义域内连续" },
        { id: "ELEM", go: "p6", col: 1, row: 1, kind: "func", label: "初等函数", sub: "在定义区间内连续" },
        { id: "COMP", go: "p3", col: 2, row: 1, kind: "map", label: "复合函数", sub: R`$\lim f[g(x)]=f[\lim g(x)]$` },
        { id: "SUB", go: "p7", col: 0, row: 2, kind: "prop", label: "代入求极限", sub: R`$\lim\limits_{x\to x_0}f(x)=f(x_0)$` },
        { id: "EQ", go: "p8", col: 1, row: 2, kind: "build", label: "三个等价", sub: R`$\ln(1+x)$、$\mathrm e^x-1$、$(1+x)^\alpha-1$` },
        { id: "POW", go: "p11", col: 2, row: 2, kind: "build", label: "幂指函数", sub: R`$\lim u^v=a^b$（$a>0$）` }
      ],
      edges: [
        { from: "INV", to: "BASIC", label: "得反三角、对数" },
        { from: "BASIC", to: "ELEM", label: "有限次运算" },
        { from: "OP", to: "ELEM", label: "四则" },
        { from: "COMP", to: "ELEM", label: "复合" },
        { from: "ELEM", to: "SUB", label: "极限 = 函数值" },
        { from: "COMP", to: "EQ", label: "lim 移进 ln" },
        { from: "COMP", to: "POW", label: R`写成 $\mathrm e^{v\ln u}$` }
      ],
      keys: [
        { q: R`初等函数在哪里连续？求极限时怎么用？`, a: R`一切初等函数在其定义区间内连续。所以 $x_0$ 在定义区间内时，$\lim\limits_{x\to x_0}f(x)=f(x_0)$，直接代入（教材 p62；30讲 p65）。` },
        { q: R`什么时候可以把极限号移到函数里面？`, a: R`复合函数 $f[g(x)]$：$\lim g(x)=u_0$，且外层 $f$ 在 $u_0$ 连续，就有 $\lim f[g(x)]=f[\lim g(x)]$。外层连续是关键（教材 p60–61 定理 3）。` },
        { q: R`三个常用等价是怎么来的？`, a: R`把极限号移进对数：$\frac{\ln(1+x)}x=\ln(1+x)^{\frac1x}\to\ln\mathrm e=1$；再换元得 $\mathrm e^x-1\sim x$（$a^x-1\sim x\ln a$）、$(1+x)^\alpha-1\sim\alpha x$（教材 p62 例 5–7）。` },
        { q: R`幂指函数 $u^v$ 的极限怎么求？`, a: R`$\lim u=a>0$、$\lim v=b$ 时 $\lim u^v=a^b$；若是 $1^\infty$ 型，就用 $\mathrm e^{\lim v(u-1)}$（教材 p63；30讲 p62）。` }
      ]
    },

    points: [
      {
        group: "一、连续函数的运算",
        items: [
          {
            id: "p1", kind: "定理", name: "定理 1：四则运算", page: "教材 p59",
            body: R`$f(x)$、$g(x)$ 在点 $x_0$ 连续，则 $f\pm g$、$f\cdot g$ 及 $\dfrac fg$（当 $g(x_0)\neq0$ 时）都在 $x_0$ 连续。`,
            notes: [R`由连续的定义和极限的四则运算法则直接得到（教材 p59）`, R`例 1：$\tan x=\frac{\sin x}{\cos x}$、$\cot x$ 在定义域内连续`],
            quiz: R`$f$ 在 $x_0$ 连续、$g$ 在 $x_0$ 间断，$f+g$ 在 $x_0$ 一定间断吗？$f\cdot g$ 呢？`
          },
          {
            id: "p2", kind: "定理", name: "定理 2：反函数的连续性", page: "教材 p60",
            body: R`$y=f(x)$ 在区间 $I_x$ 上单调增加（减少）且连续，则反函数 $x=f^{-1}(y)$ 在对应区间 $I_y=\{y\mid y=f(x),x\in I_x\}$ 上也单调增加（减少）且连续。`,
            notes: [R`例 2：$\sin x$ 在 $\left[-\frac\pi2,\frac\pi2\right]$ 上单增连续，所以 $\arcsin x$ 在 $[-1,1]$ 上单增连续；四个反三角函数在定义域内都连续（教材 p60）`, R`条件是"单调且连续"，两个都要`],
            quiz: R`$\arctan x$ 在哪个区间上连续？它是由哪个函数在哪个区间上的单调性得到的？`
          },
          {
            id: "p3", kind: "定理", name: "定理 3：复合函数的极限（极限号移进函数）", page: "教材 p60–61",
            body: R`$\lim\limits_{x\to x_0}g(x)=u_0$，$y=f(u)$ 在 $u=u_0$ 连续，则 $\lim\limits_{x\to x_0}f[g(x)]=\lim\limits_{u\to u_0}f(u)=f(u_0)$，即 $\lim\limits_{x\to x_0}f[g(x)]=f\left[\lim\limits_{x\to x_0}g(x)\right]$。`,
            notes: [
              R`两种用法：换元 $u=g(x)$ 化为 $\lim\limits_{u\to u_0}f(u)$；或者函数符号和极限号交换次序（教材 p61）`,
              R`内层只要求有极限，不要求连续；外层必须在 $u_0$ 连续`,
              R`把 $x\to x_0$ 换成 $x\to\infty$ 同样成立（教材 p61）`
            ],
            quiz: R`$\lim\limits_{x\to3}\sqrt{\dfrac{x-3}{x^2-9}}$ 怎么用定理 3 求？结果是多少？`
          },
          {
            id: "p4", kind: "定理", name: "定理 4：复合函数的连续性", page: "教材 p61",
            body: R`$u=g(x)$ 在 $x_0$ 连续，$g(x_0)=u_0$，$y=f(u)$ 在 $u_0$ 连续，则 $y=f[g(x)]$ 在 $x_0$ 连续。`,
            notes: [R`例 4：$\sin\frac1x$ 在 $(-\infty,0)$、$(0,+\infty)$ 内连续（教材 p61）`, R`和定理 3 的区别：定理 4 要求内层也连续`],
            quiz: R`$\mathrm e^{\sin x}$ 为什么处处连续？用了哪两个函数的连续性？`
          }
        ]
      },
      {
        group: "二、初等函数的连续性",
        items: [
          {
            id: "p5", kind: "结论", name: "基本初等函数在定义域内连续", page: "教材 p61–62",
            body: R`指数函数 $a^x$ 在 $(-\infty,+\infty)$ 内单调连续；由定理 2，对数函数 $\log_ax$ 在 $(0,+\infty)$ 内单调连续；幂函数 $x^\mu=a^{\mu\log_ax}$ 在 $(0,+\infty)$ 内连续（由定理 4），在定义域内连续。所以基本初等函数在定义域内都连续。`,
            notes: [R`三角、反三角函数的连续性在 1.8 和本节例 2 已得到`],
            quiz: R`为什么说 $x^\mu$ 在 $(0,+\infty)$ 内连续？它被看成哪两个函数的复合？`
          },
          {
            id: "p6", kind: "定理", name: "初等函数在定义区间内连续", page: "教材 p62；30讲 p65",
            body: R`一切初等函数在其定义区间内都是连续的。定义区间就是包含在定义域内的区间。`,
            notes: [
              R`说"定义区间"不说"定义域"：初等函数的定义域可能含孤立点，如 $y=\sqrt{\cos\pi x-1}$ 的定义域是 $\{0,\pm2,\pm4,\cdots\}$（30讲 p25）`,
              R`分段函数一般不是初等函数，分段点要单独讨论；$|x|=\sqrt{x^2}$ 是例外（30讲 p25）`,
              R`幂指函数 $u^v=\mathrm e^{v\ln u}$ 也是初等函数（30讲 p25）`,
              R`所以找间断点只看无定义点和分段点（30讲 p65）`
            ],
            quiz: R`$f(x)=\dfrac{x^2-1}{x-2}$ 的连续区间是什么？`
          },
          {
            id: "p7", kind: "方法", name: "代入法求极限", page: "教材 p62",
            body: R`$f(x)$ 是初等函数，$x_0$ 是它定义区间内的点，则 $\lim\limits_{x\to x_0}f(x)=f(x_0)$。`,
            notes: [R`例：$\lim\limits_{x\to0}\sqrt{1-x^2}=1$；$\lim\limits_{x\to\frac\pi2}\ln\sin x=0$（教材 p62）`, R`代入前先确认 $x_0$ 在定义区间内；代入得 $\frac00$、$\frac{\square}{0}$ 时说明 $x_0$ 不在定义区间内，要换方法`],
            quiz: R`$\lim\limits_{x\to2}\dfrac{x^2-1}{x-2}$ 能直接代入吗？结果是什么？`
          }
        ]
      },
      {
        group: "三、三个等价和幂指函数",
        items: [
          {
            id: "p8", kind: "公式", name: "对数型：ln(1+x) ~ x", page: "教材 p62 例 5",
            body: R`$\lim\limits_{x\to0}\dfrac{\log_a(1+x)}x=\lim\limits_{x\to0}\log_a(1+x)^{\frac1x}=\log_a\mathrm e=\dfrac1{\ln a}$；取 $a=\mathrm e$ 得 $\ln(1+x)\sim x\ (x\to0)$。`,
            notes: [R`关键一步：$\log_a$ 连续，极限号移进去（定理 3）`, R`用的时候 $x$ 换成任何趋于 $0$ 的 $\square$：$\ln(1+\square)\sim\square$`],
            quiz: R`$x\to1$ 时，$\ln x$ 和谁等价？`
          },
          {
            id: "p9", kind: "公式", name: "指数型：eˣ−1 ~ x，aˣ−1 ~ x ln a", page: "教材 p62 例 6",
            body: R`令 $a^x-1=t$，则 $\lim\limits_{x\to0}\dfrac{a^x-1}x=\lim\limits_{t\to0}\dfrac t{\log_a(1+t)}=\ln a$；取 $a=\mathrm e$ 得 $\mathrm e^x-1\sim x\ (x\to0)$。`,
            notes: [R`$a^x-1\sim x\ln a$，别漏 $\ln a$`, R`$\mathrm e^{\square}-1\sim\square$ 只在 $\square\to0$ 时成立`],
            quiz: R`$\lim\limits_{x\to0}\dfrac{3^x-1}{x}=$？`
          },
          {
            id: "p10", kind: "公式", name: "幂型：(1+x)^α − 1 ~ αx", page: "教材 p62 例 7",
            body: R`$\lim\limits_{x\to0}\dfrac{(1+x)^\alpha-1}x=\alpha$，即 $(1+x)^\alpha-1\sim\alpha x\ (x\to0)$。`,
            notes: [R`证法：写成 $\dfrac{(1+x)^\alpha-1}{\ln(1+x)^\alpha}\cdot\dfrac{\alpha\ln(1+x)}x$，两个因子分别用上面两个等价（教材 p62）`, R`$\sqrt{1+x}-1\sim\frac x2$，$\sqrt[n]{1+x}-1\sim\frac xn$（$\alpha=\frac1n$）`],
            quiz: R`$x\to0$ 时，$\left(1-\frac12x^2\right)^{\frac23}-1$ 和谁等价？`
          },
          {
            id: "p11", kind: "公式", name: "幂指函数的极限", page: "教材 p63",
            body: R`$u(x)^{v(x)}$（$u>0,u\neq1$）叫幂指函数。若 $\lim u(x)=a>0$，$\lim v(x)=b$，则 $\lim u(x)^{v(x)}=a^b$。`,
            notes: [
              R`原理：$u^v=\mathrm e^{v\ln u}$，指数函数和对数函数连续，极限号可以移进去（教材 p63 例 8）`,
              R`三个 $\lim$ 必须是同一个变化过程（教材 p63 注意）`,
              R`$a=1$、$b=\infty$ 是 $1^\infty$ 型，不能用 $a^b$，用 $\mathrm e^{\lim v(u-1)}$（30讲 p62；见 1.7）`
            ],
            quiz: R`$\lim\limits_{x\to0}(2+x)^{\cos x}$ 和 $\lim\limits_{x\to\infty}\left(1+\frac1x\right)^x$，哪个能直接用 $a^b$？`
          },
          {
            id: "p12", kind: "结论", name: "|f|、max、min 的连续性", page: "习题1-9 第2题（习题全解 p37）",
            body: R`$f$、$g$ 在 $x_0$ 连续，则 $|f|$、$\max\{f,g\}=\frac12(f+g+|f-g|)$、$\min\{f,g\}=\frac12(f+g-|f-g|)$ 在 $x_0$ 都连续。`,
            notes: [R`$|f|$ 是 $|u|$ 和 $f$ 的复合；反过来 $|f|$ 连续推不出 $f$ 连续（见 1.8）`],
            quiz: R`$\max\{x,-x\}$ 是什么函数？连续吗？`
          },
          {
            id: "p13", kind: "结论", name: "运算后连续性的判断", page: "习题1-9 第5题（习题全解 p39–40）",
            body: R`$f$ 处处连续且 $f\neq0$，$\varphi$ 有间断点：$\varphi[f(x)]$、$[\varphi(x)]^2$ 未必有间断点；$f[\varphi(x)]$ 未必有间断点；$\dfrac{\varphi}{f}$ 必有间断点。`,
            notes: [
              R`"必有间断点"的证法：反证，若 $\frac\varphi f$ 连续，则 $\varphi=\frac\varphi f\cdot f$ 连续，矛盾（习题全解 p40）`,
              R`"未必"的反例：$\operatorname{sgn}(\mathrm e^x)\equiv1$；$\varphi=1\ (x\in\mathbb Q)$、$-1\ (x\notin\mathbb Q)$ 时 $\varphi^2\equiv1$（习题全解 p40）`
            ],
            quiz: R`连续 + 间断一定间断，间断 + 间断呢？举个例子。`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "求初等函数的连续区间，并求极限",
        signal: R`问"连续区间"，或在某几个点求极限，其中有的点在定义区间内、有的不在`,
        example: { q: R`求 $f(x)=\dfrac{x^3+3x^2-x-3}{x^2+x-6}$ 的连续区间，并求 $\lim\limits_{x\to0}f(x)$、$\lim\limits_{x\to-3}f(x)$、$\lim\limits_{x\to2}f(x)$。`, src: "教材习题1-9 第1题 p63；同类：吉米【79】p22" },
        idea: {
          key: R`初等函数的连续区间就是定义区间；在定义区间内代入，不在的点先化简再求。`,
          how: [
            R`求定义域：分母 $\neq0$、偶次根号下 $\geqslant0$、对数真数 $>0$ 等`,
            R`写成若干区间，就是连续区间（无定义的点是间断点）`,
            R`求极限：点在定义区间内直接代入；不在的，先约分、有理化，再求（结果可能是 $\infty$）`
          ],
          refs: [
            { src: "习题全解 习题1-9 第1题 p36", text: R`$f(x)$ 在 $x_1=-3,x_2=2$ 处无意义，所以这两个点为间断点，此外函数到处连续，连续区间为 $(-\infty,-3),(-3,2),(2,+\infty)$` },
            { src: "吉米【79】p22", text: R`$f(x)=\ln(9-x^2)$ 的连续区间：由 $9-x^2>0$ 得 $(-3,3)$` }
          ]
        },
        think: R`$f$ 是有理分式，属于初等函数，在定义区间内处处连续（教材 1.9），所以连续区间就是定义域拆成的几个区间；求极限时，点在定义区间内就直接代入，在区间外（无定义的点）就先约分或看倒数。关键是先把分子分母因式分解。`,
        first: R`先分解因式找出无定义的点`,
        steps: [
          R`分母分解：$x^2+x-6=(x+3)(x-2)$，所以 $x=-3$、$x=2$ 无定义`,
          R`连续区间：初等函数在定义区间内连续，连续区间为 $(-\infty,-3)$、$(-3,2)$、$(2,+\infty)$`,
          R`分子分解（分组）：$x^3+3x^2-x-3=x^2(x+3)-(x+3)=(x^2-1)(x+3)$。$x\neq-3$ 时 $f(x)=\dfrac{x^2-1}{x-2}$`,
          R`$x\to0$：$0$ 在定义区间内，直接代入 $f(0)=\dfrac{-3}{-6}=\dfrac12$`,
          R`$x\to-3$：$-3$ 处无定义，但极限只看附近，用约分后的式子：$\dfrac{9-1}{-3-2}=-\dfrac85$（$x=-3$ 是可去间断点）`,
          R`$x\to2$：分子 $\to3\neq0$，分母 $\to0$，倒数 $\to0$，所以 $\lim\limits_{x\to2}f(x)=\infty$（$x=2$ 是无穷间断点）`
        ],
        pitfall: R`把 $x=-3$ 也当成"能代入"的点（它不在定义域里，求的是极限，用化简后的式子）；把"$=\infty$"写成"$=f(2)$"`,
        practice: "教材习题1-9 第1题（p63）；吉米【79】（p22）"
      },
      {
        id: "t2", name: "分段函数的反函数及其连续性",
        signal: R`分段函数每段都单调，问反函数的表达式、反函数有没有间断点`,
        example: { q: R`设 $f(x)=\begin{cases}1-2x^2,&x<-1\\x^3,&-1\leqslant x\leqslant2\\12x-16,&x>2\end{cases}$。(1) 求反函数 $f^{-1}(x)$；(2) 问 $f^{-1}(x)$ 是否有间断点。`, src: "吉米【91】p25" },
        idea: {
          key: R`逐段求反函数，自变量范围换成该段的值域；连续性只在新的分段点检查左右极限。`,
          how: [
            R`每段解出 $x$，注意开方取哪个符号（看原来 $x$ 的范围）`,
            R`每段的定义域 = 原来那段的值域`,
            R`在新的分段点求左、右极限，和函数值比较；也可以用定理 2：原函数单调连续，反函数就单调连续`
          ],
          refs: [
            { src: "教材 第九节 定理 2 p60", text: R`如果函数 $y=f(x)$ 在区间 $I_x$ 上单调增加（或单调减少）且连续，那么它的反函数也在对应的区间 $I_y$ 上单调增加（或单调减少）且连续` },
            { src: "吉米【91】p25", text: R`讨论 $x=-1$ 及 $x=8$ 处的左、右极限，$f^{-1}(x)$ 在 $x=-1$ 及 $x=8$ 均连续，故 $f^{-1}(x)$ 无间断点` }
          ]
        },
        think: R`分段函数的反函数要逐段求：每段在自己的定义区间上单调，可以反解；反函数的各段自变量范围就是原函数各段的值域。反函数的连续性只可能在新的分段点（原函数分段点的函数值）出问题，所以先求每段值域，再在新分段点比较左右极限和函数值。`,
        first: R`先求每段的值域：$(-\infty,-1)$、$[-1,8]$、$(8,+\infty)$`,
        steps: [
          R`各段值域：$x<-1$ 时 $x^2>1$，$y=1-2x^2<-1$；$-1\leqslant x\leqslant2$ 时 $y=x^3\in[-1,8]$；$x>2$ 时 $y=12x-16>8$。三段值域恰好拼成 $\mathbb R$，互不重叠`,
          R`第一段反解：$x^2=\dfrac{1-y}{2}$，因为 $x<-1<0$ 取负根，$x=-\sqrt{\dfrac{1-y}{2}}$，$y<-1$`,
          R`第二段：$x=\sqrt[3]y$，$-1\leqslant y\leqslant8$；第三段：$x=\dfrac{y+16}{12}$，$y>8$`,
          R`交换记号：$f^{-1}(x)=\begin{cases}-\sqrt{\frac{1-x}{2}},&x<-1\\\sqrt[3]x,&-1\leqslant x\leqslant8\\\frac{x+16}{12},&x>8\end{cases}$`,
          R`连续性：各段内部是初等函数，连续；查新分段点。$x=-1$：左极限 $-\sqrt{\frac{2}{2}}=-1$，函数值 $\sqrt[3]{-1}=-1$，相等；$x=8$：函数值 $\sqrt[3]8=2$，右极限 $\dfrac{8+16}{12}=2$，相等`,
          R`所以 $f^{-1}$ 处处连续，没有间断点（原函数本身也连续：$f(-1^-)=-1=f(-1)$，$f(2^+)=8=f(2)$）`
        ],
        pitfall: R`开方漏负号（$x<-1$ 时 $x$ 是负的）；反函数的分段点还写成原来的 $-1$、$2$`,
        practice: "吉米【91】（p25）；1.1 题型「求分段函数的反函数」"
      },
      {
        id: "t3", name: "利用连续性求极限（极限号移进函数）",
        signal: R`外面套着 $\sqrt{\ }$、$\ln$、$\mathrm e^{\square}$、$\sin$、乘方，里面的极限好求`,
        example: { q: R`求：(1) $\lim\limits_{x\to\frac\pi6}\ln(2\cos2x)$；(2) $\lim\limits_{x\to0}\ln\dfrac{\sin x}x$；(3) $\lim\limits_{x\to\infty}\mathrm e^{\frac1x}$；(4) $\lim\limits_{x\to0}\dfrac{\sqrt{x+1}-1}x$。`, src: "教材习题1-9 第3题(3)(4)、第4题(1)(2) p63" },
        idea: {
          key: R`外层函数在内层极限处连续，就先求内层极限再代进外层；内层是 $\frac00$ 就先变形。`,
          how: [
            R`拆成外层 $f$ 和内层 $g$，先求 $\lim g=u_0$`,
            R`确认 $f$ 在 $u_0$ 连续（初等函数在定义区间内即可）`,
            R`写 $\lim f[g(x)]=f[\lim g(x)]$`,
            R`内层本身不能代入时，用有理化、约分、重要极限等先求出 $u_0$`
          ],
          refs: [
            { src: "习题全解 习题1-9 第3题注 p38", text: R`常用方法：利用极限运算法则；利用复合函数的连续性，将函数符号与极限号交换次序；因式分解、有理化、消去趋于零的因子；利用重要极限；利用等价无穷小替换` },
            { src: "教材 第九节 p61", text: R`在定理 3 的条件下，求复合函数 $f[g(x)]$ 的极限时，函数符号 $f$ 与极限号 $\lim\limits_{x\to x_0}$ 可以交换次序` }
          ]
        },
        think: R`外层是连续函数时，极限号可以移进去：$\lim f[g(x)]=f[\lim g(x)]$（复合函数的连续性，教材 1.9 定理 3）。所以先认出外层函数（$\ln$、$\mathrm e^u$、根号），只求里面的极限，再代进外层。(4) 不是复合形式，是 $\frac00$，先有理化。`,
        first: R`认出外层函数，先算里面的极限`,
        steps: [
          R`(1) 外层 $\ln$，里面 $2\cos2x$ 在 $\frac{\pi}{6}$ 连续：$2\cos\frac{\pi}{3}=1$，原式 $=\ln1=0$`,
          R`(2) 里面 $\dfrac{\sin x}{x}\to1$（重要极限），$\ln u$ 在 $u=1$ 处连续，极限号移进去：$\ln1=0$`,
          R`(3) 里面 $\dfrac1x\to0$，$\mathrm e^u$ 在 $u=0$ 处连续：$\mathrm e^0=1$`,
          R`(4) $\frac00$ 型，分子有理化：$\dfrac{\sqrt{x+1}-1}{x}=\dfrac{(x+1)-1}{x(\sqrt{x+1}+1)}=\dfrac{1}{\sqrt{x+1}+1}$`,
          R`(4) 现在根号连续，直接代 $x=0$：$\dfrac{1}{1+1}=\dfrac12$`
        ],
        pitfall: R`外层在 $u_0$ 不连续时也交换（见易错点）；(2) 写成 $\ln\sin x-\ln x$ 再分别求极限，两项都不存在`,
        practice: "教材习题1-9 第3题、第4题(1)–(3)（p63）；答案对照习题全解 p37–39"
      },
      {
        id: "t4", name: "用 ln(1+□)、e^□−1、a^□−1 的等价求极限",
        signal: R`式子里有 $\ln$、$\mathrm e^{\square}$、$a^{\square}$，且 $\square\to0$，或者能变形成这样`,
        example: { q: R`求：(1) $\lim\limits_{x\to\mathrm e}\dfrac{\ln x-1}{x-\mathrm e}$；(2) $\lim\limits_{x\to0}\dfrac{\mathrm e^{3x}-\mathrm e^{2x}-\mathrm e^x+1}{\sqrt[3]{(1-x)(1+x)}-1}$；(3) $\lim\limits_{x\to+\infty}x\left(2^{\frac1x}-3^{\frac1x}\right)$。`, src: "教材习题1-9 第4题(7)(8) p63；1000题 第1章第10题" },
        idea: {
          key: R`先把式子变形出"$\square\to0$"的标准样子：$\ln(1+\square)$、$\mathrm e^\square-1$、$a^\square-1$、$(1+\square)^\alpha-1$，只在乘除中替换。`,
          how: [
            R`$x\to x_0\neq0$ 或 $x\to\infty$：先换元 $t=x-x_0$ 或 $t=\frac1x$，让新变量趋于 $0$`,
            R`$\ln$：凑成 $\ln(1+\square)$，如 $\ln x-1=\ln\frac x{\mathrm e}=\ln\left(1+\frac{x-\mathrm e}{\mathrm e}\right)$`,
            R`指数的加减：先提公因式或因式分解变成乘积，如 $\mathrm e^{3x}-\mathrm e^{2x}-\mathrm e^x+1=(\mathrm e^{2x}-1)(\mathrm e^x-1)$`,
            R`两个指数相减：各减 $1$ 再分开，如 $2^t-3^t=(2^t-1)-(3^t-1)$，每一项除以 $t$ 都有极限`
          ],
          refs: [
            { src: "习题全解 习题1-9 第4题(7)(8) p39", text: R`$\lim\limits_{x\to\mathrm e}\dfrac{\ln x-1}{x-\mathrm e}\overset{x-\mathrm e=t}{=}\lim\limits_{t\to0}\dfrac{\ln\left(1+\frac t{\mathrm e}\right)}t=\dfrac1{\mathrm e}$；(8) 先化成 $\dfrac{(\mathrm e^{2x}-1)(\mathrm e^x-1)}{(1-x^2)^{\frac13}-1}$ 再替换` },
            { src: "教材 第九节 例 6 p62", text: R`$\lim\limits_{x\to0}\dfrac{a^x-1}x=\ln a$` }
          ]
        },
        think: R`本节由连续性推出三个等价：$\ln(1+\square)\sim\square$，$\mathrm e^\square-1\sim\square$，$a^\square-1\sim\square\ln a$。用它们的前提是式子变形成"$\square\to0$"的标准样子：(1) 趋于 $\mathrm e$ 而非 0，平移 $t=x-\mathrm e$；(2) 分子四项相加，因式分解成乘积；(3) $x\to+\infty$，倒代换 $t=\frac1x$。`,
        first: R`(1) 令 $t=x-\mathrm e$；(2) 分子因式分解；(3) 令 $t=\frac1x$`,
        steps: [
          R`(1) 令 $t=x-\mathrm e\to0$：$\ln x-1=\ln x-\ln\mathrm e=\ln\dfrac{\mathrm e+t}{\mathrm e}=\ln\left(1+\dfrac t{\mathrm e}\right)\sim\dfrac{t}{\mathrm e}$，原式 $=\lim\dfrac{t/\mathrm e}{t}=\dfrac1{\mathrm e}$`,
          R`(2) 分子分组：$\mathrm e^{3x}-\mathrm e^{2x}-\mathrm e^x+1=\mathrm e^{2x}(\mathrm e^x-1)-(\mathrm e^x-1)=(\mathrm e^{2x}-1)(\mathrm e^x-1)\sim2x\cdot x=2x^2$`,
          R`(2) 分母：$(1-x)(1+x)=1-x^2$，$(1-x^2)^{\frac13}-1\sim\dfrac13(-x^2)=-\dfrac{x^2}{3}$。原式 $=\dfrac{2x^2}{-x^2/3}=-6$`,
          R`(3) 令 $t=\dfrac1x\to0^+$：原式 $=\lim\limits_{t\to0^+}\dfrac{2^t-3^t}{t}=\lim\left(\dfrac{2^t-1}{t}-\dfrac{3^t-1}{t}\right)$（加一项减一项 1，拆成两个标准形式）`,
          R`(3) $a^t-1\sim t\ln a$，两项分别 $\to\ln2$、$\ln3$，原式 $=\ln2-\ln3=\ln\dfrac23$`
        ],
        pitfall: R`(2) 分子各项分别替换成 $3x-2x-x=0$，得出错误结论；(3) 1000题 解析用洛必达，这里用 $a^t-1\sim t\ln a$ 不需要导数`,
        practice: "教材习题1-9 第4题(6)–(9)（p63）；1000题 第1章第10、15题"
      },
      {
        id: "t5", name: "幂指函数 u^v 的极限",
        signal: R`底数和指数都含 $x$：$u(x)^{v(x)}$`,
        example: { q: R`求：(1) $\lim\limits_{x\to\infty}\left(1+\dfrac1x\right)^{\frac x2}$；(2) $\lim\limits_{x\to\infty}\left(\dfrac{3+x}{6+x}\right)^{\frac{x-1}2}$；(3) $\lim\limits_{x\to\infty}\left(\cos\dfrac1x+\sin\dfrac1x\right)^{\frac x2}$。`, src: "教材习题1-9 第4题(3)(5) p63；1000题 第1章第16题" },
        idea: {
          key: R`先求底数的极限 $a$：$a>0$ 且 $a\neq1$（或指数有极限）直接 $a^b$；$a=1$、指数 $\to\infty$ 是 $1^\infty$，用 $\mathrm e^{\lim v(u-1)}$。`,
          how: [
            R`分别求 $\lim u=a$、$\lim v=b$`,
            R`$a>0$ 且 $b$ 有限：答案 $a^b$（教材 p63）`,
            R`$1^\infty$ 型：$\lim u^v=\mathrm e^{\lim v(u-1)}$，再用等价或重要极限算指数`,
            R`底数是两项和时，可以先平方、通分等变形，让 $u-1$ 好算`
          ],
          refs: [
            { src: "教材 第九节 p63", text: R`如果 $\lim u(x)=a>0$，$\lim v(x)=b$，那么 $\lim u(x)^{v(x)}=a^b$。注意：这里三个 $\lim$ 都表示在同一自变量变化过程中的极限` },
            { src: "30讲 第1讲 例1.33 p62", text: R`如果 $\lim u^v$ 属于"$1^\infty$"型，则 $\lim u^v=\mathrm e^{\lim(u-1)v}$。整体"抄"，不要只算指数部分` }
          ]
        },
        think: R`三个底数都 $\to1$、指数都 $\to\infty$，是 $1^\infty$ 型，统一用 $\lim u^v=\mathrm e^{\lim v(u-1)}$。差别在 $u-1$ 怎么写得简单：(2) 分式减 1 通分；(3) 底数是和，直接减 1 不好算，平方后变成 $1+\sin\frac2x$ 更简洁（指数跟着减半）。`,
        first: R`三题的底数都 $\to1$、指数 $\to\infty$，都是 $1^\infty$ 型`,
        steps: [
          R`(1) $u-1=\dfrac1x$，$v=\dfrac x2$，$v(u-1)=\dfrac12$，原式 $=\mathrm e^{\frac12}=\sqrt{\mathrm e}$`,
          R`(2) 通分：$u-1=\dfrac{3+x}{6+x}-1=\dfrac{-3}{6+x}$；$v(u-1)=\dfrac{x-1}{2}\cdot\dfrac{-3}{6+x}=\dfrac{-3(x-1)}{2(x+6)}\to-\dfrac32$（同除 $x$），原式 $=\mathrm e^{-\frac32}$`,
          R`(3) 平方底数：$\left(\cos\frac1x+\sin\frac1x\right)^2=\cos^2\frac1x+\sin^2\frac1x+2\sin\frac1x\cos\frac1x=1+\sin\frac2x$`,
          R`(3) 所以原式 $=\left(1+\sin\frac2x\right)^{\frac x4}$。$v(u-1)=\dfrac x4\sin\dfrac2x$，令 $t=\frac2x\to0$，$=\dfrac{\sin t}{2t}\to\dfrac12$`,
          R`(3) 原式 $=\mathrm e^{\frac12}=\sqrt{\mathrm e}$`
        ],
        pitfall: R`$1^\infty$ 型写成 $1^\infty=1$；算出指数 $A$ 后忘了写成 $\mathrm e^A$`,
        practice: "教材习题1-9 第4题(3)–(5)（p63）；1000题 第1章第16题；30讲 例1.33（p62）"
      },
      {
        id: "t6", name: "判断运算后的函数是否连续（举反例）",
        signal: R`"$f$ 连续、$\varphi$ 有间断点，则 $\varphi[f(x)]$、$\varphi^2$、$f[\varphi(x)]$、$\frac\varphi f$ 必有间断点吗"一类判断`,
        example: { q: R`设 $f(x)$ 在 $\mathbb R$ 上连续，$f(x)\neq0$，$\varphi(x)$ 在 $\mathbb R$ 上有定义且有间断点。判断对错：(1) $\varphi[f(x)]$ 必有间断点；(2) $[\varphi(x)]^2$ 必有间断点；(3) $f[\varphi(x)]$ 未必有间断点；(4) $\dfrac{\varphi(x)}{f(x)}$ 必有间断点。`, src: "教材习题1-9 第5题 p64" },
        idea: {
          key: R`"必有"用反证：假设连续，用连续函数的运算推出 $\varphi$ 连续，矛盾；"未必"举反例：$\operatorname{sgn}x$、有理无理分段的函数最常用。`,
          how: [
            R`能把 $\varphi$ 用"已知连续的函数"四则运算表示出来的，结论是"必有间断点"`,
            R`复合、平方、取绝对值会把跳跃"抹平"，结论常是"未必"`,
            R`反例库：$\operatorname{sgn}x$（$x=0$ 跳跃）；$\varphi=1\ (x\in\mathbb Q)$、$-1\ (x\notin\mathbb Q)$（处处间断但平方 $\equiv1$）`
          ],
          refs: [
            { src: "习题全解 习题1-9 第5题 p40", text: R`(1) 错，$\varphi=\operatorname{sgn}x$，$f=\mathrm e^x$，$\varphi[f(x)]\equiv1$；(2) 错；(3) 对，$f=|x|+1$，$f[\varphi(x)]\equiv2$；(4) 对，若 $F=\frac\varphi f$ 处处连续，则 $\varphi=F\cdot f$ 也处处连续，矛盾` }
          ]
        },
        think: R`"必有间断点"要么反证（假设连续，推出 $\varphi$ 也连续，矛盾），要么举反例否定。能反证的关键是能从新函数里用连续运算"解出"$\varphi$：$\frac\varphi f$ 乘 $f$ 就回到 $\varphi$；而复合、平方会丢失信息（平方丢符号，外层只取到某些值），解不回去，常常能举出处处连续的反例。`,
        first: R`逐条想：能不能从这个函数"解出"$\varphi$？`,
        steps: [
          R`(1) 错。$\varphi=\operatorname{sgn}x$ 在 0 处间断；取 $f=\mathrm e^x>0$，$f$ 的值都是正数，$\varphi[f(x)]=\operatorname{sgn}(\mathrm e^x)\equiv1$，处处连续。外层只用到了 $\varphi$ 连续的那一部分`,
          R`(2) 错。$\varphi=\begin{cases}1,&x\in\mathbb Q\\-1,&x\notin\mathbb Q\end{cases}$ 处处间断，但 $\varphi^2\equiv1$ 连续。平方把符号抹掉了`,
          R`(3) 对（"未必"）。同一个 $\varphi$，取 $f=|x|+1$（连续且不为 0），$f[\varphi(x)]=|\pm1|+1\equiv2$，处处连续`,
          R`(4) 对。反证：若 $\dfrac{\varphi}{f}$ 处处连续，则 $\varphi=\dfrac{\varphi}{f}\cdot f$ 是两个连续函数之积，也处处连续，与 $\varphi$ 有间断点矛盾`
        ],
        pitfall: R`以为"有间断点的函数参与运算，结果一定间断"`,
        practice: "教材习题1-9 第2、5题（p63–64）；答案对照习题全解 p37、p40"
      },
      {
        id: "t7", name: "补充定义使函数在区间上连续", tag: "研",
        signal: R`函数在某些点无定义，问"补充定义 $f(x_0)=$？才能连续"，或给出连续求 $f(x_0)$`,
        example: { q: R`设 $f(x)=\dfrac{1-x\cdot2^{1-x}}{(2-x)(1-x)}\ (x\neq1,2)$，若 $f(x)$ 在 $[1,2]$ 上连续，则 $f(1)f(2)=$______。`, src: "1000题 第1章第20题" },
        idea: {
          key: R`连续 ⇔ 函数值等于极限：$f(x_0)=\lim\limits_{x\to x_0}f(x)$。端点只要单侧极限。`,
          how: [
            R`写出要补的值 = 该点的极限（端点用单侧极限）`,
            R`换元让新变量 $\to0$，用 $a^\square-1\sim\square\ln a$ 等计算`,
            R`把几个值按题目要求组合`
          ],
          refs: [
            { src: "1000题 第1章第20题解析", text: R`由连续的定义，$f(1)=\lim\limits_{x\to1^+}f(x)$，$f(2)=\lim\limits_{x\to2^-}f(x)$（书上两次用洛必达）` },
            { src: "教材 第八节 p55", text: R`$f$ 在 $x_0$ 连续即 $\lim\limits_{x\to x_0}f(x)=f(x_0)$；区间端点只要求单侧连续` }
          ]
        },
        think: R`$f$ 在 $x=1,2$ 处无定义，要在 $[1,2]$ 上连续，就要补定义：$f(1)$ 取右极限，$f(2)$ 取左极限。两个极限都是 $\frac00$ 型，含 $2^{1-x}$，平移让 $\square\to0$ 后可以用 $a^\square-1\sim\square\ln a$。`,
        first: R`$f(1)=\lim\limits_{x\to1^+}f(x)$，令 $t=1-x$`,
        steps: [
          R`连续的要求：$f(1)=\lim\limits_{x\to1^+}f(x)$，$f(2)=\lim\limits_{x\to2^-}f(x)$；两点都是 $\frac00$ 型`,
          R`求 $f(1)$：令 $x=1-t$（$t\to0$），$2^{1-x}=2^t$。分子 $1-(1-t)2^t=(1-2^t)+t\cdot2^t$，分母 $(2-x)(1-x)=(1+t)t$`,
          R`$f(1)=\lim\dfrac{\frac{1-2^t}{t}+2^t}{1+t}$；$2^t-1\sim t\ln2$，所以 $\dfrac{1-2^t}{t}\to-\ln2$，$f(1)=1-\ln2$`,
          R`求 $f(2)$：令 $x=2+t$，$2^{1-x}=2^{-1-t}=\frac12\cdot2^{-t}$。分子 $1-(2+t)\cdot\frac12\cdot2^{-t}=(1-2^{-t})-\frac t2\cdot2^{-t}$，分母 $(-t)(-1-t)=t(1+t)$`,
          R`$f(2)=\lim\dfrac{\frac{1-2^{-t}}{t}-\frac12\cdot2^{-t}}{1+t}$；$1-2^{-t}\sim t\ln2$，所以 $f(2)=\ln2-\dfrac12$`,
          R`$f(1)f(2)=(1-\ln2)\left(\ln2-\dfrac12\right)=\dfrac32\ln2-\ln^22-\dfrac12$`
        ],
        pitfall: R`端点求了双侧极限；换元后忘记 $2^{1-x}$ 也要一起换`,
        practice: "1000题 第1章第20题；教材习题1-9 第6题（p64）；1.8 题型「求参数使函数连续」"
      }
    ],

    pitfalls: [
      { wrong: R`初等函数在定义域内处处连续`, why: R`定义域可能有孤立点，那里没有邻域，谈不上连续`, right: R`说"在定义区间内连续"（教材 p62）`, test: R`$y=\sqrt{\cos\pi x-1}$ 的定义域是什么？在 $x=0$ 连续吗？`, ans: R`定义域 $\{0,\pm2,\pm4,\cdots\}$ 全是孤立点（30讲 p25）；$x=0$ 附近没有定义，不能谈连续`, link: "知识点 初等函数在定义区间内连续" },
      { wrong: R`$\lim f[g(x)]=f[\lim g(x)]$ 永远成立`, why: R`要求外层 $f$ 在 $u_0=\lim g(x)$ 处连续`, right: R`先检查外层在 $u_0$ 连续，再交换（教材 p60 定理 3）`, test: R`$f(u)=1\ (u\neq0)$，$f(0)=0$；$g(x)=x^2$。$\lim\limits_{x\to0}f[g(x)]$ 和 $f[\lim\limits_{x\to0}g(x)]$ 各是多少？`, ans: R`前者 $1$（$x\neq0$ 时 $g\neq0$），后者 $f(0)=0$，不相等`, link: "题型 3" },
      { wrong: R`分段函数在分段点直接代入求极限`, why: R`分段函数一般不是初等函数，分段点两侧表达式不同`, right: R`分段点求左右极限（30讲 p25；见 1.3）`, test: R`$f(x)=x+1\ (x\geqslant0)$，$x-1\ (x<0)$，$\lim\limits_{x\to0}f(x)=f(0)=1$ 对吗？`, ans: R`不对，左极限 $-1$，右极限 $1$，极限不存在`, link: "知识点 初等函数在定义区间内连续" },
      { wrong: R`$x\to1$ 时 $\ln x\sim x$`, why: R`$\ln(1+\square)\sim\square$ 要求 $\square\to0$，$\ln x$ 要写成 $\ln[1+(x-1)]$`, right: R`$x\to1$ 时 $\ln x\sim x-1$`, test: R`$\lim\limits_{x\to1}\dfrac{\ln x}{x-1}=$？`, ans: R`$1$`, link: "题型 4" },
      { wrong: R`$x\to+\infty$ 时 $\mathrm e^x-1\sim x$`, why: R`等价只在指数趋于 $0$ 时成立`, right: R`先换元让指数 $\to0$，如 $\mathrm e^{\frac1x}-1\sim\frac1x\ (x\to\infty)$`, test: R`$\lim\limits_{x\to+\infty}\dfrac{\mathrm e^x-1}x$ 是 $1$ 吗？`, ans: R`不是，是 $+\infty$`, link: "题型 4" },
      { wrong: R`$a^x-1\sim x$`, why: R`漏了因子 $\ln a$`, right: R`$a^x-1\sim x\ln a\ (x\to0)$（教材 p62 例 6）`, test: R`$\lim\limits_{x\to0}\dfrac{2^x-1}x=$？`, ans: R`$\ln2$`, link: "知识点 指数型" },
      { wrong: R`$\sqrt{1+x}-1\sim x$`, why: R`$(1+x)^\alpha-1\sim\alpha x$，漏了 $\alpha$`, right: R`$\sqrt{1+x}-1\sim\frac x2$`, test: R`$\lim\limits_{x\to0}\dfrac{\sqrt{1+x}-1}x=$？`, ans: R`$\frac12$`, link: "知识点 幂型" },
      { wrong: R`加减中逐项换等价：$\mathrm e^{3x}-\mathrm e^{2x}-\mathrm e^x+1$ 换成 $3x-2x-x$`, why: R`加减时低阶项抵消，剩下的高阶部分被丢掉了`, right: R`先因式分解变成乘积：$(\mathrm e^{2x}-1)(\mathrm e^x-1)\sim2x^2$（习题全解 p39）`, test: R`按错误做法，习题1-9 第4题(8) 的分子等价于什么？正确的极限是多少？`, ans: R`错误做法得 $0$；正确结果 $-6$`, link: "题型 4" },
      { wrong: R`$1^\infty$ 型也用 $a^b$：$\lim\left(1+\frac1x\right)^x=1^\infty=1$`, why: R`$a^b$ 公式要求 $b$ 是有限数`, right: R`$1^\infty$ 型用 $\mathrm e^{\lim v(u-1)}$（30讲 p62）`, test: R`$\lim\limits_{x\to\infty}\left(1+\frac1x\right)^{\frac x2}=$？`, ans: R`$\sqrt{\mathrm e}$`, link: "题型 5" },
      { wrong: R`$\lim u$ 和 $\lim v$ 分别在不同过程里求，再组合成 $a^b$`, why: R`三个 $\lim$ 必须是同一个变化过程（教材 p63 注意）`, right: R`统一写成同一个 $x\to x_0$（或 $x\to\infty$）`, test: R`$\lim\limits_{x\to0}(2+x)^{\cos x}$ 等于多少？`, ans: R`底数 $\to2$，指数 $\to1$，同一过程，结果 $2$`, link: "知识点 幂指函数的极限" },
      { wrong: R`两个在 $x_0$ 间断的函数相加，在 $x_0$ 一定间断`, why: R`两个间断可以互相抵消`, right: R`连续 ± 间断 = 间断（反证）；间断 ± 间断 不确定`, test: R`$f=\operatorname{sgn}x$，$g=-\operatorname{sgn}x$，$f+g$ 在 $0$ 连续吗？`, ans: R`连续（$f+g\equiv0$）`, link: "知识点 运算后连续性的判断" },
      { wrong: R`$\varphi$ 有间断点，$\varphi^2$ 一定有间断点`, why: R`平方会把符号的跳动抹掉`, right: R`结论是"未必"，要举反例（习题全解 p40）`, test: R`$\varphi=1\ (x\geqslant0)$，$-1\ (x<0)$。$\varphi$ 在 $0$ 连续吗？$\varphi^2$ 呢？`, ans: R`$\varphi$ 在 $0$ 跳跃间断；$\varphi^2\equiv1$ 处处连续`, link: "题型 6" },
      { wrong: R`$\varphi$ 有间断点，$\varphi[f(x)]$ 一定有间断点`, why: R`$f$ 的值域可能避开 $\varphi$ 的间断点`, right: R`$\operatorname{sgn}(\mathrm e^x)\equiv1$（习题全解 p40）`, test: R`$f(x)=x^2+1$，$\varphi=\operatorname{sgn}x$，$\varphi[f(x)]$ 有间断点吗？`, ans: R`没有，$f\geqslant1>0$，$\varphi[f(x)]\equiv1$`, link: "题型 6" },
      { wrong: R`$\max\{f,g\}$ 是"挑大的那个"，在两函数相交处会断开`, why: R`$\max\{f,g\}=\frac12(f+g+|f-g|)$，是连续函数的运算`, right: R`$f,g$ 连续 ⇒ $\max$、$\min$ 连续（习题全解 p37）`, test: R`$\max\{x,-x\}$ 在 $0$ 连续吗？`, ans: R`连续，它就是 $|x|$`, link: "知识点 |f|、max、min" },
      { wrong: R`化简后能代入的点，就是函数的连续点`, why: R`化简前那个点可能无定义，函数在那里间断；只是极限能用化简式求`, right: R`连续区间看原函数的定义域；极限可以用化简式`, test: R`$f=\dfrac{x^3+3x^2-x-3}{x^2+x-6}$ 在 $x=-3$ 连续吗？$\lim\limits_{x\to-3}f(x)=$？`, ans: R`不连续（无定义，可去间断点）；极限 $-\frac85$`, link: "题型 1" },
      { wrong: R`$\lim\limits_{x\to1}\dfrac{x^2-1}{x-1}\mathrm e^{\frac1{x-1}}=2\mathrm e^{\infty}=\infty$`, why: R`$\mathrm e^{\frac1{x-1}}$ 两侧不同：左侧 $\to0$，右侧 $\to+\infty$`, right: R`含 $\mathrm e^{\frac1{x-x_0}}$ 要分左右（习题全解 p39 第4题(10)）`, test: R`这个极限的左、右极限分别是多少？`, ans: R`左极限 $0$，右极限 $+\infty$，极限不存在`, link: "题型 3" },
      { wrong: R`反函数一定连续`, why: R`定理 2 要求原函数在区间上单调且连续`, right: R`先检查单调和连续，再用定理 2；分段函数要看分段点（吉米【91】）`, test: R`$y=\sin x$ 在 $\left[-\frac\pi2,\frac\pi2\right]$ 上的反函数在哪个区间上连续？`, ans: R`$\arcsin x$ 在 $[-1,1]$ 上单增且连续（教材 p60 例 2）`, link: "题型 2" }
    ]
  });
})();
