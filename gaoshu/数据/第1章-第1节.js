/*
类型: 题型
标题: 高等数学 第1章 第1节 映射与函数 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-19
更新日期: 2026-10-19
状态: 完成

页码一律是印刷页。教材 = 同济《高等数学》第八版上册；30讲 = 张宇《考研数学基础30讲·高数分册》；
吉米 = 《吉米多维奇高等数学习题精选精解》第二版（纸质书，题号以纸质书为准）；1000题 = 张宇1000题基础篇；
习题全解 = 同济第八版上册习题全解指导。
公式写法：行内 $...$，独立 $$...$$。字符串用 R`...`（String.raw），反斜杠照原样写一个。
字段：framework.nodes（关系图的概念，col 列 row 行）、framework.edges（箭头，label 写在箭头上）、framework.keys（要点，q 问题 a 答案）、
points（知识点）、types（题型卡，idea = 这类题的通法（key 一句话，how 步骤，refs 辅导书原话和出处））、pitfalls（易错点，test/ans = 陷阱小题和答案）。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "1.1",
    chapter: 1,
    title: "映射与函数",
    pages: "教材 p1–17",
    sources: ["教材 第一章第一节 p1–17", "习题全解 习题1-1", "30讲 第1讲 p3–14", "吉米 第1章 基本题型【1】–【26】p1–6", "1000题基础篇 第1章 第1–4题"],
    updated: "2026-10-19",

    framework: {
      main: R`函数是特殊的映射：映射的"逆"和"复合"，到函数里就是反函数和复合函数；函数用四种特性描述形状；基本初等函数经有限次运算和复合，得到初等函数。`,
      nodes: [
        { id: "M", go: "p1", col: 0, row: 0, kind: "map", label: "映射", sub: R`每个 $x$ 对应唯一的 $y$` },
        { id: "IM", go: "p3", col: 0, row: 1, kind: "map", label: "逆映射", sub: "单射才有" },
        { id: "CM", go: "p4", col: 0, row: 2, kind: "map", label: "复合映射", sub: R`$f\circ g$，有顺序` },
        { id: "F", go: "p5", col: 1, row: 0, kind: "func", label: "函数", sub: "两要素：定义域、对应法则" },
        { id: "INV", go: "p12", col: 1, row: 1, kind: "func", label: "反函数", sub: R`定义域 = 原函数值域` },
        { id: "COMP", go: "p14", col: 1, row: 2, kind: "func", label: "复合函数", sub: R`$y=f[g(x)]$` },
        { id: "P", go: "p8", col: 2, row: 0, kind: "prop", label: "四种特性", sub: "有界 · 单调 · 奇偶 · 周期" },
        { id: "ELE", go: "p17", col: 2, row: 2, kind: "build", label: "初等函数", sub: "基本初等函数 + 有限次四则、复合" }
      ],
      edges: [
        { from: "M", to: "F", label: "数集到实数集" },
        { from: "IM", to: "INV", label: "单射时" },
        { from: "CM", to: "COMP", label: R`要求 $R_g\subset D_f$` },
        { from: "F", to: "P", label: "在区间上谈" },
        { from: "P", to: "INV", label: R`单调 $\Rightarrow$ 有反函数` },
        { from: "COMP", to: "ELE", label: "有限次复合" }
      ],
      keys: [
        { q: R`单调和反函数是什么关系？`, a: R`单调 $\Rightarrow$ 单射 $\Rightarrow$ 有反函数，反过来不成立：$f(x)=x\ (x\geqslant0)$、$\frac1x\ (x<0)$ 有反函数但不单调（教材 p9–10；30讲 第1讲 p5）。` },
        { q: R`复合函数能复合的条件是什么？定义域怎么求？`, a: R`要 $R_g\subset D_f$；定义域是让内层 $g(x)$ 落进外层定义域 $D_f$ 的那些 $x$（教材 p10–11；武忠祥 第1章 p3）。` },
        { q: R`判断奇偶性的第一步是什么？复合函数的奇偶怎么判？`, a: R`先看定义域是否关于原点对称；复合函数"内偶则偶，内奇同外"（教材 p8；30讲 第1讲 p12–13）。` },
        { q: R`什么时候两个函数是同一个函数？`, a: R`定义域和对应法则都相同。化简、换元都可能改变定义域，要跟着检查（教材 p4）。` }
      ]
    },
    points: [
      {
        group: "一、映射",
        items: [
          {
            id: "p1", kind: "定义", name: "映射", page: "教材 p1–2",
            body: R`设 $X,Y$ 是两个**非空集合**。如果存在法则 $f$，使==对 $X$ 中**每个**元素 $x$，在 $Y$ 中有**唯一确定**的元素 $y$ 与之对应，就称 $f$ 为从 $X$ 到 $Y$ 的映射==，记作 $f:X\to Y$。$y$ 叫 $x$ 的像，$x$ 叫 $y$ 的一个原像。`,
            notes: [
              R`==三要素==：定义域 $D_f=X$；值域的范围 $R_f\subset Y$；对应法则 $f$（p1–2）`,
              R`==像唯一，原像不一定唯一==；$R_f\subset Y$，不一定 $R_f=Y$（p2）`
            ],
            quiz: R`"每个"和"唯一"分别排除了什么情况？`
          },
          {
            id: "p2", kind: "定义", name: "满射、单射、双射", page: "教材 p2",
            body: R`==满射：$R_f=Y$==。==单射：$x_1\neq x_2\Rightarrow f(x_1)\neq f(x_2)$==。==双射（一一映射）：既是单射又是满射==。`,
            notes: [
              R`教材例 1：$f:\mathbb R\to\mathbb R$，$f(x)=x^2$，既非单射也非满射`,
              R`教材例 3：$\sin x:\left[-\frac{\pi}{2},\frac{\pi}{2}\right]\to[-1,1]$ 是双射`
            ],
            quiz: R`把 $f(x)=x^2$ 改成 $f:[0,+\infty)\to[0,+\infty)$，它是单射、满射还是双射？`
          },
          {
            id: "p3", kind: "定义", name: "逆映射", page: "教材 p2–3",
            body: R`设 $f$ 是 $X$ 到 $Y$ 的**==单射==**。对每个 $y\in R_f$，有唯一的 $x\in X$ 使 $f(x)=y$，规定 $f^{-1}(y)=x$，称 $f^{-1}$ 为 $f$ 的逆映射。==$D_{f^{-1}}=R_f$，$R_{f^{-1}}=X$==。`,
            notes: [R`只有单射才存在逆映射（p2）`],
            quiz: R`逆映射的定义域是 $Y$ 还是 $R_f$？`
          },
          {
            id: "p4", kind: "定义", name: "复合映射", page: "教材 p3",
            body: R`$g:X\to Y_1$，$f:Y_2\to Z$，且 ==$Y_1\subset Y_2$==，则 $f\circ g:X\to Z$，$(f\circ g)(x)=f[g(x)]$。`,
            notes: [
              R`能复合的条件：==$R_g\subset D_f$==`,
              R`!!复合有顺序!!：$f\circ g$ 有意义不代表 $g\circ f$ 有意义；两者都有意义也未必相同（p3）`
            ],
            quiz: R`举一个 $f\circ g$ 有意义、$g\circ f$ 没有意义的例子。`
          }
        ]
      },
      {
        group: "二、函数",
        items: [
          {
            id: "p5", kind: "定义", name: "函数和它的两要素", page: "教材 p3–4",
            body: R`设数集 $D\subset\mathbb R$，映射 $f:D\to\mathbb R$ 称为==定义在 $D$ 上的函数==，记作 $y=f(x),\ x\in D$。函数值的全体 $R_f=f(D)$ 叫值域。`,
            notes: [
              R`两要素：==定义域和对应法则，两者都相同才是同一个函数==（p4）`,
              R`==$f$ 表示对应法则，$f(x)$ 表示函数值==（p3）`
            ],
            quiz: R`$f(x)=x$ 和 $g(x)=\sqrt{x^2}$ 是同一个函数吗？差在哪个要素？`
          },
          {
            id: "p6", kind: "规定", name: "自然定义域", page: "教材 p4",
            body: R`用解析式给出、没有实际背景的函数，约定定义域是==使解析式有意义的一切实数==。有实际背景的，按变量的实际意义定。`,
            notes: [
              R`常用限制：==分母 $\neq0$；偶次根号下 $\geqslant0$；对数真数 $>0$==；$\tan x$ 要 $x\neq k\pi+\frac{\pi}{2}$；$\cot x$ 要 $x\neq k\pi$；$\arcsin x,\arccos x$ 要 $|x|\leqslant1$（习题全解 习题1-1 第1题注）`,
              R`例：$y=\sqrt{1-x^2}$ 定义域 $[-1,1]$，$y=\dfrac{1}{\sqrt{1-x^2}}$ ==定义域 $(-1,1)$==（p4）`
            ]
          },
          {
            id: "p7", kind: "例子", name: "绝对值、符号函数、取整函数、分段函数", page: "教材 p4–6",
            body: R`符号函数 $\operatorname{sgn}x=\begin{cases}1,&x>0\\0,&x=0\\-1,&x<0\end{cases}$，对任何实数 $x$ 有 ==$x=\operatorname{sgn}x\cdot|x|$==。取整函数 $[x]$ 是==不超过 $x$ 的最大整数==，值域 $\mathbb Z$，图形是阶梯曲线，在整数点跳跃。`,
            notes: [R`分段函数用几个式子表示的是**一个**函数，不是几个函数（p6）`],
            quiz: R`$[-1.5]=$？`
          }
        ]
      },
      {
        group: "三、函数的四种特性",
        items: [
          {
            id: "p8", kind: "定义", name: "有界性", page: "教材 p6–7",
            body: R`设 $X\subset D$。如果==存在**正数** $M$，使 $|f(x)|\leqslant M$ 对任一 $x\in X$ 都成立==，就称 $f$ 在 $X$ 上有界。存在 $K_1$ 使 $f(x)\leqslant K_1$ 叫有上界，存在 $K_2$ 使 $f(x)\geqslant K_2$ 叫有下界。`,
            notes: [
              R`无界的写法：==对任何正数 $M$，总存在 $x_1\in X$，使 $|f(x_1)|>M$==（p6）`,
              R`有界的充要条件：==既有上界又有下界==（p7）`,
              R`!!有界一定要说在哪个集合上!!：$\frac{1}{x}$ 在 $(0,1)$ 内无界，在 $(1,2)$ 内有界（p7）`
            ],
            quiz: R`不看书，写出"$f$ 在 $X$ 上无界"的完整定义，注意"任何"和"存在"的顺序。`
          },
          {
            id: "p9", kind: "定义", name: "单调性", page: "教材 p7–8",
            body: R`设区间 $I\subset D$。对 $I$ 上==任意两点 $x_1<x_2$，恒有 $f(x_1)<f(x_2)$，称 $f$ 在 $I$ 上单调增加==；恒有 $f(x_1)>f(x_2)$，称单调减少。`,
            notes: [
              R`!!单调性是对区间说的!!：$y=x^2$ 在 $[0,+\infty)$ 上单调增加，在 $(-\infty,+\infty)$ 内不单调（p8）`,
              R`等价写法：$f$ 单调增加 $\Leftrightarrow$ 对任意 $x_1\neq x_2$，==$(x_1-x_2)[f(x_1)-f(x_2)]>0$==（30讲 p10）`
            ],
            quiz: R`$\frac{1}{x}$ 在 $(-\infty,0)\cup(0,+\infty)$ 上是单调减少的吗？`
          },
          {
            id: "p10", kind: "定义", name: "奇偶性", page: "教材 p8–9",
            body: R`前提：==定义域 $D$ **关于原点对称**==。对任一 $x\in D$，==$f(-x)=f(x)$ 恒成立叫偶函数，$f(-x)=-f(x)$ 恒成立叫奇函数==。偶函数图形关于 $y$ 轴对称，奇函数图形关于原点对称。`,
            notes: [
              R`和与积：==偶 + 偶 = 偶，奇 + 奇 = 奇；偶 × 偶 = 偶，奇 × 奇 = 偶，偶 × 奇 = 奇==（教材习题1-1 第8题，p16）`,
              R`==$f(x)+f(-x)$ 必为偶函数，$f(x)-f(-x)$ 必为奇函数==（30讲 p12）`,
              R`复合：==内层偶，复合后一定偶；内层奇，复合后和外层一致==（30讲 p12–13）`,
              R`$\sin x+\cos x$ !!既非奇函数也非偶函数!!（p9）`
            ],
            quiz: R`奇函数在 $x=0$ 处有定义，$f(0)$ 等于多少？为什么？`
          },
          {
            id: "p11", kind: "定义", name: "周期性", page: "教材 p9",
            body: R`如果==存在正数 $l$==，使对任一 $x\in D$ 有 $(x\pm l)\in D$，且 ==$f(x+l)=f(x)$ 恒成立==，就称 $f$ 为周期函数，$l$ 为周期。通常说的周期指最小正周期。`,
            notes: [
              R`!!不是每个周期函数都有最小正周期!!：狄利克雷函数 $D(x)=\begin{cases}1,&x\in\mathbb Q\\0,&x\in\mathbb Q^c\end{cases}$，任何正有理数都是它的周期（教材例 10，p9）`,
              R`若 $f$ 以 $T$ 为周期，则 $f(ax+b)$ 以 ==$\dfrac{T}{|a|}$== 为周期（30讲 p14）`
            ],
            quiz: R`$\sin^2x$ 的最小正周期是多少？先说你用了哪个公式。`
          }
        ]
      },
      {
        group: "四、反函数、复合函数和函数的运算",
        items: [
          {
            id: "p12", kind: "定义", name: "反函数", page: "教材 p9–10",
            body: R`设函数 $f:D\to f(D)$ 是==**单射**==，它的逆映射 $f^{-1}:f(D)\to D$ 称为 $f$ 的反函数。$y=f(x),x\in D$ 的反函数习惯写成 $y=f^{-1}(x),\ x\in f(D)$。`,
            notes: [
              R`==反函数的定义域是原函数的值域==`,
              R`把 $y=f(x)$ 和 $y=f^{-1}(x)$ 画在同一坐标系里，图形==关于直线 $y=x$ 对称==（p10）；写成 $x=f^{-1}(y)$ 时和原曲线是同一条（30讲 p5）`
            ]
          },
          {
            id: "p13", kind: "定理", name: "单调函数必有反函数", page: "教材 p9–10",
            body: R`若 $f$ 是定义在 $D$ 上的==单调函数==，则 $f:D\to f(D)$ 是单射，所以反函数 $f^{-1}$ 必定存在，并且 ==$f^{-1}$ 在 $f(D)$ 上也单调，增减方向相同==。`,
            notes: [
              R`!!单调只是充分条件!!：$f(x)=\begin{cases}x,&x\geqslant0\\\frac{1}{x},&x<0\end{cases}$ 不单调，但有反函数（就是它自己）（30讲 p5）`
            ],
            quiz: R`"有反函数的函数一定单调"对不对？举例说明。`
          },
          {
            id: "p14", kind: "定义", name: "复合函数", page: "教材 p10–11",
            body: R`设 $y=f(u)$ 的定义域为 $D_f$，$u=g(x)$ 的定义域为 $D_g$，且==**值域 $R_g\subset D_f$**==，则 $y=f[g(x)],\ x\in D_g$ 称为由 $u=g(x)$ 和 $y=f(u)$ 构成的复合函数，$u$ 叫中间变量。`,
            notes: [
              R`$R_g\not\subset D_f$ 时，==可以把 $g$ 限制在一个子集上再复合==：$\sqrt{\tan x}$ 的定义域是 $\left\{x\mid k\pi\leqslant x<\left(k+\frac12\right)\pi,k\in\mathbb Z\right\}$（p10–11）`,
              R`$\ln(x+1)$ 的定义域是 $(-1,+\infty)$，!!不是 $u=x+1$ 的定义域 $\mathbb R$!!（p11）`
            ],
            quiz: R`$y=\arcsin u,\ u=2+x^2$ 能构成复合函数吗？为什么？`
          },
          {
            id: "p15", kind: "定义", name: "函数的运算", page: "教材 p11",
            body: R`设 $D=D_f\cap D_g\neq\varnothing$，在 $D$ 上定义和差 $f\pm g$、积 $f\cdot g$；==商 $\dfrac{f}{g}$ 的定义域还要去掉 $g(x)=0$ 的点==。`
          },
          {
            id: "p16", kind: "结论", name: "任意函数 = 偶函数 + 奇函数", page: "教材 p11 例 11",
            body: R`定义在 $(-l,l)$ 上的==任意函数 $f(x)$ 都可以写成== $$f(x)=\underbrace{\frac{1}{2}[f(x)+f(-x)]}_{\text{偶}}+\underbrace{\frac{1}{2}[f(x)-f(-x)]}_{\text{奇}}$$`,
            notes: [R`想法：假设 $f=g+h$，再写出 $f(-x)=g(x)-h(x)$，两式联立解出 $g,h$（p11）`],
            quiz: R`把 $e^x$ 拆成偶函数加奇函数，各是什么？`
          }
        ]
      },
      {
        group: "五、初等函数",
        items: [
          {
            id: "p17", kind: "定义", name: "基本初等函数和初等函数", page: "教材 p12",
            body: R`五类基本初等函数：幂函数 $y=x^\mu$；指数函数 $y=a^x$（$a>0$ 且 $a\neq1$）；对数函数 $y=\log_a x$（$a>0$ 且 $a\neq1$）；三角函数；反三角函数。由常数和基本初等函数经过**有限次**四则运算和**有限次**复合构成、并可用**一个式子**表示的函数，叫初等函数。`,
            notes: [
              R`30讲把常数函数也算作基本初等函数（第1讲 p14），和教材分法不同，不影响判断初等函数`,
              R`$|x|=\sqrt{x^2}$ 能写成一个式子，是初等函数；==一般的分段函数不是==`
            ]
          },
          {
            id: "p18", kind: "公式", name: "双曲函数和反双曲函数（了解）", page: "教材 p12–15",
            body: R`$\operatorname{sh}x=\dfrac{e^x-e^{-x}}{2}$（奇），$\operatorname{ch}x=\dfrac{e^x+e^{-x}}{2}$（偶，最小值 $\operatorname{ch}0=1$），$\operatorname{th}x=\dfrac{\operatorname{sh}x}{\operatorname{ch}x}$（奇，夹在 $y=\pm1$ 之间）。$$\operatorname{ch}^2x-\operatorname{sh}^2x=1,\quad \operatorname{sh}2x=2\operatorname{sh}x\operatorname{ch}x,\quad \operatorname{ch}2x=\operatorname{ch}^2x+\operatorname{sh}^2x$$`,
            notes: [
              R`$\operatorname{arsh}x=\ln\left(x+\sqrt{x^2+1}\right)$，==定义域 $\mathbb R$，奇函数==（p14）`,
              R`$\operatorname{arch}x=\ln\left(x+\sqrt{x^2-1}\right)$，定义域 $[1,+\infty)$（p14–15）`,
              R`$\operatorname{arth}x=\dfrac12\ln\dfrac{1+x}{1-x}$，定义域 $(-1,1)$（p15）`,
              R`考研常用：$\ln\left(x+\sqrt{x^2+1}\right)$ ==是奇函数==（30讲 p6–7）`
            ]
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "求具体函数的定义域",
        signal: R`给出解析式，问定义域或自然定义域`,
        example: { q: R`求 $y=\dfrac{1}{\sqrt{25-x^2}}+\arcsin\dfrac{x-1}{5}$ 的定义域。`, src: "吉米 第1章【1】p1" },
        idea: {
          key: R`==定义域 = 各部分限制条件的交集==。`,
          how: [R`逐块列限制：分母 $\neq0$；偶次根号下 $\geqslant0$；对数真数 $>0$；$\arcsin,\arccos$ 里 $|\cdot|\leqslant1$；$\tan$ 里 $\neq k\pi+\frac{\pi}{2}$，$\cot$ 里 $\neq k\pi$`, R`根号在分母上取严格不等号；繁分式每一层分母都要列`, R`联立取交集，用区间写结果`],
          refs: [
            { src: "习题全解 习题1-1 第1题注 p3–4", text: R`先写出构成所求函数的各个简单函数的定义域，再求这些定义域的交集；并列出了分式、偶次根式、对数、$\tan$、$\cot$、$\arcsin$、$\arccos$ 的定义域` },
            { src: "吉米【2】p1–2", text: R`繁分式 $\frac{1}{1+\frac{1}{1+\frac1x}}$：每一层分母都不为零，得 $x\neq0,-1,-\frac12$` }
          ]
        },
        think: R`解析式由"分式、根式、反正弦"几块拼成，每一块对 $x$ 都有自己的限制，所以定义域 = 每块限制的交集。先拆块，再逐块列不等式。`,
        first: R`逐块列出限制条件，联立取交集`,
        steps: [
          R`++拆块++：$y$ 由两部分相加，第一部分是 $\dfrac{1}{\sqrt{25-x^2}}$（根号在分母上），第二部分是 $\arcsin\dfrac{x-1}{5}$。两部分都要有意义，所以定义域取交集`,
          R`++第一部分++：偶次根号下要 $\geqslant0$，又因为它在分母上不能为 0，两条合起来是严格不等号：$25-x^2>0$，即 $x^2<25$，得 $-5<x<5$`,
          R`++第二部分++：$\arcsin u$ 的定义域是 $[-1,1]$，所以 $-1\leqslant\dfrac{x-1}{5}\leqslant1$，各边乘 5 得 $-5\leqslant x-1\leqslant5$，即 $-4\leqslant x\leqslant6$`,
          R`++取交集++：$(-5,5)\cap[-4,6]=[-4,5)$。左端 $-4$ 能取到（反正弦允许等号），右端 $5$ 取不到（分母为 0）`,
          R`++检验++：$x=-4$ 时 $\sqrt{25-16}=3$，$\arcsin(-1)=-\frac{\pi}{2}$，有意义；$x=5$ 时分母为 0，无意义。==定义域为 $[-4,5)$==`
        ],
        pitfall: R`!!根号在分母上要用严格不等号!!；繁分式每一层分母都不能为零（吉米【2】答案是 $x\neq0,-1,-\frac12$）`,
        practice: "教材习题1-1 第1题（p15–16）；吉米【1】【2】（p1–2）"
      },
      {
        id: "t2", name: "求抽象函数、复合函数的定义域",
        signal: R`==只告诉 $f(x)$ 的定义域，问 $f[\varphi(x)]$ 的定义域==`,
        example: { q: R`设 $f(x)$ 的定义域 $D=[0,1]$，求 $f(x^2)$、$f(\sin x)$、$f(x+a)+f(x-a)$（$a>0$）的定义域。`, src: "教材习题1-1 第13题 p17" },
        idea: {
          key: R`$f(x)$ 的定义域是 $D$，则 ==$f[\varphi(x)]$ 的定义域是 $\{x\mid\varphi(x)\in D\}$==。`,
          how: [R`已知 $f(x)$ 的定义域，求 $f[\varphi(x)]$ 的：解 $\varphi(x)\in D$`, R`已知 $f[\varphi(x)]$ 的定义域，求 $f(x)$ 的：求 $\varphi(x)$ 在该范围上的值域`, R`几项相加：各项定义域取交集，含参数时分类讨论`],
          refs: [
            { src: "武忠祥 第1章第一节 p3", text: R`复合函数 $f(g(x))$ 的定义域为 $\{x\mid x\in D_g,\ g(x)\in D_f\}$；能复合的条件是 $D_f\cap R_g\neq\varnothing$` },
            { src: "武忠祥 题型一 例1 p6", text: R`已知 $f(x+1)$ 的定义域为 $[0,a]$：由 $0\leqslant x\leqslant a$ 得 $1\leqslant x+1\leqslant a+1$，所以 $f(x)$ 的定义域是 $[1,a+1]$。反方向的题就是求内层的值域` }
          ]
        },
        think: R`只知道 $f$ 的定义域 $[0,1]$，没有表达式。关键是"$f$ 只吃 $[0,1]$ 里的数"：不管括号里放什么，括号里的整体必须落在 $[0,1]$。所以每一问都是解"括号整体 $\in[0,1]$"这个关于 $x$ 的不等式。`,
        first: R`让括号里的整体落在 $[0,1]$ 内，再解出 $x$`,
        steps: [
          R`++$f(x^2)$++：要 $0\leqslant x^2\leqslant1$。$x^2\geqslant0$ 恒成立，$x^2\leqslant1$ 得 $-1\leqslant x\leqslant1$，定义域 $[-1,1]$`,
          R`++$f(\sin x)$++：要 $0\leqslant\sin x\leqslant1$。$\sin x\leqslant1$ 恒成立，只需 $\sin x\geqslant0$；在一个周期 $[0,2\pi)$ 里是 $[0,\pi]$，再加周期，定义域 $[2n\pi,(2n+1)\pi]$，$n\in\mathbb Z$`,
          R`++$f(x+a)+f(x-a)$++：两项都要有意义，所以同时要 $0\leqslant x+a\leqslant1$ 和 $0\leqslant x-a\leqslant1$，即 $x\in[-a,1-a]$ 且 $x\in[a,1+a]$`,
          R`++取交集++：因为 $a>0$，左端取较大的 $a$，右端取较小的 $1-a$，交集是 $[a,1-a]$。它非空要求 $a\leqslant1-a$，即 $a\leqslant\frac12$`,
          R`++结论++：$0<a\leqslant\frac12$ 时定义域为 $[a,1-a]$（$a=\frac12$ 时只剩一点 $x=\frac12$）；$a>\frac12$ 时交集为空，函数没有定义域`
        ],
        pitfall: R`!!定义域永远指 $x$ 的范围，不是括号整体的范围!!；!!两项相加取交集，带参数时要讨论!!`,
        practice: "教材习题1-1 第13题（p17）；答案对照习题全解 习题1-1 第13题"
      },
      {
        id: "t3", name: "判断两个函数是否相同",
        signal: R`问"$f(x)$ 和 $g(x)$ ==是否相同==，为什么"`,
        example: { q: R`判断是否相同：(1) $\lg x^2$ 与 $2\lg x$；(2) $x$ 与 $\sqrt{x^2}$；(3) $\sqrt[3]{x^4-x^3}$ 与 $x\sqrt[3]{x-1}$；(4) $1$ 与 $\sec^2x-\tan^2x$。`, src: "教材习题1-1 第2题 p16" },
        idea: {
          key: R`==两要素都相同才是同一个函数：先比定义域，再比对应法则==。`,
          how: [R`分别求两个函数的定义域，不同就直接下结论`, R`定义域相同，再把对应法则化简后比较（$\sqrt{x^2}=|x|$ 之类要看准）`, R`化简不能改变定义域：约分、对数拆分、三角恒等式都要检查`],
          refs: [
            { src: "武忠祥 第1章第一节 p3", text: R`函数有两个基本要素：定义域、对应法则；完全相同时才是同一函数` },
            { src: "30讲 第1讲 p9", text: R`$x^2=|x^2|=|x|^2$，$|x|=\sqrt{x^2}$；但 $x^3\neq|x^3|$` }
          ]
        },
        think: R`"是否相同"只看两要素：定义域和对应法则。定义域最容易出差别（对数拆分、三角恒等式都会悄悄改变定义域），所以每一对先求定义域，不同就直接下结论；定义域相同再化简比较对应法则。`,
        first: R`先比定义域，再比化简后的对应法则`,
        steps: [
          R`++(1) $\lg x^2$++：真数 $x^2>0$，要 $x\neq0$；$2\lg x$：真数 $x>0$。定义域分别是 $\{x\neq0\}$ 和 $(0,+\infty)$，不同，所以不是同一函数（$\lg x^2=2\lg|x|$，拆对数时丢了负半轴）`,
          R`++(2) $x$ 与 $\sqrt{x^2}$++：定义域都是 $\mathbb R$；但 $\sqrt{x^2}=|x|$，$x=-1$ 时一个是 $-1$，一个是 $1$，对应法则不同，不是同一函数`,
          R`++(3) 立方根对任何实数都有定义++，两个定义域都是 $\mathbb R$；$\sqrt[3]{x^4-x^3}=\sqrt[3]{x^3(x-1)}=\sqrt[3]{x^3}\cdot\sqrt[3]{x-1}=x\sqrt[3]{x-1}$（奇次根号可以拆、$\sqrt[3]{x^3}=x$ 不带绝对值），对应法则相同，是同一函数`,
          R`++(4)++ $1$ 的定义域是 $\mathbb R$；$\sec x$、$\tan x$ 都要 $\cos x\neq0$，即 $x\neq k\pi+\frac{\pi}{2}$。虽然在有定义的地方 $\sec^2x-\tan^2x=1$，但定义域不同，不是同一函数`
        ],
        pitfall: R`!!化简时悄悄扩大了定义域!!（如 $\lg x^2\to2\lg x$），或!!把 $\sqrt{x^2}$ 当成 $x$!!`,
        practice: "教材习题1-1 第2题（p16）；答案对照习题全解 习题1-1 第2题"
      },
      {
        id: "t4", name: "已知 f[φ(x)] 求 f(x)：换元或配凑",
        signal: R`给出 $f(\text{某个式子})=\cdots$，==要求 $f(x)$==`,
        example: { q: R`已知 $f\left(x+\dfrac{1}{x}\right)=\dfrac{x^2}{x^4+1}$，求 $f(x)$。`, src: "吉米 第1章【7】p2" },
        idea: {
          key: R`==把 $\varphi(x)$ 看成整体，用配凑法或换元法改写成 $f(t)$==；==定义域取 $\varphi(x)$ 的值域==。`,
          how: [R`配凑：把右边写成 $\varphi(x)$ 的式子，常用 $x^2+\frac{1}{x^2}=\left(x+\frac1x\right)^2-2$ 这类恒等式`, R`换元：令 $t=\varphi(x)$，反解出 $x$，代入右边`, R`把 $t$ 换回 $x$，定义域写 $t=\varphi(x)$ 能取到的范围`],
          refs: [
            { src: "30讲 例1.1 方法总结 p4", text: R`将“$x+\frac1x$”视为整体，找出对应法则；公式 $x^2+\frac{1}{x^2}=\left(x+\frac1x\right)^2-2$` },
            { src: "吉米【5】【11】p2–3", text: R`令 $\log_ax=t$ 或 $t=\ln x$ 换元，把条件改写成关于 $f(t)$ 的式子；有两个解时用题给条件（如 $f(0)=0$）取舍` }
          ]
        },
        think: R`左边是 $f$ 作用在整体 $x+\frac1x$ 上，所以要把右边也写成"只含 $x+\frac1x$"的式子。右边是 $x^2$ 和 $x^4$，同除 $x^2$ 后出现 $x^2+\frac{1}{x^2}$，它正好能用 $\left(x+\frac1x\right)^2-2$ 表示，这就是配凑的突破口。`,
        first: R`把右边凑成 $x+\frac1x$ 的式子；凑不出来就令 $t=x+\frac1x$ 反解`,
        steps: [
          R`++分子分母同除以 $x^2$++（$x\neq0$）：$\dfrac{x^2}{x^4+1}=\dfrac{1}{x^2+\frac{1}{x^2}}$`,
          R`++配方++：$\left(x+\frac1x\right)^2=x^2+2+\frac{1}{x^2}$，所以 $x^2+\frac{1}{x^2}=\left(x+\frac1x\right)^2-2$`,
          R`++代入++：$f\left(x+\frac1x\right)=\dfrac{1}{\left(x+\frac1x\right)^2-2}$。把整体 $x+\frac1x$ 记为 $t$，得 $f(t)=\dfrac{1}{t^2-2}$，再把 $t$ 换回 $x$：$f(x)=\dfrac{1}{x^2-2}$`,
          R`++定义域++：$t=x+\frac1x$ 能取的值。$x>0$ 时 $x+\frac1x\geqslant2$（基本不等式，$x=1$ 取等）；$x<0$ 时 $x+\frac1x\leqslant-2$。所以 $t\in(-\infty,-2]\cup[2,+\infty)$，即 $f(x)=\dfrac{1}{x^2-2}$，$|x|\geqslant2$`,
          R`++检验++：$x=1$ 时 $t=2$，左边 $f(2)=\frac{1}{2}$，右边 $\frac{1}{1+1}=\frac12$，一致`
        ],
        pitfall: R`吉米答案只写了 $x\neq\pm\sqrt2$；30讲 例1.1 的同类题写成"当 $x\geqslant2$ 时"。!!换元后，新变量的取值范围就是 $f$ 的定义域!!`,
        practice: "30讲 例1.1（p4）；吉米【5】【7】【11】（p2–3）"
      },
      {
        id: "t5", name: "由函数方程解出 f(x)：造方程组",
        signal: R`==同一个式子里同时出现 $f(x)$ 和 $f\left(\frac1x\right)$==、$f(-x)$ 或 $f\left(\frac{x+1}{x-1}\right)$`,
        example: { q: R`$f(x)$ 的定义域为 $(0,+\infty)$，且 $2f(x)+x^2f\left(\dfrac1x\right)=\dfrac{x^2+2x}{\sqrt{1+x^2}}$，求 $f(x)$。`, src: "30讲 第1讲 例1.2 p4" },
        idea: {
          key: R`==用变量替换造出第二个方程==，把 $f(x)$ 和另一个未知项当成二元一次方程组来解。`,
          how: [R`常用替换：$x\to\frac1x$（对付 $f\left(\frac1x\right)$）、$x\to-x$（对付 $f(-x)$），或让括号里的式子代两次回到 $x$ 的替换`, R`写出替换后的新方程`, R`联立消去另一个未知项，解出 $f(x)$，写定义域`],
          refs: [
            { src: "30讲 例1.2 方法总结 p4", text: R`用所给关系式，造出方程组，解出所需的量；注(2)：给 $f(x)+xf(-x)=x$，就写出 $f(-x)-xf(x)=-x$，消去 $f(-x)$` },
            { src: "吉米【8】p2–3", text: R`令 $\frac{x+1}{x-1}=t$，则 $x=\frac{t+1}{t-1}$，代回原式得到第二个方程` }
          ]
        },
        think: R`式子里同时有 $f(x)$ 和 $f\left(\frac1x\right)$ 两个未知量，一个方程解不出两个未知量。注意 $x\to\frac1x$ 再做一次会回到 $x$，所以把 $x$ 换成 $\frac1x$ 能造出第二个方程，两个方程、两个未知量，当成二元一次方程组消元。`,
        first: R`把 $x$ 换成 $\frac1x$，再得一个方程，联立消去 $f\left(\frac1x\right)$`,
        steps: [
          R`++原式++：$2f(x)+x^2f\left(\frac1x\right)=\dfrac{x^2+2x}{\sqrt{1+x^2}}$，记为 ①（$x>0$）`,
          R`++把 ① 中所有 $x$ 换成 $\frac1x$++（$\frac1x$ 也在 $(0,+\infty)$ 内，可以换）：左边变成 $2f\left(\frac1x\right)+\dfrac{1}{x^2}f(x)$；右边 $\dfrac{\frac{1}{x^2}+\frac2x}{\sqrt{1+\frac{1}{x^2}}}$，分子通分为 $\dfrac{1+2x}{x^2}$，分母 $\dfrac{\sqrt{x^2+1}}{x}$，相除得 $\dfrac{1+2x}{x\sqrt{1+x^2}}$，记为 ②`,
          R`++消去 $f\left(\frac1x\right)$++：① 中它的系数是 $x^2$，② 中是 $2$，所以做 $2\times$① $-\ x^2\times$②。左边：$4f(x)-f(x)=3f(x)$`,
          R`++右边++：$\dfrac{2x^2+4x}{\sqrt{1+x^2}}-\dfrac{x(1+2x)}{\sqrt{1+x^2}}=\dfrac{2x^2+4x-x-2x^2}{\sqrt{1+x^2}}=\dfrac{3x}{\sqrt{1+x^2}}$`,
          R`++所以++ $f(x)=\dfrac{x}{\sqrt{1+x^2}}$，$x>0$。检验：$x=1$ 时 ① 左边 $2\cdot\frac{1}{\sqrt2}+\frac{1}{\sqrt2}=\frac{3}{\sqrt2}$，右边 $\frac{3}{\sqrt2}$，一致`
        ],
        pitfall: R`!!对应法则和用什么字母无关!!：$f(x)=x^2$，则 $f\left(\frac1x\right)=\frac{1}{x^2}$（30讲 p4）`,
        practice: "30讲 例1.2 及注(2)（p4）；吉米【8】（p2–3）"
      },
      {
        id: "t6", name: "分段函数的复合",
        signal: R`==两个分段函数，求 $g[f(x)]$== 或 $f[g(x)]$`,
        example: { q: R`设 $g(x)=\begin{cases}2-x,&x\leqslant0\\2+x,&x>0\end{cases}$，$f(x)=\begin{cases}x^2,&x<0\\-x-1,&x\geqslant0\end{cases}$，求 $g[f(x)]$。`, src: "30讲 第1讲 例1.5 p8" },
        idea: {
          key: R`由外到内：==外层按内层函数的值分段，再把条件翻译成 $x$ 的范围==。`,
          how: [R`写 $g[f(x)]$ 时，外层的每个分段条件都换成关于 $f(x)$ 的条件`, R`对每个条件，解出（或画内层的图看出）对应的 $x$ 范围`, R`代入整理，合并成按 $x$ 分段的结果`],
          refs: [
            { src: "30讲 例1.5 方法总结 p8", text: R`画出内层函数的图形，数形结合` },
            { src: "武忠祥 题型一 例3 p6", text: R`求 $f(g(x))$：按内层 $g(x)$ 的正负把 $x$ 分成 $|x|<1$、$1\leqslant|x|<2$、$|x|\geqslant2$ 三段，再分别代入外层` }
          ]
        },
        think: R`复合 $g[f(x)]$ 是"先算 $f$，再把结果送进 $g$"。$g$ 按自己自变量的正负分段，现在它的自变量是 $f(x)$，所以外层要按 $f(x)$ 的正负分段；再把"$f(x)\leqslant0$"翻译回 $x$ 的范围。`,
        first: R`外层按内层的值分段：$g[f(x)]=\begin{cases}2-f(x),&f(x)\leqslant0\\2+f(x),&f(x)>0\end{cases}$`,
        steps: [
          R`++先写外层++：$g(u)=\begin{cases}2-u,&u\leqslant0\\2+u,&u>0\end{cases}$，令 $u=f(x)$：$g[f(x)]=\begin{cases}2-f(x),&f(x)\leqslant0\\2+f(x),&f(x)>0\end{cases}$`,
          R`++把条件翻译成 $x$++：$x\geqslant0$ 时 $f(x)=-x-1\leqslant-1<0$，属于 $f(x)\leqslant0$ 这一支；$x<0$ 时 $f(x)=x^2>0$，属于 $f(x)>0$ 这一支`,
          R`++分别代入++：$x\geqslant0$ 时 $g[f(x)]=2-(-x-1)=3+x$；$x<0$ 时 $g[f(x)]=2+x^2$`,
          R`++结果++：$g[f(x)]=\begin{cases}2+x^2,&x<0\\3+x,&x\geqslant0\end{cases}$。检验：$x=0$ 时 $f(0)=-1$，$g(-1)=3$，与 $3+0$ 一致`
        ],
        pitfall: R`!!拿 $x$ 的分段点直接去分外层!!；外层的分段要看内层函数的值`,
        practice: "吉米【12】–【14】（p3–4）；教材习题1-1 第14题（p17）"
      },
      {
        id: "t7", name: "已知 f 和 f[φ(x)]，求 φ(x) 及其定义域",
        signal: R`给出 $f(x)$ 的表达式和 $f[\varphi(x)]$ 的表达式，==求内层 $\varphi(x)$==`,
        example: { q: R`已知 $f(x)=e^{x^2}$，$f[\varphi(x)]=1-x$，且 $\varphi(x)\geqslant0$，求 $\varphi(x)$ 及其定义域。`, src: "吉米 第1章【4】p2" },
        idea: {
          key: R`==把 $\varphi(x)$ 当未知数，用外层 $f$ 的反运算把它解出来==。`,
          how: [R`代入得到关于 $\varphi(x)$ 的方程`, R`用反运算（取对数、开方、反三角）解出 $\varphi(x)$，用题设条件定符号和取值`, R`由解出的式子有意义，求 $x$ 的范围`],
          refs: [
            { src: "30讲 例1.4 方法总结 p7", text: R`将 $\varphi(x)$ 视为一个整体，由 $f[\varphi(x)]$ 已知可求出 $\varphi(x)$；若 $\varphi^2(x)=g(x)$，则 $\varphi(x)=\pm\sqrt{g(x)}$` },
            { src: "武忠祥 题型一 例2 p6", text: R`同一类题：先写 $e^{\varphi^2(x)}=1-x$，再取对数、开方` }
          ]
        },
        think: R`已知外层 $f$ 和复合结果，求内层：把 $\varphi(x)$ 当成未知数代进 $f$ 的表达式，得到一个关于 $\varphi(x)$ 的方程，用 $f$ 的反运算（这里是取对数）解出来；条件 $\varphi\geqslant0$ 用来取舍正负根，定义域由"解出来的式子有意义"决定。`,
        first: R`把 $\varphi(x)$ 当整体代进 $f$：$e^{\varphi^2(x)}=1-x$`,
        steps: [
          R`++代入++：$f(u)=\mathrm e^{u^2}$，令 $u=\varphi(x)$，得 $f[\varphi(x)]=\mathrm e^{\varphi^2(x)}$，所以 $\mathrm e^{\varphi^2(x)}=1-x$`,
          R`++两边取自然对数++（要 $1-x>0$）：$\varphi^2(x)=\ln(1-x)$`,
          R`++开方++：$\varphi(x)=\pm\sqrt{\ln(1-x)}$，题目给 $\varphi(x)\geqslant0$，取正根 $\varphi(x)=\sqrt{\ln(1-x)}$`,
          R`定义域：根号下 $\ln(1-x)\geqslant0$，即 $1-x\geqslant1$，$x\leqslant0$；这时 $1-x>0$ 也自动满足。定义域 $(-\infty,0]$`
        ],
        pitfall: R`!!开方时正负号要用题目给的条件定!!；定义域要同时满足根号和对数`,
        practice: "吉米【3】【4】【6】（p2）；30讲 例1.4（p7）"
      },
      {
        id: "t8", name: "判断奇偶性",
        signal: R`问函数的==奇偶性==，或在选择题里挑奇函数、偶函数`,
        example: { q: R`判定 $f(x)=\ln\left(x+\sqrt{1+x^2}\right)$ 的奇偶性。`, src: "吉米 第1章【17】p4–5" },
        idea: {
          key: R`==先看定义域是否关于原点对称，再比较 $f(-x)$ 与 $f(x)$==。`,
          how: [R`定义域不对称，直接判非奇非偶`, R`算 $f(-x)$；含对数、根式时，算 $f(x)+f(-x)$ 或 $f(x)-f(-x)$ 更快`, R`和与积用"奇奇得偶、奇偶得奇"；复合用"内偶则偶，内奇同外"`, R`证明要对任意 $x$ 成立；否定只要举一个反例`],
          refs: [
            { src: "吉米【17】分析 p4–5", text: R`判定奇偶性的关键是确定 $f(-x)$ 与 $f(x)$ 的关系，分两步：先求出 $f(-x)$，再确定它与 $f(x)$ 的关系` },
            { src: "武忠祥 第1章第一节 p4", text: R`常见奇函数：$\sin x,\tan x,\arcsin x,\arctan x,\ln\frac{1-x}{1+x},\ln(x+\sqrt{1+x^2}),\frac{e^x-1}{e^x+1}$；常见偶函数：$x^2,|x|,\cos x$；奇函数在 $x=0$ 有定义时 $f(0)=0$` },
            { src: "30讲 第1讲 p12–13", text: R`$f(x)+f(-x)$ 必为偶函数，$f(x)-f(-x)$ 必为奇函数；复合函数“内偶则偶，内奇同外”` }
          ]
        },
        think: R`判断奇偶性两步：定义域关于原点对称，再比较 $f(-x)$ 与 $f(x)$。式子里有 $x+\sqrt{1+x^2}$，它和 $\sqrt{1+x^2}-x$ 的乘积是 $1$，提示 $f(-x)$ 能通过有理化变成 $-f(x)$；也可以直接算 $f(x)+f(-x)$。`,
        first: R`先看定义域是否关于原点对称，再算 $f(-x)$（或 $f(x)+f(-x)$）`,
        steps: [
          R`定义域：对任意 $x$，$\sqrt{1+x^2}>\sqrt{x^2}=|x|\geqslant-x$，所以真数 $x+\sqrt{1+x^2}>0$ 恒成立，定义域为 $\mathbb R$，关于原点对称`,
          R`++算 $f(-x)$++：$f(-x)=\ln\left(-x+\sqrt{1+x^2}\right)$`,
          R`++有理化++：$\sqrt{1+x^2}-x=\dfrac{(\sqrt{1+x^2}-x)(\sqrt{1+x^2}+x)}{\sqrt{1+x^2}+x}=\dfrac{1}{\sqrt{1+x^2}+x}$，所以 $f(-x)=\ln\dfrac{1}{x+\sqrt{1+x^2}}=-\ln\left(x+\sqrt{1+x^2}\right)=-f(x)$`,
          R`++结论++：$f$ 是奇函数。更快的写法：$f(x)+f(-x)=\ln\left[\left(\sqrt{1+x^2}+x\right)\left(\sqrt{1+x^2}-x\right)\right]=\ln1=0$`
        ],
        pitfall: R`!!忘了先查定义域是否对称!!；复合函数可以直接用"内偶则偶，内奇同外"（30讲 p12–13）`,
        practice: "教材习题1-1 第8、9题（p16）；吉米【15】–【18】（p4–5）；1000题基础篇 第1章第1题"
      },
      {
        id: "t9", name: "讨论或证明有界性",
        signal: R`问"==是否有界=="，或在几个区间里挑有界的`,
        example: { q: R`讨论 $f(x)=\dfrac{x}{1+x^2}$ 在 $(-\infty,+\infty)$ 内的有界性。`, src: "教材习题1-1 第4(1)题 p16" },
        idea: {
          key: R`==有界就找 $M$ 使 $|f(x)|\leqslant M$==；==无界就找一列点使 $|f|$ 超过任意 $M$==。`,
          how: [R`先看区间内部和端点有没有使函数趋于无穷的点`, R`有界：放缩估计，常用 $|\sin x|\leqslant1$、$1+x^2\geqslant2|x|$、分子次数不高于分母次数`, R`无界：取一列 $x_n$（靠近危险点或趋于无穷），说明 $|f(x_n)|$ 无限变大`, R`结论里写明在哪个区间上`],
          refs: [
            { src: "30讲 例1.6 方法总结 p10；注(3) p9", text: R`用基本不等式找 $M$，使 $|f(x)|\leqslant M$；区间上或端点处有让极限为无穷大的点，函数就无界` },
            { src: "武忠祥 第1章第一节 p5", text: R`常用的界：$|\sin x|\leqslant1$，$|\arcsin x|\leqslant\frac{\pi}{2}$，$|\arctan x|<\frac{\pi}{2}$，$|\arccos x|\leqslant\pi$` },
            { src: "武忠祥 p5；题型二 例1 p6–7（学完 1.8、1.10 后用）", text: R`$[a,b]$ 上连续则有界；$(a,b)$ 上连续且两端的单侧极限都存在，也有界` }
          ]
        },
        think: R`有界要找一个具体的 $M$。分子是 $x$、分母是 $1+x^2$：$|x|$ 大时分母长得快，函数不会太大，猜它有界。"$1+x^2$ 和 $|x|$"正好能用基本不等式 $1+x^2\geqslant2|x|$ 联系起来，直接给出上界。`,
        first: R`找一个正数 $M$ 使 $|f(x)|\leqslant M$，常用 $1+x^2\geqslant2|x|$`,
        steps: [
          R`++基本不等式++：$(|x|-1)^2\geqslant0$ 展开得 $1+x^2\geqslant2|x|$，$|x|=1$ 时取等`,
          R`++$x\neq0$ 时++：$|f(x)|=\dfrac{|x|}{1+x^2}\leqslant\dfrac{|x|}{2|x|}=\dfrac12$（分母换成更小的 $2|x|$，分数变大）`,
          R`++$x=0$ 时++：$f(0)=0\leqslant\frac12$，上式也成立`,
          R`++结论++：对一切 $x$，$|f(x)|\leqslant\frac12$，取 $M=\frac12$，$f$ 在 $(-\infty,+\infty)$ 内有界；而且 $f(\pm1)=\pm\frac12$，$\frac12$ 是最紧的界`
        ],
        pitfall: R`!!有界必须指明区间!!；证无界要写"对任何 $M>0$，都存在 $x_1$ 使 $|f(x_1)|>M$"`,
        practice: "教材习题1-1 第4题（p16）；30讲 例1.6（p9–10）；吉米【24】（p6）"
      },
      {
        id: "t10", name: "用定义证明单调性",
        signal: R`要求"证明在某区间内单调"，没有导数可用`,
        example: { q: R`设 $f(x)$ 为定义在 $(-l,l)$ 内的奇函数，若 $f(x)$ 在 $(0,l)$ 内单调增加，证明 $f(x)$ 在 $(-l,0)$ 内也单调增加。`, src: "教材习题1-1 第7题 p16" },
        idea: {
          key: R`==任取 $x_1<x_2$，判断 $f(x_2)-f(x_1)$ 的符号==（正值函数也可以把 $\frac{f(x_2)}{f(x_1)}$ 和 $1$ 比）。`,
          how: [R`在区间内任取 $x_1<x_2$`, R`作差或作商`, R`变形到能判断正负：通分、因式分解、配方，或用已知的单调性、奇偶性`, R`下结论`],
          refs: [
            { src: "习题全解 习题1-1 第5题 p5", text: R`设 $x_1<x_2$，作差 $f(x_2)-f(x_1)$，化成能判断正负的形式` },
            { src: "30讲 第1讲 p10–11", text: R`定义法的等价写法 $(x_1-x_2)[f(x_1)-f(x_2)]>0$；例1.7 用图形变换：$f(-x)$ 与 $f(x)$ 关于 $y$ 轴对称，$-f(-x)$ 与 $f(x)$ 关于原点对称` },
            { src: "武忠祥 第1章第一节 p4（学完第三章后用）", text: R`判定单调有两种方法：定义；导数` }
          ]
        },
        think: R`要证 $(-l,0)$ 上单调增加，按定义任取 $x_1<x_2$ 比较函数值；但已知条件只管 $(0,l)$。奇函数正好把 $x$ 和 $-x$ 联系起来，所以用 $-x$ 把两个点搬到 $(0,l)$，用已知单调性，再用奇函数搬回来。`,
        first: R`在 $(-l,0)$ 内任取 $x_1<x_2$，用 $-x$ 把它们搬到 $(0,l)$`,
        steps: [
          R`++任取 $-l<x_1<x_2<0$++（单调性定义：要证 $f(x_1)<f(x_2)$）`,
          R`++取相反数，不等号反向++：$0<-x_2<-x_1<l$，这两个点都在 $(0,l)$ 内`,
          R`++$f$ 在 $(0,l)$ 内单调增加++，较小的点函数值较小：$f(-x_2)<f(-x_1)$`,
          R`++奇函数 $f(-x)=-f(x)$++：上式变成 $-f(x_2)<-f(x_1)$，两边乘 $-1$ 得 $f(x_1)<f(x_2)$`,
          R`++$x_1<x_2$ 是任取的++，所以 $f$ 在 $(-l,0)$ 内单调增加`
        ],
        pitfall: R`!!只代两个具体数验证不算证明!!，必须"任取 $x_1<x_2$"`,
        practice: "教材习题1-1 第5、6、7题（p16）；吉米【19】【20】（p5）；30讲 例1.7（p10–11）"
      },
      {
        id: "t11", name: "周期性：求周期或证明是周期函数",
        signal: R`问"哪些是周期函数、周期是多少"，或给出 $f(x+c)$ 和 $f(x)$ 的关系`,
        example: { q: R`设对任意 $x\in(-\infty,+\infty)$，存在常数 $c\neq0$，使 $f(x+c)=-f(x)$。证明 $f(x)$ 是周期函数。`, src: "吉米 第1章【22】p5–6" },
        idea: {
          key: R`==证明周期就凑出 $f(x+T)=f(x)$==；==求周期就化成一个三角函数，用 $T=\frac{2\pi}{|\omega|}$==。`,
          how: [R`给了关系式就反复代入：$f(x+c)=-f(x)$ 或 $f(x+c)=\frac{1}{f(x)}$ 都推出周期 $2|c|$`, R`三角式先降幂、和差化积，化成 $A\sin(\omega x+\varphi)+B$`, R`含 $x$、$x^2$ 这类不断变大的因子，一般不是周期函数`, R`求最小正周期时，检查有没有更小的周期`],
          refs: [
            { src: "30讲 例1.9 方法总结 p14", text: R`要证以 $T$ 为周期，证 $f(x+T)=f(x)$ 即可，多次利用题目给的等式` },
            { src: "武忠祥 第1章第一节 p5", text: R`$\sin2x$ 和 $|\sin x|$ 以 $\pi$ 为周期；$f$ 以 $T$ 为周期，则 $f(ax+b)$ 以 $\frac{T}{|a|}$ 为周期` },
            { src: "吉米【21】p5", text: R`$y=x-[x]$ 画出图形，看出是周期为 $1$ 的周期函数` }
          ]
        },
        think: R`条件 $f(x+c)=-f(x)$ 每平移一次 $c$ 就变一次号，变两次号就回到原来，所以平移两次 $2c$ 应该回到 $f(x)$。周期性的证明就是凑出 $f(x+T)=f(x)$。`,
        first: R`把条件连用两次，看能不能回到 $f(x)$`,
        steps: [
          R`++把条件里的 $x$ 换成 $x+c$++（条件对任意 $x$ 成立）：$f(x+2c)=f[(x+c)+c]=-f(x+c)$`,
          R`++再用一次条件++ $f(x+c)=-f(x)$：$f(x+2c)=-[-f(x)]=f(x)$`,
          R`++周期要求是正数++：$c$ 可能为负。由 $f(x+2c)=f(x)$ 对任意 $x$ 成立，把 $x$ 换成 $x-2c$ 得 $f(x)=f(x-2c)$，所以 $2c$ 和 $-2c$ 都满足，取 $T=2|c|>0$，$f$ 是周期函数`,
          R`++同类求周期题++（教材习题1-1 第10题）：化成一个三角函数再用 $T=\frac{2\pi}{|\omega|}$。$\cos4x$ 周期 $\frac{\pi}{2}$；$1+\sin\pi x$ 周期 $2$；$\sin^2x=\frac{1-\cos2x}{2}$ 周期 $\pi$；$x\cos x$ 振幅随 $x$ 增大，不是周期函数`
        ],
        pitfall: R`$c$ 可能是负数，!!周期要写成正数!!；!!求 $\sin^2x$ 的周期要先降幂!!`,
        practice: "教材习题1-1 第10题（p16）；吉米【21】【22】（p5–6）；30讲 例1.9（p14）；1000题基础篇 第1章第2、4题"
      },
      {
        id: "t12", name: "求反函数（含分段函数）",
        signal: R`问"==求反函数及其定义域=="`,
        example: { q: R`求 $y=\ln\left(x+\sqrt{x^2+1}\right)$ 的反函数及其定义域。`, src: "30讲 第1讲 例1.3 p5–6" },
        idea: {
          key: R`==确认单射，由 $y=f(x)$ 解出 $x$，交换 $x,y$，定义域写原函数的值域==。`,
          how: [R`单调是判断有反函数最常用的依据`, R`解 $x$ 的常用手段：换元、配方、指数和对数互化；含 $\sqrt{x^2+1}$ 时同时写出 $e^y$ 和 $e^{-y}$ 再加减`, R`分段函数逐段求反，每段的值域就是新的分段条件`],
          refs: [
            { src: "30讲 第1讲 p5", text: R`水平画线法：任一水平直线和图形至多一个交点，就有反函数；$f[f^{-1}(x)]=x$，$f^{-1}[f(x)]=x$` },
            { src: "30讲 例1.3 方法总结 p6", text: R`利用对数的性质，巧妙地反解 $x$` },
            { src: "吉米【26】p6；1000题基础篇 第1章第3题", text: R`分段函数先求每段的值域，再逐段求反，每段值域就是反函数的分段范围` }
          ]
        },
        think: R`求反函数就是从 $y=f(x)$ 中解出 $x$。直接解要处理根号：$\mathrm e^y=x+\sqrt{x^2+1}$。注意 $x+\sqrt{x^2+1}$ 和 $\sqrt{x^2+1}-x$ 互为倒数，所以 $\mathrm e^{-y}$ 给出另一个式子，两式相减根号就消掉了。`,
        first: R`解出 $x$ 用 $y$ 表示；这里同时写出 $e^{y}$ 和 $e^{-y}$，相减消掉根号`,
        steps: [
          R`++去对数++：$\mathrm e^{y}=x+\sqrt{x^2+1}$ ①`,
          R`++取倒数并分母有理化++：$\mathrm e^{-y}=\dfrac{1}{x+\sqrt{x^2+1}}=\dfrac{\sqrt{x^2+1}-x}{(x^2+1)-x^2}=\sqrt{x^2+1}-x$ ②`,
          R`++① − ②++：$\mathrm e^{y}-\mathrm e^{-y}=2x$，所以 $x=\dfrac{\mathrm e^{y}-\mathrm e^{-y}}{2}$`,
          R`++交换 $x,y$ 的记号++：反函数 $y=\dfrac{\mathrm e^{x}-\mathrm e^{-x}}{2}=\operatorname{sh}x$`,
          R`++反函数的定义域 = 原函数的值域++。原函数是奇函数（见题型"判断奇偶性"），$x\to+\infty$ 时 $y\to+\infty$，且单调增加、连续，值域是 $(-\infty,+\infty)$，所以反函数定义域为 $\mathbb R$`
        ],
        pitfall: R`!!反函数的定义域要写原函数的值域!!；分段函数逐段求反，每段的值域就是新的分段范围（1000题基础篇 第1章第3题，吉米【26】）`,
        practice: "教材习题1-1 第11题（p16）；吉米【23】【26】（p6）；1000题基础篇 第1章第3题"
      },
      {
        id: "t13", name: "求值域",
        signal: R`问"==值域是多少=="，函数是几层复合（如 $\sin\dfrac{\pi x}{2(1+x^2)}$），或选择题给出几个区间`,
        example: { q: R`求 $y=\sin\dfrac{\pi x}{2(1+x^2)}$ 的值域。`, src: "吉米 第1章【25】p6" },
        idea: {
          key: R`==由内向外传范围==；单个函数用配方、基本不等式或单调性。`,
          how: [R`单个函数：配方、基本不等式、单调性、有界性估计`, R`复合函数：先求内层的值域，作为外层的输入范围，再看外层在上面的单调性`, R`检查端点能不能取到，决定开闭`, R`分段函数：各段值域取并集`],
          refs: [
            { src: "吉米【24】【25】p6", text: R`用 $1+x^2\geqslant2|x|$ 放缩出内层范围，再用外层的单调性` },
            { src: "30讲 例1.4 p7", text: R`根号里配方：$-x^2+2x+3=-(x-1)^2+4$，读出最大值和最小值` }
          ]
        },
        think: R`复合函数求值域：由内向外传范围。最外层是 $\sin$，只要知道它里面的角能取哪些值；角是 $\frac{\pi}{2}\cdot\frac{x}{1+x^2}$，核心是求 $\frac{x}{1+x^2}$ 的范围，又回到 $1+x^2\geqslant2|x|$。`,
        first: R`先求内层 $\dfrac{x}{1+x^2}$ 的范围`,
        steps: [
          R`++内层++：由 $1+x^2\geqslant2|x|$ 得 $\left|\dfrac{x}{1+x^2}\right|\leqslant\dfrac12$，即 $-\frac12\leqslant\dfrac{x}{1+x^2}\leqslant\frac12$；$x=1$ 时取 $\frac12$，$x=-1$ 时取 $-\frac12$，中间的值由连续性都能取到`,
          R`++中间层++：乘 $\frac{\pi}{2}$，角 $\theta=\dfrac{\pi x}{2(1+x^2)}\in\left[-\frac{\pi}{4},\frac{\pi}{4}\right]$`,
          R`++外层++：$\sin\theta$ 在 $\left[-\frac{\pi}{4},\frac{\pi}{4}\right]$ 上单调增加，最小值 $\sin\left(-\frac{\pi}{4}\right)=-\frac{\sqrt2}{2}$，最大值 $\frac{\sqrt2}{2}$`,
          R`==值域为 $\left[-\frac{\sqrt2}{2},\frac{\sqrt2}{2}\right]$==`
        ],
        pitfall: R`把内层范围传给外层之前，要!!确认外层在这个区间上单调，并确认端点取得到!!`,
        practice: "吉米【24】–【26】（p6）"
      },
      {
        id: "t14", name: "由抽象函数方程推出奇偶性", tag: "研",
        signal: R`给出 $f(x+y)=f(x)+f(y)$ 之类==对任意 $x,y$ 成立==的关系`,
        example: { q: R`设对任意 $x,y$，都有 $f(x+y)=f(x)+f(y)$，证明 $f(x)$ 是奇函数。`, src: "30讲 第1讲 例1.8 p13" },
        idea: {
          key: R`==赋特殊值：先代 $0$，再代 $-x$、$x$==，推出 $f(0)$ 和要证的关系。`,
          how: [R`令变量取 $0$，求出 $f(0)$`, R`令 $y=-x$ 得到奇偶关系，令 $y=x$ 得到倍数关系`, R`对照要证性质的定义下结论`],
          refs: [
            { src: "30讲 例1.8 方法总结 p13", text: R`用定义法证明 $f(-x)=-f(x)$：先令 $x=y=0$ 得 $f(0)=0$，再令 $y=-x$` }
          ]
        },
        think: R`只给了对任意 $x,y$ 成立的函数方程，没有表达式。要证 $f(-x)=-f(x)$，就要让方程里同时出现 $f(x)$ 和 $f(-x)$：令 $y=-x$ 即可，但这时左边是 $f(0)$，所以先用 $x=y=0$ 求出 $f(0)$。`,
        first: R`赋特殊值：先令 $x=y=0$，再令 $y=-x$`,
        steps: [
          R`++求 $f(0)$++：令 $x=y=0$，得 $f(0)=f(0)+f(0)=2f(0)$，所以 $f(0)=0$`,
          R`++令 $y=-x$++：$f(x+(-x))=f(x)+f(-x)$，即 $f(0)=f(x)+f(-x)$`,
          R`++代入 $f(0)=0$++：$f(-x)=-f(x)$ 对任意 $x$ 成立；定义域是 $\mathbb R$，关于原点对称，所以 $f$ 是奇函数`
        ],
        pitfall: R`!!先求出 $f(0)$!!，第二步才用得上`,
        practice: "30讲 例1.8（p13）、例1.9（p14）"
      }
    ],

    pitfalls: [
      { id: "e2", wrong: R`化简后对应法则一样，就是同一个函数`, why: R`化简可能改变定义域（约分、对数拆分）`, right: R`先比定义域，再比法则`, test: R`$f(x)=\dfrac{x^2-1}{x-1}$ 与 $g(x)=x+1$ 相同吗？`, ans: R`不同，$f$ 在 $x=1$ 没有定义`, link: "题型 3" },
      { id: "e3", wrong: R`$f$ 的定义域是 $[0,1]$，所以 $f(x^2)$ 的定义域也是 $[0,1]$`, why: R`定义域指 $x$ 的范围，$[0,1]$ 是括号里 $x^2$ 的范围`, right: R`令 $x^2\in[0,1]$，解出 $x$`, test: R`$f(x)$ 定义域为 $[0,1]$，$f(x^2)$ 的定义域？`, ans: R`$[-1,1]$`, link: "题型 2" },
      { id: "e4", wrong: R`换元求出 $f(x)$ 后不写定义域`, why: R`新变量受原式限制，能取的值有限`, right: R`$f$ 的定义域 = 新变量的取值范围`, test: R`$f\left(x+\frac1x\right)=x^2+\frac{1}{x^2}$，$f(1)$ 等于多少？`, ans: R`没有定义。$f(t)=t^2-2$ 只在 $|t|\geqslant2$ 上有定义，而 $x+\frac1x$ 取不到 $1$`, link: "题型 4" },
      { id: "e5", wrong: R`判奇偶直接算 $f(-x)$`, why: R`奇偶性的前提是定义域关于原点对称`, right: R`先查定义域，再算 $f(-x)$`, test: R`$f(x)=x^2,\ x\in[-1,2]$ 是偶函数吗？`, ans: R`不是，定义域不对称，非奇非偶`, link: "题型 8" },
      { id: "e9", wrong: R`"无界"写成"存在 $M$，使 $|f(x)|>M$"`, why: R`量词顺序错了。$\sin x$ 也满足"存在 $M=0.5$ 和某个 $x$ 使 $|\sin x|>M$"，但它有界`, right: R`无界：对任何 $M>0$，总存在 $x_1\in X$，使 $|f(x_1)|>M$（教材 p6）`, test: R`把"$f$ 在 $X$ 上有界"的否定完整写出来。`, ans: R`对任何正数 $M$，总存在 $x_1\in X$，使 $|f(x_1)|>M$`, link: "知识点 有界性" },
      { id: "e11", wrong: R`有反函数就一定单调`, why: R`单调只是有反函数的充分条件，有反函数等价于单射`, right: R`判断有没有反函数，看单射（水平线和图形至多一个交点，30讲 p5）`, test: R`$f(x)=x\ (x\geqslant0)$，$f(x)=\frac1x\ (x<0)$ 有反函数吗？单调吗？`, ans: R`有反函数（就是它自己），但不单调`, link: "知识点 反函数" },
      { id: "e13", wrong: R`$y=f(x)$ 和 $x=f^{-1}(y)$ 的图形关于 $y=x$ 对称`, why: R`$x=f^{-1}(y)$ 只是把同一个关系换个方向写，是同一条曲线`, right: R`写成 $y=f^{-1}(x)$（交换字母）后，才和 $y=f(x)$ 关于 $y=x$ 对称（30讲 p5）`, test: R`$y=e^x$ 和 $x=\ln y$ 的图形是什么关系？`, ans: R`是同一条曲线`, link: "知识点 反函数" },
      { id: "e16", wrong: R`分段函数复合时，用 $x$ 的分段点去分外层`, why: R`外层的分段条件管的是内层的值`, right: R`先按内层的值分段，再翻译成 $x$ 的范围`, test: R`$g(u)=\begin{cases}1,&u\geqslant0\\0,&u<0\end{cases}$，求 $g(x^2-1)$。`, ans: R`$|x|\geqslant1$ 时为 $1$，$|x|<1$ 时为 $0$`, link: "题型 6" },
      { id: "e17", wrong: R`周期函数一定有最小正周期`, why: R`所有正周期组成的集合可能没有最小值`, right: R`狄利克雷函数没有最小正周期（教材 p9）`, test: R`常数函数 $f(x)=1$ 的周期是多少？`, ans: R`任何正数都是它的周期，没有最小正周期`, link: "知识点 周期性" },
      { id: "e18", wrong: R`$\sin^2x$ 的周期是 $2\pi$，所以最小正周期是 $2\pi$`, why: R`$2\pi$ 是周期，但不是最小的`, right: R`先降幂：$\sin^2x=\frac{1-\cos2x}{2}$，最小正周期 $\pi$`, test: R`$|\sin x|$ 的最小正周期是多少？`, ans: R`$\pi$`, link: "题型 11" }
    ]
  });
})();
