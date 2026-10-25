/*
类型: 题型
标题: 高等数学 第1章 章末 —— 考研难度提升
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-19
更新日期: 2026-10-19
状态: 完成

页码一律是印刷页（转换稿的页码标记标在每页开头）。
30讲 = 张宇《考研数学基础30讲·高数分册》第1、2讲；18讲 = 张宇《高等数学18讲》第1、2讲；
武忠祥 = 《高等数学辅导讲义（强化）》第1章；1000题 = 张宇1000题（基础篇、强化篇，只引题号）。
恆已学过一遍高数（2026-10-19），章末直接使用洛必达法则、泰勒公式、拉格朗日中值定理、变限积分。
1000题强化篇第1章的解析不在知识库里，用到的答案是自己算的，已用代码验算。
*/
(function () {
  const R = String.raw;
  KB.addChapterEnd({
    chapter: 1,
    pages: "30讲 第1–2讲 p3–98；18讲 第1–2讲 p1–22；武忠祥 第1章 p3–54",
    sources: ["30讲 第1讲 p25–74、第2讲 p79–98", "18讲 第1讲 p1–13、第2讲 p14–22", "武忠祥 第1章 p3–54", "1000题 基础篇 第1–2章；强化篇 第1–2章"],
    updated: "2026-10-19",

    mindmap: {
      title: "全章思维导图",
      main: R`一条主线：函数是研究对象 → 极限是工具 → 连续是用极限描述的性质。考研把这三块揉在一起考：算极限是核心，比阶、反求参数、判间断都归结为算极限。`,
      root: "第一章 函数 · 极限 · 连续",
      go: "1.1",
      branches: [
        { label: "函数", go: "1.1", kids: [
          { label: "1.1 映射与函数", go: "1.1", kids: [
            { label: "定义域与两要素", go: "1.1:p5" },
            { label: "有界 · 单调 · 奇偶 · 周期", go: "1.1:p8" },
            { label: "反函数", go: "1.1:p12" },
            { label: "复合函数", go: "1.1:p14" },
            { label: "初等函数", go: "1.1:p17" }
          ] }
        ] },
        { label: "极限", go: "1.2", kids: [
          { label: "1.2 数列的极限", go: "1.2", kids: [
            { label: "唯一 · 有界 · 保号", go: "1.2:p6" },
            { label: "子数列判发散", go: "1.2:p11" }
          ] },
          { label: "1.3 函数的极限", go: "1.3", kids: [
            { label: "左右极限", go: "1.3:p5" },
            { label: "局部有界 · 局部保号", go: "1.3:p9" },
            { label: "海涅定理", go: "1.3:p11" }
          ] },
          { label: "1.4 无穷小与无穷大", go: "1.4", kids: [
            { label: "极限 = A + 无穷小", go: "1.4:p3" },
            { label: "无穷大与无界", go: "1.4:p9" },
            { label: "渐近线", go: "1.4:p7" }
          ] },
          { label: "1.5 极限运算法则", go: "1.5", kids: [
            { label: "四则运算的前提", go: "1.5:p3" },
            { label: "存在与不存在的组合", go: "1.5:p7" },
            { label: "抓大头", go: "1.5:p11" }
          ] },
          { label: "1.6 存在准则 · 重要极限", go: "1.6", kids: [
            { label: "夹逼准则", go: "1.6:p1" },
            { label: "单调有界准则", go: "1.6:p6" },
            { label: R`$\frac{\sin x}{x}\to1$`, go: "1.6:p4" },
            { label: R`$1^\infty$ 型`, go: "1.6:p11" }
          ] },
          { label: "1.7 无穷小的比较", go: "1.7", kids: [
            { label: "阶的定义", go: "1.7:p1" },
            { label: "常用等价", go: "1.7:p4" },
            { label: "替换定理", go: "1.7:p7" }
          ] }
        ] },
        { label: "连续", go: "1.8", kids: [
          { label: "1.8 连续与间断", go: "1.8", kids: [
            { label: "连续的定义", go: "1.8:p2" },
            { label: "间断点分类", go: "1.8:p9" }
          ] },
          { label: "1.9 连续函数的运算", go: "1.9", kids: [
            { label: "初等函数在定义区间内连续", go: "1.9:p6" },
            { label: "极限号移进函数", go: "1.9:p3" },
            { label: "幂指函数", go: "1.9:p11" }
          ] },
          { label: "1.10 闭区间上的性质", go: "1.10", kids: [
            { label: "最值 · 有界", go: "1.10:p3" },
            { label: "零点定理", go: "1.10:p5" },
            { label: "介值定理", go: "1.10:p6" }
          ] }
        ] },
        { label: "考研提升（本页）", go: "b3", kids: [
          { label: "① 函数性态", go: "b1" },
          { label: "② 极限概念与性质", go: "b2" },
          { label: "③ 求函数极限", go: "b3" },
          { label: "④ 数列极限", go: "b4" },
          { label: "⑤ 反求参数", go: "b5" },
          { label: "⑥ 无穷小比阶", go: "b6" },
          { label: "⑦ 连续与间断", go: "b7" },
          { label: "⑧ 闭区间证明", go: "b8" }
        ] }
      ]
    },

    /* 小节页顶部显示「章末考研同类」：小节号 → 本页题型号 */
    sectionLinks: {
      "1.1": ["t1", "t2", "t3"],
      "1.2": ["t4", "t15", "t18", "t19", "t20"],
      "1.3": ["t5", "t6", "t28"],
      "1.4": ["t13", "t22"],
      "1.5": ["t7", "t10", "t13", "t14"],
      "1.6": ["t11", "t16", "t17", "t18", "t19"],
      "1.7": ["t7", "t8", "t9", "t21", "t23", "t24", "t25"],
      "1.8": ["t26", "t27", "t28"],
      "1.9": ["t11", "t12", "t26", "t27"],
      "1.10": ["t29", "t30"]
    },

    blocks: [
      { id: "b1", name: "① 函数性态" },
      { id: "b2", name: "② 概念与性质" },
      { id: "b3", name: "③ 求函数极限" },
      { id: "b4", name: "④ 数列极限" },
      { id: "b5", name: "⑤ 反求参数" },
      { id: "b6", name: "⑥ 无穷小比阶" },
      { id: "b7", name: "⑦ 连续与间断" },
      { id: "b8", name: "⑧ 闭区间证明" }
    ],

    framework: {
      title: "考研题型板块",
      main: R`八个板块以"求函数极限"为中心：概念与性质保证运算合法；数列极限借海涅定理化成函数极限；反求参数、比阶、判间断，都是先把问题翻译成一个极限再去算。`,
      nodes: [
        { id: "B1", go: "b1", col: 0, row: 0, kind: "map", label: "① 函数性态", sub: "有界 · 奇偶 · 周期 · 复合" },
        { id: "B2", go: "b2", col: 1, row: 0, kind: "map", label: "② 概念与性质", sub: "保号 · 子列 · 存在与否" },
        { id: "B4", go: "b4", col: 2, row: 0, kind: "build", label: "④ 数列极限", sub: "n 项和 · 连乘 · 递推" },
        { id: "B6", go: "b6", col: 0, row: 1, kind: "prop", label: "⑥ 无穷小比阶", sub: "等价 · 泰勒 · 求导定阶" },
        { id: "B3", go: "b3", col: 1, row: 1, kind: "func", label: "③ 求函数极限", sub: "化简 → 判型 → 选工具" },
        { id: "B5", go: "b5", col: 2, row: 1, kind: "prop", label: "⑤ 反求参数", sub: "极限已知，倒推参数" },
        { id: "B7", go: "b7", col: 0, row: 2, kind: "build", label: "⑦ 连续与间断", sub: "找备选点 → 算左右极限" },
        { id: "B8", go: "b8", col: 1, row: 2, kind: "build", label: "⑧ 闭区间证明", sub: "构造 F(x) · 零点 · 介值" }
      ],
      edges: [
        { from: "B1", to: "B2", label: "有界 · 单调" },
        { from: "B2", to: "B3", label: "保号 · 四则" },
        { from: "B3", to: "B4", label: "海涅：n 换成 x" },
        { from: "B3", to: "B6", label: "比值的极限" },
        { from: "B3", to: "B5", label: "倒过来问" },
        { from: "B3", to: "B7", label: "算左右极限" },
        { from: "B7", to: "B8", label: "连续是前提" }
      ],
      keys: [
        { q: R`求极限的三步是什么？`, a: R`化简先行（提出极限不为 $0$ 的因子、等价代换、恒等变形）→ 判断是七种未定式中的哪一种 → 选工具（洛必达、泰勒、夹逼、拉格朗日中值定理）（30讲 p54–55；18讲 p2）。` },
        { q: R`泰勒公式展开到几阶？`, a: R`$\frac AB$ 型"上下同阶"：分母是 $x^k$，分子就展开到 $x^k$；$A-B$ 型"幂次最低"：展开到两者系数第一次不相等的那一项（30讲 p52–53）。` },
        { q: R`幂指函数 $u^v$ 的三种未定式怎么处理？`, a: R`$1^\infty$：$\lim u^v=\mathrm e^{\lim v(u-1)}$；$\infty^0$、$0^0$：写成 $\mathrm e^{v\ln u}$，化为 $0\cdot\infty$（30讲 p61–62；武忠祥 p30–33）。` },
        { q: R`递推数列 $x_{n+1}=f(x_n)$ 怎么定单调？不单调怎么办？`, a: R`$f$ 单增时，$x_1\leqslant x_2$ 则数列增、$x_1\geqslant x_2$ 则数列减；$f$ 单减时数列不单调，改用"先求出 $a$，再证 $|x_n-a|\leqslant k|x_{n-1}-a|$（$0<k<1$）"（武忠祥 p39；30讲 p91、p93–94）。` },
        { q: R`间断点去哪找、怎么判类型？`, a: R`只看无定义点和分段点（含 $[x]$ 的整数点、$\mathrm e^{\frac1x}$ 的 $0$、分母的零点）；分别算左、右极限和函数值，再按定义下结论（18讲 p9–10）。` }
      ]
    },

    points: [
      {
        group: "① 函数性态",
        items: [
          {
            id: "p1", kind: "结论", name: "常见的奇函数和偶函数", page: "武忠祥 p4",
            body: R`奇函数：$\sin x$、$\tan x$、$\arcsin x$、$\arctan x$、$\ln\frac{1-x}{1+x}$、$\ln(x+\sqrt{1+x^2})$、$\frac{\mathrm e^x-1}{\mathrm e^x+1}$、$f(x)-f(-x)$；偶函数：$x^2$、$|x|$、$\cos x$、$f(x)+f(-x)$。`,
            notes: [R`奇函数在 $x=0$ 有定义时 $f(0)=0$（武忠祥 p4）`, R`可导时：奇函数的导数是偶函数，偶函数的导数是奇函数；连续的奇函数，原函数都是偶函数；连续的偶函数，原函数中只有 $\int_0^xf(t)\mathrm dt$ 是奇函数（武忠祥 p4–5，要用到第二、五章）`],
            quiz: R`$f(x)=x^2\tan x\,\mathrm e^{\cos x}$ 是奇函数还是偶函数？`
          },
          {
            id: "p2", kind: "结论", name: "周期函数的几条结论", page: "武忠祥 p5",
            body: R`$f(x)$ 以 $T$ 为周期，则 $f(ax+b)$ 以 $\frac{T}{|a|}$ 为周期；可导的周期函数，导函数也是周期函数；连续周期函数的原函数是周期函数 $\Leftrightarrow\int_0^Tf(x)\mathrm dx=0$。`,
            notes: [R`$\sin2x$、$|\sin x|$ 以 $\pi$ 为周期（武忠祥 p5）`, R`周期函数的原函数不一定是周期函数，如 $1+\cos x$（武忠祥 p5）`],
            quiz: R`$\int_0^x(1+\cos t)\mathrm dt$ 是周期函数吗？`
          },
          {
            id: "p3", kind: "方法", name: "有界性的四种判定", page: "武忠祥 p5；18讲 p6–7",
            body: R`(1) 定义；(2) $f$ 在 $[a,b]$ 上连续 ⇒ 有界；(3) $f$ 在 $(a,b)$ 内连续，且 $f(a^+)$、$f(b^-)$ 存在 ⇒ 有界（区间换成无穷区间也成立）；(4) $f'(x)$ 在有限区间 $I$ 上有界 ⇒ $f$ 在 $I$ 上有界。`,
            notes: [R`选择题最常用 (3)：只看端点（或无穷远）处的极限（18讲 例1.6 p6–7）`, R`(4) 要求区间有限：$f(x)=x$ 的导数有界，但在 $\mathbb R$ 上无界`],
            quiz: R`$f(x)=\frac{\sin x}{x}$ 在 $(0,+\infty)$ 内有界吗？用哪一条判定？`
          }
        ]
      },
      {
        group: "② 极限概念与性质",
        items: [
          {
            id: "p4", kind: "结论", name: "脱帽严格，戴帽非严格", page: "18讲 p11；30讲 p82",
            body: R`$\lim f(x)=A>0\Rightarrow$ 去心邻域内 $f(x)>0$（脱帽，严格不等）；$f(x)\geqslant0$（或 $>0$）$\Rightarrow\lim f(x)\geqslant0$（戴帽，非严格不等）。`,
            notes: [R`18讲称"极为重要的性质，必考点"`, R`用法：由极限的符号推出函数在附近的符号；由函数的不等式推出极限的不等式`],
            quiz: R`$\lim\limits_{x\to0}\frac{f(x)}{x^2}=1$，能推出 $f$ 在 $0$ 附近的符号吗？`
          },
          {
            id: "p5", kind: "结论", name: "复合函数极限的两个定理", page: "18讲 p20–21",
            body: R`定理一：$\lim\limits_{x\to x_0}g(x)=u_0$，$\lim\limits_{u\to u_0}f(u)=a$，且 $x\neq x_0$ 时 $g(x)\neq u_0$，则 $\lim\limits_{x\to x_0}f[g(x)]=a$（$f$ 在 $u_0$ 连续时不需要最后一条）。定理二：$u_n$ 在有限区间 $I$ 上，$f$ 在 $I$ 上严格单调，且 $\lim f(u_n)$ 存在，则 $\lim u_n$ 存在。`,
            notes: [R`定理二是"由外层的极限推出内层的极限"，关键是外层严格单调（18讲 例2.12 p21）`],
            quiz: R`$\lim\cos x_n$ 存在（$|x_n|\leqslant\frac\pi2$），能推出 $\lim x_n$ 存在吗？`
          },
          {
            id: "p6", kind: "结论", name: "收敛速度：ε 不能和 n 有关", page: "30讲 p94–95",
            body: R`$\lim x_n=a$ 只说明 $x_n$ 趋于 $a$，不说明有多快。把定义中的 $\varepsilon$ 换成任意小的、与 $n$ 无关的正数（如 $\frac1{2^k}$），仍是充要条件；换成与 $n$ 有关的量（如 $\frac1n$），就对收敛速度提了要求，变成充分非必要。`,
            notes: [R`这是命制选择题的依据（30讲 例2.16–2.18 p94–96）`, R`本条只用来理解定义，不考用定义证明`],
            quiz: R`"存在 $N$，$n\geqslant N$ 时 $|x_n-a|\leqslant\frac1n$"是 $x_n\to a$ 的什么条件？`
          },
          {
            id: "p7", kind: "结论", name: "比值判别：a(n+1)/a(n) 的极限", page: "武忠祥 p14–15、p34",
            body: R`若 $\lim\limits_{n\to\infty}\frac{a_{n+1}}{a_n}=a$，且 $|a|<1$，则 $\lim\limits_{n\to\infty}a_n=0$。`,
            notes: [R`常用于含 $n!$、$n^n$、$a^n$ 的数列（武忠祥 例5 p14–15）`, R`$\frac{x_{n+1}}{x_n}\to\frac12$，$x_n>0$，则 $x_n\to0$（30讲 习题2.2 p97）`],
            quiz: R`$\lim\limits_{n\to\infty}\frac{2^nn!}{n^n}=$？`
          }
        ]
      },
      {
        group: "③ 求函数极限",
        items: [
          {
            id: "p8", kind: "方法", name: "化简先行的三招", page: "30讲 p54–55",
            body: R`(a) 提出极限不为 $0$ 的因子，先把它的极限算出来；(b) 等价无穷小代换；(c) 恒等变形：提公因式、拆项、合并、分子分母同除最高次幂、变量代换（负代换、倒代换）。`,
            notes: [R`例：$\lim\limits_{x\to0}\left(\frac{1+\sin x}x-\frac1{\mathrm e^x-1}\right)=\lim\left(\frac1x-\frac1{\mathrm e^x-1}\right)+\lim\frac{\sin x}x$（30讲 p55）`, R`18讲 的说法：化简（恒等变形、等价替换）→ 工具（洛必达、泰勒、拉格朗日）→ 计算（p2）`],
            quiz: R`$\lim\limits_{x\to0}\frac{\mathrm e^{x}\cos x\cdot(x-\sin x)}{x^3}$，第一步做什么？`
          },
          {
            id: "p9", kind: "定理", name: "洛必达法则及其注意", page: "30讲 p47–48；武忠祥 p18",
            body: R`$\frac00$ 或 $\frac\infty\infty$ 型，$f'$、$F'$ 在去心邻域内存在且 $F'\neq0$，$\lim\frac{f'}{F'}$ 存在或为 $\infty$，则 $\lim\frac fF=\lim\frac{f'}{F'}$。`,
            notes: [
              R`"右存在则左存在；左存在，右不一定存在"：$\lim\frac{x^2\sin\frac1x}x=0$，但洛必达后 $2x\sin\frac1x-\cos\frac1x$ 无极限（30讲 p48）`,
              R`七种未定式中只有 $\frac00$、$\frac\infty\infty$ 能直接用；其余五种先化成这两种（武忠祥 p18）`,
              R`数列极限不能直接用，要先改成函数极限（武忠祥 p33）`
            ],
            quiz: R`用洛必达后极限不存在，能说原极限不存在吗？`
          },
          {
            id: "p10", kind: "公式", name: "必背的 8 个泰勒公式（x→0）", page: "30讲 p50；武忠祥 p19",
            body: R`$\sin x=x-\frac{x^3}{6}+o(x^3)$，$\cos x=1-\frac{x^2}2+\frac{x^4}{24}+o(x^4)$，$\arcsin x=x+\frac{x^3}6+o(x^3)$，$\tan x=x+\frac{x^3}3+o(x^3)$，$\arctan x=x-\frac{x^3}3+o(x^3)$，$\ln(1+x)=x-\frac{x^2}2+\frac{x^3}3+o(x^3)$，$\mathrm e^x=1+x+\frac{x^2}2+\frac{x^3}6+o(x^3)$，$(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}2x^2+o(x^2)$。`,
            notes: [R`张宇："泰勒公式是远远优于洛必达法则的"（30讲 p51）`, R`$\sec x=1+\frac{x^2}2+o(x^3)$（30讲 p50）`],
            quiz: R`$\tan x$ 和 $\arctan x$ 的三次项系数分别是多少？`
          },
          {
            id: "p11", kind: "方法", name: "泰勒公式的展开原则", page: "30讲 p52–53",
            body: R`$\frac AB$ 型用"上下同阶"：分母（或分子）是 $x^k$，另一边展开到 $x^k$。$A-B$ 型用"幂次最低"：$A$、$B$ 分别展开到它们系数不相等的 $x$ 的最低次幂为止。`,
            notes: [R`例：$\cos x-\mathrm e^{-\frac{x^2}2}$ 展开到 $x^4$ 系数才不同，得 $-\frac1{12}x^4$（30讲 p53）`, R`$o$ 的运算：加减时低阶吸收高阶；相乘时阶数相加；非零常数倍不改变阶（30讲 p51）`],
            quiz: R`$\lim\limits_{x\to0}\frac{x-\ln(1+x)}{x^2}$，$\ln(1+x)$ 要展开到几次？`
          },
          {
            id: "p12", kind: "公式", name: "差函数的等价无穷小（x→0）", page: "武忠祥 p17；18讲 p4；30讲 p52",
            body: R`$x-\sin x\sim\frac{x^3}6$，$\arcsin x-x\sim\frac{x^3}6$，$\tan x-x\sim\frac{x^3}3$，$x-\arctan x\sim\frac{x^3}3$，$x-\ln(1+x)\sim\frac{x^2}2$，$\mathrm e^x-1-x\sim\frac{x^2}2$，$1-\cos^\alpha x\sim\frac\alpha2x^2$，$(1+x)^x-1\sim x^2$。`,
            notes: [R`武忠祥：前三个要记住，后两个可由前两个推出（p17）`, R`可广义化：$\square-\sin\square\sim\frac{\square^3}6$（$\square\to0$）`, R`可以人为造出差函数：$x-\ln(1+\tan x)=(x-\tan x)+[\tan x-\ln(1+\tan x)]$（18讲 p4）`],
            quiz: R`$x\to0$ 时 $\tan x-\sin x$ 是几阶无穷小？`
          },
          {
            id: "p13", kind: "定理", name: "加减时等价代换的条件", page: "武忠祥 p17",
            body: R`若 $\alpha\sim\alpha_1$，$\beta\sim\beta_1$，且 $\lim\frac{\alpha_1}{\beta_1}=A\neq1$，则 $\alpha-\beta\sim\alpha_1-\beta_1$；若 $A\neq-1$，则 $\alpha+\beta\sim\alpha_1+\beta_1$。`,
            notes: [R`$A=1$（相减）或 $A=-1$（相加）时主部抵消，不能换，要用泰勒或差函数等价`, R`例：$\tan x-\sin x$ 中 $\frac{x}{x}=1$，不能换成 $x-x$`],
            quiz: R`$\sin2x-\sin x$ 能换成 $2x-x$ 吗？为什么？`
          },
          {
            id: "p14", kind: "方法", name: "七种未定式各自怎么化", page: "武忠祥 p18、p25–33；30讲 p54–62",
            body: R`$\frac00$、$\frac\infty\infty$：等价、洛必达、泰勒（$\frac\infty\infty$ 还可同除最高阶无穷大）；$\infty-\infty$：有分母就通分，有根式就有理化，否则提无穷因子或倒代换；$0\cdot\infty$：把简单因子放到分母，化成 $\frac00$ 或 $\frac\infty\infty$；$1^\infty$：$\mathrm e^{\lim v(u-1)}$；$\infty^0$、$0^0$：$\mathrm e^{v\ln u}$ 化为 $0\cdot\infty$。`,
            notes: [R`"设置分母有原则，简单因式才下放"：$x^\alpha$、$\mathrm e^{\beta x}$ 下放，$\ln x$、$\arctan x$ 留在分子（30讲 p58）`, R`$\lim\limits_{x\to0^+}x^\alpha\ln^\beta x=0$（$\alpha,\beta>0$）（30讲 p59）`],
            quiz: R`$\lim\limits_{x\to0^+}x\ln x$ 是哪种型？把谁放到分母？`
          },
          {
            id: "p15", kind: "方法", name: "1^∞ 型三步", page: "武忠祥 p30",
            body: R`第一步写标准型：原式 $=\lim(1+\alpha)^\beta$；第二步求 $\lim\alpha\beta=A$；第三步写结果：原式 $=\mathrm e^A$。`,
            notes: [R`武忠祥比较了凑重要极限、取对数用洛必达、套结论三种方法，"第三种方法简单"（p30）`, R`推广：$\alpha\to0$、$\alpha\beta\to0$ 时 $(1+\alpha)^\beta-1\sim\alpha\beta$，如 $(1+x)^x-1\sim x^2$（武忠祥 p24）`],
            quiz: R`$\lim\limits_{x\to0^+}(\cos\sqrt x)^{\frac1x}$ 的 $\alpha$、$\beta$ 各是什么？`
          },
          {
            id: "p16", kind: "方法", name: "四个「差」的变形", page: "18讲 p8",
            body: R`(1) $x\to\infty$ 要分 $\pm\infty$；(2) 同类函数之差 $f(b)-f(a)$（三角、反三角、对数等）用拉格朗日中值定理；(3) 幂指函数之差提公因式：$f_1^g-f_2^g=f_2^g\left[\left(\frac{f_1}{f_2}\right)^g-1\right]$，$f^{g_1}-f^{g_2}=f^{g_2}(f^{g_1-g_2}-1)$；(4) $\lim[f(x)-ax]$ 把两项合成乘除形式。`,
            notes: [R`$\mathrm e-\left(1+\frac1x\right)^x=\mathrm e\left[1-\mathrm e^{x\ln(1+\frac1x)-1}\right]$（18讲 p8）`, R`总方向：把"和差"化成"积商"（18讲 p8）`],
            quiz: R`$\arctan(x+1)-\arctan x$ 用什么处理？`
          },
          {
            id: "p17", kind: "结论", name: "无穷大的快慢", page: "30讲 p50；18讲 p6；武忠祥 p12",
            body: R`$x\to+\infty$：$\ln^\alpha x\ll x^\beta\ll a^x\ll x^x$；$n\to\infty$：$\ln^\alpha n\ll n^\beta\ll a^n\ll n!\ll n^n$（$\alpha,\beta>0$，$a>1$）。`,
            notes: [R`考试时可直接用（30讲 p50）`, R`$\frac\infty\infty$ 型选择题常用：分子分母同除增长最快的那项（武忠祥 例2 p25）`],
            quiz: R`$\lim\limits_{x\to+\infty}\frac{2^x+x^{100}}{2\mathrm e^x+\ln^{10}x}=$？`
          }
        ]
      },
      {
        group: "④ 数列极限",
        items: [
          {
            id: "p18", kind: "方法", name: "n 项和：夹逼还是定积分定义", page: "武忠祥 p35",
            body: R`把每项分母分成"主体部分"（不随项变化）和"变化部分"。变化部分是主体部分的次要量（如 $n^2+k$，$k$ 从 $1$ 到 $n$）用夹逼；变化部分和主体部分同阶（如 $n^2+k^2$）用定积分定义：$\lim\limits_{n\to\infty}\frac1n\sum\limits_{k=1}^nf\left(\frac kn\right)=\int_0^1f(x)\mathrm dx$。`,
            notes: [R`用定积分定义的一般方法：先提"可爱因子"$\frac1n$，再确定被积函数和积分区间（武忠祥 p21）`],
            quiz: R`$\sum\limits_{k=1}^n\frac n{n^2+k^2}$ 和 $\sum\limits_{k=1}^n\frac n{n^2+k}$ 分别用什么方法？`
          },
          {
            id: "p19", kind: "方法", name: "n 项连乘：夹逼或取对数", page: "武忠祥 p38",
            body: R`$n$ 项连乘的极限常用两种方法：夹逼；取对数化为 $n$ 项和，再用定积分定义。`,
            notes: [R`$\lim\frac{\sqrt[n]{n!}}n=\frac1{\mathrm e}$（武忠祥 p38）`],
            quiz: R`$\ln\sqrt[n]{(n+1)(n+2)\cdots(2n)}-\ln n$ 可以写成什么和式？`
          },
          {
            id: "p20", kind: "方法", name: "递推数列：两种方法 + 定单调、定有界", page: "武忠祥 p39；30讲 p91",
            body: R`方法 1：先证收敛（单调有界），再令 $\lim x_n=A$，由 $A=f(A)$ 求出。方法 2：先由 $A=f(A)$ 求出 $A$，再证 $\lim x_n=A$。数列单调时用方法 1，不单调或难判时用方法 2。定单调：$x_{n+1}-x_n$ 的符号；$\frac{x_{n+1}}{x_n}$ 与 $1$ 比（$x_n$ 不变号）；$f$ 单增时比 $x_1$、$x_2$。定有界：归纳法；常用不等式。`,
            notes: [R`$f$ 单减时 $\{x_n\}$ 不单调（30讲 例2.13 p91）`, R`常用不等式：$2ab\leqslant a^2+b^2$；$\sin x<x<\tan x$；$\frac x{1+x}<\ln(1+x)<x$；$\mathrm e^x\geqslant1+x$（武忠祥 p39）`, R`解出 $A$ 有多个值时，用保号性（戴帽）确定范围再取舍`],
            quiz: R`$x_{n+1}=2+\frac1{x_n}$，$f(x)=2+\frac1x$ 单调性如何？用哪种方法？`
          },
          {
            id: "p21", kind: "定理", name: "压缩映射（两个原理）", page: "18讲 p15；1000题 基础 第2章 8、9 题",
            body: R`原理一：存在常数 $0<k<1$，使 $|x_{n+1}-a|\leqslant k|x_n-a|$，则 $x_n\to a$。原理二：$x_{n+1}=f(x_n)$，$f$ 可导，$a$ 是 $f(x)=x$ 的唯一解，且 $|f'(x)|\leqslant k<1$，则 $x_n\to a$。`,
            notes: [R`$k$ 必须是常数（18讲 p15）；考试时要写出证明过程：$|x_{n+1}-a|\leqslant\cdots\leqslant k^n|x_1-a|\to0$`],
            quiz: R`若只知道 $|x_{n+1}-a|<|x_n-a|$（$k=1$），能推出收敛吗？`
          },
          {
            id: "p22", kind: "公式", name: "常见局部表达式的极限", page: "18讲 p3；武忠祥 p16",
            body: R`$\lim\limits_{n\to\infty}|x|^n=+\infty\ (|x|>1)$，$1\ (|x|=1)$，$0\ (|x|<1)$；$\lim\limits_{n\to\infty}nx^{2n}=0\ (|x|<1)$，$+\infty\ (|x|\geqslant1)$；$\lim\limits_{n\to\infty}\mathrm e^{nx}=+\infty,1,0$（$x>0,=0,<0$）；$\lim\limits_{n\to\infty}\sqrt[n]n=1$。`,
            notes: [R`求"由极限定义的函数"时，先按这些分段（18讲 p3）`],
            quiz: R`$\lim\limits_{n\to\infty}\frac{1+x}{1+x^{2n}}$ 要按 $x$ 分几段？`
          },
          {
            id: "p23", kind: "结论", name: "n 次方根之和：等于最大项", page: "武忠祥 p37",
            body: R`$a_i>0$ 时，$\lim\limits_{n\to\infty}\sqrt[n]{a_1^n+a_2^n+\cdots+a_m^n}=\max\{a_1,\cdots,a_m\}$。`,
            notes: [R`证明用夹逼：$a\leqslant\sqrt[n]{\cdots}\leqslant\sqrt[n]m\,a$（武忠祥 p37）`, R`含参数时画几条线 $y=1$、$y=x$、$y=\frac{x^2}2$ 比大小（武忠祥 p37）`],
            quiz: R`$\lim\limits_{n\to\infty}\sqrt[n]{1+x^n+\left(\frac{x^2}2\right)^n}$（$x\geqslant0$）在 $1\leqslant x<2$ 时等于什么？`
          }
        ]
      },
      {
        group: "⑤ 反求参数",
        items: [
          {
            id: "p24", kind: "方法", name: "反求参数的两条路", page: "30讲 p57–58；武忠祥 p42–44",
            body: R`(1) 脱帽法：$\lim f=A\Rightarrow f=A+\alpha$（$\alpha\to0$），把未知函数解出来代入；(2) 泰勒展开：把含参数的式子展开，比较各次项系数。另外常用：$\frac fg$ 极限存在且 $g\to0$，则 $f\to0$。`,
            notes: [R`多个参数时，先用最低次项（或"分母 $\to0$ 则分子 $\to0$"）定一个，再定下一个（武忠祥 例1 p42–43：先定 $b=1$）`],
            quiz: R`$\lim\limits_{x\to0}\frac{\ln(1+x)-(ax+bx^2)}{x^2}=2$，先由哪一项定 $a$？`
          },
          {
            id: "p25", kind: "方法", name: "lim[f(x)−(ax+b)]=0：先 a 后 b", page: "武忠祥 p43–44",
            body: R`$a=\lim\frac{f(x)}x$，$b=\lim[f(x)-ax]$。`,
            notes: [R`武忠祥：同时求 $a$、$b$ 比较烦琐，分别先求 $a$ 再求 $b$ 比较简单（p44）`, R`这也是斜渐近线 $y=ax+b$ 的求法（第三章）`],
            quiz: R`$x\to-\infty$ 时 $\sqrt{x^2+x+1}$ 除以 $x$ 的极限是 $1$ 还是 $-1$？`
          }
        ]
      },
      {
        group: "⑥ 无穷小比阶",
        items: [
          {
            id: "p26", kind: "方法", name: "比阶的三种方法", page: "武忠祥 p44",
            body: R`(1) 洛必达"求导定阶"：$f\to0$，$f'$ 是 $x$ 的 $k$ 阶无穷小，则 $f$ 是 $k+1$ 阶；(2) 等价代换：$f\sim Ax^k$，则 $f$ 是 $k$ 阶；(3) 泰勒公式。`,
            notes: [R`比阶就是算 $\frac00$ 型极限（武忠祥 p44）`],
            quiz: R`$\int_0^x\cos t^2\mathrm dt$ 用求导定阶是几阶？`
          },
          {
            id: "p27", kind: "结论", name: "复合型、变限积分型的阶", page: "18讲 p4–5；武忠祥 p45",
            body: R`$f\sim ax^m$，$g\sim bx^n$，则 $f[g(x)]\sim ab^mx^{mn}$；$\int_0^{g(x)}f(t)\mathrm dt\sim\int_0^{bx^n}at^m\mathrm dt$，是 $n(m+1)$ 阶。若 $\lim\limits_{x\to0}f(x)=A\neq0$，$h(x)\to0$，则 $\int_0^{h(x)}f(t)\mathrm dt\sim Ah(x)$。`,
            notes: [R`$m$、$n$ 不是整数时要求 $x\to0^+$（18讲 p5）`, R`例：$\int_0^{2-2\cos x}(\mathrm e^{t^2}-1)\mathrm dt\sim\frac13x^6$（18讲 p5）`],
            quiz: R`$\int_0^{x^2}\tan\sqrt t\,\mathrm dt$ 是 $x$ 的几阶无穷小？`
          },
          {
            id: "p28", kind: "结论", name: "带头大哥原则", page: "18讲 p6",
            body: R`$\alpha$、$\beta$ 是同一过程的非零无穷小，且 $\alpha=o(\beta)$，则 $\alpha+\beta\sim\beta$；$\alpha+\beta$ 与 $\beta$ 同号；$\alpha\beta=o(\beta^2)$。`,
            notes: [R`$\beta$ 就是"带头大哥"，决定和的阶与符号`],
            quiz: R`$x\to0$ 时 $3\sin^2x+x^3\cos\frac1x$ 和谁等价？`
          }
        ]
      },
      {
        group: "⑦ 连续与间断",
        items: [
          {
            id: "p29", kind: "方法", name: "判间断的三步", page: "18讲 p9–10",
            body: R`找备选点：无定义点（分母的零点、$\mathrm e^{\frac1x}$ 的 $0$、$\frac1{\sin x}$ 的 $k\pi$、$\ln|x|$ 的 $0$ 等）和分段点（$[x]$ 的整数点等）；计算 $f(x_0^+)$、$f(x_0^-)$、$f(x_0)$；按定义下结论：跳跃、可去、无穷、振荡。`,
            notes: [R`$|x|^{\frac1{(1-x)(x-2)}}$ 要先写成 $\mathrm e^{\frac{\ln|x|}{(1-x)(x-2)}}$，看出 $x=0$ 也是无定义点（18讲 p10）`],
            quiz: R`$\frac1{\int_1^xt|\sin t|\mathrm dt}$ 有哪些无定义点？`
          },
          {
            id: "p30", kind: "方法", name: "由极限定义的函数", page: "30讲 p57；武忠祥 p52；18讲 p3–4",
            body: R`$f(x)=\lim\limits_{n\to\infty}(\cdots)$ 或 $\lim\limits_{t\to x}(\cdots)$：求极限时 $x$ 当常数，按 $|x|$ 与 $1$ 的大小、$x$ 的符号等分段，先求出 $f(x)$ 的分段表达式，再讨论连续性。`,
            notes: [R`"主要关注 $n$ 前面的系数"：系数为 $0$ 时含 $n$ 的项消失（30讲 例1.26 p57）`, R`$t\to x$ 型常是 $1^\infty$（18讲 例1.3 p4；武忠祥 例5 p52）`],
            quiz: R`$f(x)=\lim\limits_{n\to\infty}\frac{x^2+nx(1-x)\sin^2\pi x}{1+n\sin^2\pi x}$ 在整数点和非整数点各等于什么？`
          }
        ]
      },
      {
        group: "⑧ 闭区间证明",
        items: [
          {
            id: "p31", kind: "方法", name: "三类证明题的入口", page: "武忠祥 p52–54；30讲 p91–94",
            body: R`证"存在 $\xi$ 使某式为 $0$"：移项构造 $F(x)$，找两点异号用零点定理（端点可能取等号要分情况）；证"$f(\xi)$ 等于某个平均值"：用最值把平均值夹在 $[m,M]$ 中，用介值定理；无穷区间上：用极限的保号性找到具体的异号点。`,
            notes: [R`方程"有唯一根"：零点定理给存在，单调性（导数）给唯一（30讲 例2.14 p91–92）`],
            quiz: R`证明 $x=2\ln(1+x)$ 在 $(0,+\infty)$ 内有唯一实根，分哪两步？`
          }
        ]
      }
    ],

    types: [
      /* ---------- ① 函数性态 ---------- */
      {
        id: "t1", block: "b1", name: "判断函数在区间上有界（含变限积分、参数）",
        signal: R`"在 $(0,+\infty)$ 上有界，求参数范围"或"在哪个区间内有界"`,
        example: { q: R`已知函数 $f(x)=\dfrac{\int_0^x\ln(1+t^2)\mathrm dt}{x^\alpha}$ 在 $(0,+\infty)$ 上有界，则 $\alpha$ 的取值范围是（ ）。(A) $(0,+\infty)$　(B) $(0,3]$　(C) $(0,2)$　(D) $(1,3]$`, src: "武忠祥 第1章 题型二 例1 p6–7；18讲 例1.6 p6–7" },
        idea: {
          key: R`开区间内连续，有界 ⇔ 两端（含无穷远）的单侧极限都存在；分别算两端极限，取条件的交集。`,
          how: [R`确认函数在区间内部连续`, R`算左端点的单侧极限：变限积分用等价（$\int_0^x\ln(1+t^2)\mathrm dt\sim\frac{x^3}3$）`, R`算无穷远处的极限：$\frac\infty\infty$ 用洛必达`, R`两端都存在的参数取值，就是答案`],
          refs: [
            { src: "武忠祥 题型二 例1 分析 p7", text: R`由于 $f(x)$ 在 $(0,+\infty)$ 上连续，所以只要 $\lim\limits_{x\to0^+}f(x)$ 和 $\lim\limits_{x\to+\infty}f(x)$ 都存在，则 $f(x)$ 在 $(0,+\infty)$ 上必有界` },
            { src: "18讲 例1.6 分析 p7", text: R`若 $f(x)$ 在 $(a,b)$ 上连续，$\lim\limits_{x\to a^+}f(x)$ 存在，$\lim\limits_{x\to b^-}f(x)$ 存在，则 $f(x)$ 在 $(a,b)$ 上有界` }
          ]
        },
        think: R`$f$ 在 $(0,+\infty)$ 内连续，开区间上有界只取决于两端：$x\to0^+$ 和 $x\to+\infty$ 时都不能趋于无穷。所以分两头算极限，各得一个关于 $\alpha$ 的条件，取交集。分子是变限积分，$x\to0^+$ 时用被积函数的等价，$x\to+\infty$ 时用洛必达（变限积分求导）。`,
        first: R`分 $x\to0^+$ 和 $x\to+\infty$ 两头算极限`,
        steps: [
          R`$x\to0^+$：$\ln(1+t^2)\sim t^2$，所以 $\int_0^x\ln(1+t^2)\mathrm dt\sim\int_0^xt^2\mathrm dt=\dfrac{x^3}{3}$，$f(x)\sim\dfrac13x^{3-\alpha}$`,
          R`$x\to0^+$ 时有界要求指数 $3-\alpha\geqslant0$（$3-\alpha<0$ 时 $x^{3-\alpha}\to+\infty$），即 $\alpha\leqslant3$`,
          R`$x\to+\infty$：被积函数 $\ln(1+t^2)\geqslant\ln2>0$（$t\geqslant1$），分子 $\to+\infty$；分母要 $\to+\infty$ 才有机会有界，所以 $\alpha>0$，这时是 $\frac\infty\infty$，用洛必达：$\lim\dfrac{\ln(1+x^2)}{\alpha x^{\alpha-1}}$`,
          R`$\ln(1+x^2)\to+\infty$ 增长比任何正次幂都慢：$\alpha-1>0$ 时比值 $\to0$；$\alpha\leqslant1$ 时分母不趋于 $+\infty$，比值 $\to+\infty$。所以需要 $\alpha>1$`,
          R`取交集 $1<\alpha\leqslant3$，选 (D)`
        ],
        pitfall: R`只看一端；$\alpha=1$ 时 $\frac{\ln(1+x^2)}{1}\to\infty$，不能取`,
        practice: R`武忠祥 p7 注 1、2（$\frac{\int_0^x|\sin t|\mathrm dt}{x^\alpha}$ 选 C）；吉米【93】（1.10）`
      },
      {
        id: "t2", block: "b1", name: "由函数关系式延拓表达式",
        signal: R`给出 $f$ 在一个区间上的表达式，以及 $f(x)$ 与 $f(x+T)$（或 $f(x-T)$）的关系，求另一个区间上的表达式`,
        example: { q: R`设 $f(x)$ 在 $(-\infty,+\infty)$ 上满足 $f(x)=f(x-\pi)+\sin x$，且 $f(x)=x$，$x\in[0,\pi)$。求 $f(x)$ 在 $[\pi,3\pi)$ 上的表达式。`, src: "1000题 基础篇 第1章第4题" },
        idea: {
          key: R`把目标区间平移回已知区间：$x\in[\pi,2\pi)$ 时 $x-\pi\in[0,\pi)$，用关系式一次；更远的区间重复使用。`,
          how: [R`把目标区间按步长 $T$ 切成几段`, R`每段里写 $x-kT$ 落在已知区间，用关系式递推 $k$ 次`, R`化简三角函数（$\sin(x-\pi)=-\sin x$ 等）`],
          refs: [
            { src: "1000题 基础篇 第1章第4题解析", text: R`当 $x\in[\pi,2\pi)$ 时，$x-\pi\in[0,\pi)$，则 $f(x)=f(x-\pi)+\sin x=x-\pi+\sin x$` },
            { src: "1000题 基础篇 第1章第2题解析", text: R`当 $-2\leqslant x<0$，即 $0\leqslant x+2<2$ 时，$f(x)=-\frac12f(x+2)$，代入已知表达式` }
          ]
        },
        think: R`已知的只有 $[0,\pi)$ 上的表达式和一个"平移 $\pi$"的关系式。要求 $[\pi,3\pi)$ 上的表达式，就用关系式一步步往回平移，直到自变量落进 $[0,\pi)$。区间每长一个 $\pi$，就要多平移一次，所以分成 $[\pi,2\pi)$ 和 $[2\pi,3\pi)$ 两段。`,
        first: R`分成 $[\pi,2\pi)$ 和 $[2\pi,3\pi)$ 两段`,
        steps: [
          R`$x\in[\pi,2\pi)$：$x-\pi\in[0,\pi)$，可以用已知表达式 $f(x-\pi)=x-\pi$`,
          R`代入关系式：$f(x)=f(x-\pi)+\sin x=x-\pi+\sin x$`,
          R`$x\in[2\pi,3\pi)$：$x-\pi\in[\pi,2\pi)$，还不在 $[0,\pi)$ 里，再用一次关系式：$f(x-\pi)=f(x-2\pi)+\sin(x-\pi)$`,
          R`$x-2\pi\in[0,\pi)$，$f(x-2\pi)=x-2\pi$；$\sin(x-\pi)=-\sin x$。所以 $f(x)=(x-2\pi)-\sin x+\sin x=x-2\pi$`,
          R`结果：$f(x)=\begin{cases}x-\pi+\sin x,&x\in[\pi,2\pi)\\x-2\pi,&x\in[2\pi,3\pi)\end{cases}$`
        ],
        pitfall: R`第二段只平移一次，用了 $[\pi,2\pi)$ 段之外的错误表达式；$\sin(x-\pi)$ 符号写错`,
        practice: "1000题 基础篇 第1章第2、4题"
      },
      {
        id: "t3", block: "b1", name: "奇偶性、周期性与求导、积分结合",
        signal: R`变限积分 $F(x)=\int_a^xf(t)\mathrm dt$，问 $F$ 的奇偶性、周期性或某点的高阶导数`,
        example: { q: R`设 $F(x)=\int_{-2\pi}^x(\mathrm e^{\sin t}-\mathrm e^{-\sin t})\mathrm dt$，则 $F(0)+F^{(5)}(2\pi)=$______。`, src: "武忠祥 第1章 题型二 例4 p8–9" },
        idea: {
          key: R`先判断被积函数的奇偶性和周期，再用"奇函数的原函数是偶函数""一个周期上积分为 $0$ 则原函数周期"把问题挪到容易算的点。`,
          how: [R`被积函数：判奇偶、找周期`, R`周期函数一个周期上的积分为 $0$ ⇒ $F$ 也以 $T$ 为周期`, R`$F$ 为偶函数 ⇒ $F$ 的奇数阶导数是奇函数，在 $0$ 处为 $0$`],
          refs: [
            { src: "武忠祥 第1章 p4–5", text: R`连续的奇函数其原函数都是偶函数；设 $f$ 连续且以 $T$ 为周期，则 $F(x)=\int_0^xf(t)\mathrm dt$ 以 $T$ 为周期 $\Leftrightarrow\int_0^Tf(x)\mathrm dx=0$` }
          ]
        },
        think: R`$F$ 是变限积分，直接算 $F(0)$ 和五阶导数很难。先看被积函数 $g(t)=\mathrm e^{\sin t}-\mathrm e^{-\sin t}$ 的性质：$\sin t$ 是以 $2\pi$ 为周期的奇函数，所以 $g$ 也是。再用两个结论：奇函数在对称区间上积分为 0；奇函数的原函数是偶函数、导数奇偶交替。`,
        first: R`$g(t)=\mathrm e^{\sin t}-\mathrm e^{-\sin t}$ 是以 $2\pi$ 为周期的奇函数`,
        steps: [
          R`$g$ 的性质：$g(-t)=\mathrm e^{-\sin t}-\mathrm e^{\sin t}=-g(t)$，奇函数；$g(t+2\pi)=g(t)$，周期 $2\pi$`,
          R`$F(0)=\int_{-2\pi}^0g(t)\mathrm dt$，周期函数在任一个周期长度的区间上积分相同，$=\int_{-\pi}^{\pi}g(t)\mathrm dt=0$（奇函数在对称区间）`,
          R`所以 $F(x)=F(0)+\int_0^xg(t)\mathrm dt=\int_0^xg(t)\mathrm dt$；$g$ 是奇函数，它的这个原函数是偶函数；且 $F(x+2\pi)-F(x)=\int_x^{x+2\pi}g=0$，$F$ 也以 $2\pi$ 为周期`,
          R`五阶导数：$F^{(5)}(x)=g^{(4)}(x)$。奇函数求一次导变偶，再求一次变奇，所以 $g^{(4)}$ 是奇函数，$g^{(4)}(0)=0$`,
          R`由周期性 $F^{(5)}(2\pi)=F^{(5)}(0)=0$。答案 $F(0)+F^{(5)}(2\pi)=0$`
        ],
        pitfall: R`忘了先验证"一个周期上积分为 $0$"就说 $F$ 是周期函数（反例 $1+\cos x$）`,
        practice: "武忠祥 p9 注 (1)(2)(3)；1000题 基础篇 第1章第1题"
      },

      /* ---------- ② 概念与性质 ---------- */
      {
        id: "t4", block: "b2", name: "定义的变形与收敛速度（选择题）",
        signal: R`把极限定义里的 $\varepsilon$ 换成别的量，问是不是收敛的充要条件`,
        example: { q: R`"存在正整数 $N$，当 $n\geqslant N$ 时，恒有 $|x_n-a|\leqslant\frac1n$"是数列 $\{x_n\}$ 收敛于 $a$ 的（ ）。(A) 充分不必要条件　(B) 必要不充分条件　(C) 充分必要条件　(D) 既不充分也不必要条件`, src: "30讲 第2讲 例2.17 p95" },
        idea: {
          key: R`替换后的量若"与 $n$ 无关且能任意小"（如 $\frac1{2^k}$、$2\varepsilon$），仍是充要；若"与 $n$ 有关"（如 $\frac1n$），等于规定了收敛速度，只是充分条件。`,
          how: [R`看替换后的量能不能任意小`, R`看它是否依赖 $n$`, R`依赖 $n$：找一个收敛但更慢的数列（如 $a+\frac1{\sqrt n}$）否定必要性`],
          refs: [
            { src: "30讲 第2讲 例2.17 注 p95", text: R`数列极限定义中的 $\varepsilon$ 可以被替换为不依赖于 $n$ 的任意小的正数，即不能与 $n$ 有关，否则相当于对收敛速度提出了要求` },
            { src: "30讲 第2讲 p94", text: R`数列极限定义中不体现收敛速度，这是命制选择题的理论依据` }
          ]
        },
        think: R`条件 $|x_n-a|\leqslant\frac1n$ 比极限定义更强：它不仅说 $x_n\to a$，还规定了接近的速度（不慢于 $\frac1n$）。所以充分性应该成立（$\frac1n$ 可以小于任意 $\varepsilon$），必要性可疑：找一个收敛但收敛得比 $\frac1n$ 慢的数列。`,
        first: R`$\frac1n$ 依赖 $n$，先怀疑必要性`,
        steps: [
          R`充分性：任给 $\varepsilon>0$，取 $N'=\max\left\{N,\left[\dfrac1\varepsilon\right]+1\right\}$，当 $n>N'$ 时 $|x_n-a|\leqslant\dfrac1n<\varepsilon$，符合极限定义，所以 $x_n\to a$`,
          R`必要性：要一个收敛到 $a$、但距离比 $\frac1n$ 大的数列。取 $x_n=a+\dfrac{1}{\sqrt n}$，$x_n\to a$`,
          R`检查条件：$|x_n-a|=\dfrac{1}{\sqrt n}>\dfrac1n$（$n\geqslant2$），对任何 $N$ 都不成立，所以条件不必要`,
          R`选 (A)：充分不必要`
        ],
        pitfall: R`以为"$\frac1n$ 也能任意小"就是充要；它小得太快，限制了收敛速度`,
        practice: "30讲 例2.16（C）、例2.18（p94–96）；吉米【27】（1.2）"
      },
      {
        id: "t5", block: "b2", name: "由乘积（或复合）的极限判断各因子",
        signal: R`已知 $\lim x_ny_n$ 或 $\lim f[g(x)]$，问每个因子、内层的情况`,
        example: { q: R`若 $\{x_n\},\{y_n\}$ 满足 $\lim\limits_{n\to\infty}x_ny_n=\infty$，则以下结论：① $\lim x_n=\infty$ 或 $\lim y_n=\infty$；② $\lim x_n=\infty$ 且 $\lim y_n=\infty$；③ $x_n$ 与 $y_n$ 中一个是无穷大量，另一个是无界量；④ 当 $x_n$ 是非零无穷小量时，$\lim y_n=\infty$。正确结论的个数为（ ）。(A) 1　(B) 2　(C) 3　(D) 4`, src: "1000题 强化篇 第2章第1题" },
        idea: {
          key: R`能写成"已知量 × 已知量"的就直接推；推不出的用"奇偶项交替"的数列构造反例。`,
          how: [R`想办法把要判断的量表示成已知极限的运算，如 $y_n=x_ny_n\cdot\frac1{x_n}$`, R`反例库：奇数项 $n$、偶数项 $1$ 的交替数列；$n^{\frac{1\pm(-1)^n}2}$`],
          refs: [
            { src: "1000题 强化篇 第2章第1题解析", text: R`取 $x_n=n^{\frac{1+(-1)^n}2}$，$y_n=n^{\frac{1-(-1)^n}2}$，则 $x_ny_n=n\to\infty$，但 $\lim x_n$ 与 $\lim y_n$ 均不存在且不为 $\infty$；当 $x_n\to0$（$x_n\neq0$）时，$y_n=x_ny_n\cdot\frac1{x_n}\to\infty$` },
            { src: "武忠祥 题型一 例3 p14", text: R`由 $y_n=(x_ny_n)\cdot\frac1{x_n}$，若 $\frac1{x_n}$ 为无穷小，则 $\lim y_n=0\cdot0=0$` }
          ]
        },
        think: R`已知只有乘积 $\to\infty$。①②③ 都在断言某个因子单独是无穷大，可疑：两个因子可以"轮流"变大，乘积一直很大，但每个因子都有一半的项是 1，都不是无穷大。④ 能写成"已知量 × 已知量"：$y_n=(x_ny_n)\cdot\frac{1}{x_n}$。`,
        first: R`构造交替数列 $x_n=n^{\frac{1+(-1)^n}2}$、$y_n=n^{\frac{1-(-1)^n}2}$`,
        steps: [
          R`构造轮流变大的数列：$x_n=1,n,1,n,\cdots$（奇数项 1，偶数项 $n$），$y_n=n,1,n,1,\cdots$；统一写成 $x_n=n^{\frac{1+(-1)^n}{2}}$，$y_n=n^{\frac{1-(-1)^n}{2}}$`,
          R`检验：每一项 $x_ny_n=n\to\infty$，满足条件`,
          R`① 错：$x_n$、$y_n$ 都有一半的项是 1，都不是无穷大。② 更不成立。③ 错：两个都是无界量，但都不是无穷大`,
          R`④ 对：$x_n$ 是非零无穷小，它的倒数 $\dfrac{1}{x_n}$ 是无穷大；$y_n=(x_ny_n)\cdot\dfrac{1}{x_n}$，两个因子都是无穷大，无穷大的乘积仍是无穷大，所以 $y_n\to\infty$`,
          R`正确的只有 ④，选 (A)`
        ],
        pitfall: R`以为"乘积是无穷大，至少一个因子是无穷大"；无界不等于无穷大`,
        practice: "1000题 强化篇 第2章第1题；武忠祥 题型一 例3（p14）；18讲 例2.12、2.13（p21–22）"
      },
      {
        id: "t6", block: "b2", name: "中间变量极限定理（由外推内）",
        signal: R`已知 $\lim f(x_n)$ 存在，问 $\lim x_n$ 是否存在`,
        example: { q: R`已知数列 $\{x_n\}$，$-\frac\pi2\leqslant x_n\leqslant\frac\pi2$，则（ ）。(A) 若 $\lim\cos\sin x_n$ 存在，则 $\lim x_n$ 存在　(B) 若 $\lim\sin\cos x_n$ 存在，则 $\lim x_n$ 存在　(C) 若 $\lim\cos\sin x_n$ 存在，则 $\lim\sin x_n$ 存在，但 $\lim x_n$ 不一定存在　(D) 若 $\lim\sin\cos x_n$ 存在，则 $\lim\cos x_n$ 存在，但 $\lim x_n$ 不一定存在`, src: "18讲 第2讲 例2.12 p21" },
        idea: {
          key: R`外层函数在相应区间上严格单调，才能由 $\lim f(u_n)$ 推出 $\lim u_n$；一层一层往里剥，遇到不单调的那层就停。`,
          how: [R`确定每一层中间变量的取值区间`, R`判断外层函数在该区间上是否严格单调`, R`单调就能往里推一层，不单调就推不动（举 $\pm$ 对称的反例）`],
          refs: [
            { src: "18讲 第2讲 p21 定理二", text: R`设 $u_n\in$ 有限区间 $I$，若 $f(x)$ 在 $I$ 上严格单调，且 $\lim\limits_{n\to\infty}f(u_n)$ 存在，则 $\lim\limits_{n\to\infty}u_n$ 存在` }
          ]
        },
        think: R`由外层函数的极限推内层：若外层 $h$ 在内层取值的范围上连续且严格单调，就有连续的反函数，$\lim h(u_n)$ 存在 ⇒ $\lim u_n$ 存在。所以每个选项都检查：外层在内层的取值范围上单调吗？再往里一层也同样检查。`,
        first: R`$\cos x_n\in[0,1]$，$\sin u$ 在 $[0,1]$ 上单增`,
        steps: [
          R`确定范围：$x_n\in\left[-\frac\pi2,\frac\pi2\right]$，所以 $\cos x_n\in[0,1]$，$\sin x_n\in[-1,1]$`,
          R`(B)(D) 第一层：外层 $\sin u$ 在 $[0,1]$ 上严格增加，连续，有连续反函数 $\arcsin$，所以 $\lim\sin\cos x_n$ 存在 ⇒ $\lim\cos x_n$ 存在`,
          R`(B)(D) 第二层：$\cos x$ 在 $\left[-\frac\pi2,\frac\pi2\right]$ 上不单调（偶函数）。反例 $x_n=(-1)^n\dfrac\pi4$：$\cos x_n\equiv\dfrac{\sqrt2}{2}$ 收敛，$x_n$ 不收敛。所以 (B) 错，(D) 对`,
          R`(A)(C)：外层 $\cos u$ 在 $[-1,1]$ 上不单调（偶函数），推不出 $\lim\sin x_n$ 存在。反例同上：$\sin x_n=(-1)^n\dfrac{\sqrt2}{2}$ 不收敛，但 $\cos\sin x_n$ 是常数。(A)(C) 都错`,
          R`选 (D)`
        ],
        pitfall: R`忽略"严格单调"这个条件；把复合函数极限定理一（由内推外）和定理二（由外推内）混用`,
        practice: "18讲 例2.11–2.13（p20–22）"
      },

      /* ---------- ③ 求函数极限 ---------- */
      {
        id: "t7", block: "b3", name: "0/0 型：化简先行 + 等价代换",
        signal: R`分子分母都 $\to0$，含根式差、$\tan x-\sin x$、$\ln(1+x)-x$ 等`,
        example: { q: R`求极限 $\lim\limits_{x\to0}\dfrac{\sqrt{1+\tan x}-\sqrt{1+\sin x}}{x\ln(1+x)-x^2}$。`, src: "武忠祥 第1章 题型二 例1 p21–22；1000题 基础篇 第1章第14题（同类）" },
        idea: {
          key: R`先有理化去根号，提出极限非零的因子，再对乘积因子用等价（含差函数等价）。`,
          how: [R`根式差先有理化`, R`把极限不为 $0$ 的因子（如 $\frac1{\sqrt{1+\tan x}+\sqrt{1+\sin x}}\to\frac12$）先算出来`, R`剩下的因式分解成乘积，如 $\tan x-\sin x=\tan x(1-\cos x)$`, R`分母的差函数用 $\ln(1+x)-x\sim-\frac{x^2}2$`],
          refs: [
            { src: "武忠祥 题型二 例1 p21–22", text: R`有理化 → 先求极限非零因子的极限 → 等价代换；方法二用拉格朗日中值定理处理根式差` },
            { src: "30讲 p54", text: R`化简先行：提出极限不为 $0$ 的因式；等价无穷小代换；恒等变形` }
          ]
        },
        think: R`分子是两个根式之差，直接代换会出错，先有理化变成 $\tan x-\sin x$。分母是 $x\ln(1+x)-x^2=x[\ln(1+x)-x]$，提出 $x$。这时分子分母都是"差"，用两个差函数的等价：$\tan x-\sin x\sim\frac{x^3}{2}$，$\ln(1+x)-x\sim-\frac{x^2}{2}$。`,
        first: R`分子有理化`,
        steps: [
          R`分子有理化：$\sqrt{1+\tan x}-\sqrt{1+\sin x}=\dfrac{\tan x-\sin x}{\sqrt{1+\tan x}+\sqrt{1+\sin x}}$；分母提 $x$：$x[\ln(1+x)-x]$`,
          R`非零因子先求：$\sqrt{1+\tan x}+\sqrt{1+\sin x}\to2$，所以原式 $=\dfrac12\lim\dfrac{\tan x-\sin x}{x[\ln(1+x)-x]}$`,
          R`分子：$\tan x-\sin x=\tan x(1-\cos x)\sim x\cdot\dfrac{x^2}{2}=\dfrac{x^3}{2}$`,
          R`分母：泰勒 $\ln(1+x)=x-\dfrac{x^2}{2}+o(x^2)$，所以 $\ln(1+x)-x\sim-\dfrac{x^2}{2}$，$x[\ln(1+x)-x]\sim-\dfrac{x^3}{2}$`,
          R`原式 $=\dfrac12\cdot\dfrac{x^3/2}{-x^3/2}=-\dfrac12$`
        ],
        pitfall: R`分子直接换成 $\sqrt{1+x}-\sqrt{1+x}=0$；不提非零因子，直接洛必达，算得很繁`,
        practice: "武忠祥 p23 注 (1)–(7)；1000题 基础篇 第1章第14题"
      },
      {
        id: "t8", block: "b3", name: "泰勒展开：上下同阶、幂次最低",
        signal: R`分子是两个函数之差且一阶、二阶都抵消，等价代换用不上`,
        example: { q: R`求极限 $\lim\limits_{x\to0}\dfrac{\cos x-\mathrm e^{-\frac{x^2}2}}{x^2[x+\ln(1-x)]}$。`, src: "武忠祥 第1章 题型二 例6 p24–25；30讲 p53（分子的展开）" },
        idea: {
          key: R`先定分母的阶（这里 $x^4$），分子用"幂次最低"原则展开到两者系数第一次不同的那一项。`,
          how: [R`分母能等价就先等价，确定是 $x^k$`, R`分子 $A-B$：$A$、$B$ 各自展开，直到某一次幂系数不同`, R`代入后约去 $x^k$，$o$ 项写对`],
          refs: [
            { src: "30讲 p52–53", text: R`$\frac AB$ 型，适用"上下同阶"原则；$A-B$ 型，适用"幂次最低"原则：将 $A$、$B$ 分别展开到它们的系数不相等的 $x$ 的最低次幂为止` },
            { src: "武忠祥 题型二 例6 p24–25", text: R`方法二：由于 $x+\ln(1-x)\sim-\frac{x^2}2$，原式 $=\lim\frac{\cos x-\mathrm e^{-\frac{x^2}2}}{-\frac12x^4}$` }
          ]
        },
        think: R`分子是 $\cos x$ 与 $\mathrm e^{-\frac{x^2}{2}}$ 之差，两者前两项 $1-\frac{x^2}{2}$ 完全相同，等价代换会得到 0，必须泰勒展开。展开到几阶由分母决定（上下同阶）：分母 $x^2[x+\ln(1-x)]\sim-\frac12x^4$ 是 4 阶，所以分子展到 $x^4$。`,
        first: R`分母 $x+\ln(1-x)\sim-\frac{x^2}2$，所以分母 $\sim-\frac12x^4$`,
        steps: [
          R`先定分母的阶：$\ln(1-x)=-x-\dfrac{x^2}{2}+o(x^2)$，$x+\ln(1-x)\sim-\dfrac{x^2}{2}$，分母 $\sim-\dfrac12x^4$`,
          R`分子展到 $x^4$：$\cos x=1-\dfrac{x^2}{2}+\dfrac{x^4}{24}+o(x^4)$`,
          R`$\mathrm e^u=1+u+\dfrac{u^2}{2}+o(u^2)$，$u=-\dfrac{x^2}{2}$：$\mathrm e^{-\frac{x^2}{2}}=1-\dfrac{x^2}{2}+\dfrac{x^4}{8}+o(x^4)$`,
          R`相减：前两项抵消，分子 $=\left(\dfrac1{24}-\dfrac18\right)x^4+o(x^4)=-\dfrac{1}{12}x^4+o(x^4)$`,
          R`原式 $=\dfrac{-\frac1{12}}{-\frac12}=\dfrac16$`
        ],
        pitfall: R`只展开到 $x^2$，得到分子"$=0$"；$\mathrm e^{-\frac{x^2}2}$ 的 $x^4$ 项是 $\frac12\left(\frac{x^2}2\right)^2=\frac{x^4}8$，常算错`,
        practice: "武忠祥 p25 注；30讲 习题1.16（p70）；1000题 基础篇 第1章第11、17题"
      },
      {
        id: "t9", block: "b3", name: "同类函数之差：拉格朗日中值定理",
        signal: R`$f(b)-f(a)$ 形式：$\arctan(x+1)-\arctan x$、$a^{\frac1x}-a^{\frac1{x+1}}$、$\sin\sqrt{x+1}-\sin\sqrt x$`,
        example: { q: R`$\lim\limits_{n\to\infty}n^2\left(\sqrt[n]2-\sqrt[n+1]2\right)=$______。`, src: "18讲 第1讲 例1.7 p8" },
        idea: {
          key: R`把差看成 $f(b)-f(a)=f'(\xi)(b-a)$，$\xi$ 夹在 $a$、$b$ 之间，极限过程中 $\xi$ 跟着 $a$、$b$ 一起趋于同一个值。`,
          how: [R`认出 $f$、$a$、$b$`, R`写 $f(b)-f(a)=f'(\xi)(b-a)$`, R`$\xi$ 介于 $a$、$b$ 之间，由夹逼确定 $\xi$ 的极限`, R`也可以提公因式后用 $\mathrm e^\square-1\sim\square$`],
          refs: [
            { src: "18讲 p8", text: R`在 lim 局部中，见到 $f-f$ 函数，如三角函数、反三角函数、对数函数之差，考虑用拉格朗日中值定理处理后再计算` },
            { src: "武忠祥 题型二 例2 p22", text: R`方法二由拉格朗日中值定理得 $\mathrm e^{x^2}-\mathrm e^{2-2\cos x}=\mathrm e^\xi(x^2-2+2\cos x)$，这种方法更简单` }
          ]
        },
        think: R`$\sqrt[n]2-\sqrt[n+1]2=2^{\frac1n}-2^{\frac1{n+1}}$ 是同一个函数 $2^x$ 在两个相近点的函数值之差，这是拉格朗日中值定理的信号：$f(b)-f(a)=f'(\xi)(b-a)$，把"函数值之差"换成"导数 × 自变量之差"，后者 $\frac1n-\frac1{n+1}$ 很好算。`,
        first: R`对 $2^x$ 在 $\left[\frac1{n+1},\frac1n\right]$ 上用拉格朗日中值定理`,
        steps: [
          R`取 $f(x)=2^x$，在 $\left[\dfrac1{n+1},\dfrac1n\right]$ 上连续可导，$f'(x)=2^x\ln2$`,
          R`拉格朗日中值定理：$2^{\frac1n}-2^{\frac1{n+1}}=2^\xi\ln2\cdot\left(\dfrac1n-\dfrac1{n+1}\right)$，$\xi\in\left(\dfrac1{n+1},\dfrac1n\right)$`,
          R`自变量之差：$\dfrac1n-\dfrac1{n+1}=\dfrac{1}{n(n+1)}$，所以原式 $=\lim2^\xi\ln2\cdot\dfrac{n^2}{n(n+1)}$`,
          R`$\xi$ 夹在 $\frac{1}{n+1}$ 与 $\frac1n$ 之间，$\xi\to0^+$，$2^\xi\to1$；$\dfrac{n^2}{n(n+1)}\to1$`,
          R`原式 $=\ln2$`
        ],
        pitfall: R`把 $\xi$ 当常数；忘记乘 $(b-a)$`,
        practice: "18讲 例1.8（p8）；武忠祥 p22–23 注 (2)–(6)"
      },
      {
        id: "t10", block: "b3", name: "∞−∞ 型：通分、有理化、倒代换",
        signal: R`两项都趋于 $\infty$ 相减，如 $\frac1{x^2}-\cot^2x$、$x^2(\mathrm e^{\frac1x}-1)-x$`,
        example: { q: R`求极限 $\lim\limits_{x\to+\infty}\left[x^2\left(\mathrm e^{\frac1x}-1\right)-x\right]$。`, src: "30讲 第1讲 例1.31 p61" },
        idea: {
          key: R`把"和差"化成"商"：有分母就通分；有根式就有理化；都没有就提出无穷因子或作倒代换 $t=\frac1x$。`,
          how: [R`判断有没有分母、根式`, R`没有分母时，提公因式 $x$ 或令 $u=\frac1x$ 造出分母`, R`化成 $\frac00$ 后，用等价、泰勒或洛必达`],
          refs: [
            { src: "30讲 p60", text: R`如果函数中有分母，则通分；如果函数中没有分母，则可以通过提取公因式或者作倒代换，出现分母后，再利用通分等恒等变形，将加减法变形为乘除法` },
            { src: "武忠祥 p27", text: R`常用方法：(1) 通分化为 $\frac00$；(2) 根式有理化；(3) 提无穷因子，然后等价代换或变量代换、泰勒公式` }
          ]
        },
        think: R`$x\to+\infty$ 时 $x^2(\mathrm e^{\frac1x}-1)$ 和 $x$ 都 $\to+\infty$，是 $\infty-\infty$。式子里有 $\frac1x$，倒代换 $u=\frac1x\to0^+$ 后变成 $u$ 的分式，通分就成了 $\frac00$；分子 $\mathrm e^u-1-u$ 是差函数，等价于 $\frac{u^2}{2}$。`,
        first: R`令 $u=\frac1x\to0^+$`,
        steps: [
          R`倒代换 $u=\dfrac1x$：$x^2=\dfrac1{u^2}$，原式 $=\lim\limits_{u\to0^+}\left[\dfrac{\mathrm e^u-1}{u^2}-\dfrac1u\right]$`,
          R`通分：$=\lim\limits_{u\to0^+}\dfrac{\mathrm e^u-1-u}{u^2}$，是 $\frac00$ 型`,
          R`分子泰勒：$\mathrm e^u=1+u+\dfrac{u^2}{2}+o(u^2)$，所以 $\mathrm e^u-1-u\sim\dfrac{u^2}{2}$（不能用 $\mathrm e^u-1\sim u$，那样会得到 0）`,
          R`原式 $=\dfrac12$`
        ],
        pitfall: R`直接 $x^2\cdot\frac1x-x=0$：把 $\mathrm e^{\frac1x}-1$ 换成 $\frac1x$ 丢掉了二阶项（加减中等价代换失效）`,
        practice: R`武忠祥 p27–29 例1–4（$\frac1{x^2}-\cot^2x=\frac23$）；30讲 例1.30（p60）`
      },
      {
        id: "t11", block: "b3", name: "1^∞ 型：标准型三步",
        signal: R`底数 $\to1$、指数 $\to\infty$`,
        example: { q: R`求极限 $\lim\limits_{x\to0}(\cos2x+2x\sin x)^{\frac1{x^4}}$。`, src: "武忠祥 第1章 题型二 1^∞型 例4 p31–32" },
        idea: {
          key: R`写成 $(1+\alpha)^\beta$，求 $\lim\alpha\beta=A$，答案 $\mathrm e^A$；求 $A$ 时 $\alpha$ 往往还要化简成乘积。`,
          how: [R`$\alpha=u-1$，必要时用三角恒等式化简`, R`$\alpha\beta$ 是 $\frac00$ 型，用等价、泰勒`, R`整体写 $\mathrm e^A$`],
          refs: [
            { src: "武忠祥 p30", text: R`第一步写标准型 原式 $=\lim(1+\alpha)^\beta$；第二步求极限 $\lim\alpha\beta=A$；第三步写结果 原式 $=\mathrm e^A$` },
            { src: "武忠祥 例4 方法二 p32", text: R`原式 $=\lim(1-2\sin^2x+2x\sin x)^{\frac1{x^4}}$，$\lim\frac{2\sin x(x-\sin x)}{x^4}=\frac13$（标准答案用三次洛必达）` }
          ]
        },
        think: R`$x\to0$ 时底数 $\cos2x+2x\sin x\to1$，指数 $\frac{1}{x^4}\to\infty$，是 $1^\infty$ 型，标准三步：写成 $(1+\alpha)^\beta$，求 $\lim\alpha\beta$，答案 $\mathrm e^{\lim\alpha\beta}$。这里 $\alpha$ 是 $\cos2x-1+2x\sin x$，用倍角公式能合并成乘积，才好代换。`,
        first: R`$\cos2x=1-2\sin^2x$，所以 $\alpha=2\sin x(x-\sin x)$`,
        steps: [
          R`写 $\alpha$：底数 $=1+\alpha$，$\alpha=\cos2x-1+2x\sin x$；倍角 $\cos2x-1=-2\sin^2x$，所以 $\alpha=-2\sin^2x+2x\sin x=2\sin x(x-\sin x)$`,
          R`$\beta=\dfrac1{x^4}$，$\alpha\beta=\dfrac{2\sin x(x-\sin x)}{x^4}$`,
          R`等价：$\sin x\sim x$；$x-\sin x\sim\dfrac{x^3}{6}$（泰勒 $\sin x=x-\frac{x^3}{6}+o(x^3)$）`,
          R`$\lim\alpha\beta=\lim\dfrac{2x\cdot\frac{x^3}{6}}{x^4}=\dfrac13$`,
          R`原式 $=\mathrm e^{\frac13}$`
        ],
        pitfall: R`直接取对数洛必达，导数繁琐易错；算出 $\frac13$ 后答案写成 $\frac13$`,
        practice: "武忠祥 p30–32 例1–3、注 (1)(2)(3)；1000题 强化篇 第1章第1、5、11题"
      },
      {
        id: "t12", block: "b3", name: "∞⁰、0⁰ 型：化成 e^(v ln u)",
        signal: R`底数 $\to\infty$ 或 $0^+$，指数 $\to0$`,
        example: { q: R`求极限 $\lim\limits_{x\to+\infty}\left(x^{\frac1x}-1\right)^{\frac1{\ln x}}$。`, src: "武忠祥 第1章 题型二 p32–33" },
        idea: {
          key: R`$u^v=\mathrm e^{v\ln u}$，指数 $v\ln u$ 是 $0\cdot\infty$；对 $\ln u$ 内部先用等价把"$\square-1$"换掉。`,
          how: [R`令 $y=u^v$，$\ln y=v\ln u$`, R`$u$ 里有 $\mathrm e^\square-1$ 时，$\ln(\mathrm e^\square-1)=\ln\frac{\mathrm e^\square-1}{\square}+\ln\square$，前一项 $\to0$`, R`求出 $\lim\ln y$，答案 $\mathrm e^{\lim\ln y}$`],
          refs: [
            { src: "武忠祥 p32", text: R`这两种极限的函数一定是幂指函数，求解的方法是将其改写成指数形式 $\lim[f(x)]^{g(x)}=\lim\mathrm e^{g(x)\ln f(x)}$，从而化为"$0\cdot\infty$"型` },
            { src: "30讲 例1.32 p61–62", text: R`对于"$\infty^0$"和"$0^0$"型，用恒等变形 $\lim u^v=\mathrm e^{\lim v\ln u}$，化成"$\frac00$""$\frac\infty\infty$""$0\cdot\infty$"` }
          ]
        },
        think: R`底数 $x^{\frac1x}-1\to0$，指数 $\frac{1}{\ln x}\to0$，是 $0^0$ 型，统一化成 $\mathrm e^{v\ln u}$，求 $\lim\frac{\ln u}{\ln x}$。难点在 $\ln(x^{\frac1x}-1)$：$x^{\frac1x}-1=\mathrm e^{w}-1$，$w=\frac{\ln x}{x}\to0$，用 $\mathrm e^w-1=w\cdot\frac{\mathrm e^w-1}{w}$ 把对数拆开。`,
        first: R`$x^{\frac1x}-1=\mathrm e^{\frac{\ln x}x}-1$，$\frac{\ln x}x\to0$`,
        steps: [
          R`设 $y$ 为原式，$\ln y=\dfrac{\ln\left(x^{\frac1x}-1\right)}{\ln x}$`,
          R`$x^{\frac1x}=\mathrm e^{w}$，$w=\dfrac{\ln x}{x}\to0$。写 $\mathrm e^w-1=w\cdot\dfrac{\mathrm e^w-1}{w}$，取对数：$\ln(\mathrm e^w-1)=\ln\dfrac{\mathrm e^w-1}{w}+\ln w$`,
          R`$\dfrac{\mathrm e^w-1}{w}\to1$，第一项 $\to\ln1=0$；$\ln w=\ln\ln x-\ln x$`,
          R`$\lim\ln y=\lim\dfrac{\ln\ln x-\ln x}{\ln x}=\lim\left(\dfrac{\ln\ln x}{\ln x}-1\right)=0-1=-1$（令 $s=\ln x\to+\infty$，$\frac{\ln s}{s}\to0$）`,
          R`原式 $=\mathrm e^{-1}$`
        ],
        pitfall: R`把 $x^{\frac1x}\to1$ 直接写成 $0^0=1$；$0^0$ 是未定式`,
        practice: R`武忠祥 p32–33 例1、注；30讲 例1.32；1000题 强化篇 第1章第3题（$\mathrm e^{-2}$）`
      },
      {
        id: "t13", block: "b3", name: "∞/∞ 与 x→−∞：抓大头要看符号",
        signal: R`$x\to\pm\infty$，分子分母是根式、多项式、指数的混合`,
        example: { q: R`求极限 $\lim\limits_{x\to-\infty}\dfrac{\sqrt{4x^2+x-1}+x+1}{\sqrt{x^2+\sin x}}$。`, src: "武忠祥 第1章 题型二 ∞/∞型 例3 p25–26" },
        idea: {
          key: R`分子分母同除最高阶的无穷大；$x\to-\infty$ 时 $\sqrt{x^2}=|x|=-x$，同除的是 $-x$。`,
          how: [R`找出分子、分母中增长最快的项`, R`$x<0$ 时把 $x$ 移进根号要变号：$\sqrt{4x^2+\cdots}=-x\sqrt{4+\cdots}$`, R`各项除完后求极限`],
          refs: [
            { src: "武忠祥 p25", text: R`"$\frac\infty\infty$"型常用方法：(1) 洛必达法则；(2) 分子分母同除以分子和分母各项中最高阶的无穷大` },
            { src: "30讲 p57", text: R`抓大头，即当 $x\to\infty$ 时，分别抓分子、分母中关于 $x$ 的最高次项；若 $x\to0$，则应该分别抓最低次项；$|2x|=-2x$（$x<0$）` }
          ]
        },
        think: R`$\frac\infty\infty$ 型，分子分母同除最高阶的无穷大 $|x|$。陷阱在 $x\to-\infty$：$\sqrt{x^2}=|x|=-x$，同除的应该是 $-x>0$，这样 $\frac{\sqrt{\cdots}}{-x}$ 才能放进根号里。`,
        first: R`分子分母同除 $-x$（$>0$）`,
        steps: [
          R`$x\to-\infty$ 时 $-x>0$，且 $\sqrt{x^2}=-x$，所以分子分母同除 $-x$`,
          R`$\dfrac{\sqrt{4x^2+x-1}}{-x}=\sqrt{\dfrac{4x^2+x-1}{x^2}}=\sqrt{4+\dfrac1x-\dfrac1{x^2}}\to2$`,
          R`$\dfrac{x+1}{-x}=-1-\dfrac1x\to-1$（不在根号里，符号照常算）`,
          R`分母：$\dfrac{\sqrt{x^2+\sin x}}{-x}=\sqrt{1+\dfrac{\sin x}{x^2}}\to1$（$\sin x$ 有界）`,
          R`原式 $=\dfrac{2-1}{1}=1$。注意：如果误除以 $x$（负数），根号外的 $x$ 会放进根号里变成 $\sqrt{x^2}=-x$，符号就错了`
        ],
        pitfall: R`按 $x\to+\infty$ 习惯同除 $x$，得 $\frac{2+1}{1}=3$`,
        practice: "武忠祥 p25–26 例1–2；30讲 例1.25（p56）"
      },
      {
        id: "t14", block: "b3", name: "已知一个极限，求另一个极限",
        signal: R`题目给 $\lim\frac{\cdots+xf(x)}{x^3}=0$ 这种含未知函数的极限，求另一个含 $f$ 的极限`,
        example: { q: R`已知 $\lim\limits_{x\to0}\dfrac{\tan2x+xf(x)}{\sin x^3}=0$，则 $\lim\limits_{x\to0}\dfrac{2+f(x)}{x^2}=$（ ）。(A) $\frac{13}9$　(B) $4$　(C) $\frac{10}3$　(D) $-\frac83$`, src: "30讲 第1讲 例1.27 p57–58" },
        idea: {
          key: R`把已知式和所求式"凑成同一个式子"：要么脱帽解出 $f(x)$ 再代入，要么把已知式中的具体函数泰勒展开，直接读出所求的极限。`,
          how: [R`把分母等价成 $x^k$`, R`已知式中的具体函数（$\tan2x$ 等）展开到 $x^k$`, R`凑出所求式，读出结果；或脱帽：$\frac{\cdots}{x^3}=\alpha(x)\to0$，解出 $f$`],
          refs: [
            { src: "30讲 例1.27 方法总结 p58", text: R`①用好泰勒公式；②已知极限，用脱帽法可解出 $f(x)$。脱帽法：若 $\lim f(x)=A$，则 $f(x)=A+\alpha(x)$，$\lim\alpha(x)=0$` },
            { src: "30讲 习题1.1 解答 p70", text: R`$\lim\frac{\sin x+xf(x)}{x^3}=\lim\frac{\sin x-x}{x^3}+\lim\frac{x+xf(x)}{x^3}=-\frac16+\lim\frac{1+f(x)}{x^2}=0$` }
          ]
        },
        think: R`已知极限里有 $f(x)$，要求的极限里也有，要找两者的联系。已知式分母 $\sin x^3\sim x^3$，分子含 $\tan2x$，把 $\tan2x$ 展开到 $x^3$，分子就能写成 $x[2+f(x)]+\frac83x^3$，除以 $x^3$ 后正好出现要求的 $\frac{2+f(x)}{x^2}$。`,
        first: R`$\sin x^3\sim x^3$；$\tan2x=2x+\frac{(2x)^3}3+o(x^3)$`,
        steps: [
          R`分母等价：$\sin x^3\sim x^3$`,
          R`泰勒：$\tan u=u+\dfrac{u^3}{3}+o(u^3)$，$u=2x$：$\tan2x=2x+\dfrac{8x^3}{3}+o(x^3)$`,
          R`分子：$\tan2x+xf(x)=x[2+f(x)]+\dfrac83x^3+o(x^3)$`,
          R`除以 $x^3$：$0=\lim\left[\dfrac{2+f(x)}{x^2}+\dfrac83+o(1)\right]$`,
          R`所以 $\lim\dfrac{2+f(x)}{x^2}=-\dfrac83$，选 (D)`
        ],
        pitfall: R`把 $\tan2x$ 只换成 $2x$（丢了 $x^3$ 项），得到 $0$`,
        practice: R`30讲 习题1.1（p68）；1000题 基础篇 第1章第8题（$\frac43$）；1000题 强化篇 第1章第5、11题`
      },

      /* ---------- ④ 数列极限 ---------- */
      {
        id: "t15", block: "b4", name: "数列的未定式：改成函数极限",
        signal: R`数列极限是 $1^\infty$、$\frac00$ 等未定式，需要洛必达或泰勒`,
        example: { q: R`求极限 $\lim\limits_{n\to\infty}\left[\dfrac{\left(1+\frac1n\right)^n}{\mathrm e}\right]^n$。`, src: "武忠祥 第1章 数列的极限 例2 p34" },
        idea: {
          key: R`数列不能直接求导；但等价代换、泰勒可以直接用在数列上，要用洛必达时先用海涅定理换成 $x\to+\infty$。`,
          how: [R`幂指形式先写成 $\mathrm e^{\cdots}$`, R`指数部分用等价或泰勒：$\ln\left(1+\frac1n\right)=\frac1n-\frac1{2n^2}+o\left(\frac1{n^2}\right)$`, R`需要洛必达时，把 $n$ 换成 $x$`],
          refs: [
            { src: "武忠祥 p33", text: R`求数列不定式极限和求函数不定式极限的方法完全相同，但对数列极限不能直接用洛必达法则，需改写成函数极限后再用洛必达法则` },
            { src: "30讲 第2讲 p83", text: R`海涅定理将数列极限转化成函数极限，转换成函数极限后，有很多工具可以使用` }
          ]
        },
        think: R`底数 $\frac{(1+\frac1n)^n}{\mathrm e}\to1$，指数 $n\to\infty$，是数列的 $1^\infty$ 型。化成 $\mathrm e^{(\cdots)}$ 后，指数是 $n^2\ln(1+\frac1n)-n$，是 $\infty-\infty$；提出 $n^2$ 变成 $n^2[\ln(1+\frac1n)-\frac1n]$，括号是差函数，泰勒到二阶（泰勒可以直接用在数列上，令 $x=\frac1n$）。`,
        first: R`原式 $=\lim\mathrm e^{n^2\ln\left(1+\frac1n\right)-n}$`,
        steps: [
          R`取对数：原式 $=\mathrm e^{n\ln\frac{(1+1/n)^n}{\mathrm e}}=\mathrm e^{n[n\ln(1+\frac1n)-1]}=\mathrm e^{n^2\ln(1+\frac1n)-n}$`,
          R`指数提 $n^2$：$n^2\ln\left(1+\dfrac1n\right)-n=n^2\left[\ln\left(1+\dfrac1n\right)-\dfrac1n\right]$`,
          R`泰勒（$x=\frac1n\to0$）：$\ln(1+x)-x=-\dfrac{x^2}{2}+o(x^2)$，所以括号 $\sim-\dfrac{1}{2n^2}$`,
          R`指数 $\to n^2\cdot\left(-\dfrac{1}{2n^2}\right)=-\dfrac12$`,
          R`原式 $=\mathrm e^{-\frac12}$`
        ],
        pitfall: R`以为 $\left(1+\frac1n\right)^n\to\mathrm e$，底数 $\to1$ 就得 $1$：这是 $1^\infty$ 型`,
        practice: "武忠祥 p33–34 例1、3；30讲 例2.8（p85）"
      },
      {
        id: "t16", block: "b4", name: "n 项和：夹逼还是定积分定义",
        signal: R`$\sum\limits_{k=1}^n\frac{n}{n^2+\square}$ 一类的和`,
        example: { q: R`求极限 $\lim\limits_{n\to\infty}\left(\dfrac n{n^2+1^2}+\dfrac n{n^2+2^2}+\cdots+\dfrac n{n^2+n^2}\right)$。`, src: "武忠祥 第1章 n项和 例2 p35（对照 例1 p35）" },
        idea: {
          key: R`看分母中的"变化部分"与"主体部分"：变化部分是次要量就夹逼；与主体同阶就提 $\frac1n$ 凑 $\frac1n\sum f\left(\frac kn\right)$。`,
          how: [R`找主体部分（$n^2$）和变化部分（$k^2$ 或 $k$）`, R`$k$（相对 $n^2$ 是小量）：用最大、最小项夹逼`, R`$k^2$（与 $n^2$ 同阶）：提出 $\frac1n$，写成 $\frac1n\sum\frac1{1+(k/n)^2}$`, R`转成 $\int_0^1f(x)\mathrm dx$`],
          refs: [
            { src: "武忠祥 p35 注 (2)", text: R`以上两个例题一个适合用夹逼原理，而另一个适合用定积分定义。它们分母中的第一项都是 $n^2$，称其为主体部分，第二项随项的变化而变化，称其为变化部分` },
            { src: "武忠祥 p21", text: R`用定积分定义求极限的一般方法是：先提"可爱因子"$\frac1n$，然后再确定被积函数和积分区间` }
          ]
        },
        think: R`$n$ 项和、项数随 $n$ 变、求不出闭式。先看变化部分和 $n$ 的关系：分母 $n^2+k^2$ 中 $k^2$ 最大到 $n^2$，和主体同阶，放缩成最大最小后两边极限不同，夹逼失效；这时提出 $\frac1n$，写成 $\frac kn$ 的函数，用定积分定义。`,
        first: R`变化部分 $k^2$ 与 $n^2$ 同阶，用定积分定义`,
        steps: [
          R`判断方法：若放缩，$\dfrac{n^2}{n^2+n^2}\leqslant\text{和}\leqslant\dfrac{n^2}{n^2+1}$，两边极限 $\frac12$ 和 $1$ 不等，夹逼不行`,
          R`变形：第 $k$ 项 $\dfrac{n}{n^2+k^2}=\dfrac1n\cdot\dfrac{1}{1+\left(\frac kn\right)^2}$，所以原式 $=\lim\dfrac1n\sum\limits_{k=1}^n\dfrac{1}{1+\left(\frac kn\right)^2}$`,
          R`这是 $f(x)=\dfrac{1}{1+x^2}$ 在 $[0,1]$ 上 $n$ 等分、取右端点的积分和，由定积分定义 $=\int_0^1\dfrac{\mathrm dx}{1+x^2}$`,
          R`$=\arctan x\Big|_0^1=\dfrac\pi4$`,
          R`对照：若是 $\sum\dfrac{n}{n^2+k}$，变化部分 $k\leqslant n$ 比 $n^2$ 低阶，放缩 $\dfrac{n^2}{n^2+n}\leqslant\cdots\leqslant\dfrac{n^2}{n^2+1}$，两边 $\to1$，用夹逼（武忠祥 例1）`
        ],
        pitfall: R`对 $\sum\frac n{n^2+k^2}$ 用夹逼：两边分别 $\to\frac12$ 和 $1$，夹不住`,
        practice: "武忠祥 p35–37 例1–4 及注；30讲 习题2.5（p96）"
      },
      {
        id: "t17", block: "b4", name: "n 项连乘：取对数",
        signal: R`$\sqrt[n]{(n+1)(n+2)\cdots(2n)}$、$\sqrt[n]{n!}$ 一类`,
        example: { q: R`求 $\lim\limits_{n\to\infty}\dfrac1n\sqrt[n]{(n+1)(n+2)\cdots(n+n)}$。`, src: "武忠祥 第1章 n项连乘 例2 p38" },
        idea: {
          key: R`取对数把连乘变成 $n$ 项和，再用定积分定义（或夹逼），最后取指数。`,
          how: [R`令 $y_n$ 为原式，求 $\ln y_n$`, R`$\frac1n\sum\ln(n+k)-\ln n=\frac1n\sum\ln\left(1+\frac kn\right)$`, R`转成 $\int_0^1\ln(1+x)\mathrm dx$`],
          refs: [
            { src: "武忠祥 p38", text: R`$n$ 项连乘的数列极限常用方法：(1) 夹逼原理；(2) 取对数化为 $n$ 项和` }
          ]
        },
        think: R`连乘再开 $n$ 次方，取对数就变成 $\frac1n\sum$ 的形式：$\ln$ 把乘积变成和，$\sqrt[n]{\ }$ 变成乘 $\frac1n$。前面的 $\frac1n$ 正好用来把每个因子 $n+k$ 变成 $1+\frac kn$，得到积分和。`,
        first: R`令 $y_n$ 为原式，取对数`,
        steps: [
          R`设 $y_n$ 为原式，取对数：$\ln y_n=\dfrac1n\sum\limits_{k=1}^n\ln(n+k)-\ln n$`,
          R`把 $\ln n$ 分进每一项：$\ln n=\dfrac1n\sum\limits_{k=1}^n\ln n$，所以 $\ln y_n=\dfrac1n\sum\limits_{k=1}^n\ln\dfrac{n+k}{n}=\dfrac1n\sum\limits_{k=1}^n\ln\left(1+\dfrac kn\right)$`,
          R`定积分定义：$\lim\ln y_n=\int_0^1\ln(1+x)\mathrm dx$`,
          R`分部积分：$\int_0^1\ln(1+x)\mathrm dx=\left[(1+x)\ln(1+x)-x\right]_0^1=2\ln2-1$`,
          R`原式 $=\mathrm e^{2\ln2-1}=\dfrac{4}{\mathrm e}$`
        ],
        pitfall: R`把 $\ln n$ 写成 $\frac1n\sum\ln n$ 时漏项；$\int_0^1\ln(1+x)\mathrm dx$ 算错（用分部积分）`,
        practice: R`武忠祥 p38 例1、注 (1)(2)（$\lim\frac{\sqrt[n]{n!}}n=\frac1{\mathrm e}$）`
      },
      {
        id: "t18", block: "b4", name: "递推数列：单调有界 + 后续的比阶",
        signal: R`$x_{n+1}=f(x_n)$ 或含 $x_n$、$x_{n+1}$ 的关系式，证明收敛并求极限，第二问求 $\lim\frac{x_{n+1}}{x_n^k}$ 一类`,
        example: { q: R`设数列 $\{x_n\}$ 满足 $0<x_n<\frac\pi2$，$\cos x_{n+1}-x_{n+1}=\cos x_n$。(1) 证明 $\lim x_n$ 存在并求其值；(2) 计算 $\lim\limits_{n\to\infty}\dfrac{x_{n+1}}{x_n^2}$。`, src: "1000题 强化篇 第2章第7题" },
        idea: {
          key: R`由关系式比较 $x_{n+1}$ 与 $x_n$ 定单调（常借助函数的单调性），给出界，再对等式两边取极限；第二问把 $x_n\to0$ 当成函数的 $x\to0$，用等价代换。`,
          how: [R`由等式把差 $\cos x_{n+1}-\cos x_n$ 表示出来，看符号定单调`, R`题设给出上下界`, R`取极限解方程，必要时用保号性舍根`, R`第二问：用关系式消去一个量，化为 $x\to0$ 的函数极限`],
          refs: [
            { src: "1000题 强化篇 第2章第7题解析", text: R`$\cos x_{n+1}-\cos x_n=x_{n+1}>0$，且 $0<x_n<\frac\pi2$，故 $0<x_{n+1}<x_n$；$\lim\frac{x_{n+1}}{x_n^2}=\lim\frac{1-\cos x_n}{x_n^2}\cdot\frac{x_{n+1}}{1-\cos x_n}=\frac12$` },
            { src: "武忠祥 p39", text: R`单调性判定：$x_{n+1}-x_n$ 的符号；$\frac{x_{n+1}}{x_n}$ 与 $1$ 比；$f$ 单增时比较 $x_1$、$x_2$` }
          ]
        },
        think: R`(1) 递推式是隐式的，但能写成 $\cos x_{n+1}-\cos x_n=x_{n+1}>0$，比较的是 $\cos$ 值，而 $\cos$ 在 $(0,\frac\pi2)$ 上单调减，所以能推出 $x_n$ 的单调性；有界已给出，用单调有界准则。(2) $x_{n+1}$ 与 $x_n^2$ 比阶，要把递推式改写成"$1-\cos$"的形式，才能用 $1-\cos x\sim\frac{x^2}{2}$。`,
        first: R`$\cos x_{n+1}-\cos x_n=x_{n+1}>0$，$\cos$ 在 $\left(0,\frac\pi2\right)$ 上单减`,
        steps: [
          R`(1) 由递推 $\cos x_{n+1}-\cos x_n=x_{n+1}>0$，所以 $\cos x_{n+1}>\cos x_n$`,
          R`(1) $\cos$ 在 $\left(0,\frac\pi2\right)$ 上单调减少，函数值大的自变量小：$x_{n+1}<x_n$，数列单调减少；又 $x_n>0$ 有下界，由单调有界准则极限存在，设为 $a\in\left[0,\frac\pi2\right)$`,
          R`(1) 递推式两边取极限（$\cos$ 连续）：$\cos a-a=\cos a$，得 $a=0$`,
          R`(2) 改写递推：$1-\cos x_n=(1-\cos x_{n+1})+x_{n+1}$。于是 $\dfrac{x_{n+1}}{x_n^2}=\dfrac{1-\cos x_n}{x_n^2}\cdot\dfrac{x_{n+1}}{1-\cos x_n}=\dfrac{1-\cos x_n}{x_n^2}\cdot\dfrac{x_{n+1}}{(1-\cos x_{n+1})+x_{n+1}}$`,
          R`(2) $x_n\to0$：第一个因子 $\to\dfrac12$；第二个因子分子分母同除 $x_{n+1}$，$\dfrac{1-\cos x_{n+1}}{x_{n+1}}\sim\dfrac{x_{n+1}}{2}\to0$，所以 $\to\dfrac{1}{0+1}=1$。极限 $=\dfrac12$`
        ],
        pitfall: R`没证存在就直接取极限；第二问把 $x_{n+1}$ 和 $x_n$ 当成同一个量`,
        practice: "1000题 强化篇 第2章第5、6、8题；武忠祥 p39–41 例1–3；30讲 例2.14（p91–92）"
      },
      {
        id: "t19", block: "b4", name: "递推数列不单调：先求 a，再证压缩",
        signal: R`$x_{n+1}=f(x_n)$ 中 $f$ 单调减少（数列摆动），如 $x_{n+1}=2+\frac1{x_n}$、$x_{n+1}=\cos x_n$`,
        example: { q: R`设 $x_1=2$，$x_{n+1}=2+\dfrac1{x_n}$（$n=1,2,\cdots$），求极限 $\lim\limits_{n\to\infty}x_n$。`, src: "武忠祥 第1章 递推数列 例4 p41" },
        idea: {
          key: R`先假设极限为 $a$，由 $a=f(a)$ 解出并用范围取舍，再证 $|x_n-a|\leqslant k|x_{n-1}-a|$（$0<k<1$），夹逼得 $x_n\to a$。`,
          how: [R`判断 $f$ 单减 ⇒ 数列不单调，换方法 2`, R`解 $a=f(a)$，由 $x_n$ 的范围（保号性）取舍`, R`估计 $|x_n-a|=|f(x_{n-1})-f(a)|$，得到常数 $k<1$`, R`$|x_n-a|\leqslant k^{n-1}|x_1-a|\to0$`],
          refs: [
            { src: "武忠祥 p39", text: R`方法 2：先令 $\lim x_n=A$，然后等式两端取极限解得 $A$，得到极限初步结果，最后再证明 $\lim x_n=A$。一般来说，数列不具有单调性或单调性很难判定时用方法 2` },
            { src: "武忠祥 例2 注 p40", text: R`当数列由递推关系给出，要证明 $\lim x_n=a$，其核心是证明一个递推不等式 $|x_n-a|\leqslant A|x_{n-1}-a|$，这里 $0<A<1$` }
          ]
        },
        think: R`$f(x)=2+\frac1x$ 单调减少，由 1.6 的结论数列会摆动、不单调，单调有界准则用不上。这时先假设极限存在、解出候选值 $a$，再直接证明 $|x_n-a|\to0$：利用递推式把 $|x_n-a|$ 写成 $|x_{n-1}-a|$ 乘一个小于 1 的系数（压缩），反复用下去就趋于 0。`,
        first: R`$f(x)=2+\frac1x$ 在 $(0,+\infty)$ 上单减，数列不单调`,
        steps: [
          R`求候选值：若 $x_n\to a$，递推式取极限 $a=2+\dfrac1a$，$a^2-2a-1=0$，$a=1\pm\sqrt2$。由 $x_1=2$ 和递推知 $x_n\geqslant2$，所以 $a\geqslant2$，取 $a=1+\sqrt2$`,
          R`作差：$x_n-a=\left(2+\dfrac1{x_{n-1}}\right)-\left(2+\dfrac1a\right)=\dfrac{a-x_{n-1}}{ax_{n-1}}$`,
          R`压缩：$a>2$，$x_{n-1}\geqslant2$，所以 $ax_{n-1}>4>2$，$|x_n-a|\leqslant\dfrac12|x_{n-1}-a|$`,
          R`反复用：$|x_n-a|\leqslant\dfrac12|x_{n-1}-a|\leqslant\cdots\leqslant\dfrac{1}{2^{n-1}}|x_1-a|\to0$`,
          R`所以 $\lim x_n=1+\sqrt2$（这一步同时证明了极限存在，前面的"假设"只是用来找 $a$）`
        ],
        pitfall: R`只写"设极限为 $a$，解得 $a=1+\sqrt2$"就结束，没有证明极限存在`,
        practice: "武忠祥 p41–42 例4–5；30讲 例2.15（p93–94）；1000题 基础篇 第2章第8、9题"
      },
      {
        id: "t20", block: "b4", name: "含 n!、nⁿ、aⁿ：比值判别",
        signal: R`通项含阶乘、$n^n$、$a^n$ 的乘积或商`,
        example: { q: R`证明 $\lim\limits_{n\to\infty}\dfrac{2^nn!}{n^n}=0$，$\lim\limits_{n\to\infty}\dfrac{3^nn!}{n^n}=+\infty$。`, src: "武忠祥 第1章 题型一 例5 p14–15" },
        idea: {
          key: R`算 $\lim\frac{a_{n+1}}{a_n}$：绝对值小于 $1$ 则 $a_n\to0$；大于 $1$ 时对 $\frac1{a_n}$ 用同样结论得 $a_n\to\infty$。`,
          how: [R`写出 $\frac{a_{n+1}}{a_n}$，阶乘约掉`, R`$\frac{n^n}{(n+1)^n}=\frac1{(1+\frac1n)^n}\to\frac1{\mathrm e}$`, R`和 $1$ 比较下结论`],
          refs: [
            { src: "武忠祥 题型一 例5 p14–15", text: R`若 $\lim\frac{a_{n+1}}{a_n}=a$，且 $|a|<1$，则 $\lim a_n=0$。证明：取 $|a|<b<1$，$n>N$ 时 $\left|\frac{a_{n+1}}{a_n}\right|<b$，从而 $|a_{N+m}|<b^{m-1}|a_{N+1}|\to0$` }
          ]
        },
        think: R`通项含 $n!$、$n^n$、$a^n$ 这类连乘，直接求极限不方便，但相邻两项之比会大量约分。比值极限 $<1$ 时数列趋于 0（后项总比前项小一个固定比例）；比值极限 $>1$ 时对倒数用同样的结论。比值里会出现 $(1+\frac1n)^n\to\mathrm e$。`,
        first: R`$a_n=\frac{2^nn!}{n^n}$，算 $\frac{a_{n+1}}{a_n}$`,
        steps: [
          R`$a_n=\dfrac{2^nn!}{n^n}$，算比值：$\dfrac{a_{n+1}}{a_n}=\dfrac{2^{n+1}(n+1)!}{(n+1)^{n+1}}\cdot\dfrac{n^n}{2^nn!}=\dfrac{2(n+1)n^n}{(n+1)^{n+1}}=\dfrac{2n^n}{(n+1)^n}$`,
          R`化简：$\dfrac{2n^n}{(n+1)^n}=\dfrac{2}{\left(1+\frac1n\right)^n}\to\dfrac2{\mathrm e}<1$`,
          R`结论依据：比值极限 $q<1$ 时，取 $q<r<1$，$n$ 充分大后 $a_{n+1}<ra_n$，于是 $0<a_n<Cr^n\to0$。所以 $\lim a_n=0$`,
          R`$b_n=\dfrac{3^nn!}{n^n}$：同样算得 $\dfrac{b_{n+1}}{b_n}=\dfrac{3}{\left(1+\frac1n\right)^n}\to\dfrac3{\mathrm e}>1$`,
          R`对倒数：$\dfrac{1/b_{n+1}}{1/b_n}\to\dfrac{\mathrm e}{3}<1$，所以 $\dfrac1{b_n}\to0$，且 $b_n>0$，故 $b_n\to+\infty$`
        ],
        pitfall: R`比值极限等于 $1$ 时下结论（此时判别失效）`,
        practice: "武忠祥 p34 例3 及注；30讲 习题2.2（p96）"
      },

      /* ---------- ⑤ 反求参数 ---------- */
      {
        id: "t21", block: "b5", name: "由极限值反求参数（泰勒比较系数）",
        signal: R`极限式里含 $a,b,\cdots$，已知极限值（或已知是比 $x^k$ 高阶的无穷小），求参数`,
        example: { q: R`设 $p(x)=a+bx+cx^2+dx^3$。当 $x\to0$ 时，若 $p(x)-\tan x$ 是比 $x^3$ 高阶的无穷小，则下列结论中错误的是（ ）。(A) $a=0$　(B) $b=1$　(C) $c=0$　(D) $d=\frac16$`, src: "武忠祥 第1章 题型四 例4 p47–48" },
        idea: {
          key: R`把具体函数泰勒展开到所需阶数，与多项式逐项比较系数：低于目标阶的系数都要为 $0$。`,
          how: [R`确定需要展开到几阶（高阶于 $x^3$ ⇒ 展开到 $x^3$）`, R`写出 $\tan x=x+\frac{x^3}3+o(x^3)$`, R`$p(x)-\tan x$ 的常数、一次、二次、三次系数都为 $0$`],
          refs: [
            { src: "武忠祥 题型四 例4 p47", text: R`由 $\tan x-x\sim\frac13x^3$ 知 $\tan x=x+\frac13x^3+o(x^3)$；$\lim\frac{p(x)-\tan x}{x^3}=0\Rightarrow a=0,b=1,c=0,d=\frac13$` },
            { src: "30讲 习题1.15 解答 p74", text: R`$\frac{x-\frac12x^2+o(x^2)-ax-bx^2}{x^2}\to2$，从而 $1-a=0$，$-\left(\frac12+b\right)=2$` }
          ]
        },
        think: R`"$p(x)-\tan x$ 是比 $x^3$ 高阶的无穷小"意思是展开到 $x^3$ 时，常数项和 $x,x^2,x^3$ 的系数都必须为 0。$p$ 已经是多项式，只需把 $\tan x$ 泰勒展开到 $x^3$，逐项比较系数。`,
        first: R`$\tan x=x+\frac{x^3}3+o(x^3)$`,
        steps: [
          R`泰勒：$\tan x=x+\dfrac{x^3}{3}+o(x^3)$`,
          R`作差：$p(x)-\tan x=a+(b-1)x+cx^2+\left(d-\dfrac13\right)x^3+o(x^3)$`,
          R`比 $x^3$ 高阶 ⇔ 除以 $x^3$ 后 $\to0$ ⇔ 各项系数都为 0：$a=0$，$b=1$，$c=0$，$d=\dfrac13$`,
          R`所以 (D) $d=\dfrac16$ 错误，选 (D)`
        ],
        pitfall: R`把 $\tan x$ 的三次项系数记成 $\frac16$（那是 $\sin x$、$\arcsin x$ 的）`,
        practice: "30讲 习题1.15、1.16（p70，答案 p74）；武忠祥 p48 注；1000题 强化篇 第1章第27、28题"
      },
      {
        id: "t22", block: "b5", name: "lim[f(x)−(ax+b)]：先求 a，再求 b",
        signal: R`$\lim\limits_{x\to\infty}\left(\sqrt{\cdots}+ax+b\right)=0$ 或 $=c$，求 $a$、$b$`,
        example: { q: R`已知 $\lim\limits_{x\to-\infty}\left(\sqrt{x^2+x+1}+ax+b\right)=0$，求 $a$、$b$。`, src: "武忠祥 第1章 题型三 例2 p43–44" },
        idea: {
          key: R`两边同除 $x$ 得 $a$；再 $b=-\lim(\sqrt{\cdots}+ax)$。注意 $x\to-\infty$ 时 $\sqrt{x^2}=-x$。`,
          how: [R`$a=-\lim\frac{\sqrt{x^2+x+1}}x$（同除 $x$）`, R`$b=-\lim\left(\sqrt{x^2+x+1}+ax\right)$，有理化或提出 $-x$ 用等价`],
          refs: [
            { src: "武忠祥 题型三 例2 注 p44", text: R`方法一是同时把 $a$ 和 $b$ 求出来，但比较烦琐。而方法二和方法三都是分别先求出 $a$，然后再求出 $b$，比较简单` }
          ]
        },
        think: R`$\lim[f(x)-(ax+b)]=0$ 说明 $y=ax+b$ 是斜渐近线。求法固定两步：先除以 $x$ 求 $a$（$\frac{b}{x}$ 和 $\frac{f-ax-b}{x}$ 都 $\to0$），再求 $b=\lim(f-ax)$。这里 $x\to-\infty$，根号除以 $x$ 时要注意 $\sqrt{x^2}=-x$。`,
        first: R`两端同除 $x$：$a=-\lim\limits_{x\to-\infty}\dfrac{\sqrt{x^2+x+1}}x$`,
        steps: [
          R`求 $a$：已知式除以 $x$（$\to0$ 除以 $x\to-\infty$ 仍 $\to0$）：$\lim\left(\dfrac{\sqrt{x^2+x+1}}{x}+a+\dfrac bx\right)=0$，所以 $a=-\lim\dfrac{\sqrt{x^2+x+1}}{x}$`,
          R`$x<0$ 时 $\dfrac{\sqrt{x^2+x+1}}{x}=-\sqrt{\dfrac{x^2+x+1}{x^2}}=-\sqrt{1+\dfrac1x+\dfrac1{x^2}}\to-1$，所以 $a=1$`,
          R`求 $b$：$b=-\lim\limits_{x\to-\infty}\left(\sqrt{x^2+x+1}+x\right)$，是 $\infty-\infty$，有理化：$\sqrt{x^2+x+1}+x=\dfrac{(x^2+x+1)-x^2}{\sqrt{x^2+x+1}-x}=\dfrac{x+1}{\sqrt{x^2+x+1}-x}$`,
          R`分子分母同除 $-x>0$：$\dfrac{-1-\frac1x}{\sqrt{1+\frac1x+\frac1{x^2}}+1}\to\dfrac{-1}{2}$，所以 $b=\dfrac12$`,
          R`$a=1$，$b=\dfrac12$`
        ],
        pitfall: R`按 $x\to+\infty$ 处理 $\sqrt{x^2}=x$，得出 $a=-1$`,
        practice: R`武忠祥 p44 注（$\lim\left(\frac{x^2+1}{x+1}-ax+b\right)=3$，$a=1,b=4$）、例3–4（p44）；30讲 习题2.4`
      },

      /* ---------- ⑥ 无穷小比阶 ---------- */
      {
        id: "t23", block: "b6", name: "变限积分型无穷小排序",
        signal: R`几个 $\int_0^{g(x)}f(t)\mathrm dt$ 形式的无穷小，排阶数或选最高阶`,
        example: { q: R`把 $x\to0^+$ 时的无穷小 $\alpha=\int_0^x\cos t^2\mathrm dt$，$\beta=\int_0^{x^2}\tan\sqrt t\,\mathrm dt$，$\gamma=\int_0^{\sqrt x}\sin t^3\mathrm dt$ 排序，使排在后面的是前一个的高阶无穷小。(A) $\alpha,\beta,\gamma$　(B) $\alpha,\gamma,\beta$　(C) $\beta,\alpha,\gamma$　(D) $\beta,\gamma,\alpha$`, src: "武忠祥 第1章 题型四 例1 p44–45" },
        idea: {
          key: R`被积函数 $f\sim at^m$、上限 $g\sim bx^n$，则积分是 $x$ 的 $n(m+1)$ 阶；也可以求导定阶（导数 $k$ 阶 ⇒ 原函数 $k+1$ 阶）。`,
          how: [R`被积函数在 $t\to0$ 时等价成 $at^m$`, R`上限等价成 $bx^n$`, R`阶数 $=n(m+1)$；或直接积分 $\int_0^{bx^n}at^m\mathrm dt$`],
          refs: [
            { src: "武忠祥 题型四 例1 方法五 p45", text: R`若 $f(x)$ 在 $x=0$ 的某邻域内连续，且 $f(x)$ 是 $x$ 的 $m$ 阶无穷小，$\varphi(x)$ 是 $x$ 的 $n$ 阶无穷小，则 $F(x)=\int_0^{\varphi(x)}f(t)\mathrm dt$ 是 $x$ 的 $n(m+1)$ 阶无穷小` },
            { src: "18讲 p5", text: R`当 $x\to0$ 时，$f(x)\sim ax^m$，$g(x)\sim bx^n$，则 $\int_0^{g(x)}f(t)\mathrm dt\sim\int_0^{bx^n}at^m\mathrm dt$` }
          ]
        },
        think: R`变限积分 $\int_0^{g(x)}f(t)\mathrm dt$ 的阶数有现成结论：被积函数 $f(t)\sim at^m$、上限 $g(x)\sim bx^n$，积分 $\sim\frac{a}{m+1}g^{m+1}$，是 $x$ 的 $n(m+1)$ 阶。所以每个只要读出 $m$、$n$。`,
        first: R`逐个算 $m$、$n$`,
        steps: [
          R`公式依据：$\int_0^{g}at^m\mathrm dt=\dfrac{a}{m+1}g^{m+1}$，$g\sim bx^n$，所以阶数是 $n(m+1)$`,
          R`$\alpha$：$\cos t^2\to1$，即 $\sim t^0$，$m=0$；上限 $x$，$n=1$；阶数 $1$`,
          R`$\beta$：$\tan\sqrt t\sim\sqrt t=t^{\frac12}$，$m=\frac12$；上限 $x^2$，$n=2$；阶数 $2\cdot\frac32=3$`,
          R`$\gamma$：$\sin t^3\sim t^3$，$m=3$；上限 $\sqrt x$，$n=\frac12$；阶数 $\frac12\cdot4=2$`,
          R`阶数从低到高：$\alpha(1)$、$\gamma(2)$、$\beta(3)$，选 (B)`
        ],
        pitfall: R`把阶数算成 $m+n$；$m$ 为 $0$ 时（被积函数极限非零）阶数就是上限的阶`,
        practice: "武忠祥 p46 例2；1000题 强化篇 第1章第19、26题"
      },
      {
        id: "t24", block: "b6", name: "o 记号与带头大哥（选择题）",
        signal: R`给出 $f=o(g)$ 或 $\alpha\sim\beta$，判断 $f+g$、$fg$、$\alpha-\beta$ 等的阶`,
        example: { q: R`设 $f(x)$、$g(x)$ 在 $x=0$ 的某去心邻域内有定义且恒不为 $0$，若 $x\to0$ 时 $f(x)$ 是 $g(x)$ 的高阶无穷小，则（ ）。(A) $f(x)+g(x)=o(g(x))$　(B) $f(x)g(x)=o(f^2(x))$　(C) $f(x)=o(\mathrm e^{g(x)}-1)$　(D) $f(x)=o(g^2(x))$`, src: "18讲 第1讲 例1.5 p6" },
        idea: {
          key: R`$f=o(g)$ 时 $g$ 是"带头大哥"：$f+g\sim g$；$fg=o(g^2)$；凡与 $g$ 等价的量都可以替换 $g$。`,
          how: [R`认出谁是低阶（带头大哥）`, R`和：$\sim$ 带头大哥；积：$o(\text{大哥}^2)$`, R`$\mathrm e^g-1\sim g$、$\ln(1+g)\sim g$，可以替换`],
          refs: [
            { src: "18讲 p6", text: R`若 $\alpha=o(\beta)$，则 ① $\alpha+\beta\sim\beta$；② $\alpha+\beta$ 与 $\beta$ 同号；③ $\alpha\cdot\beta=o(\beta^2)$` },
            { src: "30讲 p51", text: R`$o(x^m)\pm o(x^n)=o(x^l)$，$l\geqslant\min\{m,n\}$；$o(x^m)\cdot o(x^n)=o(x^{m+n})$；$o(x^m)=k\cdot o(x^m)$` }
          ]
        },
        think: R`"$f$ 是 $g$ 的高阶无穷小"：$g$ 是"带头大哥"，$f$ 比它小一个量级。和式里大哥说了算（$f+g\sim g$），乘积和平方按比值翻译成 $\lim\frac AB$ 判断。逐条把 $A=o(B)$ 翻译成 $\frac AB\to0$。`,
        first: R`$g$ 是带头大哥`,
        steps: [
          R`已知：$\dfrac fg\to0$，$f,g\to0$`,
          R`(A) $\dfrac{f+g}{g}=\dfrac fg+1\to1\neq0$，$f+g\sim g$，不是 $o(g)$，错`,
          R`(B) $\dfrac{fg}{f^2}=\dfrac gf\to\infty$，不是 $o(f^2)$，错（反过来 $fg=o(g^2)$ 才对）`,
          R`(C) $\mathrm e^g-1\sim g$，$\dfrac{f}{\mathrm e^g-1}\sim\dfrac fg\to0$，对`,
          R`(D) $\dfrac{f}{g^2}=\dfrac fg\cdot\dfrac1g$ 是 $0\cdot\infty$，不确定（$f=x^2,g=x$ 时比值为 1），错。选 (C)`
        ],
        pitfall: R`把 $o(g)$ 和 $o(g^2)$ 混为一谈；以为等价无穷小相减"等于 $0$"（是 $o(\alpha)$）`,
        practice: "1000题 基础篇 第1章第9题；1000题 强化篇 第1章第24题（③④对）"
      },
      {
        id: "t25", block: "b6", name: "求 a、n 使 f(x) ~ axⁿ",
        signal: R`"当 $x\to0$ 时 $f(x)$ 与 $ax^n$ 是等价无穷小，求 $a$、$n$"`,
        example: { q: R`已知 $x\to0$ 时，$\mathrm e^{-x^2}-\cos\sqrt2x$ 与 $ax^n$ 是等价无穷小，则（ ）。(A) $n=2,a=\frac14$　(B) $n=3,a=\frac12$　(C) $n=4,a=\frac13$　(D) $n=5,a=\frac16$`, src: "武忠祥 第1章 题型四 例5 p48" },
        idea: {
          key: R`用"幂次最低"原则把差展开到第一个不抵消的项，它的系数和次数就是 $a$、$n$；选择题可先用奇偶性排除。`,
          how: [R`偶函数的展开只有偶次项，奇函数只有奇次项，先排除选项`, R`各自展开到系数第一次不同的那一项`, R`读出 $a$、$n$`],
          refs: [
            { src: "武忠祥 题型四 例5 方法二 p48", text: R`由于 $\mathrm e^{-x^2}-\cos\sqrt2x$ 是偶函数，则其在 $x=0$ 处的泰勒展开式中只有偶次项，由此可知 $n$ 只能是偶数，故排除 (B)(D)` }
          ]
        },
        think: R`$\mathrm e^{-x^2}$ 与 $\cos\sqrt2x$ 展开后前两项都是 $1-x^2$，相减抵消，所以要展开到第一个不抵消的项（"幂次最低"原则），它的系数和次数就是 $a$、$n$。选择题可以先用奇偶性：差是偶函数，展开式只有偶次项，排除 $n=3,5$。`,
        first: R`偶函数，先排除 (B)(D)`,
        steps: [
          R`奇偶性：$\mathrm e^{-x^2}$、$\cos\sqrt2x$ 都是偶函数，差也是偶函数，只含偶次幂，排除 (B)(D)`,
          R`展开：$\mathrm e^u=1+u+\dfrac{u^2}{2}+o(u^2)$，$u=-x^2$：$\mathrm e^{-x^2}=1-x^2+\dfrac{x^4}{2}+o(x^4)$`,
          R`$\cos v=1-\dfrac{v^2}{2}+\dfrac{v^4}{24}+o(v^4)$，$v=\sqrt2x$：$\cos\sqrt2x=1-x^2+\dfrac{4x^4}{24}+o(x^4)=1-x^2+\dfrac{x^4}{6}+o(x^4)$`,
          R`相减：$x^2$ 项抵消，差 $=\left(\dfrac12-\dfrac16\right)x^4+o(x^4)=\dfrac13x^4+o(x^4)$`,
          R`所以 $n=4$，$a=\dfrac13$，选 (C)`
        ],
        pitfall: R`$\cos\sqrt2x$ 的 $x^4$ 项写成 $\frac{x^4}{24}$（漏了 $(\sqrt2)^4=4$）`,
        practice: "武忠祥 p48 注（$n=3$）、例3（p46–47）；1000题 强化篇 第1章第28–31题"
      },

      /* ---------- ⑦ 连续与间断 ---------- */
      {
        id: "t26", block: "b7", name: "由极限定义的函数：先求表达式，再判间断",
        signal: R`$f(x)=\lim\limits_{n\to\infty}\frac{\cdots x^n\cdots}{\cdots}$ 或 $\lim\limits_{t\to x}(\cdots)$，问间断点`,
        example: { q: R`求函数 $f(x)=\lim\limits_{n\to\infty}\dfrac{x^{n+2}-x^{-n}}{x^n+x^{-n}}$ 的间断点并指出其类型。`, src: "武忠祥 第1章 第三节 题型一 例6 p52" },
        idea: {
          key: R`求极限时 $x$ 当常数，按 $|x|<1$、$|x|=1$、$|x|>1$（或 $x$ 的符号）分段，写出分段表达式，再看无定义点和分段点。`,
          how: [R`先把式子整理（分子分母同乘 $x^n$ 等）`, R`按局部表达式的极限分段（$|x|^n$、$\mathrm e^{nx}$ 等）`, R`写出 $f(x)$ 的分段式，标出无定义点`, R`在分段点、无定义点算左右极限，判类型`],
          refs: [
            { src: "30讲 例1.26 方法总结 p57", text: R`主要关注 $n$ 前面的系数；若 $n$ 的系数为零，含 $n$ 的项消失了` },
            { src: "18讲 p3", text: R`抓住 $\lim|x|^n$、$\lim nx^{2n}$、$\lim\mathrm e^{nx}$、$\lim n^x$ 这些关键点，即可解决形如 $\lim\limits_{n\to\infty}f(n,x)$ 的问题` }
          ]
        },
        think: R`$f$ 是对 $n$ 的极限，先求出表达式。式子里有 $x^n$ 和 $x^{-n}$，同乘 $x^n$ 统一成 $x^{2n}$，它的极限按 $|x|<1$、$=1$、$>1$ 分类。得到分段函数后，间断点只可能在 $x=0$（无定义）和分段点 $x=\pm1$。`,
        first: R`$x=0$ 无定义；$x\neq0$ 时分子分母同乘 $x^n$`,
        steps: [
          R`$x=0$ 时 $x^{-n}$ 无定义，$f$ 在 0 处无定义。$x\neq0$ 时分子分母同乘 $x^n$：$f(x)=\lim\dfrac{x^{2n+2}-1}{x^{2n}+1}$`,
          R`$0<|x|<1$：$x^{2n}\to0$，$f=\dfrac{0-1}{0+1}=-1$；$|x|=1$：$x^{2n}=1$，$f=\dfrac{1-1}{2}=0$；$|x|>1$：同除 $x^{2n}$，$f\to x^2$`,
          R`$x=0$：两侧都在 $0<|x|<1$ 里，$\lim\limits_{x\to0}f=-1$ 存在，但 $f(0)$ 无定义，可去间断点`,
          R`$x=1$：$f(1^-)=-1$，$f(1^+)=1^2=1$，左右极限存在但不等，跳跃间断点`,
          R`$f$ 是偶函数，$x=-1$ 同样是跳跃间断点`
        ],
        pitfall: R`漏掉 $|x|=1$ 这一段；忘了 $x^{-n}$ 使 $x=0$ 无定义`,
        practice: "武忠祥 p52 例5；30讲 例1.38（p68）、习题1.4、1.5；1000题 强化篇 第1章第38题"
      },
      {
        id: "t27", block: "b7", name: "数间断点：幂指函数、含 ln 和绝对值",
        signal: R`问"第一类（或第二类、可去）间断点的个数"，函数含 $|x|^{v(x)}$、$\ln|x|$、$\mathrm e^{\frac1{x-a}}$`,
        example: { q: R`函数 $f(x)=|x|^{\frac1{(1-x)(x-2)}}$ 的第一类间断点的个数是（ ）。(A) 3　(B) 2　(C) 1　(D) 0`, src: "18讲 第1讲 例1.11 p10" },
        idea: {
          key: R`先把幂指函数写成 $\mathrm e^{v\ln u}$ 找全无定义点；每个点算左右极限：指数 $\to\pm\infty$ 时 $\mathrm e^{+\infty}=+\infty$、$\mathrm e^{-\infty}=0$。`,
          how: [R`$|x|^v=\mathrm e^{v\ln|x|}$，无定义点：$x=0$（$\ln$）、$x=1,2$（分母）`, R`每个点分别算指数部分的左右极限`, R`$\ln|x|$ 在 $x=1$ 附近用 $\ln x\sim x-1$`, R`按定义分类计数`],
          refs: [
            { src: "18讲 p10", text: R`$|x|^{\frac1{(1-x)(x-2)}}\Rightarrow x=0,1,2$ 为无定义点，根据 $u^v=\mathrm e^{v\ln u}$ 将原式变形可知 $x=0$ 为无定义点` },
            { src: "18讲 p9", text: R`盯住无定义点与分段点（尤其是分母表达式的零点）` }
          ]
        },
        think: R`幂指函数 $|x|^{v(x)}$ 先写成 $\mathrm e^{v\ln|x|}$，才能看清所有无定义点：$\ln|x|$ 要 $x\neq0$，指数分母要 $x\neq1,2$。然后对每个点求指数部分的极限（注意分左右），指数 $\to$ 有限数、$\pm\infty$ 分别对应 $f\to$ 正数、$+\infty$ 或 $0$。`,
        first: R`$f=\mathrm e^{\frac{\ln|x|}{(1-x)(x-2)}}$，备选点 $x=0,1,2$`,
        steps: [
          R`改写：$f(x)=\mathrm e^{\frac{\ln|x|}{(1-x)(x-2)}}$，无定义点 $x=0,1,2$`,
          R`$x=0$：$\ln|x|\to-\infty$，分母 $(1-0)(0-2)=-2$，指数 $\to+\infty$，$f\to+\infty$，第二类`,
          R`$x=1$：$\ln|x|=\ln x\sim x-1$，指数 $\sim\dfrac{x-1}{(1-x)(x-2)}=\dfrac{-1}{x-2}\to1$，$f\to\mathrm e$，极限存在，可去间断点（第一类）`,
          R`$x=2$：$\ln2>0$，$1-x\to-1$。$x\to2^+$ 时 $x-2\to0^+$，分母 $\to0^-$，指数 $\to-\infty$，$f\to0$；$x\to2^-$ 时分母 $\to0^+$，指数 $\to+\infty$，$f\to+\infty$。左极限是 $\infty$，第二类`,
          R`第一类间断点只有 $x=1$，选 (C)`
        ],
        pitfall: R`漏掉 $x=0$ 这个无定义点；$x=2$ 只算了一侧`,
        practice: "武忠祥 p51–52 例3、例4；1000题 强化篇 第1章第35、37题；30讲 习题1.3"
      },
      {
        id: "t28", block: "b7", name: "含 e^(1/x) 的左右极限求参数",
        signal: R`式子含 $\mathrm e^{\frac1x}$、$\mathrm e^{\frac4x}$、$(1+|x|)^{\frac1x}$，已知极限存在（或连续），求参数`,
        example: { q: R`已知 $\lim\limits_{x\to0}\left[a\dfrac{2+\mathrm e^{\frac1x}}{1+\mathrm e^{\frac4x}}+(1+|x|)^{\frac1x}\right]$ 存在，求 $a$ 的值。`, src: "30讲 习题1.14（p70，解答 p74）；1000题 强化篇 第1章第32题" },
        idea: {
          key: R`$\mathrm e^{\frac1x}$ 在 $0^+$、$0^-$ 两侧完全不同，分别算左右极限，令它们相等。`,
          how: [R`$x\to0^+$：$\mathrm e^{\frac1x}\to+\infty$，分子分母同除最高的 $\mathrm e^{\frac4x}$`, R`$x\to0^-$：$\mathrm e^{\frac1x}\to0$`, R`$|x|$ 按左右去掉绝对值`, R`左右极限相等，解出参数`],
          refs: [
            { src: "30讲 习题1.14 解答 p74", text: R`$\lim\limits_{x\to0^+}=0+\mathrm e$，$\lim\limits_{x\to0^-}=2a+\frac1{\mathrm e}$，所以 $\mathrm e=2a+\frac1{\mathrm e}$` },
            { src: "武忠祥 p10–11", text: R`需要分左、右极限求极限的问题主要有三种：分段函数（含绝对值）在分界点；$\mathrm e^\infty$ 型；$\arctan\infty$ 型` }
          ]
        },
        think: R`式子里有 $\mathrm e^{\frac1x}$、$\mathrm e^{\frac4x}$ 和 $|x|$，它们在 $x=0$ 两侧表现完全不同（右侧爆炸、左侧趋于 0；绝对值左右去掉的符号不同），所以必须分左右极限。极限存在 ⇔ 左右相等，列方程求 $a$。`,
        first: R`分 $x\to0^+$ 和 $x\to0^-$`,
        steps: [
          R`右极限，第一项：$x\to0^+$ 时 $\mathrm e^{\frac4x}$ 增长最快，分子分母同除 $\mathrm e^{\frac4x}$：$\dfrac{2\mathrm e^{-\frac4x}+\mathrm e^{-\frac3x}}{\mathrm e^{-\frac4x}+1}\to\dfrac{0}{1}=0$`,
          R`右极限，第二项：$|x|=x$，$(1+x)^{\frac1x}\to\mathrm e$。右极限 $=a\cdot0+\mathrm e=\mathrm e$`,
          R`左极限，第一项：$x\to0^-$ 时 $\dfrac1x\to-\infty$，$\mathrm e^{\frac1x},\mathrm e^{\frac4x}\to0$，第一项 $\to a\cdot\dfrac21=2a$`,
          R`左极限，第二项：$|x|=-x$，$(1-x)^{\frac1x}=\left[(1-x)^{-\frac1x}\right]^{-1}\to\mathrm e^{-1}$。左极限 $=2a+\dfrac1{\mathrm e}$`,
          R`极限存在：$\mathrm e=2a+\dfrac1{\mathrm e}$，$a=\dfrac{\mathrm e}{2}-\dfrac{1}{2\mathrm e}$`
        ],
        pitfall: R`$x\to0^-$ 时 $(1+|x|)^{\frac1x}=(1-x)^{\frac1x}\to\mathrm e^{-1}$，误写成 $\mathrm e$`,
        practice: "30讲 习题1.10、1.14；武忠祥 第三节 题型一 例1（p50）"
      },

      /* ---------- ⑧ 闭区间证明 ---------- */
      {
        id: "t29", block: "b8", name: "方程唯一根 + 递推数列收敛到它",
        signal: R`第 (1) 问证方程在区间内有唯一实根 $\xi$，第 (2) 问证 $x_{n+1}=f(x_n)$ 收敛到 $\xi$`,
        example: { q: R`(1) 证明方程 $x=2\ln(1+x)$ 在 $(0,+\infty)$ 内有唯一实根 $\xi$；(2) 任取 $x_1>\xi$，定义 $x_{n+1}=2\ln(1+x_n)$，证明 $\lim x_n$ 存在，并求其值。`, src: "30讲 第2讲 例2.14 p91–92；1000题 基础篇 第2章第11、12题（同题拆分）" },
        idea: {
          key: R`第 (1) 问：零点定理给存在，导数定单调给唯一；第 (2) 问：用 $\xi=f(\xi)$ 和 $f$ 的单调性，归纳证明 $x_n>x_{n+1}>\xi$，单调有界后取极限，由唯一性得极限就是 $\xi$。`,
          how: [R`令 $F(x)=x-2\ln(1+x)$，求导找单调区间`, R`在单调区间端点处找异号（含 $F(+\infty)=+\infty$），零点定理`, R`归纳：$x_k>\xi\Rightarrow x_{k+1}=f(x_k)>f(\xi)=\xi$；$x_k>x_{k+1}$ 由 $F(x_k)>0$ 得到`, R`取极限得 $a=2\ln(1+a)$，$a\geqslant\xi>0$，由唯一性 $a=\xi$`],
          refs: [
            { src: "30讲 例2.14 p91–92", text: R`①验：$x_1>x_2>\xi$；②设：$x_{k-1}>x_k>\xi$；③证：$x_k>x_{k+1}>\xi$。综上 $\{x_n\}$ 单调递减有下界……故 $a=\xi$。题目解答过程需要背诵` }
          ]
        },
        think: R`(1) "有唯一根"= 存在 + 唯一：零点定理给存在，单调性给唯一，所以设 $F(x)=x-2\ln(1+x)$，用导数看单调区间。(2) 递推函数 $2\ln(1+x)$ 单调增加，数列单调；方向由 $x_1$ 与 $\xi$ 的关系决定，借助 (1) 中 $F$ 在 $\xi$ 右侧为正。单调有界后极限满足 $a=2\ln(1+a)$，由唯一性 $a=\xi$。`,
        first: R`$F(x)=x-2\ln(1+x)$，$F'(x)=\dfrac{x-1}{1+x}$`,
        steps: [
          R`(1) $F(x)=x-2\ln(1+x)$，$F'(x)=1-\dfrac{2}{1+x}=\dfrac{x-1}{1+x}$：$(0,1)$ 上 $F'<0$，$(1,+\infty)$ 上 $F'>0$`,
          R`(1) $F(0)=0$ 且 $(0,1]$ 上单调减，所以 $F<0$ 在 $(0,1]$ 上，这里没有根；$F(1)=1-2\ln2<0$，$\lim\limits_{x\to+\infty}F(x)=+\infty$，由零点定理 $(1,+\infty)$ 内有根，又单调增加，根唯一，记为 $\xi$`,
          R`(2) $F$ 在 $(\xi,+\infty)$ 上为正：$x_1>\xi$ 时 $F(x_1)>0$，即 $x_1>2\ln(1+x_1)=x_2$`,
          R`(2) 下界：$2\ln(1+x)$ 单调增加，$x_1>\xi\Rightarrow x_2=2\ln(1+x_1)>2\ln(1+\xi)=\xi$。归纳得 $x_n>\xi$ 且 $x_n>x_{n+1}$ 对一切 $n$ 成立`,
          R`(2) 单调减少、有下界 $\xi$，极限 $a$ 存在且 $a\geqslant\xi>0$；递推式取极限 $a=2\ln(1+a)$，即 $F(a)=0$，由 (1) 的唯一性 $a=\xi$`
        ],
        pitfall: R`只证存在不证唯一；取极限后得 $a=0$ 或 $a=\xi$ 时没有用 $a\geqslant\xi>0$ 排除 $0$`,
        practice: "30讲 例2.14、例2.15（p91–94）；1000题 基础篇 第2章第11、12题"
      },
      {
        id: "t30", block: "b8", name: "端点可能取等号的零点构造",
        signal: R`条件是 $f\geqslant0$、$f(0)=f(1)=0$ 一类，要证 $f(\xi+l)=f(\xi)$ 或 $f(\xi)=\xi$`,
        example: { q: R`设 $f(x)$ 在 $[0,1]$ 上连续，非负且 $f(0)=f(1)=0$。求证：存在 $\xi\in[0,1]$，使 $f(\xi+l)=f(\xi)$，其中 $0<l<1$。`, src: "武忠祥 第1章 第三节 题型二 例2 p53" },
        idea: {
          key: R`令 $F(x)=f(x+l)-f(x)$（$x\in[0,1-l]$），端点值只有"$\geqslant0$""$\leqslant0$"，先讨论有等号的情形，再在严格异号时用零点定理。`,
          how: [R`写出 $F$ 及定义区间 $[0,1-l]$`, R`由条件得 $F(0)\geqslant0$，$F(1-l)\leqslant0$`, R`有等号：端点就是 $\xi$；都严格：零点定理`],
          refs: [
            { src: "武忠祥 题型二 例2 p53", text: R`$F(0)=f(l)-f(0)\geqslant0$，$F(1-l)=f(1)-f(1-l)\leqslant0$。若以上二式中至少有一个等号成立，原题结论显然成立；若等号都不成立，由零点定理知存在 $\xi\in(0,1-l)$` }
          ]
        },
        think: R`要证 $f(\xi+l)=f(\xi)$，辅助函数 $F(x)=f(x+l)-f(x)$，定义在 $[0,1-l]$ 上。端点值用 $f(0)=f(1)=0$ 和 $f\geqslant0$ 只能得到 $F(0)\geqslant0\geqslant F(1-l)$，带等号，所以要分"某个端点恰好为 0"和"严格异号"两种情况。`,
        first: R`$F(x)=f(x+l)-f(x)$，$x\in[0,1-l]$`,
        steps: [
          R`构造：$F(x)=f(x+l)-f(x)$，$x\in[0,1-l]$（保证 $x+l\leqslant1$），$F$ 连续`,
          R`端点：$F(0)=f(l)-f(0)=f(l)\geqslant0$；$F(1-l)=f(1)-f(1-l)=-f(1-l)\leqslant0$（用 $f\geqslant0$）`,
          R`若 $F(0)=0$，取 $\xi=0$；若 $F(1-l)=0$，取 $\xi=1-l$`,
          R`否则 $F(0)>0>F(1-l)$，由零点定理，存在 $\xi\in(0,1-l)$，$F(\xi)=0$`,
          R`总之存在 $\xi\in[0,1-l]\subset[0,1]$，使 $f(\xi+l)=f(\xi)$（结论写闭区间，正是因为端点可能取等号）`
        ],
        pitfall: R`直接写"由零点定理"，没有处理等号情形；$F$ 定义在 $[0,1]$ 上`,
        practice: "武忠祥 p53–54 例2、例3（1.10 题型 7）、例4；教材习题1-10 第1题"
      }
    ],

    pitfalls: [
      { wrong: R`洛必达后极限不存在，所以原极限不存在`, why: R`洛必达是"右存在则左存在"，反过来不成立`, right: R`洛必达失效时换方法（有界乘无穷小、夹逼等）（30讲 p48）`, test: R`$\lim\limits_{x\to0}\dfrac{x^2\sin\frac1x}{x}$ 存在吗？`, ans: R`存在，等于 $0$；洛必达后 $2x\sin\frac1x-\cos\frac1x$ 无极限`, link: "知识点 洛必达法则" },
      { wrong: R`$\dfrac{\mathrm e^x+x\mathrm e^x}{\mathrm e^x-1}-\dfrac1x$ 中把 $\mathrm e^x-1$ 换成 $x$ 再算`, why: R`两项相减，第一项的分母换掉后丢失了高阶信息`, right: R`先通分成一个分式，再对乘除因子换（30讲 习题1.12 注 p72）`, test: R`按错误做法得多少？正确答案多少？`, ans: R`错误做法得 $2$；正确答案 $\frac32$（1000题 基础 第1章第19题）`, link: "题型 10" },
      { wrong: R`泰勒公式展开到 $x^2$ 就够了`, why: R`$A-B$ 型要展开到系数第一次不同的那一项，前面的项可能全部抵消`, right: R`用"上下同阶""幂次最低"定阶数（30讲 p52–53）`, test: R`$\cos x-\mathrm e^{-\frac{x^2}2}$ 展开到 $x^2$ 得到什么？`, ans: R`$0+o(x^2)$，看不出阶；要展开到 $x^4$，得 $-\frac1{12}x^4$`, link: "题型 8" },
      { wrong: R`数列极限 $\lim\frac{\ln n}n$ 直接对 $n$ 求导用洛必达`, why: R`数列是离散的点，不能求导`, right: R`先改成 $\lim\limits_{x\to+\infty}\frac{\ln x}x$ 再洛必达（海涅定理）（武忠祥 p33；30讲 p83）`, test: R`$\lim\limits_{n\to\infty}n\left(\arctan n-\frac\pi2\right)=$？`, ans: R`$-1$（改成函数后洛必达，武忠祥 例1 p33–34）`, link: "题型 15" },
      { wrong: R`$1^\infty$ 型算出 $\lim v(u-1)=A$，答案写 $A$`, why: R`答案是 $\mathrm e^A$`, right: R`整体"抄"：$\mathrm e^{\lim v(u-1)}$（30讲 p62）`, test: R`$\lim\limits_{x\to0^+}(\cos\sqrt x)^{\frac1x}=$？`, ans: R`$\mathrm e^{-\frac12}$`, link: "题型 11" },
      { wrong: R`$h\leqslant f\leqslant g$ 且 $g-h\to0$，所以 $f$ 有极限`, why: R`$g$、$h$ 本身可能都没有极限`, right: R`夹逼要求两边的极限都存在且相等（30讲 p54）`, test: R`$h=x+\frac1{x+1}$，$g=x+\frac3{x+1}$，$f=x+\frac2{x+1}$，$x\to+\infty$ 时 $f$ 有极限吗？`, ans: R`没有，$f\to+\infty$`, link: "知识点 化简先行" },
      { wrong: R`$x\to-\infty$ 时 $\sqrt{4x^2+x}=2x\sqrt{1+\cdots}$`, why: R`$\sqrt{x^2}=|x|=-x$（$x<0$）`, right: R`提出 $-x$：$\sqrt{4x^2+x}=-x\sqrt{4+\frac1x}$（武忠祥 例3 p26）`, test: R`$\lim\limits_{x\to-\infty}\dfrac{\sqrt{4x^2+x-1}}{x}=$？`, ans: R`$-2$`, link: "题型 13" },
      { wrong: R`递推数列直接设极限为 $a$，解方程就是答案`, why: R`没证明极限存在，方程的解可能不是极限`, right: R`先证存在（单调有界或压缩），或先求再证（武忠祥 p39）`, test: R`$x_1=1$，$x_{n+1}=2x_n$，"设极限为 $a$，$a=2a$，$a=0$"对吗？`, ans: R`不对，$x_n=2^{n-1}\to+\infty$`, link: "题型 19" },
      { wrong: R`$f$ 单调，所以 $x_{n+1}=f(x_n)$ 一定单调`, why: R`$f$ 单减时数列来回摆动`, right: R`$f$ 单增才能由 $x_1$、$x_2$ 的大小定单调（30讲 例2.13 p91）`, test: R`$x_{n+1}=\cos x_n$，$x_1=1$，数列单调吗？`, ans: R`不单调，摆动着趋于 $\cos a=a$ 的根（30讲 例2.15）`, link: "题型 19" },
      { wrong: R`解出 $a=1\pm\sqrt2$，两个都是极限`, why: R`极限唯一，要用数列的范围取舍`, right: R`由 $x_n\geqslant2$（戴帽）得 $a\geqslant2$，取 $1+\sqrt2$（武忠祥 例4 p41）`, test: R`$x_{n+1}=\sqrt{6+x_n}$，$x_1=\sqrt6$，方程 $a=\sqrt{6+a}$ 的解怎么取？`, ans: R`$a=3$ 或 $a=-2$，因 $x_n>0$ 取 $3$`, link: "题型 19" },
      { wrong: R`$|x_{n+1}-a|<|x_n-a|$ 就能推出 $x_n\to a$`, why: R`压缩系数必须是小于 $1$ 的常数`, right: R`要证 $|x_{n+1}-a|\leqslant k|x_n-a|$，$0<k<1$ 为常数（18讲 p15）`, test: R`$\left(1-\frac1n\right)^n$ 趋于 $0$ 吗？`, ans: R`不，趋于 $\frac1{\mathrm e}$（18讲 p15 说明 $k$ 必须是常数）`, link: "知识点 压缩映射" },
      { wrong: R`$\lim g(x)=u_0$，$\lim\limits_{u\to u_0}f(u)=a$，所以 $\lim f[g(x)]=a$`, why: R`还要求 $x\neq x_0$ 时 $g(x)\neq u_0$（或 $f$ 在 $u_0$ 连续）`, right: R`检查条件③（18讲 定理一 p20）`, test: R`$g=x\ (x\in\mathbb Q)$、$0\ (x\notin\mathbb Q)$；$f(u)=1\ (u\neq0)$、$0\ (u=0)$，$\lim\limits_{x\to0}f[g(x)]$ 存在吗？`, ans: R`不存在（18讲 例2.11 p20–21）`, link: "知识点 复合函数极限的两个定理" },
      { wrong: R`$\lim\cos x_n$ 存在，所以 $\lim x_n$ 存在`, why: R`$\cos$ 在 $\left[-\frac\pi2,\frac\pi2\right]$ 上不单调`, right: R`外层严格单调才能由外推内（18讲 定理二 p21）`, test: R`$x_n=(-1)^n\frac\pi4$，$\cos x_n$ 收敛吗？$x_n$ 呢？`, ans: R`$\cos x_n\equiv\frac{\sqrt2}2$ 收敛；$x_n$ 发散`, link: "题型 6" },
      { wrong: R`"$n\geqslant N$ 时 $|x_n-a|\leqslant\frac1n$"是收敛的充要条件`, why: R`$\frac1n$ 与 $n$ 有关，规定了收敛速度`, right: R`只是充分条件（30讲 例2.17 p95）`, test: R`$x_n=a+\frac1{\sqrt n}$ 满足这个条件吗？收敛吗？`, ans: R`不满足，但收敛于 $a$`, link: "题型 4" },
      { wrong: R`$\sum\frac n{n^2+k^2}$ 用夹逼`, why: R`变化部分 $k^2$ 与主体 $n^2$ 同阶，两边夹出的极限不同`, right: R`用定积分定义（武忠祥 p35 注）`, test: R`用最大、最小项夹，两边的极限各是多少？`, ans: R`$\frac{n^2}{2n^2}\to\frac12$ 和 $\frac{n^2}{n^2+1}\to1$，夹不住；正确答案 $\frac\pi4$`, link: "题型 16" },
      { wrong: R`$x\to0$ 时"抓大头"抓最高次`, why: R`$x\to0$ 时高次项是更小的无穷小`, right: R`$x\to0$ 抓最低次项，$x\to\infty$ 抓最高次项（30讲 p57）`, test: R`$\lim\limits_{x\to0}\dfrac{x+x^3}{2x+x^2}=$？`, ans: R`$\frac12$`, link: "题型 13" },
      { wrong: R`$\lim\limits_{x\to\infty}\arctan x=\frac\pi2$，$\lim\limits_{x\to\infty}\mathrm e^x=+\infty$`, why: R`$x\to\infty$ 包含 $\pm\infty$，两侧不同`, right: R`分 $\pm\infty$：两个极限都不存在（武忠祥 p11）`, test: R`$\lim\limits_{x\to\infty}\mathrm e^{\frac1x}$ 存在吗？`, ans: R`存在，$\frac1x\to0$，极限为 $1$（这里两侧一致）`, link: "知识点 四个差的变形" },
      { wrong: R`判间断只看分母为 $0$ 的点`, why: R`$\ln|x|$、幂指函数 $|x|^v$、$[x]$ 也带来备选点`, right: R`先把幂指函数写成 $\mathrm e^{v\ln u}$，列全无定义点和分段点（18讲 p9–10）`, test: R`$|x|^{\frac1{(1-x)(x-2)}}$ 的无定义点有哪些？`, ans: R`$x=0,1,2$`, link: "题型 27" },
      { wrong: R`$x\left[\frac{10}x\right]$ 中把 $\left[\frac{10}x\right]$ 当成 $\frac{10}x$`, why: R`取整函数不能直接去掉`, right: R`用 $u-1<[u]\leqslant u$ 夹逼（30讲 例1.29 p59）`, test: R`$\lim\limits_{x\to0}x\left[\dfrac{10}x\right]=$？`, ans: R`$10$（夹逼得到，不是"约掉"）`, link: "知识点 化简先行" },
      { wrong: R`$\alpha\sim\beta$，所以 $\alpha-\beta=0$`, why: R`等价只说明比值趋于 $1$，差是比它们高阶的无穷小`, right: R`$\alpha-\beta=o(\alpha)=o(\beta)$（1000题 强化 第1章第24题）`, test: R`$x$ 与 $\sin x$ 等价，$x-\sin x$ 是什么？`, ans: R`$\frac{x^3}6+o(x^3)$，是 $o(x)$，不是 $0$`, link: "题型 24" },
      { wrong: R`$\int_0^{g(x)}f(t)\mathrm dt$ 的阶数 $=m+n$`, why: R`积分把阶数加 $1$ 再乘以上限的阶`, right: R`阶数 $=n(m+1)$（武忠祥 p45）`, test: R`$\int_0^{x^2}\tan\sqrt t\,\mathrm dt$ 是几阶？`, ans: R`$2\times\left(\frac12+1\right)=3$ 阶`, link: "题型 23" },
      { wrong: R`$(1+x)^{\frac1x}\to\mathrm e$，所以 $(1+x)^{\frac1x}-\mathrm e$ 是高阶小量，可以忽略`, why: R`它是 $x$ 的一阶无穷小`, right: R`$(1+x)^{\frac1x}-\mathrm e\sim-\frac{\mathrm e}2x\ (x\to0^+)$（30讲 例1.24 p55）`, test: R`$\lim\limits_{x\to0^+}\dfrac{(1+x)^{\frac1x}-\mathrm e}x=$？`, ans: R`$-\frac{\mathrm e}2$`, link: "知识点 差函数的等价无穷小" },
      { wrong: R`反求两个参数时，把两个方程一起硬解`, why: R`常有一个参数能先由"分母 $\to0$ 则分子 $\to0$"或最低次项单独定出`, right: R`先定一个，再求另一个（武忠祥 例1 p42–43：先得 $b=1$）`, test: R`$\lim\limits_{x\to0}\dfrac{\int_0^x\frac{t^2}{\sqrt{a^2+t^2}}\mathrm dt}{bx-\sin x}=1$，哪个参数先定？`, ans: R`$b=1$（否则分母是一阶、分子三阶，极限为 $0$）；再得 $a=2$`, link: "题型 21" },
      { wrong: R`$\mathrm e^{-x^2}$ 的 $x^4$ 项是 $\frac{x^4}{24}$`, why: R`$\mathrm e^u=1+u+\frac{u^2}2+\cdots$，$u=-x^2$ 时 $\frac{u^2}2=\frac{x^4}2$`, right: R`复合展开时先写外层的展开式，再代入`, test: R`$\mathrm e^{-\frac{x^2}2}$ 的 $x^4$ 项系数？`, ans: R`$\frac18$`, link: "题型 8" }
    ],

    mixed: [
      { id: "m1", block: "b3", level: "填空", q: R`$\lim\limits_{x\to0}\left(\dfrac{\arcsin x}x\right)^{\frac1{\sin^2x}}=$______。`, src: "1000题 强化篇 第1章第1题", hint: R`$1^\infty$ 型：$\alpha=\frac{\arcsin x-x}x\sim\frac{x^2}6$，$\beta=\frac1{\sin^2x}\sim\frac1{x^2}$。`, ans: R`$\mathrm e^{\frac16}$`, go: "t11" },
      { id: "m2", block: "b6", level: "选择", q: R`当 $n\to\infty$ 时，$\mathrm e-\left(1+\frac1n\right)^n$ 与 $\frac c{n^k}$ 为等价无穷小，则 (A) $c=\frac{\mathrm e}3,k=2$　(B) $c=\frac{\mathrm e}2,k=2$　(C) $c=\frac{\mathrm e}3,k=1$　(D) $c=\frac{\mathrm e}2,k=1$`, src: "1000题 强化篇 第1章第23题", hint: R`用 $(1+x)^{\frac1x}-\mathrm e\sim-\frac{\mathrm e}2x$，$x=\frac1n$（30讲 p55）。`, ans: R`(D)`, go: "t15" },
      { id: "m3", block: "b4", level: "填空", q: R`$\lim\limits_{n\to\infty}\left[\frac12+\frac16+\cdots+\frac1{n(n+1)}\right]^n=$______。`, src: "1000题 强化篇 第2章第2题", hint: R`先裂项求和得 $1-\frac1{n+1}$，再按 $1^\infty$。`, ans: R`$\mathrm e^{-1}$`, go: "t15" },
      { id: "m4", block: "b7", level: "选择", q: R`$f(x)=\dfrac{|\ln|x||}{x^2-1}$ 有 (A) 两个跳跃间断点，一个无穷间断点　(B) 两个可去间断点，一个无穷间断点　(C) 一个可去、一个跳跃、一个无穷间断点　(D) 三个无穷间断点`, src: "1000题 强化篇 第1章第35题", hint: R`备选点 $x=0,\pm1$；在 $\pm1$ 附近 $\ln|x|$ 变号，绝对值使左右极限异号。`, ans: R`(A)：$x=0$ 无穷；$x=1$ 左 $-\frac12$、右 $\frac12$；$x=-1$ 左 $\frac12$、右 $-\frac12$`, go: "t27" },
      { id: "m5", block: "b5", level: "填空", q: R`当 $x\to0$ 时，$f(x)=ax+bx^2+\ln(1+x)$ 与 $g(x)=1-\cos x$ 是等价无穷小，则 $ab=$______。`, src: "1000题 强化篇 第1章第27题", hint: R`$\ln(1+x)=x-\frac{x^2}2+o(x^2)$，一次项系数为 $0$，二次项系数为 $\frac12$。`, ans: R`$a=-1$，$b=1$，$ab=-1$`, go: "t21" },
      { id: "m6", block: "b2", level: "选择", q: R`设正项数列 $\{a_n\}$ 单调增加，则使 $\{a_n\}$ 收敛的是 (A) $\{(1+a_n)^{\frac1{a_n}}\}$ 收敛于 $1$　(B) $\left\{\left(1+\frac1{a_n}\right)^{a_n}\right\}$ 收敛于 $\mathrm e$　(C) $\{a_n\ln a_n\}$ 收敛于 $0$　(D) $\left\{\frac{\ln a_n}{a_n}\right\}$ 收敛于 $0$`, src: "18讲 第2讲 例2.13 p21–22", hint: R`单调增的正项数列要么 $\to+\infty$，要么收敛；看各函数取到目标值的位置（画图）。`, ans: R`(C)：$x\ln x\to0$ 时 $x\to0^+$ 或 $x\to1$，单调增只能 $a_n\to1^-$`, go: "t6" },
      { id: "m7", block: "b3", level: "解答", q: R`求 $\lim\limits_{x\to0}\left(\dfrac{a_1^x+a_2^x+\cdots+a_n^x}n\right)^{\frac nx}$，其中 $a_i>0$。`, src: "30讲 习题1.13（p70，解答 p73–74）", hint: R`$1^\infty$：$\frac nx\left(\frac{\sum a_i^x}n-1\right)=\sum\frac{a_i^x-1}x\to\sum\ln a_i$。`, ans: R`$a_1a_2\cdots a_n$`, go: "t11" },
      { id: "m8", block: "b4", level: "解答", q: R`设 $x_1<0$，$x_{n+1}=\mathrm e^{x_n}-1$，求 $\lim\limits_{n\to\infty}\left(\dfrac1{x_n}-\dfrac1{x_{n+1}}\right)$。`, src: "1000题 强化篇 第2章第6题", hint: R`先证 $x_n<0$ 单增、$x_n\to0$；所求 $=\frac{x_{n+1}-x_n}{x_nx_{n+1}}$，换成 $t\to0^-$ 的函数极限。`, ans: R`$\lim\limits_{t\to0^-}\dfrac{\mathrm e^t-1-t}{t(\mathrm e^t-1)}=\frac12$`, go: "t18" },
      { id: "m9", block: "b6", level: "选择", q: R`当 $x\to0$ 时，$\ln(1+x)-\tan x$ 与 $ax^b$ 是等价无穷小，则 $(a,b)=$ (A) $\left(-\frac12,2\right)$　(B) $\left(\frac12,2\right)$　(C) $\left(-\frac13,3\right)$　(D) $\left(\frac13,3\right)$`, src: "1000题 强化篇 第1章第29题", hint: R`一次项抵消，二次项来自 $\ln(1+x)$ 的 $-\frac{x^2}2$，$\tan x$ 没有二次项。`, ans: R`(A)`, go: "t25" },
      { id: "m10", block: "b7", level: "选择", q: R`$f(x)=\lim\limits_{n\to\infty}n^x\left[\left(1+\frac1n\right)^n-\mathrm e\right]$ 在 $x=1$ 处 (A) 左极限存在，右极限不存在　(B) 左极限不存在，右极限存在　(C) 左、右极限都存在，但不相等　(D) 连续`, src: "1000题 强化篇 第1章第13题", hint: R`$\left(1+\frac1n\right)^n-\mathrm e\sim-\frac{\mathrm e}{2n}$，所以 $f(x)=\lim\left(-\frac{\mathrm e}2\right)n^{x-1}$，按 $x<1$、$=1$、$>1$ 分段。`, ans: R`$f(x)=0\ (x<1)$，$-\frac{\mathrm e}2\ (x=1)$，$-\infty\ (x>1)$，选 (A)`, go: "t26" },
      { id: "m11", block: "b5", level: "解答", q: R`求常数 $a$、$b$，使 $f(x)=x-(a+b\cos x)\sin x$ 在 $x\to0$ 时是 $x$ 的 5 阶无穷小。`, src: "30讲 习题1.16（p70）", hint: R`把 $\cos x\sin x=\frac12\sin2x$ 或直接泰勒展开到 $x^5$，令 $x$、$x^3$ 的系数为 $0$。`, ans: R`$a=\frac43$，$b=-\frac13$（此时 $f\sim\frac{x^5}{30}$，已用代码验算）`, go: "t21" },
      { id: "m12", block: "b4", level: "填空", q: R`$\lim\limits_{n\to\infty}\sqrt[n]{1+\frac12+\frac13+\cdots+\frac1n}=$______。`, src: "30讲 习题2.6（p96，解答 p98）", hint: R`夹逼：$1\leqslant$ 根号内 $\leqslant n$，$\sqrt[n]n\to1$。`, ans: R`$1$`, go: "t16" },
      { id: "m13", block: "b1", level: "选择", q: R`函数 $f(x)=x^2\tan x\,\mathrm e^{\cos x}$ 是 (A) 有界函数　(B) 单调函数　(C) 周期函数　(D) 奇函数`, src: "1000题 基础篇 第1章第1题", hint: R`$x^2\mathrm e^{\cos x}$ 偶，$\tan x$ 奇。`, ans: R`(D)`, go: "t3" },
      { id: "m14", block: "b3", level: "填空", q: R`$\lim\limits_{x\to+\infty}\left(x^{\frac2x}-1\right)^{\frac2{\ln x}}=$______。`, src: "1000题 强化篇 第1章第3题", hint: R`$\infty^0$ 的同类：$x^{\frac2x}-1=\mathrm e^{\frac{2\ln x}x}-1\sim\frac{2\ln x}x$，取对数。`, ans: R`$\mathrm e^{-2}$`, go: "t12" },
      { id: "m15", block: "b7", level: "选择", q: R`设函数 $f(x)=\dfrac1{\mathrm e^{\frac x{x-1}}-1}$，则 (A) $x=0$、$x=1$ 都是第一类间断点　(B) 都是第二类间断点　(C) $x=0$ 第一类，$x=1$ 第二类　(D) $x=0$ 第二类，$x=1$ 第一类`, src: "30讲 习题1.3（p69，解答 p70–71）", hint: R`$x\to1^\pm$ 时 $\frac x{x-1}\to\pm\infty$，$\mathrm e^{\pm\infty}$ 分别是 $+\infty$ 和 $0$。`, ans: R`(D)：$x=0$ 时 $f\to\infty$；$x=1$ 右极限 $0$、左极限 $-1$`, go: "t28" },
      { id: "m16", block: "b4", level: "解答", q: R`设 $x_1=2$，$x_n+(x_n-4)x_{n-1}=3$（$n\geqslant2$），证明 $\lim x_n$ 存在，并求其值。`, src: "30讲 习题2.8（p97，解答 p98）", hint: R`解出 $x_n=\frac{3+4x_{n-1}}{1+x_{n-1}}=3+\frac{x_{n-1}}{1+x_{n-1}}<4$；$f(x)=\frac{3+4x}{1+x}$ 单增，比 $x_1$、$x_2$。`, ans: R`单调增有上界 $4$，极限 $\dfrac{3+\sqrt{21}}2$`, go: "t18" },
      { id: "m17", block: "b2", level: "选择", q: R`设函数 $f(x)$ 在 $x=0$ 的某邻域内有定义，且 $\lim\limits_{x\to0}\dfrac{x-f(x)}{\ln(1+x)}=1$，则：① $f(0)=0$；② $\lim\limits_{x\to0}f(x)=f(0)$；③ $\lim\limits_{x\to0}\frac{f(x)}x=1$；④ $x\to0$ 时 $f(x)$ 是 $x$ 的高阶无穷小。正确叙述的个数为 (A) 1　(B) 2　(C) 3　(D) 4`, src: "1000题 强化篇 第1章第17题", hint: R`脱帽：$x-f(x)=x+o(x)$，所以 $f(x)=o(x)$；极限与 $f(0)$ 无关。`, ans: R`只有④对，选 (A)`, go: "t24" },
      { id: "m18", block: "b6", level: "选择", q: R`当 $x\to0$ 时，$(3+2\tan x)^x-3^x$ 是 $3\sin^2x+x^3\cos\frac1x$ 的 (A) 高阶无穷小　(B) 低阶无穷小　(C) 等价无穷小　(D) 同阶但非等价无穷小`, src: "1000题 强化篇 第1章第25题", hint: R`前者提公因式 $3^x\left[\left(1+\frac23\tan x\right)^x-1\right]\sim\frac23x^2$；后者带头大哥是 $3\sin^2x\sim3x^2$。`, ans: R`比值 $\to\frac29$，选 (D)`, go: "t24" }
    ]
  });
})();
