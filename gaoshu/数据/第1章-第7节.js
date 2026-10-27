/*
类型: 题型
标题: 高等数学 第1章 第7节 无穷小的比较 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-19
更新日期: 2026-10-19
状态: 完成

页码一律是印刷页。教材 = 同济第八版上册；30讲 = 张宇基础30讲·高数分册；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；
习题全解 = 同济第八版上册习题全解指导；1000题 = 张宇1000题基础篇（只引题号）。
注意：$\ln(1+x)\sim x$、$\mathrm e^x-1\sim x$、$(1+x)^\alpha-1\sim\alpha x$ 教材放在 1.9（p63）证明；这里一起列出，供复习整章时直接用。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "1.7",
    chapter: 1,
    title: "无穷小的比较",
    pages: "教材 p50–54",
    sources: ["教材 第一章第七节 p50–54；常用等价补充见 1.9 p63", "习题全解 习题1-7 p30–32", "30讲 第1讲 p43–45", "吉米 第1章【66】–【77】p19–21", "1000题 第1章 9 题"],
    updated: "2026-10-19",

    framework: {
      main: R`两个无穷小谁趋于 0 更快，看它们比值的极限：0 是高阶，$\infty$ 是低阶，非零常数是同阶，1 是等价。等价无穷小可以在乘除的因子里互相替换，用来化简 $\frac00$ 型极限；加减里的项不能直接换，要先变成乘积。`,
      nodes: [
        { id: "RAT", go: "p2", col: 0, row: 0, kind: "map", label: "比值的极限", sub: R`$\lim\frac{\beta}{\alpha}$，同一过程` },
        { id: "ORD", go: "p1", col: 1, row: 0, kind: "func", label: "高阶 · 同阶 · k 阶", sub: R`$0$ / 非零常数 / 比 $\alpha^k$` },
        { id: "EQ", go: "p8", col: 2, row: 0, kind: "func", label: "等价无穷小", sub: R`比值极限为 $1$，记 $\alpha\sim\beta$` },
        { id: "LIST", go: "p4", col: 0, row: 1, kind: "build", label: "常用等价", sub: R`$\sin x\sim x$，$1-\cos x\sim\frac{x^2}{2}$…` },
        { id: "SUB", go: "p7", col: 1, row: 1, kind: "prop", label: "替换定理", sub: "乘除的因子可以换" },
        { id: "T1", go: "p6", col: 2, row: 1, kind: "prop", label: R`$\beta=\alpha+o(\alpha)$`, sub: "等价的充要条件" },
        { id: "NO", go: "t4", col: 1, row: 2, kind: "build", label: "加减不能直接换", sub: "先提公因式、通分变乘积" }
      ],
      edges: [
        { from: "RAT", to: "ORD", label: "看比值" },
        { from: "ORD", to: "EQ", label: R`$c=1$` },
        { from: "EQ", to: "T1", label: "⇔" },
        { from: "EQ", to: "SUB", label: "用来化简" },
        { from: "LIST", to: "SUB", label: "拿来替换" },
        { from: "SUB", to: "NO", label: "只换因子" }
      ],
      keys: [
        { q: R`无穷小的比较看什么？什么情况下没法比较？`, a: R`看同一变化过程中两个无穷小之比的极限（教材 p51）。比值的极限不存在也不是 $\infty$ 时无法比较，如 $x\to0$ 时 $x\sin\frac1x$ 与 $x^2$（30讲 p43）。` },
        { q: R`等价无穷小的充要条件是什么？`, a: R`$\beta\sim\alpha\Leftrightarrow\beta=\alpha+o(\alpha)$（教材 p52 定理1）。例：$\sin x=x+o(x)$，$1-\cos x=\frac12x^2+o(x^2)$。` },
        { q: R`等价无穷小替换在哪里能用，哪里不能用？`, a: R`分子或分母的乘除因子可以整体替换；分子分母中的加减项不能直接替换（教材 p52–53 定理2；习题全解 习题1-7 第5题注 p31）。` },
        { q: R`$x\to0$ 时有哪些常用等价无穷小？`, a: R`$\sin x,\tan x,\arcsin x,\arctan x,\ln(1+x),\mathrm e^x-1\sim x$；$1-\cos x\sim\frac12x^2$；$(1+x)^\alpha-1\sim\alpha x$；$a^x-1\sim x\ln a$（教材 p51–53、p63；30讲 p44）。` }
      ]
    },

    points: [
      {
        group: "一、无穷小的比较",
        items: [
          {
            id: "p1", kind: "定义", name: "高阶、低阶、同阶、k 阶、等价", page: "教材 p51",
            body: R`设 $\alpha,\beta$ 是同一过程中的无穷小，$\alpha\neq0$。==$\lim\dfrac\beta\alpha=0$：$\beta$ 是比 $\alpha$ 高阶的无穷小，$\beta=o(\alpha)$==；$=\infty$：低阶；$=c\neq0$：同阶；$\lim\dfrac{\beta}{\alpha^k}=c\neq0\ (k>0)$：$\beta$ 是关于 $\alpha$ 的 $k$ 阶无穷小；$=1$：等价，$\alpha\sim\beta$。`,
            notes: [R`等价是同阶的特殊情形（$c=1$）`, R`例：$x\to0$ 时 $1-\cos x$ 是关于 $x$ 的二阶无穷小；$x\to3$ 时 $x^2-9$ 与 $x-3$ 同阶（教材 p51）`],
            quiz: R`$x\to0$ 时 $x^2-x^3$ 与 $2x-x^2$ 谁是高阶无穷小？`
          },
          {
            id: "p2", kind: "结论", name: "比值没有极限时无法比较", page: "30讲 p43",
            body: R`若 $\dfrac\beta\alpha$ 的极限不存在、也不是 $\infty$，==两者不能比较阶数==。例：$x\to0$ 时 $\dfrac{x\sin\frac1x}{x^2}=\dfrac1x\sin\dfrac1x$ 没有极限，$x\sin\dfrac1x$ 与 $x^2$ 不能比较。`,
            notes: [R`所以"任意两个无穷小都能比出高低"是错的`],
            quiz: R`$x\to0$ 时，$x\sin\dfrac1x$ 与 $x$ 能比较吗？`
          },
          {
            id: "p3", kind: "结论", name: "o 记号", page: "教材 p51；1000题 第1章第9题",
            body: R`$\beta=o(\alpha)$ ==只表示 $\lim\dfrac\beta\alpha=0$，不是一个具体的函数==；==等号不能反过来读==。`,
            notes: [R`常用：$o(\alpha)\cdot$ 有界量 $=o(\alpha)$；$f=o(g)$ 时 $fg=o(g^2)$（1000题 第1章第9题）`, R`$o(x^2)$ 一定是 $o(x)$，反过来不对`],
            quiz: R`$x^3=o(x)$ 对吗？$o(x)=x^3$ 这样写有意义吗？`
          }
        ]
      },
      {
        group: "二、等价无穷小",
        items: [
          {
            id: "p4", kind: "公式", name: "常用等价无穷小（x→0）", page: "教材 p51–53、p63；习题1-7 第4题；30讲 p44",
            body: R`$\sin x\sim x$，$\tan x\sim x$，$\arcsin x\sim x$，$\arctan x\sim x$，$\ln(1+x)\sim x$，$\mathrm e^x-1\sim x$，$a^x-1\sim x\ln a$，==$1-\cos x\sim\dfrac12x^2$==，==$(1+x)^\alpha-1\sim\alpha x$==，$\sqrt[n]{1+x}-1\sim\dfrac1nx$。`,
            notes: [R`$\sqrt[n]{1+x}-1\sim\frac xn$ 是教材例 1（p52）；$\arctan x\sim x$、$\sec x-1\sim\frac{x^2}2$ 是习题1-7 第4题（习题全解 p30–31）`, R`$\ln(1+x)$、$\mathrm e^x-1$、$(1+x)^\alpha-1$ 在 1.9 证明（教材 p63）`, R`$1-\cos x$ 是表里唯一的二次（30讲 p44）`],
            quiz: R`$x\to0$ 时 $\sqrt{1+x^2}-1$ 等价于什么？`
          },
          {
            id: "p5", kind: "结论", name: "广义化：把 x 换成趋于 0 的式子", page: "30讲 p44",
            body: R`上面的 ==$x$ 可以换成任何趋于 $0$ 的函数 $\square$==：$\square\to0$ 时 $\sin\square\sim\square$，$\ln(1+\square)\sim\square$，$1-\cos\square\sim\dfrac12\square^2$，…`,
            notes: [R`例：$x\to1$ 时 $\ln x=\ln[1+(x-1)]\sim x-1$（30讲 p59）`, R`换之前一定要确认 $\square\to0$：$x\to\infty$ 时 $\sin x\not\sim x$`],
            quiz: R`$x\to\infty$ 时 $\sin\dfrac{2x}{x^2+1}$ 等价于什么？`
          },
          {
            id: "p6", kind: "定理", name: "定理 1：等价的充要条件", page: "教材 p52",
            body: R`$\beta$ 与 $\alpha$ 是等价无穷小 $\Leftrightarrow$ ==$\beta=\alpha+o(\alpha)$==。`,
            notes: [R`例 2：$\sin x=x+o(x)$，$1-\cos x=\frac12x^2+o(x^2)$（教材 p52）`, R`意思是：等价无穷小只差一个更高阶的量，主要部分相同`],
            quiz: R`$\tan x=x+o(x)$ 说明了什么？`
          },
          {
            id: "p7", kind: "定理", name: "定理 2：等价无穷小替换", page: "教材 p52–53",
            body: R`设 $\alpha\sim\tilde\alpha$，$\beta\sim\tilde\beta$，且 ==$\lim\dfrac{\tilde\beta}{\tilde\alpha}$ 存在==，则 ==$\lim\dfrac\beta\alpha=\lim\dfrac{\tilde\beta}{\tilde\alpha}$==。`,
            notes: [R`求两个无穷小之比的极限时，分子分母都可以用等价无穷小代替（教材 p53）`, R`只对乘除中的因子成立；加减中的项不能直接换（习题全解 p31 注）`, R`无穷小与它本身等价：$x^3+3x$ 不必换（教材 例4 p53）`],
            quiz: R`$\lim\limits_{x\to0}\dfrac{\tan x-\sin x}{x^3}$，把 $\tan x$、$\sin x$ 都换成 $x$ 得 $0$，错在哪？`
          },
          {
            id: "p8", kind: "结论", name: "等价关系的性质", page: "习题1-7 第6题（习题全解 p32）",
            body: R`==自反==：$\alpha\sim\alpha$；==对称==：$\alpha\sim\beta\Rightarrow\beta\sim\alpha$；==传递==：$\alpha\sim\beta,\beta\sim\gamma\Rightarrow\alpha\sim\gamma$。`,
            notes: [R`传递性让我们可以连续替换：$\ln(1+\sin x)\sim\sin x\sim x$`],
            quiz: R`$x\to0$ 时 $\ln(1+\tan x)$ 等价于什么？用了哪条性质？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "确定无穷小的阶（与 xⁿ 同阶求 n）",
        signal: R`"当 $x\to0$ 时，$\cdots$ 与 $x^n$ 是==同阶无穷小，则 $n=$=="；或比较几个无穷小谁阶最高`,
        example: { q: R`设 $x\to0$ 时，$\mathrm e^{x\cos x^2}-\mathrm e^x$ 与 $x^n$ 是同阶无穷小，则 $n$ 为（ ）。(A) 5　(B) 4　(C) $\frac52$　(D) 2`, src: "吉米【68】p19–20" },
        idea: {
          key: R`==把式子一步步换成等价的幂函数 $cx^k$，$k$ 就是阶数==；两个指数函数相减先==提公因式变成 $\mathrm e^{\square}-1$==。`,
          how: [
            R`++差的形式先变成积++：$\mathrm e^A-\mathrm e^B=\mathrm e^B(\mathrm e^{A-B}-1)$；$\tan x-\sin x=\tan x(1-\cos x)$`,
            R`++极限非零的因子（如 $\mathrm e^B\to1$）不影响阶数，直接去掉++`,
            R`++用等价无穷小逐层替换，化成 $cx^k$++`,
            R`++与 $x^n$ 同阶即 $n=k$++`
          ],
          refs: [
            { src: "30讲 例1.19 方法总结 p45", text: R`$\mathrm e^{\tan x}-\mathrm e^{\sin x}$，通常要提公因式出现 $\mathrm e^{\square}-1$ 的形式；当 $x\to0$ 时，$\tan x-\sin x=\tan x(1-\cos x)\sim\frac12x^3$` },
            { src: "吉米【68】p19", text: R`$\mathrm e^{x\cos x^2}-\mathrm e^x=\mathrm e^x[\mathrm e^{x(\cos x^2-1)}-1]$，当 $x\to0$ 时，$\mathrm e^{x(\cos x^2-1)}-1\sim x(\cos x^2-1)\sim x\left(-\frac{x^4}{2}\right)$` }
          ]
        },
        think: R`求阶数，就是把式子一步步换成等价的 $cx^k$。两个指数函数相减不能直接代换，先提公因式 $\mathrm e^x$，把差变成"$\mathrm e^{\square}-1$"的形式，才能用 $\mathrm e^\square-1\sim\square$；里面的 $\cos x^2-1$ 再用 $1-\cos\square\sim\frac{\square^2}{2}$。`,
        first: R`提公因式：$\mathrm e^x\left[\mathrm e^{x(\cos x^2-1)}-1\right]$`,
        steps: [
          R`++提公因式++：$\mathrm e^{x\cos x^2}-\mathrm e^x=\mathrm e^x\left[\mathrm e^{x\cos x^2-x}-1\right]=\mathrm e^x\left[\mathrm e^{x(\cos x^2-1)}-1\right]$`,
          R`++$\mathrm e^x\to1$，是极限非零的因子++，不影响阶数，可以直接换成 1`,
          R`++令 $\square=x(\cos x^2-1)$++，$x\to0$ 时 $\square\to0$，所以 $\mathrm e^\square-1\sim\square=x(\cos x^2-1)$`,
          R`++$1-\cos\square\sim\dfrac{\square^2}{2}$，这里 $\square=x^2$++：$\cos x^2-1\sim-\dfrac{(x^2)^2}{2}=-\dfrac{x^4}{2}$`,
          R`++整体 $\sim x\cdot\left(-\dfrac{x^4}{2}\right)=-\dfrac{x^5}{2}$++，与 $x^5$ 同阶，$n=5$，选 (A)`
        ],
        pitfall: R`!!$1-\cos x^2$ 写成 $\frac12x^2$（应为 $\frac12(x^2)^2$）!!；两个指数直接相减当成 $x\cos x^2-x$ 而!!不提公因式!!`,
        practice: "吉米【66】–【69】（p19–20）；30讲 例1.19（p45）；1000题 第1章第5、7题"
      },
      {
        id: "t2", name: "由等价、同阶关系反求参数",
        signal: R`"若 $x\to0$ 时 $f(x)$ 与 $g(x)$ ==是等价无穷小，则 $a=$=="`,
        example: { q: R`若 $x\to0$ 时，$(1-ax^2)^{\frac14}-1$ 与 $x\sin x$ 是等价无穷小，则 $a=$ ____。`, src: "吉米【67】p19" },
        idea: {
          key: R`==两边分别换成等价的 $cx^k$，等价就要求次数相同、系数相等==。`,
          how: [
            R`++把每个无穷小换成最简的等价形式 $cx^k$++`,
            R`++等价：比值极限为 $1$，列出系数方程；同阶：只要次数相同++`,
            R`++解方程求参数++`
          ],
          refs: [
            { src: "吉米【67】p19", text: R`当 $x\to0$ 时，$(1-ax^2)^{\frac14}-1\sim-\frac14ax^2$，$x\sin x\sim x^2$，于是 $\lim\dfrac{-\frac14ax^2}{x^2}=-\frac14a=1$，所以 $a=-4$` },
            { src: "教材 例1 p52", text: R`当 $x\to0$ 时，$\sqrt[n]{1+x}-1\sim\frac1nx$` }
          ]
        },
        think: R`等价无穷小意味着两者之比的极限是 1。左边是"$(1+\square)^\alpha-1$"型（$\square=-ax^2$，$\alpha=\frac14$），用 $(1+\square)^\alpha-1\sim\alpha\square$；右边 $x\sin x\sim x^2$。两边都化成 $cx^2$，比较系数得 $a$。`,
        first: R`$(1-ax^2)^{\frac14}-1\sim\dfrac14(-ax^2)$（$\sqrt[4]{1+\square}-1\sim\frac\square4$，$\square=-ax^2$）`,
        steps: [
          R`++左边++：$\square=-ax^2\to0$，$(1+\square)^{\frac14}-1\sim\dfrac14\square=-\dfrac{a}{4}x^2$`,
          R`++右边++：$\sin x\sim x$，所以 $x\sin x\sim x^2$`,
          R`++等价要求比值 $\to1$++：$\lim\dfrac{-\frac a4x^2}{x^2}=-\dfrac a4=1$`,
          R`++$a=-4$。检验++：$a=-4$ 时左边是 $(1+4x^2)^{\frac14}-1\sim x^2$，与 $x\sin x\sim x^2$ 等价`
        ],
        pitfall: R`!!忘了 $\square=-ax^2$ 里的负号!!；!!把等价当成同阶，只比次数不比系数!!`,
        practice: "吉米【67】（p19）；30讲 例1.21（p46–47，先用 1.5 的结论定 $a$，再用等价求 $b$）"
      },
      {
        id: "t3", name: "等价无穷小代换求极限",
        signal: R`$\frac00$ 型，==分子分母是乘积形式==，因子里有 $\sin\square$、$1-\cos\square$、$\ln(1+\square)$、根式减 1`,
        example: { q: R`求 $\lim\limits_{x\to0^+}\dfrac{1-\sqrt{\cos x}}{x(1-\cos\sqrt x)}$。`, src: "吉米【73】p20" },
        idea: {
          key: R`==把分子分母里的每个乘除因子换成最简的等价无穷小==；==根式差先有理化变成乘积==。`,
          how: [
            R`++分子分母分别写成乘积，找出趋于 0 的因子++`,
            R`++根式差++：$1-\sqrt{u}=\dfrac{1-u}{1+\sqrt u}$；或用 $(1+\square)^\alpha-1\sim\alpha\square$`,
            R`++每个因子换成等价的 $cx^k$，极限非零的因子先求出来++`,
            R`++约分得结果++`
          ],
          refs: [
            { src: "教材 定理2 后 p53", text: R`求两个无穷小之比的极限时，分子及分母都可用等价无穷小来代替。因此，如果用来代替的无穷小选得适当的话，就可以使计算简化` },
            { src: "吉米【73】p20", text: R`原式 $=\lim\dfrac{1-\cos x}{x(1-\cos\sqrt x)(1+\sqrt{\cos x})}=\lim\dfrac{\frac12x^2}{x\cdot\frac12x\cdot(1+\sqrt{\cos x})}=\dfrac12$` }
          ]
        },
        think: R`分子分母都是乘积形式，适合等价代换。但分子 $1-\sqrt{\cos x}$ 不是标准形式（不是 $1-\cos\square$），先有理化把它变成 $\dfrac{1-\cos x}{1+\sqrt{\cos x}}$；分母里 $1-\cos\sqrt x$ 是标准的 $1-\cos\square$，$\square=\sqrt x$。`,
        first: R`分子有理化：$1-\sqrt{\cos x}=\dfrac{1-\cos x}{1+\sqrt{\cos x}}$`,
        steps: [
          R`++分子有理化++：$1-\sqrt{\cos x}=\dfrac{(1-\sqrt{\cos x})(1+\sqrt{\cos x})}{1+\sqrt{\cos x}}=\dfrac{1-\cos x}{1+\sqrt{\cos x}}$`,
          R`++非零因子先求++：$1+\sqrt{\cos x}\to2$`,
          R`++等价代换++：$1-\cos x\sim\dfrac12x^2$；$1-\cos\sqrt x\sim\dfrac12(\sqrt x)^2=\dfrac12x$（$x\to0^+$，$\sqrt x\to0$）`,
          R`++代入++：原式 $=\lim\dfrac{\frac12x^2}{2\cdot x\cdot\frac12x}=\lim\dfrac{\frac12x^2}{x^2}=\dfrac12$`
        ],
        pitfall: R`!!$1-\cos\sqrt x$ 写成 $\frac12x^2$（应为 $\frac12(\sqrt x)^2$）!!；!!在有加减的地方直接替换!!`,
        practice: "教材例3–5（p53）；习题1-7 第5题(1)(2)（p54，答案 习题全解 p31）；吉米【70】【71】【73】【74】（p20）"
      },
      {
        id: "t4", name: "分子是加减：先变成乘积再代换",
        signal: R`==分子（或分母）是两项相减==，如 $\tan x-\sin x$、$\sin x-\tan x$，每项都等价于 $x$`,
        example: { q: R`求：(1) $\lim\limits_{x\to0}\dfrac{\tan x-\sin x}{\sin^3x}$；(2) $\lim\limits_{x\to0}\dfrac{\sin x-\tan x}{(\sqrt[3]{1+x^2}-1)(\sqrt{1+\sin x}-1)}$。`, src: "教材习题1-7 第5题(3)(4) p54" },
        idea: {
          key: R`==加减项不能各自替换==（会把主要部分抵消掉）；==先提公因式、通分或用三角恒等式把差变成积，再对因子替换==。`,
          how: [
            R`++检查分子是不是"几项的和差"++；若各项等价于同一个量，直接换会得到 0，必错`,
            R`++提公因式++：$\tan x-\sin x=\tan x(1-\cos x)$，$\sin x-\tan x=\sin x(1-\sec x)$`,
            R`++变成乘积后，每个因子再用等价替换++`
          ],
          refs: [
            { src: "习题全解 习题1-7 第5题注 p31", text: R`在作等价无穷小的替换求极限时，可以对分子或分母中的一个或若干个因子作替换，但不能对分子或分母中的某个加项作替换。例如，本题中若将分子中的 $\tan x,\sin x$ 均换成 $x$，那么分子成为 0，得出极限为 0，这就导致错误的结果` },
            { src: "30讲 例1.19 公式 p45", text: R`当 $x\to0$ 时，$\tan x-\sin x=\tan x(1-\cos x)\sim\frac12x^3$` }
          ]
        },
        think: R`等价代换只能用于乘除因子，不能对加减中的某一项单独代换：$\tan x-\sin x$ 如果直接换成 $x-x=0$ 就错了。所以先把差变成乘积：提公因式 $\sin x$，剩下 $\sec x-1=\dfrac{1-\cos x}{\cos x}$ 就能代换了。`,
        first: R`(1) 分子提出 $\sin x$：$\tan x-\sin x=\sin x(\sec x-1)$，约去一个 $\sin x$ 得 $\dfrac{\sec x-1}{\sin^2x}$`,
        steps: [
          R`++(1) 变乘积++：$\tan x-\sin x=\sin x\left(\dfrac{1}{\cos x}-1\right)=\sin x\cdot\dfrac{1-\cos x}{\cos x}$`,
          R`++(1) 约去一个 $\sin x$++：原式 $=\lim\dfrac{1-\cos x}{\cos x\cdot\sin^2x}$；$\cos x\to1$，$1-\cos x\sim\dfrac{x^2}{2}$，$\sin^2x\sim x^2$，极限 $\dfrac12$`,
          R`++(2) 分子同样变乘积++：$\sin x-\tan x=-\sin x\cdot\dfrac{1-\cos x}{\cos x}\sim-x\cdot\dfrac{x^2}{2}=-\dfrac{x^3}{2}$`,
          R`++(2) 分母两个因子++：$\sqrt[3]{1+x^2}-1\sim\dfrac13x^2$；$\sqrt{1+\sin x}-1\sim\dfrac12\sin x\sim\dfrac12x$。所以分母 $\sim\dfrac16x^3$`,
          R`++(2) 原式++ $=\lim\dfrac{-\frac12x^3}{\frac16x^3}=-3$`
        ],
        pitfall: R`!!把 $\tan x$、$\sin x$ 都换成 $x$，分子变成 $0$!!，得到错误答案 $0$`,
        practice: "教材习题1-7 第5题(3)(4)（p54，答案 习题全解 p31）"
      },
      {
        id: "t5", name: "幂指函数 1^∞ 型（配合等价无穷小）",
        signal: R`$u(x)^{v(x)}$，==$u\to1$，$v\to\infty$==`,
        example: { q: R`求 $\lim\limits_{x\to0}(1+3x)^{\frac{2}{\sin x}}$。`, src: "吉米【72】p20" },
        idea: {
          key: R`==$\lim u^v=\mathrm e^{\lim v(u-1)}$==；==指数部分 $v(u-1)$ 用等价无穷小化简==。`,
          how: [
            R`++确认 $1^{\infty}$ 型++`,
            R`++写成 $\mathrm e^{\lim v(u-1)}$++（或取对数 $\mathrm e^{\lim v\ln u}$，再用 $\ln u=\ln[1+(u-1)]\sim u-1$）`,
            R`++指数里的乘除因子用等价替换++`,
            R`++整个结果带上 $\mathrm e$++`
          ],
          refs: [
            { src: "30讲 p62", text: R`如果 $\lim u^v$ 属于"$1^{\infty}$"型，则有一个重要且简单的计算方法：$\lim u^v=\mathrm e^{\lim(u-1)v}$。整体"抄"，不要只算指数部分` },
            { src: "吉米【76】点评 p21", text: R`幂指函数求极限常用对数法，$\lim f(x)^{g(x)}=\exp\left(\lim g(x)\ln f(x)\right)$` }
          ]
        },
        think: R`底数 $1+3x\to1$、指数 $\dfrac{2}{\sin x}\to\infty$，是 $1^\infty$ 型。用公式 $\lim u^v=\mathrm e^{\lim v(u-1)}$（由第二个重要极限得来），把问题变成求指数 $v(u-1)$ 的极限，这个极限用等价无穷小算。`,
        first: R`$u-1=3x$，$v=\dfrac{2}{\sin x}$`,
        steps: [
          R`++识别++：$u=1+3x\to1$，$v=\dfrac{2}{\sin x}\to\infty$，是 $1^\infty$ 型`,
          R`++公式依据++：$u^v=\left[(1+(u-1))^{\frac{1}{u-1}}\right]^{v(u-1)}$，方括号 $\to\mathrm e$，所以 $\lim u^v=\mathrm e^{\lim v(u-1)}$`,
          R`++求指数++：$v(u-1)=\dfrac{2}{\sin x}\cdot3x=\dfrac{6x}{\sin x}$；$\sin x\sim x$，极限为 $6$`,
          R`==原式 $=\mathrm e^6$==`
        ],
        pitfall: R`!!只算出指数 $6$ 就写答案!!；$1^{\infty}$ 当成 $1$`,
        practice: "吉米【72】（p20）、【75】–【77】（p21，要用 $\ln(1+x)\sim x$）；30讲 例1.33（p62）"
      },
      {
        id: "t6", name: "比较两个无穷小：哪个高阶，是否等价",
        signal: R`问"$x\to x_0$ 时 $\alpha$ 与 $\beta$ 相比，==哪一个是高阶无穷小==""是否同阶、是否等价"`,
        example: { q: R`(1) 当 $x\to0$ 时，$(1-\cos x)^2$ 与 $\sin^2x$ 相比，哪一个是高阶无穷小？(2) 当 $x\to1$ 时，无穷小 $1-x$ 和 $1-x^3$、$\frac12(1-x^2)$ 是否同阶，是否等价？`, src: "教材习题1-7 第2、3题 p53" },
        idea: {
          key: R`求两者之比的极限：==$0$ 则分子高阶，$\infty$ 则分母高阶，非零常数同阶，$1$ 等价==。`,
          how: [
            R`++确认两者在同一过程中都是无穷小++`,
            R`++作比值，用约分或等价无穷小化简++`,
            R`++按极限值下结论++；注意说清"谁比谁高阶"`
          ],
          refs: [
            { src: "习题全解 习题1-7 第3题 p30", text: R`$\dfrac{1-x}{1-x^3}=\dfrac{1}{1+x+x^2}\to\dfrac13$，同阶，不等价；$\dfrac{1-x}{\frac12(1-x^2)}=\dfrac{2}{1+x}\to1$，同阶，等价` },
            { src: "教材 p51", text: R`等价无穷小是同阶无穷小的特殊情形，即 $c=1$ 的情形` }
          ]
        },
        think: R`比较两个无穷小，就是求它们之比的极限：$0$ 说明分子高阶，常数 $c\neq0$ 说明同阶，$c=1$ 说明等价。(1) 是 $x\to0$，用等价代换化简比值；(2) 是 $x\to1$，用因式分解约去零因子 $1-x$。`,
        first: R`(1) 作比 $\dfrac{(1-\cos x)^2}{\sin^2x}$`,
        steps: [
          R`++(1) 分别化简++：$1-\cos x\sim\dfrac{x^2}{2}$，所以 $(1-\cos x)^2\sim\dfrac{x^4}{4}$；$\sin^2x\sim x^2$`,
          R`++(1) 作比++：$\dfrac{(1-\cos x)^2}{\sin^2x}\to\lim\dfrac{x^4/4}{x^2}=0$，所以 $(1-\cos x)^2$ 是比 $\sin^2x$ 高阶的无穷小`,
          R`++(2) 和 $1-x^3$ 比++：$1-x^3=(1-x)(1+x+x^2)$，$\dfrac{1-x}{1-x^3}=\dfrac{1}{1+x+x^2}\to\dfrac13$，不为 0 也不为 1，同阶但不等价`,
          R`++(2) 和 $\frac12(1-x^2)$ 比++：$1-x^2=(1-x)(1+x)$，$\dfrac{1-x}{\frac12(1-x)(1+x)}=\dfrac{2}{1+x}\to1$，等价`
        ],
        pitfall: R`!!比值趋于 $0$ 时把"谁高阶"说反!!；$x\to1$ 的题!!也套 $x\to0$ 的等价公式!!`,
        practice: "教材习题1-7 第1–3题（p53，答案 习题全解 p30）"
      },
      {
        id: "t7", name: "o 记号的运算判断", tag: "研",
        signal: R`==已知 $f=o(g)$==，判断 $f+g=o(f)$、$fg=o(g^2)$ 一类结论`,
        example: { q: R`设 $x\to0$ 时 $f(x)$ 是 $g(x)$ 的高阶无穷小（$f,g$ 在去心邻域内不为零），判断：① $f+g=o(f)$；② $fg=o(g^2)$；③ $f=o(\ln[1+g])$；④ $f=o(g^2)$。正确的个数是（ ）。(A) 1　(B) 2　(C) 3　(D) 4`, src: "1000题 基础篇 第1章第9题" },
        idea: {
          key: R`==把每个"$A=o(B)$"翻译成"$\lim\frac AB=0$"==，再用已知的 $\lim\frac fg=0$ 去算。`,
          how: [
            R`++写出每个结论对应的比值++`,
            R`++约分、换等价++（$\ln(1+g)\sim g$），化成 $\frac fg$ 的式子`,
            R`++算出极限：为 $0$ 才对++；含 $\frac1g$ 之类可能不趋于 $0$`
          ],
          refs: [
            { src: "1000题 第1章第9题 解析", text: R`$\lim\dfrac{f+g}{f}=\infty$，①不成立；$\lim\dfrac{fg}{g^2}=\lim\dfrac fg=0$，②成立；$\lim\dfrac{f}{\ln(1+g)}=\lim\dfrac fg=0$，③成立；$\lim\dfrac{f}{g^2}=\lim\dfrac fg\cdot\dfrac1g$ 不一定为 0，④不成立` },
            { src: "教材 p51", text: R`如果 $\lim\frac{\beta}{\alpha}=0$，那么就说 $\beta$ 是比 $\alpha$ 高阶的无穷小，记作 $\beta=o(\alpha)$` }
          ]
        },
        think: R`$A=o(B)$ 的定义是 $\lim\dfrac AB=0$。所以每一条都翻译成一个比值，再用已知的 $\dfrac fg\to0$（以及 $g\to0$）去算。凡是比值里出现"$\frac fg\cdot\frac1g$"这种 $0\cdot\infty$ 的，结论都不确定。`,
        first: R`逐条写比值`,
        steps: [
          R`++已知++：$\lim\dfrac fg=0$，且 $f,g\to0$`,
          R`++①++ $\dfrac{f+g}{f}=1+\dfrac gf$；$\dfrac fg\to0$ 所以 $\dfrac gf\to\infty$，比值不趋于 0，错`,
          R`++②++ $\dfrac{fg}{g^2}=\dfrac fg\to0$，对`,
          R`++③++ $g\to0$，$\ln(1+g)\sim g$，所以 $\dfrac{f}{\ln(1+g)}\sim\dfrac fg\to0$，对`,
          R`++④++ $\dfrac{f}{g^2}=\dfrac fg\cdot\dfrac1g$，是 $0\cdot\infty$ 型，不确定：$f=x^2,g=x$ 时比值为 1，不是 0，错。正确的有 ②③，==选 (B)==`
        ],
        pitfall: R`!!把 $o(\cdot)$ 当成具体的数做代数运算!!`,
        practice: "1000题 第1章第9题"
      }
    ],

    pitfalls: [
      { wrong: R`$\tan x-\sin x\sim x-x=0$`, why: R`加减项各自替换会把主要部分抵消`, right: R`先变成 $\tan x(1-\cos x)\sim\frac12x^3$（习题全解 p31 注）`, test: R`$\lim\limits_{x\to0}\dfrac{\tan x-\sin x}{x^3}=$？`, ans: R`$\dfrac12$`, link: "题型 4" },
      { wrong: R`$1-\cos x\sim x^2$`, why: R`少了系数 $\frac12$`, right: R`$1-\cos x\sim\frac12x^2$（教材 p51）`, test: R`$\lim\limits_{x\to0}\dfrac{1-\cos2x}{x^2}=$？`, ans: R`$2$`, link: "知识点 常用等价无穷小" },
      { wrong: R`$1-\cos x^2\sim\dfrac12x^2$`, why: R`$\square=x^2$，应该是 $\frac12\square^2$`, right: R`$1-\cos x^2\sim\frac12x^4$`, test: R`$x\to0$ 时 $1-\cos\sqrt x$ 等价于什么？`, ans: R`$\dfrac12x$`, link: "题型 1" },
      { wrong: R`$x\to\infty$ 时 $\sin x\sim x$`, why: R`等价无穷小公式要求 $\square\to0$`, right: R`先确认替换的量趋于 $0$`, test: R`$\lim\limits_{x\to\infty}x\sin\dfrac{2x}{x^2+1}=$？`, ans: R`$\dfrac{2x}{x^2+1}\to0$，可换：$=\lim\dfrac{2x^2}{x^2+1}=2$（吉米【70】p20）`, link: "知识点 广义化" },
      { wrong: R`$\sqrt{1+x}-1\sim x$`, why: R`$(1+x)^{\frac12}-1\sim\frac12x$`, right: R`$\sqrt[n]{1+x}-1\sim\frac xn$（教材 p52 例1）`, test: R`$\lim\limits_{x\to0}\dfrac{\sqrt[3]{1+x^2}-1}{x^2}=$？`, ans: R`$\dfrac13$`, link: "题型 2" },
      { wrong: R`任意两个无穷小都能比较阶数`, why: R`比值的极限可能不存在也不是 $\infty$`, right: R`比值没有极限时无法比较（30讲 p43）`, test: R`$x\to0$ 时 $x\sin\dfrac1x$ 与 $x$ 谁高阶？`, ans: R`无法比较：比值 $\sin\frac1x$ 没有极限`, link: "知识点 比值没有极限时无法比较" },
      { wrong: R`$\lim\dfrac\beta\alpha=0$，所以 $\alpha$ 是高阶无穷小`, why: R`说反了：比值趋于 $0$ 说明分子 $\beta$ 趋于 $0$ 更快`, right: R`$\lim\frac\beta\alpha=0\Rightarrow\beta=o(\alpha)$，$\beta$ 高阶（教材 p51）`, test: R`$x\to0$ 时 $x^2-x^3$ 与 $2x-x^2$，哪个高阶？`, ans: R`$x^2-x^3$ 高阶（习题全解 p30）`, link: "题型 6" },
      { wrong: R`同阶就是等价`, why: R`等价要求比值极限恰好为 $1$`, right: R`等价是同阶中 $c=1$ 的特殊情形`, test: R`$x\to1$ 时 $1-x$ 与 $1-x^3$ 等价吗？`, ans: R`不等价，比值极限 $\frac13$，只是同阶`, link: "题型 6" },
      { wrong: R`$\mathrm e^{\tan x}-\mathrm e^{\sin x}\sim\tan x-\sin x$ 不需要理由`, why: R`要先提公因式变成 $\mathrm e^{\sin x}(\mathrm e^{\tan x-\sin x}-1)$`, right: R`提公因式后用 $\mathrm e^{\square}-1\sim\square$（30讲 p45）`, test: R`$x\to0$ 时 $\mathrm e^{\tan x}-\mathrm e^{\sin x}$ 是几阶无穷小？`, ans: R`三阶，$\sim\frac12x^3$`, link: "题型 1" },
      { wrong: R`$1^{\infty}$ 型算出指数 $A$，答案写 $A$`, why: R`结果是 $\mathrm e^A$`, right: R`整体抄 $\mathrm e^{\lim v(u-1)}$（30讲 p62）`, test: R`$\lim\limits_{x\to0}(1+3x)^{\frac2{\sin x}}=$？`, ans: R`$\mathrm e^6$`, link: "题型 5" },
      { wrong: R`$o(x)-o(x)=0$`, why: R`两个 $o(x)$ 可以是不同的函数`, right: R`$o(x)\pm o(x)=o(x)$`, test: R`$x^2=o(x)$，$x^3=o(x)$，$x^2-x^3$ 是 $0$ 吗？`, ans: R`不是，它仍是 $o(x)$`, link: "知识点 o 记号" },
      { wrong: R`$\lim\dfrac{f}{g^2}$ 一定是 $0$，因为 $f=o(g)$`, why: R`$\frac f{g^2}=\frac fg\cdot\frac1g$，后者趋于 $\infty$`, right: R`逐个算比值（1000题 第1章第9题）`, test: R`$f=x^2$，$g=x$（$x\to0$），$f=o(g)$ 吗？$f=o(g^2)$ 吗？`, ans: R`$f=o(g)$ 成立；$\frac{f}{g^2}=1$，$f=o(g^2)$ 不成立`, link: "题型 7" },
      { wrong: R`极限非零的因子也要换成等价无穷小`, why: R`它不是无穷小，直接求出极限即可`, right: R`先求非零因子的极限（如 $\mathrm e^x\to1$、$1+\sqrt{\cos x}\to2$）`, test: R`$\lim\limits_{x\to0}\dfrac{(1+\cos x)\sin x}{x}=$？`, ans: R`$2$：$1+\cos x\to2$ 先求，$\sin x\sim x$`, link: "题型 3" },
      { wrong: R`$\ln x\sim x$`, why: R`$\ln(1+\square)\sim\square$ 要求 $\square\to0$`, right: R`$x\to1$ 时 $\ln x=\ln[1+(x-1)]\sim x-1$（30讲 p59）`, test: R`$\lim\limits_{x\to1}\dfrac{\ln x}{x-1}=$？`, ans: R`$1$`, link: "知识点 广义化" },
      { wrong: R`等价替换后极限一定存在`, why: R`定理 2 要求替换后的极限存在（或为 $\infty$）才能得结论`, right: R`替换后若极限不存在，要换别的方法（教材 p52 定理2 的条件）`, test: R`定理 2 的条件里，"$\lim\frac{\tilde\beta}{\tilde\alpha}$ 存在"能去掉吗？`, ans: R`不能去掉，这是定理的前提（教材 p52）`, link: "知识点 定理 2" }
    ]
  });
})();
