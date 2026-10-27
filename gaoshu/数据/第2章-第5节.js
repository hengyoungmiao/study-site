/*
类型: 题型
标题: 高等数学 第2章 第5节 函数的微分 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-27
更新日期: 2026-10-27
状态: 完成

页码一律是印刷页（转换稿的页码标记在每页开头，标记后面的内容属于该页；2.5 从 p107 开始，习题2-5 在 p117–119）。
教材 = 同济第八版上册；习题全解 = 同济第八版上册习题全解指导（习题2-5 在 p78–83）；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；
30讲 = 张宇基础30讲；18讲 = 张宇高数18讲；武忠祥 = 高等数学辅导讲义（强化）；1000题 = 张宇1000题（只写题号）。
吉米本节「基本题型」只有一类：求函数的微分（【201】–【204】p59–60），按考法拆成题型 1–4；题型 5–9 是教材和习题全解的题型，题型 10 是 30讲的考法。
网页上不标「⚠️未核验」；没有出处的几条（陷阱小题、反例）都已逐条核对，近似值、误差用代码验算过。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "2.5",
    chapter: 2,
    title: "函数的微分",
    pages: "教材 p107–119",
    sources: [
      "教材 第二章第五节 p107–119",
      "习题全解 习题2-5 p78–83",
      "吉米 第2章 §4 微分 p58–60【201】–【204】",
      "30讲 第3讲 4 微分的概念 p112–114、习题 3.3、3.4 p115–117；第4讲 例4.4 p123",
      "18讲 第3讲 p25",
      "武忠祥 第2章第一节 (二)(三)(四) p57–58",
      "1000题 基础篇第3章"
    ],
    updated: "2026-10-27",

    framework: {
      main: R`微分就是"用切线代替曲线"：增量 $\Delta y=A\Delta x+o(\Delta x)$ 里的线性部分 $A\Delta x$ 叫微分。一元函数可微和可导是一回事，而且 $A=f'(x_0)$，所以 $\mathrm dy=f'(x)\mathrm dx$：求微分就是求导数再乘 $\mathrm dx$。微分形式不变性让 $\mathrm dy=f'(u)\mathrm du$ 对中间变量也成立；近似公式 $f(x)\approx f(x_0)+f'(x_0)(x-x_0)$ 就是切线近似。`,
      nodes: [
        { id: "DER", go: "2.1:p1", col: 0, row: 0, kind: "map", label: "导数（2.1）", sub: R`$f'(x_0)=\lim\frac{\Delta y}{\Delta x}$` },
        { id: "INC", go: "p1", col: 1, row: 0, kind: "func", label: "增量的分解", sub: R`$\Delta y=A\Delta x+o(\Delta x)$` },
        { id: "EQ", go: "p2", col: 0, row: 1, kind: "prop", label: "可微 ⇔ 可导", sub: R`$A=f'(x_0)$` },
        { id: "DY", go: "p4", col: 1, row: 1, kind: "func", label: "微分", sub: R`$\mathrm dy=f'(x)\mathrm dx$` },
        { id: "GEO", go: "p5", col: 2, row: 0, kind: "prop", label: "几何意义", sub: "切线上纵坐标的增量" },
        { id: "RULE", go: "p6", col: 0, row: 2, kind: "build", label: "微分公式与法则", sub: "导数公式乘 dx" },
        { id: "INV", go: "p8", col: 1, row: 2, kind: "build", label: "微分形式不变性", sub: R`$\mathrm dy=f'(u)\mathrm du$` },
        { id: "APP", go: "p10", col: 2, row: 1, kind: "build", label: "近似计算与误差", sub: R`$\Delta y\approx\mathrm dy$` }
      ],
      edges: [
        { from: "INC", to: "DY", label: "取线性部分" },
        { from: "DER", to: "EQ", label: R`系数 $A=f'(x_0)$` },
        { from: "EQ", to: "DY", label: "可导就可微" },
        { from: "DY", to: "GEO", label: "切线代曲线" },
        { from: "GEO", to: "APP", label: "局部线性化" },
        { from: "DY", to: "RULE", label: "导数乘 dx" },
        { from: "RULE", to: "INV", label: "复合函数" }
      ],
      keys: [
        { q: R`可微怎么定义？怎么判断一个函数在某点可微？`, a: R`$\Delta y=A\Delta x+o(\Delta x)$，$A$ 与 $\Delta x$ 无关（教材 p108）；一元函数可微 ⇔ 可导，且 $A=f'(x_0)$（教材 p108–109）。判断可微就转化为判断可导（30讲 p113）。` },
        { q: R`求微分有哪两种做法？`, a: R`$\mathrm dy=f'(x)\mathrm dx$：先求导数再乘 $\mathrm dx$（教材 p110）；或用微分形式不变性 $\mathrm df(u)=f'(u)\mathrm du$ 由外到内一层层写（教材 p112；30讲 例4.4 p123）。隐函数可以两边直接取微分，再解出 $\mathrm dy$（吉米【220】p65）。` },
        { q: R`$\Delta y$ 和 $\mathrm dy$ 是什么关系？`, a: R`$\Delta y-\mathrm dy=o(\Delta x)$；$f'(x_0)\neq0$ 时 $\Delta y\sim\mathrm dy$，$\mathrm dy$ 是 $\Delta y$ 的线性主部（教材 p109）。几何上 $\Delta y$ 是曲线上的增量，$\mathrm dy$ 是切线上的增量（教材 p110）。` },
        { q: R`用微分作近似计算，要点是什么？`, a: R`$f(x)\approx f(x_0)+f'(x_0)(x-x_0)$，就是用切线代替曲线（教材 p114）；$x_0$ 要选 $f(x_0)$、$f'(x_0)$ 好算、$\Delta x$ 又小的点，角度先化成弧度；$|x|$ 很小时直接用 $(1+x)^\alpha\approx1+\alpha x$ 等公式（教材 p115）。` }
      ]
    },

    points: [
      {
        group: "一、微分的定义",
        items: [
          {
            id: "p1", kind: "定义", name: "微分的定义", page: "教材 p107–108",
            body: R`设函数 $y=f(x)$ 在某区间内有定义，$x_0$ 及 $x_0+\Delta x$ 在这区间内，如果函数的增量 $\Delta y=f(x_0+\Delta x)-f(x_0)$ ==可表示为 $\Delta y=A\Delta x+o(\Delta x)$==，其中 ==$A$ 是不依赖于 $\Delta x$ 的常数==，那么称函数 $y=f(x)$ 在点 $x_0$ 是==可微==的，而 ==$A\Delta x$ 叫做函数在点 $x_0$ 相应于自变量增量 $\Delta x$ 的微分==，记作 $\mathrm dy$，即 $\mathrm dy=A\Delta x$。`,
            notes: [
              R`引例：正方形边长由 $x_0$ 变到 $x_0+\Delta x$，$\Delta A=2x_0\Delta x+(\Delta x)^2$，==第一部分是 $\Delta x$ 的线性函数，第二部分是 $o(\Delta x)$==，$|\Delta x|$ 很小时用 $2x_0\Delta x$ 近似代替 $\Delta A$（教材 p107）`,
              R`"线性"指 $A\Delta x$ 是 $\Delta x$ 的一次函数：$A$ 与 $\Delta x$ 无关，但==可以和 $x_0$ 有关==（教材 p108）`,
              R`可微的含义：==用简单的线性增量 $A\Delta x$ 代替复杂的增量 $\Delta y$，误差 $\Delta y-A\Delta x$ 是 $o(\Delta x)$==，可以忽略（30讲 p113）`
            ],
            quiz: R`$y=x^3$ 在 $x_0$ 处的增量 $\Delta y=3x_0^2\Delta x+3x_0(\Delta x)^2+(\Delta x)^3$，哪一部分是微分？`
          },
          {
            id: "p2", kind: "定理", name: "可微的充分必要条件", page: "教材 p108–109",
            body: R`函数 $f(x)$ 在点 $x_0$ ==可微的充分必要条件是 $f(x)$ 在点 $x_0$ 可导==，且当 $f(x)$ 在点 $x_0$ 可微时，其微分一定是 ==$\mathrm dy=f'(x_0)\Delta x$==，即 $A=f'(x_0)$。`,
            notes: [
              R`可微 ⇒ 可导：$\Delta y=A\Delta x+o(\Delta x)$ 两边除以 $\Delta x$，令 $\Delta x\to0$，得 ==$A=\lim\limits_{\Delta x\to0}\dfrac{\Delta y}{\Delta x}=f'(x_0)$==（教材 p108）`,
              R`可导 ⇒ 可微：由 $\dfrac{\Delta y}{\Delta x}=f'(x_0)+\alpha$（$\alpha\to0$）得 $\Delta y=f'(x_0)\Delta x+\alpha\Delta x$，而 ==$\alpha\Delta x=o(\Delta x)$==（教材 p108，用到第一章第四节定理 1）`,
              R`所以一元函数里 ==可微 ⇔ 可导 ⇒ 连续==；连续不一定可微，经典反例是 $|x|$ 在 $x=0$ 处（武忠祥 p57–58）`,
              R`判断可微：写出 $\Delta y$ 和 $f'(x_0)\Delta x$，看 $\lim\limits_{\Delta x\to0}\dfrac{\Delta y-f'(x_0)\Delta x}{\Delta x}$ 是否为 0；==一般直接转化为判断是否可导==（30讲 p113）`
            ],
            quiz: R`$f(x)=|x|$ 在 $x=0$ 处可微吗？$f(x)=x|x|$ 呢？`
          },
          {
            id: "p3", kind: "结论", name: "微分是增量的线性主部", page: "教材 p109",
            body: R`当 ==$f'(x_0)\neq0$== 时，$\lim\limits_{\Delta x\to0}\dfrac{\Delta y}{\mathrm dy}=1$，即 $\Delta x\to0$ 时 ==$\Delta y$ 与 $\mathrm dy$ 是等价无穷小==，于是 ==$\Delta y=\mathrm dy+o(\mathrm dy)$==，$\mathrm dy$ 是 $\Delta y$ 的==线性主部==。在 $|\Delta x|$ 很小时，有近似等式 ==$\Delta y\approx\mathrm dy$==。`,
            notes: [
              R`主部：$\alpha$、$\beta$ 是同一变化过程中的无穷小，==$\beta=\alpha+o(\alpha)$ 时称 $\alpha$ 是 $\beta$ 的主部==（教材 p109 脚注）`,
              R`!!$f'(x_0)=0$ 时 $\mathrm dy=0$，谈不上"主部"!!：如 $y=x^3$ 在 $x=0$ 处，$\mathrm dy=0$，而 $\Delta y=(\Delta x)^3$`,
              R`$\Delta y-\mathrm dy=o(\Delta x)$ 总成立；==$f'(x_0)\neq0$ 时还有 $\Delta y-\mathrm dy=o(\mathrm dy)$==（30讲 习题3.4 p115，解答 p116–117）`
            ],
            quiz: R`$y=x^2$ 在 $x=1$ 处取 $\Delta x=0.1$，$\Delta y$ 和 $\mathrm dy$ 各是多少？`
          },
          {
            id: "p4", kind: "公式", name: R`函数的微分 $\mathrm dy=f'(x)\mathrm dx$`, page: "教材 p109–110",
            body: R`函数在任意点 $x$ 的微分称为函数的微分，记作 $\mathrm dy$ 或 $\mathrm df(x)$，即 $\mathrm dy=f'(x)\Delta x$。通常把自变量的增量 $\Delta x$ 称为==自变量的微分，记作 $\mathrm dx$，即 $\mathrm dx=\Delta x$==，于是 ==$\mathrm dy=f'(x)\mathrm dx$==，从而 ==$\dfrac{\mathrm dy}{\mathrm dx}=f'(x)$==：函数的微分与自变量的微分之商等于导数，所以==导数也叫做"微商"==。`,
            notes: [
              R`例 1：$y=x^2$ 在 $x=1$ 处 $\mathrm dy=2\Delta x$，在 $x=3$ 处 $\mathrm dy=6\Delta x$（教材 p109）`,
              R`例 2：$y=x^3$，$x=2$，$\Delta x=0.02$ 时，$\mathrm dy=3x^2\Delta x=3\times2^2\times0.02=0.24$（教材 p109）`,
              R`==$\mathrm dy$ 和 $x$、$\Delta x$ 都有关==：先求任意点的微分，再代入具体的 $x$ 和 $\Delta x$（教材 p109）`,
              R`为什么 $\mathrm dx=\Delta x$：对 $y=x$ 用定义，$\Delta x=1\cdot\Delta x+0$，所以 $\mathrm dx=1\cdot\Delta x$（30讲 p114 注）`
            ],
            quiz: R`$y=\cos x$ 的微分是什么？$x=\frac\pi2$、$\Delta x=0.01$ 时 $\mathrm dy$ 是多少？`
          }
        ]
      },
      {
        group: "二、微分的几何意义",
        items: [
          {
            id: "p5", kind: "结论", name: "微分的几何意义", page: "教材 p110",
            body: R`过曲线 $y=f(x)$ 上的点 $M(x_0,y_0)$ 作切线 $MT$，当 $x$ 有增量 $\Delta x$ 时，==$\Delta y$ 是曲线上点的纵坐标的增量，$\mathrm dy$ 是切线上点的纵坐标的相应增量==。$|\Delta x|$ 很小时 $|\Delta y-\mathrm dy|$ 比 $|\Delta x|$ 小得多，所以在点 $M$ 附近可以==用切线段近似代替曲线段==。`,
            notes: [
              R`这叫==非线性函数的局部线性化==，是微分学的基本思想方法之一（教材 p110）`,
              R`曲线在切线上方时 $\Delta y>\mathrm dy$，在切线下方时 $\Delta y<\mathrm dy$（习题全解 习题2-5 第2题 p79）`,
              R`可导是"借用这一点附近的值来刻画这一点的变化率"，可微是"借用这一点的值来刻画这一点附近的值的大小"（18讲 p25）`
            ],
            quiz: R`$y=x^2$ 在 $x_0=1$ 处取 $\Delta x=0.1$，$\Delta y-\mathrm dy$ 是正是负？从图上怎么看？`
          }
        ]
      },
      {
        group: "三、基本初等函数的微分公式与微分运算法则",
        items: [
          {
            id: "p6", kind: "公式", name: "基本初等函数的微分公式", page: "教材 p110–111",
            body: R`由导数公式直接写出：==$\mathrm d(x^\mu)=\mu x^{\mu-1}\mathrm dx$==，$\mathrm d(\sin x)=\cos x\,\mathrm dx$，$\mathrm d(\cos x)=-\sin x\,\mathrm dx$，$\mathrm d(\tan x)=\sec^2x\,\mathrm dx$，$\mathrm d(\cot x)=-\csc^2x\,\mathrm dx$，$\mathrm d(\sec x)=\sec x\tan x\,\mathrm dx$，$\mathrm d(\csc x)=-\csc x\cot x\,\mathrm dx$，$\mathrm d(a^x)=a^x\ln a\,\mathrm dx$，$\mathrm d(\mathrm e^x)=\mathrm e^x\mathrm dx$，$\mathrm d(\log_ax)=\dfrac{\mathrm dx}{x\ln a}$，$\mathrm d(\ln x)=\dfrac{\mathrm dx}x$，$\mathrm d(\arcsin x)=\dfrac{\mathrm dx}{\sqrt{1-x^2}}$，$\mathrm d(\arccos x)=-\dfrac{\mathrm dx}{\sqrt{1-x^2}}$，$\mathrm d(\arctan x)=\dfrac{\mathrm dx}{1+x^2}$，$\mathrm d(\operatorname{arccot}x)=-\dfrac{\mathrm dx}{1+x^2}$。`,
            notes: [
              R`==要计算函数的微分，只要计算函数的导数，再乘自变量的微分==（教材 p110）`,
              R`常数的微分 $\mathrm d(C)=0$（吉米 p58）`
            ],
            quiz: R`$\mathrm d(\arctan x)=$？$\mathrm d(a^x)=$？`
          },
          {
            id: "p7", kind: "定理", name: "函数和、差、积、商的微分法则", page: "教材 p111–112",
            body: R`$u=u(x)$、$v=v(x)$ 都可导，则 $\mathrm d(u\pm v)=\mathrm du\pm\mathrm dv$，$\mathrm d(Cu)=C\mathrm du$（$C$ 是常数），==$\mathrm d(uv)=v\mathrm du+u\mathrm dv$==，==$\mathrm d\left(\dfrac uv\right)=\dfrac{v\mathrm du-u\mathrm dv}{v^2}$（$v\neq0$）==。`,
            notes: [
              R`证明：$\mathrm d(uv)=(uv)'\mathrm dx=(u'v+uv')\mathrm dx=u'v\mathrm dx+uv'\mathrm dx$，而 ==$u'\mathrm dx=\mathrm du$，$v'\mathrm dx=\mathrm dv$==（教材 p112）`,
              R`例 5：$\mathrm d(\mathrm e^{1-3x}\cos x)=\cos x\,\mathrm d(\mathrm e^{1-3x})+\mathrm e^{1-3x}\mathrm d(\cos x)=-\mathrm e^{1-3x}(3\cos x+\sin x)\mathrm dx$（教材 p112–113）`
            ],
            quiz: R`$\mathrm d(x\sin2x)=$？`
          },
          {
            id: "p8", kind: "定理", name: "复合函数的微分法则（微分形式不变性）", page: "教材 p112",
            body: R`设 $y=f(u)$ 及 $u=g(x)$ 都可导，则复合函数 $y=f[g(x)]$ 的微分为 $\mathrm dy=y'_x\mathrm dx=f'(u)g'(x)\mathrm dx$。由于 $g'(x)\mathrm dx=\mathrm du$，所以也可以写成 ==$\mathrm dy=f'(u)\mathrm du$==。==无论 $u$ 是自变量还是中间变量，微分形式 $\mathrm dy=f'(u)\mathrm du$ 保持不变==，这一性质称为微分形式不变性。`,
            notes: [
              R`例 3：$y=\sin(2x+1)$，$\mathrm dy=\cos(2x+1)\mathrm d(2x+1)=2\cos(2x+1)\mathrm dx$（教材 p112）`,
              R`例 4：$\mathrm d\ln(1+\mathrm e^{x^2})=\dfrac{\mathrm d(1+\mathrm e^{x^2})}{1+\mathrm e^{x^2}}=\dfrac{\mathrm e^{x^2}\mathrm d(x^2)}{1+\mathrm e^{x^2}}=\dfrac{2x\mathrm e^{x^2}}{1+\mathrm e^{x^2}}\mathrm dx$，==熟练后可以不写出中间变量==（教材 p112）`,
              R`用处：==求微分可以由外到内一层层写 $\mathrm d(\cdot)$==（30讲 例4.4 p123）；隐函数、参数方程可以两边同时取微分（吉米【220】p65）`
            ],
            quiz: R`$\mathrm d(\mathrm e^{\sin x})=$？写出中间一步。`
          },
          {
            id: "p9", kind: "方法", name: R`凑微分：由 $f(x)\mathrm dx$ 找 $\mathrm d(\quad)$`, page: "教材 p113",
            body: R`要使 ==$\mathrm d(\quad)=f(x)\mathrm dx$==，就是找一个导数等于 $f(x)$ 的函数：先找==导数和 $f(x)$ 只差常数倍==的函数，再乘常数把系数凑对。答案不唯一，==一般写成"某函数 $+C$"==（$C$ 为任意常数）。`,
            notes: [
              R`例 6(1)：$\mathrm d(x^2)=2x\mathrm dx$，所以 $x\mathrm dx=\frac12\mathrm d(x^2)=\mathrm d\left(\frac{x^2}2\right)$，一般地 $\mathrm d\left(\frac{x^2}2+C\right)=x\mathrm dx$（教材 p113）`,
              R`例 6(2)：$\cos\omega t\,\mathrm dt=\dfrac1\omega\mathrm d(\sin\omega t)=\mathrm d\left(\dfrac1\omega\sin\omega t\right)$（$\omega\neq0$）（教材 p113）`,
              R`这是第四章不定积分换元法（凑微分法）的基本功，要练熟`
            ],
            quiz: R`$\mathrm d(\quad)=\dfrac1{\sqrt x}\mathrm dx$，括号里填什么？`
          }
        ]
      },
      {
        group: "四、微分在近似计算中的应用",
        items: [
          {
            id: "p10", kind: "公式", name: "用微分作近似计算", page: "教材 p113–114",
            body: R`若 $f'(x_0)\neq0$ 且 $|\Delta x|$ 很小，则 ==$\Delta y\approx\mathrm dy=f'(x_0)\Delta x$==，即 ==$f(x_0+\Delta x)\approx f(x_0)+f'(x_0)\Delta x$==；令 $x=x_0+\Delta x$，得 ==$f(x)\approx f(x_0)+f'(x_0)(x-x_0)$==。实质是==用曲线在点 $(x_0,f(x_0))$ 处的切线近似代替曲线==。`,
            notes: [
              R`选 $x_0$：==$f(x_0)$ 与 $f'(x_0)$ 都容易计算，且 $\Delta x$ 比较小==（教材 p114）`,
              R`例 7：镀铜球，$\Delta V\approx4\pi R_0^2\Delta R=4\times3.14\times1^2\times0.01\approx0.13\ \mathrm{cm}^3$，每只球用铜约 $0.13\times8.9\approx1.16$ g（教材 p114）`,
              R`例 8：$\sin30^\circ30'$，取 $x_0=\frac\pi6$，$\Delta x=\frac\pi{360}$（==先化成弧度==），$\approx\frac12+\frac{\sqrt3}2\times\frac\pi{360}\approx0.5076$（教材 p114）`
            ],
            quiz: R`用微分求 $\cos29^\circ$ 的近似值，$x_0$ 和 $\Delta x$ 各取什么？`
          },
          {
            id: "p11", kind: "公式", name: R`$|x|$ 很小时的常用近似公式`, page: "教材 p115",
            body: R`在 $f(x)\approx f(0)+f'(0)x$ 中，$|x|$ 较小时：==$(1+x)^\alpha\approx1+\alpha x$==（$\alpha\in\mathbf R$），$\sin x\approx x$，$\tan x\approx x$（$x$ 用弧度），==$\mathrm e^x\approx1+x$==，$\ln(1+x)\approx x$。`,
            notes: [
              R`证明：代入 $f(x)\approx f(0)+f'(0)x$，如 $f(x)=(1+x)^\alpha$，$f(0)=1$，$f'(0)=\alpha$（教材 p115）`,
              R`例 9：$\sqrt{1.05}\approx1+\frac12\times0.05=1.025$，直接开方为 $1.02470$，误差不超过 0.001（教材 p115）`,
              R`和第一章的等价无穷小一一对应：$(1+x)^\alpha-1\sim\alpha x$、$\sin x\sim x$、$\mathrm e^x-1\sim x$、$\ln(1+x)\sim x$（教材 p115 提到第一章第九节例 7）`,
              R`==公式里的 $x$ 必须很小==：先把数化成"$1+$小量"的形式，如 $\sqrt[3]{996}=10\sqrt[3]{1-0.004}$（习题全解 习题2-5 第10题 p83）`
            ],
            quiz: R`$\sqrt[6]{65}\approx$？先化成什么形式？`
          },
          {
            id: "p12", kind: "公式", name: "误差估计（教材带 *）", page: "教材 p116–117",
            body: R`精确值 $A$、近似值 $a$，$|A-a|$ 叫 $a$ 的绝对误差，$\dfrac{|A-a|}{|a|}$ 叫相对误差；若 $|A-a|\leqslant\delta_A$，$\delta_A$ 叫测量 $A$ 的==绝对误差限==，$\dfrac{\delta_A}{|a|}$ 叫==相对误差限==。由测得的 $x$ 按 $y=f(x)$ 计算 $y$ 时，若 $|\Delta x|\leqslant\delta_x$，$y'\neq0$，则 ==$\delta_y=|y'|\cdot\delta_x$，$\dfrac{\delta_y}{|y|}=\left|\dfrac{y'}y\right|\cdot\delta_x$==。`,
            notes: [
              R`例 10：$D=60.03$ mm，$\delta_D=0.05$ mm，$A=\frac\pi4D^2$，$\delta_A=\frac\pi2D\cdot\delta_D\approx4.712\ \mathrm{mm}^2$，相对误差限 $2\dfrac{\delta_D}D\approx0.17\%$（教材 p116–117）`,
              R`以后常把绝对误差限与相对误差限简称为绝对误差与相对误差（教材 p117）`,
              R`本小节教材带 *，是选学内容；==幂函数 $y=Cx^n$ 的相对误差是 $x$ 的相对误差的 $|n|$ 倍==（由 $\left|\frac{y'}y\right|=\frac{|n|}{|x|}$ 得到）`
            ],
            quiz: R`$y=x^3$，测量 $x$ 的相对误差是 1%，$y$ 的相对误差约是多少？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "求具体函数的微分（求导乘 dx，或用微分形式不变性）",
        signal: R`"==求 $\mathrm dy$==""求 $\mathrm df(x)$"，函数是具体的初等函数（多层复合、四则运算）`,
        example: { q: R`设 $y=\mathrm e^{\sin(\ln x)}$，求 $\mathrm dy$ 及 $\dfrac{\mathrm dy}{\mathrm dx}$。`, src: "30讲 第4讲 例4.4 p123" },
        idea: {
          key: R`==$\mathrm dy=f'(x)\mathrm dx$==：先求导数再乘 $\mathrm dx$；或用==微分形式不变性 $\mathrm df(u)=f'(u)\mathrm du$== 由外到内一层层写 $\mathrm d(\cdot)$，最后落到 $\mathrm dx$。`,
          how: [
            R`++分清结构++：四则运算用微分法则，复合函数一层一层剥`,
            R`++方法一：先求 $y'$，再写 $\mathrm dy=y'\mathrm dx$++`,
            R`++方法二：由外到内用 $\mathrm df(u)=f'(u)\mathrm du$++，每剥一层就把 $\mathrm d(\text{内层})$ 展开，直到出现 $\mathrm dx$`,
            R`++检查结果末尾带着 $\mathrm dx$++`
          ],
          refs: [
            { src: "教材 p110", text: R`要计算函数的微分，只要计算函数的导数，再乘自变量的微分` },
            { src: "教材 p112", text: R`无论 $u$ 是自变量还是中间变量，微分形式 $\mathrm dy=f'(u)\mathrm du$ 保持不变` },
            { src: "30讲 例4.4 方法总结 p123", text: R`求微分的题目可以选择用链式求导法则，也可以选择用一阶微分形式不变性处理` }
          ]
        },
        think: R`三层复合：最外层 $\mathrm e^u$，中间 $u=\sin v$，最内层 $v=\ln x$。用微分形式不变性，每层写成"外层导数乘 $\mathrm d(\text{内层})$"，剥到 $\mathrm dx$ 为止；求出 $\mathrm dy$ 后两边除以 $\mathrm dx$ 就是导数。`,
        first: R`剥最外层：$\mathrm dy=\mathrm e^{\sin(\ln x)}\,\mathrm d[\sin(\ln x)]$`,
        steps: [
          R`++剥最外层++：$\mathrm d(\mathrm e^u)=\mathrm e^u\mathrm du$，所以 $\mathrm dy=\mathrm e^{\sin(\ln x)}\,\mathrm d[\sin(\ln x)]$`,
          R`++剥中间层++：$\mathrm d[\sin(\ln x)]=\cos(\ln x)\,\mathrm d(\ln x)$`,
          R`++剥最内层++：$\mathrm d(\ln x)=\dfrac1x\mathrm dx$`,
          R`**++合起来++** $\mathrm dy=\dfrac{\mathrm e^{\sin(\ln x)}\cos(\ln x)}{x}\mathrm dx$`,
          R`++两边除以 $\mathrm dx$++：$\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\mathrm e^{\sin(\ln x)}\cos(\ln x)}{x}$`,
          R`++检验（方法一）++：链式法则 $y'=\mathrm e^{\sin(\ln x)}\cdot\cos(\ln x)\cdot\dfrac1x$，乘 $\mathrm dx$ 结果相同`
        ],
        pitfall: R`最后!!漏写 $\mathrm dx$!!；中间层 $\mathrm d(\ln x)$ 没展开就直接换成 $\mathrm dx$，!!漏乘 $\frac1x$!!`,
        practice: "教材 例3、例4、例5（p112–113）、习题2-5 第3题（p118，答案习题全解 p79–80）；30讲 例4.4（p123）"
      },
      {
        id: "t2", name: "已知增量的线性主部，反求导数",
        signal: R`题目说"函数增量 $\Delta y$ 的==线性主部为……=="，或给出 $\Delta y=\cdots\Delta x+o(\Delta x)$，求某个导数值或 $\mathrm dy$`,
        example: { q: R`设函数 $f(u)$ 可导，$y=f(x^2)$，当自变量 $x$ 在 $x=-1$ 处取得增量 $\Delta x=-0.1$ 时，相应的函数增量 $\Delta y$ 的线性主部为 $0.1$，则 $f'(1)=$（　）。(A) $-1$　(B) $0.1$　(C) $1$　(D) $0.5$`, src: "吉米【201】p59；30讲 例3.11 p114" },
        idea: {
          key: R`==线性主部就是微分 $\mathrm dy=y'(x_0)\Delta x$==；$\Delta y=A\Delta x+o(\Delta x)$ 里的 ==$A$ 就是 $y'(x_0)$==。把条件翻译成"$y'(x_0)\cdot\Delta x=$ 已知数"，解出未知量。`,
          how: [
            R`++写出 $\mathrm dy=y'(x_0)\Delta x$++`,
            R`++按求导法则求出 $y'(x_0)$++（里面含要求的未知量，复合函数别漏内层导数）`,
            R`++代入 $x_0$、$\Delta x$，令 $\mathrm dy$ 等于线性主部，解方程++`
          ],
          refs: [
            { src: "吉米【201】点评 p59", text: R`函数微分是函数增量的线性主部，即已知条件 $\mathrm dy=0.1$，使用的公式 $\mathrm dy=y'\Delta x$，但应注意的是 $y'(x_0)=f'(x_0^2)\cdot2x_0$` },
            { src: "30讲 例3.11 p114", text: R`函数的微分是函数增量的线性主部，且 $\mathrm dy=y'\mathrm dx=y'\Delta x$` },
            { src: "30讲 例3.10 分析 p114", text: R`概念题，转化成导数 $\frac{\mathrm dy}{\mathrm dx}$ 代入数值即可` }
          ]
        },
        think: R`"线性主部为 0.1"就是 $\mathrm dy=0.1$。$\mathrm dy=y'(-1)\cdot\Delta x$，而 $y=f(x^2)$ 是复合函数，$y'=f'(x^2)\cdot2x$，在 $x=-1$ 处出现的正是要求的 $f'(1)$。`,
        first: R`写出 $\mathrm dy=f'(x^2)\cdot2x\cdot\Delta x$`,
        steps: [
          R`++写微分++：$y=f(x^2)$ 是复合函数，$\mathrm dy=y'\Delta x=f'(x^2)\cdot2x\cdot\Delta x$`,
          R`++代入 $x=-1$、$\Delta x=-0.1$++：$\mathrm dy=f'(1)\cdot(-2)\cdot(-0.1)=0.2f'(1)$`,
          R`++令 $\mathrm dy$ 等于线性主部++：$0.2f'(1)=0.1$，所以 ==$f'(1)=0.5$==，选 (D)`
        ],
        pitfall: R`!!漏乘内层导数 $2x$!!：$f'(1)\cdot(-0.1)=0.1$ 得 $f'(1)=-1$，误选 (A)；把线性主部当成 $\Delta y$ 本身去算`,
        practice: "吉米【201】（p59）；30讲 例3.10、例3.11（p113–114）"
      },
      {
        id: "t3", name: "抽象函数的微分",
        signal: R`函数里有 ==$f(\square)$、$\mathrm e^{f(x)}$== 这类抽象复合，"$f$ 可微"，求 $\mathrm dy$`,
        example: { q: R`$y=f(\ln x)\mathrm e^{f(x)}$，其中 $f$ 可微，则 $\mathrm dy=$ ____。`, src: "吉米【202】p59" },
        idea: {
          key: R`和具体函数一样：==先分清乘积和复合，再一层一层求==；$[f(\square)]'=f'(\square)\cdot\square'$，括号里的导数不能漏；最后乘 $\mathrm dx$。`,
          how: [
            R`++看整体结构++：乘积用 $(uv)'=u'v+uv'$（或 $\mathrm d(uv)=v\mathrm du+u\mathrm dv$）`,
            R`++每个因子按复合函数求++：$[f(\square)]'=f'(\square)\cdot\square'$，$[\mathrm e^{f(x)}]'=\mathrm e^{f(x)}f'(x)$`,
            R`++整理，提公因式，乘 $\mathrm dx$++`
          ],
          refs: [
            { src: "吉米【202】p59", text: R`$y'=[f(\ln x)]'\mathrm e^{f(x)}+f(\ln x)[\mathrm e^{f(x)}]'=f'(\ln x)\cdot\frac1x\cdot\mathrm e^{f(x)}+f(\ln x)\mathrm e^{f(x)}\cdot f'(x)$` },
            { src: "教材 p112", text: R`在求复合函数的微分时，类似地也可以不写出中间变量` }
          ]
        },
        think: R`$y$ 是 $f(\ln x)$ 和 $\mathrm e^{f(x)}$ 的乘积，先用乘积法则；两个因子都是复合函数：$f(\ln x)$ 内层是 $\ln x$，$\mathrm e^{f(x)}$ 外层是指数、内层是 $f(x)$。`,
        first: R`乘积法则：$y'=[f(\ln x)]'\mathrm e^{f(x)}+f(\ln x)[\mathrm e^{f(x)}]'$`,
        steps: [
          R`++乘积法则++：$y'=[f(\ln x)]'\cdot\mathrm e^{f(x)}+f(\ln x)\cdot[\mathrm e^{f(x)}]'$`,
          R`++第一个因子++：$[f(\ln x)]'=f'(\ln x)\cdot\dfrac1x$`,
          R`++第二个因子++：$[\mathrm e^{f(x)}]'=\mathrm e^{f(x)}\cdot f'(x)$`,
          R`**++提公因式 $\mathrm e^{f(x)}$，乘 $\mathrm dx$++** $\mathrm dy=\mathrm e^{f(x)}\left[\dfrac1xf'(\ln x)+f'(x)f(\ln x)\right]\mathrm dx$`
        ],
        pitfall: R`$[f(\ln x)]'$ 写成 $f'(\ln x)$，!!漏乘 $\frac1x$!!；$[\mathrm e^{f(x)}]'$ 写成 $\mathrm e^{f(x)}$，!!漏乘 $f'(x)$!!`,
        practice: "吉米【202】（p59）；对照 2.2 题型 3（抽象复合函数求导）"
      },
      {
        id: "t4", name: "隐函数的微分（求 dy 或某点的 dy）",
        signal: R`"设 $y=y(x)$ ==由方程 $F(x,y)=0$ 确定=="，求 $\mathrm dy$ 或 $\mathrm dy\big|_{x=x_0}$`,
        example: { q: R`设函数 $y=y(x)$ 由方程 $2^{xy}=x+y$ 所确定，则 $\mathrm dy\big|_{x=0}=$ ____。`, src: "吉米【203】p59" },
        idea: {
          key: R`两种做法：① 两边对 $x$ 求导，解出 $y'$，再 $\mathrm dy=y'\mathrm dx$；② ==两边直接取微分==（微分形式不变性，$x$、$y$ 地位平等，$\mathrm dy$ 是未知量），解出 $\mathrm dy$。求某一点时==先由原方程求出 $y_0$==。`,
          how: [
            R`++求某点时，先把 $x_0$ 代入原方程求出 $y_0$++`,
            R`++两边取微分++：含 $y$ 的项写成 $f'(y)\mathrm dy$，乘积用 $\mathrm d(uv)=v\mathrm du+u\mathrm dv$`,
            R`++代入 $(x_0,y_0)$，解出 $\mathrm dy$++（结果是"系数 $\times\mathrm dx$"）`,
            R`++用"对 $x$ 求导"的做法核对一遍++`
          ],
          refs: [
            { src: "吉米【203】p59", text: R`把 $x=0$ 代入 $2^{xy}=x+y$ 得 $y=1$。对方程两端关于 $x$ 求导 $2^{xy}\cdot\ln2\cdot(y+xy')=1+y'$` },
            { src: "吉米【220】p65", text: R`对方程组两边分别取微分` },
            { src: "教材 p112", text: R`无论 $u$ 是自变量还是中间变量，微分形式 $\mathrm dy=f'(u)\mathrm du$ 保持不变` }
          ]
        },
        think: R`$y$ 解不出来，就两边同时取微分，把 $\mathrm dy$ 当未知量。只问 $x=0$ 处，所以先由原方程求出 $y(0)$，取微分后直接代点。`,
        first: R`把 $x=0$ 代入原方程，求出 $y(0)$`,
        steps: [
          R`++求 $y_0$++：$x=0$ 时 $2^0=0+y$，所以 $y(0)=1$`,
          R`++两边取微分++：左边 $\mathrm d(2^{xy})=2^{xy}\ln2\cdot\mathrm d(xy)=2^{xy}\ln2\,(y\mathrm dx+x\mathrm dy)$；右边 $\mathrm dx+\mathrm dy$`,
          R`++代入 $x=0$、$y=1$++：$1\cdot\ln2\cdot(1\cdot\mathrm dx+0)=\mathrm dx+\mathrm dy$`,
          R`**++解出 $\mathrm dy$++** $\mathrm dy\big|_{x=0}=(\ln2-1)\mathrm dx$`,
          R`++核对++：两边对 $x$ 求导 $2^{xy}\ln2\,(y+xy')=1+y'$，代点得 $y'(0)=\ln2-1$，一致（吉米【203】p59）`
        ],
        pitfall: R`答案写成 $\ln2-1$，!!漏了 $\mathrm dx$!!；!!不先求 $y_0$!!，把 $y$ 也当成 0 代入；$\mathrm d(xy)$ 写成 $y\mathrm dx$，漏掉 $x\mathrm dy$`,
        practice: "吉米【203】【204】（p59–60）；对照 2.4 题型 1（隐函数求导）"
      },
      {
        id: "t5", name: "凑微分：在括号里填入适当的函数",
        signal: R`"将适当的函数填入括号内：==$\mathrm d(\quad)=f(x)\mathrm dx$=="`,
        example: { q: R`将适当的函数填入括号内，使等式成立：(1) $\mathrm d(\quad)=\sin\omega x\,\mathrm dx$（$\omega\neq0$）；(2) $\mathrm d(\quad)=\mathrm e^{-2x}\mathrm dx$。`, src: "教材 习题2-5 第4(4)(6)题 p118" },
        idea: {
          key: R`反过来想"谁的导数是 $f(x)$"：==先找导数和 $f(x)$ 只差常数倍的函数==，求它的微分，看多出来的常数，==乘它的倒数把系数凑成 1==，==最后加 $C$==。`,
          how: [
            R`++看 $f(x)$ 像哪个基本公式的导数++（$\sin\to\cos$，$\mathrm e^{kx}\to\mathrm e^{kx}$，$\frac1x\to\ln x$ ……）`,
            R`++写出那个函数的微分，比较多出的常数因子++`,
            R`++两边除以这个常数，把常数移进 $\mathrm d(\cdot)$ 里++`,
            R`++加上任意常数 $C$，再对括号里的函数求导检验++`
          ],
          refs: [
            { src: "教材 例6 p113", text: R`我们知道，$\mathrm d(x^2)=2x\mathrm dx$。可见 $x\mathrm dx=\frac12\mathrm d(x^2)=\mathrm d\left(\frac{x^2}2\right)$` },
            { src: "教材 例6 p113", text: R`一般地，有 $\mathrm d\left(\frac{x^2}2+C\right)=x\mathrm dx$（$C$ 为任意常数）` }
          ]
        },
        think: R`$\sin\omega x$ 是 $\cos\omega x$ 求导得到的，但会多出 $-\omega$；$\mathrm e^{-2x}$ 求导多出 $-2$。所以各自除以多出的常数。`,
        first: R`写出 $\mathrm d(\cos\omega x)=-\omega\sin\omega x\,\mathrm dx$，比较常数`,
        steps: [
          R`++(1) 找原型++：$\mathrm d(\cos\omega x)=-\omega\sin\omega x\,\mathrm dx$，比要的多了因子 $-\omega$`,
          R`++(1) 凑系数++：$\sin\omega x\,\mathrm dx=-\dfrac1\omega\mathrm d(\cos\omega x)=\mathrm d\left(-\dfrac1\omega\cos\omega x\right)$，填 ==$-\dfrac1\omega\cos\omega x+C$==`,
          R`++(2) 找原型++：$\mathrm d(\mathrm e^{-2x})=-2\mathrm e^{-2x}\mathrm dx$，多了因子 $-2$`,
          R`++(2) 凑系数++：$\mathrm e^{-2x}\mathrm dx=\mathrm d\left(-\dfrac12\mathrm e^{-2x}\right)$，填 ==$-\dfrac12\mathrm e^{-2x}+C$==`,
          R`++检验++：$\left(-\frac1\omega\cos\omega x\right)'=\sin\omega x$，$\left(-\frac12\mathrm e^{-2x}\right)'=\mathrm e^{-2x}$ ✓（习题全解 p80）`
        ],
        pitfall: R`!!系数凑反!!，写成 $-\omega\cos\omega x$；漏了负号；!!漏写 $+C$!!`,
        practice: "教材 例6（p113）、习题2-5 第4题（p118，答案习题全解 p80–81）"
      },
      {
        id: "t6", name: "计算 Δy 与 dy，比较它们的差",
        signal: R`"计算在 $x_0$ 处当 $\Delta x$ 分别等于……时的 ==$\Delta y$ 及 $\mathrm dy$==""标出 $\mathrm dy$、$\Delta y$ 及 $\Delta y-\mathrm dy$，并说明其正负"`,
        example: { q: R`已知 $y=x^3-x$，计算在 $x=2$ 处当 $\Delta x$ 分别等于 $1$、$0.1$、$0.01$ 时的 $\Delta y$ 及 $\mathrm dy$。`, src: "教材 习题2-5 第1题 p117" },
        idea: {
          key: R`==$\Delta y=f(x_0+\Delta x)-f(x_0)$== 按定义精确计算，==$\mathrm dy=f'(x_0)\Delta x$==；==$\Delta y-\mathrm dy$ 是 $\Delta x$ 的高阶无穷小==，$\Delta x$ 越小两者越接近。图上：$\Delta y$ 是曲线上的增量，$\mathrm dy$ 是切线上的增量，曲线在切线上方时 $\Delta y>\mathrm dy$。`,
          how: [
            R`++按定义写出 $\Delta y$，展开成 $\Delta x$ 的多项式++`,
            R`++求 $f'(x_0)$，写出 $\mathrm dy=f'(x_0)\Delta x$++`,
            R`++代入各个 $\Delta x$ 的值++`,
            R`++比较 $\Delta y-\mathrm dy$++：看它比 $\Delta x$ 缩小得多快；画图题看曲线在切线的上方还是下方`
          ],
          refs: [
            { src: "教材 p109", text: R`在 $|\Delta x|$ 很小时，有近似等式 $\Delta y\approx\mathrm dy$` },
            { src: "教材 p110", text: R`当 $\Delta y$ 是曲线 $y=f(x)$ 上的点的纵坐标的增量时，$\mathrm dy$ 就是曲线的切线上点的纵坐标的相应增量` },
            { src: "武忠祥 p57", text: R`$\Delta y=f(x_0+\Delta x)-f(x_0)$ 在几何上表示曲线 $y=f(x)$ 上的增量。$\Delta y\approx\mathrm dy$` }
          ]
        },
        think: R`$\Delta y$ 要按定义算出精确值，展开后能看清哪一项是 $\mathrm dy$、哪些是高阶部分；$\mathrm dy$ 只要 $f'(2)$ 乘 $\Delta x$。`,
        first: R`写出 $\Delta y=(2+\Delta x)^3-(2+\Delta x)-6$ 并展开`,
        steps: [
          R`++按定义写 $\Delta y$++：$f(2)=6$，$\Delta y=(2+\Delta x)^3-(2+\Delta x)-6=11\Delta x+6(\Delta x)^2+(\Delta x)^3$`,
          R`++求 $\mathrm dy$++：$f'(x)=3x^2-1$，$f'(2)=11$，$\mathrm dy=11\Delta x$`,
          R`++代入++：$\Delta x=1$ 时 $\Delta y=18$，$\mathrm dy=11$；$\Delta x=0.1$ 时 $\Delta y=1.161$，$\mathrm dy=1.1$；$\Delta x=0.01$ 时 $\Delta y=0.110601$，$\mathrm dy=0.11$`,
          R`++看差++：$\Delta y-\mathrm dy=6(\Delta x)^2+(\Delta x)^3$，依次为 $7$、$0.061$、$0.000601$，比 $\Delta x$ 缩小得快得多，==这就是 $o(\Delta x)$==（习题全解 p78）`
        ],
        pitfall: R`!!把 $\mathrm dy$ 当成 $\Delta y$!!；展开 $(2+\Delta x)^3$ 时漏项；$\mathrm dy$ 里用了 $f'(2+\Delta x)$ 而不是 $f'(2)$`,
        practice: "教材 例1、例2（p109）、习题2-5 第1、2题（p117，答案习题全解 p78–79）"
      },
      {
        id: "t7", name: "用微分求函数的近似值",
        signal: R`"计算 ==$\sqrt[3]{996}$、$\sin30^\circ30'$、$\arcsin0.5002$ 的近似值==""利用微分代替增量求……"`,
        example: { q: R`计算 $\sqrt[3]{996}$ 的近似值。`, src: "教材 习题2-5 第10(1)题 p119" },
        idea: {
          key: R`==$f(x_0+\Delta x)\approx f(x_0)+f'(x_0)\Delta x$==：选一个离 $x$ 很近、==$f(x_0)$ 和 $f'(x_0)$ 都好算==的 $x_0$；$|x|$ 小时直接用 $(1+x)^\alpha\approx1+\alpha x$ 等公式，==先把数化成"$1+$小量"==；==角度先化成弧度==。`,
          how: [
            R`++确定函数 $f$ 和好算的点 $x_0$，写出 $\Delta x$++（角度化成弧度）`,
            R`++求 $f(x_0)$、$f'(x_0)$++`,
            R`++代入 $f(x_0)+f'(x_0)\Delta x$++`,
            R`根式也可以 ++先提出整次方因子，化成 $a(1+x)^\alpha$，再用 $1+\alpha x$++`
          ],
          refs: [
            { src: "教材 p114", text: R`如果 $f(x_0)$ 与 $f'(x_0)$ 都容易计算，那么可利用 (5-4) 式来近似计算 $\Delta y$，利用 (5-5) 式来近似计算 $f(x_0+\Delta x)$，或利用 (5-6) 式来近似计算 $f(x)$。这种近似计算的实质就是用 $x$ 的线性函数 $f(x_0)+f'(x_0)(x-x_0)$ 来近似表达函数 $f(x)$` },
            { src: "教材 p115", text: R`(i) $(1+x)^\alpha\approx1+\alpha x$（$\alpha\in\mathbf R$）……（下面都假定 $|x|$ 是较小的数值）` },
            { src: "教材 例8 p114", text: R`把 $30^\circ30'$ 化为弧度，得 $30^\circ30'=\frac\pi6+\frac\pi{360}$` }
          ]
        },
        think: R`996 离 1000 很近，$\sqrt[3]{1000}=10$ 好算。把 996 写成 $1000(1-0.004)$，提出 10，剩下 $\sqrt[3]{1-0.004}$，这里 $x=-0.004$ 很小，可以用 $(1+x)^{\frac13}\approx1+\frac x3$。`,
        first: R`$\sqrt[3]{996}=10\sqrt[3]{1-0.004}$`,
        steps: [
          R`++提出整立方++：$996=1000-4$，$\sqrt[3]{996}=\sqrt[3]{1000\left(1-\frac4{1000}\right)}=10\sqrt[3]{1-0.004}$`,
          R`++用 $(1+x)^{\frac13}\approx1+\frac x3$，$x=-0.004$ 很小++：$\sqrt[3]{1-0.004}\approx1-\dfrac{0.004}3$`,
          R`**++乘回 10++** $\sqrt[3]{996}\approx10\left(1-0.001333\right)\approx9.9867$（习题全解 p83）`,
          R`++检验++：直接开方 $\sqrt[3]{996}=9.98665\cdots$，误差约 $2\times10^{-5}$`,
          R`++另一种写法++：取 $f(x)=\sqrt[3]x$，$x_0=1000$，$\Delta x=-4$，$f'(1000)=\frac13\cdot1000^{-\frac23}=\frac1{300}$，$f\approx10-\frac4{300}\approx9.9867$，结果一样`
        ],
        pitfall: R`!!直接对 $996=1+995$ 用 $(1+x)^{\frac13}\approx1+\frac x3$!!（$x=995$ 不小）；三角函数题!!角度不化弧度!!，如把 $30'$ 当成 $0.5$ 代入`,
        practice: "教材 例8、例9（p114–115）、习题2-5 第7、8、9、10题（p119，答案习题全解 p82–83）；总习题二 第18题（p121，答案习题全解 p90）"
      },
      {
        id: "t8", name: "实际问题中用微分估计改变量",
        signal: R`"当半径增加 1 cm 时，面积==大约改变了多少==""镀每只球大约需用多少克铜"`,
        example: { q: R`设扇形的圆心角 $\alpha=60^\circ$，半径 $R=100$ cm。如果 $R$ 不变，$\alpha$ 减少 $30'$，问扇形面积大约改变了多少？又如果 $\alpha$ 不变，$R$ 增加 1 cm，问扇形面积大约改变了多少？`, src: "教材 习题2-5 第6题 p118" },
        idea: {
          key: R`把"改变量"看成函数的增量 $\Delta y$，==$|\Delta x|$ 很小时用 $\mathrm dy=f'(x_0)\Delta x$ 代替==：先写出所求量关于变化的那个量的公式，==角度用弧度==，减少时 $\Delta x$ 取负。`,
          how: [
            R`++写出所求量的公式，只让一个量变++，其余当常数`,
            R`++对变化的量求导，写出 $\Delta S\approx\mathrm dS=S'\Delta x$++`,
            R`++代入 $x_0$ 和 $\Delta x$++（注意正负号、弧度、单位）`
          ],
          refs: [
            { src: "教材 例7 p114", text: R`镀层的体积等于镀铜前、后两个球体体积之差，所以它就是球体体积 $V=\frac43\pi R^3$ 当 $R$ 自 $R_0$ 取得增量 $\Delta R$ 时的增量 $\Delta V$` },
            { src: "习题全解 习题2-5 第6题 p81", text: R`扇形面积公式为 $S=\frac{R^2}2\alpha$。于是 $\Delta S\approx\mathrm dS=\frac{R^2}2\Delta\alpha$` }
          ]
        },
        think: R`扇形面积 $S=\frac12R^2\alpha$（$\alpha$ 用弧度）。两问各只有一个量在变：第一问 $\alpha$ 变，对 $\alpha$ 求导；第二问 $R$ 变，对 $R$ 求导。$30'$ 化成弧度是 $\frac\pi{360}$，减少取负号。`,
        first: R`写出 $S=\frac12R^2\alpha$，第一问对 $\alpha$ 求微分`,
        steps: [
          R`++第一问：$R$ 不变++，$\Delta S\approx\mathrm dS=\dfrac{R^2}2\Delta\alpha$`,
          R`++代入++ $R=100$，$\Delta\alpha=-30'=-\dfrac\pi{360}$：$\Delta S\approx\frac12\times100^2\times\left(-\frac\pi{360}\right)\approx-43.63\ \mathrm{cm}^2$（减少约 $43.63\ \mathrm{cm}^2$）`,
          R`++第二问：$\alpha$ 不变++，$\Delta S\approx\mathrm dS=\alpha R\Delta R$`,
          R`++代入++ $\alpha=\frac\pi3$，$R=100$，$\Delta R=1$：$\Delta S\approx\frac\pi3\times100\times1\approx104.72\ \mathrm{cm}^2$（习题全解 p81）`
        ],
        pitfall: R`!!$\Delta\alpha$ 代 $-30$ 或 $-0.5$!!，没化成弧度；减少时漏了负号；第二问对 $R^2$ 求导写成 $R$`,
        practice: "教材 例7（p114）、习题2-5 第5、6题（p118，答案习题全解 p81）；总习题二 第19题（p121，答案习题全解 p90）"
      },
      {
        id: "t9", name: "误差估计：绝对误差与相对误差",
        signal: R`"测量……的==误差不超过==……，估计……的误差""要求==精确度在 2% 以内==，测量的相对误差不能超过多少"`,
        example: { q: R`计算球体体积时，要求精确度在 $2\%$ 以内。问这时测量直径 $D$ 的相对误差不能超过多少？`, src: "教材 习题2-5 第11题 p119" },
        idea: {
          key: R`把测量误差看成自变量的增量：==绝对误差 $|\Delta y|\approx|y'|\cdot|\Delta x|$，相对误差 $\left|\dfrac{\Delta y}y\right|\approx\left|\dfrac{y'}y\right|\cdot|\Delta x|$==；幂函数 $y=Cx^n$ 的相对误差是 $x$ 的相对误差的 $|n|$ 倍。`,
          how: [
            R`++写出所求量和测量量的公式++`,
            R`++求微分 $\mathrm dy=y'\Delta x$++`,
            R`++算相对误差 $\left|\dfrac{\mathrm dy}y\right|$，化成测量量的相对误差的倍数++`,
            R`++列不等式求范围（或代数求误差限）++`
          ],
          refs: [
            { src: "教材 p117 (5-8)(5-9)", text: R`$y$ 的绝对误差限约为 $\delta_y=|y'|\cdot\delta_x$；$y$ 的相对误差限约为 $\frac{\delta_y}{|y|}=\left|\frac{y'}y\right|\cdot\delta_x$` },
            { src: "教材 例10 p117", text: R`$A$ 的相对误差限约为 $\frac{\delta_A}A=\frac{\frac\pi2D\cdot\delta_D}{\frac\pi4D^2}=2\frac{\delta_D}D$` }
          ]
        },
        think: R`$V=\frac16\pi D^3$ 是 $D$ 的三次方，相对误差会放大 3 倍。所以 $V$ 的相对误差 $\leqslant2\%$ 等价于 $D$ 的相对误差 $\leqslant\frac{2\%}3$。`,
        first: R`写出 $V=\frac16\pi D^3$，求 $\mathrm dV$`,
        steps: [
          R`++写公式++：$V=\dfrac16\pi D^3$`,
          R`++求微分++：$\mathrm dV=\dfrac\pi2D^2\Delta D$`,
          R`++算相对误差++：$\left|\dfrac{\mathrm dV}V\right|=\left|\dfrac{\frac\pi2D^2\Delta D}{\frac\pi6D^3}\right|=3\left|\dfrac{\Delta D}D\right|$`,
          R`++列不等式++：$3\left|\dfrac{\Delta D}D\right|\leqslant2\%$，所以 ==$\left|\dfrac{\Delta D}D\right|\leqslant\dfrac{0.02}3\approx0.667\%$==（习题全解 p83）`
        ],
        pitfall: R`!!相对误差只算了 $\mathrm dV$!!，没除以 $V$；倍数方向反了，得到 $6\%$`,
        practice: "教材 例10（p116–117）、习题2-5 第11、12题（p119，答案习题全解 p83）"
      },
      {
        id: "t10", tag: "研", name: "微分与无穷小的阶（Δy−dy、dy 与 Δx 比阶）",
        signal: R`选择题："当 $\Delta x\to0$ 时，==$\Delta y-\mathrm dy$ 是 $\mathrm dy$ 的……无穷小==""$\mathrm dy$ 是 $\Delta x$ 的……无穷小"`,
        example: { q: R`设函数 $y=f(x)$ 在点 $x_0$ 处可导，且 $f'(x_0)\neq0$。当自变量有增量 $\Delta x$ 时，函数 $y=f(x)$ 的增量为 $\Delta y$，则当 $\Delta x\to0$ 时，$\Delta y-\mathrm dy$ 是 $\mathrm dy$ 的（　）。(A) 高阶无穷小　(B) 低阶无穷小　(C) 同阶非等价无穷小　(D) 等价无穷小`, src: "30讲 习题3.4 p115" },
        idea: {
          key: R`记住三件事：==$\Delta y-\mathrm dy=o(\Delta x)$==（可微的定义）；==$\mathrm dy=f'(x_0)\Delta x$，$f'(x_0)\neq0$ 时与 $\Delta x$ 同阶==（$f'(x_0)=1$ 时等价）；==$f'(x_0)\neq0$ 时 $\Delta y-\mathrm dy=o(\mathrm dy)$==。`,
          how: [
            R`++写出 $\Delta y-\mathrm dy=o(\Delta x)$，$\mathrm dy=f'(x_0)\Delta x$++`,
            R`++按题目要比的两个量作比值，求 $\Delta x\to0$ 时的极限++`,
            R`++$f'(x_0)=0$ 时 $\mathrm dy=0$，不能拿 $\mathrm dy$ 作分母++，要单独讨论`
          ],
          refs: [
            { src: "30讲 习题3.4 解答 p116–117", text: R`由微分的定义可知 $\Delta y-\mathrm dy=o(\Delta x)$，而 $\mathrm dy|_{x=x_0}=f'(x_0)\Delta x$。由题设知 $f'(x_0)\neq0$，可得 $\lim\limits_{\Delta x\to0}\frac{\Delta y-\mathrm dy}{\mathrm dy}=\lim\limits_{\Delta x\to0}\frac1{f'(x_0)}\cdot\frac{o(\Delta x)}{\Delta x}=0$` },
            { src: "教材 p109", text: R`当 $\Delta x\to0$ 时，$\Delta y$ 与 $\mathrm dy$ 是等价无穷小，于是……$\Delta y=\mathrm dy+o(\mathrm dy)$` }
          ]
        },
        think: R`比的是 $\Delta y-\mathrm dy$ 和 $\mathrm dy$。分子是 $o(\Delta x)$，分母是 $f'(x_0)\Delta x$，而 $f'(x_0)\neq0$，比值的极限是 0。`,
        first: R`写出 $\Delta y-\mathrm dy=o(\Delta x)$，$\mathrm dy=f'(x_0)\Delta x$`,
        steps: [
          R`++由可微的定义++：$\Delta y-\mathrm dy=o(\Delta x)$`,
          R`++写出分母++：$\mathrm dy=f'(x_0)\Delta x$，且 $f'(x_0)\neq0$`,
          R`++求比值的极限++：$\lim\limits_{\Delta x\to0}\dfrac{\Delta y-\mathrm dy}{\mathrm dy}=\dfrac1{f'(x_0)}\lim\limits_{\Delta x\to0}\dfrac{o(\Delta x)}{\Delta x}=0$`,
          R`++结论++：==$\Delta y-\mathrm dy$ 是 $\mathrm dy$ 的高阶无穷小==，选 (A)`
        ],
        pitfall: R`把 $\Delta y-\mathrm dy$ 和 $\Delta y$ 混成一个量；!!忽略 $f'(x_0)\neq0$ 这个条件!!，$f'(x_0)=0$ 时 $\mathrm dy=0$，比值没有意义`,
        practice: "30讲 习题3.3、3.4（p115，解答 p116–117）、题一练（p114）；检验：1000题 基础篇第3章 9题；章末题型 15"
      }
    ],

    pitfalls: [
      { wrong: R`$y=x^2$ 的微分是 $\mathrm dy=2x$`, why: R`微分是导数乘自变量的微分，少了 $\mathrm dx$ 就成了导数`, right: R`$\mathrm dy=f'(x)\mathrm dx=2x\mathrm dx$（教材 p109）`, test: R`$y=\cos x$，$\mathrm dy=$？`, ans: R`$-\sin x\,\mathrm dx$`, link: "题型 1" },
      { wrong: R`$\mathrm dy$ 只和 $x$ 有关`, why: R`$\mathrm dy=f'(x)\Delta x$，同一点取不同的 $\Delta x$，微分不同`, right: R`先求任意点的微分，再代入 $x$ 和 $\Delta x$（教材 例2 p109）`, test: R`$y=x^3$，$x=2$ 时 $\Delta x=0.02$ 和 $\Delta x=0.01$ 的 $\mathrm dy$ 各是多少？`, ans: R`$0.24$ 和 $0.12$`, link: "知识点 4" },
      { wrong: R`$\Delta y=\mathrm dy$`, why: R`$\Delta y=\mathrm dy+o(\Delta x)$，只是近似相等，$|\Delta x|$ 越小越接近`, right: R`$\Delta y$ 按定义精确算，$\mathrm dy=f'(x_0)\Delta x$ 是它的线性部分（教材 p109）`, test: R`$y=x^3-x$，$x=2$，$\Delta x=1$ 时 $\Delta y$ 和 $\mathrm dy$ 各是多少？`, ans: R`$\Delta y=18$，$\mathrm dy=11$（习题全解 p78）`, link: "题型 6" },
      { wrong: R`可微比可导条件更强，可导不一定可微`, why: R`一元函数可微和可导互为充要条件`, right: R`$f$ 在 $x_0$ 可微 ⇔ 可导，且 $\mathrm dy=f'(x_0)\Delta x$（教材 p108–109；总习题二 第1(3)题答案 习题全解 p84）`, test: R`$f(x)=x|x|$ 在 $x=0$ 处可微吗？`, ans: R`可微：$f'(0)=\lim\limits_{x\to0}|x|=0$，所以 $\mathrm dy=0$`, link: "知识点 2" },
      { wrong: R`$f$ 在 $x_0$ 可微，所以 $f'(x)$ 在 $x_0$ 连续`, why: R`可微只等价于在这一点可导，导函数不一定连续`, right: R`反例 $x^2\sin\frac1x$（$x\neq0$），$0$（$x=0$）：在 0 处可微，但 $f'(x)$ 在 0 处不连续（武忠祥 p57–58）`, test: R`上面这个函数在 0 处的微分是什么？`, ans: R`$f'(0)=0$，$\mathrm dy=0$`, link: "知识点 2" },
      { wrong: R`$\mathrm dy$ 总是 $\Delta y$ 的主部`, why: R`$f'(x_0)=0$ 时 $\mathrm dy=0$，$\Delta y$ 全是高阶部分`, right: R`只有 $f'(x_0)\neq0$ 时才有 $\Delta y\sim\mathrm dy$、$\mathrm dy$ 是线性主部（教材 p109）`, test: R`$y=x^3$ 在 $x=0$ 处，$\mathrm dy$ 和 $\Delta y$ 各是什么？`, ans: R`$\mathrm dy=0$，$\Delta y=(\Delta x)^3$`, link: "知识点 3" },
      { wrong: R`$\mathrm d\sin(2x+1)=\cos(2x+1)\mathrm dx$`, why: R`$\mathrm d\sin u=\cos u\,\mathrm du$ 里是 $\mathrm du$，$u=2x+1$ 是中间变量，$\mathrm du=2\mathrm dx$`, right: R`$\mathrm dy=\cos(2x+1)\mathrm d(2x+1)=2\cos(2x+1)\mathrm dx$（教材 例3 p112）`, test: R`$\mathrm d\ln(1+\mathrm e^{x^2})=$？`, ans: R`$\dfrac{2x\mathrm e^{x^2}}{1+\mathrm e^{x^2}}\mathrm dx$（教材 例4 p112）`, link: "题型 1" },
      { wrong: R`$\mathrm d(\sin\omega t)=\cos\omega t\,\mathrm dt$，所以 $\mathrm d(\sin\omega t)=\cos\omega t\,\mathrm dt$ 的括号里填 $\sin\omega t$`, why: R`$\sin\omega t$ 的导数是 $\omega\cos\omega t$，多了因子 $\omega$`, right: R`$\cos\omega t\,\mathrm dt=\mathrm d\left(\frac1\omega\sin\omega t\right)$（教材 例6 p113）`, test: R`$\mathrm d(\quad)=\sec^23x\,\mathrm dx$？`, ans: R`$\frac13\tan3x+C$（习题全解 p81）`, link: "题型 5" },
      { wrong: R`$\mathrm d(\quad)=x\mathrm dx$ 只能填 $\dfrac{x^2}2$`, why: R`常数的微分是 0，加任意常数仍然成立`, right: R`一般写成 $\frac{x^2}2+C$（教材 例6 p113）`, test: R`$\mathrm d(\quad)=\dfrac1{1+x}\mathrm dx$？`, ans: R`$\ln(1+x)+C$`, link: "题型 5" },
      { wrong: R`$\mathrm d\arcsin\sqrt{1-x^2}=-\dfrac{\mathrm dx}{\sqrt{1-x^2}}$（对所有 $x$）`, why: R`$\sqrt{1-(1-x^2)}=\sqrt{x^2}=|x|$，不是 $x$`, right: R`$\mathrm dy=-\dfrac x{|x|}\cdot\dfrac{\mathrm dx}{\sqrt{1-x^2}}$，$-1<x<0$ 时为 $\frac{\mathrm dx}{\sqrt{1-x^2}}$，$0<x<1$ 时为 $-\frac{\mathrm dx}{\sqrt{1-x^2}}$（习题全解 习题2-5 第3(7)题 p80）`, test: R`$x=-\frac12$ 时 $\mathrm dy=$？`, ans: R`$\dfrac2{\sqrt3}\mathrm dx$`, link: "题型 1" },
      { wrong: R`隐函数的微分 $\mathrm d(xy)=y\mathrm dx$`, why: R`$x$、$y$ 都在变，乘积的微分有两项`, right: R`$\mathrm d(xy)=y\mathrm dx+x\mathrm dy$（教材 p111）`, test: R`$2^{xy}=x+y$，两边取微分得什么？`, ans: R`$2^{xy}\ln2\,(y\mathrm dx+x\mathrm dy)=\mathrm dx+\mathrm dy$`, link: "题型 4" },
      { wrong: R`$y=f(x^2)$ 的微分是 $f'(x^2)\mathrm dx$`, why: R`$x^2$ 是中间变量，还要乘 $\mathrm d(x^2)=2x\mathrm dx$`, right: R`$\mathrm dy=f'(x^2)\cdot2x\,\mathrm dx$（吉米【201】点评 p59）`, test: R`$y=f(x^2)$，$x=-1$、$\Delta x=-0.1$ 时线性主部为 $0.1$，$f'(1)=$？`, ans: R`$0.5$`, link: "题型 2" },
      { wrong: R`$\sin30^\circ30'\approx\sin30^\circ+\cos30^\circ\times30'$，$30'$ 代 $0.5$`, why: R`$(\sin x)'=\cos x$ 的前提是 $x$ 用弧度`, right: R`$30'=\frac\pi{360}$，$\sin30^\circ30'\approx\frac12+\frac{\sqrt3}2\cdot\frac\pi{360}\approx0.5076$（教材 例8 p114）`, test: R`$\cos29^\circ\approx$？`, ans: R`$\frac{\sqrt3}2+\frac\pi{360}\approx0.8748$（习题全解 p82）`, link: "题型 7" },
      { wrong: R`$\sqrt[3]{996}=\sqrt[3]{1+995}\approx1+\dfrac{995}3$`, why: R`$(1+x)^\alpha\approx1+\alpha x$ 要求 $|x|$ 很小`, right: R`先提出整立方：$10\sqrt[3]{1-0.004}\approx9.9867$（习题全解 p83）`, test: R`$\sqrt[6]{65}\approx$？`, ans: R`$2\sqrt[6]{1+\frac1{64}}\approx2\left(1+\frac1{384}\right)\approx2.0052$（习题全解 p83）`, link: "题型 7" },
      { wrong: R`球的直径相对误差 1%，体积相对误差也是 1%`, why: R`$V=\frac16\pi D^3$，相对误差放大 3 倍`, right: R`$\left|\dfrac{\mathrm dV}V\right|=3\left|\dfrac{\Delta D}D\right|$（习题全解 习题2-5 第11题 p83）`, test: R`圆面积 $A=\frac\pi4D^2$，$D$ 的相对误差 0.1%，$A$ 的相对误差约多少？`, ans: R`$0.2\%$`, link: "题型 9" },
      { wrong: R`$\Delta y-\mathrm dy$ 总是 $\mathrm dy$ 的高阶无穷小`, why: R`$f'(x_0)=0$ 时 $\mathrm dy=0$，不能作比较的分母`, right: R`$\Delta y-\mathrm dy=o(\Delta x)$ 总成立；$f'(x_0)\neq0$ 时才有 $\Delta y-\mathrm dy=o(\mathrm dy)$（30讲 习题3.4 p116–117）`, test: R`切线与直线 $y=2-x$ 垂直，$\mathrm dy$ 与 $\Delta x$ 是什么关系？`, ans: R`等价：$f'(x_0)=1$，$\mathrm dy=\Delta x$（30讲 习题3.3 p116）`, link: "题型 10" }
    ]
  });
})();
