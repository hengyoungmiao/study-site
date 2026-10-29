/*
类型: 题型
标题: 高等数学 第1章 第5节 极限运算法则 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-19
更新日期: 2026-10-19
状态: 完成

页码一律是印刷页。教材 = 同济第八版上册；30讲 = 张宇基础30讲·高数分册；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；
武忠祥 = 高等数学辅导讲义（强化）；习题全解 = 同济第八版上册习题全解指导；1000题 = 张宇1000题基础篇（只引题号）。
本节方法只用到四则运算、约分、有理化、抓大头、有界乘无穷小；要用重要极限、等价无穷小、洛必达的题标"后置"。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "1.5",
    chapter: 1,
    title: "极限运算法则",
    pages: "教材 p37–44",
    sources: ["教材 第一章第五节 p37–44", "习题全解 习题1-5 p23–27", "30讲 第1讲 p46、p54、p56–57；第2讲 例2.6 p83", "吉米 第1章【38】–【51】p12–15", "武忠祥 第1章 题型二 p16、p27", "1000题 第1章 13、18 题；第2章 2 题"],
    updated: "2026-10-19",

    framework: {
      main: R`四则运算法则只在"每一部分的极限都存在（分母极限不为 0）"时才能拆开用。拆不开的未定式（$\frac00$、$\frac{\infty}{\infty}$、$\infty-\infty$）要先变形：约分、有理化、通分、抓大头；分母趋于 0 而分子不趋于 0 的，用倒数判成 $\infty$。`,
      nodes: [
        { id: "INF", go: "p1", col: 0, row: 0, kind: "map", label: "无穷小的运算", sub: "有限个的和、积；有界×无穷小" },
        { id: "ARI", go: "p3", col: 1, row: 0, kind: "func", label: "四则运算法则", sub: R`各自极限存在才能拆` },
        { id: "COMP", go: "p12", col: 2, row: 0, kind: "func", label: "复合函数的极限", sub: R`换元 $u=g(x)$` },
        { id: "SUB", go: "p10", col: 0, row: 1, kind: "prop", label: "直接代入", sub: R`有理函数，分母 $\neq0$` },
        { id: "IND", go: "t2", col: 1, row: 1, kind: "prop", label: "未定式先变形", sub: R`约分 · 有理化 · 通分` },
        { id: "PAR", go: "t8", col: 2, row: 1, kind: "build", label: "反求参数", sub: R`$\frac fg$ 有极限且 $g\to0\Rightarrow f\to0$` },
        { id: "BIG", go: "p11", col: 1, row: 2, kind: "build", label: "抓大头", sub: R`$x\to\infty$：比最高次` }
      ],
      edges: [
        { from: "INF", to: "ARI", label: "证明的基础" },
        { from: "ARI", to: "COMP", label: "再加换元" },
        { from: "ARI", to: "SUB", label: R`分母极限 $\neq0$` },
        { from: "ARI", to: "IND", label: "拆不开时" },
        { from: "ARI", to: "PAR", label: "反过来用" },
        { from: "IND", to: "BIG", label: R`$\frac{\infty}{\infty}$` }
      ],
      keys: [
        { q: R`四则运算法则什么时候能用？`, a: R`参与运算的每个极限都存在（是有限数），做商时分母的极限不为 $0$；只对有限个函数成立（教材 p38–39）。` },
        { q: R`"存在 ± 不存在""不存在 ± 不存在"的结果是什么？乘积呢？`, a: R`存在 ± 不存在 = 不存在；不存在 ± 不存在 不一定；乘积两种情况都可能存在也可能不存在（习题1-5 第5题；武忠祥 p16）。` },
        { q: R`有理分式求极限的三种情况怎么处理？`, a: R`分母极限不为 $0$：直接代入；分子分母都趋于 $0$：约去零因子；分母趋于 $0$、分子不趋于 $0$：用倒数判为 $\infty$；$x\to\infty$：抓最高次（教材 p40–42）。` },
        { q: R`$\lim\limits_{x\to\infty}\dfrac{\sin x}{x}$ 为什么不能用商的法则？怎么求？`, a: R`$x\to\infty$ 时 $\dfrac{\sin x}{x}$ 的分子分母极限都不存在，不能用商的法则。看成有界函数 $\sin x$ 乘无穷小 $\dfrac1x$，结果为 $0$（教材 p42 例8，依据 p38 定理2）。` }
      ]
    },

    points: [
      {
        group: "一、无穷小的运算",
        items: [
          {
            id: "p1", kind: "定理", name: "定理 1：有限个无穷小的和是无穷小", page: "教材 p37–38；30讲 p42",
            body: R`两个无穷小的和是无穷小；用数学归纳法，==有限个无穷小的和也是无穷小==。`,
            notes: [R`"有限"不能少：$n$ 个 $\dfrac1n$ 相加等于 $1$，不是无穷小；$\dfrac1{n+1}+\cdots+\dfrac1{2n}\to\ln2$（30讲 p42）`],
            quiz: R`$\underbrace{\dfrac1n+\dfrac1n+\cdots+\dfrac1n}_{n\text{ 个}}$ 的极限是多少？`
          },
          {
            id: "p2", kind: "定理", name: "定理 2：有界函数与无穷小的乘积是无穷小", page: "教材 p38",
            body: R`==若 $u$ 在 $x_0$ 的某去心邻域内有界，$\alpha$ 是 $x\to x_0$ 时的无穷小，则 $u\alpha$ 是无穷小==。推论 1：常数与无穷小的乘积是无穷小；推论 2：有限个无穷小的乘积是无穷小。`,
            notes: [R`有界只需在 $x_0$ 附近有界`, R`典型用法：$x\sin\dfrac1x\to0\ (x\to0)$，$\dfrac{\sin x}{x}\to0\ (x\to\infty)$`],
            quiz: R`$\lim\limits_{x\to0}x^2\sin\dfrac1x$ 和 $\lim\limits_{x\to\infty}\dfrac{\arctan x}{x}$ 各是多少？`
          }
        ]
      },
      {
        group: "二、四则运算法则",
        items: [
          {
            id: "p3", kind: "定理", name: "定理 3：极限的四则运算法则", page: "教材 p38–39",
            body: R`若 $\lim f(x)=A$，$\lim g(x)=B$，则 ==$\lim[f\pm g]=A\pm B$==；$\lim fg=AB$；==若又有 $B\neq0$==，则 $\lim\dfrac fg=\dfrac AB$。`,
            notes: [R`前提是两个极限都存在；加减和乘法可推广到有限个函数（教材 p39）`, R`证明思路：$f=A+\alpha$，$g=B+\beta$，用无穷小的运算（教材 p38–39）`],
            quiz: R`$\lim\limits_{x\to0}\left(\dfrac1x-\dfrac1x\right)$ 能拆成 $\lim\dfrac1x-\lim\dfrac1x$ 吗？`
          },
          {
            id: "p4", kind: "定理", name: "推论：常数提出、幂", page: "教材 p39",
            body: R`若 $\lim f(x)$ 存在，$c$ 为常数，$n$ 为正整数，则 $\lim[cf(x)]=c\lim f(x)$，==$\lim[f(x)]^n=[\lim f(x)]^n$==。`,
            notes: [R`常数因子可以提到极限号外`],
            quiz: R`$\lim\limits_{x\to2}(3x^2-1)$ 怎样一步步用法则算？`
          },
          {
            id: "p5", kind: "定理", name: "定理 4：数列的四则运算", page: "教材 p39–40",
            body: R`若 $\lim x_n=A$，$\lim y_n=B$，则 $\lim(x_n\pm y_n)=A\pm B$，$\lim x_ny_n=AB$；当 ==$y_n\neq0$ 且 $B\neq0$== 时，$\lim\dfrac{x_n}{y_n}=\dfrac AB$。`,
            notes: [R`数列也只能对有限项用；"$n$ 项和"的极限不能逐项求再相加（吉米【52】点评 p16）`],
            quiz: R`$\lim\limits_{n\to\infty}\left(\dfrac1{n^2}+\dfrac2{n^2}+\cdots+\dfrac n{n^2}\right)$ 能写成 $0+0+\cdots+0=0$ 吗？`
          },
          {
            id: "p6", kind: "定理", name: "定理 5：极限的保序性", page: "教材 p40；习题1-5 第6题",
            body: R`若 $\varphi(x)\geqslant\psi(x)$，$\lim\varphi(x)=A$，$\lim\psi(x)=B$，==则 $A\geqslant B$==。数列从某项起 $x_n\geqslant y_n$ 时同样有 $A\geqslant B$。`,
            notes: [R`严格不等号 $\varphi>\psi$ 取极限后仍只能得到 $A\geqslant B$（同 1.3 的保号性推论）`],
            quiz: R`$1+\dfrac1x>1$ 对 $x>0$ 成立，$\lim\limits_{x\to+\infty}\left(1+\dfrac1x\right)$ 大于 $1$ 吗？`
          },
          {
            id: "p7", kind: "结论", name: "存在与不存在的组合", page: "习题1-5 第5题（习题全解 p26–27）；武忠祥 p16；30讲 p83",
            body: R`==存在 ± 存在 = 存在；存在 ± 不存在 = 不存在；不存在 ± 不存在 = 不一定==。乘积：存在（极限 $\neq0$）× 不存在 = 不存在；存在（极限 $=0$）× 不存在 不一定；不存在 × 不存在 不一定。`,
            notes: [R`反例：$\operatorname{sgn}x+(-\operatorname{sgn}x)\equiv0$；$x\cdot\sin\dfrac1x\to0$；$\operatorname{sgn}x\cdot\operatorname{sgn}x=1\ (x\neq0)$（习题全解 p26–27）`, R`存在 ± 不存在 = 不存在 的理由：若和存在，则 $g=(f+g)-f$ 也存在，矛盾`, R`乘积同理：$\lim f=A\neq0$ 且 $\lim fg$ 存在，则 $g=\dfrac{fg}{f}$ 的极限存在，矛盾；$A=0$ 时无此结论，如 $x\cdot\sin\dfrac1x\to0$`],
            quiz: R`$\lim f$ 存在、$\lim g$ 不存在，$\lim fg$ 一定不存在吗？举例。`
          },
          {
            id: "p8", kind: "结论", name: "极限非零的因子先求出来", page: "武忠祥 题型二 方法1 p16",
            body: R`若 ==$\lim f(x)=A\neq0$==，则 $\lim f(x)g(x)=A\lim g(x)$，$\lim\dfrac{g(x)}{f(x)}=\dfrac1A\lim g(x)$。`,
            notes: [R`这是化简的第一步：把极限明确且不为 $0$ 的因子先算掉（30讲 p54 "提出极限不为 0 的因式"）`, R`只能对"乘除的因子"这样做，加减的项不行`],
            quiz: R`$\lim\limits_{x\to1}\dfrac{(x+2)(x-1)}{x^2-1}$ 里，哪个因子可以先求出来？`
          },
          {
            id: "p9", kind: "结论", name: "商的极限存在时的两个推论", page: "30讲 例1.20 p46；武忠祥 p16",
            body: R`(1) 若 $\lim\dfrac{f}{g}$ 存在且 $\lim g=0$，==则 $\lim f=0$==；(2) 若 $\lim\dfrac fg=A\neq0$ 且 $\lim f=0$，==则 $\lim g=0$==。`,
            notes: [R`证明：$f=\dfrac fg\cdot g$，$g=f\Big/\dfrac fg$，用四则运算（30讲 p46）`, R`专门用来反求参数：分母趋于 $0$ 而极限有限，分子也必须趋于 $0$`],
            quiz: R`$\lim\limits_{x\to2}\dfrac{x^2+ax+b}{x-2}=3$，能先推出什么？`
          }
        ]
      },
      {
        group: "三、有理函数的极限",
        items: [
          {
            id: "p10", kind: "结论", name: "多项式、有理分式：分母不为 0 就代入", page: "教材 p40–41",
            body: R`多项式 $\lim\limits_{x\to x_0}P(x)=P(x_0)$；有理分式 $F=\dfrac PQ$ 若 $Q(x_0)\neq0$，则 $\lim\limits_{x\to x_0}F(x)=F(x_0)$。==若 $Q(x_0)=0$，商的法则不能用==，要另外处理。`,
            notes: [R`$P(x_0)=Q(x_0)=0$：约去公因子 $x-x_0$（$x\to x_0$ 时 $x\neq x_0$，可以约），教材 例3 p41`, R`$Q(x_0)=0$，$P(x_0)\neq0$：倒数极限为 $0$，原极限为 $\infty$，教材 例4 p41`],
            quiz: R`$\lim\limits_{x\to3}\dfrac{x-3}{x^2-9}$ 为什么不能直接代入？结果是多少？`
          },
          {
            id: "p11", kind: "公式", name: "x→∞ 时有理分式的极限（抓大头）", page: "教材 p42；30讲 例1.25 p56–57",
            body: R`$a_0\neq0,b_0\neq0$ 时，$\lim\limits_{x\to\infty}\dfrac{a_0x^m+a_1x^{m-1}+\cdots+a_m}{b_0x^n+b_1x^{n-1}+\cdots+b_n}=\begin{cases}0,&n>m\\\dfrac{a_0}{b_0},&n=m\\\infty,&n<m\end{cases}$`,
            notes: [R`做法：分子分母同除以最高次幂（教材 例5–7 p41–42）`, R`$x\to0$ 时反过来抓最低次项（30讲 p57）`, R`含根号时同样抓最高次，但 $x\to-\infty$ 要注意 $\sqrt{x^2}=-x$（30讲 p57）`],
            quiz: R`$\lim\limits_{x\to\infty}\dfrac{3x^2-2x-1}{2x^3-x^2+5}$ 和 $\lim\limits_{x\to\infty}\dfrac{2x^3-x^2+5}{3x^2-2x-1}$ 各是多少？`
          }
        ]
      },
      {
        group: "四、复合函数的极限",
        items: [
          {
            id: "p12", kind: "定理", name: "定理 6：复合函数的极限运算法则", page: "教材 p42–43",
            body: R`设 $\lim\limits_{x\to x_0}g(x)=u_0$，$\lim\limits_{u\to u_0}f(u)=A$，且在 $x_0$ 的某去心邻域内 ==$g(x)\neq u_0$==，则 $\lim\limits_{x\to x_0}f[g(x)]=\lim\limits_{u\to u_0}f(u)=A$。`,
            notes: [R`作用：换元 $u=g(x)$，把复杂极限化成简单极限（教材 p43）`, R`把 $u_0$ 换成 $\infty$ 也有类似结论（教材 p43）`, R`条件 $g(x)\neq u_0$ 不能丢：$f$ 在 $u_0$ 处的值可能和极限不同`],
            quiz: R`求 $\lim\limits_{x\to1}\sqrt{\dfrac{x^2-1}{x-1}}$ 时，用定理 6 怎么换元？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "分段函数、含 e^(1/x) 的极限：先分左右，再用运算法则",
        signal: R`==分段点处求极限==，或式子里有 $\mathrm e^{\frac1x}$、$\mathrm e^{\frac{1}{x-1}}$、$|x|$`,
        example: { q: R`设 $f(x)=\begin{cases}\mathrm e^{\frac1x}+1,&x<0\\1,&x=0\\1+x\sin\dfrac1x,&x>0\end{cases}$，求 $\lim\limits_{x\to0}f(x)$。`, src: "吉米【39】p12" },
        idea: {
          key: R`==方向不同表现不同，就分左右==；每一侧内部再用运算法则和有界乘无穷小。`,
          how: [
            R`++按 1.3 的方法分出左、右极限++`,
            R`++每一侧把式子拆成几部分，分别用四则运算++、$\mathrm e^{-\infty}=0$、有界 × 无穷小`,
            R`++左右相等才存在++；分段点处的函数值不参与`
          ],
          refs: [
            { src: "吉米【38】p12", text: R`函数在某一点的极限存在的充分必要条件是函数在该点的左、右极限都存在并且相等` },
            { src: "武忠祥 p10–11", text: R`需要分左、右极限求极限的问题主要有三种：分段函数在分界点处、$\mathrm e^{\infty}$ 型、$\arctan\infty$ 型` }
          ]
        },
        think: R`分段点 $0$ 两侧是不同的表达式，左侧还有 $\mathrm e^{\frac1x}$（$\frac1x$ 在两侧趋于 $\pm\infty$，表现不同），所以必须分左右极限。每一侧内部用四则运算法则；右侧 $x\sin\frac1x$ 不能拆成 $\lim x\cdot\lim\sin\frac1x$（后者不存在），要用"无穷小 × 有界"。`,
        first: R`分左右：左侧用 $\mathrm e^{\frac1x}+1$，右侧用 $1+x\sin\dfrac1x$`,
        steps: [
          R`++左极限++：$x\to0^-$ 时 $\dfrac1x\to-\infty$，所以 $\mathrm e^{\frac1x}\to0$，$f(0^-)=0+1=1$`,
          R`++右极限的难点++：$\sin\dfrac1x$ 在 $x\to0^+$ 时没有极限，不能用积的运算法则`,
          R`++改用定理++：$x\to0$ 是无穷小，$\left|\sin\dfrac1x\right|\leqslant1$ 有界，有界函数与无穷小的乘积是无穷小（教材 1.5 定理 2 前的定理），所以 $x\sin\dfrac1x\to0$，$f(0^+)=1+0=1$`,
          R`++左右极限都是 $1$++，所以 $\lim\limits_{x\to0}f(x)=1$（$f(0)=1$ 与极限无关）`
        ],
        pitfall: R`!!以为 $x\sin\dfrac1x$ 因 $\sin\dfrac1x$ 振荡而没有极限!!；!!忘记 $\mathrm e^{\frac1x}$ 在左侧趋于 $0$!!`,
        practice: R`吉米【38】【39】（p12）；吉米【40】要用 $\frac{\sin x}{x}\to1$，学完 1.6 再做`
      },
      {
        id: "t2", name: "根式有理化求极限",
        signal: R`==$\sqrt{A}-\sqrt{B}$ 形式==，$\infty-\infty$ 或 $\dfrac00$`,
        example: { q: R`求 $\lim\limits_{n\to\infty}\left(\sqrt{n+3\sqrt n}-\sqrt{n-\sqrt n}\right)$。`, src: "吉米【42】p13" },
        idea: {
          key: R`==乘以共轭式==，把根式差变成"差 ÷ 和"，再抓大头或约零因子。`,
          how: [
            R`++$\sqrt A-\sqrt B=\dfrac{A-B}{\sqrt A+\sqrt B}$++（分子或分母哪边有根式差就有理化哪边）`,
            R`++$\infty-\infty$ 型++：有理化后分子分母同除以最高次，抓大头`,
            R`++$\dfrac00$ 型++：有理化后出现零因子，约掉`,
            R`!!$x\to-\infty$ 时 $\sqrt{x^2}=|x|=-x$!!，提 $x$ 出根号要变号`
          ],
          refs: [
            { src: "吉米【42】分析 p13", text: R`求形如 $\lim(\sqrt{a_n}-\sqrt{b_n})$ 的极限，一种常用的方法是有理化，将所给极限化为 $\lim\dfrac{a_n-b_n}{\sqrt{a_n}+\sqrt{b_n}}$` },
            { src: "武忠祥 题型二 p27", text: R`"$\infty-\infty$"型极限常用方法：(1) 通分化为 $\frac00$（适用于分式差）；(2) 根式有理化（适用于根式差）` }
          ]
        },
        think: R`两个根式相减，各自都 $\to\infty$，是 $\infty-\infty$ 型，不能直接相减。根式之差的标准处理是乘共轭有理化：$(\sqrt A-\sqrt B)(\sqrt A+\sqrt B)=A-B$，把根号差变成普通的差，再用"同除最高次"处理 $\frac\infty\infty$。`,
        first: R`分子分母同乘 $\sqrt{n+3\sqrt n}+\sqrt{n-\sqrt n}$`,
        steps: [
          R`++判断类型++：$\sqrt{n+3\sqrt n}\to\infty$，$\sqrt{n-\sqrt n}\to\infty$，是 $\infty-\infty$ 型`,
          R`++乘共轭++：分子分母同乘 $\sqrt{n+3\sqrt n}+\sqrt{n-\sqrt n}$，分子变成 $(n+3\sqrt n)-(n-\sqrt n)=4\sqrt n$，原式 $=\lim\dfrac{4\sqrt n}{\sqrt{n+3\sqrt n}+\sqrt{n-\sqrt n}}$`,
          R`++现在是 $\frac\infty\infty$++：分母中每个根式的主导部分是 $\sqrt n$，所以分子分母同除 $\sqrt n$。$\dfrac{\sqrt{n+3\sqrt n}}{\sqrt n}=\sqrt{1+\dfrac{3}{\sqrt n}}$，$\dfrac{\sqrt{n-\sqrt n}}{\sqrt n}=\sqrt{1-\dfrac{1}{\sqrt n}}$`,
          R`++代入极限++：$\dfrac{4}{\sqrt{1+0}+\sqrt{1-0}}=2$`,
          R`++数量级检验++：$\sqrt{n+3\sqrt n}\approx\sqrt n+\dfrac32$，$\sqrt{n-\sqrt n}\approx\sqrt n-\dfrac12$，差约为 $2$，一致`
        ],
        pitfall: R`!!把 $\infty-\infty$ 直接写成 $0$!!；$x\to-\infty$ 时把 $\sqrt{x^2}$ 写成 $x$（吉米【43】$\lim\limits_{x\to-\infty}x(\sqrt{x^2+100}+x)=-50$，这里分母要写成 $\sqrt{x^2+100}-x$）`,
        practice: "吉米【41】–【45】（p12–13）；武忠祥 p27"
      },
      {
        id: "t3", name: "先求和，再求极限",
        signal: R`$n\to\infty$ 时==有 $n$ 项相加，项数随 $n$ 变==：等差、等比、能裂项`,
        example: { q: R`设 $x_n=\dfrac13+\dfrac1{15}+\cdots+\dfrac{1}{4n^2-1}$，求 $\lim\limits_{n\to\infty}x_n$。`, src: "吉米【46】p13–14" },
        idea: {
          key: R`项数随 $n$ 增加时不能逐项求极限；==先用公式或裂项把和算成一个式子，再求极限==。`,
          how: [
            R`++认清结构++：等差（$\frac{n(n+1)}2$）、等比（$\frac{a_1(1-q^n)}{1-q}$）、平方和，或分式能裂项`,
            R`++裂项++：$\dfrac{1}{(an+b)(an+b+a)}=\dfrac1a\left(\dfrac1{an+b}-\dfrac1{an+b+a}\right)$，相邻项抵消`,
            R`++求出前 $n$ 项和后++，再用四则运算或抓大头`,
            R`++求不出和的，用夹逼准则++（1.6）`
          ],
          refs: [
            { src: "吉米【52】点评 p16", text: R`本题不能使用求极限的四则运算法则求解，因为 $n\to\infty$ 时，本题实际为无穷项相加求和，而求极限的四则运算法则中指的是有限项相加` },
            { src: "30讲 第2讲 p78", text: R`裂项相消：$\sum_{k=1}^n\dfrac1{k(k+1)}=1-\dfrac1{n+1}\to1$` }
          ]
        },
        think: R`项数随 $n$ 增加，不能逐项取极限再相加（无穷多个 0 相加不一定是 0）。所以先把和算成一个闭式。通项分母 $4k^2-1=(2k-1)(2k+1)$ 是两个相邻奇数的积，提示裂项相消。`,
        first: R`裂项：$\dfrac1{4k^2-1}=\dfrac12\left(\dfrac1{2k-1}-\dfrac1{2k+1}\right)$`,
        steps: [
          R`++通项因式分解++：$4k^2-1=(2k-1)(2k+1)$`,
          R`++裂项++：设 $\dfrac{1}{(2k-1)(2k+1)}=\dfrac{A}{2k-1}-\dfrac{A}{2k+1}$，右边通分得 $\dfrac{2A}{(2k-1)(2k+1)}$，所以 $A=\dfrac12$`,
          R`++求和++：$x_n=\dfrac12\left[\left(1-\dfrac13\right)+\left(\dfrac13-\dfrac15\right)+\cdots+\left(\dfrac1{2n-1}-\dfrac1{2n+1}\right)\right]$，中间项两两抵消，剩 $x_n=\dfrac12\left(1-\dfrac1{2n+1}\right)$`,
          R`++求极限++：$\dfrac{1}{2n+1}\to0$，所以 $\lim\limits_{n\to\infty}x_n=\dfrac12$`,
          R`++检验++：$n=1$ 时 $x_1=\dfrac13$，公式给 $\dfrac12\cdot\dfrac23=\dfrac13$，一致`
        ],
        pitfall: R`!!每项都 $\to0$，就说和 $\to0$!!（无穷多个无穷小的和不一定是无穷小）`,
        practice: "吉米【46】–【48】（p13–14）；教材习题1-5 第1题(11)(12)（p43，答案 习题全解 p24）"
      },
      {
        id: "t4", name: "先求积，再求极限",
        signal: R`==$n$ 个因子连乘==，如 $(1+x)(1+x^2)(1+x^4)\cdots(1+x^{2^n})$`,
        example: { q: R`求 $\lim\limits_{n\to\infty}(1+x)(1+x^2)(1+x^4)\cdots(1+x^{2^n})$，$|x|<1$。`, src: "吉米【51】p15" },
        idea: {
          key: R`==乘上一个"配对因子"让乘积逐个合并==（平方差连锁），先化简成一个式子，再求极限。`,
          how: [
            R`++观察相邻因子的关系++（指数翻倍、相邻比值固定）`,
            R`++乘以并除以一个因子++（如 $1-x$），用 $(1-a)(1+a)=1-a^2$ 连锁合并`,
            R`++得到简单的式子后++，用 $|q|<1$ 时 $q^n\to0$ 求极限`
          ],
          refs: [
            { src: "吉米【51】p15", text: R`原式 $=\lim\dfrac{(1-x)(1+x)(1+x^2)\cdots(1+x^{2^n})}{1-x}=\cdots=\lim\dfrac{1-x^{2^{n+1}}}{1-x}=\dfrac1{1-x}$` },
            { src: "30讲 p54", text: R`拿到极限计算的问题，先做一些化简：提出极限不为 0 的因式、恒等变形（提公因式、拆项、合并……）` }
          ]
        },
        think: R`因子数随 $n$ 增加，不能逐个求极限。各因子是 $1+x^{2^k}$，指数逐次翻倍，和平方差 $(1-a)(1+a)=1-a^2$ 正好配套：乘一个 $1-x$，就能一路"滚雪球"合并下去。`,
        first: R`分子分母同乘 $1-x$`,
        steps: [
          R`++记 $P_n=(1+x)(1+x^2)\cdots(1+x^{2^n})$++，因为 $|x|<1$，$1-x\neq0$，可以乘 $1-x$ 再除回去`,
          R`++连锁合并++：$(1-x)(1+x)=1-x^2$；再乘 $(1+x^2)$ 得 $1-x^4$；再乘 $(1+x^4)$ 得 $1-x^8$；……乘完最后一个 $(1+x^{2^n})$ 得 $1-x^{2^{n+1}}$`,
          R`++所以++ $P_n=\dfrac{1-x^{2^{n+1}}}{1-x}$`,
          R`++求极限++：$|x|<1$ 时 $|x|^{2^{n+1}}\to0$，所以 $\lim P_n=\dfrac{1}{1-x}$`,
          R`++检验++：$x=0$ 时每个因子都是 1，结果 $1$，公式给 $\dfrac{1}{1}=1$，一致`
        ],
        pitfall: R`!!对无穷多个因子逐个求极限再相乘!!；忘记 $|x|<1$ 这个条件的作用`,
        practice: "吉米【51】（p15）"
      },
      {
        id: "t5", name: "有理分式的极限：代入、约分、倒数、抓大头",
        signal: R`==分子分母都是多项式==，$x\to x_0$ 或 $x\to\infty$；或两个分式相减`,
        example: { q: R`求：(1) $\lim\limits_{x\to4}\dfrac{x^2-6x+8}{x^2-5x+4}$；(2) $\lim\limits_{x\to2}\dfrac{x^3+2x^2}{(x-2)^2}$；(3) $\lim\limits_{x\to\infty}\dfrac{x^2-1}{2x^2-x-1}$；(4) $\lim\limits_{x\to1}\left(\dfrac1{1-x}-\dfrac3{1-x^3}\right)$。`, src: "教材习题1-5 第1题(7)(9)(14)、第2题(1) p43" },
        idea: {
          key: R`先把 $x_0$ 代进分母看：==不为 0 直接代；分子分母都为 0 约零因子；只有分母为 0 判 $\infty$；$x\to\infty$ 抓最高次；两分式相减先通分==。`,
          how: [
            R`++$x\to x_0$++：先算 $Q(x_0)$，不为 $0$ 则直接代入`,
            R`++$P(x_0)=Q(x_0)=0$++：因式分解，约去 $(x-x_0)$ 再代入`,
            R`++$Q(x_0)=0$、$P(x_0)\neq0$++：倒过来极限为 $0$，原极限为 $\infty$`,
            R`++$x\to\infty$++：分子分母同除最高次幂，或直接用抓大头公式`,
            R`++$\infty-\infty$（两分式相减）++：通分后按上面处理`
          ],
          refs: [
            { src: "教材 p41", text: R`若 $Q(x_0)=0$，则关于商的极限的运算法则不能应用，那就需要特别考虑……$x\to3$ 时，$x\neq3$，$x-3\neq0$，可约去这个不为零的公因子` },
            { src: "30讲 例1.25 p56", text: R`有理函数的极限问题，抓主要矛盾。找"带头大哥"，若"带头大哥"次数一致，结果就是系数比` }
          ]
        },
        think: R`有理分式求极限，第一步永远是把 $x_0$ 代进分母：不为 0 直接代；分子分母同为 0，说明有公因子 $x-x_0$，约掉；分母为 0、分子不为 0，取倒数得 $\infty$；$x\to\infty$ 时比较最高次。两个分式相减先通分，再回到上面几种情况。`,
        first: R`逐个把 $x_0$ 代入分母判断类型`,
        steps: [
          R`++(1) 代 $x=4$++：分子 $16-24+8=0$，分母 $16-20+4=0$，是 $\frac00$，有公因子 $x-4$。分解 $\dfrac{(x-4)(x-2)}{(x-4)(x-1)}$，约去后 $\dfrac{x-2}{x-1}\to\dfrac{2}{3}$`,
          R`++(2) 代 $x=2$++：分母 $0$，分子 $8+8=16\neq0$。看倒数 $\dfrac{(x-2)^2}{x^3+2x^2}\to\dfrac{0}{16}=0$，由无穷小与无穷大的倒数关系，原极限 $=\infty$`,
          R`++(3) $x\to\infty$，分子分母都是二次++：同除 $x^2$，$\dfrac{1-\frac{1}{x^2}}{2-\frac1x-\frac{1}{x^2}}\to\dfrac12$`,
          R`++(4) 两项各自 $\to\infty$，是 $\infty-\infty$，先通分++。$1-x^3=(1-x)(1+x+x^2)$，所以公分母是 $1-x^3$：$\dfrac{1+x+x^2-3}{1-x^3}=\dfrac{x^2+x-2}{1-x^3}$`,
          R`++(4) 续++：分子 $x^2+x-2=(x-1)(x+2)$，分母 $(1-x)(1+x+x^2)=-(x-1)(1+x+x^2)$，约去 $x-1$ 得 $-\dfrac{x+2}{1+x+x^2}\to-\dfrac{3}{3}=-1$`
        ],
        pitfall: R`!!分母为 $0$ 时还用商的法则写 $\frac{16}{0}$!!；约零因子时忘了约的是 $x-x_0$（$x\neq x_0$ 才能约）；!!$\infty-\infty$ 直接得 $0$!!`,
        practice: "教材例2–7（p40–42）；习题1-5 第1、2题（p43，答案 习题全解 p24–25）；1000题 第2章第2题（$n$ 的高次差，用二项式展开后抓大头）"
      },
      {
        id: "t6", name: "有界函数乘无穷小",
        signal: R`$\sin\dfrac1x$、$\cos x$、$\arctan x$ 这类==本身没有极限但有界的因子，乘一个趋于 0 的因子==`,
        example: { q: R`求：(1) $\lim\limits_{x\to0}x^2\sin\dfrac1x$；(2) $\lim\limits_{x\to\infty}\dfrac{\arctan x}{x}$；(3) $\lim\limits_{x\to\infty}\dfrac{\sin x}{x}$。`, src: "教材习题1-5 第3题 p43；教材 例8 p42" },
        idea: {
          key: R`把式子==拆成"有界因子 × 无穷小"，直接得 0==；!!不能对有界因子单独求极限!!。`,
          how: [
            R`++找出没有极限但有界的因子，写出界++：$\left|\sin\square\right|\leqslant1$，$|\arctan x|<\dfrac{\pi}{2}$`,
            R`++剩下的因子说明是无穷小++`,
            R`++引用定理 2++：有界函数与无穷小的乘积是无穷小`
          ],
          refs: [
            { src: "教材 例8 p42", text: R`当 $x\to\infty$ 时，分子及分母的极限都不存在，故关于商的极限的运算法则不能应用。如果把 $\frac{\sin x}{x}$ 看作 $\sin x$ 与 $\frac1x$ 的乘积……根据本节定理2，有 $\lim\frac{\sin x}{x}=0$` },
            { src: "30讲 p42", text: R`★有界函数与无穷小的乘积是无穷小：$0\leqslant|\alpha_1\alpha_2|\leqslant m|\alpha_2|\to0$` }
          ]
        },
        think: R`三个式子都是"一个因子趋于 0，另一个因子没有极限但有界"。这时积的运算法则用不了（要求每个因子都有极限），而"有界函数 × 无穷小 = 无穷小"不要求有界因子有极限，正好适用。`,
        first: R`拆成"有界 × 无穷小"`,
        steps: [
          R`++(1)++ $x\to0$ 时 $x^2\to0$；$\left|\sin\dfrac1x\right|\leqslant1$ 有界（但 $\sin\frac1x$ 没有极限）。有界 × 无穷小 = 无穷小，结果 $0$`,
          R`++(2) 写成 $\dfrac1x\cdot\arctan x$++：$x\to\infty$ 时 $\dfrac1x\to0$；$|\arctan x|<\dfrac{\pi}{2}$ 有界，结果 $0$`,
          R`++(3) 写成 $\dfrac1x\cdot\sin x$++：$\dfrac1x\to0$，$|\sin x|\leqslant1$，结果 $0$`,
          R`++区分++：$\lim\limits_{x\to0}\dfrac{\sin x}{x}=1$ 是 1.6 的重要极限，那里 $\sin x$ 和 $x$ 同时趋于 0；这里是 $x\to\infty$，$\sin x$ 只是有界`
        ],
        pitfall: R`!!写成 $\lim x^2\cdot\lim\sin\dfrac1x$!!——后一个极限不存在，乘法法则不能用；把 $x\to\infty$ 的 $\dfrac{\sin x}{x}$ 和 $x\to0$ 的混淆`,
        practice: "教材习题1-5 第3题（p43，答案 习题全解 p25–26）；吉米【39】（p12）"
      },
      {
        id: "t7", name: "判断和、差、积的极限是否存在",
        signal: R`"若 $\lim f$ 存在、$\lim g$ 不存在，则 $\lim(f+g)$ ……"一类==判断题==`,
        example: { q: R`判断对错，错的举反例：(1) $\lim f$ 存在、$\lim g$ 不存在，则 $\lim(f+g)$ 不存在；(2) $\lim f$、$\lim g$ 都不存在，则 $\lim(f+g)$ 不存在；(3) $\lim f$ 存在、$\lim g$ 不存在，则 $\lim fg$ 不存在；(4) $\lim f$、$\lim g$ 都不存在，则 $\lim fg$ 不存在。`, src: "教材习题1-5 第5题 p43–44" },
        idea: {
          key: R`=="存在 ± 不存在"一定不存在（反证）==；==其余情形都"不一定"==，用 $\operatorname{sgn}x$、$x\sin\frac1x$ 举反例。`,
          how: [
            R`++对的命题用反证++：假设结论的极限存在，用四则运算推出"不存在"的那个也存在，矛盾`,
            R`++错的命题造反例++：互相抵消（$\operatorname{sgn}x$ 与 $-\operatorname{sgn}x$）；一个趋于 $0$ 一个有界（$x$ 与 $\sin\frac1x$）；相乘变常数（$\operatorname{sgn}x\cdot\operatorname{sgn}x$）`
          ],
          refs: [
            { src: "习题全解 习题1-5 第5题 p26–27", text: R`(1) 对。若 $\lim[f+g]$ 存在，则 $\lim g=\lim[f+g]-\lim f$ 也存在，矛盾。(2) 错，例如 $f=\operatorname{sgn}x$，$g=-\operatorname{sgn}x$` },
            { src: "武忠祥 题型二 方法1 注 p16", text: R`若 $\lim f(x)$ 存在，$\lim g(x)$ 不存在，则 $\lim[f(x)\pm g(x)]$ 一定不存在；若都不存在，则 $\lim[f(x)\pm g(x)]$ 不一定存在` }
          ]
        },
        think: R`"存在 + 不存在"能反证：若和存在，用减法法则把不存在的那个表示成两个存在的极限之差，矛盾。其余三种情况都没有这样的等式可用，不能断定，要用反例：常用 $\operatorname{sgn}x$（左右极限不同）和 $\sin\frac1x$（振荡）。`,
        first: R`先判断哪些能用反证法证明`,
        steps: [
          R`++(1) 对。反证++：设 $\lim(f+g)$ 存在，又 $\lim f$ 存在，由差的运算法则 $\lim g=\lim[(f+g)-f]$ 存在，与已知矛盾`,
          R`++(2) 错++。$x\to0$ 时 $f=\operatorname{sgn}x$、$g=-\operatorname{sgn}x$ 左右极限都不等，极限不存在；但 $f+g\equiv0$，极限为 $0$`,
          R`++(3) 错++。$f=x\to0$，$g=\sin\dfrac1x$ 不存在；$fg=x\sin\dfrac1x$ 是无穷小乘有界，$\to0$。(3) 不能像 (1) 那样反证，因为 $g=\dfrac{fg}{f}$ 要除以 $f$，而 $\lim f$ 可能是 $0$`,
          R`++(4) 错++。$f=g=\operatorname{sgn}x$，$x\to0$ 时都不存在；$fg=\operatorname{sgn}^2x=1$（$x\neq0$），极限为 $1$`
        ],
        pitfall: R`!!把"存在 × 不存在 = 不存在"当成对的!!（存在的那个是 $0$ 时会出问题）`,
        practice: "教材习题1-5 第4、5题（p43–44，答案 习题全解 p26–27）；30讲 例2.6（p83）"
      },
      {
        id: "t8", name: "由极限值反求参数", tag: "研",
        signal: R`极限式里有==待定常数 $a,b$==，已知极限值，求参数`,
        example: { q: R`已知 $\lim\limits_{x\to-2}\dfrac{2x^3+ax^2-3x+6}{x+2}=b$，则 $ab=$ ____。`, src: "1000题 基础篇 第1章第13题" },
        idea: {
          key: R`==分母趋于 0 而极限有限，分子也必须趋于 0==，先得一个方程；代回去约分算出极限，再得另一个。`,
          how: [
            R`++判断分母 $\to0$++，由"商有极限、分母 $\to0\Rightarrow$ 分子 $\to0$"列方程`,
            R`++解出一个参数，代回分子，因式分解约去零因子++`,
            R`++求出极限，和已知值比较，解出其余参数++`
          ],
          refs: [
            { src: "30讲 例1.20 p46", text: R`若 $\lim\dfrac{f(x)}{g(x)}=A$，且 $\lim g(x)=0$，则 $\lim f(x)=0$。以上结论非常重要，以后在有关定参数的题目中可直接使用` },
            { src: "武忠祥 题型二 方法1 推论 p16", text: R`(2) 若 $\lim\frac{f(x)}{g(x)}$ 存在，且 $\lim g(x)=0$，则 $\lim f(x)=0$；(3) 若 $\lim\frac{f(x)}{g(x)}=A\neq0$，且 $\lim f(x)=0$，则 $\lim g(x)=0$` }
          ]
        },
        think: R`分母 $x+2\to0$，而极限是有限数 $b$。如果分子不趋于 0，商会趋于 $\infty$，所以分子必须也趋于 0（"分母 → 0 且极限有限 ⇒ 分子 → 0"）。这给出关于 $a$ 的第一个方程；再约去零因子 $x+2$ 求出 $b$。`,
        first: R`$x\to-2$ 时分母 $\to0$，所以分子在 $x=-2$ 处为 $0$`,
        steps: [
          R`++推出分子 $\to0$++：分子 $=\dfrac{\text{分子}}{x+2}\cdot(x+2)\to b\cdot0=0$。分子是多项式（连续），所以它在 $x=-2$ 处的值为 0`,
          R`++代入 $x=-2$++：$2(-8)+4a-3(-2)+6=-16+4a+6+6=4a-4=0$，得 $a=1$`,
          R`++分子变成++ $2x^3+x^2-3x+6$，它有因子 $x+2$，做多项式除法：$2x^3+x^2-3x+6=(x+2)(2x^2-3x+3)$（展开核对：$2x^3-3x^2+3x+4x^2-6x+6$）`,
          R`++约去 $x+2$++：$b=\lim\limits_{x\to-2}(2x^2-3x+3)=8+6+3=17$`,
          R`==$ab=1\times17=17$==`
        ],
        pitfall: R`!!忘了先用"分子必须趋于 0"这一步!!，直接代入得 $\frac{\text{非零}}{0}$ 就卡住`,
        practice: "1000题 基础篇 第1章第13题；30讲 例1.20（p46）；30讲 例1.21 要用等价无穷小，学完 1.7 再做"
      },
      {
        id: "t9", name: "极限式中含有极限值本身", tag: "研",
        signal: R`$f(x)$ 的表达式里==出现 $\lim\limits_{x\to x_0}f(x)$（一个常数）==，求 $f$ 或这个极限`,
        example: { q: R`已知 $\lim\limits_{x\to1}f(x)$ 存在，且 $f(x)=x^2+\mathrm e^x\lim\limits_{x\to1}f(x)$，则 $f(x)=$ ____。`, src: "1000题 基础篇 第1章第18题" },
        idea: {
          key: R`极限值是一个常数：==设它为 $A$，两边同时取同一个极限，得到关于 $A$ 的方程==。`,
          how: [
            R`++令 $A=\lim\limits_{x\to x_0}f(x)$++，把式子写成含 $A$ 的等式`,
            R`++两边对 $x\to x_0$ 取极限++（$A$ 是常数，可以提出）`,
            R`++解方程得 $A$，代回原式++`
          ],
          refs: [
            { src: "30讲 例1.14 分析 p29–30", text: R`令 $\lim\limits_{x\to0}\frac{f(x)}{x^2}=A$，建立方程` },
            { src: "教材 p39 推论1", text: R`如果 $\lim f(x)$ 存在，而 $c$ 为常数，那么 $\lim[cf(x)]=c\lim f(x)$` }
          ]
        },
        think: R`$\lim\limits_{x\to1}f(x)$ 是一个确定的常数，只是暂时不知道。把它设成 $A$，$f(x)$ 就成了已知表达式 $x^2+A\mathrm e^x$；再对这个表达式取同一个极限，又得到 $A$，于是得到关于 $A$ 的方程。`,
        first: R`设 $A=\lim\limits_{x\to1}f(x)$，则 $f(x)=x^2+A\mathrm e^x$`,
        steps: [
          R`++设 $A=\lim\limits_{x\to1}f(x)$（常数）++，则 $f(x)=x^2+A\mathrm e^x$`,
          R`++两边同时令 $x\to1$++：左边极限是 $A$；右边 $x^2+A\mathrm e^x$ 连续，极限是 $1+A\mathrm e$。所以 $A=1+A\mathrm e$`,
          R`++解方程++：$A(1-\mathrm e)=1$，$A=\dfrac{1}{1-\mathrm e}$`,
          R`++代回++：$f(x)=x^2+\dfrac{\mathrm e^x}{1-\mathrm e}$。检验：$\lim\limits_{x\to1}f=1+\dfrac{\mathrm e}{1-\mathrm e}=\dfrac{1}{1-\mathrm e}=A$，一致`
        ],
        pitfall: R`!!把 $\lim f(x)$ 当成随 $x$ 变化的量!!；取极限时只对一边取`,
        practice: "1000题 基础篇 第1章第18题；30讲 例1.14 要用等价无穷小，学完 1.7 再做"
      },
      {
        id: "t10", name: "用极限定义的函数", tag: "研",
        signal: R`$f(x)=\lim\limits_{n\to\infty}(\cdots)$，==极限变量是 $n$==，求 $f(x)$ 的表达式`,
        example: { q: R`设 $f(x)=\lim\limits_{n\to\infty}\dfrac{x^2+nx(1-x)\sin^2\pi x}{1+n\sin^2\pi x}$，则 $f(x)=$ ____。`, src: "30讲 例1.26 p57" },
        idea: {
          key: R`==把 $x$ 当常数，看 $n$ 前面的系数：系数为 0 和不为 0 分开讨论==，系数不为 0 时分子分母同除以 $n$。`,
          how: [
            R`++找出含 $n$ 的项及其系数++（含 $x$）`,
            R`按"系数为 0""系数不为 0"（或 $|x|<1$、$|x|=1$、$|x|>1$）对 $x$ 分类`,
            R`++每一类里按 $n\to\infty$ 求极限++，最后写成分段函数`
          ],
          refs: [
            { src: "30讲 例1.26 方法总结 p57", text: R`主要关注 $n$ 前面的系数。……若 $n$ 的系数为零，即 $\sin^2\pi x=0$，此时含 $n$ 的项消失了，结果就是 $x^2$` },
            { src: "30讲 例1.26 分析 p57", text: R`抓带头大哥，$n$ 在变，$x$ 在求极限过程中视为常数` }
          ]
        },
        think: R`对 $n$ 取极限时 $x$ 是常数。分子分母里 $n$ 的系数都含 $\sin^2\pi x$：它为 0 时 $n$ 项消失；不为 0 时 $n$ 项占主导，同除 $n$。所以按 $\sin\pi x$ 是否为 0（即 $x$ 是否为整数）分类。`,
        first: R`$n$ 的系数含 $\sin^2\pi x$，按它是否为 $0$ 分类`,
        steps: [
          R`++分类依据++：$\sin\pi x=0\iff x$ 是整数`,
          R`++$x$ 为整数++：$\sin^2\pi x=0$，分子是 $x^2$，分母是 $1$，与 $n$ 无关，$f(x)=x^2$`,
          R`++$x$ 不是整数++：$\sin^2\pi x>0$ 是正常数，分子分母都是 $n$ 的一次式。同除 $n$：$\dfrac{\frac{x^2}{n}+x(1-x)\sin^2\pi x}{\frac1n+\sin^2\pi x}\to\dfrac{x(1-x)\sin^2\pi x}{\sin^2\pi x}=x(1-x)$`,
          R`++结果++：$f(x)=\begin{cases}x^2,&x\text{ 为整数}\\x(1-x),&x\text{ 不是整数}\end{cases}$`
        ],
        pitfall: R`!!忘记讨论系数为 0 的情形!!；!!把 $x$ 也当成变量去求极限!!`,
        practice: "30讲 例1.26（p57）；1.8 判断间断点时还会用到这类函数"
      }
    ],

    pitfalls: [
      { id: "e4", wrong: R`$\infty-\infty=0$`, why: R`两个无穷大的差可以是任何值`, right: R`通分或有理化后再算（武忠祥 p27）`, test: R`$\lim\limits_{x\to1}\left(\dfrac1{1-x}-\dfrac3{1-x^3}\right)=0$ 吗？`, ans: R`不是，等于 $-1$`, link: "题型 5" },
      { id: "e6", wrong: R`$x\to-\infty$ 时 $\sqrt{x^2+100}=x\sqrt{1+\frac{100}{x^2}}$`, why: R`$\sqrt{x^2}=|x|$，$x<0$ 时等于 $-x$`, right: R`$x\to-\infty$ 时提出 $-x$`, test: R`$\lim\limits_{x\to-\infty}x(\sqrt{x^2+100}+x)=$？`, ans: R`$-50$（吉米【43】p13）`, link: "题型 2" },
      { id: "e7", wrong: R`无穷多个无穷小的和还是无穷小`, why: R`定理 1 只对有限个成立`, right: R`项数随 $n$ 变时先求和，或用夹逼（30讲 p42）`, test: R`$\lim\limits_{n\to\infty}\dfrac{1+2+\cdots+(n-1)}{n^2}$ 能逐项得 $0$ 吗？`, ans: R`不能，先求和得 $\dfrac{n(n-1)}{2n^2}\to\dfrac12$（习题全解 p24）`, link: "题型 3" },
      { id: "e8", wrong: R`$\lim x^2\sin\dfrac1x=\lim x^2\cdot\lim\sin\dfrac1x$`, why: R`$\lim\limits_{x\to0}\sin\dfrac1x$ 不存在，乘法法则不能用`, right: R`用"有界 × 无穷小"（教材 p38 定理2）`, test: R`$\lim\limits_{x\to0}x^2\sin\dfrac1x=$？依据是什么？`, ans: R`$0$；$x^2\to0$，$|\sin\frac1x|\leqslant1$`, link: "题型 6" },
      { id: "e10", wrong: R`$\lim f$ 存在、$\lim g$ 不存在，所以 $\lim fg$ 不存在`, why: R`$\lim f=0$ 时乘积可能存在`, right: R`只有"存在 ± 不存在"一定不存在（习题1-5 第5题）`, test: R`$x\to0$ 时 $x\cdot\sin\dfrac1x$ 的极限存在吗？`, ans: R`存在，为 $0$`, link: "题型 7" },
      { id: "e12", wrong: R`$\varphi>\psi$，所以 $\lim\varphi>\lim\psi$`, why: R`取极限后严格不等号可能变成等号`, right: R`只能得到 $\lim\varphi\geqslant\lim\psi$（教材 p40 定理5）`, test: R`$x>0$ 时 $\dfrac1x>0$，$\lim\limits_{x\to+\infty}\dfrac1x>0$ 吗？`, ans: R`不是，等于 $0$`, link: "知识点 定理 5" },
      { id: "e14", wrong: R`含参数的极限，直接代入解方程`, why: R`分母 $\to0$ 时直接代入没有意义`, right: R`先用"分母 $\to0$、极限有限 $\Rightarrow$ 分子 $\to0$"（30讲 p46）`, test: R`$\lim\limits_{x\to1}\dfrac{x^2+ax-2}{x-1}=3$，$a=$？`, ans: R`分子在 $1$ 处为 $0$：$1+a-2=0$，$a=1$；此时 $\frac{(x-1)(x+2)}{x-1}\to3$，符合`, link: "题型 8" },
      { id: "e15", wrong: R`复合函数的极限一律等于"外层在内层极限处的值"`, why: R`定理 6 给的是外层的极限 $\lim\limits_{u\to u_0}f(u)$，不是 $f(u_0)$；还要求 $g(x)\neq u_0$`, right: R`$\lim f[g(x)]=\lim\limits_{u\to u_0}f(u)$；$f$ 连续时才等于 $f(u_0)$（1.9）`, test: R`$f(u)=0\ (u\neq0)$，$f(0)=1$；$g(x)\equiv0$。$\lim\limits_{x\to0}f[g(x)]$ 等于 $\lim\limits_{u\to0}f(u)=0$ 吗？`, ans: R`不等：$f[g(x)]\equiv1$，极限是 $1$。因为 $g(x)=u_0=0$，不满足定理 6 的条件`, link: "知识点 定理 6" },
    ]
  });
})();
