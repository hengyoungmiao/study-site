/*
类型: 题型
标题: 高等数学 第1章 第6节 极限存在准则 两个重要极限 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-19
更新日期: 2026-10-19
状态: 完成

页码一律是印刷页。教材 = 同济第八版上册；30讲 = 张宇基础30讲·高数分册；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；
武忠祥 = 高等数学辅导讲义（强化）；习题全解 = 同济第八版上册习题全解指导；1000题 = 张宇1000题基础篇（只引题号）。
本节可用：四则运算、约分有理化、有界乘无穷小、夹逼、单调有界、两个重要极限。要用等价无穷小、洛必达的题标"后置"。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "1.6",
    chapter: 1,
    title: "极限存在准则 两个重要极限",
    pages: "教材 p44–50",
    sources: ["教材 第一章第六节 p44–50", "习题全解 习题1-6 p27–30", "30讲 第1讲 p53、p59、p62；第2讲 p85–91", "吉米 第1章【52】–【65】p15–18", "1000题 第2章 1、3、4、5、6、10 题"],
    updated: "2026-10-19",

    framework: {
      main: R`两个准则用来"证明极限存在"：夹逼准则把式子夹在两个同极限的式子中间，单调有界准则保证单调数列只要有界就收敛。用它们分别得到两个重要极限 $\lim\limits_{x\to0}\frac{\sin x}{x}=1$ 和 $\lim\limits_{x\to\infty}\left(1+\frac1x\right)^x=\mathrm e$，再通过换元推广到"$\square\to0$"的一般形式。`,
      nodes: [
        { id: "SQ", go: "p1", col: 0, row: 0, kind: "map", label: "夹逼准则", sub: "两边极限存在且相等" },
        { id: "S1", go: "p4", col: 1, row: 0, kind: "func", label: R`$\frac{\sin x}{x}\to1$`, sub: R`$\cos x<\frac{\sin x}{x}<1$` },
        { id: "S1G", go: "p5", col: 2, row: 0, kind: "prop", label: R`$\frac{\sin\square}{\square}\to1$`, sub: R`要求 $\square\to0$` },
        { id: "NS", go: "t1", col: 0, row: 1, kind: "build", label: "n 项和、取整", sub: "放缩成同一极限" },
        { id: "REC", go: "t2", col: 1, row: 1, kind: "build", label: "递推数列", sub: "先证存在，再取极限" },
        { id: "MB", go: "p6", col: 0, row: 2, kind: "map", label: "单调有界准则", sub: "单调 + 有界 ⇒ 收敛" },
        { id: "E", go: "p9", col: 1, row: 2, kind: "func", label: R`$\left(1+\frac1n\right)^n\to\mathrm e$`, sub: "单调增、有上界 3" },
        { id: "E1", go: "p11", col: 2, row: 2, kind: "prop", label: R`$1^{\infty}$ 型`, sub: R`$(1+\square)^{\frac1\square}\to\mathrm e$` }
      ],
      edges: [
        { from: "SQ", to: "S1", label: "夹出来" },
        { from: "S1", to: "S1G", label: "换元" },
        { from: "SQ", to: "NS", label: "放缩" },
        { from: "MB", to: "REC", label: "证存在" },
        { from: "MB", to: "E", label: "证单调有界" },
        { from: "E", to: "E1", label: "凑 e" }
      ],
      keys: [
        { q: R`夹逼准则的两个条件是什么？`, a: R`从某项起（或在某去心邻域内）$y_n\leqslant x_n\leqslant z_n$；两边的极限都存在且相等。只知道"夹着"不够（教材 p44–45；吉米【31】p9）。` },
        { q: R`$\dfrac{\sin\square}{\square}\to1$ 的条件是什么？$\lim\limits_{x\to\infty}\dfrac{\sin x}{x}$ 是多少？`, a: R`要求 $\square\to0$ 且 $\square\neq0$。$x\to\infty$ 时 $\dfrac{\sin x}{x}=\sin x\cdot\dfrac1x\to0$（教材 p45–46；p42 例8）。` },
        { q: R`$(1+\square)^{\frac1\square}\to\mathrm e$ 怎么用？$1^{\infty}$ 有没有快捷公式？`, a: R`$\square\to0$ 时成立，指数必须正好是 $\frac1\square$，不够就凑。$1^{\infty}$ 型：$\lim u^v=\mathrm e^{\lim v(u-1)}$（教材 p48–49；30讲 p62）。` },
        { q: R`用单调有界准则求递推数列极限的顺序是什么？`, a: R`先证单调、有界，得到极限存在；再对递推式两边取极限，解方程并按范围取舍。没证存在就取极限可能出错（教材 p46–47；习题全解 习题1-6 第5题注 p30）。` }
      ]
    },

    points: [
      {
        group: "一、夹逼准则",
        items: [
          {
            id: "p1", kind: "定理", name: "准则 I：数列的夹逼准则", page: "教材 p44",
            body: R`若==从某项起 $y_n\leqslant x_n\leqslant z_n$，且 $\lim\limits_{n\to\infty}y_n=\lim\limits_{n\to\infty}z_n=a$==，则 $\lim\limits_{n\to\infty}x_n$ ==存在且等于 $a$==。`,
            notes: [R`结论里包含"极限存在"，所以它是证明存在性的工具`, R`"从某项起"就够，前有限项不管`],
            quiz: R`$y_n\leqslant x_n\leqslant z_n$，$y_n\to0$，$z_n\to1$，$x_n$ 的极限是多少？`
          },
          {
            id: "p2", kind: "定理", name: "准则 I'：函数的夹逼准则", page: "教材 p44–45",
            body: R`若在 $\mathring U(x_0,r)$ 内（或 $|x|>M$ 时）==$g(x)\leqslant f(x)\leqslant h(x)$，且 $\lim g(x)=\lim h(x)=A$==，则 $\lim f(x)$ 存在且等于 $A$。`,
            notes: [R`证明见习题1-6 第3题（习题全解 p28–29）`],
            quiz: R`为什么 $\lim\limits_{x\to0}x\sin\dfrac1x=0$ 也可以用夹逼说明？`
          },
          {
            id: "p3", kind: "结论", name: "常用放缩", page: "30讲 第2讲 p85–88",
            body: R`$n$ 项和：$n\cdot u_{\min}\leqslant u_1+\cdots+u_n\leqslant n\cdot u_{\max}$；分子不变时，把分母统一放大或缩小（==分母越大，分数越小==）。$\max\{a_1,\cdots,a_m\}=\lim\limits_{n\to\infty}\sqrt[n]{a_1^n+\cdots+a_m^n}$（$a_i\geqslant0$）。`,
            notes: [R`取整：$x-1<[x]\leqslant x$（30讲 例1.29 p59）`, R`常用不等式：$\sin x<x<\tan x\ \left(0<x<\frac{\pi}{2}\right)$；$|a\pm b|\leqslant|a|+|b|$（30讲 p86）`],
            quiz: R`$\dfrac{1}{n^2+1}+\dfrac{1}{n^2+2}+\cdots+\dfrac{1}{n^2+n}$ 夹在哪两个式子之间？`
          }
        ]
      },
      {
        group: "二、第一个重要极限",
        items: [
          {
            id: "p4", kind: "公式", name: "lim sin x / x = 1", page: "教材 p45–46",
            body: R`==$\lim\limits_{x\to0}\dfrac{\sin x}{x}=1$==。证明：$0<|x|<\frac{\pi}{2}$ 时 $\cos x<\dfrac{\sin x}{x}<1$（由面积比较 $\sin x<x<\tan x$），且 $\lim\limits_{x\to0}\cos x=1$，用夹逼准则。`,
            notes: [R`顺带得到 $0<1-\cos x<\dfrac{x^2}{2}$，所以 $\lim\limits_{x\to0}\cos x=1$（教材 p45–46）`],
            quiz: R`证明 $\dfrac{\sin x}{x}\to1$ 时，左边夹的是哪个函数？`
          },
          {
            id: "p5", kind: "公式", name: "推广形式和常用结果", page: "教材 p46 例1–3；习题1-6 第1题",
            body: R`==若 $\square\to0$（且 $\square\neq0$），则 $\dfrac{\sin\square}{\square}\to1$==。常用：$\lim\limits_{x\to0}\dfrac{\tan x}{x}=1$，$\lim\limits_{x\to0}\dfrac{1-\cos x}{x^2}=\dfrac12$，$\lim\limits_{x\to0}\dfrac{\arcsin x}{x}=1$，$\lim\limits_{x\to0}\dfrac{\sin\omega x}{x}=\omega$。`,
            notes: [R`方法：凑成 $\dfrac{\sin\square}{\square}$ 的样子，分母要和 $\sin$ 里的式子一模一样（习题全解 p28）`, R`$\lim\limits_{x\to0}\dfrac{\arctan x}{x}=1$：令 $t=\arctan x$，同 $\arcsin$ 的做法`],
            quiz: R`$\lim\limits_{x\to0}\dfrac{\sin2x}{\sin5x}$ 怎么凑？`
          }
        ]
      },
      {
        group: "三、单调有界准则",
        items: [
          {
            id: "p6", kind: "定理", name: "准则 II：单调有界数列必有极限", page: "教材 p46–47",
            body: R`==单调增加（$x_n\leqslant x_{n+1}$）且有上界，或单调减少且有下界的数列必有极限==。这里的==单调是广义的（允许相等）==。`,
            notes: [R`只要"增 + 上界"或"减 + 下界"，不用两头都证（30讲 p89）`, R`单调有界是收敛的充分条件，不是必要条件：$\dfrac{(-1)^n}{n}$ 收敛但不单调（教材 p49）`, R`几何解释：单调的点只能往一个方向走，被挡住就停在某点附近（教材 p47）`],
            quiz: R`单调增加的数列，证了"有下界"能说明收敛吗？`
          },
          {
            id: "p7", kind: "结论", name: "证明数列单调的常用方法", page: "30讲 第2讲 p89–90",
            body: R`(1) ==作差 $x_{n+1}-x_n$ 定号，或作商 $\dfrac{x_{n+1}}{x_n}$ 与 $1$ 比==（同号时）；(2) ==数学归纳法==；(3) 用重要不等式（如 $\sin x<x$）；(4) $x_{n+1}=f(x_n)$ 且 $f$ 单调增加时，$x_2>x_1$ 则数列增，$x_2<x_1$ 则数列减。`,
            notes: [R`$f$ 单调减少时数列不单调（摆动）（30讲 p90–91 例2.13）`, R`证有界常用归纳法或基本不等式 $\sqrt{ab}\leqslant\frac{a+b}{2}$（30讲 p79 例2.1）`],
            quiz: R`$x_{n+1}=\sin x_n$，$0<x_1<\pi$，用哪个不等式证明它单调减少？`
          },
          {
            id: "p8", kind: "定理", name: "准则 II'：函数的单调有界准则", page: "教材 p49",
            body: R`设 $f(x)$ 在 $x_0$ 的某个左邻域内==单调并且有界，则左极限 $f(x_0^-)$ 必定存在==。对 $x\to x_0^+$、$x\to\pm\infty$ 有类似形式。`,
            notes: [R`只保证单侧极限存在`],
            quiz: R`$\arctan x$ 单调增加且有界，能推出哪个极限存在？`
          }
        ]
      },
      {
        group: "四、第二个重要极限",
        items: [
          {
            id: "p9", kind: "公式", name: "(1 + 1/n)ⁿ → e", page: "教材 p47–48",
            body: R`$x_n=\left(1+\dfrac1n\right)^n$ ==单调增加且 $x_n<3$==，由准则 II 极限存在，记为 $\mathrm e$：==$\lim\limits_{n\to\infty}\left(1+\dfrac1n\right)^n=\mathrm e$==，$\mathrm e=2.71828\cdots$ 是无理数。`,
            notes: [R`单调：二项展开后逐项比较；有界：括号换成 $1$，再用 $\frac1{k!}\leqslant\frac{1}{2^{k-1}}$（教材 p47–48）`],
            quiz: R`证明 $\left(1+\frac1n\right)^n<3$ 时用了哪两步放大？`
          },
          {
            id: "p10", kind: "公式", name: "函数形式", page: "教材 p48–49",
            body: R`==$\lim\limits_{x\to\infty}\left(1+\dfrac1x\right)^x=\mathrm e$==；令 $z=\dfrac1x$，$\lim\limits_{z\to0}(1+z)^{\frac1z}=\mathrm e$。一般地，==$\square\to0$ 时 $(1+\square)^{\frac1\square}\to\mathrm e$==。`,
            notes: [R`$x\to+\infty$ 和 $x\to-\infty$ 都成立，所以 $x\to\infty$ 成立（教材 p48 脚注）`, R`例 4：$\lim\limits_{x\to\infty}\left(1-\dfrac1x\right)^x=\dfrac1{\mathrm e}$（教材 p49）`],
            quiz: R`$\lim\limits_{x\to0}(1-x)^{\frac1x}$ 怎么凑成标准形式？`
          },
          {
            id: "p11", kind: "公式", name: "1^∞ 型的快捷公式", page: "30讲 第1讲 p62",
            body: R`若 $\lim u^v$ 是 $1^{\infty}$ 型（$u\to1$，$v\to\infty$），则 ==$\lim u^v=\mathrm e^{\lim v(u-1)}$==。`,
            notes: [R`推导：$u^v=\left\{[1+(u-1)]^{\frac{1}{u-1}}\right\}^{(u-1)v}$（30讲 p62）`, R`严格说要用到指数函数的连续性（1.9 幂指函数，教材 p64）；本节做题可先凑 $\mathrm e$`, R`30讲 p62：整体"抄"，不要只算指数，免得忘写 $\mathrm e$`],
            quiz: R`$\lim\limits_{x\to\infty}\left(\dfrac{x+2a}{x-a}\right)^x$ 用公式等于什么？`
          }
        ]
      },
      {
        group: "五、柯西极限存在准则（了解）",
        items: [
          {
            id: "p12", kind: "定理", name: "柯西极限存在准则", page: "教材 p49–50",
            body: R`数列 $\{x_n\}$ 收敛 $\Leftrightarrow$ $\forall\varepsilon>0$，$\exists N$，当 $m,n>N$ 时 ==$|x_n-x_m|<\varepsilon$==。`,
            notes: [R`几何意义：序号足够大的点，任意两点间的距离都可以任意小（教材 p50）`, R`教材只证必要性，课内了解即可`],
            quiz: R`柯西准则和单调有界准则，哪个是"充要条件"？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "夹逼准则求 n 项和的极限",
        signal: R`$n\to\infty$ 时有 ==$n$ 项相加，各项分母（或分子）不同，求不出和==`,
        example: { q: R`求 $\lim\limits_{n\to\infty}\left(\dfrac{1}{n^2+n+1}+\dfrac{2}{n^2+n+2}+\cdots+\dfrac{n}{n^2+n+n}\right)$。`, src: "吉米【53】p16；30讲 例2.9 p87–88" },
        idea: {
          key: R`==把变化的那部分（通常是分母）统一放成最大和最小==，变成能求和的两个式子，它们的极限相同就夹出来。`,
          how: [
            R`++找出每一项里随项变化、又妨碍求和的部分++（多数是分母里的 $+i$）`,
            R`++把它全换成最大值得下界，全换成最小值得上界++（分母越大，分数越小）`,
            R`++对上下界求和，再求极限++；两者相等才能下结论`,
            R`++不相等说明放得太粗，换一种放法++（只放一部分）`
          ],
          refs: [
            { src: "30讲 例2.9 分析 p87", text: R`分母不一样不能相加减，通分又太复杂，故可以利用放缩将分母化成相同的。需要注意：分母越大，分数越小` },
            { src: "吉米【52】点评 p16", text: R`本题不能使用求极限的四则运算法则求解，因为 $n\to\infty$ 时，本题实际为无穷项相加求和` }
          ]
        },
        think: R`$n$ 项相加、项数随 $n$ 变，而且每项分母都不同（$n^2+n+k$），无法直接求和。但分母变化的部分 $k$ 相对 $n^2$ 很小，把分母统一放大成最大的、缩小成最小的，分子就能用等差数列求和；两边极限相同，就用夹逼准则（教材 1.6 准则 I）。`,
        first: R`分子 $1+2+\cdots+n$ 保留，分母统一成 $n^2+n+n$ 和 $n^2+n+1$`,
        steps: [
          R`++观察++：第 $k$ 项是 $\dfrac{k}{n^2+n+k}$，$k=1,\cdots,n$，分母在 $n^2+n+1$ 到 $n^2+n+n$ 之间`,
          R`++放缩++：分母换成最大的 $n^2+2n$，每项变小；换成最小的 $n^2+n+1$，每项变大。所以 $\dfrac{1+2+\cdots+n}{n^2+2n}\leqslant\text{原式}\leqslant\dfrac{1+2+\cdots+n}{n^2+n+1}$`,
          R`++分子求和++：$1+2+\cdots+n=\dfrac{n(n+1)}{2}$`,
          R`++两边求极限++（分子分母都是二次，看最高次系数）：左边 $\dfrac{n^2+n}{2(n^2+2n)}\to\dfrac12$；右边 $\dfrac{n^2+n}{2(n^2+n+1)}\to\dfrac12$`,
          R`两边极限都是 $\dfrac12$，由夹逼准则，==原式 $=\dfrac12$==`
        ],
        pitfall: R`!!逐项求极限得 $0$!!；!!放缩后两边极限不同还硬下结论!!`,
        practice: "吉米【52】【53】（p15–16）；教材习题1-6 第4题(2)（p50，答案 习题全解 p29）；30讲 例2.9（p87–88）；1000题 第2章第3题"
      },
      {
        id: "t2", name: "单调有界准则求递推数列的极限",
        signal: R`==数列由递推式 $x_{n+1}=f(x_n)$ 给出==，要求证明极限存在并求极限`,
        example: { q: R`证明数列 $\sqrt2,\ \sqrt{2+\sqrt2},\ \sqrt{2+\sqrt{2+\sqrt2}},\ \cdots$ 的极限存在，并求该极限。`, src: "吉米【55】p16；教材习题1-6 第5题 p50" },
        idea: {
          key: R`两步走：==先证有界和单调（归纳法、作差），得到极限存在==；==再对递推式两边取极限，解方程，按数列的范围取舍==。`,
          how: [
            R`++写出递推式++ $x_{n+1}=f(x_n)$`,
            R`++证有界++：数学归纳法（验 $n=1$，设 $n=k$，推 $n=k+1$）；或基本不等式`,
            R`++证单调++：作差、作商、归纳；或用 $f$ 单调增加 + 比较 $x_1,x_2$`,
            R`++设极限为 $a$，递推式两边取极限得 $a=f(a)$++，解出并用范围舍根`
          ],
          refs: [
            { src: "习题全解 习题1-6 第5题注 p30", text: R`第一步是证明数列单调有界，从而保证数列的极限存在；第二步是在递推公式两端同时取极限……只有在证明数列极限存在的前提下，才能采用第二步的方法求得极限值。否则，直接利用第二步，有时会导出错误的结果` },
            { src: "30讲 例2.12 分析 p90", text: R`证明这种由递推形式给出的数列的收敛性，一般都是根据"单调有界数列必收敛"这一准则进行证明；在证明了极限存在的前提下再求极限` }
          ]
        },
        think: R`数列由递推 $x_{n+1}=\sqrt{2+x_n}$ 给出，没有通项公式，无法直接求极限。这类题先用单调有界准则（教材 1.6 准则 II）证明极限存在，再对递推式两边取极限解方程。单调、有界都用数学归纳法证。`,
        first: R`写成 $x_1=\sqrt2$，$x_{n+1}=\sqrt{2+x_n}$`,
        steps: [
          R`++写成递推++：$x_1=\sqrt2$，$x_{n+1}=\sqrt{2+x_n}$。先猜极限：若 $x_n\to a$，则 $a=\sqrt{2+a}$，得 $a=2$，所以猜"有上界 2、单调增加"`,
          R`++有界（归纳）++：$x_1=\sqrt2<2$；设 $x_k<2$，则 $x_{k+1}=\sqrt{2+x_k}<\sqrt{2+2}=2$。所以对一切 $n$，$0<x_n<2$`,
          R`++单调（归纳）++：$x_2=\sqrt{2+\sqrt2}>\sqrt2=x_1$；设 $x_k>x_{k-1}$，则 $2+x_k>2+x_{k-1}$，开方得 $x_{k+1}>x_k$。所以单调增加`,
          R`++单调增加且有上界，由准则 II 极限存在++，记为 $a$`,
          R`++对 $x_{n+1}=\sqrt{2+x_n}$ 两边取极限++：$a=\sqrt{2+a}$，平方 $a^2-a-2=0$，$(a-2)(a+1)=0$。因为 $x_n>0$，$a\geqslant0$，舍去 $-1$，==极限为 $2$==`
        ],
        pitfall: R`!!没证存在就对递推式取极限!!；!!解出两个根不取舍!!；证单调时!!只验证了前两项!!`,
        practice: "吉米【54】–【56】（p16–17）；教材习题1-6 第5、6题（p50，答案 习题全解 p29–30）；30讲 例2.12（p90）；1000题 第2章第4题"
      },
      {
        id: "t3", name: "第一个重要极限 sin□/□ → 1",
        signal: R`$x\to0$（或某个过程使 $\square\to0$）时==含 $\sin$、$\tan$、$1-\cos$、$\arcsin$==`,
        example: { q: R`求 $\lim\limits_{x\to\infty}\dfrac{3x^2+5}{5x+3}\sin\dfrac2x$。`, src: "吉米【57】p17" },
        idea: {
          key: R`==找出趋于 0 的那个"□"，把式子凑成 $\dfrac{\sin\square}{\square}$== 乘一个能直接算的部分。`,
          how: [
            R`++确认 $\sin$ 里的式子 $\square\to0$++（$x\to\infty$ 时 $\frac2x\to0$ 也可以）`,
            R`++分子分母同乘 $\square$，凑出 $\dfrac{\sin\square}{\square}$++`,
            R`++$\tan\square=\dfrac{\sin\square}{\cos\square}$++；$1-\cos\square=2\sin^2\dfrac\square2$`,
            R`++剩下的部分用四则运算或抓大头++`
          ],
          refs: [
            { src: "习题全解 习题1-6 第1题 p28", text: R`$\lim\dfrac{\sin2x}{\sin5x}=\lim\left(\dfrac{\sin2x}{2x}\cdot\dfrac{5x}{\sin5x}\cdot\dfrac25\right)=\dfrac25$；$\lim\dfrac{1-\cos2x}{x\sin x}=\lim\dfrac{2\sin^2x}{x\sin x}=2$` },
            { src: "教材 p46 例2", text: R`$\lim\limits_{x\to0}\dfrac{1-\cos x}{x^2}=\lim\left(\dfrac{\sin^2x}{x^2}\cdot\dfrac1{1+\cos x}\right)=\dfrac12$` }
          ]
        },
        think: R`$x\to\infty$ 时 $\dfrac2x\to0$，$\sin\dfrac2x$ 是"$\sin$ 一个趋于 0 的量"，这是第一个重要极限 $\dfrac{\sin\square}{\square}\to1$ 的信号。把 $\sin\frac2x$ 凑成 $\dfrac{\sin\frac2x}{\frac2x}\cdot\dfrac2x$，剩下的部分是有理分式，抓大头即可。`,
        first: R`$x\to\infty$ 时 $\frac2x\to0$，凑 $\dfrac{\sin\frac2x}{\frac2x}$`,
        steps: [
          R`++凑形++：$\sin\dfrac2x=\dfrac{\sin\frac2x}{\frac2x}\cdot\dfrac2x$，所以原式 $=\lim\dfrac{3x^2+5}{5x+3}\cdot\dfrac2x\cdot\dfrac{\sin\frac2x}{\frac2x}$`,
          R`++重要极限++：令 $\square=\dfrac2x$，$x\to\infty$ 时 $\square\to0$，所以 $\dfrac{\sin\square}{\square}\to1$`,
          R`++有理部分++：$\dfrac{2(3x^2+5)}{x(5x+3)}=\dfrac{6x^2+10}{5x^2+3x}$，分子分母都是二次，极限是最高次系数之比 $\dfrac65$`,
          R`++由积的运算法则++（两个因子极限都存在），原式 $=\dfrac65\times1=\dfrac65$`
        ],
        pitfall: R`看到 $x\to\infty$ 就说 $\sin$ 这部分用不了重要极限——!!关键是 $\square\to0$，不是 $x\to0$!!；分母和 $\sin$ 里的式子不一致`,
        practice: "吉米【57】（p17）；教材习题1-6 第1题（p50，答案 习题全解 p28）；吉米【58】要用 $\ln(1+x)\sim x$，学完 1.7 再做"
      },
      {
        id: "t4", name: "第二个重要极限（1^∞ 型）",
        signal: R`==底数 $\to1$、指数 $\to\infty$ 的幂==，如 $(1+2x)^{\frac1x}$、$\left(\frac{x+a}{x-a}\right)^x$`,
        example: { q: R`设 $\lim\limits_{x\to\infty}\left(\dfrac{x+2a}{x-a}\right)^x=8$，求 $a$。`, src: "吉米【60】p17" },
        idea: {
          key: R`==把底数写成 $1+\square$（$\square\to0$）==，指数凑成 $\frac1\square\cdot(\square\cdot\text{原指数})$；或直接用 ==$\lim u^v=\mathrm e^{\lim v(u-1)}$==。`,
          how: [
            R`++确认是 $1^{\infty}$ 型++：底数 $\to1$，指数 $\to\infty$`,
            R`++底数减 $1$ 得 $\square=u-1$++`,
            R`++$u^v=\left[(1+\square)^{\frac1\square}\right]^{\square v}$，结果 $\mathrm e^{\lim\square v}$++`,
            R`++算出 $\lim(u-1)v$++（多半是抓大头）`
          ],
          refs: [
            { src: "30讲 第1讲 p62", text: R`如果 $\lim u^v$ 属于"$1^{\infty}$"型，则有一个重要且简单的计算方法：$\lim u^v=\mathrm e^{\lim(u-1)v}$` },
            { src: "习题全解 习题1-6 第2题 p28", text: R`$\lim\limits_{x\to0}(1+2x)^{\frac1x}=\lim\left[(1+2x)^{\frac1{2x}}\right]^2=\mathrm e^2$；$\lim\limits_{x\to\infty}\left(1-\frac1x\right)^{kx}=\mathrm e^{-k}$` }
          ]
        },
        think: R`$x\to\infty$ 时底数 $\dfrac{x+2a}{x-a}\to1$，指数 $x\to\infty$，是 $1^\infty$ 型，用第二个重要极限 $(1+\square)^{\frac1\square}\to\mathrm e$。做法是把底数写成 $1+\square$，再在指数上凑出 $\frac1\square$。`,
        first: R`底数 $\dfrac{x+2a}{x-a}=1+\dfrac{3a}{x-a}$`,
        steps: [
          R`++底数写成 $1+\square$++：$\dfrac{x+2a}{x-a}=1+\dfrac{(x+2a)-(x-a)}{x-a}=1+\dfrac{3a}{x-a}$，$\square=\dfrac{3a}{x-a}\to0$`,
          R`++指数凑 $\frac1\square$++：$\left(1+\dfrac{3a}{x-a}\right)^x=\left[\left(1+\dfrac{3a}{x-a}\right)^{\frac{x-a}{3a}}\right]^{\frac{3a}{x-a}\cdot x}$（指数相乘回到 $x$）`,
          R`++方括号是 $(1+\square)^{\frac1\square}\to\mathrm e$++；外指数 $\dfrac{3ax}{x-a}\to3a$（同除 $x$）。所以极限 $=\mathrm e^{3a}$（$a\neq0$；$a=0$ 时极限为 $1\neq8$）`,
          R`$\mathrm e^{3a}=8=2^3$，取对数 $3a=3\ln2$，==$a=\ln2$==`
        ],
        pitfall: R`!!把 $1^{\infty}$ 当成 $1$!!；凑 $\mathrm e$ 时!!指数没凑对（差一个常数倍）!!；对 $a=0$ 的情形没想（此时不是 $1^\infty$ 型，题目已排除）`,
        practice: "吉米【59】–【61】（p17–18）；教材习题1-6 第2题（p50，答案 习题全解 p28）；1000题 第2章第1题（要用 arctan 的差化积，卡住先看提示）"
      },
      {
        id: "t5", name: "极限中参数的确定",
        signal: R`$x\to\infty$ 时含 $ax+b$ 或高次差，已知极限为 0 或某常数，==求参数==`,
        example: { q: R`已知 $\lim\limits_{x\to\infty}\left(\dfrac{x^2}{x+1}-ax-b\right)=0$，其中 $a,b$ 是常数，求 $a,b$。`, src: "吉米【63】p18" },
        idea: {
          key: R`把式子整理成"$(\cdots)x+(\cdots)+\text{无穷小}$"，==$x$ 的系数必须为 0，常数项必须等于给定的极限==。`,
          how: [
            R`++通分或拆项++，把式子写成 $c_1x+c_0+\alpha(x)$，$\alpha\to0$`,
            R`++极限有限要求 $x$ 的系数 $c_1=0$++`,
            R`++再由常数项 $c_0$ 等于已知极限解出另一个参数++`,
            R`++含根号的先提出最高次++（吉米【65】）`
          ],
          refs: [
            { src: "吉米【63】p18", text: R`$\lim\left[\dfrac{1}{x+1}+(x-ax-1-b)\right]=\lim[(1-a)x-(1+b)]=0$，由于 $a,b$ 是常数，当且仅当 $1-a=0$，$1+b=0$ 时成立` },
            { src: "吉米【64】点评 p18", text: R`讨论极限的问题，首先要确定极限的类型……由此可确定参数的值` }
          ]
        },
        think: R`$x\to\infty$ 时式子由"$x$ 的一次项 + 常数 + 无穷小"组成。极限要等于 0，一次项系数必须为 0（否则趋于 $\infty$），常数项必须为 0。所以先把 $\dfrac{x^2}{x+1}$ 用多项式除法拆成"多项式 + 真分式"。`,
        first: R`拆：$\dfrac{x^2}{x+1}=x-1+\dfrac1{x+1}$`,
        steps: [
          R`++多项式除法++：$x^2=(x+1)(x-1)+1$，所以 $\dfrac{x^2}{x+1}=x-1+\dfrac{1}{x+1}$`,
          R`++整理++：原式 $=\lim\limits_{x\to\infty}\left[(1-a)x-(1+b)+\dfrac{1}{x+1}\right]$，其中 $\dfrac{1}{x+1}\to0$`,
          R`++一次项++：若 $1-a\neq0$，$(1-a)x\to\infty$，极限不可能是 0，所以 $a=1$`,
          R`++常数项++：$a=1$ 后极限是 $-(1+b)$，要等于 0，所以 $b=-1$`,
          R`++几何意义++：$y=x-1$ 是曲线 $y=\dfrac{x^2}{x+1}$ 的斜渐近线`
        ],
        pitfall: R`只令常数项为 0，!!忘了 $x$ 的系数也必须为 0!!`,
        practice: "吉米【62】【63】【65】（p18）；吉米【64】要用等价无穷小，学完 1.7 再做"
      },
      {
        id: "t6", name: "夹逼处理根式、取整函数",
        signal: R`含 $[\cdot]$ ==取整==、$\sqrt[n]{\cdots}$，常规方法算不了`,
        example: { q: R`证明：(1) $\lim\limits_{x\to0}\sqrt[n]{1+x}=1$；(2) $\lim\limits_{x\to0^+}x\left[\dfrac1x\right]=1$。`, src: "教材习题1-6 第4题(3)(4) p50" },
        idea: {
          key: R`==用基本不等式把式子夹住==：$1<\sqrt[n]{1+x}<1+x\ (x>0)$；$t-1<[t]\leqslant t$。`,
          how: [
            R`++取整++：用 $t-1<[t]\leqslant t$，再乘以前面的因子（注意因子的正负决定不等号方向）`,
            R`++根式++：与 $1$ 和底数本身比较；$x$ 的正负分开写`,
            R`++两边求极限，相同则夹出结果++`
          ],
          refs: [
            { src: "习题全解 习题1-6 第4题 p29", text: R`当 $x>0$ 时，$1-x<x\left[\dfrac1x\right]\leqslant1$，而两边极限都是 $1$，由夹逼准则得证` },
            { src: "30讲 例1.29 p59", text: R`对于 $[\infty]$，想到极限计算的利器——夹逼准则。根据 $x-1<[x]\leqslant x$……无论 $x>0$ 还是 $x<0$，不等式两边均可趋于同一极限` }
          ]
        },
        think: R`(1) 根式 $\sqrt[n]{1+x}$ 不好直接求极限，但它和 $1$、$1+x$ 有简单的大小关系，可以夹逼；注意 $x$ 正负时不等号方向不同，要分开。(2) 取整函数 $[t]$ 没有表达式，只能用它的基本不等式 $t-1<[t]\leqslant t$ 夹逼。`,
        first: R`(1) 分 $x>0$、$-1<x<0$；(2) 用 $\frac1x-1<\left[\frac1x\right]\leqslant\frac1x$`,
        steps: [
          R`++(1) $x>0$ 时++：$1<1+x$，开 $n$ 次方 $1<\sqrt[n]{1+x}$；又 $1+x<(1+x)^n$（$n\geqslant2$），所以 $\sqrt[n]{1+x}<1+x$。得 $1<\sqrt[n]{1+x}<1+x$`,
          R`++(1) $-1<x<0$ 时++：$0<1+x<1$，开方后反而变大但仍小于 1：$1+x<\sqrt[n]{1+x}<1$`,
          R`++(1) 两种情况两边都 $\to1$++（$x\to0$），由夹逼准则 $\lim\limits_{x\to0}\sqrt[n]{1+x}=1$`,
          R`++(2) 取整不等式++：$\dfrac1x-1<\left[\dfrac1x\right]\leqslant\dfrac1x$。$x>0$，两边乘 $x$ 不变号：$1-x<x\left[\dfrac1x\right]\leqslant1$`,
          R`++(2) $x\to0^+$ 时++ $1-x\to1$，由夹逼准则 $\lim\limits_{x\to0^+}x\left[\dfrac1x\right]=1$`
        ],
        pitfall: R`!!$x<0$ 时乘以 $x$ 忘了不等号反向!!（30讲 例1.29 里 $x<0$ 一侧方向是反的）`,
        practice: "教材习题1-6 第4题（p50，答案 习题全解 p29）；30讲 例1.29（p59）"
      },
      {
        id: "t7", name: "n 次方根的和：极限等于最大项", tag: "研",
        signal: R`$\lim\limits_{n\to\infty}\sqrt[n]{a_1^n+a_2^n+\cdots+a_m^n}$，或含参数 $x$ 的同类式子`,
        example: { q: R`当 $0\leqslant x\leqslant\dfrac{\pi}{2}$ 时，求 $\lim\limits_{n\to\infty}\sqrt[n]{\sin^nx+\cos^nx}$。`, src: "1000题 第2章第5题；30讲 例2.10 p88" },
        idea: {
          key: R`==记最大项为 $a$==，则 $a\leqslant\sqrt[n]{\cdots}\leqslant a\cdot m^{\frac1n}$，$m^{\frac1n}\to1$，==极限就是最大项==。`,
          how: [
            R`++找出各项底数中最大的++ $a=\max\{a_i\}$（含参数时分段比较）`,
            R`++下界：只留最大的一项；上界：每一项都换成最大的++`,
            R`++$m^{\frac1n}\to1$，夹出 $a$++`
          ],
          refs: [
            { src: "30讲 例2.10 p88", text: R`$\lim\limits_{n\to\infty}\sqrt[n]{a_1^n+a_2^n+\cdots+a_m^n}=\max\{a_1,a_2,\cdots,a_m\}$。这是一个结论，应当记住` },
            { src: "30讲 例2.10 注 p88", text: R`当 $0\leqslant x\leqslant\frac{\pi}{2}$ 时，$\lim\sqrt[n]{\sin^nx+\cos^nx}=\cos x\ \left(0\leqslant x\leqslant\frac{\pi}{4}\right)$，$\sin x\ \left(\frac{\pi}{4}<x\leqslant\frac{\pi}{2}\right)$` }
          ]
        },
        think: R`$\sqrt[n]{a^n+b^n}$（$a,b\geqslant0$）的极限是较大的那个数，因为开 $n$ 次方后最大项占主导：$\max\leqslant\sqrt[n]{\cdots}\leqslant\max\cdot2^{\frac1n}$，而 $2^{\frac1n}\to1$。这里 $a=\sin x$、$b=\cos x$，谁大取决于 $x$ 和 $\frac{\pi}{4}$ 的关系，所以分段。`,
        first: R`比较 $\sin x$ 和 $\cos x$ 谁大：分界点 $x=\dfrac{\pi}{4}$`,
        steps: [
          R`++比大小++：在 $\left[0,\dfrac{\pi}{2}\right]$ 上 $\sin x$、$\cos x\geqslant0$；$x\leqslant\dfrac{\pi}{4}$ 时 $\cos x\geqslant\sin x$，$x>\dfrac{\pi}{4}$ 时 $\sin x>\cos x$`,
          R`++$0\leqslant x\leqslant\dfrac{\pi}{4}$++：$\cos^nx\leqslant\sin^nx+\cos^nx\leqslant2\cos^nx$，开 $n$ 次方 $\cos x\leqslant\sqrt[n]{\sin^nx+\cos^nx}\leqslant2^{\frac1n}\cos x$`,
          R`++$2^{\frac1n}\to1$++，两边都 $\to\cos x$，由夹逼准则极限为 $\cos x$`,
          R`++$\dfrac{\pi}{4}<x\leqslant\dfrac{\pi}{2}$++：同理 $\sin x\leqslant\sqrt[n]{\cdots}\leqslant2^{\frac1n}\sin x$，极限为 $\sin x$`,
          R`合起来：==极限 $=\max\{\sin x,\cos x\}$==`
        ],
        pitfall: R`把 $\sqrt[n]{a^n+b^n}$ !!拆成 $a+b$!!；!!忘记 $m^{\frac1n}\to1$ 这一步!!`,
        practice: "30讲 例2.10（p88）；1000题 第2章第5、6题"
      },
      {
        id: "t8", name: "由 f 的单调性判断递推数列的单调性", tag: "研",
        signal: R`$x_{n+1}=f(x_n)$，==只告诉 $f$ 的单调性和 $x_1,x_2$ 的大小==，问数列是否单调`,
        example: { q: R`设 $x_{n+1}=f(x_n)$，则正确的是（ ）。① $f$ 单调增加且 $x_1<x_2$，则 $\{x_n\}$ 单调增加；② $f$ 单调增加且 $x_1>x_2$，则 $\{x_n\}$ 单调减少；③ $f$ 单调减少且 $x_1<x_2$，则 $\{x_n\}$ 单调增加；④ $f$ 单调减少且 $x_1>x_2$，则 $\{x_n\}$ 单调减少。(A) ①② (B) ①③ (C) ②③ (D) ②④`, src: "30讲 例2.13 p91" },
        idea: {
          key: R`==$f$ 增：保持 $x_1,x_2$ 的大小关系一路传下去，数列单调==；==$f$ 减：每传一次大小关系反一次，数列摆动==。`,
          how: [
            R`++$f$ 单调增加++：$x_1<x_2\Rightarrow f(x_1)<f(x_2)$，即 $x_2<x_3$，归纳得单调增加`,
            R`++$f$ 单调减少++：$x_1<x_2\Rightarrow x_2>x_3$，下一步又反过来，数列不单调`,
            R`++单调的方向由 $x_1$ 与 $x_2$ 的大小决定++`
          ],
          refs: [
            { src: "30讲 第2讲 p90", text: R`若 $f'(x)>0$，则数列单调，且当 $x_2>x_1$ 时单调增加，当 $x_2<x_1$ 时单调减少；若 $f'(x)<0$，则数列不单调` },
            { src: "30讲 例2.13 p91", text: R`对于③，……依次类推，便知数列 $\{x_n\}$ 是摆动的，不单调` }
          ]
        },
        think: R`$x_{n+1}=f(x_n)$ 意味着相邻两项的大小关系会经过 $f$ 传给下一对：$f$ 增时保持方向，$f$ 减时反转方向。所以从 $x_1,x_2$ 的关系出发，把它代进 $f$ 往下传一两步就能看出整体规律。`,
        first: R`对 $f$ 增、$f$ 减分别把大小关系往下传两步`,
        steps: [
          R`++① $f$ 增、$x_1<x_2$++：两边作用 $f$ 不改变方向，$f(x_1)<f(x_2)$，即 $x_2<x_3$；归纳：$x_n<x_{n+1}\Rightarrow x_{n+1}<x_{n+2}$，单调增加，正确`,
          R`++② $f$ 增、$x_1>x_2$++：同理 $x_2=f(x_1)>f(x_2)=x_3$，依次传下去，单调减少，正确`,
          R`++③ $f$ 减、$x_1<x_2$++：作用 $f$ 后方向反转，$x_2=f(x_1)>f(x_2)=x_3$。于是 $x_1<x_2>x_3$，数列先增后减，不单调，错误`,
          R`++④ 同理++，$x_1>x_2$ 推出 $x_2<x_3$，也是摆动，错误`,
          R`==选 (A)==。$f$ 减时奇数项、偶数项各自单调，方向相反`
        ],
        pitfall: R`!!以为 $f$ 减少时数列就减少!!`,
        practice: R`30讲 例2.13（p91）；第三章学了导数后，用 $f'>0$ 判断更方便`
      }
    ],

    pitfalls: [
      { id: "e2", wrong: R`$n$ 项和每项 $\to0$，和就 $\to0$`, why: R`无穷多个无穷小的和不一定是无穷小`, right: R`先求和或夹逼（吉米【52】点评）`, test: R`$\dfrac{n}{n^2+1}+\cdots+\dfrac{n}{n^2+n}$ 的极限？`, ans: R`$1$：夹在 $\dfrac{n^2}{n^2+n}$ 与 $\dfrac{n^2}{n^2+1}$ 之间`, link: "题型 1" },
      { id: "e8", wrong: R`$(1+x)^{\frac1x}\to\mathrm e$ 对任何过程都成立`, why: R`要求 $x\to0$`, right: R`标准形式是"$\square\to0$，指数 $\frac1\square$"`, test: R`$\lim\limits_{x\to\infty}(1+x)^{\frac1x}$ 是 $\mathrm e$ 吗？`, ans: R`不是，这是 $\infty^0$ 型，结果为 $1$（要用 1.9 的方法：$\mathrm e^{\frac{\ln(1+x)}{x}}\to\mathrm e^0$）`, link: "知识点 第二个重要极限" },
      { id: "e9", wrong: R`没证存在，直接对递推式取极限`, why: R`极限不存在时解出的"$a$"没有意义`, right: R`先证单调有界（习题全解 p30 注）`, test: R`$x_1=2$，$x_{n+1}=-x_n$，直接取极限得 $a=-a$，$a=0$，对吗？`, ans: R`不对，$x_n=2,-2,2,\cdots$ 发散`, link: "题型 2" },
      { id: "e10", wrong: R`解 $a=f(a)$ 得到两个根，都写上`, why: R`极限唯一`, right: R`用数列的范围（如 $x_n>0$）舍根`, test: R`$x_{n+1}=\sqrt{2+x_n}$ 得 $a^2-a-2=0$，答案写什么？`, ans: R`$a=2$（$a=-1$ 舍去，因 $x_n>0$）`, link: "题型 2" },
      { id: "e13", wrong: R`$f$ 单调减少，所以 $x_{n+1}=f(x_n)$ 单调减少`, why: R`$f$ 减时大小关系每步反转`, right: R`$f$ 增才能保证数列单调（30讲 p90–91）`, test: R`$f(x)=-x+1$，$x_1=0$，数列是什么？`, ans: R`$0,1,0,1,\cdots$，不单调`, link: "题型 8" },
      { id: "e14", wrong: R`取整题 $x<0$ 时乘以 $x$ 不等号不变`, why: R`乘负数不等号反向`, right: R`$x<0$ 时 $10-x>x\left[\frac{10}{x}\right]\geqslant10$（30讲 p59）`, test: R`$\lim\limits_{x\to0}x\left[\dfrac{10}{x}\right]=$？`, ans: R`$10$`, link: "题型 6" },
      { id: "e15", wrong: R`$\sqrt[n]{a^n+b^n}=a+b$`, why: R`开方不能对和逐项开`, right: R`结果是 $\max\{a,b\}$（30讲 例2.10 p88）`, test: R`$\lim\limits_{n\to\infty}\sqrt[n]{2^n+3^n}=$？`, ans: R`$3$`, link: "题型 7" },
      { id: "e16", wrong: R`$\lim(ax+b+\alpha)=0$ 只需常数项为 0`, why: R`$x$ 的系数不为 0 时整体趋于 $\infty$`, right: R`$x$ 的系数和常数项都要为 0（吉米【63】p18）`, test: R`$\lim\limits_{x\to\infty}\left(\dfrac{x^2}{x+1}-ax-b\right)=0$，$a,b$？`, ans: R`$a=1$，$b=-1$`, link: "题型 5" },
      { id: "e17", wrong: R`$\dfrac{\sin\square}{\square}\to1$ 不管 $\square$ 是否为 $0$`, why: R`$\square=0$ 时分式无意义`, right: R`要求 $\square\to0$ 且 $\square\neq0$`, test: R`$\lim\limits_{x\to0}\dfrac{\sin\left(x\sin\frac1x\right)}{x\sin\frac1x}$ 能直接写 $1$ 吗？`, ans: R`不能：$x\sin\frac1x$ 在 $x=\frac1{k\pi}$ 处为 $0$，函数在 $0$ 的任何去心邻域内都有无定义的点`, link: "知识点 第一个重要极限" }
    ]
  });
})();
