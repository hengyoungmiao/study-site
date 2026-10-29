/*
类型: 题型
标题: 高等数学 第1章 第3节 函数的极限 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-19
更新日期: 2026-10-19
状态: 完成

页码一律是印刷页。教材 = 同济第八版上册；30讲 = 张宇基础30讲·高数分册；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；
武忠祥 = 高等数学辅导讲义（强化）；习题全解 = 同济第八版上册习题全解指导；1000题 = 张宇1000题基础篇（只引题号）。
恆 2026-10-19：ε–δ、ε–X 定义及由定义衍生的证明题考试不考。本节只把定义当理解，不出用定义证明的题型。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "1.3",
    chapter: 1,
    title: "函数的极限",
    pages: "教材 p26–33",
    sources: ["教材 第一章第三节 p26–33", "习题全解 习题1-3 p16–20", "30讲 第1讲 p27–29、p36–41；第2讲 海涅定理 p83–84", "吉米 第1章【31】–【34】p9–10", "武忠祥 第1章第二节 p10–11"],
    updated: "2026-10-19",

    framework: {
      main: R`函数极限是把数列极限的自变量从"一个个正整数"换成"连续变化的 $x$"。$x\to x_0$ 时只看 $x_0$ 附近（去掉 $x_0$ 本身），所以要分左右；性质都变成"局部"的；海涅定理把它和数列极限接起来，也给出判断"不存在"的办法。`,
      nodes: [
        { id: "SEQ", go: "1.2:p2", col: 0, row: 0, kind: "map", label: "数列极限", sub: R`$n\to\infty$（1.2）` },
        { id: "FUN", go: "p2", col: 1, row: 0, kind: "func", label: "函数极限", sub: R`只看去心邻域，与 $f(x_0)$ 无关` },
        { id: "HEI", go: "p11", col: 2, row: 1, kind: "func", label: "海涅定理", sub: R`$f(x)\to A\Rightarrow f(x_n)\to A$` },
        { id: "LR", go: "p4", col: 0, row: 1, kind: "prop", label: "左、右极限", sub: R`$f(x_0^-)$、$f(x_0^+)$` },
        { id: "BND", go: "p9", col: 1, row: 1, kind: "prop", label: "局部有界", sub: "某去心邻域内有界" },
        { id: "SIGN", go: "p10", col: 2, row: 0, kind: "prop", label: "局部保号", sub: R`$A>0\Rightarrow$ 附近 $f>0$` },
        { id: "NO", go: "t3", col: 1, row: 2, kind: "build", label: "极限不存在", sub: "左右不等，或两条数列不一致" }
      ],
      edges: [
        { from: "SEQ", to: "FUN", label: "自变量推广" },
        { from: "FUN", to: "HEI", label: R`取 $x_n\to x_0$` },
        { from: "FUN", to: "LR", label: "存在⇔左右相等" },
        { from: "FUN", to: "BND", label: "局部" },
        { from: "FUN", to: "SIGN", label: "局部" },
        { from: "LR", to: "NO", label: "左≠右" },
        { from: "HEI", to: "NO", label: "两数列值不同" }
      ],
      keys: [
        { q: R`$x\to x_0$ 时 $f(x)$ 的极限和 $f(x_0)$ 有什么关系？`, a: R`$x\to x_0$ 的极限与 $f(x_0)$ 没有关系：只看 $x_0$ 的去心邻域，$f$ 在 $x_0$ 有没有定义、等于多少都不影响（教材 p27；武忠祥 p10）。` },
        { q: R`$\lim\limits_{x\to x_0}f(x)$ 存在的充要条件？$x\to\infty$ 呢？`, a: R`$\lim\limits_{x\to x_0}f(x)$ 存在 $\Leftrightarrow$ 左、右极限都存在且相等（教材 p29）。$x\to\infty$ 指 $|x|\to+\infty$，要 $x\to+\infty$ 和 $x\to-\infty$ 的极限都存在且相等（习题1-3 第10题；武忠祥 p10）。` },
        { q: R`函数极限的有界性、保号性和数列的有什么不同？`, a: R`函数的都是"局部"的：只在 $x_0$ 的某个去心邻域内有界、保号。保号性同样是脱帽严格、戴帽非严格（教材 p31；30讲 p40）。` },
        { q: R`怎样说明 $\lim\limits_{x\to x_0}f(x)$ 不存在？`, a: R`算左、右极限，不相等就不存在；或者找两条趋于 $x_0$（且不等于 $x_0$）的数列，使函数值数列的极限不同（教材 p29、p31–32；吉米【33】p10）。` }
      ]
    },

    points: [
      {
        group: "一、函数极限的概念",
        items: [
          {
            id: "p1", kind: "定义", name: "邻域和去心邻域", page: "教材 p26–27 脚注；30讲 p27",
            body: R`$U(x_0,\delta)=(x_0-\delta,x_0+\delta)$ 叫 $x_0$ 的 $\delta$ 邻域；去掉中心得到==去心邻域== $\mathring U(x_0,\delta)=\{x\mid0<|x-x_0|<\delta\}$。`,
            notes: [R`左、右邻域：$(x_0-\delta,x_0)$、$(x_0,x_0+\delta)$（30讲 p27）`, R`"在 $x_0$ 附近"就是"在 $x_0$ 的某个邻域内"，多近不用说明（30讲 p27）`],
            quiz: R`$\mathring U(2,0.1)$ 是哪个集合？包含 $2$ 吗？`
          },
          {
            id: "p2", kind: "定义", name: "x→x₀ 时的极限（只需理解，考试不考定义证明）", page: "教材 p27",
            body: R`设 $f(x)$ 在 $x_0$ 的某去心邻域内有定义。==$x$ 无限接近 $x_0$（但 $x\neq x_0$）时，$f(x)$ 无限接近常数 $A$==，就记 $\lim\limits_{x\to x_0}f(x)=A$。形式：$\forall\varepsilon>0,\exists\delta>0$，当 $0<|x-x_0|<\delta$ 时，$|f(x)-A|<\varepsilon$。`,
            notes: [R`$0<|x-x_0|$ 就是 $x\neq x_0$（教材 p27）`, R`几何：$x$ 进入 $x_0$ 的某去心邻域后，图形夹在 $y=A\pm\varepsilon$ 两条直线之间（教材 p27）`, R`考试不考 $\varepsilon$–$\delta$ 证明（恆 2026-10-19）`],
            quiz: R`定义里为什么要写 $0<|x-x_0|$，而不是 $|x-x_0|<\delta$？`
          },
          {
            id: "p3", kind: "结论", name: "极限与 f(x₀) 无关", page: "教材 p27、p28 例4",
            body: R`$x\to x_0$ 时 $f(x)$ 有没有极限、极限是多少，==与 $f$ 在 $x_0$ 有没有定义、$f(x_0)$ 等于多少都无关==。`,
            notes: [R`教材例 4：$\dfrac{x^2-1}{x-1}$ 在 $x=1$ 没有定义，但 $\lim\limits_{x\to1}\dfrac{x^2-1}{x-1}=2$`, R`"极限值等于函数值"是 1.8 连续的条件，不是极限的条件`],
            quiz: R`$f(x)=x\ (x\neq0)$，$f(0)=5$。$\lim\limits_{x\to0}f(x)$ 等于多少？`
          },
          {
            id: "p4", kind: "定义", name: "左极限、右极限", page: "教材 p29",
            body: R`把定义中的 $0<|x-x_0|<\delta$ 换成 $x_0-\delta<x<x_0$，得==左极限== $\lim\limits_{x\to x_0^-}f(x)=f(x_0^-)$；换成 $x_0<x<x_0+\delta$，得==右极限== $\lim\limits_{x\to x_0^+}f(x)=f(x_0^+)$。`,
            notes: [R`$f(x_0^-)$ 是一个极限，不是函数值 $f(x_0)$`, R`吉米写作 $f(x_0-0)$、$f(x_0+0)$（吉米 p9）`],
            quiz: R`$f(0^+)$ 和 $f(0)$ 一定相等吗？`
          },
          {
            id: "p5", kind: "定理", name: "极限存在⇔左右极限存在且相等", page: "教材 p29；习题1-3 第11题",
            body: R`==$\lim\limits_{x\to x_0}f(x)=A\Leftrightarrow f(x_0^-)=f(x_0^+)=A$==。`,
            notes: [R`左、右极限都存在但不相等，极限也不存在（教材 p29 例6）`, R`证明见习题全解 习题1-3 第11题（p20）`],
            quiz: R`$f(0^-)=-1$，$f(0^+)=1$，$\lim\limits_{x\to0}f(x)$ 存在吗？`
          },
          {
            id: "p6", kind: "定义", name: "x→∞、x→+∞、x→−∞ 时的极限", page: "教材 p30；习题1-3 第10题",
            body: R`==$|x|$ 无限增大时 $f(x)$ 无限接近 $A$==，记 $\lim\limits_{x\to\infty}f(x)=A$（形式：$\forall\varepsilon>0,\exists X>0$，当 $|x|>X$ 时 $|f(x)-A|<\varepsilon$）。把 $|x|>X$ 换成 $x>X$、$x<-X$，就是 $x\to+\infty$、$x\to-\infty$。`,
            notes: [
              R`$\lim\limits_{x\to\infty}f(x)=A\Leftrightarrow\lim\limits_{x\to+\infty}f(x)=\lim\limits_{x\to-\infty}f(x)=A$（习题全解 p19–20；武忠祥 p10）`,
              R`!!函数里的 $x\to\infty$ 是双向的!!；数列的 $n\to\infty$ 只是 $+\infty$（武忠祥 p10）`
            ],
            quiz: R`$\lim\limits_{x\to+\infty}\arctan x=\dfrac{\pi}{2}$，那么 $\lim\limits_{x\to\infty}\arctan x$ 是多少？`
          },
          {
            id: "p7", kind: "定义", name: "水平渐近线", page: "教材 p30",
            body: R`若 $\lim\limits_{x\to\infty}f(x)=A$，则直线 $y=A$ 是 $y=f(x)$ 图形的==水平渐近线==。`,
            notes: [R`例：$\lim\limits_{x\to\infty}\dfrac1x=0$，$y=0$ 是 $y=\dfrac1x$ 的水平渐近线（教材 p30 例7）`, R`只有一侧存在时，也说那一侧有水平渐近线（单侧渐近线在第三章讲）`],
            quiz: R`$y=\dfrac{2x+1}{x}$ 有没有水平渐近线？是哪条？`
          }
        ]
      },
      {
        group: "二、函数极限的性质（都是局部的）",
        items: [
          {
            id: "p8", kind: "定理", name: "定理 1：唯一性", page: "教材 p31",
            body: R`如果 $\lim\limits_{x\to x_0}f(x)$ 存在，那么==极限唯一==。`,
            notes: [R`用法：两个方向（左右、$\pm\infty$）得到不同的值，极限就不存在。如 $\lim\limits_{x\to\infty}\mathrm e^x$ 不存在：$+\infty$ 方向趋于 $+\infty$，$-\infty$ 方向趋于 $0$（30讲 p36–37）`],
            quiz: R`为什么说 $\lim\limits_{x\to\infty}\mathrm e^x$ 不存在？`
          },
          {
            id: "p9", kind: "定理", name: "定理 2：局部有界性", page: "教材 p31；30讲 p38–39",
            body: R`如果 $\lim\limits_{x\to x_0}f(x)=A$，那么==存在 $M>0$ 和 $\delta>0$，使得当 $0<|x-x_0|<\delta$ 时 $|f(x)|\leqslant M$==。`,
            notes: [
              R`==只保证 $x_0$ 附近有界==，不是整个定义域`,
              R`六种过程（$x\to x_0,x_0^\pm,\infty,\pm\infty$）都有对应结论；$x\to\infty$ 的版本见习题1-3 第12题（习题全解 p20）`,
              R`==极限存在只是局部有界的充分条件==：$\sin x$ 有界，但 $\lim\limits_{x\to+\infty}\sin x$ 不存在（30讲 p39）`
            ],
            quiz: R`$\lim\limits_{x\to1}\dfrac1x=1$，能说 $\dfrac1x$ 在 $(0,2)$ 内有界吗？`
          },
          {
            id: "p10", kind: "定理", name: "定理 3：局部保号性及推论", page: "教材 p31；30讲 p40",
            body: R`若 $\lim\limits_{x\to x_0}f(x)=A>0$（或 $<0$），则存在 $\delta>0$，==当 $0<|x-x_0|<\delta$ 时 $f(x)>0$（或 $<0$）==。推论：若在 $x_0$ 的某去心邻域内 $f(x)\geqslant0$（或 $\leqslant0$），且 $\lim\limits_{x\to x_0}f(x)=A$，则 $A\geqslant0$（或 $\leqslant0$）。`,
            notes: [
              R`定理 3'：$A\neq0$ 时，在某去心邻域内 ==$|f(x)|>\dfrac{|A|}{2}$==（教材 p31）`,
              R`==脱帽严格：$\lim f>0\Rightarrow f>0$；戴帽非严格==：$f\geqslant0$（哪怕 $f>0$）$\Rightarrow\lim f\geqslant0$（30讲 p40）`,
              R`30讲 p40 称它是"极限的 3 个性质中==最重要的一个=="`
            ],
            quiz: R`$f(x)=x^2>0\ (x\neq0)$，$\lim\limits_{x\to0}f(x)$ 是正数吗？`
          },
          {
            id: "p11", kind: "定理", name: "定理 4：函数极限与数列极限（海涅定理）", page: "教材 p31–32；30讲 第2讲 p83–84",
            body: R`如果 $\lim\limits_{x\to x_0}f(x)=A$，$\{x_n\}$ 是 $f$ 定义域内任一收敛于 $x_0$ 的数列，且 $x_n\neq x_0$，那么 ==$\lim\limits_{n\to\infty}f(x_n)=A$==。`,
            notes: [
              R`判不存在：==找两条数列 $x_n\to x_0$、$y_n\to x_0$，若 $f(x_n)$、$f(y_n)$ 极限不同（或一个不存在），则 $\lim\limits_{x\to x_0}f(x)$ 不存在==（吉米【33】点评 p10）`,
              R`反过来"!!只验证一条数列"推不出函数极限存在!!；30讲 p83 的完整版是"对任何这样的数列都成立"才等价`,
              R`以后求数列极限可以借函数极限：==$\lim\limits_{x\to+\infty}f(x)=A\Rightarrow\lim\limits_{n\to\infty}f(n)=A$==（30讲 p84）`
            ],
            quiz: R`$x_n=\dfrac1{n\pi}\to0$ 时 $\sin\dfrac1{x_n}=0$，能说 $\lim\limits_{x\to0}\sin\dfrac1x=0$ 吗？`
          }
        ]
      },
      {
        group: "三、哪些情形要分左右（考点）",
        items: [
          {
            id: "p12", kind: "结论", name: "需要分左、右极限的三类情形", page: "武忠祥 p10–11；30讲 p37",
            body: R`==(1) 分段函数在分段点，两侧表达式不同==（含绝对值，如 $\dfrac{|x|}{x}$）；==(2) $\mathrm e^{\infty}$ 型==，如 $\mathrm e^{\frac1x}$（$x\to0$）、$\mathrm e^x$（$x\to\infty$）；(3) $\arctan\infty$ 型，如 $\arctan\dfrac1x$（$x\to0$）、$\arctan x$（$x\to\infty$）。`,
            notes: [R`取整函数 $[x]$ 在整数点也要分左右（30讲 p37）`, R`分段点两侧表达式相同也可能要分，比如式子里有 $\mathrm e^{\frac{1}{x-1}}$（30讲 例1.15 p37–38）`],
            quiz: R`$\lim\limits_{x\to0}\dfrac{\sin x}{|x|}$ 要不要分左右？结果是什么？`
          },
          {
            id: "p13", kind: "公式", name: "常用的单侧极限", page: "武忠祥 p11；30讲 p37",
            body: R`==$\lim\limits_{x\to0^+}\mathrm e^{\frac1x}=+\infty$，$\lim\limits_{x\to0^-}\mathrm e^{\frac1x}=0$==；==$\lim\limits_{x\to0^\pm}\arctan\dfrac1x=\pm\dfrac{\pi}{2}$==；$\lim\limits_{x\to\pm\infty}\arctan x=\pm\dfrac{\pi}{2}$；$\lim\limits_{x\to0^+}[x]=0$，$\lim\limits_{x\to0^-}[x]=-1$。`,
            notes: [R`记法：$\mathrm e^{+\infty}=+\infty$，$\mathrm e^{-\infty}=0$，$\mathrm e^{\infty}$ 不定；$\arctan(\pm\infty)=\pm\dfrac{\pi}{2}$，$\arctan\infty$ 不定（武忠祥 p11）`],
            quiz: R`$\lim\limits_{x\to0^-}\dfrac{1}{1+\mathrm e^{\frac1x}}$ 等于多少？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "讨论分段函数在分段点的极限",
        signal: R`$f$ 分段给出（或含 $|x|$、$\max$、$\min$），问==分段点处极限是否存在==`,
        example: { q: R`设 $f(x)=\begin{cases}x,&|x|\leqslant1\\x-2,&|x|>1\end{cases}$，讨论 $\lim\limits_{x\to1}f(x)$ 及 $\lim\limits_{x\to-1}f(x)$。`, src: "吉米【32】p9–10" },
        idea: {
          key: R`分段点两侧表达式不同，就==分别求左、右极限，相等才存在==。`,
          how: [
            R`++把条件改写成 $x$ 的区间++（如 $|x|>1$ 拆成 $x<-1$ 和 $x>1$），标清每个分段点左边、右边用哪个式子`,
            R`++左极限代左边的式子，右极限代右边的式子++`,
            R`++比较++：相等则极限存在等于该值；不等则不存在。!!分段点处的函数值不参与!!`
          ],
          refs: [
            { src: "吉米【32】分析 p9", text: R`本题中函数是分段表达的，因此要讨论时的极限值必须从左、右极限入手` },
            { src: "30讲 例1.16 方法总结 p38", text: R`分段函数在分段点处的极限要考虑左、右极限；若 $\lim\limits_{x\to x_0^+}f(x)\neq\lim\limits_{x\to x_0^-}f(x)$，则 $\lim\limits_{x\to x_0}f(x)$ 不存在` }
          ]
        },
        think: R`分段点两侧用的是不同的表达式，函数在那一点的极限要看两侧是否趋于同一个数：分别算左、右极限，相等才存在（教材 1.3 左右极限与极限的关系）。先把 $|x|>1$ 拆成 $x>1$、$x<-1$，弄清每个分段点两侧各是哪个式子。`,
        first: R`把 $|x|>1$ 拆开：$x<-1$ 和 $x>1$ 时 $f=x-2$；$-1\leqslant x\leqslant1$ 时 $f=x$`,
        steps: [
          R`++拆条件++：$|x|\leqslant1$ 即 $-1\leqslant x\leqslant1$，$f=x$；$|x|>1$ 即 $x>1$ 或 $x<-1$，$f=x-2$`,
          R`++$x=1$ 处++：右侧 $x>1$ 用 $x-2$，$f(1^+)=1-2=-1$；左侧 $x<1$（靠近 1）用 $x$，$f(1^-)=1$`,
          R`$f(1^+)\neq f(1^-)$，==所以 $\lim\limits_{x\to1}f(x)$ 不存在==`,
          R`++$x=-1$ 处++：右侧 $x>-1$（靠近 $-1$）用 $x$，$f(-1^+)=-1$；左侧 $x<-1$ 用 $x-2$，$f(-1^-)=-3$`,
          R`$f(-1^+)\neq f(-1^-)$，$\lim\limits_{x\to-1}f(x)$ ==也不存在==（吉米转换稿最后一句印成"存在"，按计算应为不存在）`
        ],
        pitfall: R`!!把分段点处的函数值当成极限!!；$|x|>1$ !!只想到 $x>1$ 一侧!!`,
        practice: "吉米【32】（p9–10）；教材例6（p29）；30讲 例1.16（p38）"
      },
      {
        id: "t2", name: "含 |x|、a^(1/x)、e^(1/x)、arctan(1/x) 的极限",
        signal: R`$x\to0$（或 $x\to x_0$）时式子里有 ==$|x|$、$a^{\frac1x}$、$\mathrm e^{\frac{1}{x-x_0}}$、$\arctan\dfrac1x$==，或 $x\to\infty$ 时有 $\mathrm e^x$、$\arctan x$`,
        example: { q: R`求 $f(x)=\dfrac{|x|}{x}$，$g(x)=\dfrac{1-a^{\frac1x}}{1+a^{\frac1x}}\ (a>1)$ 当 $x\to0$ 时的左、右极限，并说明 $x\to0$ 时极限是否存在。`, src: "吉米【34】p10；习题1-3 第4题 p32" },
        idea: {
          key: R`这几类式子==左右两侧趋向不同，必须分开算==：==$\mathrm e^{+\infty}=+\infty$、$\mathrm e^{-\infty}=0$==，$\arctan(\pm\infty)=\pm\dfrac{\pi}{2}$。`,
          how: [
            R`++先找出"会因为方向不同而结果不同"的那一块++：$\dfrac1x$ 在 $0^\pm$ 分别趋于 $\pm\infty$`,
            R`++分别写出左、右两侧这一块的极限++`,
            R`$a^{\frac1x}\to+\infty$ 的一侧，++分子分母同除以 $a^{\frac1x}$ 再算++`,
            R`++比较左、右极限，相等才存在++`
          ],
          refs: [
            { src: "30讲 例1.15 方法总结 p38", text: R`遇到 $\mathrm e^{\infty}$，需讨论 $\mathrm e^{+\infty}$ 和 $\mathrm e^{-\infty}$。$\lim\limits_{u\to+\infty}\mathrm e^u=+\infty$，$\lim\limits_{u\to-\infty}\mathrm e^u=0$` },
            { src: "武忠祥 第1章第二节 p10–11", text: R`需要分左、右极限求极限的问题主要有三种：分段函数在分界点处的极限（包括带有绝对值的函数）；$\mathrm e^{\infty}$ 型极限；$\arctan\infty$ 型极限` }
          ]
        },
        think: R`$\dfrac{|x|}{x}$ 和 $a^{\frac1x}$ 在 $x=0$ 两侧表现完全不同：$|x|$ 在两侧去绝对值的符号不同；$\dfrac1x$ 在右侧 $\to+\infty$、左侧 $\to-\infty$，使 $a^{\frac1x}$ 一边爆炸、一边趋于 0。所以必须分左右算。`,
        first: R`$x\to0^+$ 时 $\dfrac1x\to+\infty$，$a^{\frac1x}\to+\infty$；$x\to0^-$ 时 $\dfrac1x\to-\infty$，$a^{\frac1x}\to0$`,
        steps: [
          R`++$f$ 的右极限++：$x>0$ 时 $|x|=x$，$f(x)=1$，$f(0^+)=1$`,
          R`++$f$ 的左极限++：$x<0$ 时 $|x|=-x$，$f(x)=-1$，$f(0^-)=-1$；左右不等，$\lim\limits_{x\to0}f(x)$ 不存在`,
          R`++$g$ 的右极限++：$x\to0^+$ 时 $\dfrac1x\to+\infty$，$a>1$ 所以 $a^{\frac1x}\to+\infty$，是 $\frac\infty\infty$ 型；分子分母同除 $a^{\frac1x}$：$g=\dfrac{a^{-\frac1x}-1}{a^{-\frac1x}+1}\to\dfrac{0-1}{0+1}=-1$`,
          R`++$g$ 的左极限++：$x\to0^-$ 时 $\dfrac1x\to-\infty$，$a^{\frac1x}\to0$，直接代入：$g\to\dfrac{1-0}{1+0}=1$`,
          R`$g(0^+)=-1\neq g(0^-)=1$，==$\lim\limits_{x\to0}g(x)$ 不存在==`
        ],
        pitfall: R`把 $\mathrm e^{\frac1x}$（$x\to0$）!!一律写成 $\infty$!!；!!忘了 $a^{\frac1x}$ 在左侧趋于 $0$!!`,
        practice: R`吉米【34】（p10）；教材习题1-3 第4题（p32，答案 习题全解 p17）；30讲 例1.15（p37–38）；1000题 第1章第6题（要用 1.6 的 $\frac{\sin x}{x}\to1$，学完 1.6 再做）`
      },
      {
        id: "t3", name: "用两个数列说明函数极限不存在",
        signal: R`$x\to+\infty$ 或 $x\to0$ 时==函数振荡==（含 $\sin x$、$\sin\dfrac1x$、$x\sin x$），问极限是否存在`,
        example: { q: R`证明 $\lim\limits_{x\to+\infty}x\sin x$ 不存在。`, src: "吉米【33】p10" },
        idea: {
          key: R`==取两条趋向同一点（或 $+\infty$）的数列，让函数值分别趋于不同的值==，由==海涅定理==（定理 4）说明极限不存在。`,
          how: [
            R`++找让振荡因子取特殊值的点++：$\sin$ 取 $0$ 选 $n\pi$，取 $1$ 选 $2n\pi+\dfrac{\pi}{2}$`,
            R`++检查两条数列都趋于指定的 $x_0$（或 $+\infty$），并且不等于 $x_0$++`,
            R`++分别求函数值数列的极限，不同（或有一个不存在）就下结论++`
          ],
          refs: [
            { src: "吉米【33】点评 p10", text: R`证明极限不存在常用的办法就是从证明左、右极限入手……为了简化过程，这时通常取特殊子列进行讨论` },
            { src: "30讲 第2讲 例2.7 p84", text: R`取 $x_n=\dfrac1{n\pi}$ 得 $f(x_n)=0$；取 $x_n'=\dfrac{1}{(2n+\frac12)\pi}$ 得 $f(x_n')\to+\infty$。根据归结原则，$\lim\limits_{x\to0}\dfrac1x\sin\dfrac1x$ 不存在` }
          ]
        },
        think: R`$x\sin x$ 中 $\sin x$ 在 $-1$ 到 $1$ 之间不停振荡，乘上 $x$ 后时而为 0、时而很大，猜极限不存在。依据海涅定理（教材 1.3 定理 4）：若极限存在，沿任何趋于 $+\infty$ 的数列函数值都趋于同一个数；所以只要找两条数列让函数值极限不同。挑让 $\sin x$ 取 $0$ 和 $1$ 的点最好算。`,
        first: R`让 $\sin x$ 分别等于 $0$ 和 $1$：取 $x_n=n\pi$，$y_n=2n\pi+\dfrac{\pi}{2}$`,
        steps: [
          R`++第一条++：让 $\sin x=0$，取 $x_n=n\pi\to+\infty$，$f(x_n)=n\pi\cdot\sin n\pi=0$，极限为 $0$`,
          R`++第二条++：让 $\sin x=1$，取 $y_n=2n\pi+\dfrac{\pi}{2}\to+\infty$，$f(y_n)=\left(2n\pi+\dfrac{\pi}{2}\right)\cdot1\to+\infty$`,
          R`++两条数列都趋于 $+\infty$++，但函数值的极限一个是 $0$、一个是 $+\infty$，不相同`,
          R`++由定理 4++（函数极限与数列极限的关系），$\lim\limits_{x\to+\infty}x\sin x$ 不存在`
        ],
        pitfall: R`!!只取一条数列算出某个值!!，就说函数极限等于它；!!取的数列没有趋于目标点!!`,
        practice: "吉米【33】（p10）；30讲 第2讲 例2.7（p84）"
      },
      {
        id: "t4", name: "判断 x→∞ 时的极限（分 ±∞）",
        signal: R`==$x\to\infty$（不带正负号）==，式子里有 $\mathrm e^x$、$a^x$、$\arctan x$`,
        example: { q: R`判断下列极限是否存在：(1) $\lim\limits_{x\to\infty}\mathrm e^x$；(2) $\lim\limits_{x\to\infty}\arctan x$；(3) $\lim\limits_{x\to\infty}\dfrac{\mathrm e^x}{\mathrm e^x+1}$。`, src: "30讲 p37 ①③；(3) 是同类改编" },
        idea: {
          key: R`==$x\to\infty$ 是双向的==：分别求 $x\to+\infty$ 和 $x\to-\infty$，==两个都存在且相等才存在==。`,
          how: [
            R`++看式子里有没有"两个方向表现不同"的部分++：$\mathrm e^x$、$a^x$、$\arctan x$、$\sqrt{x^2}=|x|$`,
            R`++分别求 $x\to+\infty$、$x\to-\infty$ 的极限++`,
            R`++相等则存在，不等则不存在++`
          ],
          refs: [
            { src: "习题全解 习题1-3 第10题 p19–20", text: R`若 $x\to+\infty$ 及 $x\to-\infty$ 时 $f(x)$ 的极限都存在且都等于 $A$，则 $\lim\limits_{x\to\infty}f(x)=A$` },
            { src: "武忠祥 p10", text: R`在函数极限中 $x\to\infty$ 是指 $|x|\to+\infty$，而在数列极限中，$n\to\infty$ 是指 $n\to+\infty$` }
          ]
        },
        think: R`$x\to\infty$ 包含 $x\to+\infty$ 和 $x\to-\infty$ 两个方向，极限存在要求两个方向趋于同一个数。$\mathrm e^x$、$\arctan x$ 在正负两端的表现完全不同，所以分两路算再比较。`,
        first: R`分 $x\to+\infty$ 和 $x\to-\infty$ 两路`,
        steps: [
          R`++(1)++ $x\to+\infty$ 时 $\mathrm e^x\to+\infty$；$x\to-\infty$ 时 $\mathrm e^x\to0$。两路不同，$\lim\limits_{x\to\infty}\mathrm e^x$ 不存在`,
          R`++(2)++ $\arctan x$ 的图像有两条水平渐近线：$x\to+\infty$ 时 $\to\dfrac{\pi}{2}$，$x\to-\infty$ 时 $\to-\dfrac{\pi}{2}$。两路不同，不存在`,
          R`++(3) $x\to+\infty$++：分子分母同除 $\mathrm e^x$，$\dfrac{1}{1+\mathrm e^{-x}}\to\dfrac{1}{1+0}=1$`,
          R`++$x\to-\infty$++：$\mathrm e^x\to0$，直接代入 $\dfrac{0}{0+1}=0$`,
          R`++两路分别是 $1$ 和 $0$++，不相等，$\lim\limits_{x\to\infty}\dfrac{\mathrm e^x}{\mathrm e^x+1}$ 不存在`
        ],
        pitfall: R`!!把 $x\to\infty$ 当成 $x\to+\infty$!!；数列里 $n\to\infty$ 不用分，函数里要分`,
        practice: "30讲 p36–37 唯一性说明的五个例子；武忠祥 p11"
      },
      {
        id: "t5", name: "夹在两函数之间时极限是否存在（选择）",
        signal: R`给出 $\varphi(x)\leqslant f(x)\leqslant g(x)$，==只知道 $g-\varphi\to0$==，问 $\lim f(x)$`,
        example: { q: R`设对任意 $x$，$\varphi(x)\leqslant f(x)\leqslant g(x)$，且 $\lim\limits_{x\to\infty}[g(x)-\varphi(x)]=0$，则 $\lim\limits_{x\to\infty}f(x)$（ ）。(A) 存在且等于零　(B) 存在但不一定为零　(C) 一定不存在　(D) 不一定存在`, src: "吉米【31】p9" },
        idea: {
          key: R`==夹逼要求两边极限都存在且相等==；只知道"两边的差趋于 0"不够，用反例分别造出"存在"和"不存在"。`,
          how: [
            R`++核对条件++：两边各自的极限存在吗？`,
            R`++造一组两边都趋于无穷（差趋于 0）的例子++，说明可能不存在`,
            R`++再造一组两边都趋于 0 的例子++，说明可能存在`
          ],
          refs: [
            { src: "吉米【31】p9", text: R`取 $\varphi=x$，$f=x+\mathrm e^{-|x|}$，$g=x+2\mathrm e^{-|x|}$ 时极限不存在；取 $\varphi=0$，$f=\mathrm e^{-|x|}$，$g=2\mathrm e^{-|x|}$ 时极限为 $0$` },
            { src: "吉米【28】点评 p8", text: R`验证法：把可供选择的备选项代入题目中已知条件进行验算，从而得到正确选项` }
          ]
        },
        think: R`夹逼准则要求两边的函数极限都存在且相等。题目只给"差趋于 0"，两边自己可能都趋于无穷，夹逼用不上。所以结论"不一定"，要用两个例子：一个极限不存在，一个极限存在。`,
        first: R`注意题目没说 $\varphi$、$g$ 的极限存在`,
        steps: [
          R`++对照夹逼准则++（教材 1.6 准则 I'）：需要 $\lim\varphi=\lim g=A$。题目只有 $\lim(g-\varphi)=0$，少了"两边各自有极限"`,
          R`++反例一（极限不存在）++：$\varphi=x$，$f=x+\mathrm e^{-|x|}$，$g=x+2\mathrm e^{-|x|}$。因为 $0<\mathrm e^{-|x|}<2\mathrm e^{-|x|}$，有 $\varphi\leqslant f\leqslant g$；$g-\varphi=2\mathrm e^{-|x|}\to0$；但 $f\to\infty$，排除 (A)(B)`,
          R`++例二（极限存在）++：$\varphi=0$，$f=\mathrm e^{-|x|}$，$g=2\mathrm e^{-|x|}$，满足条件且 $f\to0$，排除 (C)`,
          R`==选 (D)：不一定存在==`
        ],
        pitfall: R`!!看到"夹着"就用夹逼准则!!；夹逼准则（1.6）要求两边极限存在且相等`,
        practice: "吉米【31】（p9）；学完 1.6 夹逼准则后再回看"
      },
      {
        id: "t6", name: "由极限的符号判断函数在一点附近的符号", tag: "研",
        signal: R`已知 $\lim\limits_{x\to x_0}\dfrac{f(x)}{g(x)}=A\neq0$，且 $g$ 的符号已知，==问 $f$ 在 $x_0$ 附近的符号==`,
        example: { q: R`已知 $f(x)$ 在 $x=0$ 的某邻域内连续，且 $\lim\limits_{x\to0}\dfrac{f(x)}{1-\cos x}=-1$，则存在 $\delta>0$，（ ）。(A) $x\in(-\delta,0)$ 时 $f>0$，$x\in(0,\delta)$ 时 $f<0$　(B) $x\in(-\delta,0)$ 时 $f<0$，$x\in(0,\delta)$ 时 $f>0$　(C) 两侧都 $f>0$　(D) 两侧都 $f<0$`, src: "30讲 例1.18 p40–41" },
        idea: {
          key: R`==脱帽：极限 $<0$，则在某去心邻域内整个分式 $<0$==；==再用分母的符号定出 $f$ 的符号==。`,
          how: [
            R`++对整个分式用局部保号性++：$\lim\dfrac{f}{g}=A<0\Rightarrow$ 某去心邻域内 $\dfrac fg<0$`,
            R`++确定分母在该邻域内的符号++`,
            R`++同号得正、异号得负，推出 $f$ 的符号++`
          ],
          refs: [
            { src: "30讲 例1.18 方法总结 p41", text: R`见到 $\lim\limits_{x\to x_0}f(x)=A<0$，则利用保号性：当 $x\in\mathring U(x_0,\delta)$，有 $f(x)<0$` },
            { src: "30讲 p40", text: R`$\lim f>0\Rightarrow f>0$（脱帽严格不等）；$f\geqslant0\Rightarrow\lim f\geqslant0$（戴帽非严格不等）` }
          ]
        },
        think: R`要判断 $f$ 在 $0$ 附近的符号，已知的是分式 $\dfrac{f(x)}{1-\cos x}$ 的极限是负数。局部保号性说：极限为负，则附近函数值为负。所以对整个分式用保号性，再看分母的符号，就能推出 $f$ 的符号。`,
        first: R`对整个分式 $\dfrac{f(x)}{1-\cos x}$ 用局部保号性`,
        steps: [
          R`++对分式用局部保号性++（教材 1.3 定理 3）：极限 $-1<0$，所以存在 $\delta>0$，当 $0<|x|<\delta$ 时 $\dfrac{f(x)}{1-\cos x}<0$`,
          R`++分母的符号++：$\cos x\leqslant1$，且只在 $x=2k\pi$ 处等于 1；取 $\delta<2\pi$，则 $0<|x|<\delta$ 时 $1-\cos x>0$`,
          R`++分式为负、分母为正++，所以分子 $f(x)<0$，左右两侧都成立`,
          R`==选 (D)==。另一种做法（30讲）：$1-\cos x\sim\dfrac{x^2}{2}$，原极限化为 $\lim\dfrac{2f(x)}{x^2}=-1$，同样得两侧 $f<0$`
        ],
        pitfall: R`!!只看到"极限是 $-1$"就以为 $f$ 在 $0$ 处变号!!；保号性只在去心邻域内成立，$f(0)$ 要另外用连续性说（$f(0)=0$）`,
        practice: "30讲 例1.18（p40–41）"
      }
    ],

    pitfalls: [
      { id: "e5", wrong: R`$\lim\limits_{x\to0}\mathrm e^{\frac1x}=\infty$`, why: R`左侧 $\dfrac1x\to-\infty$，$\mathrm e^{\frac1x}\to0$`, right: R`$\mathrm e^{+\infty}=+\infty$，$\mathrm e^{-\infty}=0$，$\mathrm e^{\infty}$ 要分开（武忠祥 p11）`, test: R`$\lim\limits_{x\to0^-}\mathrm e^{\frac1x}=$？`, ans: R`$0$`, link: "题型 2" },
      { id: "e6", wrong: R`$\lim\limits_{x\to0}\arctan\dfrac1x=\dfrac{\pi}{2}$`, why: R`左侧趋于 $-\dfrac{\pi}{2}$`, right: R`$\arctan\infty$ 要分开，左右不等则不存在（武忠祥 p11）`, test: R`$\lim\limits_{x\to0}\arctan\dfrac1x$ 存在吗？`, ans: R`不存在：右 $\dfrac{\pi}{2}$，左 $-\dfrac{\pi}{2}$`, link: "题型 2" },
      { id: "e7", wrong: R`$\lim\limits_{x\to\infty}\arctan x=\dfrac{\pi}{2}$`, why: R`函数的 $x\to\infty$ 包括 $-\infty$`, right: R`分 $\pm\infty$ 求（习题1-3 第10题）`, test: R`$\lim\limits_{x\to\infty}\mathrm e^{-x^2}$ 和 $\lim\limits_{x\to\infty}\mathrm e^{x}$ 存在吗？`, ans: R`前者存在等于 $0$（两侧都趋于 $0$）；后者不存在`, link: "题型 4" },
      { id: "e9", wrong: R`两侧表达式一样，就不用分左右`, why: R`同一个式子在两侧也可能趋向不同，比如含 $\mathrm e^{\frac{1}{x-1}}$`, right: R`看式子里有没有 $\mathrm e^{\infty}$、$\arctan\infty$、$|\cdot|$ 一类部分（30讲 例1.15 p37–38）`, test: R`$\lim\limits_{x\to1}\mathrm e^{\frac{1}{x-1}}$ 存在吗？`, ans: R`不存在：左 $0$，右 $+\infty$`, link: "题型 2" },
      { id: "e10", wrong: R`$\lim\limits_{x\to x_0}f(x)$ 存在，所以 $f$ 在整个定义域上有界`, why: R`只能推出 $x_0$ 附近有界`, right: R`写"在 $x_0$ 的某去心邻域内有界"（教材 p31）`, test: R`$\lim\limits_{x\to1}\dfrac1x=1$，$\dfrac1x$ 在 $(0,2)$ 内有界吗？`, ans: R`无界（$x\to0^+$ 时趋于 $+\infty$），只在 $1$ 附近有界`, link: "知识点 局部有界性" },
      { id: "e14", wrong: R`沿一条数列 $x_n\to x_0$ 算出 $f(x_n)\to A$，所以 $\lim\limits_{x\to x_0}f(x)=A$`, why: R`海涅定理要求对所有这样的数列都成立；一条数列只能用来否定`, right: R`一条数列证不了存在；两条数列结果不同可以证明不存在（30讲 第2讲 p83–84）`, test: R`$x_n=\dfrac1{n\pi}$ 时 $\sin\dfrac1{x_n}=0$，$\lim\limits_{x\to0}\sin\dfrac1x$ 等于 $0$ 吗？`, ans: R`不存在：取 $y_n=\dfrac{1}{2n\pi+\frac{\pi}{2}}$ 得 $\sin\dfrac1{y_n}=1$`, link: "题型 3" },
      { id: "e15", wrong: R`海涅定理里的数列可以取 $x_n=x_0$`, why: R`极限不看 $x_0$ 处，定理要求 $x_n\neq x_0$`, right: R`选的数列必须 $x_n\neq x_0$（教材 p31 定理4）`, test: R`$f(x)=0\ (x\neq0)$，$f(0)=1$。取 $x_n=0$，$f(x_n)\to1$，能说 $\lim\limits_{x\to0}f(x)=1$ 吗？`, ans: R`不能，$\lim\limits_{x\to0}f(x)=0$`, link: "知识点 海涅定理" },
      { id: "e16", wrong: R`$\varphi\leqslant f\leqslant g$ 且 $g-\varphi\to0$，所以 $f$ 有极限`, why: R`两边自己的极限可能不存在`, right: R`夹逼要求两边极限存在且相等（1.6）`, test: R`$x\leqslant x+\mathrm e^{-|x|}\leqslant x+2\mathrm e^{-|x|}$，$x\to\infty$ 时中间有极限吗？`, ans: R`没有，趋于 $\infty$（吉米【31】p9）`, link: "题型 5" },
    ]
  });
})();
