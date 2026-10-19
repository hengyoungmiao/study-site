/*
类型: 题型
标题: 高等数学 第1章 第4节 无穷小与无穷大 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-19
更新日期: 2026-10-19
状态: 完成

页码一律是印刷页。教材 = 同济第八版上册；30讲 = 张宇基础30讲·高数分册；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；
武忠祥 = 高等数学辅导讲义（强化）；习题全解 = 同济第八版上册习题全解指导。
恆 2026-10-19：用定义证明无穷小、无穷大的题考试不考（习题1-4 第2、3、5题不出题型）。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "1.4",
    chapter: 1,
    title: "无穷小与无穷大",
    pages: "教材 p33–37",
    sources: ["教材 第一章第四节 p33–37", "习题全解 习题1-4 p20–23", "30讲 第1讲 p41–43、p45", "吉米 第1章【35】–【37】p10–11", "武忠祥 第1章第二节 p12–14"],
    updated: "2026-10-19",

    framework: {
      main: R`无穷小就是"极限为 0 的函数"，任何极限都能写成"极限值 + 无穷小"；无穷大是 $|f|$ 无限增大，极限其实不存在，只是记作 $\infty$。两者在 $f\neq0$ 时互为倒数；无穷大一定无界，无界不一定是无穷大。`,
      nodes: [
        { id: "LIM", go: "1.3:p2", col: 0, row: 0, kind: "map", label: "函数极限", sub: R`$\lim f(x)=A$` },
        { id: "ZERO", go: "p1", col: 1, row: 0, kind: "func", label: "无穷小", sub: R`极限为 $0$ 的函数` },
        { id: "BIG", go: "p5", col: 2, row: 0, kind: "func", label: "无穷大", sub: R`$|f|\to+\infty$，记作 $\lim f=\infty$` },
        { id: "DEC", go: "p3", col: 0, row: 1, kind: "prop", label: "脱帽", sub: R`$f=A+\alpha$，$\alpha$ 是无穷小` },
        { id: "VA", go: "p7", col: 1, row: 1, kind: "build", label: "铅直渐近线", sub: R`$\lim\limits_{x\to x_0}f=\infty\Rightarrow x=x_0$` },
        { id: "UNB", go: "p9", col: 2, row: 1, kind: "prop", label: "无界", sub: "有些点的值很大就够" }
      ],
      edges: [
        { from: "LIM", to: "ZERO", label: R`$A=0$` },
        { from: "LIM", to: "DEC", label: "⇔" },
        { from: "ZERO", to: "BIG", label: R`取倒数（$f\neq0$）` },
        { from: "BIG", to: "VA", label: R`$x\to x_0$ 时` },
        { from: "BIG", to: "UNB", label: R`$\Rightarrow$，反之不对` }
      ],
      keys: [
        { q: R`无穷小和"很小的数"有什么区别？`, a: R`无穷小是一个趋于 $0$ 的函数，必须说清在哪个变化过程中；很小的数是常数，不是无穷小。$0$ 是唯一能作无穷小的常数（教材 p33）。` },
        { q: R`函数极限和无穷小是什么关系？`, a: R`同一变化过程中，$\lim f(x)=A\Leftrightarrow f(x)=A+\alpha$，$\alpha$ 是无穷小（教材 p33–34 定理1；30讲 p41 叫"脱帽法"）。` },
        { q: R`"$\lim f(x)=\infty$"算极限存在吗？无穷大和无界是什么关系？`, a: R`$\lim f=\infty$ 不算极限存在，按定义极限不存在，只是用 $\infty$ 描述这种状态（教材 p34）。无穷大一定无界，无界不一定是无穷大，例 $x\cos x$（习题1-4 第6题）。` },
        { q: R`无穷小和无穷大的倒数关系有什么条件？`, a: R`同一变化过程中：$f$ 是无穷大 $\Rightarrow\dfrac1f$ 是无穷小；$f$ 是无穷小且 $f\neq0$ $\Rightarrow\dfrac1f$ 是无穷大（教材 p35 定理2）。` }
      ]
    },

    points: [
      {
        group: "一、无穷小",
        items: [
          {
            id: "p1", kind: "定义", name: "无穷小", page: "教材 p33",
            body: R`如果 $\lim\limits_{x\to x_0}f(x)=0$（或 $\lim\limits_{x\to\infty}f(x)=0$），就称 $f(x)$ 为当 $x\to x_0$（或 $x\to\infty$）时的无穷小。以 $0$ 为极限的数列叫 $n\to\infty$ 时的无穷小。`,
            notes: [R`无穷小和变化过程绑在一起：$x-1$ 是 $x\to1$ 时的无穷小，不是 $x\to0$ 时的（教材 p33 例1）`],
            quiz: R`$\dfrac1x$ 是无穷小吗？`
          },
          {
            id: "p2", kind: "结论", name: "无穷小不是很小的数；0 是唯一的常数无穷小", page: "教材 p33",
            body: R`很小的数（如百万分之一）不能小于任意给定的正数，所以不是无穷小。常数中只有 $0$ 是无穷小。`,
            notes: [R`30讲 p41：无穷小有两种，本身是 $0$，或是趋于 $0$ 的变量`],
            quiz: R`$10^{-100}$ 是无穷小吗？常函数 $f(x)\equiv0$ 呢？`
          },
          {
            id: "p3", kind: "定理", name: "定理 1：极限与无穷小的关系", page: "教材 p33–34",
            body: R`在自变量的同一变化过程中，$f(x)$ 有极限 $A$ 的充要条件是 $f(x)=A+\alpha$，其中 $\alpha$ 是无穷小。`,
            notes: [R`30讲 p41 称为"脱帽法"：把"$\lim$"去掉，换成一个等式`, R`$\alpha=f(x)-A$ 是变量，不是常数`, R`以后证明运算法则（1.5）、处理抽象函数极限都靠它`],
            quiz: R`$\lim\limits_{x\to0}f(x)=3$，用定理 1 怎么写 $f(x)$？`
          },
          {
            id: "p4", kind: "结论", name: "两个无穷小的商不一定是无穷小", page: "习题1-4 第1题（习题全解 p20）",
            body: R`$2x$、$3x$ 都是 $x\to0$ 时的无穷小，但 $\dfrac{2x}{3x}=\dfrac23$ 不是无穷小。`,
            notes: [R`商的情况要看"谁趋于 0 更快"，这就是 1.7 无穷小的比较`, R`和、积的结论（有限个无穷小的和、积仍是无穷小）在 1.5`],
            quiz: R`$x\to0$ 时 $\dfrac{x^2}{x}$ 和 $\dfrac{x}{x^2}$ 各是什么？`
          }
        ]
      },
      {
        group: "二、无穷大",
        items: [
          {
            id: "p5", kind: "定义", name: "无穷大（定义证明不考）", page: "教材 p34",
            body: R`如果当 $x\to x_0$（或 $x\to\infty$）时 $|f(x)|$ 能大于任意给定的正数 $M$（对 $x_0$ 某去心邻域内的所有 $x$），就称 $f(x)$ 是当 $x\to x_0$（或 $x\to\infty$）时的无穷大，记作 $\lim f(x)=\infty$。`,
            notes: [R`形式：$\forall M>0,\exists\delta>0$，当 $0<|x-x_0|<\delta$ 时 $|f(x)|>M$（教材 p34）`, R`把 $|f(x)|>M$ 换成 $f(x)>M$ 或 $f(x)<-M$，记作 $+\infty$ 或 $-\infty$`],
            quiz: R`$\lim\limits_{x\to0}\dfrac1x$ 写成 $+\infty$ 对吗？`
          },
          {
            id: "p6", kind: "结论", name: "无穷大的极限不存在；∞ 不是数", page: "教材 p34",
            body: R`按函数极限的定义，无穷大的极限是不存在的；写 $\lim f(x)=\infty$ 只是为了描述这种性态。$\infty$ 不是数，不能和很大的数混为一谈。`,
            notes: [R`题目问"极限是否存在"时，$\infty$ 要答"不存在"`],
            quiz: R`$\lim\limits_{x\to0}\dfrac1{x^2}=+\infty$，这个极限存在吗？`
          },
          {
            id: "p7", kind: "定义", name: "铅直渐近线", page: "教材 p35",
            body: R`若 $\lim\limits_{x\to x_0}f(x)=\infty$，则直线 $x=x_0$ 是 $y=f(x)$ 图形的铅直渐近线。`,
            notes: [R`例：$\lim\limits_{x\to1}\dfrac1{x-1}=\infty$，$x=1$ 是铅直渐近线（教材 p34–35 例2）`, R`水平渐近线见 1.3：$\lim\limits_{x\to\infty}f(x)=A\Rightarrow y=A$（教材 p30）`],
            quiz: R`$y=\dfrac{x^2-1}{x-1}$ 在 $x=1$ 有铅直渐近线吗？`
          },
          {
            id: "p8", kind: "定理", name: "定理 2：无穷大与无穷小的关系", page: "教材 p35",
            body: R`在自变量的同一变化过程中，如果 $f(x)$ 为无穷大，那么 $\dfrac1{f(x)}$ 为无穷小；反之，如果 $f(x)$ 为无穷小且 $f(x)\neq0$，那么 $\dfrac1{f(x)}$ 为无穷大。`,
            notes: [R`"$f(x)\neq0$"不能漏：$\dfrac1f$ 要有定义`, R`用法：$\lim\limits_{x\to\infty}\dfrac{1}{x}=0$ 由 $x$ 是无穷大得到（习题全解 p21）`],
            quiz: R`$x\to0$ 时 $x^3$ 是无穷小，$\dfrac{1}{x^3}$ 是什么？`
          },
          {
            id: "p9", kind: "结论", name: "无穷大与无界", page: "习题1-4 第6、7题（习题全解 p22–23）；武忠祥 p12",
            body: R`无穷大要求 $x$ 足够接近 $x_0$（或 $|x|$ 足够大）后**所有**的 $|f(x)|>M$；无界只要求**存在某些点** $|f(x)|>M$。无穷大 $\Rightarrow$ 无界，反之不成立。`,
            notes: [R`例：$x\cos x$ 在 $(-\infty,+\infty)$ 内无界，但不是 $x\to+\infty$ 时的无穷大（习题全解 p22）`, R`例：$\dfrac1x\sin\dfrac1x$ 在 $(0,1]$ 内无界，但不是 $x\to0^+$ 时的无穷大（习题全解 p23）`, R`判断"不是无穷大"：找一串趋于目标的点，让函数值为 $0$ 或有界`],
            quiz: R`$x\sin x$ 是 $x\to\infty$ 时的无穷大吗？在 $(-\infty,+\infty)$ 内有界吗？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "判断变量是无穷小、无穷大、有界还是无界",
        signal: R`选项同时出现"无穷小""无穷大""有界但不是无穷小""无界但不是无穷大"，函数里有 $\sin\dfrac1x$、$\cos x$ 这类振荡因子`,
        example: { q: R`当 $x\to0$ 时，变量 $\dfrac1{x^2}\sin\dfrac1x$ 是（ ）。(A) 无穷小　(B) 无穷大　(C) 有界的，但不是无穷小量　(D) 无界的，但不是无穷大`, src: "吉米【35】p10–11" },
        idea: {
          key: R`取两串趋于目标点的特殊点：一串让振荡因子为 $0$（说明不是无穷大），一串让它为 $1$（说明无界）。`,
          how: [
            R`找振荡因子的零点（$\sin u=0$：$u=k\pi$），代入后函数值为 $0$，说明不是无穷大`,
            R`找振荡因子取 $1$ 的点（$u=2k\pi+\frac{\pi}{2}$），代入后函数值趋于 $\infty$，说明无界`,
            R`据此排除"无穷小""有界"两项，得"无界但不是无穷大"`
          ],
          refs: [
            { src: "吉米【36】p11", text: R`只要正确理解当 $x\to\infty$ 时 $f(x)$ 为无穷大与 $f(x)$ 无界两个概念之间的区别，就容易作出正确选择` },
            { src: "武忠祥 第1章第二节 p12", text: R`数列是无穷大量：$\forall M>0,\exists N$，当 $n>N$ 时，恒有 $|x_n|>M$。数列是无界变量：$\forall M>0,\exists N$，使 $|x_N|>M$。无穷大量一定是无界变量，但无界变量不一定是无穷大量` }
          ]
        },
        first: R`令 $u=\dfrac1x$，$x\to0$ 时 $u\to\infty$；分别取 $\sin u=0$ 和 $\sin u=1$ 的点`,
        steps: [
          R`取 $x_k=\dfrac1{2k\pi}\to0$：$f(x_k)=(2k\pi)^2\sin2k\pi=0$，所以不是无穷大，排除 (B)`,
          R`取 $y_k=\dfrac{1}{2k\pi+\frac{\pi}{2}}\to0$：$f(y_k)=\left(2k\pi+\dfrac{\pi}{2}\right)^2\to\infty$，所以在 $0$ 的任何去心邻域内无界。无穷小在 $0$ 附近有界（局部有界性），所以也不是无穷小，排除 (A)(C)`,
          R`选 (D)`
        ],
        pitfall: R`看到 $\dfrac1{x^2}\to\infty$ 就选"无穷大"；看到 $|\sin|\leqslant1$ 就选"有界"`,
        practice: "吉米【35】【36】（p10–11）；教材习题1-4 第6、7题（p36，答案 习题全解 p22–23）"
      },
      {
        id: "t2", name: "由乘积是无穷小判断两个因子",
        signal: R`已知 $\lim x_ny_n=0$（或 $\lim f\cdot g=0$），问"若 $x_n$ ……则 $y_n$ 必……"`,
        example: { q: R`设数列 $x_n$ 与 $y_n$ 满足 $\lim\limits_{n\to\infty}x_ny_n=0$，则下列断言正确的是（ ）。(A) 若 $x_n$ 发散，则 $y_n$ 必发散　(B) 若 $x_n$ 无界，则 $y_n$ 必有界　(C) 若 $x_n$ 有界，则 $y_n$ 必为无穷小　(D) 若 $\dfrac1{x_n}$ 为无穷小，则 $y_n$ 必为无穷小`, src: "吉米【37】p11；武忠祥 题型一 例3 p14" },
        idea: {
          key: R`把要判断的那个因子写成"已知量的乘积"：$y_n=(x_ny_n)\cdot\dfrac1{x_n}$；推不出的用"奇偶交替为 0"的数列举反例。`,
          how: [
            R`看能不能把目标因子写成两个已知极限的乘积，能就直接用极限运算（1.5）`,
            R`其余选项举反例：$x_n=n,y_n=\dfrac1{n^2}$；奇偶交替 $x_n=n,0,n,0,\cdots$、$y_n=0,n,0,n,\cdots$`,
            R`"有界 × 无穷小 = 无穷小"不能倒过来用`
          ],
          refs: [
            { src: "武忠祥 题型一 例3 p14", text: R`由于 $y_n=(x_ny_n)\cdot\dfrac1{x_n}$，则 $\lim y_n=\lim(x_ny_n)\lim\dfrac1{x_n}=0\cdot0=0$。若取 $x_n$ 偶数项为 $n$、奇数项为 $0$，$y_n$ 偶数项为 $0$、奇数项为 $n$，则 $x_ny_n\to0$，且 $x_n$ 无界，但 $y_n$ 也无界` },
            { src: "吉米【37】p11", text: R`若 $x_n$ 有界，且 $y_n$ 无穷小，则 $\lim x_ny_n=0$，但反之不一定` }
          ]
        },
        first: R`先试 (D)：$y_n=(x_ny_n)\cdot\dfrac1{x_n}$`,
        steps: [
          R`(D)：$\dfrac1{x_n}\to0$，$x_ny_n\to0$，两个无穷小相乘仍是无穷小，$y_n\to0$，正确`,
          R`(A)：$x_n=n$，$y_n=\dfrac1{n^2}$，$x_n$ 发散但 $y_n$ 收敛，错`,
          R`(B)：$x_n=n,0,n,0,\cdots$，$y_n=0,n,0,n,\cdots$，乘积恒为 $0$，两个都无界，错`,
          R`(C)：$x_n=\dfrac1{n^2}$（有界），$y_n=n$，乘积 $\to0$，但 $y_n$ 不是无穷小，错。选 (D)`
        ],
        pitfall: R`把"有界 × 无穷小 = 无穷小"倒过来用；以为乘积趋于 0 就一定有一个因子趋于 0`,
        practice: "吉米【37】（p11）；武忠祥 题型一 例3（p14）；学完 1.5 运算法则后再做一遍"
      },
      {
        id: "t3", name: "用极限与无穷小的关系、倒数关系求简单极限",
        signal: R`分式可以拆成"常数 + 趋于 0 的项"，或者分母趋于 0、分子不趋于 0`,
        example: { q: R`求下列极限并说明理由：(1) $\lim\limits_{x\to\infty}\dfrac{2x+1}{x}$；(2) $\lim\limits_{x\to0}\dfrac{1-x^2}{1-x}$；(3) $\lim\limits_{x\to1}\dfrac{x+1}{x-1}$。`, src: "教材习题1-4 第4题 p36（(1)(2)）；(3) 是同类改编（⚠️未核验）" },
        idea: {
          key: R`能拆成"常数 + 无穷小"的，极限就是那个常数（定理 1）；分母是无穷小、分子不趋于 0 的，用倒数关系判成无穷大（定理 2）。`,
          how: [
            R`化简或拆项，把式子写成 $A+\alpha$`,
            R`指出 $\alpha$ 为什么是无穷小（常用：$x\to\infty$ 时 $\dfrac1x$ 是无穷小，由定理 2）`,
            R`分母 $\to0$ 而分子 $\to c\neq0$：先看倒数 $\to0$，再由定理 2 得 $\infty$`
          ],
          refs: [
            { src: "习题全解 习题1-4 第4题 p21–22", text: R`$\lim\dfrac{2x+1}{x}=\lim\left(2+\dfrac1x\right)=2$。理由：由定理2，$\dfrac1x$ 为当 $x\to\infty$ 时的无穷小；再由定理1 得结果` },
            { src: "30讲 p41", text: R`（脱帽法）$\lim\limits_{x\to\bullet}f(x)=A\Leftrightarrow f(x)=A+\alpha$，这里 $\lim\limits_{x\to\bullet}\alpha=0$` }
          ]
        },
        first: R`(1) 拆成 $2+\dfrac1x$；(2) 约去 $1-x$；(3) 先看倒数`,
        steps: [
          R`(1) $\dfrac{2x+1}{x}=2+\dfrac1x$，$\dfrac1x$ 是 $x\to\infty$ 时的无穷小（定理 2），由定理 1 极限为 $2$`,
          R`(2) $x\neq1$ 时 $\dfrac{1-x^2}{1-x}=1+x=1+\alpha$，$\alpha=x$ 是 $x\to0$ 时的无穷小，极限为 $1$`,
          R`(3) $\dfrac{x-1}{x+1}\to\dfrac02=0$ 且 $x\neq1$ 附近不为 $0$，由定理 2，$\lim\limits_{x\to1}\dfrac{x+1}{x-1}=\infty$（极限不存在）`
        ],
        pitfall: R`(3) 写成"$=\dfrac20=\infty$"——$0$ 不能当分母，要用倒数关系说明；结果是 $\infty$ 也要知道"极限不存在"`,
        practice: "教材习题1-4 第4题（p36；答案 习题全解 p21–22）"
      },
      {
        id: "t4", name: "求函数图形的水平、铅直渐近线",
        signal: R`问"求 $y=f(x)$ 的渐近线"，$f$ 是分式`,
        example: { q: R`求函数 $f(x)=\dfrac{4}{2-x^2}$ 的图形的渐近线。`, src: "教材习题1-4 第8题 p36" },
        idea: {
          key: R`水平渐近线看 $x\to\infty$ 的极限；铅直渐近线看让函数趋于 $\infty$ 的点（分母为 0、分子不为 0 的点）。`,
          how: [
            R`求 $\lim\limits_{x\to\infty}f(x)$（必要时分 $\pm\infty$），等于 $A$ 就有 $y=A$`,
            R`找无定义点（分母为 $0$），逐个求 $\lim\limits_{x\to x_0}f(x)$，是 $\infty$ 才是铅直渐近线`,
            R`分子分母同时为 $0$ 的点，约分后可能有有限极限，不是渐近线`
          ],
          refs: [
            { src: "教材 p35", text: R`一般地说，如果 $\lim\limits_{x\to x_0}f(x)=\infty$，那么直线 $x=x_0$ 是函数 $y=f(x)$ 的图形的铅直渐近线` },
            { src: "教材 p30", text: R`$\lim\limits_{x\to\infty}f(x)=A$ 时，直线 $y=A$ 是函数 $y=f(x)$ 的图形的水平渐近线` }
          ]
        },
        first: R`分 $x\to\infty$ 和分母零点 $x=\pm\sqrt2$ 两部分`,
        steps: [
          R`$\lim\limits_{x\to\infty}\dfrac{4}{2-x^2}=0$，$y=0$ 是水平渐近线（习题全解 p23 印成"$x\to0$"，应为 $x\to\infty$）`,
          R`$x\to\pm\sqrt2$ 时分母 $\to0$、分子为 $4$，$f(x)\to\infty$`,
          R`所以 $x=-\sqrt2$、$x=\sqrt2$ 是铅直渐近线`
        ],
        pitfall: R`把所有分母零点都当铅直渐近线；水平渐近线去算 $x\to0$`,
        practice: "教材习题1-4 第8题（p36；答案 习题全解 p23）；渐近线的完整讲法在第三章"
      }
    ],

    pitfalls: [
      { wrong: R`无穷小就是很小很小的数`, why: R`无穷小是趋于 $0$ 的函数（变量），任何非零常数都不是`, right: R`说无穷小要说"在什么过程中极限为 $0$"（教材 p33）`, test: R`$10^{-100}$ 是无穷小吗？`, ans: R`不是，它是一个固定的正数`, link: "知识点 无穷小不是很小的数" },
      { wrong: R`$x^2$ 是无穷小`, why: R`没说变化过程；$x\to1$ 时 $x^2\to1$`, right: R`写成"$x^2$ 是 $x\to0$ 时的无穷小"`, test: R`$x^2$ 是 $x\to1$ 时的无穷小吗？`, ans: R`不是，极限是 $1$`, link: "知识点 无穷小" },
      { wrong: R`$0$ 太小了，不算无穷小`, why: R`$f(x)\equiv0$ 满足极限为 $0$`, right: R`$0$ 是唯一可以作无穷小的常数（教材 p33）`, test: R`常函数 $f(x)\equiv0$ 是 $x\to2$ 时的无穷小吗？`, ans: R`是`, link: "知识点 无穷小不是很小的数" },
      { wrong: R`$\lim f(x)=\infty$，所以极限存在`, why: R`$\infty$ 不是数，按定义极限不存在`, right: R`回答"极限不存在（为无穷大）"（教材 p34）`, test: R`$\lim\limits_{x\to0}\dfrac1{x^2}$ 存在吗？`, ans: R`不存在，是 $+\infty$`, link: "知识点 无穷大的极限不存在" },
      { wrong: R`$\lim\limits_{x\to0}\dfrac1x=+\infty$`, why: R`左侧趋于 $-\infty$`, right: R`两侧符号不同只能写 $\infty$；单侧才写 $\pm\infty$`, test: R`$\lim\limits_{x\to0^-}\dfrac1x=$？`, ans: R`$-\infty$`, link: "知识点 无穷大" },
      { wrong: R`无界函数就是无穷大`, why: R`无穷大要求所有足够靠近的点都大，无界只要求某些点大`, right: R`无穷大 $\Rightarrow$ 无界，反之不对（习题1-4 第6题）`, test: R`$x\cos x$ 在 $(-\infty,+\infty)$ 内无界，它是 $x\to+\infty$ 时的无穷大吗？`, ans: R`不是：$x=2k\pi+\frac{\pi}{2}$ 处函数值为 $0$`, link: "题型 1" },
      { wrong: R`$\dfrac1{x^2}\sin\dfrac1x$ 有 $\dfrac1{x^2}$，所以 $x\to0$ 时是无穷大`, why: R`$\sin\dfrac1x$ 有无数个零点趋于 $0$`, right: R`取 $\sin\dfrac1x=0$ 的点说明不是无穷大（吉米【35】p10–11）`, test: R`$x_k=\dfrac1{k\pi}$ 处 $\dfrac1{x^2}\sin\dfrac1x$ 等于多少？`, ans: R`$0$`, link: "题型 1" },
      { wrong: R`$f$ 是无穷小，所以 $\dfrac1f$ 一定是无穷大`, why: R`$f$ 可能在 $x_0$ 附近取到 $0$，$\dfrac1f$ 没有定义`, right: R`定理 2 要求 $f(x)\neq0$（教材 p35）`, test: R`$x\to0$ 时 $f(x)=x\sin\dfrac1x$ 是无穷小，$\dfrac1f$ 是无穷大吗？`, ans: R`不是：$f$ 在 $x=\frac{1}{k\pi}$ 处为 $0$，$\dfrac1f$ 在 $0$ 的任何去心邻域内都有无定义的点（⚠️未核验：自编反例）`, link: "知识点 定理 2" },
      { wrong: R`两个无穷小的商还是无穷小`, why: R`商的结果取决于两者趋于 $0$ 的快慢`, right: R`商要具体算（1.7 无穷小的比较）`, test: R`$x\to0$ 时 $\dfrac{2x}{3x}$ 是无穷小吗？`, ans: R`不是，等于 $\dfrac23$（习题全解 p20）`, link: "知识点 两个无穷小的商" },
      { wrong: R`$\lim x_ny_n=0$，所以 $x_n$、$y_n$ 中至少一个是无穷小`, why: R`可以两个都在"轮流取 0"`, right: R`举奇偶交替的反例（武忠祥 p14）`, test: R`$x_n=n,0,n,0,\cdots$，$y_n=0,n,0,n,\cdots$，$x_ny_n$ 是多少？两个是无穷小吗？`, ans: R`$x_ny_n\equiv0$；两个都无界，都不是无穷小`, link: "题型 2" },
      { wrong: R`$x_n$ 有界、$x_ny_n\to0$，所以 $y_n\to0$`, why: R`把"有界 × 无穷小 = 无穷小"倒过来用了`, right: R`反例 $x_n=\dfrac1{n^2},\ y_n=n$（吉米【37】p11）`, test: R`$x_n=\dfrac1{n^2}$，$y_n=n$，$x_ny_n\to$？$y_n$ 是无穷小吗？`, ans: R`$x_ny_n=\dfrac1n\to0$；$y_n\to\infty$，不是`, link: "题型 2" },
      { wrong: R`分母为 $0$ 的点都是铅直渐近线`, why: R`分子也为 $0$ 时可能有有限极限`, right: R`逐点求极限，是 $\infty$ 才算（教材 p35）`, test: R`$y=\dfrac{x^2-1}{x-1}$ 在 $x=1$ 有铅直渐近线吗？`, ans: R`没有，$\lim\limits_{x\to1}=2$`, link: "题型 4" },
      { wrong: R`水平渐近线算 $\lim\limits_{x\to0}f(x)$`, why: R`水平渐近线描述 $|x|$ 很大时的走向`, right: R`算 $\lim\limits_{x\to\infty}f(x)$（教材 p30）`, test: R`$y=\dfrac{4}{2-x^2}$ 的水平渐近线是 $y=2$ 吗？`, ans: R`不是：$f(0)=2$ 只是一个函数值；$x\to\infty$ 时 $f\to0$，水平渐近线是 $y=0$`, link: "题型 4" },
      { wrong: R`$f=A+\alpha$ 里的 $\alpha$ 是一个很小的常数`, why: R`$\alpha=f(x)-A$ 是随 $x$ 变化的无穷小`, right: R`$\alpha$ 是变量，$\lim\alpha=0$（教材 p33–34）`, test: R`$f(x)=3+x^2$，$x\to0$ 时 $A$ 和 $\alpha$ 各是什么？`, ans: R`$A=3$，$\alpha=x^2$`, link: "知识点 定理 1" },
      { wrong: R`$\dfrac{c}{0}=\infty$，可以直接写`, why: R`$0$ 不能作分母；要说的是"分母趋于 $0$"`, right: R`先说倒数 $\to0$，再用定理 2 推出 $\infty$`, test: R`$\lim\limits_{x\to2}\dfrac{x}{x-2}$ 怎么说明？`, ans: R`$\dfrac{x-2}{x}\to0$ 且 $x\neq2$ 时不为 $0$，由定理 2 得 $\infty$`, link: "题型 3" }
    ]
  });
})();
