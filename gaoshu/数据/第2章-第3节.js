/*
类型: 题型
标题: 高等数学 第2章 第3节 高阶导数 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-25
更新日期: 2026-10-25
状态: 完成

页码一律是印刷页（转换稿的页码标记在每页开头，标记后面的内容属于该页；教材 2.3 从 p94 开始，接 2.2 的 p82–93）。
教材 = 同济第八版上册；习题全解 = 同济第八版上册习题全解指导；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；
30讲 = 张宇基础30讲；18讲 = 张宇高数18讲；武忠祥 = 高等数学辅导讲义（强化）；1000题 = 张宇1000题（第4章，只写题号）。
本节只用逐阶求导、常用 n 阶公式、恒等变形和莱布尼茨公式；泰勒展开法（3.3）、隐函数和参数方程的二阶导（2.4）的题都注明了"后做"。
网页上不标「⚠️未核验」；每道例题的答案都用 sympy 验算过，没有出处的反例也逐条验算。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "2.3",
    chapter: 2,
    title: "高阶导数",
    pages: "教材 p94–98",
    sources: [
      "教材 第二章第三节 p94–98",
      "习题全解 习题2-3 p65–70",
      "吉米 第2章 §3【178】–【188】p52–55",
      "30讲 第4讲 ★★★10 高阶导数 p129–134；习题 4.3、4.5、4.8 p135–138",
      "18讲 第4讲 二～五 p36–38；八 反函数的二阶导 p40",
      "武忠祥 第2章第一节 7.高阶导数 p59；题型三(六) p73–74",
      "1000题 第4章（基础篇、强化篇）"
    ],
    updated: "2026-10-25",

    framework: {
      main: R`高阶导数就是"对导函数再求导"，所以 2.2 的法则全都照用，难点只在两件事：一是求导时谁是谁的函数（抽象复合、反函数、对时间求导要乘链式因子）；二是求 n 阶时找规律——先把函数恒等变形成 $\mathrm e^{ax}$、$\sin(ax+b)$、$\frac1{ax+b}$、$\ln(ax+b)$、$x^\mu$ 这几类有现成公式的样子，乘积就用莱布尼茨公式，只求某一点的值时代点后大部分项会消失。`,
      nodes: [
        { id: "DEF", go: "p1", col: 1, row: 0, kind: "map", label: "高阶导数定义", sub: R`$f^{(n)}=\left[f^{(n-1)}\right]'$` },
        { id: "LOW", go: "t1", col: 0, row: 0, kind: "build", label: "逐次求二、三阶", sub: "2.2 法则再用一遍" },
        { id: "PIECE", go: "t10", col: 2, row: 0, kind: "build", label: "分段点的二阶导", sub: R`用定义：$\lim\frac{f'(x)-f'(x_0)}{x-x_0}$` },
        { id: "FORM", go: "p3", col: 1, row: 1, kind: "map", label: "常用 n 阶公式", sub: R`$\mathrm e^{ax}$、$\sin$、$\frac1{ax+b}$、$\ln$、$x^\mu$` },
        { id: "TRANS", go: "t6", col: 0, row: 1, kind: "func", label: "恒等变形", sub: "拆项、降幂、积化和差" },
        { id: "LEIB", go: "p8", col: 2, row: 1, kind: "func", label: "莱布尼茨公式", sub: R`$(uv)^{(n)}=\sum\mathrm C_n^ku^{(n-k)}v^{(k)}$` },
        { id: "NTH", go: "t5", col: 0, row: 2, kind: "prop", label: "n 阶导数通式", sub: "写前几阶，找规律" },
        { id: "POINT", go: "t9", col: 2, row: 2, kind: "prop", label: "某点的 n 阶导数", sub: "代点后只剩一两项" }
      ],
      edges: [
        { from: "DEF", to: "LOW", label: "一阶一阶求" },
        { from: "DEF", to: "PIECE", label: "法则失效时" },
        { from: "DEF", to: "FORM", label: "归纳出" },
        { from: "TRANS", to: "FORM", label: "化成公式型" },
        { from: "FORM", to: "NTH", label: "直接套" },
        { from: "FORM", to: "LEIB", label: "给出各因子" },
        { from: "LEIB", to: "POINT", label: "代点消项" }
      ],
      keys: [
        { q: R`求高阶导数有哪几条路？各在什么时候用？`, a: R`① 阶数低（二、三阶）：一阶一阶求（教材 p94）；② 要 n 阶通式：写出前三四阶找规律，或先恒等变形化成常用公式型再套（30讲 p129–131）；③ 两类函数的乘积：莱布尼茨公式，多项式因子求几次导就没了，只剩几项（教材 p97；30讲 p132）。` },
        { q: R`哪五类函数的 n 阶导数要直接写出来？`, a: R`$(\mathrm e^{ax+b})^{(n)}=a^n\mathrm e^{ax+b}$；$[\sin(ax+b)]^{(n)}=a^n\sin\left(ax+b+\frac{n\pi}2\right)$（$\cos$ 同理）；$\left(\frac1{ax+b}\right)^{(n)}=\frac{(-1)^na^nn!}{(ax+b)^{n+1}}$；$[\ln(ax+b)]^{(n)}=\frac{(-1)^{n-1}a^n(n-1)!}{(ax+b)^n}$；$(x^\mu)^{(n)}=\mu(\mu-1)\cdots(\mu-n+1)x^{\mu-n}$（教材 p95–96；30讲 p130）。` },
        { q: R`求二阶导数时最容易漏什么？`, a: R`一阶导数里的每个因子都还是 $x$ 的函数：抽象复合 $f'(x^2)$ 再求导要乘 $2x$（教材习题2-3 第3题 p98）；反函数要对 $y$ 求导，必须乘 $\frac{\mathrm dx}{\mathrm dy}$（习题全解 p67）；加速度 $\frac{\mathrm d^2s}{\mathrm dt^2}$ 对 $s$ 求导后要乘 $\frac{\mathrm ds}{\mathrm dt}$（习题全解 p68）。` },
        { q: R`分段函数在分段点处的二阶导数怎么求？`, a: R`和 2.1 一样回到定义：先求出 $f'(x_0)$，再求 $\lim\limits_{x\to x_0^\pm}\dfrac{f'(x)-f'(x_0)}{x-x_0}$；要二阶可导，必须依次满足连续、一阶可导、二阶可导三个条件（习题全解 习题2-3 第8题 p68）。` }
      ]
    },

    points: [
      {
        group: "一、高阶导数的概念",
        items: [
          {
            id: "p1", kind: "定义", name: "二阶导数和 n 阶导数", page: "教材 p94",
            body: R`函数 $y=f(x)$ 的导数 $y'=f'(x)$ 的导数叫做 $f(x)$ 的二阶导数，记作 $y''$ 或 $\dfrac{\mathrm d^2y}{\mathrm dx^2}$，即 $y''=(y')'$，$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{\mathrm d}{\mathrm dx}\left(\dfrac{\mathrm dy}{\mathrm dx}\right)$。一般地，$(n-1)$ 阶导数的导数叫做 $n$ 阶导数，记作 $y^{(n)}$ 或 $\dfrac{\mathrm d^ny}{\mathrm dx^n}$。二阶及二阶以上的导数统称高阶导数。`,
            notes: [
              R`物理意义：位置函数 $s(t)$ 的二阶导数是加速度，$a=\dfrac{\mathrm d^2s}{\mathrm dt^2}=(s')'$（教材 p94）`,
              R`记号：三阶以内写撇 $y''$、$y'''$，四阶起写 $y^{(4)}$、$y^{(n)}$，括号不能省（$y^4$ 是四次方）（教材 p94）`,
              R`在一点的 $n$ 阶导数用定义写：$f^{(n)}(x_0)=\lim\limits_{x\to x_0}\dfrac{f^{(n-1)}(x)-f^{(n-1)}(x_0)}{x-x_0}$（武忠祥 p59）`
            ],
            quiz: R`$s=\sin\omega t$ 的加速度是多少？`
          },
          {
            id: "p2", kind: "结论", name: "n 阶可导蕴含的条件", page: "教材 p94",
            body: R`如果 $y=f(x)$ 在点 $x$ 处具有 $n$ 阶导数，那么 $f(x)$ 在点 $x$ 的某一邻域内必定具有一切低于 $n$ 阶的导数。求高阶导数就是按前面学过的求导法则多次接连地求导数；要求高阶导数公式，就要在逐次求导中寻找规律。`,
            notes: [
              R`原因：$f^{(n)}(x_0)$ 的定义式里要用到 $f^{(n-1)}(x)$ 在 $x_0$ 附近的值，所以 $f^{(n-1)}$ 必须在一个邻域内存在（武忠祥 p59 定义式）`,
              R`由"可导必连续"：$f$ 在 $x_0$ 处 $n$ 阶可导 ⇒ $f^{(n-1)}$ 在 $x_0$ 处连续；但推不出 $f^{(n)}$ 连续，如 $x^4\sin\frac1x$（补充 $f(0)=0$）在 0 处二阶可导，$f''$ 在 0 处不连续`,
              R`只在一点处可导、附近不可导的函数，在这一点没有二阶导数`
            ],
            quiz: R`题目说"$f$ 在 $x_0$ 处二阶可导"，能推出 $f'$ 在 $x_0$ 处连续吗？能推出 $f''$ 在 $x_0$ 处连续吗？`
          }
        ]
      },
      {
        group: "二、常用初等函数的 n 阶导数",
        items: [
          {
            id: "p3", kind: "公式", name: "指数函数", page: "教材 例4 p95；30讲 p130；18讲 p36",
            body: R`$(\mathrm e^x)^{(n)}=\mathrm e^x$；$(\mathrm e^{ax+b})^{(n)}=a^n\mathrm e^{ax+b}$；$(a^x)^{(n)}=a^x(\ln a)^n$。`,
            notes: [
              R`每求一次导，内层 $ax+b$ 贡献一个因子 $a$，所以是 $a^n$（30讲 p130 "每次求 $(ax+b)'=a$ 就多一个 $a$"）`,
              R`$a^x=\mathrm e^{x\ln a}$，套上一条，$a$ 换成 $\ln a$（30讲 例4.19 p134）`
            ],
            quiz: R`$(2^x)^{(n)}$ 和 $(\mathrm e^{-3x})^{(n)}$ 各是多少？`
          },
          {
            id: "p4", kind: "公式", name: "正弦、余弦函数", page: "教材 例5 p95；30讲 例4.14 p129–130",
            body: R`$(\sin x)^{(n)}=\sin\left(x+n\cdot\dfrac\pi2\right)$，$(\cos x)^{(n)}=\cos\left(x+n\cdot\dfrac\pi2\right)$；更一般地 $[\sin(ax+b)]^{(n)}=a^n\sin\left(ax+b+\dfrac{n\pi}2\right)$，$\cos$ 同理。`,
            notes: [
              R`推导关键：把 $\cos x$ 写成 $\sin\left(x+\frac\pi2\right)$，每求一次导相位加 $\frac\pi2$，函数名不变（30讲 p130）`,
              R`直接写 $\cos x,-\sin x,-\cos x,\sin x$ 四个一循环也对，但写不出统一的通式（30讲 p130）`
            ],
            quiz: R`$(\cos2x)^{(n)}=$？`
          },
          {
            id: "p5", kind: "公式", name: "对数函数和倒数函数", page: "教材 例6 p96；30讲 p130",
            body: R`$[\ln(1+x)]^{(n)}=(-1)^{n-1}\dfrac{(n-1)!}{(1+x)^n}$；$\left(\dfrac1{1+x}\right)^{(n)}=(-1)^n\dfrac{n!}{(1+x)^{n+1}}$；一般地 $\left(\dfrac1{ax+b}\right)^{(n)}=(-1)^n\dfrac{a^nn!}{(ax+b)^{n+1}}$，$[\ln(ax+b)]^{(n)}=(-1)^{n-1}\dfrac{a^n(n-1)!}{(ax+b)^n}$。`,
            notes: [
              R`规定 $0!=1$，所以 $\ln(1+x)$ 的公式在 $n=1$ 时也成立（教材 p96）`,
              R`两个公式的关系：$[\ln(1+x)]^{(n)}=\left(\dfrac1{1+x}\right)^{(n-1)}$，阶数差 1，所以阶乘和符号都差一位（30讲 p130）`,
              R`符号的来源：$(1+x)^{-1}$ 每求一次导，指数 $-1,-2,-3,\cdots$ 依次落下来，正负交替`
            ],
            quiz: R`$[\ln(1-x)]^{(n)}=$？`
          },
          {
            id: "p6", kind: "公式", name: "幂函数", page: "教材 例7 p96",
            body: R`$(x^\mu)^{(n)}=\mu(\mu-1)(\mu-2)\cdots(\mu-n+1)x^{\mu-n}$（$\mu$ 是任意常数）。当 $\mu=n$ 时 $(x^n)^{(n)}=n!$，而 $(x^n)^{(n+k)}=0\ (k=1,2,\cdots)$。`,
            notes: [
              R`系数是从 $\mu$ 开始往下数 $n$ 个数相乘，最后一个是 $\mu-n+1$`,
              R`$n$ 次多项式求 $n$ 阶导数得 $n!$ 乘首项系数，求 $n+1$ 阶得 0（教材习题2-3 第10(1)题，习题全解 p69）`,
              R`$\mu$ 不是正整数时，各阶导数永远不会变成 0`
            ],
            quiz: R`$(x^5)^{(5)}$、$(x^5)^{(6)}$、$\left(\sqrt x\right)'''$ 各是多少？`
          }
        ]
      },
      {
        group: "三、高阶导数的运算法则",
        items: [
          {
            id: "p7", kind: "定理", name: "和、差、数乘的 n 阶导数", page: "教材 p96",
            body: R`如果 $u=u(x)$ 及 $v=v(x)$ 都在点 $x$ 处具有 $n$ 阶导数，那么 $u\pm v$ 也在点 $x$ 处具有 $n$ 阶导数，且 $(u\pm v)^{(n)}=u^{(n)}\pm v^{(n)}$；$(Cu)^{(n)}=Cu^{(n)}$。`,
            notes: [
              R`这就是"拆项"的依据：有理分式拆成部分分式、三角函数降幂成 $\sin kx$、$\cos kx$ 的和，再逐项套公式（吉米【183】点评 p54；武忠祥 例1 p73）`
            ],
            quiz: R`$\left(\dfrac{1-x}{1+x}\right)^{(n)}$ 为什么可以拆成两项分别求？拆成什么？`
          },
          {
            id: "p8", kind: "定理", name: "莱布尼茨公式", page: "教材 p96–97",
            body: R`如果 $u$、$v$ 都在点 $x$ 处具有 $n$ 阶导数，那么 $$(uv)^{(n)}=\sum_{k=0}^n\mathrm C_n^ku^{(n-k)}v^{(k)}=u^{(n)}v+nu^{(n-1)}v'+\frac{n(n-1)}{2!}u^{(n-2)}v''+\cdots+uv^{(n)},$$ 其中 $u^{(0)}=u$，$v^{(0)}=v$。`,
            notes: [
              R`先算出 $(uv)''=u''v+2u'v'+uv''$，$(uv)'''=u'''v+3u''v'+3u'v''+uv'''$，再用数学归纳法证明（教材 p96–97）`,
              R`记法：把 $(u+v)^n$ 的二项展开式里的 $k$ 次幂换成 $k$ 阶导数，零阶导数是函数本身（教材 p97）`,
              R`共 $n+1$ 项；系数是组合数 $\mathrm C_n^k$，两个因子的阶数加起来总是 $n$`,
              R`一个因子是低次多项式时最好用：$m$ 次多项式求 $m+1$ 阶导就是 0，展开式只剩 $m+1$ 项（30讲 p132；18讲 p36）`
            ],
            quiz: R`$(x\mathrm e^x)^{(n)}$ 用莱布尼茨公式展开后剩几项？结果是多少？`
          },
          {
            id: "p9", kind: "结论", name: "反函数的二阶导数", page: "教材习题2-3 第4题 p98；习题全解 p67",
            body: R`由 $\dfrac{\mathrm dx}{\mathrm dy}=\dfrac1{y'}$ 可以导出 $\dfrac{\mathrm d^2x}{\mathrm dy^2}=-\dfrac{y''}{(y')^3}$，$\dfrac{\mathrm d^3x}{\mathrm dy^3}=\dfrac{3(y'')^2-y'y'''}{(y')^5}$。`,
            notes: [
              R`推导关键：$\dfrac1{y'}$ 是 $x$ 的函数，对 $y$ 求导要先对 $x$ 求导再乘 $\dfrac{\mathrm dx}{\mathrm dy}=\dfrac1{y'}$，所以分母是三次方（习题全解 p67）`,
              R`二阶导数不能再取倒数：$\dfrac{\mathrm d^2x}{\mathrm dy^2}\neq\dfrac1{y''}$`
            ],
            quiz: R`$y=\mathrm e^x$ 的反函数 $x=\ln y$：用公式算 $\dfrac{\mathrm d^2x}{\mathrm dy^2}$，和直接对 $\ln y$ 求两次导对得上吗？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "具体函数的二阶、三阶导数（逐次求导）",
        signal: R`给一个具体的初等函数，问 $y''$、$y'''$ 或 $y''|_{x=x_0}$，阶数是 2、3 这样的小数字，不是 $n$`,
        example: { q: R`$y=\ln\left(x+\sqrt{1+x^2}\right)$，则 $y'''\big|_{x=\sqrt3}=$ ____。`, src: "吉米【180】p53" },
        idea: {
          key: R`==一阶一阶地求，每求完一阶先化简到最简形式（约分、写成幂的形式），再求下一阶==；问某点的值时，先求出导函数的表达式，最后再代点。`,
          how: [
            R`先化简原函数（拆 $\ln$、根式写成分数指数）`,
            R`求 $y'$，化成最简（这一步决定后面算得快不快）`,
            R`对化简后的 $y'$ 再求导得 $y''$，再化简；依此类推`,
            R`最后一阶求完才代入 $x=x_0$，不能先代点再求导`
          ],
          refs: [
            { src: "教材 p94", text: R`求高阶导数就是按前面学过的求导法则多次接连地求导数` },
            { src: "吉米【178】点评 p53", text: R`求导前先利用对数的性质把函数化简，可使求导运算简便` }
          ]
        },
        think: R`三阶不算高，直接逐阶求；关键是 $y'$ 能化成很简单的 $(1+x^2)^{-\frac12}$，后面两阶就只是幂函数的复合`,
        first: R`先求 $y'$ 并化简成 $(1+x^2)^{-\frac12}$，再逐阶往下求`,
        steps: [
          R`求 $y'$（链式法则，外层 $\ln u$，内层 $u=x+\sqrt{1+x^2}$）：$y'=\dfrac{1}{x+\sqrt{1+x^2}}\left(1+\dfrac{x}{\sqrt{1+x^2}}\right)=\dfrac{1}{x+\sqrt{1+x^2}}\cdot\dfrac{\sqrt{1+x^2}+x}{\sqrt{1+x^2}}$`,
          R`**约分化简**：分子分母的 $x+\sqrt{1+x^2}$ 约掉，$y'=\dfrac1{\sqrt{1+x^2}}=(1+x^2)^{-\frac12}$（这一步是 2.2 的常用结论，习题全解 p67）`,
          R`求 $y''$：对 $(1+x^2)^{-\frac12}$ 用幂函数加链式法则，$y''=-\dfrac12(1+x^2)^{-\frac32}\cdot2x=-x(1+x^2)^{-\frac32}$`,
          R`求 $y'''$：$y''$ 是 $-x$ 和 $(1+x^2)^{-\frac32}$ 的积，用乘积法则：$y'''=-(1+x^2)^{-\frac32}-x\cdot\left(-\dfrac32\right)(1+x^2)^{-\frac52}\cdot2x=-(1+x^2)^{-\frac32}+3x^2(1+x^2)^{-\frac52}$`,
          R`==通分整理：提出 $(1+x^2)^{-\frac52}$，$y'''=(1+x^2)^{-\frac52}\left[-(1+x^2)+3x^2\right]=\dfrac{2x^2-1}{(1+x^2)^{\frac52}}$==`,
          R`最后代点：$x=\sqrt3$ 时 $2x^2-1=5$，$(1+x^2)^{\frac52}=4^{\frac52}=32$，所以 $y'''\big|_{x=\sqrt3}=\dfrac5{32}$`
        ],
        pitfall: R`不化简 $y'$ 就直接求下一阶，商法则套商法则，算错率很高；先把 $x=\sqrt3$ 代进 $y'$ 得到常数再求导，结果变成 0`,
        practice: "教材习题2-3 第1、2题（p97–98，答案习题全解 p65–67）；吉米【178】【180】（p52–53）"
      },
      {
        id: "t2", name: "抽象复合函数的二阶导数",
        signal: R`函数里含 $f(\square)$，$\square$ 是 $x^2$、$\mathrm e^x$、$\ln x$ 这类 $x$ 的函数，题目说"$f$ 具有二阶导数"，要求 $\dfrac{\mathrm d^2y}{\mathrm dx^2}$`,
        example: { q: R`$y=\sin\left[f(x^2)\right]$，其中 $f$ 具有二阶导数，求 $\dfrac{\mathrm d^2y}{\mathrm dx^2}$。`, src: "吉米【179】p53" },
        idea: {
          key: R`==先用链式法则求出一阶导数，把它看成几个因子的乘积==；求二阶时每个因子都要求导，并且 $f'(\square)$、$f(\square)$ 仍然是复合函数，求导时还要乘内层 $\square$ 的导数。`,
          how: [
            R`写清复合链，求一阶导数：外层导数 × 中间层导数 × 内层导数`,
            R`把一阶导数写成因子乘积的形式（常见 2～3 个因子）`,
            R`对乘积用乘积法则，三个因子就有三项`,
            R`凡是 $f'(\square)$、$f(\square)$ 求导，都写成 $f''(\square)\cdot\square'$、$f'(\square)\cdot\square'$，不要漏乘 $\square'$`
          ],
          refs: [
            { src: "习题全解 习题2-3 第3(1)题 p67", text: R`$\dfrac{\mathrm dy}{\mathrm dx}=f'(x^2)\cdot2x=2xf'(x^2)$，$\dfrac{\mathrm d^2y}{\mathrm dx^2}=2f'(x^2)+2xf''(x^2)\cdot2x=2f'(x^2)+4x^2f''(x^2)$` }
          ]
        },
        think: R`复合链是 $y=\sin u$，$u=f(v)$，$v=x^2$；一阶导数会是 $2x$、$f'(x^2)$、$\cos[f(x^2)]$ 三个因子的乘积，二阶导数就是对这个三因子乘积求导`,
        first: R`先写出一阶导数（三个因子的乘积），再对乘积求导`,
        steps: [
          R`一阶（链式法则一层层乘）：$\dfrac{\mathrm dy}{\mathrm dx}=\cos[f(x^2)]\cdot f'(x^2)\cdot2x$`,
          R`看成三个因子 $2x$、$f'(x^2)$、$\cos[f(x^2)]$ 的积，用 $(uvw)'=u'vw+uv'w+uvw'$（教材 p84）`,
          R`第一项（导 $2x$）：$2\cdot f'(x^2)\cos[f(x^2)]$`,
          R`==第二项（导 $f'(x^2)$，**它是复合函数，要乘内层导数** $2x$）：$2x\cdot f''(x^2)\cdot2x\cdot\cos[f(x^2)]=4x^2f''(x^2)\cos[f(x^2)]$==`,
          R`第三项（导 $\cos[f(x^2)]$，两层复合）：$2x\cdot f'(x^2)\cdot\left\{-\sin[f(x^2)]\right\}\cdot f'(x^2)\cdot2x=-4x^2[f'(x^2)]^2\sin[f(x^2)]$`,
          R`合并：$\dfrac{\mathrm d^2y}{\mathrm dx^2}=2f'(x^2)\cos[f(x^2)]+4x^2\left\{f''(x^2)\cos[f(x^2)]-[f'(x^2)]^2\sin[f(x^2)]\right\}$`
        ],
        pitfall: R`把 $[f'(x^2)]'$ 写成 $f''(x^2)$，漏乘 $2x$；对三因子乘积求导只写了两项`,
        practice: "教材习题2-3 第3题（p98，答案习题全解 p67）；吉米【179】（p53）"
      },
      {
        id: "t3", name: "由导数满足的关系式逐次求导",
        signal: R`不给 $f$ 的表达式，只给一个含 $f'$ 的等式，如 $f'(x)=\mathrm e^{f(x)}$、$f'(x)=[f(x)]^2$，再给一个点的函数值，求 $f''(x_0)$、$f'''(x_0)$ 或 $f^{(n)}(x)$`,
        example: { q: R`设函数 $f(x)$ 在 $x=2$ 的某邻域内可导，且 $f'(x)=\mathrm e^{f(x)}$，$f(2)=1$，则 $f'''(2)=$ ____。`, src: "吉米【181】p53" },
        idea: {
          key: R`==把已知等式两边一起对 $x$ 求导（右边是复合函数，要乘 $f'$），然后立刻用原等式把新出现的 $f'$ 换掉，使每一阶都只用 $f$ 表示==；求 $n$ 阶时写出前三四阶找规律。`,
          how: [
            R`对 $f'=F(f)$ 两边求导：$f''=F'(f)\cdot f'$`,
            R`用原等式把 $f'$ 代回，得到 $f''$ 只含 $f$ 的式子`,
            R`重复同样操作得 $f'''$，必要时再求一两阶，看出规律`,
            R`最后代入已知点的函数值；解答题要求 $n$ 阶时用数学归纳法补证明`
          ],
          refs: [
            { src: "30讲 例4.16 方法总结 p131", text: R`若题目中给出的是抽象形式的相关等式可考虑用好关系式，逐次求导，探索规律` },
            { src: "30讲 例4.16 分析 p131", text: R`若是解答题，探索规律后应给出相应数学归纳法的证明，若是客观题，不必给出证明` }
          ]
        },
        think: R`$f(x)$ 不知道，但 $f'$ 能用 $f$ 表示，所以每一阶导数都能化成 $\mathrm e^{kf(x)}$ 的形式，最后只需要 $f(2)=1$`,
        first: R`对 $f'(x)=\mathrm e^{f(x)}$ 两边求导，找出 $\mathrm e^{kf(x)}$ 的规律，最后代 $f(2)=1$`,
        steps: [
          R`对 $f'(x)=\mathrm e^{f(x)}$ 两边求导，右边是复合函数（外层 $\mathrm e^u$，内层 $f(x)$）：$f''(x)=\mathrm e^{f(x)}\cdot f'(x)$`,
          R`==**用原等式把** $f'(x)$ **换成** $\mathrm e^{f(x)}$：$f''(x)=\mathrm e^{f(x)}\cdot\mathrm e^{f(x)}=\mathrm e^{2f(x)}$==`,
          R`再求导：$f'''(x)=\mathrm e^{2f(x)}\cdot2f'(x)=2\mathrm e^{2f(x)}\cdot\mathrm e^{f(x)}=2\mathrm e^{3f(x)}$`,
          R`代点：$f'''(2)=2\mathrm e^{3f(2)}=2\mathrm e^3$`,
          R`推广（30讲 习题4.5 p135）：继续求得 $f^{(4)}=3!\,\mathrm e^{4f}$，规律是 $f^{(n)}(x)=(n-1)!\,\mathrm e^{nf(x)}$，所以 $f^{(n)}(2)=(n-1)!\,\mathrm e^n$`
        ],
        pitfall: R`对 $\mathrm e^{f(x)}$ 求导忘乘 $f'(x)$，写成 $f''=\mathrm e^{f(x)}$；求出 $f''=\mathrm e^{f}f'$ 后不代换，下一阶要对乘积求导，越算越乱`,
        practice: "吉米【181】【186】（p53–54）；30讲 例4.16（p131）、习题4.5（p135，解答 p137）；检验：1000题基础篇第4章 9、10题；强化篇第4章 2题"
      },
      {
        id: "t4", name: "反函数的二阶导数",
        signal: R`问 $\dfrac{\mathrm d^2x}{\mathrm dy^2}$、$\dfrac{\mathrm d^2f^{-1}(x)}{\mathrm dx^2}$，或"$y=2x+\sin x$ 的反函数的二阶导数"`,
        example: { q: R`设 $x=f(y)$ 的反函数 $y=f^{-1}(x)$ 及 $f'[f^{-1}(x)]$、$f''[f^{-1}(x)]$ 均存在，且 $f'[f^{-1}(x)]\neq0$，则 $\dfrac{\mathrm d^2f^{-1}(x)}{\mathrm dx^2}=$（　）。(A) $-\dfrac{f''[f^{-1}(x)]}{\{f'[f^{-1}(x)]\}^2}$　(B) $\dfrac{f''[f^{-1}(x)]}{\{f'[f^{-1}(x)]\}^2}$　(C) $-\dfrac{f''[f^{-1}(x)]}{\{f'[f^{-1}(x)]\}^3}$　(D) $\dfrac{f''[f^{-1}(x)]}{\{f'[f^{-1}(x)]\}^3}$`, src: "吉米【182】p53–54" },
        idea: {
          key: R`==一阶用反函数法则 $\dfrac{\mathrm dx}{\mathrm dy}=\dfrac1{y'}$==；求二阶时，$\dfrac1{y'}$ 是 $x$ 的函数，要对 $y$ 求导，就先对 $x$ 求导，再乘 $\dfrac{\mathrm dx}{\mathrm dy}$（链式法则）。结论：$\dfrac{\mathrm d^2x}{\mathrm dy^2}=-\dfrac{y''}{(y')^3}$。`,
          how: [
            R`分清谁是自变量：要对谁求导，最后的式子就是谁的导数`,
            R`一阶：$\dfrac{\mathrm dx}{\mathrm dy}=\dfrac1{y'}$`,
            R`二阶：$\dfrac{\mathrm d^2x}{\mathrm dy^2}=\dfrac{\mathrm d}{\mathrm dx}\left(\dfrac1{y'}\right)\cdot\dfrac{\mathrm dx}{\mathrm dy}=-\dfrac{y''}{(y')^2}\cdot\dfrac1{y'}$`,
            R`具体函数直接代入 $y'$、$y''$，结果用原来的变量 $x$ 表示即可`
          ],
          refs: [
            { src: "习题全解 习题2-3 第4题 p67", text: R`$\dfrac{\mathrm d^2x}{\mathrm dy^2}=\dfrac{\mathrm d}{\mathrm dy}\left(\dfrac{\mathrm dx}{\mathrm dy}\right)=\dfrac{\mathrm d}{\mathrm dx}\left(\dfrac1{y'}\right)\dfrac{\mathrm dx}{\mathrm dy}=-\dfrac{y''}{(y')^2}\cdot\dfrac1{y'}=-\dfrac{y''}{(y')^3}$` },
            { src: "30讲 习题4.3 解答 p136", text: R`$\dfrac{\mathrm d^2x}{\mathrm dy^2}=\dfrac{\mathrm d\left(\frac{\mathrm dx}{\mathrm dy}\right)}{\mathrm dy}=\dfrac{\mathrm d\left[\frac1{f'(x)}\right]}{\mathrm dx}\cdot\dfrac{\mathrm dx}{\mathrm dy}$` }
          ]
        },
        think: R`这里 $x$ 是自变量、$y=f^{-1}(x)$；一阶导数 $\dfrac1{f'(y)}$ 里的 $y$ 本身是 $x$ 的函数，所以对 $x$ 再求导时要乘 $y'=\dfrac1{f'(y)}$`,
        first: R`先写出 $y'=\dfrac1{f'(y)}$，再对 $x$ 求导，别忘了乘 $y'$`,
        steps: [
          R`一阶（反函数法则，教材 p85）：$\dfrac{\mathrm dy}{\mathrm dx}=\dfrac1{\frac{\mathrm dx}{\mathrm dy}}=\dfrac1{f'(y)}=\dfrac1{f'[f^{-1}(x)]}$`,
          R`二阶：对 $\dfrac1{f'[f^{-1}(x)]}$ 用商法则（分子是常数 1）：$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{-\{f'[f^{-1}(x)]\}'}{\{f'[f^{-1}(x)]\}^2}$`,
          R`==**分母里的** $f'[f^{-1}(x)]$ **是复合函数**，求导要乘内层导数：$\{f'[f^{-1}(x)]\}'=f''[f^{-1}(x)]\cdot[f^{-1}(x)]'=f''[f^{-1}(x)]\cdot\dfrac1{f'[f^{-1}(x)]}$==`,
          R`代回：$\dfrac{\mathrm d^2y}{\mathrm dx^2}=-\dfrac{f''[f^{-1}(x)]}{\{f'[f^{-1}(x)]\}^2}\cdot\dfrac1{f'[f^{-1}(x)]}=-\dfrac{f''[f^{-1}(x)]}{\{f'[f^{-1}(x)]\}^3}$，选 (C)`,
          R`检验：取 $f(y)=\mathrm e^y$，则 $f^{-1}(x)=\ln x$，$(\ln x)''=-\dfrac1{x^2}$；公式给出 $-\dfrac{\mathrm e^y}{(\mathrm e^y)^3}=-\dfrac1{\mathrm e^{2y}}=-\dfrac1{x^2}$，一致`
        ],
        pitfall: R`对 $\dfrac1{f'(y)}$ 求导时把 $y$ 当常数或当自变量，漏乘 $\dfrac{\mathrm dy}{\mathrm dx}$，得到分母二次方的 (A)；以为二阶导数也能取倒数`,
        practice: "教材习题2-3 第4题（p98，答案习题全解 p67）；吉米【182】（p53–54）；30讲 习题4.3（p135，解答 p136）；18讲 第4讲 八（p40）；检验：1000题强化篇第4章 5题"
      },
      {
        id: "t5", name: "n 阶导数：逐阶求导找规律",
        signal: R`问 $y^{(n)}$ 的一般表达式，函数本身或求一两次导以后就是 $\mathrm e^{ax}$、$\sin(ax+b)$、$\frac1{ax+b}$、$x^\mu$、$\ln(ax+b)$ 这类常用公式型`,
        example: { q: R`求 $y=x\ln x$ 的 $n$ 阶导数的一般表达式。`, src: "教材习题2-3 第10(3)题 p98（解答 习题全解 p69）" },
        idea: {
          key: R`==先求前几阶，求到出现常用公式型（或看出规律）为止，再套公式或归纳出通式==；注意通式从第几阶开始成立，前面几阶单独写。`,
          how: [
            R`求 $y'$、$y''$，每一阶化简`,
            R`一旦变成常用公式型（如 $x^{-1}$），记下它是第几阶`,
            R`套常用公式：若 $y^{(m)}=g(x)$，则 $y^{(n)}=g^{(n-m)}(x)$`,
            R`写明适用范围（$n\geqslant m$），用 $n=m$、$n=m+1$ 代回检验`
          ],
          refs: [
            { src: "吉米【183】点评(1) p54", text: R`求 $f(x)$ 的 $n$ 阶导数时，一般先求出前几阶导数，从中找出规律，得出 $f(x)$ 的 $n$ 阶导数表达式` },
            { src: "30讲 例4.14 方法总结 p130", text: R`在没有相应的高阶公式情况下，可以逐阶求导，探索规律，写出通项的表达式` },
            { src: "教材 p94", text: R`若需要求函数的高阶导数公式，则需要在逐次求导过程中，善于寻求它的某种规律` }
          ]
        },
        think: R`$x\ln x$ 求一次导得 $\ln x+1$，再求一次就是 $\dfrac1x=x^{-1}$，这是幂函数，有现成的 $n$ 阶公式；所以从第 2 阶开始套公式`,
        first: R`先求前两阶，从第 2 阶起套幂函数的 $n$ 阶公式`,
        steps: [
          R`一阶（乘积法则）：$y'=\ln x+x\cdot\dfrac1x=\ln x+1$`,
          R`==二阶：$y''=\dfrac1x=x^{-1}$，**已经是幂函数**==`,
          R`套幂函数公式（教材 例7 p96，$\mu=-1$）：$(x^{-1})^{(m)}=(-1)(-2)\cdots(-m)x^{-1-m}=\dfrac{(-1)^mm!}{x^{m+1}}$`,
          R`$y^{(n)}=(y'')^{(n-2)}$，所以取 $m=n-2$：$y^{(n)}=\dfrac{(-1)^{n-2}(n-2)!}{x^{n-1}}=\dfrac{(-1)^n(n-2)!}{x^{n-1}}\ (n\geqslant2)$`,
          R`检验：$n=2$ 时得 $\dfrac{0!}{x}=\dfrac1x$；$n=3$ 时得 $-\dfrac1{x^2}$，和直接求导一致；$n=1$ 时 $(n-2)!$ 无意义，所以 $y'=\ln x+1$ 单独写`
        ],
        pitfall: R`通式不写适用范围，$n=1$ 也代进去；符号 $(-1)^{n-2}$ 和 $(-1)^n$ 相等，但写成 $(-1)^{n-1}$ 就错了`,
        practice: "教材 例4–7（p95–96）、习题2-3 第10题（p98，答案习题全解 p69）；30讲 例4.14（p129–130）"
      },
      {
        id: "t6", name: "n 阶导数：有理分式先拆成部分分式",
        signal: R`求有理分式 $\dfrac{P(x)}{Q(x)}$ 的 $n$ 阶导数，分母能因式分解成一次因式的乘积（如 $\frac{1-x}{1+x}$、$\frac{x}{2x^2-7x+6}$、$\frac1{x^2-1}$）`,
        example: { q: R`设 $f(x)=\dfrac{x}{2x^2-7x+6}$，求 $f^{(n)}(x)$。`, src: "武忠祥 题型三(六)例1 p73" },
        idea: {
          key: R`==商的 $n$ 阶导数没有公式，所以先把分式拆成 $\dfrac{A}{ax+b}$ 型的和（假分式先分出整式部分），再对每一项套 $\left(\dfrac1{ax+b}\right)^{(n)}=\dfrac{(-1)^na^nn!}{(ax+b)^{n+1}}$==。`,
          how: [
            R`假分式先做除法，分出多项式（求导若干次后为 0）`,
            R`分母因式分解，设 $\dfrac{P}{(a_1x+b_1)(a_2x+b_2)}=\dfrac{A}{a_1x+b_1}+\dfrac{B}{a_2x+b_2}$，求出 $A$、$B$`,
            R`每一项套 $\left(\frac1{ax+b}\right)^{(n)}$ 公式，别漏 $a^n$`,
            R`合并，提出公因子 $(-1)^nn!$`
          ],
          refs: [
            { src: "30讲 例4.15 方法总结 p131", text: R`不能直接套用常用高阶导数公式的题目，可考虑先转化为有常用高阶导数公式的函数` },
            { src: "吉米【183】点评(2) p54", text: R`某些复杂函数求高阶导数，常先化简、变形，化为常见函数类，再求其 $n$ 阶导数` }
          ]
        },
        think: R`分母 $2x^2-7x+6=(2x-3)(x-2)$ 能分解，分子次数低于分母，直接拆成 $\dfrac{A}{x-2}+\dfrac{B}{2x-3}$，每一项都有现成公式`,
        first: R`先把分母分解，拆成两个简单分式，再逐项套公式`,
        steps: [
          R`因式分解：$f(x)=\dfrac{x}{(2x-3)(x-2)}$`,
          R`==拆项：设 $\dfrac{x}{(2x-3)(x-2)}=\dfrac{A}{x-2}+\dfrac{B}{2x-3}$，通分得 $x=A(2x-3)+B(x-2)$；令 $x=2$ 得 $A=2$，令 $x=\frac32$ 得 $B=-3$，所以 $f(x)=\dfrac2{x-2}-\dfrac3{2x-3}$==`,
          R`第一项（$a=1$）：$\left(\dfrac1{x-2}\right)^{(n)}=\dfrac{(-1)^nn!}{(x-2)^{n+1}}$`,
          R`第二项（$a=2$，**每求一次导多一个因子 2**）：$\left(\dfrac1{2x-3}\right)^{(n)}=\dfrac{(-1)^n2^nn!}{(2x-3)^{n+1}}$`,
          R`由和差法则（教材 p96）合并：$f^{(n)}(x)=(-1)^nn!\left[\dfrac2{(x-2)^{n+1}}-\dfrac{3\cdot2^n}{(2x-3)^{n+1}}\right]$`,
          R`检验：$n=1$ 时 $f'(x)=-\dfrac2{(x-2)^2}+\dfrac6{(2x-3)^2}$，与直接用商法则求导化简后一致`
        ],
        pitfall: R`对 $\frac1{2x-3}$ 套公式时漏了 $2^n$；拆项系数算错（用 $x=2$、$x=\frac32$ 代入最快，拆完通分回去核对一次）`,
        practice: "吉米【183】（p54）；30讲 例4.15（p130–131）；武忠祥 题型三(六)例1（p73）；检验：1000题强化篇第4章 13题（$\ln(1+x+x^2)$ 先化成 $\ln(1-x^3)-\ln(1-x)$）"
      },
      {
        id: "t7", name: "n 阶导数：三角函数先降幂、积化和差",
        signal: R`求 $\sin^2x$、$\sin^3x$、$\sin^4x-\cos^4x$、$\sin x\cos x$、$\sin ax\cos bx$ 这类三角函数的幂或乘积的 $n$ 阶导数`,
        example: { q: R`设 $y=\sin^3x+\sin x\cos x$，求 $y^{(n)}$。`, src: "吉米【185】p54" },
        idea: {
          key: R`==三角函数的幂和乘积没有直接的 $n$ 阶公式，用倍角、降幂、积化和差公式把它化成 $\sin kx$、$\cos kx$ 的一次式之和，再逐项套 $[\sin(kx)]^{(n)}=k^n\sin\left(kx+\frac{n\pi}2\right)$==。`,
          how: [
            R`选公式：$\sin^2x=\frac{1-\cos2x}2$，$\sin x\cos x=\frac12\sin2x$，$\sin^3x=\frac{3\sin x-\sin3x}4$，积化和差`,
            R`化成 $\sum c_k\sin(kx)$ 或 $\cos(kx)$ 的线性组合（常数项求导后消失）`,
            R`逐项套公式，每项系数乘 $k^n$，相位加 $\frac{n\pi}2$`,
            R`代 $n=1$ 检验`
          ],
          refs: [
            { src: "吉米【185】分析 p54", text: R`利用三倍角公式 $\sin3x=3\sin x-4\sin^3x$，二倍角公式 $\sin2x=2\sin x\cos x$` },
            { src: "习题全解 习题2-3 第10(2)题 p69", text: R`$y=\sin^2x=\frac12(1-\cos2x)$，$y^{(n)}=-2^{n-1}\cos\left(2x+\frac{n\pi}2\right)$` }
          ]
        },
        think: R`$\sin^3x$ 用三倍角公式反解 $\sin^3x=\dfrac{3\sin x-\sin3x}4$，$\sin x\cos x=\dfrac12\sin2x$，整个函数就变成 $\sin x$、$\sin3x$、$\sin2x$ 的线性组合`,
        first: R`先用三倍角、二倍角公式降幂，化成 $\sin x$、$\sin3x$、$\sin2x$ 的线性组合`,
        steps: [
          R`降幂：由 $\sin3x=3\sin x-4\sin^3x$ 解出 $\sin^3x=\dfrac34\sin x-\dfrac14\sin3x$`,
          R`==倍角：$\sin x\cos x=\dfrac12\sin2x$，所以 $y=\dfrac34\sin x-\dfrac14\sin3x+\dfrac12\sin2x$==`,
          R`逐项套 $[\sin kx]^{(n)}=k^n\sin\left(kx+\frac{n\pi}2\right)$（30讲 p130）：$(\sin x)^{(n)}=\sin\left(x+\frac{n\pi}2\right)$，$(\sin3x)^{(n)}=3^n\sin\left(3x+\frac{n\pi}2\right)$，$(\sin2x)^{(n)}=2^n\sin\left(2x+\frac{n\pi}2\right)$`,
          R`合并（和差、数乘法则）：$y^{(n)}=\dfrac34\sin\left(x+\dfrac{n\pi}2\right)-\dfrac{3^n}4\sin\left(3x+\dfrac{n\pi}2\right)+2^{n-1}\sin\left(2x+\dfrac{n\pi}2\right)$`,
          R`检验 $n=1$：公式给出 $\dfrac34\cos x-\dfrac34\cos3x+\cos2x$；把 $\cos3x=4\cos^3x-3\cos x$ 代入，前两项 $=3\cos x-3\cos^3x=3\sin^2x\cos x$，正好等于直接求导的 $3\sin^2x\cos x+\cos2x$`
        ],
        pitfall: R`$\frac12\cdot2^n$ 写成 $2^n$；三倍角公式记错符号（$\sin3x=3\sin x-4\sin^3x$）；把 $\sin^2x$ 的 $n$ 阶导数写成 $[(\sin x)^{(n)}]^2$`,
        practice: "教材习题2-3 第10(2)题（p98，答案习题全解 p69）；吉米【184】【185】（p54）；武忠祥 题型三(六)例3（p73）"
      },
      {
        id: "t8", name: "莱布尼茨公式：乘积中有一个低次多项式",
        signal: R`求 $x^2\mathrm e^{2x}$、$x^2\sin2x$、$x\ln x$、$(x^2+1)\mathrm e^x$ 这类"低次多项式 × 有 $n$ 阶公式的函数"的高阶导数，阶数很大（20、50 或 $n$）`,
        example: { q: R`$y=x^2\sin2x$，求 $y^{(50)}$。`, src: "教材习题2-3 第9(2)题 p98（解答 习题全解 p69）" },
        idea: {
          key: R`==令 $u$ 为有 $n$ 阶公式的那个因子、$v$ 为多项式，代入莱布尼茨公式==；$m$ 次多项式的 $m+1$ 阶导数为 0，展开后只剩前 $m+1$ 项。`,
          how: [
            R`分配：$u$ = 要求很多阶的函数（$\mathrm e^{ax}$、$\sin ax$、$\ln$ 等），$v$ = 多项式`,
            R`写出 $v,v',v'',\cdots$ 直到为 0，确定剩几项`,
            R`写出 $u^{(n)},u^{(n-1)},\cdots$（套常用公式）`,
            R`按 $\mathrm C_n^0u^{(n)}v+\mathrm C_n^1u^{(n-1)}v'+\mathrm C_n^2u^{(n-2)}v''$ 写出，化简相位和系数`
          ],
          refs: [
            { src: "30讲 p132", text: R`见到求两个函数乘积的高阶导数，一般用莱布尼茨公式即可，有时要结合"(1) 归纳法"中的通式` },
            { src: "18讲 第4讲 二 p36", text: R`若是(或可恒等变形为) $f(x)\cdot(ax^2+bx+c)$，例如 $\mathrm e^x(1+x^2)$，则用莱布尼茨乘积求导公式，因为 $(ax^2+bx+c)'''=0$，使用莱布尼茨公式求导后只剩三项` }
          ]
        },
        think: R`$x^2$ 求三次导就是 0，所以令 $u=\sin2x$（有公式 $2^k\sin\left(2x+\frac{k\pi}2\right)$），$v=x^2$，莱布尼茨展开只剩 3 项`,
        first: R`令 $u=\sin2x$，$v=x^2$，写出只剩 3 项的莱布尼茨展开`,
        steps: [
          R`准备：$v=x^2$，$v'=2x$，$v''=2$，$v^{(k)}=0\ (k\geqslant3)$；$u^{(k)}=(\sin2x)^{(k)}=2^k\sin\left(2x+\dfrac{k\pi}2\right)$`,
          R`莱布尼茨公式（教材 p97）只剩三项：$y^{(50)}=u^{(50)}v+\mathrm C_{50}^1u^{(49)}v'+\mathrm C_{50}^2u^{(48)}v''$`,
          R`==化简相位（周期 $2\pi$，**去掉 $2\pi$ 的整数倍**）：$\sin\left(2x+25\pi\right)=-\sin2x$，$\sin\left(2x+\dfrac{49\pi}2\right)=\sin\left(2x+\dfrac\pi2\right)=\cos2x$，$\sin(2x+24\pi)=\sin2x$==`,
          R`代入：第一项 $2^{50}x^2\cdot(-\sin2x)$；第二项 $50\cdot2^{49}\cos2x\cdot2x=2^{50}\cdot50x\cos2x$；第三项 $\dfrac{50\cdot49}2\cdot2^{48}\sin2x\cdot2=2^{50}\cdot\dfrac{1225}2\sin2x$`,
          R`合并：$y^{(50)}=2^{50}\left(-x^2\sin2x+50x\cos2x+\dfrac{1225}2\sin2x\right)$`
        ],
        pitfall: R`把 $u$、$v$ 分反（让 $\sin2x$ 当 $v$），要写 51 项；$\mathrm C_{50}^2$ 写成 $50\cdot49$ 漏了除以 2；相位 $\frac{49\pi}2$ 化简出错`,
        practice: "教材 例8（p97）、习题2-3 第9题（p98，答案习题全解 p69）；30讲 例4.17（p132）；检验：1000题基础篇第4章 17题；强化篇第4章 12题（先由 $f'(\ln x)=x\ln x$ 求出 $f'$）"
      },
      {
        id: "t9", name: "某一点的 n 阶导数 f⁽ⁿ⁾(x₀)",
        signal: R`问 $f^{(n)}(0)$、$f^{(n)}(1)$ 这类某点的值，函数是 $(x-x_0)^m\cdot g(x)$ 或 $x^2\ln(1+x)$、$x^22^x$ 形式（含一个在 $x_0$ 处为 0 的低次因子）`,
        example: { q: R`求函数 $f(x)=x^2\ln(1+x)$ 在 $x=0$ 处的 $n$ 阶导数 $f^{(n)}(0)\ (n\geqslant3)$。`, src: "吉米【188】p55；教材习题2-3 第11题 p98" },
        idea: {
          key: R`==用莱布尼茨公式写出 $f^{(n)}(x)$ 后先别化简，直接代 $x=x_0$：含 $(x-x_0)$ 因子的项全部为 0，通常只剩一项==；这一项就是多项式因子恰好被求导到"常数"的那一项。`,
          how: [
            R`令 $v$ = 含 $(x-x_0)$ 的多项式因子，$u$ = 另一个因子`,
            R`写出 $v^{(k)}(x_0)$：只有一个 $k$ 使它不为 0（如 $v=x^2$ 时只有 $v''(0)=2$）`,
            R`莱布尼茨公式里只保留这一项：$f^{(n)}(x_0)=\mathrm C_n^ku^{(n-k)}(x_0)v^{(k)}(x_0)$`,
            R`代入 $u^{(n-k)}(x_0)$ 的公式，化简阶乘`
          ],
          refs: [
            { src: "18讲 第4讲 例4.3 p36", text: R`$f(x)=(x^3-1)^n=(x-1)^n(x^2+x+1)^n$ … 故 $f^{(n)}(1)=\mathrm C_n^n\left[(x-1)^n\right]^{(n)}(x^2+x+1)^n\big|_{x=1}=3^nn!$` },
            { src: "武忠祥 题型三(六)例4 p74", text: R`$u(0)=0$，$u'(0)=0$，$u''(0)=2$，$u^{(k)}(0)=0\ (k\geqslant3)$，$f^{(n)}(0)=\mathrm C_n^2u^{(2)}(0)v^{(n-2)}(0)$` }
          ]
        },
        think: R`$x^2$ 在 0 处的各阶导数只有 $(x^2)''=2$ 不为 0，所以莱布尼茨展开代 $x=0$ 后只剩 $\mathrm C_n^2\cdot2\cdot[\ln(1+x)]^{(n-2)}\big|_{x=0}$ 这一项`,
        first: R`令 $u=\ln(1+x)$，$v=x^2$，莱布尼茨展开代 $x=0$ 只留一项`,
        steps: [
          R`设 $u=\ln(1+x)$，$v=x^2$：$v(0)=0$，$v'(0)=0$，$v''(0)=2$，$v^{(k)}=0\ (k\geqslant3)$`,
          R`莱布尼茨公式：$f^{(n)}(x)=u^{(n)}x^2+\mathrm C_n^1u^{(n-1)}\cdot2x+\mathrm C_n^2u^{(n-2)}\cdot2$（$n\geqslant3$ 保证三项里 $u$ 都至少求 1 阶）`,
          R`==**代 $x=0$，前两项含 $x$ 为 0**：$f^{(n)}(0)=\mathrm C_n^2\cdot2\cdot u^{(n-2)}(0)=n(n-1)\,u^{(n-2)}(0)$==`,
          R`套 $\ln(1+x)$ 公式（教材 例6 p96）：$u^{(n-2)}(x)=\dfrac{(-1)^{n-3}(n-3)!}{(1+x)^{n-2}}$，所以 $u^{(n-2)}(0)=(-1)^{n-3}(n-3)!=(-1)^{n-1}(n-3)!$`,
          R`化简：$f^{(n)}(0)=(-1)^{n-1}n(n-1)(n-3)!=\dfrac{(-1)^{n-1}n!}{n-2}$（因为 $n!=n(n-1)(n-2)(n-3)!$）`,
          R`检验 $n=3$：公式给出 $\dfrac{6}{1}=6$；直接算 $f'''(0)$ 也是 6`
        ],
        pitfall: R`代点前把三项都化简，算得很繁；$u^{(n-2)}$ 的公式里阶乘写成 $(n-2)!$（应为 $(n-3)!$）；$n\geqslant3$ 的条件忽略（$n=2$ 时 $u^{(0)}=\ln(1+x)$ 不能套公式）`,
        practice: "吉米【187】【188】（p54–55）；教材习题2-3 第11题（p98，答案习题全解 p70）；30讲 例4.19 方法二（p134）、习题4.8（p135，解答 p137–138）；18讲 例4.3（p36）；检验：1000题基础篇第4章 11、18题"
      },
      {
        id: "t10", name: "分段函数在分段点的二阶导数（求参数）",
        signal: R`分段函数含待定常数 $a,b,c$，要求"$f(x)$ 具有二阶导数"或"$f''(0)$ 存在"；或问分段点处 $f''(x_0)$ 是否存在`,
        example: { q: R`设 $f(x)=\begin{cases}\mathrm e^x\cos x,&x\leqslant0\\ax^2+bx+c,&x>0\end{cases}$，试选择常数 $a,b,c$，使 $f(x)$ 具有二阶导数。`, src: "教材习题2-3 第8题 p98（解答 习题全解 p68）" },
        idea: {
          key: R`==分段点处的高阶导数只能用定义，并且要按顺序逐层满足：连续 → 一阶可导（左右导数相等）→ 二阶可导（$f'$ 的左右导数相等），每一层得到一个方程==。`,
          how: [
            R`连续：左极限 = 右极限 = $f(x_0)$`,
            R`一阶：用定义求 $f'_-(x_0)$、$f'_+(x_0)$，令其相等，得到 $f'(x_0)$`,
            R`写出两侧的 $f'(x)$ 表达式`,
            R`二阶：用 $\lim\limits_{x\to x_0^\pm}\dfrac{f'(x)-f'(x_0)}{x-x_0}$ 求左右二阶导数，令其相等`
          ],
          refs: [
            { src: "习题全解 习题2-3 第8题 p68", text: R`$f(x)$ 在 $x=0$ 处二阶可导，即 $f''_-(0)=f''_+(0)$，因为 $f''_-(0)=\lim\limits_{x\to0^-}\dfrac{f'(x)-f'(0)}{x-0}$` },
            { src: "18讲 第4讲 四 p37", text: R`特殊点的高阶导数：(1) 分段函数的分段点；(2) 带绝对值的函数` }
          ]
        },
        think: R`三个未知数对应三个条件——连续定 $c$，一阶可导定 $b$，二阶可导定 $a$；分段点 0 处一律用定义，不能直接拿两边公式的值比`,
        first: R`分段点 0 处依次用连续、一阶导数、二阶导数，列三个方程解 $a,b,c$`,
        steps: [
          R`连续：$\lim\limits_{x\to0^-}\mathrm e^x\cos x=1=f(0)$，$\lim\limits_{x\to0^+}(ax^2+bx+c)=c$，所以 $c=1$`,
          R`==一阶，左导数（定义）：$f'_-(0)=\lim\limits_{x\to0^-}\dfrac{\mathrm e^x\cos x-1}{x}=\lim\left(\dfrac{\mathrm e^x-1}x\cos x+\dfrac{\cos x-1}x\right)=1+0=1$（等价无穷小，1.7）==`,
          R`一阶，右导数：$f'_+(0)=\lim\limits_{x\to0^+}\dfrac{ax^2+bx+1-1}{x}=b$；由 $f'_-(0)=f'_+(0)$ 得 $b=1$，且 $f'(0)=1$`,
          R`写出两侧导函数：$x<0$ 时 $f'(x)=\mathrm e^x(\cos x-\sin x)$；$x>0$ 时 $f'(x)=2ax+1$`,
          R`二阶，左：$f''_-(0)=\lim\limits_{x\to0^-}\dfrac{\mathrm e^x\cos x-\mathrm e^x\sin x-1}{x}=\lim\left(\dfrac{\mathrm e^x\cos x-1}x-\dfrac{\mathrm e^x\sin x}x\right)=1-1=0$`,
          R`二阶，右：$f''_+(0)=\lim\limits_{x\to0^+}\dfrac{2ax+1-1}{x}=2a$；令 $2a=0$，得 $a=0$。所以 $a=0$，$b=1$，$c=1$`
        ],
        pitfall: R`跳过连续性直接比较导数；求 $f''_\pm(0)$ 时，分子里减去的 $f'(0)$ 要用定义求出的值，不能拿一侧公式在 0 处的值代替；只比较两侧 $f''(x)$ 公式在 0 的值，忘了前两个条件`,
        practice: "教材习题2-3 第8题（p98，答案习题全解 p68）；18讲 例4.5（p37–38，含参数方程，学完 2.4 再做）"
      },
      {
        id: "t11", name: "物理应用：由速度求加速度",
        signal: R`给出运动规律 $s=s(t)$ 求加速度；或给出速度是位置的函数 $v=f(s)$（如"速度与 $\sqrt s$ 成反比"），求加速度`,
        example: { q: R`密度大的陨星进入大气层时，它离地心为 $s$ km 时的速度与 $\sqrt s$ 成反比。试证陨星的加速度与 $s^2$ 成反比。`, src: "教材习题2-3 第6题 p98（解答 习题全解 p68）" },
        idea: {
          key: R`==加速度是对时间 $t$ 的二阶导数 $a=\dfrac{\mathrm d^2s}{\mathrm dt^2}=\dfrac{\mathrm dv}{\mathrm dt}$==；速度若写成 $s$ 的函数，对 $t$ 求导要用链式法则：$a=\dfrac{\mathrm dv}{\mathrm ds}\cdot\dfrac{\mathrm ds}{\mathrm dt}=v\dfrac{\mathrm dv}{\mathrm ds}$。`,
          how: [
            R`把条件写成式子：$v=\dfrac{\mathrm ds}{\mathrm dt}=f(s)$（比例题设比例系数 $k$）`,
            R`$a=\dfrac{\mathrm d}{\mathrm dt}f(s)=f'(s)\cdot\dfrac{\mathrm ds}{\mathrm dt}=f'(s)f(s)$`,
            R`代入化简，看与题目要求的形式是否一致`
          ],
          refs: [
            { src: "习题全解 习题2-3 第7题 p68", text: R`$a=\dfrac{\mathrm d^2x}{\mathrm dt^2}=\dfrac{\mathrm d}{\mathrm dx}(f(x))\dfrac{\mathrm dx}{\mathrm dt}=f'(x)f(x)$` }
          ]
        },
        think: R`速度给的是 $s$ 的函数 $v=\dfrac{k}{\sqrt s}$，而加速度要对 $t$ 求导，$s$ 又是 $t$ 的函数，所以要用链式法则：先对 $s$ 求导，再乘 $\dfrac{\mathrm ds}{\mathrm dt}=v$`,
        first: R`设比例系数 $k$，写出 $v=ks^{-\frac12}$，再对 $t$ 求导`,
        steps: [
          R`设比例系数 $k$：$v=\dfrac{\mathrm ds}{\mathrm dt}=\dfrac{k}{\sqrt s}=ks^{-\frac12}$`,
          R`==链式法则：$a=\dfrac{\mathrm dv}{\mathrm dt}=\dfrac{\mathrm dv}{\mathrm ds}\cdot\dfrac{\mathrm ds}{\mathrm dt}$==`,
          R`$\dfrac{\mathrm dv}{\mathrm ds}=-\dfrac12ks^{-\frac32}$，$\dfrac{\mathrm ds}{\mathrm dt}=ks^{-\frac12}$`,
          R`相乘：$a=-\dfrac12ks^{-\frac32}\cdot ks^{-\frac12}=-\dfrac{k^2}{2s^2}$，即加速度与 $s^2$ 成反比（负号表示方向）`
        ],
        pitfall: R`直接把 $\dfrac{\mathrm dv}{\mathrm ds}$ 当成加速度，漏乘 $\dfrac{\mathrm ds}{\mathrm dt}$，得到与 $s^{\frac32}$ 成反比`,
        practice: "教材习题2-3 第5、6、7题（p98，答案习题全解 p67–68）"
      },
      {
        id: "t12", name: "求导转化法：由 y' 的等式用莱布尼茨得递推式", tag: "研",
        signal: R`求 $\dfrac{x}{1+x^2}$、$\arctan x$、$\arcsin x$ 一类函数在 0 处的 $n$ 阶导数，函数不能拆成常用公式型，但 $y$ 或 $y'$ 乘上一个多项式后很简单`,
        example: { q: R`设 $y=\dfrac{x}{1+x^2}$，求 $y^{(n)}$ 满足的递推关系式及 $y^{(2n+1)}(0)$。`, src: "18讲 第4讲 例4.4 p36–37" },
        idea: {
          key: R`==把函数写成"多项式 × $y$（或 $y'$）= 简单函数"的等式，两边求 $n$ 阶导数，左边用莱布尼茨公式（多项式因子只剩两三项），再代 $x=0$，得到 $y^{(n)}(0)$ 和 $y^{(n-2)}(0)$ 之间的递推式，从初值一路推==。`,
          how: [
            R`变形：$y=\frac{P}{Q}$ 写成 $Qy=P$；$\arctan x$ 写成 $(1+x^2)y'=1$`,
            R`两边求 $n$ 阶导数，左边用莱布尼茨公式，右边多项式求高阶后为 0`,
            R`代 $x=0$，得到递推式`,
            R`算出初值 $y(0)$、$y'(0)$，按奇偶分别推出通式`
          ],
          refs: [
            { src: "18讲 第4讲 三 p36", text: R`若非"亲戚"，也不能恒等变形，考虑求一阶、二阶导再恒等变形。如 $y=\arctan x$，$(\arctan x)'=\frac1{1+x^2}$，即 $y'(1+x^2)=1$，转化到"二、莱布尼茨公式法"` },
            { src: "30讲 p132", text: R`当一个函数求高阶导数较困难时，若能转化成两个函数的乘积形式，亦可用莱布尼茨公式` }
          ]
        },
        think: R`$\dfrac{x}{1+x^2}$ 直接求高阶导数很繁，去分母得 $(1+x^2)y=x$；左边是"二次多项式 × $y$"，求 $n$ 阶导数只剩 3 项，右边 $x$ 求两阶以上为 0`,
        first: R`去分母得 $(1+x^2)y=x$，两边求 $n$ 阶导数`,
        steps: [
          R`去分母：$(1+x^2)y=x$`,
          R`两边求 $n$ 阶（$n\geqslant2$），左边用莱布尼茨公式，$(1+x^2)'=2x$，$(1+x^2)''=2$，三阶以上为 0：$(1+x^2)y^{(n)}+n\cdot2x\,y^{(n-1)}+\dfrac{n(n-1)}2\cdot2\,y^{(n-2)}=0$`,
          R`这就是递推关系式：$(1+x^2)y^{(n)}+2nxy^{(n-1)}+n(n-1)y^{(n-2)}=0\ (n\geqslant2)$`,
          R`==**代 $x=0$**，中间项消失：$y^{(n)}(0)=-n(n-1)y^{(n-2)}(0)$==`,
          R`初值：$y(0)=0$；$y'=\dfrac{1-x^2}{(1+x^2)^2}$，$y'(0)=1$`,
          R`偶数阶：从 $y(0)=0$ 推出 $y^{(2n)}(0)=0$；奇数阶：$y'''(0)=-3\cdot2\cdot1=-3!$，$y^{(5)}(0)=-5\cdot4\cdot(-3!)=5!$，依此类推 $y^{(2n+1)}(0)=(-1)^n(2n+1)!$`
        ],
        pitfall: R`右边 $x$ 的 $n$ 阶导数在 $n=1$ 时是 1，不是 0，所以递推式只对 $n\geqslant2$ 成立；莱布尼茨展开时把系数 $\frac{n(n-1)}2\cdot2$ 化简成 $n(n-1)$ 前漏了 $\frac12$`,
        practice: "18讲 例4.4（p36–37）；30讲 p132 $\arcsin x$ 的注；检验：1000题强化篇第4章 15题（先求 $f'$）"
      },
      {
        id: "t13", name: "利用奇偶性判断 f⁽ⁿ⁾(0)=0", tag: "研",
        signal: R`只问 $f^{(4)}(0)$、$f^{(2n)}(0)$ 这类某一阶在 0 处的值，函数本身（或加减一个常数后）是奇函数或偶函数，如 $\dfrac1{2^x+1}$、$\dfrac{x}{1+x^2}$`,
        example: { q: R`设 $f(x)=\dfrac1{2^x+1}$，$x\in\mathbf R$，则 $f^{(4)}(0)=$ ____。`, src: "18讲 第4讲 例4.6 p38" },
        idea: {
          key: R`==可导的奇函数求导一次变偶函数，偶函数求导一次变奇函数==；奇函数在 0 处有定义时值为 0。所以奇函数的偶数阶导数在 0 处为 0，偶函数的奇数阶导数在 0 处为 0。函数不是奇偶函数时，看能否减去一个常数变成奇偶函数（常数求导为 0）。`,
          how: [
            R`判断 $f(-x)$ 与 $f(x)$ 的关系；不是奇偶时试 $f(x)-C$`,
            R`确定 $f^{(n)}$ 的奇偶性：奇函数的偶数阶导数为奇函数，偶函数的奇数阶导数为奇函数`,
            R`$f^{(n)}$ 为奇函数且在 0 处有定义，则 $f^{(n)}(0)=0$`
          ],
          refs: [
            { src: "18讲 第4讲 五 p38", text: R`$f(x)$ 为奇函数 ⇒ $f^{(2n)}(x)$ 为奇函数，$f^{(2n+1)}(x)$ 为偶函数 → 在零点有定义时，$f^{(2n)}(0)=0$；$f(x)$ 为偶函数 ⇒ … 在零点有定义时，$f^{(2n+1)}(0)=0$` }
          ]
        },
        think: R`$f(0)=\frac12$，$f$ 不是奇函数；但 $\frac1{2^x+1}$ 关于点 $\left(0,\frac12\right)$ 对称，减去 $\frac12$ 就是奇函数，而减常数不改变导数`,
        first: R`先减去 $\frac12$ 构造奇函数，再用奇偶性和\"减常数不改变导数\"`,
        steps: [
          R`令 $g(x)=\dfrac1{2^x+1}-\dfrac12=\dfrac{1-2^x}{2(2^x+1)}$，则 $f(x)=g(x)+\dfrac12$，$f^{(4)}(x)=g^{(4)}(x)$`,
          R`验证奇偶：$g(-x)=\dfrac{1-2^{-x}}{2(2^{-x}+1)}$，分子分母同乘 $2^x$ 得 $\dfrac{2^x-1}{2(1+2^x)}=-g(x)$，所以 $g$ 是 $\mathbf R$ 上的奇函数`,
          R`==奇偶性怎么传下去：对 $g(-x)=-g(x)$ 两边求导，左边是复合函数要乘 $(-x)'=-1$，得 $-g'(-x)=-g'(x)$，即 $g'(-x)=g'(x)$，$g'$ 是偶函数；同理每求一次导奇偶互换，所以 $g''$ 奇、$g'''$ 偶、$g^{(4)}$ 奇==`,
          R`$g^{(4)}$ 是奇函数且在 0 处有定义，所以 $g^{(4)}(0)=0$，即 $f^{(4)}(0)=0$`,
          R`检验：直接算 $f'(0)=-\dfrac{\ln2}4\neq0$、$f''(0)=0$，与"$g$ 奇 ⇒ 偶数阶在 0 处为 0"一致`
        ],
        pitfall: R`看到 $f(0)\neq0$ 就以为用不了奇偶性（减常数后再判断）；奇偶规律记反，以为奇函数的奇数阶导数在 0 处为 0`,
        practice: "18讲 例4.6（p38）、例4.4 注（p37）"
      },
      {
        id: "t14", name: "eᵃˣ·sin bx 型的 n 阶导数（辅助角）", tag: "研",
        signal: R`求 $\mathrm e^x\sin x$、$\mathrm e^x\cos x$、$\mathrm e^{ax}\sin bx$ 的 $n$ 阶导数通式（两个因子都求不完，莱布尼茨展开有 $n+1$ 项）`,
        example: { q: R`设 $f(x)=\mathrm e^x\sin x$，求 $f^{(n)}(x)$。`, src: "武忠祥 题型三(六)例2 p73" },
        idea: {
          key: R`==求一阶后得到 $\mathrm e^x(\sin x+\cos x)$，用辅助角公式合成一个正弦 $\sqrt2\mathrm e^x\sin\left(x+\frac\pi4\right)$，形式和原函数一样，只是多了因子 $\sqrt2$、相位加 $\frac\pi4$，于是每求一次导都重复这件事==。`,
          how: [
            R`求一阶导数`,
            R`用 $A\sin x+B\cos x=\sqrt{A^2+B^2}\sin(x+\varphi)$ 合并`,
            R`看出"形式不变、乘常数、相位平移"，归纳出通式`
          ],
          refs: [
            { src: "武忠祥 题型三(六)例2 p73", text: R`$f'(x)=\mathrm e^x\sin x+\mathrm e^x\cos x=\mathrm e^x(\sin x+\cos x)=\sqrt2\mathrm e^x\sin\left(x+\frac\pi4\right)$，$f^{(n)}(x)=(\sqrt2)^n\mathrm e^x\sin\left(x+\frac{n\pi}4\right)$` }
          ]
        },
        think: R`$\mathrm e^x\sin x$ 的两个因子求导都不会消失，莱布尼茨公式要写 $n+1$ 项；但求一次导后 $\sin x+\cos x$ 能合成一个正弦，函数"长得和原来一样"`,
        first: R`先求一阶导并合成一个正弦，再找 $n$ 阶导数的规律`,
        steps: [
          R`一阶（乘积法则）：$f'(x)=\mathrm e^x\sin x+\mathrm e^x\cos x=\mathrm e^x(\sin x+\cos x)$`,
          R`辅助角：$\sin x+\cos x=\sqrt2\left(\dfrac1{\sqrt2}\sin x+\dfrac1{\sqrt2}\cos x\right)=\sqrt2\sin\left(x+\dfrac\pi4\right)$，所以 $f'(x)=\sqrt2\,\mathrm e^x\sin\left(x+\dfrac\pi4\right)$`,
          R`==观察：$f'$ 就是把原函数里的 $x$（在 $\sin$ 里）换成 $x+\frac\pi4$ 再乘 $\sqrt2$；对 $\mathrm e^x\sin\left(x+\frac\pi4\right)$ 再求导，同样得到 $\sqrt2\mathrm e^x\sin\left(x+\frac{2\pi}4\right)$==`,
          R`归纳：$f^{(n)}(x)=(\sqrt2)^n\mathrm e^x\sin\left(x+\dfrac{n\pi}4\right)$`,
          R`检验 $n=2$：$2\mathrm e^x\sin\left(x+\frac\pi2\right)=2\mathrm e^x\cos x$；直接求 $f''=[\mathrm e^x(\sin x+\cos x)]'=2\mathrm e^x\cos x$，一致`
        ],
        pitfall: R`相位每次加 $\frac\pi4$ 而不是 $\frac\pi2$；把 $\sqrt2$ 的幂写漏；固定阶数（如 4 阶）也可用莱布尼茨公式直接展开（教材习题2-3 第9(1)题）`,
        practice: "武忠祥 题型三(六)例2（p73）；教材习题2-3 第9(1)题（p98，答案习题全解 p69，莱布尼茨法）"
      },
      {
        id: "t15", name: "含 |x| 的函数在 0 处最高几阶可导", tag: "研",
        signal: R`$f(x)=|x|\cdot g(x)$ 或 $|x|^k$ 型，问"使 $f^{(n)}(0)$ 存在的最大 $n$"或"$f$ 在 0 处几阶可导"`,
        example: { q: R`设 $f(x)=|x|\sin^2x$，则使 $f^{(n)}(0)$ 存在的阶数 $n$ 的最大值为（　）。`, src: "1000题强化篇第4章 16题" },
        idea: {
          key: R`==把绝对值去掉写成分段函数，两侧分别求导函数==；在 0 处一阶一阶用定义求左右导数，第一次出现左右不等时就停。直观判断：$|x|\cdot x^k$ 在 0 处恰好 $k$ 阶可导（$|x|^{k+1}$ 求 $k$ 次导后剩 $C|x|$）。`,
          how: [
            R`写成分段：$x\geqslant0$ 一个式子，$x<0$ 取相反数`,
            R`求两侧 $f'(x)$，用定义求 $f'_\pm(0)$`,
            R`若相等，求两侧 $f''(x)$，再用 $\dfrac{f'(x)-f'(0)}{x}$ 求 $f''_\pm(0)$`,
            R`重复，直到左右不等`
          ],
          refs: [
            { src: "18讲 第4讲 四 p37", text: R`特殊点的高阶导数：(1) 分段函数的分段点；(2) 带绝对值的函数` }
          ]
        },
        think: R`$\sin^2x\sim x^2$，所以 $f\approx|x|x^2=|x|^3$，预计 2 阶可导、3 阶不可导；严格做法是写成 $\pm\sin^2x\cdot x$ 两段，逐阶用定义`,
        first: R`按 $x\geqslant0$、$x<0$ 写成两段，逐阶用定义判断`,
        steps: [
          R`分段：$x\geqslant0$ 时 $f=x\sin^2x$；$x<0$ 时 $f=-x\sin^2x$`,
          R`==一阶：$f'_\pm(0)=\lim\limits_{x\to0^\pm}\dfrac{\pm x\sin^2x}{x}=0$，所以 $f'(0)=0$；两侧用乘积法则：$(x\sin^2x)'=\sin^2x+x\cdot2\sin x\cos x=\sin^2x+x\sin2x$，所以 $x>0$ 时 $f'(x)=\sin^2x+x\sin2x$，$x<0$ 时取相反数==`,
          R`二阶：$f''_+(0)=\lim\limits_{x\to0^+}\dfrac{\sin^2x+x\sin2x}{x}=\lim(\sin x\cdot\dfrac{\sin x}{x}+\sin2x)=0$，同理 $f''_-(0)=0$，所以 $f''(0)=0$`,
          R`两侧二阶导函数：$x>0$ 时 $f''(x)=(\sin^2x)'+(x\sin2x)'=\sin2x+(\sin2x+2x\cos2x)=2\sin2x+2x\cos2x$；$x<0$ 时取相反数`,
          R`三阶：$f'''_+(0)=\lim\limits_{x\to0^+}\dfrac{2\sin2x+2x\cos2x}{x}=4+2=6$，$f'''_-(0)=-6$，不相等，$f'''(0)$ 不存在。最大值 $n=2$`
        ],
        pitfall: R`以为有绝对值就在 0 处不可导；只看到 $\sin^2x$ 处处任意阶可导就以为乘积也任意阶可导`,
        practice: "18讲 例4.5（p37–38，学完 2.4 参数方程后做）；检验：1000题强化篇第4章 16题"
      }
    ],

    pitfalls: [
      { wrong: R`$[f(x^2)]''=f''(x^2)\cdot4x^2$`, why: R`一阶导数 $2xf'(x^2)$ 是两个因子的乘积，求二阶要用乘积法则，漏了"导 $2x$"那一项`, right: R`$[f(x^2)]''=2f'(x^2)+4x^2f''(x^2)$（习题全解 p67）`, test: R`取 $f(u)=u^2$，即 $y=x^4$：按错的公式算 $y''$ 是多少？正确是多少？`, ans: R`错的得 $8x^2$；正确是 $12x^2$`, link: "题型 2" },
      { wrong: R`$\dfrac{\mathrm d^2x}{\mathrm dy^2}=\dfrac1{y''}$`, why: R`只有一阶导数能取倒数；二阶要对 $y$ 求导，必须乘 $\frac{\mathrm dx}{\mathrm dy}$`, right: R`$\dfrac{\mathrm d^2x}{\mathrm dy^2}=-\dfrac{y''}{(y')^3}$（习题全解 p67）`, test: R`$y=\mathrm e^x$，$x=\ln y$：$\dfrac{\mathrm d^2x}{\mathrm dy^2}$ 是 $\dfrac1{y''}$ 吗？`, ans: R`不是：$\frac1{y''}=\frac1y$，而 $(\ln y)''=-\frac1{y^2}$`, link: "题型 4" },
      { wrong: R`速度 $v=f(s)$ 时，加速度 $a=\dfrac{\mathrm dv}{\mathrm ds}=f'(s)$`, why: R`加速度是对时间 $t$ 求导，$s$ 是 $t$ 的函数`, right: R`$a=\dfrac{\mathrm dv}{\mathrm ds}\cdot\dfrac{\mathrm ds}{\mathrm dt}=f'(s)f(s)$（习题全解 p68）`, test: R`$v=\dfrac{k}{\sqrt s}$，加速度是多少？`, ans: R`$-\dfrac{k^2}{2s^2}$`, link: "题型 11" },
      { wrong: R`$(\sin2x)^{(n)}=\sin\left(2x+\dfrac{n\pi}2\right)$`, why: R`每求一次导，内层 $2x$ 都贡献一个因子 2`, right: R`$[\sin(ax+b)]^{(n)}=a^n\sin\left(ax+b+\dfrac{n\pi}2\right)$（30讲 p130）`, test: R`$(\sin2x)''=$？`, ans: R`$-4\sin2x$`, link: "知识点 正弦、余弦函数" },
      { wrong: R`$[\ln(1+x)]^{(n)}=\dfrac{(-1)^nn!}{(1+x)^n}$`, why: R`把 $\ln(1+x)$ 和 $\frac1{1+x}$ 的公式混了；$\ln(1+x)$ 的 $n$ 阶是 $\frac1{1+x}$ 的 $n-1$ 阶`, right: R`$[\ln(1+x)]^{(n)}=\dfrac{(-1)^{n-1}(n-1)!}{(1+x)^n}$（教材 例6 p96）`, test: R`错的公式在 $n=1$ 时给出什么？对吗？`, ans: R`给出 $-\frac1{1+x}$，错；应为 $\frac1{1+x}$`, link: "知识点 对数函数和倒数函数" },
      { wrong: R`$\left(\dfrac1{2x-3}\right)^{(n)}=\dfrac{(-1)^nn!}{(2x-3)^{n+1}}$`, why: R`漏了内层导数 2 的 $n$ 次方`, right: R`$\left(\dfrac1{ax+b}\right)^{(n)}=\dfrac{(-1)^na^nn!}{(ax+b)^{n+1}}$（30讲 p130；武忠祥 例1 p73）`, test: R`$\left(\dfrac1{2x-3}\right)'=$？`, ans: R`$-\dfrac2{(2x-3)^2}$`, link: "题型 6" },
      { wrong: R`$(uv)^{(n)}=u^{(n)}v^{(n)}$，或莱布尼茨系数都写成 1`, why: R`乘积的 $n$ 阶导数有 $n+1$ 项，系数是组合数 $\mathrm C_n^k$`, right: R`$(uv)^{(n)}=\sum\limits_{k=0}^n\mathrm C_n^ku^{(n-k)}v^{(k)}$（教材 p97）`, test: R`$(x\mathrm e^x)''=$？`, ans: R`$(x+2)\mathrm e^x$（按 $u''v''$ 算是 0）`, link: "题型 8" },
      { wrong: R`用莱布尼茨公式时让多项式当 $u$（求 $n-k$ 阶）`, why: R`那样多项式的高阶导数在前几项为 0，非零项在后面，要写到最后几项，容易漏`, right: R`让要求很多阶的函数当 $u$，多项式当 $v$，展开式只写前 $m+1$ 项（30讲 p132）`, test: R`$(x^2\mathrm e^x)^{(10)}$ 有几项非零？结果是多少？`, ans: R`3 项，$\mathrm e^x(x^2+20x+90)$`, link: "题型 8" },
      { wrong: R`$\mathrm C_{50}^2u^{(48)}v''$ 写成 $50\cdot49\cdot u^{(48)}v''$`, why: R`$\mathrm C_n^2=\frac{n(n-1)}{2!}$，漏了除以 $2!$`, right: R`第三项系数是 $\frac{n(n-1)}2$（教材 p97）`, test: R`$\mathrm C_{20}^2=$？`, ans: R`190`, link: "题型 8" },
      { wrong: R`$y=x\ln x$ 的通式 $y^{(n)}=\dfrac{(-1)^n(n-2)!}{x^{n-1}}$ 对所有 $n$ 成立`, why: R`通式是从 $y''=x^{-1}$ 开始归纳的，只对 $n\geqslant2$ 成立`, right: R`写明 $n\geqslant2$，$y'=\ln x+1$ 单独写（习题全解 p69）`, test: R`代 $n=1$ 得到什么？`, ans: R`$(-1)!$ 无意义；实际 $y'=\ln x+1$`, link: "题型 5" },
      { wrong: R`$(\sin^2x)^{(n)}=\left[(\sin x)^{(n)}\right]^2$`, why: R`$n$ 阶导数不能和乘方交换顺序`, right: R`先降幂 $\sin^2x=\frac{1-\cos2x}2$，得 $(\sin^2x)^{(n)}=-2^{n-1}\cos\left(2x+\frac{n\pi}2\right)$（习题全解 p69）`, test: R`$(\sin^2x)'$ 和 $[(\sin x)']^2$ 各是什么？`, ans: R`$\sin2x$；$\cos^2x$`, link: "题型 7" },
      { wrong: R`求 $f^{(n)}(0)$ 时把莱布尼茨展开的每一项都化简后再代点`, why: R`含 $x$ 因子的项代 0 后为 0，提前化简是白算`, right: R`先代点，只保留多项式因子恰好求成常数的那一项（武忠祥 例4 p74）`, test: R`$f(x)=x^2\ln(1+x)$，$f'''(0)=$？`, ans: R`6`, link: "题型 9" },
      { wrong: R`$x^2\ln(1+x)$ 在 0 处只剩的那一项是 $\mathrm C_n^2\cdot2\cdot\dfrac{(-1)^{n-3}(n-2)!}{1}$`, why: R`$\ln(1+x)$ 的 $m$ 阶导数里阶乘是 $(m-1)!$，$m=n-2$ 时是 $(n-3)!$`, right: R`$f^{(n)}(0)=n(n-1)(-1)^{n-1}(n-3)!=\dfrac{(-1)^{n-1}n!}{n-2}$（吉米【188】p55）`, test: R`$n=4$ 时 $f^{(4)}(0)=$？`, ans: R`$-12$`, link: "题型 9" },
      { wrong: R`分段函数两段的二阶导数公式在分段点的值相等，就二阶可导`, why: R`二阶可导要以连续、一阶可导为前提；分段点的导数只能用定义`, right: R`依次检查连续、$f'_-=f'_+$、$f''_-=f''_+$（习题全解 p68）`, test: R`$f(x)=\begin{cases}x^2,&x\leqslant0\\x^2+1,&x>0\end{cases}$，两侧 $f''$ 都是 2，$f''(0)$ 存在吗？`, ans: R`不存在：$f$ 在 0 处不连续，连一阶导数都没有`, link: "题型 10" },
      { wrong: R`$f$ 在 $x_0$ 处二阶可导，所以 $f''$ 在 $x_0$ 处连续`, why: R`和一阶一样，可导推不出导函数连续；能推出的是低一阶的 $f'$ 在 $x_0$ 处连续`, right: R`$n$ 阶可导 ⇒ $f^{(n-1)}$ 在 $x_0$ 连续；$f^{(n)}$ 连续要另外判断（教材 p94；武忠祥 p59）`, test: R`$f(x)=x^4\sin\frac1x\ (x\neq0)$，$f(0)=0$：$f''(0)$ 存在吗？$f''$ 在 0 处连续吗？`, ans: R`$f''(0)=0$ 存在；$x\neq0$ 时 $f''$ 含 $-\sin\frac1x$，在 0 处没有极限，不连续`, link: "知识点 n 阶可导蕴含的条件" },
      { wrong: R`对 $f'=\mathrm e^{f}$ 求导得 $f''=\mathrm e^{f}$`, why: R`$\mathrm e^{f(x)}$ 是复合函数，要乘内层导数 $f'(x)$`, right: R`$f''=\mathrm e^{f}f'=\mathrm e^{2f}$（吉米【181】p53）`, test: R`$f'=f^2$，$f''=$？`, ans: R`$2ff'=2f^3$`, link: "题型 3" },
      { wrong: R`求 $y''(x_0)$ 时先把 $x_0$ 代入 $y'$，再对得到的数求导`, why: R`$y'(x_0)$ 是常数，常数的导数为 0；必须先求出导函数再代点`, right: R`先求出 $y''(x)$ 的表达式，最后代入 $x_0$`, test: R`$y=x^3$：$[y'(1)]'$ 和 $y''(1)$ 各是多少？`, ans: R`0；6`, link: "题型 1" },
      { wrong: R`奇函数的奇数阶导数在 0 处为 0`, why: R`奇函数求导一次变偶函数，偶函数在 0 处不一定为 0`, right: R`奇函数的偶数阶导数为奇函数，在 0 处为 0；偶函数的奇数阶导数在 0 处为 0（18讲 p38）`, test: R`$\sin x$ 在 0 处的一阶、二阶导数各是多少？`, ans: R`1；0`, link: "题型 13" },
      { wrong: R`$\left(x^{\frac52}\right)'''$ 求到第三阶就是 0`, why: R`只有正整数次幂的高阶导数才会变成 0；$\mu$ 不是正整数时系数永远不为 0`, right: R`$\left(x^{\frac52}\right)'''=\frac52\cdot\frac32\cdot\frac12x^{-\frac12}=\frac{15}{8\sqrt x}$（教材 例7 p96）`, test: R`$(x^5)^{(6)}$ 和 $\left(x^{\frac52}\right)^{(3)}$ 各是多少？`, ans: R`0；$\dfrac{15}{8\sqrt x}$`, link: "知识点 幂函数" },
      { wrong: R`$\dfrac{x}{x-1}$ 的 $n$ 阶导数直接套 $\left(\frac1{x-1}\right)^{(n)}$ 再乘 $x$`, why: R`$x$ 不是常数，不能提到求导号外面`, right: R`先分出整式：$\dfrac{x}{x-1}=1+\dfrac1{x-1}$，$\left(\dfrac{x}{x-1}\right)^{(n)}=\dfrac{(-1)^nn!}{(x-1)^{n+1}}$`, test: R`$\left(\dfrac{x}{x-1}\right)'=$？`, ans: R`$-\dfrac1{(x-1)^2}$`, link: "题型 6" }
    ]
  });
})();
