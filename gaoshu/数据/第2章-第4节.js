/*
类型: 题型
标题: 高等数学 第2章 第4节 隐函数及由参数方程所确定的函数的导数 相关变化率 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-27
更新日期: 2026-10-27
状态: 完成

页码一律是印刷页（转换稿的页码标记在每页开头，标记后面的内容属于该页；已用教材目录核对：2.4 从 p98 开始，参数方程从 p102 开始，2.5 从 p107 开始）。
教材 = 同济第八版上册；习题全解 = 同济第八版上册习题全解指导；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；
30讲 = 张宇基础30讲；18讲 = 张宇高数18讲；武忠祥 = 高等数学辅导讲义（强化）；1000题 = 张宇1000题（只写题号）。
含变限积分的题（吉米【218】、武忠祥 题型三(二)例3、1000题强化篇第4章 6、8题）要到第五章学完再做，题型卡里没有收。
网页上不标「⚠️未核验」；没有出处的几条（陷阱小题、反例）都已逐条核对，计算用代码验算过。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "2.4",
    chapter: 2,
    title: "隐函数及由参数方程所确定的函数的导数 相关变化率",
    pages: "教材 p98–107",
    sources: [
      "教材 第二章第四节 p98–107",
      "习题全解 习题2-4 p70–78",
      "吉米 第2章 §3【189】–【200】p55–58；综合题【219】【220】【223】–【227】p64–67",
      "30讲 第4讲 6–9 p126–129、习题 4.4、4.6 p135；第7讲 相关变化率 p187–188",
      "18讲 第4讲 例4.7、例4.8 p39–40；第7讲 例7.1 p73",
      "武忠祥 第2章第一节 (六)3、5、6 p58–59；题型二 p67；题型三(二)(三) p69–71",
      "1000题 基础篇第4章、第7章；强化篇第4章"
    ],
    updated: "2026-10-27",

    framework: {
      main: R`本节三种函数都"不是 $y=f(x)$ 的现成样子"，但求导的根只有一个：2.2 的链式法则。隐函数把 $y$ 当成 $x$ 的函数，方程两边对 $x$ 求导再解出 $y'$；对数求导法是先取对数、再按隐函数求；参数方程把 $t$ 当中间变量，$\frac{\mathrm dy}{\mathrm dx}=\frac{\mathrm dy/\mathrm dt}{\mathrm dx/\mathrm dt}$；相关变化率把所有量都当成时间 $t$ 的函数，关系式两边对 $t$ 求导。做题时始终问一句：谁是谁的函数。`,
      nodes: [
        { id: "CHAIN", go: "2.2:p5", col: 1, row: 0, kind: "map", label: "链式法则（2.2）", sub: "中间变量要乘它的导数" },
        { id: "INV", go: "2.2:p3", col: 2, row: 0, kind: "map", label: "反函数法则（2.2）", sub: R`$\frac{\mathrm dt}{\mathrm dx}=1\big/\frac{\mathrm dx}{\mathrm dt}$` },
        { id: "IMPL", go: "p2", col: 0, row: 1, kind: "func", label: "隐函数求导", sub: R`两边对 $x$ 求导，解出 $y'$` },
        { id: "LOG", go: "p4", col: 0, row: 2, kind: "func", label: "对数求导法", sub: "乘除乘方、幂指函数" },
        { id: "PARA", go: "p7", col: 2, row: 1, kind: "func", label: "参数方程求导", sub: R`$\frac{\mathrm dy}{\mathrm dx}=\frac{\psi'(t)}{\varphi'(t)}$` },
        { id: "PARA2", go: "p8", col: 2, row: 2, kind: "prop", label: "参数方程二阶导", sub: R`对 $t$ 求导再除以 $\varphi'(t)$` },
        { id: "TAN", go: "t9", col: 1, row: 1, kind: "build", label: "切线、法线、速度", sub: "斜率就是导数" },
        { id: "RATE", go: "p9", col: 1, row: 2, kind: "build", label: "相关变化率", sub: R`关系式两边对 $t$ 求导` }
      ],
      edges: [
        { from: "CHAIN", to: "IMPL", label: R`$y$ 当中间变量` },
        { from: "IMPL", to: "LOG", label: "取对数后照做" },
        { from: "CHAIN", to: "PARA", label: R`$y\to t\to x$` },
        { from: "INV", to: "PARA", label: "取倒数" },
        { from: "PARA", to: "PARA2", label: R`再对 $t$ 求导` },
        { from: "IMPL", to: "TAN", label: "求出斜率" },
        { from: "PARA", to: "TAN", label: "求出斜率" },
        { from: "IMPL", to: "RATE", label: R`改成对 $t$ 求导` }
      ],
      keys: [
        { q: R`隐函数、参数方程、相关变化率三类问题各怎么求导？`, a: R`隐函数：方程两边对 $x$ 求导，$y$ 看作 $x$ 的函数，解出 $y'$（教材 p99）；参数方程：$\frac{\mathrm dy}{\mathrm dx}=\frac{\mathrm dy/\mathrm dt}{\mathrm dx/\mathrm dt}$（教材 p102–103）；相关变化率：找出变量间的关系式，两边对时间 $t$ 求导（教材 p105）。三者都是链式法则。` },
        { q: R`二阶导数怎么求？最容易错在哪？`, a: R`隐函数：对 $y'$ 的式子再对 $x$ 求导，$y$、$y'$ 仍是 $x$ 的函数，结果里的 $y'$ 用一阶结果代掉（教材例 4 p100–101；吉米【195】点评 p57）。参数方程：$\frac{\mathrm d^2y}{\mathrm dx^2}=\frac{\mathrm d}{\mathrm dt}\left(\frac{\mathrm dy}{\mathrm dx}\right)\Big/\frac{\mathrm dx}{\mathrm dt}$，不是 $\frac{\psi''}{\varphi''}$（教材式 (4-5) p103；30讲 p127）。` },
        { q: R`什么时候用对数求导法？`, a: R`函数由多个因式的乘、除、乘方、开方构成，或是幂指函数 $u^v$ 时：先两边取对数化成和差，再按隐函数求导（教材 p101；30讲 p128；武忠祥 p59）。幂指函数也可写成 $\mathrm e^{v\ln u}$ 直接求（教材 p101）。` },
        { q: R`求"某一点"的导数，第一步先做什么？`, a: R`隐函数：先由原方程求出对应的 $y_0$（教材例 2 p99–100；吉米【192】点评 p56）；参数方程：先由 $x_0$ 求出对应的 $t_0$（吉米【225】p66）；相关变化率：先求导、后代入此刻的值（教材例 10 p105–106）。` }
      ]
    },

    points: [
      {
        group: "一、隐函数的导数",
        items: [
          {
            id: "p1", kind: "定义", name: "显函数、隐函数和隐函数的显化", page: "教材 p98–99",
            body: R`形如 $y=f(x)$、等号左边是因变量、右边是含自变量的式子的函数叫做显函数。如果变量 $x$ 和 $y$ 满足方程 $F(x,y)=0$，在一定条件下，当 $x$ 取某区间内的任一值时，相应地总有满足这方程的唯一的 $y$ 值存在，就说方程 $F(x,y)=0$ 在该区间内确定了一个隐函数。把隐函数化成显函数叫做隐函数的显化。`,
            notes: [
              R`例：$x+y^3-1=0$ 确定隐函数，显化为 $y=\sqrt[3]{1-x}$（教材 p99）`,
              R`显化有时困难，甚至不可能，所以要能不显化、直接由方程求导（教材 p99）`,
              R`"方程两端对 $x$ 求导"的意思：把 $y=y(x)$ 代入得恒等式 $F[x,y(x)]\equiv0$，对这个恒等式两端求导（教材 p99 脚注）`
            ],
            quiz: R`方程 $x^2+y^2=1$ 在 $(-1,1)$ 上确定几个连续的隐函数？各是什么？`
          },
          {
            id: "p2", kind: "方法", name: "隐函数求导法", page: "教材 p99–100",
            body: R`设 $y=y(x)$ 由方程 $F(x,y)=0$ 确定且可导。把方程两端分别对 $x$ 求导，求导时把 $y$ 看作 $x$ 的函数（含 $y$ 的项按复合函数求导，要乘 $y'$），得到一个关于 $y'$ 的一次方程，从中解出 $y'$。结果中可以含 $y$。`,
            notes: [
              R`例 1：$\mathrm e^y+xy-\mathrm e=0$，两端对 $x$ 求导得 $\mathrm e^yy'+y+xy'=0$，所以 $y'=-\dfrac{y}{x+\mathrm e^y}$（教材 p99）`,
              R`$(y^2)'=2yy'$，$(xy)'=y+xy'$，$(\mathrm e^y)'=\mathrm e^yy'$：每个含 $y$ 的项都多乘一个 $y'$（30讲 p126）`,
              R`求 $y'|_{x=x_0}$：先由原方程求出对应的 $y_0$，再把 $(x_0,y_0)$ 一起代入（教材例 2 p99–100；吉米【192】点评(2) p56）`,
              R`也可以用公式 $\dfrac{\mathrm dy}{\mathrm dx}=-\dfrac{F'_x}{F'_y}$，这是多元函数微分学里的隐函数求导公式（武忠祥 p58）`
            ],
            quiz: R`$y^5+2y-x-3x^7=0$ 确定的隐函数在 $x=0$ 处的导数是多少？`
          },
          {
            id: "p3", kind: "方法", name: "隐函数的二阶导数", page: "教材 p100–101",
            body: R`求出 $y'$ 后，把 $y'$ 的表达式两端再对 $x$ 求导，求导时 $y$ 仍是 $x$ 的函数；结果中出现的 $y'$ 用一阶导数的结果代入，最后只含 $x$、$y$。也可以把求一阶导数后得到的等式两端再对 $x$ 求导一次，然后解出 $y''$。`,
            notes: [
              R`例 4：$x-y+\frac12\sin y=0$，$y'=\dfrac2{2-\cos y}$，$y''=\dfrac{-2\sin y\cdot y'}{(2-\cos y)^2}=\dfrac{-4\sin y}{(2-\cos y)^3}$（教材 p100–101）`,
              R`两种做法：先解出 $y'$ 再求导；或方程两边连续求导两次再解 $y''$（吉米【195】点评 p57）`,
              R`求 $y''(x_0)$：依次求出 $y_0$、$y'(x_0)$，再代入（武忠祥 题型三(二)例 2 p69–70）`,
              R`一阶结果能用原方程化简时先化简，二阶会省很多事（吉米【193】点评 p56；武忠祥 p69）`
            ],
            quiz: R`$x^2+y^2=1$ 确定的隐函数，$y''$ 用 $y$ 怎么表示？`
          },
          {
            id: "p4", kind: "方法", name: "对数求导法", page: "教材 p101–102",
            body: R`先在 $y=f(x)$ 的两端取对数，然后两端对 $x$ 求导（注意 $y=y(x)$），得 $\dfrac{y'}{y}=[\ln f(x)]'$，于是 $y'=y\cdot[\ln f(x)]'$。适用于由多个因式的乘、除、乘方、开方构成的函数和幂指函数。`,
            notes: [
              R`例 6：$y=\sqrt{\dfrac{(x-1)(x-2)}{(x-3)(x-4)}}$，$\ln y=\frac12[\ln(x-1)+\ln(x-2)-\ln(x-3)-\ln(x-4)]$，$y'=\dfrac y2\left(\dfrac1{x-1}+\dfrac1{x-2}-\dfrac1{x-3}-\dfrac1{x-4}\right)$（教材 p101–102）`,
              R`取对数要求 $y>0$；教材例 6 先假定 $x>4$，在 $x<1$、$2<x<3$ 上用同样方法得到相同结果，所以不必分区间讨论（教材 p102）`,
              R`最后一步别忘了乘 $y$，并把 $y$ 换回 $x$ 的表达式（30讲 p128）`
            ],
            quiz: R`对数求导法适合哪两类函数？最后一步要做什么？`
          },
          {
            id: "p5", kind: "公式", name: "幂指函数的导数", page: "教材 p101",
            body: R`幂指函数 $y=u^v$（$u>0$），$u=u(x)$、$v=v(x)$ 都可导时，可用对数求导法，也可写成 $y=\mathrm e^{v\ln u}$ 直接求导：$y'=u^v\left(v'\ln u+\dfrac{vu'}{u}\right)$。`,
            notes: [
              R`例 5：$y=x^{\sin x}$（$x>0$），$\ln y=\sin x\ln x$，$y'=x^{\sin x}\left(\cos x\ln x+\dfrac{\sin x}x\right)$（教材 p101）`,
              R`公式不用背：先化成 $\mathrm e^{v\ln u}$，再按复合函数求导（30讲 p128–129）`,
              R`底和指数都含 $x$，所以既不能按幂函数 $(x^\mu)'$，也不能按指数函数 $(a^x)'$ 求（30讲 例4.12 p129）`
            ],
            quiz: R`$(x^x)'=$？$\left(x^{\frac1x}\right)'=$？`
          }
        ]
      },
      {
        group: "二、由参数方程所确定的函数的导数",
        items: [
          {
            id: "p6", kind: "定义", name: "由参数方程所确定的函数", page: "教材 p102",
            body: R`若参数方程 $\begin{cases}x=\varphi(t),\\y=\psi(t)\end{cases}$ 确定 $y$ 与 $x$ 间的函数关系，则称此函数关系所表达的函数为由参数方程所确定的函数。`,
            notes: [
              R`把对应于同一个 $t$ 值的 $y$ 与 $x$ 看作对应的，就得到 $y$ 与 $x$ 之间的函数关系；例：抛射体轨迹消去 $t$ 得 $y=\dfrac{v_2}{v_1}x-\dfrac{g}{2v_1^2}x^2$（教材 p102）`,
              R`消去参数有时有困难，所以要能直接由参数方程求导（教材 p102）`
            ],
            quiz: R`$x=v_1t$，$y=v_2t-\frac12gt^2$ 消去 $t$ 后是什么曲线？`
          },
          {
            id: "p7", kind: "定理", name: "参数方程的求导公式", page: "教材 p102–103",
            body: R`设 $x=\varphi(t)$ 具有单调连续反函数 $t=\varphi^{-1}(x)$，且 $x=\varphi(t)$、$y=\psi(t)$ 都可导，$\varphi'(t)\neq0$，则 $\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\psi'(t)}{\varphi'(t)}$，即 $\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\mathrm dy/\mathrm dt}{\mathrm dx/\mathrm dt}$。`,
            notes: [
              R`推导：$y=\psi[\varphi^{-1}(x)]$ 是复合函数，$\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\mathrm dy}{\mathrm dt}\cdot\dfrac{\mathrm dt}{\mathrm dx}$，再用反函数法则 $\dfrac{\mathrm dt}{\mathrm dx}=1\Big/\dfrac{\mathrm dx}{\mathrm dt}$（教材 p102）`,
              R`结果是 $t$ 的函数，作为 $x$ 的函数要和 $x=\varphi(t)$ 一起表示（教材 p103 脚注）`,
              R`切线：$t_0$ 对应点 $(\varphi(t_0),\psi(t_0))$，斜率 $\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{t=t_0}$（教材例 7 p103–104）`,
              R`速度：大小 $\sqrt{\left(\frac{\mathrm dx}{\mathrm dt}\right)^2+\left(\frac{\mathrm dy}{\mathrm dt}\right)^2}$，方向是切线方向，$\tan\alpha=\dfrac{\mathrm dy}{\mathrm dx}$（教材例 8 p104–105）`
            ],
            quiz: R`椭圆 $x=a\cos t$，$y=b\sin t$ 在 $t=\frac\pi4$ 处的切线斜率是多少？`
          },
          {
            id: "p8", kind: "公式", name: "参数方程的二阶导数", page: "教材 p103",
            body: R`如果 $x=\varphi(t)$、$y=\psi(t)$ 还二阶可导，那么 $\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{\mathrm d}{\mathrm dt}\left(\dfrac{\psi'(t)}{\varphi'(t)}\right)\cdot\dfrac{\mathrm dt}{\mathrm dx}=\dfrac{\psi''(t)\varphi'(t)-\psi'(t)\varphi''(t)}{\varphi'^3(t)}$。`,
            notes: [
              R`不用背公式：记"一阶导数对 $t$ 求导，再除以 $\frac{\mathrm dx}{\mathrm dt}$"（30讲 p127；武忠祥 p70）`,
              R`例 9 摆线 $x=a(t-\sin t)$，$y=a(1-\cos t)$：$\dfrac{\mathrm dy}{\mathrm dx}=\cot\dfrac t2$，$\dfrac{\mathrm d^2y}{\mathrm dx^2}=-\dfrac1{a(1-\cos t)^2}$（$t\neq2n\pi$）（教材 p105）`,
              R`$\dfrac{\mathrm d^2y}{\mathrm dx^2}\neq\dfrac{\psi''(t)}{\varphi''(t)}$：二阶导数不能"上下各求两次导"`,
              R`三阶同理：$\dfrac{\mathrm d^3y}{\mathrm dx^3}=\dfrac{\mathrm d}{\mathrm dt}\left(\dfrac{\mathrm d^2y}{\mathrm dx^2}\right)\Big/\dfrac{\mathrm dx}{\mathrm dt}$（教材习题2-4 第10题 p107，答案习题全解 p76）`
            ],
            quiz: R`$x=\frac{t^2}2$，$y=1-t$，$\dfrac{\mathrm d^2y}{\mathrm dx^2}=$？`
          }
        ]
      },
      {
        group: "三、相关变化率",
        items: [
          {
            id: "p9", kind: "定义", name: "相关变化率", page: "教材 p105–106",
            body: R`设 $x=x(t)$ 及 $y=y(t)$ 都是可导函数，而变量 $x$ 与 $y$ 间存在某种关系，从而变化率 $\dfrac{\mathrm dx}{\mathrm dt}$ 与 $\dfrac{\mathrm dy}{\mathrm dt}$ 间也存在一定关系，这两个相互依赖的变化率称为相关变化率。相关变化率问题就是研究这两个变化率之间的关系，以便从其中一个变化率求出另一个变化率。`,
            notes: [
              R`做法：① 设变量，建立变量之间的关系式；② 关系式两边对 $t$ 求导，得到变化率之间的关系；③ 代入此刻的数值，求出未知的变化率（教材例 10 p105–106；30讲 p188）`,
              R`例 10：$\tan\alpha=\dfrac h{500}$，两边对 $t$ 求导得 $\sec^2\alpha\cdot\dfrac{\mathrm d\alpha}{\mathrm dt}=\dfrac1{500}\cdot\dfrac{\mathrm dh}{\mathrm dt}$，代入 $\sec^2\alpha=2$、$\frac{\mathrm dh}{\mathrm dt}=140$，得 $0.14$ rad/min（教材 p105–106）`,
              R`本质是链式法则：$\dfrac{\mathrm dy}{\mathrm dt}=f'(x)\dfrac{\mathrm dx}{\mathrm dt}$，$\dfrac{\mathrm dy}{\mathrm dt}$ 和 $\dfrac{\mathrm dx}{\mathrm dt}$ 由 $f'(x)$ 联系在一起（30讲 p187）`
            ],
            quiz: R`圆面积 $S=\pi r^2$，$\frac{\mathrm dr}{\mathrm dt}=6$ m/s，$r=12$ m 时 $\frac{\mathrm dS}{\mathrm dt}$ 是多少？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "隐函数的一阶导数（含求某点的导数）",
        signal: R`"设 $y=y(x)$ 由方程 $F(x,y)=0$ 确定"，求 $\dfrac{\mathrm dy}{\mathrm dx}$ 或 $\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=x_0}$`,
        example: { q: R`设函数 $y=y(x)$ 由方程 $\ln(x^2+y)=x^3y+\sin x$ 确定，则 $\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=0}=$ ____。`, src: "吉米【189】p55" },
        idea: {
          key: R`==把 $y$ 看作 $x$ 的函数，方程两边同时对 $x$ 求导，含 $y$ 的项按复合函数求导（多乘 $y'$），得到关于 $y'$ 的一次方程，解出 $y'$==；求某一点的值时，先由原方程求出 $y_0$，再把 $(x_0,y_0)$ 代入。`,
          how: [
            R`求某点的值时，先把 $x_0$ 代入原方程，求出 $y_0$`,
            R`方程两边对 $x$ 求导：含 $y$ 的项是复合函数，乘 $y'$；$xy$ 这类乘积用乘积法则`,
            R`移项，把含 $y'$ 的项放一边，解出 $y'$`,
            R`求某点：把 $(x_0,y_0)$ 代入；也可以在第 2 步的等式里直接代入再解，更快`
          ],
          refs: [
            { src: "教材 p99 脚注", text: R`这里说的方程两端对 $x$ 求导，是指恒等式两端对 $x$ 求导` },
            { src: "吉米【192】点评(1) p56", text: R`要把方程中 $x$ 看作自变量，而将 $y$ 视为 $x$ 的函数，方程中关于 $y$ 的函数便是 $x$ 的复合函数，用复合函数的求导法则，便可得到关于 $y'$ 的一次方程，从中解得 $y'$ 即为所求` },
            { src: "吉米【192】点评(2) p56", text: R`在计算 $x=x_0$ 时的导数时，通常由原方程解出相应 $y_0$，然后 $(x_0,y_0)$ 一起代入 $y'$ 的表达式中` },
            { src: "30讲 p126", text: R`隐函数求导，直接两边对 $x$ 求导，注意复合结构` }
          ]
        },
        think: R`方程里 $y$ 解不出来，就不解：把 $y$ 当成 $x$ 的函数，两边同时对 $x$ 求导。只问 $x=0$ 处的值，所以先从原方程求出 $x=0$ 时的 $y$，求导后的等式直接代点，不用整理出 $y'$ 的一般式。`,
        first: R`把 $x=0$ 代入原方程，求出 $y(0)$`,
        steps: [
          R`求 $y_0$：$x=0$ 代入，$\ln y=0+\sin0=0$，所以 $y(0)=1$`,
          R`==两边对 $x$ 求导。左边外层 $\ln u$、内层 $u=x^2+y$，链式法则：$\dfrac{1}{x^2+y}\cdot(2x+y')$；右边 $x^3y$ 用乘积法则：$3x^2y+x^3y'$，$\sin x$ 求导得 $\cos x$==`,
          R`**得到等式** $\dfrac{2x+y'}{x^2+y}=3x^2y+x^3y'+\cos x$`,
          R`代入 $x=0$、$y=1$：左边 $\dfrac{0+y'(0)}{0+1}=y'(0)$，右边 $0+0+\cos0=1$`,
          R`所以 $\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=0}=1$`
        ],
        pitfall: R`$\ln(x^2+y)$ 求导时写成 $\dfrac{2x}{x^2+y}$，漏了 $y'$；不先求 $y(0)$，把 $y$ 也当成 0 代入，$\ln 0$ 没有意义`,
        practice: "教材 例1、例2（p99–100）、习题2-4 第1题（p106，答案习题全解 p70）；吉米【189】–【191】（p55–56）；30讲 习题4.6（p135）；检验：1000题强化篇第4章 4题（第一问）"
      },
      {
        id: "t2", name: "隐函数的二阶导数",
        signal: R`由方程 $F(x,y)=0$ 确定 $y=y(x)$，求 $\dfrac{\mathrm d^2y}{\mathrm dx^2}$ 或 $y''(x_0)$`,
        example: { q: R`已知函数 $y=y(x)$ 由方程 $\mathrm e^y+6xy+x^2-1=0$ 确定，则 $y''(0)=$ ____。`, src: "吉米【192】p56" },
        idea: {
          key: R`==先求一阶（得到含 $x$、$y$、$y'$ 的等式），再对这个等式两边对 $x$ 求导一次==；求导时 $y$ 和 $y'$ 都是 $x$ 的函数。求一般式时把 $y'$ 的结果代回，最后只含 $x$、$y$；求某点时依次算出 $y_0$、$y'_0$，再代入求 $y''_0$。`,
          how: [
            R`由原方程求 $y_0$（只求某点时）`,
            R`两边对 $x$ 求导一次，求出 $y'$（或某点的 $y'_0$）`,
            R`对一阶的等式（或 $y'$ 的表达式）再对 $x$ 求导：$y$ 的函数要乘 $y'$，$y'$ 的导数是 $y''$`,
            R`求某点：代入 $x_0$、$y_0$、$y'_0$，解出 $y''_0$；求一般式：把 $y'$ 代掉，能用原方程化简就化简`
          ],
          refs: [
            { src: "吉米【195】点评 p57", text: R`求隐函数的二阶导数，一般有两种解法：(1) 先求出 $y'$（注意，结果中一般含有 $y$），再继续求二阶导数；(2) 对方程两边同时求导两次，然后再解 $y''$。无论是哪一种解法，在求导时，都应该记住 $y$ 是 $x$ 的函数，在 $y''$ 的结果中，如果含有 $y'$，应用一阶导数的结果代入` },
            { src: "吉米【193】点评 p56", text: R`求隐函数二阶导数的关键是一阶导数能得出较简洁的结果，不然求二阶导数非常繁琐` },
            { src: "18讲 p39", text: R`在 $F[x,y(x)]=0$ 两边对 $x$ 求导，得 $G[x,y(x),y'(x)]=0\Rightarrow y'(x)$；再对 $G[x,y(x),y'(x)]=0$ 求导，得 $y''(x)$` }
          ]
        },
        think: R`只问 $x=0$ 一个点，不必求出 $y''$ 的一般式：先由原方程得 $y(0)$，求导一次代点得 $y'(0)$，对求导后的等式再求导一次代点得 $y''(0)$。用"等式两边连续求导两次"比"先解出 $y'$ 再用商法则"计算量小。`,
        first: R`把 $x=0$ 代入原方程，求出 $y(0)$`,
        steps: [
          R`求 $y_0$：$x=0$ 时 $\mathrm e^y-1=0$，所以 $y(0)=0$`,
          R`两边对 $x$ 求导一次：$\mathrm e^y\cdot y'+6y+6xy'+2x=0$（$\mathrm e^y$ 是复合函数乘 $y'$；$6xy$ 用乘积法则）①`,
          R`代入 $x=0$、$y=0$：$y'(0)+0+0+0=0$，所以 $y'(0)=0$`,
          R`==**① 式两边再对 $x$ 求导**：$\mathrm e^y y'\cdot y'+\mathrm e^yy''$（$\mathrm e^y\cdot y'$ 用乘积法则，$\mathrm e^y$ 的导数是 $\mathrm e^yy'$）$+6y'+6y'+6xy''+2=0$，即 $\mathrm e^y(y')^2+\mathrm e^yy''+12y'+6xy''+2=0$==`,
          R`代入 $x=0$、$y=0$、$y'(0)=0$：$0+y''(0)+0+0+2=0$，所以 $y''(0)=-2$`,
          R`检验（吉米的做法）：先解出 $y'=-\dfrac{6y+2x}{\mathrm e^y+6x}$，再用商法则求导后代点，同样得 $-2$（吉米【192】p56）`
        ],
        pitfall: R`对 ① 式再求导时，把 $y'$ 当常数，漏掉 $\mathrm e^y(y')^2$ 这一项和 $6xy'$ 求导得到的 $6y'$；先把 $y'(0)=0$ 代入 ① 式再求导，等式变成常数，求不出 $y''$`,
        practice: "教材 例4（p100–101）、习题2-4 第4题（p106，答案习题全解 p71–72）；吉米【192】【193】（p56）；武忠祥 题型三(二) 展示新知、例2（p69–70）；检验：1000题强化篇第4章 4（第二问）、7题"
      },
      {
        id: "t3", name: "含抽象函数的隐函数的二阶导数",
        signal: R`方程里含 $f(\square)$，$\square$ 里有 $y$（如 $y=f(x+y)$、$x\mathrm e^{f(y)}=\mathrm e^y$），题目说"$f$ 具有二阶导数，且 $f'\neq1$"`,
        example: { q: R`$y=f(x+y)$，其中 $f$ 具有二阶导数，且其一阶导数不等于 1，求 $\dfrac{\mathrm d^2y}{\mathrm dx^2}$。`, src: "吉米【194】p56" },
        idea: {
          key: R`==$f$ 的括号里是 $x$ 和 $y$ 的式子，对 $x$ 求导时 $f'(\square)$ 要乘括号里的式子对 $x$ 的导数（里面含 $y'$）==；解出 $y'$ 后再求一次导，$f'(\square)$ 求导还要乘一次括号的导数，最后把 $y'$ 代掉。方程里有指数、乘积时，先取对数化简。`,
          how: [
            R`有乘积、指数（如 $x\mathrm e^{f(y)}=\mathrm e^y$）先两边取对数，化成和差`,
            R`两边对 $x$ 求导：$[f(\square)]'=f'(\square)\cdot\square'$，$\square'$ 里含 $y'$`,
            R`解出 $y'$，结果含 $f'(\square)$`,
            R`再对 $x$ 求导：$[f'(\square)]'=f''(\square)\cdot\square'$，再把 $y'$ 代入化简`
          ],
          refs: [
            { src: "30讲 例4.11 分析 p128", text: R`本题中有"$\mathrm e^{f(y)}$""$\mathrm e^y$"这种复杂的形式，可以考虑两边取对数，……此时变为简单的隐函数方程，两边直接对 $x$ 求导` },
            { src: "30讲 例4.11 p128", text: R`$[f'(y)y']'=f''(y)\cdot y'\cdot y'+f'(y)\cdot y''$` }
          ]
        },
        think: R`$y$ 同时出现在等号左边和 $f$ 的括号里，是隐函数。外层 $f$、内层 $u=x+y$，内层对 $x$ 的导数是 $1+y'$。一阶等式里 $y'$ 出现两次，移项解出；二阶时 $f'(x+y)$ 还是复合函数，再乘一次 $1+y'$。`,
        first: R`两边对 $x$ 求导：$y'=f'(x+y)\cdot(1+y')$`,
        steps: [
          R`一阶：链式法则，外层 $f$、内层 $x+y$，$y'=f'\cdot(1+y')$（$f'$ 简写 $f'(x+y)$）`,
          R`解出 $y'$：$y'-f'y'=f'$，$y'=\dfrac{f'}{1-f'}$（题设 $f'\neq1$ 保证分母不为 0）；顺便得 $1+y'=\dfrac{1}{1-f'}$`,
          R`==**对 $y'=f'\cdot(1+y')$ 两边再对 $x$ 求导**：右边是乘积，$[f'(x+y)]'=f''\cdot(1+y')$，所以 $y''=f''(1+y')^2+f'y''$==`,
          R`解出 $y''$：$y''(1-f')=f''(1+y')^2$，$y''=\dfrac{f''(1+y')^2}{1-f'}$`,
          R`代入 $1+y'=\dfrac1{1-f'}$：$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{f''(x+y)}{[1-f'(x+y)]^3}$`
        ],
        pitfall: R`$[f(x+y)]'$ 写成 $f'(x+y)$，漏乘 $1+y'$；求二阶时 $[f'(x+y)]'$ 只写 $f''$，又漏乘一次 $1+y'$`,
        practice: "吉米【194】【195】（p56–57）；30讲 例4.11（p128）；教材习题2-4 第4(2)题 $y=\\tan(x+y)$（p106，答案习题全解 p72）"
      },
      {
        id: "t4", name: "对数求导法：多个因式的乘除、乘方、开方",
        signal: R`函数是一长串因式相乘、相除，外面套根号或幂次，如 $\sqrt{\dfrac{(x-1)(x-2)}{(x-3)(x-4)}}$、$\sqrt{x\sin x\sqrt{1-\mathrm e^x}}$`,
        example: { q: R`设 $y=\sqrt{\mathrm e^{\frac1x}\sqrt{x\sqrt{\sin x}}}$，求 $y'$。`, src: "吉米【196】p57" },
        idea: {
          key: R`==两边取对数，用对数性质把乘除变加减、乘方开方变系数，然后两边对 $x$ 求导（左边 $\frac{y'}{y}$），最后乘回 $y$==。`,
          how: [
            R`两边取对数：$\ln y=\ln f(x)$`,
            R`用 $\ln(ab)=\ln a+\ln b$、$\ln\frac ab=\ln a-\ln b$、$\ln a^k=k\ln a$ 拆成和差，根号是分数次幂`,
            R`两边对 $x$ 求导：左边 $\dfrac{y'}{y}$，右边逐项求导`,
            R`$y'=y\cdot[\cdots]$，$y$ 换回原来的表达式`
          ],
          refs: [
            { src: "30讲 p128", text: R`对于多项相乘、相除、开方、乘方的式子，一般先取对数再求导` },
            { src: "武忠祥 p59", text: R`如果 $y=y(x)$ 的表达式由多个因式的乘除、乘幂构成，或是幂指函数的形式，则可先将函数取对数，然后两边对 $x$ 求导` },
            { src: "教材 p101", text: R`在某些场合，利用所谓对数求导法求导数比用通常的方法简便些。这种方法是先在 $y=f(x)$ 的两端取对数，然后再求出 $y$ 的导数` }
          ]
        },
        think: R`根号套根号，直接求导要多层链式法则加乘积法则，很容易错。取对数后，根号变成系数 $\frac12$、$\frac14$、$\frac18$，乘积变成加法，每一项都很简单。`,
        first: R`两边取对数，把根号和乘积拆开`,
        steps: [
          R`由内往外数根号：$\mathrm e^{\frac1x}$ 在一层根号里，指数 $\frac12$；$x$ 在两层根号里，指数 $\frac14$；$\sin x$ 在三层根号里，指数 $\frac18$。所以 $y=\mathrm e^{\frac1{2x}}\cdot x^{\frac14}\cdot(\sin x)^{\frac18}$`,
          R`==取对数：$\ln y=\dfrac1{2x}+\dfrac14\ln x+\dfrac18\ln\sin x$（$\ln\mathrm e^{\frac1{2x}}=\frac1{2x}$）==`,
          R`两边对 $x$ 求导，左边 $y$ 是 $x$ 的函数：$\dfrac{y'}{y}=-\dfrac1{2x^2}+\dfrac1{4x}+\dfrac18\cdot\dfrac{\cos x}{\sin x}$`,
          R`**乘回 $y$**：$y'=\dfrac18\left(\dfrac2x-\dfrac4{x^2}+\cot x\right)\sqrt{\mathrm e^{\frac1x}\sqrt{x\sqrt{\sin x}}}$（括号里通分提出 $\frac18$）`
        ],
        pitfall: R`数错根号层数，系数写成 $\frac12$、$\frac12$、$\frac12$；求导后忘了乘 $y$，把 $\dfrac{y'}{y}$ 的结果当成 $y'$`,
        practice: "教材 例6（p101–102）、习题2-4 第5(2)(3)(4)题（p106，答案习题全解 p72–74）；吉米【196】（p57）"
      },
      {
        id: "t5", name: "幂指函数求导",
        signal: R`底和指数都含 $x$：$x^{\sin x}$、$\left(\dfrac x{1+x}\right)^x$、$x^{x^x}$、$(1+x)^{\frac1x}$`,
        example: { q: R`设 $y=x^{x^x}$，求 $y'$。`, src: "吉米【197】p57" },
        idea: {
          key: R`==幂指函数 $u^v$ 既不是幂函数也不是指数函数：写成 $\mathrm e^{v\ln u}$ 按复合函数求导，或两边取对数再求导==；指数里又有幂指函数时，再取一次对数（或再化一次 $\mathrm e$）。`,
          how: [
            R`写成 $u^v=\mathrm e^{v\ln u}$，或两边取对数 $\ln y=v\ln u$`,
            R`对 $v\ln u$ 用乘积法则：$(v\ln u)'=v'\ln u+v\cdot\dfrac{u'}{u}$`,
            R`$y'=u^v\left(v'\ln u+\dfrac{vu'}{u}\right)$`,
            R`$v$ 本身是幂指函数（如 $x^x$）时，先单独求出 $(x^x)'=x^x(\ln x+1)$ 再代入`
          ],
          refs: [
            { src: "教材 p101", text: R`对于一般形式的幂指函数 $y=u^v$（$u>0$），……可像例 5 那样利用对数求导法求出幂指函数的导数，也可把幂指函数表示为 $y=\mathrm e^{v\ln u}$` },
            { src: "30讲 p129", text: R`遇到幂指函数，先化成指数函数，转化为简单的复合函数再去求导。（公式不要记，直接求导）` }
          ]
        },
        think: R`$x^{x^x}$ 的底是 $x$、指数是 $x^x$，是幂指函数。取一次对数得 $\ln y=x^x\ln x$，右边还有幂指函数 $x^x$，所以对右边再用一次已知结果 $(x^x)'=x^x(\ln x+1)$。`,
        first: R`两边取对数：$\ln y=x^x\ln x$`,
        steps: [
          R`取对数：$\ln y=x^x\cdot\ln x$（$\ln a^b=b\ln a$）`,
          R`==两边对 $x$ 求导，右边用乘积法则：$\dfrac{y'}{y}=(x^x)'\ln x+x^x\cdot\dfrac1x$==`,
          R`**求 $(x^x)'$**：$x^x=\mathrm e^{x\ln x}$，$(x^x)'=\mathrm e^{x\ln x}(x\ln x)'=x^x(\ln x+1)$（30讲 例4.12 p129）`,
          R`代回：$\dfrac{y'}{y}=x^x(\ln x+1)\ln x+x^{x-1}=x^{x-1}\left(x\ln^2x+x\ln x+1\right)$（提出 $x^{x-1}$：$x^x=x^{x-1}\cdot x$）`,
          R`乘回 $y=x^{x^x}$：$y'=x^{x^x+x-1}\left(x\ln^2x+x\ln x+1\right)$`
        ],
        pitfall: R`$(x^{\sin x})'$ 按幂函数写成 $\sin x\cdot x^{\sin x-1}$，或按指数函数写成 $x^{\sin x}\ln x$，都只算了一半`,
        practice: "教材 例5（p101）、习题2-4 第5(1)题（p106，答案习题全解 p73–74）；吉米【197】（p57）；30讲 例4.12、4.13（p129）"
      },
      {
        id: "t6", name: "参数方程的一阶导数，求切线、法线",
        signal: R`曲线由 $\begin{cases}x=\varphi(t)\\y=\psi(t)\end{cases}$ 给出，求 $\dfrac{\mathrm dy}{\mathrm dx}$、某参数值或某点处的切线、法线`,
        example: { q: R`曲线 $\begin{cases}x=\mathrm e^t\sin2t,\\y=\mathrm e^t\cos t\end{cases}$ 在点 $(0,1)$ 处的法线方程为 ____。`, src: "吉米【198】p57" },
        idea: {
          key: R`==$\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\psi'(t)}{\varphi'(t)}$==；给的是点（或 $x_0$）时，先求出这点对应的参数 $t_0$；切线斜率是 $\left.\frac{\mathrm dy}{\mathrm dx}\right|_{t_0}$，法线斜率是它的负倒数。`,
          how: [
            R`由给定的点或 $x_0$ 解出对应的 $t_0$（多个解时检查哪个使 $y$ 有意义、对得上点）`,
            R`分别求 $\dfrac{\mathrm dx}{\mathrm dt}$、$\dfrac{\mathrm dy}{\mathrm dt}$，相除`,
            R`代 $t_0$ 得切线斜率 $k$；法线斜率 $-\dfrac1k$（$k=0$ 时法线竖直）`,
            R`点斜式写出方程，再化成一般式`
          ],
          refs: [
            { src: "30讲 p127", text: R`$t$ 是中间变量，要把 $t$ 拉进来：$\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\mathrm dy/\mathrm dt}{\mathrm dx/\mathrm dt}=\dfrac{\psi'(t)}{\varphi'(t)}$` },
            { src: "吉米【225】p66", text: R`当 $x=3$ 时有 $t^2+2t=3$，$t=1$，$t=-3$（此时 $y$ 无意义）` }
          ]
        },
        think: R`给的是点 $(0,1)$ 而不是参数，所以先找 $t$：$x=\mathrm e^t\sin2t=0$ 且 $y=\mathrm e^t\cos t=1$，$t=0$ 满足。再用参数方程求导公式算切线斜率，法线斜率取负倒数。`,
        first: R`由点 $(0,1)$ 求出对应的参数 $t=0$`,
        steps: [
          R`找 $t_0$：$t=0$ 时 $x=\mathrm e^0\sin0=0$，$y=\mathrm e^0\cos0=1$，正是点 $(0,1)$，所以 $t_0=0$`,
          R`==求导（乘积法则）：$\dfrac{\mathrm dx}{\mathrm dt}=\mathrm e^t\sin2t+2\mathrm e^t\cos2t$，$\dfrac{\mathrm dy}{\mathrm dt}=\mathrm e^t\cos t-\mathrm e^t\sin t$==`,
          R`**相除**：$\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\cos t-\sin t}{\sin2t+2\cos2t}$（约去 $\mathrm e^t$）`,
          R`代 $t=0$：切线斜率 $k=\dfrac{1-0}{0+2}=\dfrac12$，法线斜率 $-\dfrac1k=-2$`,
          R`法线：$y-1=-2(x-0)$，即 $2x+y-1=0$`
        ],
        pitfall: R`把 $\frac{\mathrm dx}{\mathrm dt}$ 和 $\frac{\mathrm dy}{\mathrm dt}$ 的位置弄反；求法线时用了切线斜率；没求 $t_0$，把点的横坐标 0 当成 $t$`,
        practice: "教材 例7、例8（p103–105）、习题2-4 第6、7、8题（p107，答案习题全解 p75）；吉米【198】【199】（p57–58）、【224】【225】（p65–66）；检验：1000题基础篇第4章 15题"
      },
      {
        id: "t7", name: "参数方程的二阶导数",
        signal: R`由参数方程确定 $y=y(x)$，求 $\dfrac{\mathrm d^2y}{\mathrm dx^2}$（或某个 $t$ 处的值），有时求三阶`,
        example: { q: R`设函数 $y=y(x)$ 由参数方程 $\begin{cases}x=t-\ln(1+t),\\y=t^3+t^2\end{cases}$ 所确定，则 $\dfrac{\mathrm d^2y}{\mathrm dx^2}=$ ____。`, src: "吉米【200】p58" },
        idea: {
          key: R`==一阶 $\dfrac{\mathrm dy}{\mathrm dx}$ 先化成最简的 $t$ 的函数，再"对 $t$ 求导、除以 $\dfrac{\mathrm dx}{\mathrm dt}$"：$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{\frac{\mathrm d}{\mathrm dt}\left(\frac{\mathrm dy}{\mathrm dx}\right)}{\frac{\mathrm dx}{\mathrm dt}}$==。三阶同理再做一次。`,
          how: [
            R`求 $\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\psi'(t)}{\varphi'(t)}$，化成最简`,
            R`把 $\dfrac{\mathrm dy}{\mathrm dx}$ 对 $t$ 求导`,
            R`**除以 $\dfrac{\mathrm dx}{\mathrm dt}$**（不能漏，也不能除以 $\frac{\mathrm dy}{\mathrm dt}$）`,
            R`求某个 $t_0$ 处的值，最后再代入`
          ],
          refs: [
            { src: "教材式 (4-5) p103", text: R`$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{\mathrm d}{\mathrm dt}\left(\dfrac{\psi'(t)}{\varphi'(t)}\right)\cdot\dfrac{\mathrm dt}{\mathrm dx}=\dfrac{\psi''(t)\varphi'(t)-\psi'(t)\varphi''(t)}{\varphi'^3(t)}$` },
            { src: "30讲 p127", text: R`由参数方程确定的函数的二阶导数（不要背）：若 $\dfrac{\mathrm dy}{\mathrm dx}=w(t)$，则 $\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{w'(t)}{\varphi'(t)}$` },
            { src: "武忠祥 p70", text: R`一阶导数代公式，二阶导数利用 $\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{\mathrm d}{\mathrm dt}\left(\dfrac{y'(t)}{x'(t)}\right)\dfrac1{x'(t)}$` }
          ]
        },
        think: R`二阶导数是"一阶导数对 $x$ 的导数"，而一阶导数是 $t$ 的函数，所以要对 $t$ 求导再乘 $\frac{\mathrm dt}{\mathrm dx}$，也就是除以 $\frac{\mathrm dx}{\mathrm dt}$。一阶结果 $\frac{3t^2+2t}{t/(1+t)}$ 能约成多项式，先化简再求导。`,
        first: R`求 $\dfrac{\mathrm dx}{\mathrm dt}$、$\dfrac{\mathrm dy}{\mathrm dt}$，相除得一阶导数并化简`,
        steps: [
          R`$\dfrac{\mathrm dx}{\mathrm dt}=1-\dfrac1{1+t}=\dfrac t{1+t}$，$\dfrac{\mathrm dy}{\mathrm dt}=3t^2+2t=t(3t+2)$`,
          R`一阶：$\dfrac{\mathrm dy}{\mathrm dx}=t(3t+2)\cdot\dfrac{1+t}t=(t+1)(3t+2)=3t^2+5t+2$（约去 $t$，$t\neq0$）`,
          R`==一阶对 $t$ 求导：$\dfrac{\mathrm d}{\mathrm dt}(3t^2+5t+2)=6t+5$==`,
          R`**除以 $\dfrac{\mathrm dx}{\mathrm dt}$**：$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{6t+5}{\frac t{1+t}}=\dfrac{(6t+5)(t+1)}t$`,
          R`检验：用公式 $\dfrac{\psi''\varphi'-\psi'\varphi''}{\varphi'^3}$，$\psi''=6t+2$，$\varphi''=\dfrac1{(1+t)^2}$，代入化简结果相同（教材式 (4-5) p103）`
        ],
        pitfall: R`把 $\dfrac{\mathrm d}{\mathrm dt}\left(\dfrac{\mathrm dy}{\mathrm dx}\right)=6t+5$ 当成答案，漏除 $\frac{\mathrm dx}{\mathrm dt}$；写成 $\dfrac{\psi''(t)}{\varphi''(t)}=\dfrac{6t+2}{\frac1{(1+t)^2}}$`,
        practice: "教材 例9（p105）、习题2-4 第9、10题（p107，答案习题全解 p75–76）；吉米【200】（p58）；30讲 例4.9（p127）、习题4.4（p135）；18讲 例4.8（p40）；武忠祥 题型三(三) 例1（p70）；检验：1000题基础篇第4章 16题"
      },
      {
        id: "t8", name: "参数方程中 y（或 x）由方程隐式给出",
        signal: R`方程组里一个是 $x=\varphi(t)$，另一个是含 $y$、$t$ 的方程（如 $2y-ty^2+\mathrm e^t=5$），求 $\dfrac{\mathrm dy}{\mathrm dx}$ 或 $\left.\dfrac{\mathrm d^2y}{\mathrm dx^2}\right|_{t=0}$`,
        example: { q: R`设 $y=y(x)$ 由 $\begin{cases}x=\arctan t,\\2y-ty^2+\mathrm e^t=5\end{cases}$ 所确定，求 $\dfrac{\mathrm dy}{\mathrm dx}$。`, src: "吉米【219】p64；30讲 例4.10 p127" },
        idea: {
          key: R`==先把隐式的那个方程看成 $y$ 关于 $t$ 的隐函数，两边对 $t$ 求导求出 $\dfrac{\mathrm dy}{\mathrm dt}$，再套参数方程公式 $\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\mathrm dy/\mathrm dt}{\mathrm dx/\mathrm dt}$==；结果里既有 $t$ 又有 $y$ 是正常的。`,
          how: [
            R`显式那个方程直接求 $\dfrac{\mathrm dx}{\mathrm dt}$`,
            R`隐式那个方程两边对 $t$ 求导（$y$ 是 $t$ 的函数，要乘 $\frac{\mathrm dy}{\mathrm dt}$），解出 $\dfrac{\mathrm dy}{\mathrm dt}$`,
            R`相除得 $\dfrac{\mathrm dy}{\mathrm dx}$`,
            R`求某个 $t_0$ 处的二阶导：先由隐式方程求 $y(t_0)$、$y'(t_0)$、$y''(t_0)$，代公式 $\dfrac{y''x'-x''y'}{x'^3}$ 最省事`
          ],
          refs: [
            { src: "30讲 例4.10 分析 p127", text: R`第二个方程 $2y-ty^2+\mathrm e^t=5$ 是 $y$ 关于 $t$ 的隐函数，直接两端对 $t$ 求导得 $\mathrm dy/\mathrm dt$，然后利用参数方程的求导公式` },
            { src: "吉米【219】点评 p64", text: R`本题为参数方程求导和隐函数求导的综合题，所以答案中应既含有参数 $t$，又含有因变量 $y$` },
            { src: "武忠祥 题型三(三) 例3 注 p71", text: R`本题是隐函数与参数方程求导的一种综合题，直接代公式比较简单` }
          ]
        },
        think: R`$x$ 对 $t$ 是显式的，直接求导；$y$ 对 $t$ 是隐式的，就按隐函数的办法对 $t$ 求导。两个都是"对 $t$ 的导数"，相除就是 $\frac{\mathrm dy}{\mathrm dx}$。`,
        first: R`第二个方程两边对 $t$ 求导，解出 $\dfrac{\mathrm dy}{\mathrm dt}$`,
        steps: [
          R`$\dfrac{\mathrm dx}{\mathrm dt}=\dfrac1{1+t^2}$`,
          R`==**$2y-ty^2+\mathrm e^t=5$ 两边对 $t$ 求导**（$y$ 是 $t$ 的函数；$ty^2$ 用乘积法则，$(y^2)'=2y\frac{\mathrm dy}{\mathrm dt}$）：$2\dfrac{\mathrm dy}{\mathrm dt}-y^2-2ty\dfrac{\mathrm dy}{\mathrm dt}+\mathrm e^t=0$==`,
          R`解出：$\dfrac{\mathrm dy}{\mathrm dt}(2-2ty)=y^2-\mathrm e^t$，$\dfrac{\mathrm dy}{\mathrm dt}=\dfrac{y^2-\mathrm e^t}{2(1-ty)}$`,
          R`相除：$\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{y^2-\mathrm e^t}{2(1-ty)}\cdot(1+t^2)=\dfrac{(y^2-\mathrm e^t)(1+t^2)}{2(1-ty)}$`
        ],
        pitfall: R`对 $t$ 求导时把 $y$ 当常数，$ty^2$ 只求出 $y^2$；以为结果里不能有 $y$，硬去消 $y$`,
        practice: "吉米【219】（p64）、【220】（p65）；30讲 例4.10（p127）；武忠祥 题型三(三) 例3（p71）；检验：1000题基础篇第4章 7题；强化篇第4章 9题"
      },
      {
        id: "t9", name: "隐函数曲线的切线、法线（含水平、铅直切线）",
        signal: R`曲线由方程 $F(x,y)=0$ 给出，求某点处的切线、法线方程，或找有水平切线、铅直切线的点`,
        example: { q: R`设函数 $y=f(x)$ 由方程 $\mathrm e^{2x+y}-\cos(xy)=\mathrm e-1$ 确定，则曲线 $y=f(x)$ 在点 $(0,1)$ 处的法线方程为 ____。`, src: "吉米【223】p65" },
        idea: {
          key: R`==用隐函数求导求出 $y'$，代入切点得切线斜率 $k$==；法线斜率 $-\frac1k$。水平切线：$y'$ 的分子为 0；铅直切线：$y'$ 的分母为 0，都要和原方程联立求点。`,
          how: [
            R`确认点在曲线上（代入原方程）`,
            R`方程两边对 $x$ 求导，代入切点求 $y'_0$（可以不整理出一般式）`,
            R`切线 $y-y_0=k(x-x_0)$；法线 $y-y_0=-\frac1k(x-x_0)$`,
            R`找水平（铅直）切线：令 $y'$ 的分子（分母）为 0，与原方程联立`
          ],
          refs: [
            { src: "教材例 3 p100", text: R`由导数的几何意义知道，所求切线的斜率为 $k=y'|_{x=2}$。椭圆方程的两端分别对 $x$ 求导……` },
            { src: "习题全解 习题2-4 第3题 p71", text: R`令 $y'=0$，得 $2xy-y^2=0$，结合曲线 $C$ 的方程 $x^2y-xy^2=2$，得 $x=-1$，$y=-2$，可知曲线 $C$ 上点 $(-1,-2)$ 处有水平切线` }
          ]
        },
        think: R`曲线是隐函数，斜率就是隐函数在 $(0,1)$ 处的导数。只要一个点的导数，求导后直接代 $x=0$、$y=1$ 解出 $y'$，再写法线。`,
        first: R`方程两边对 $x$ 求导`,
        steps: [
          R`检查：$x=0$、$y=1$ 时 $\mathrm e^1-\cos0=\mathrm e-1$，点在曲线上`,
          R`==两边对 $x$ 求导：$\mathrm e^{2x+y}(2+y')+\sin(xy)\cdot(y+xy')=0$（$-\cos u$ 的导数是 $\sin u\cdot u'$，$u=xy$）==`,
          R`代入 $x=0$、$y=1$：$\mathrm e(2+y')+0=0$，所以 $y'(0)=-2$`,
          R`**法线斜率** $-\dfrac1{-2}=\dfrac12$：$y-1=\dfrac12x$，即 $x-2y+2=0$`
        ],
        pitfall: R`$-\cos(xy)$ 求导符号弄错，或漏乘 $(xy)'=y+xy'$；法线斜率写成 $2$（只取了相反数，没取倒数）`,
        practice: "教材 例3（p100）、习题2-4 第2、3题（p106，答案习题全解 p70–71）；吉米【223】（p65）"
      },
      {
        id: "t10", name: "极坐标曲线的切线、法线",
        signal: R`曲线由极坐标方程 $r=r(\theta)$ 给出（如 $r=1-\cos\theta$、$\rho=\mathrm e^\theta$），求某个 $\theta$ 处的切线、法线的直角坐标方程`,
        example: { q: R`已知曲线的极坐标方程 $r=1-\cos\theta$，求该曲线上对应 $\theta=\dfrac\pi6$ 处的切线与法线的直角坐标方程。`, src: "吉米【227】p66" },
        idea: {
          key: R`==把 $\theta$ 当参数，写成参数方程 $x=r(\theta)\cos\theta$，$y=r(\theta)\sin\theta$，再按参数方程求切线斜率==；斜率不是 $\frac{\mathrm dr}{\mathrm d\theta}$。`,
          how: [
            R`写参数方程：$x=r(\theta)\cos\theta$，$y=r(\theta)\sin\theta$`,
            R`代 $\theta_0$ 求切点坐标 $(x_0,y_0)$`,
            R`$\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\mathrm dy/\mathrm d\theta}{\mathrm dx/\mathrm d\theta}$，代 $\theta_0$ 得斜率`,
            R`写切线、法线方程`
          ],
          refs: [
            { src: "吉米【227】点评 p66–67", text: R`为求出曲线的切线与法线的直角坐标方程，可把 $\theta$ 视为参数，写出曲线的参数方程，再利用参数方程求导公式即可得到切线斜率。一般地，极坐标方程 $r=r(\theta)$ 均可化为参数方程 $x=r(\theta)\cos\theta$，$y=r(\theta)\sin\theta$` },
            { src: "武忠祥 题型二 p67", text: R`由 $r=1-\cos\theta$ 可知该曲线的参数方程为 $x=(1-\cos\theta)\cos\theta$，$y=(1-\cos\theta)\sin\theta$` }
          ]
        },
        think: R`极坐标方程不能直接对 $\theta$ 求导当斜率，因为斜率是 $\frac{\mathrm dy}{\mathrm dx}$。用 $x=r\cos\theta$、$y=r\sin\theta$ 把它变成以 $\theta$ 为参数的参数方程，就回到上一题型。`,
        first: R`写成参数方程 $x=(1-\cos\theta)\cos\theta$，$y=(1-\cos\theta)\sin\theta$`,
        steps: [
          R`展开：$x=\cos\theta-\cos^2\theta$，$y=\sin\theta-\sin\theta\cos\theta$`,
          R`切点：$\theta=\frac\pi6$，$\cos\theta=\frac{\sqrt3}2$，$\sin\theta=\frac12$，$x_0=\dfrac{\sqrt3}2-\dfrac34$，$y_0=\dfrac12-\dfrac{\sqrt3}4$`,
          R`==求导：$\dfrac{\mathrm dx}{\mathrm d\theta}=-\sin\theta+2\cos\theta\sin\theta$，$\dfrac{\mathrm dy}{\mathrm d\theta}=\cos\theta-\cos^2\theta+\sin^2\theta$==`,
          R`**斜率**：代 $\theta=\frac\pi6$，分子 $\frac{\sqrt3}2-\frac34+\frac14=\frac{\sqrt3-1}2$，分母 $-\frac12+\frac{\sqrt3}2=\frac{\sqrt3-1}2$，所以 $k=1$`,
          R`切线：$y-y_0=x-x_0$，即 $x-y-\dfrac{3\sqrt3}4+\dfrac54=0$`,
          R`法线斜率 $-1$：$y-y_0=-(x-x_0)$，即 $x+y-\dfrac{\sqrt3}4+\dfrac14=0$`
        ],
        pitfall: R`把 $\dfrac{\mathrm dr}{\mathrm d\theta}=\sin\theta$ 当成切线斜率；切点直接写成 $\left(\frac\pi6,r\right)$，没换成直角坐标`,
        practice: "吉米【226】【227】（p66–67）；武忠祥 题型二（p67）"
      },
      {
        id: "t11", name: "相关变化率（实际问题）",
        signal: R`实际问题中两个（或几个）量都随时间变化，已知其中一个的变化率，问此刻另一个的变化率："……的速率为多少"`,
        example: { q: R`已知动点 $P$ 在曲线 $y=x^3$ 上运动，记坐标原点与点 $P$ 间的距离为 $l$。若点 $P$ 的横坐标对时间的变化率为常数 $v_0$，则当点 $P$ 运动到点 $(1,1)$ 时，$l$ 对时间的变化率是 ____。`, src: "30讲 第7讲 例7.1 p188" },
        idea: {
          key: R`==设出变量，写出变量之间的关系式（几何关系、物理关系），所有变量都看作时间 $t$ 的函数==；关系式两边对 $t$ 求导，得到变化率之间的关系；最后代入此刻的数值。`,
          how: [
            R`设变量，画图，找出变量之间的关系式；能消掉的中间变量先消掉（如圆锥里用相似消去 $r$）`,
            R`关系式两边对 $t$ 求导，每个变量都乘它对 $t$ 的变化率`,
            R`求出"此刻"各变量的值（由已知条件或关系式算）`,
            R`代入，解出要求的变化率，带上单位`
          ],
          refs: [
            { src: "30讲 p188", text: R`涉及相关变化率问题：①建立相关变量方程；②求导找出相关变化率，进而通过已知变化率求未知变化率` },
            { src: "教材例 10 p105", text: R`其中 $\alpha$ 及 $h$ 都与 $t$ 存在可导的函数关系。上式两边对 $t$ 求导` }
          ]
        },
        think: R`$l$、$x$ 都随时间变化，已知 $\frac{\mathrm dx}{\mathrm dt}=v_0$，求 $\frac{\mathrm dl}{\mathrm dt}$。先用 $y=x^3$ 把 $l$ 写成只含 $x$ 的式子，再用链式法则 $\frac{\mathrm dl}{\mathrm dt}=\frac{\mathrm dl}{\mathrm dx}\cdot\frac{\mathrm dx}{\mathrm dt}$。`,
        first: R`写出关系式 $l=\sqrt{x^2+y^2}=\sqrt{x^2+x^6}$`,
        steps: [
          R`关系式：$l=\sqrt{x^2+y^2}$，点在 $y=x^3$ 上，所以 $l=\sqrt{x^2+x^6}$`,
          R`==**两边对 $t$ 求导**（$x$ 是 $t$ 的函数）：$\dfrac{\mathrm dl}{\mathrm dt}=\dfrac{\mathrm dl}{\mathrm dx}\cdot\dfrac{\mathrm dx}{\mathrm dt}=\dfrac{2x+6x^5}{2\sqrt{x^2+x^6}}\cdot v_0$==`,
          R`此刻 $x=1$：分子 $2+6=8$，分母 $2\sqrt2$`,
          R`代入：$\left.\dfrac{\mathrm dl}{\mathrm dt}\right|_{x=1}=\dfrac8{2\sqrt2}v_0=2\sqrt2\,v_0$`
        ],
        pitfall: R`先把 $x=1$ 代进 $l$ 得 $l=\sqrt2$ 再求导，结果是 0；只求 $\frac{\mathrm dl}{\mathrm dx}$，忘了乘 $\frac{\mathrm dx}{\mathrm dt}=v_0$`,
        practice: "教材 例10（p105–106）、习题2-4 第11、12、13题（p107，答案习题全解 p77–78）；18讲 第7讲 例7.1（p73）；检验：1000题基础篇第7章 1、3、4、5题"
      },
      {
        id: "t12", name: "参数方程含 |t|：分段后判断可导性", tag: "研",
        signal: R`参数方程里有 $|t|$（如 $x=2t+|t|$），问 $y=f(x)$ 在 $x=0$ 处可不可导、导函数是否连续、二阶导是否存在`,
        example: { q: R`已知 $y=f(x)$ 由 $\begin{cases}x=2t+|t|,\\y=|t|\sin t\end{cases}$ 确定，则 (A) $f(x)$ 连续，$f'(0)$ 不存在；(B) $f'(0)$ 存在，$f'(x)$ 在 $x=0$ 处不连续；(C) $f'(x)$ 连续，$f''(0)$ 不存在；(D) $f''(0)$ 存在，$f''(x)$ 在 $x=0$ 处不连续。`, src: "武忠祥 题型三(三) 例2 p70" },
        idea: {
          key: R`==$x'(t)$ 在 $t=0$ 处不存在，公式 $\frac{\psi'}{\varphi'}$ 用不了：按 $t\geqslant0$、$t<0$ 去掉绝对值，消参写成 $y=f(x)$ 的分段函数，分段点处回到 2.1 的定义求左右导数==。`,
          how: [
            R`按 $t\geqslant0$、$t<0$ 去掉绝对值，分别消去 $t$`,
            R`写出 $f(x)$ 的分段表达式（注意 $t$ 的正负对应 $x$ 的正负）`,
            R`分段点用定义求左、右导数；要判断二阶，就先写出 $f'(x)$ 的分段式，再用定义求 $f''_\pm(0)$`
          ],
          refs: [
            { src: "武忠祥 题型三(三) 例2 p70–71", text: R`当 $t\geqslant0$ 时，$x=3t$，$y=t\sin t$，$y=\frac x3\sin\frac x3$；当 $t<0$ 时，$x=t$，$y=-t\sin t$，$y=-x\sin x$` },
            { src: "30讲 p124", text: R`分段函数在分段点处的导数用定义求` }
          ]
        },
        think: R`$|t|$ 在 $t=0$ 不可导，所以 $x'(0)$ 不存在，参数方程求导公式在这一点失效。$x=2t+|t|$ 在 $t\geqslant0$ 时是 $3t$、$t<0$ 时是 $t$，都能解出 $t$，于是消参变成分段函数，分段点用定义。`,
        first: R`按 $t\geqslant0$、$t<0$ 去掉绝对值，消去 $t$`,
        steps: [
          R`$t\geqslant0$：$x=3t$（$x\geqslant0$），$y=t\sin t=\dfrac x3\sin\dfrac x3$；$t<0$：$x=t$（$x<0$），$y=-t\sin t=-x\sin x$`,
          R`==连续性：两段在 $x=0$ 处都等于 0，$f$ 连续==`,
          R`一阶：$f'_+(0)=\lim\limits_{x\to0^+}\dfrac{\frac x3\sin\frac x3}{x}=0$，$f'_-(0)=\lim\limits_{x\to0^-}\dfrac{-x\sin x}x=0$，所以 $f'(0)=0$`,
          R`导函数：$x>0$ 时 $f'(x)=\frac13\sin\frac x3+\frac x9\cos\frac x3$，$x<0$ 时 $f'(x)=-\sin x-x\cos x$，两边 $x\to0$ 时都趋于 0 $=f'(0)$，所以 $f'(x)$ 连续`,
          R`**二阶用定义**：$f''_+(0)=\lim\limits_{x\to0^+}\dfrac{\frac13\sin\frac x3+\frac x9\cos\frac x3}{x}=\dfrac19+\dfrac19=\dfrac29$，$f''_-(0)=\lim\limits_{x\to0^-}\dfrac{-\sin x-x\cos x}x=-2$，不相等，$f''(0)$ 不存在。选 (C)`
        ],
        pitfall: R`在 $t=0$ 处硬套 $\frac{\psi'(t)}{\varphi'(t)}$；$t<0$ 时 $|t|=-t$ 的符号弄错，$y$ 写成 $t\sin t$`,
        practice: "武忠祥 题型三(三) 例2（p70–71）；检验：1000题基础篇第4章 8题"
      },
      {
        id: "t13", name: "由已知导数值反求函数值，再求高阶导", tag: "研",
        signal: R`隐函数题里给的不是 $y(x_0)$，而是"$y'(x_0)=0$"之类的导数条件，要求 $y''(x_0)$、参数或判断极值`,
        example: { q: R`设函数 $y=y(x)$ 由方程 $y^3+xy^2+x^2y+6=0$ 确定，且 $y'(1)=0$，求 $y''(1)$ 的值。`, src: "30讲 例4.8 p126" },
        idea: {
          key: R`==把已知的导数值代进求导一次后的等式，得到 $x_0$、$y_0$ 的关系，和原方程联立求出 $y_0$（不满足原方程的根舍去）==；再对等式求导一次，代入 $x_0$、$y_0$、$y'_0$ 解出 $y''_0$。`,
          how: [
            R`方程两边对 $x$ 求导一次，得到含 $y'$ 的等式`,
            R`代入已知的 $x_0$ 和 $y'(x_0)$，解出 $y_0$ 的候选值`,
            R`**代回原方程检验**，舍去不满足的`,
            R`等式再对 $x$ 求导一次，代入 $x_0$、$y_0$、$y'_0$ 求 $y''_0$`
          ],
          refs: [
            { src: "30讲 例4.8 p126", text: R`由 $y'(1)=0$，得 $y^2(1)+2\cdot1\cdot y(1)=0$，解得 $y(1)=-2$ 或 $y(1)=0$（不满足题目所给方程，舍去）` },
            { src: "18讲 例4.7 p39", text: R`将 $x=0$，$y(0)=0$，$y'(0)=0$ 代入，得 $y''(0)=-2$。因为 $y'(0)=0$，$y''(0)<0$，所以 $x=0$ 为 $y(x)$ 的极大值点` }
          ]
        },
        think: R`不知道 $y(1)$，原方程里 $x=1$ 代进去是关于 $y$ 的三次方程，不好解。但求导一次后再代 $y'(1)=0$，含 $y'$ 的项全消失，剩下的式子很简单，能解出 $y(1)$。`,
        first: R`方程两边对 $x$ 求导一次`,
        steps: [
          R`求导一次：$3y^2y'+y^2+2xyy'+2xy+x^2y'=0$ ①`,
          R`代入 $x=1$、$y'(1)=0$：$y^2+2y=0$，所以 $y(1)=0$ 或 $y(1)=-2$`,
          R`**检验**：$y=0$ 代入原方程得 $6\neq0$，舍去；$y=-2$ 代入得 $-8+4-2+6=0$，所以 $y(1)=-2$`,
          R`==① 式整理成 $(3y^2+2xy+x^2)y'+y^2+2xy=0$，再对 $x$ 求导：$(6yy'+2y+2xy'+2x)y'+(3y^2+2xy+x^2)y''+2yy'+2y+2xy'=0$==`,
          R`代入 $x=1$、$y=-2$、$y'=0$：$(12-4+1)y''+(-4)=0$，所以 $y''(1)=\dfrac49$`
        ],
        pitfall: R`解出两个 $y(1)$ 不检验，两个都拿去算；求二阶时漏了 $(3y^2+2xy+x^2)$ 这个因子对 $x$ 的导数`,
        practice: "30讲 例4.8（p126）；18讲 第4讲 例4.7（p39）"
      }
    ],

    pitfalls: [
      { wrong: R`隐函数求导时 $(y^2)'=2y$`, why: R`$y$ 是 $x$ 的函数，$y^2$ 是复合函数，要乘内层导数 $y'$`, right: R`$(y^2)'=2yy'$，$(\mathrm e^y)'=\mathrm e^yy'$（30讲 p126）`, test: R`$x^2+y^2=1$，$y'=$？`, ans: R`$-\dfrac xy$`, link: "题型 1" },
      { wrong: R`求 $y'(x_0)$ 时只代 $x_0$，$y$ 也随手代成 0 或不管`, why: R`$y'$ 的表达式含 $y$，要用对应的 $y_0$`, right: R`先由原方程求出 $y_0$，再把 $(x_0,y_0)$ 一起代入（吉米【192】点评 p56）`, test: R`$\ln(x^2+y)=x^3y+\sin x$，$x=0$ 时 $y=$？`, ans: R`$y=1$（$\ln y=0$）`, link: "题型 1" },
      { wrong: R`隐函数求二阶导时，把 $y'$ 的式子里的 $y$ 当常数`, why: R`$y$ 仍是 $x$ 的函数，对它求导要乘 $y'$`, right: R`$\left(-\dfrac xy\right)'=-\dfrac{y-xy'}{y^2}$，再代入 $y'$（习题全解 习题2-4 第4(1)题 p71）`, test: R`$x^2+y^2=1$，$y''$ 用 $y$ 表示是什么？`, ans: R`$-\dfrac1{y^3}$`, link: "题型 2" },
      { wrong: R`隐函数二阶导数的结果里留着 $y'$`, why: R`结果中只能含 $x$、$y$，$y'$ 要用一阶结果代掉`, right: R`例 4：$y''=\dfrac{-2\sin y\cdot y'}{(2-\cos y)^2}$ 再代 $y'=\dfrac2{2-\cos y}$（教材 p100–101；吉米【195】点评 p57）`, test: R`教材例 4 最后的 $y''$ 是什么？`, ans: R`$-\dfrac{4\sin y}{(2-\cos y)^3}$`, link: "题型 2" },
      { wrong: R`对求导一次后的等式，先代入 $x_0$、$y_0$、$y'_0$，再求导求 $y''$`, why: R`代入后等式变成常数等式，两边求导都是 0`, right: R`先对等式求导，最后再代点（吉米【192】p56）`, test: R`$\mathrm e^y+6xy+x^2-1=0$，$y''(0)=$？`, ans: R`$-2$`, link: "题型 2" },
      { wrong: R`$[f(x+y)]'=f'(x+y)$`, why: R`内层 $x+y$ 对 $x$ 的导数是 $1+y'$，不是 1`, right: R`$[f(x+y)]'=f'(x+y)(1+y')$（吉米【194】p56）`, test: R`$y=f(x+y)$，$y'=$？`, ans: R`$\dfrac{f'}{1-f'}$`, link: "题型 3" },
      { wrong: R`对数求导后得到 $\dfrac{y'}{y}=[\cdots]$，就把 $[\cdots]$ 当成 $y'$`, why: R`左边是 $\frac{y'}{y}$，还要乘 $y$`, right: R`$y'=y\cdot[\cdots]$，$y$ 换回原式（30讲 p128）`, test: R`$y=x^x$，按错的做法 $y'$ 是多少？正确呢？`, ans: R`错的得 $\ln x+1$；正确是 $x^x(\ln x+1)$`, link: "题型 4" },
      { wrong: R`$\ln\sqrt{\dfrac{x-1}{x+1}}=\ln(x-1)-\ln(x+1)$`, why: R`根号是 $\frac12$ 次幂，漏了系数 $\frac12$`, right: R`$=\dfrac12[\ln(x-1)-\ln(x+1)]$（教材例 6 p101）`, test: R`$y=\sqrt{\dfrac{x-1}{x+1}}$，$\dfrac{y'}{y}=$？`, ans: R`$\dfrac1{x^2-1}$`, link: "题型 4" },
      { wrong: R`$y$ 可能是负的，所以对数求导法要分区间讨论`, why: R`对 $\ln|y|$ 求导结果一样，$(\ln|u|)'=\dfrac{u'}u$`, right: R`直接按 $\ln y$ 形式运算，结果对各区间都成立（教材例 6 p102；30讲 p124）`, test: R`$y=x(x-1)(x-2)$，用对数求导法求 $y'(-1)$`, ans: R`$y'(-1)=y(-1)\left(\frac1{-1}+\frac1{-2}+\frac1{-3}\right)=(-6)\cdot\left(-\frac{11}6\right)=11$`, link: "题型 4" },
      { wrong: R`$(x^{\sin x})'=\sin x\cdot x^{\sin x-1}$`, why: R`指数也含 $x$，这是幂指函数，不能按幂函数求`, right: R`$(x^{\sin x})'=x^{\sin x}\left(\cos x\ln x+\dfrac{\sin x}x\right)$（教材例 5 p101）`, test: R`$y=x^{\sin x}$ 在 $x=\pi$ 处的导数是多少？按错的公式呢？`, ans: R`正确 $-\ln\pi$；错的得 0`, link: "题型 5" },
      { wrong: R`$\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\varphi'(t)}{\psi'(t)}$（上下颠倒）`, why: R`$\frac{\mathrm dy}{\mathrm dx}$ 是 $y$ 的变化比 $x$ 的变化，$y$ 的导数在分子`, right: R`$\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\mathrm dy/\mathrm dt}{\mathrm dx/\mathrm dt}=\dfrac{\psi'(t)}{\varphi'(t)}$（教材 p102）`, test: R`椭圆 $x=a\cos t$，$y=b\sin t$，$t=\frac\pi4$ 处的切线斜率？`, ans: R`$-\dfrac ba$（教材例 7 p103）`, link: "题型 6" },
      { wrong: R`给的是点 $(x_0,y_0)$，直接把 $x_0$ 当参数 $t$ 代入`, why: R`点和参数是两回事，要先由点求出对应的 $t_0$`, right: R`解 $\varphi(t)=x_0$，有多个解时检查 $y$ 是否有意义、是否对上点（吉米【225】p66）`, test: R`$x=t^2+2t$，$y=\ln(1+t)$，$x=3$ 对应的 $t$ 是多少？`, ans: R`$t=1$（$t=-3$ 使 $\ln(1+t)$ 无意义，舍去）`, link: "题型 6" },
      { wrong: R`切线斜率是 $k$，法线斜率写成 $-k$`, why: R`两直线垂直时斜率之积为 $-1$`, right: R`法线斜率是 $-\dfrac1k$（吉米【198】p57）`, test: R`切线斜率 $\frac12$ 时法线斜率是多少？`, ans: R`$-2$`, link: "题型 9" },
      { wrong: R`$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{\psi''(t)}{\varphi''(t)}$`, why: R`二阶导数是一阶导数（$t$ 的函数）对 $x$ 求导，要用链式法则`, right: R`$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{\frac{\mathrm d}{\mathrm dt}\left(\frac{\mathrm dy}{\mathrm dx}\right)}{\frac{\mathrm dx}{\mathrm dt}}$（教材式 (4-5) p103）`, test: R`$x=t^2$，$y=t^3$（$t>0$），$\dfrac{\mathrm d^2y}{\mathrm dx^2}=$？按错的公式呢？`, ans: R`正确 $\dfrac3{4t}$；错的得 $3t$`, link: "题型 7" },
      { wrong: R`$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{\mathrm d}{\mathrm dt}\left(\dfrac{\mathrm dy}{\mathrm dx}\right)$`, why: R`对 $t$ 求导得到的是对 $t$ 的变化率，还要乘 $\frac{\mathrm dt}{\mathrm dx}$`, right: R`求导后再除以 $\dfrac{\mathrm dx}{\mathrm dt}$（30讲 p127）`, test: R`$x=t^2$，$y=t^3$（$t>0$），按错的做法得多少？`, ans: R`$\dfrac32$（正确是 $\dfrac3{4t}$）`, link: "题型 7" },
      { wrong: R`$\begin{cases}x=f'(t)\\y=tf'(t)-f(t)\end{cases}$ 求二阶导，直接套公式 $\dfrac{\psi''\varphi'-\psi'\varphi''}{\varphi'^3}$`, why: R`公式要用 $\varphi''=f'''$，题目只给了 $f''$ 存在，条件不够`, right: R`先求 $\dfrac{\mathrm dy}{\mathrm dx}=t$，再 $\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac1{f''(t)}$（武忠祥 题型三(三) 例1 注 p70；习题全解 p76）`, test: R`这道题的 $\dfrac{\mathrm dy}{\mathrm dx}$ 是多少？`, ans: R`$t$`, link: "题型 7" },
      { wrong: R`参数方程里第二个方程含 $y$ 和 $t$，对 $t$ 求导时把 $y$ 当常数`, why: R`$y$ 是 $t$ 的函数，对 $t$ 求导要乘 $\frac{\mathrm dy}{\mathrm dt}$`, right: R`按隐函数求导，对 $t$ 求导后解出 $\frac{\mathrm dy}{\mathrm dt}$（30讲 例4.10 p127）`, test: R`$2y-ty^2+\mathrm e^t=5$ 两边对 $t$ 求导得什么？`, ans: R`$2y'-y^2-2tyy'+\mathrm e^t=0$（$y'=\frac{\mathrm dy}{\mathrm dt}$）`, link: "题型 8" },
      { wrong: R`参数方程求出的 $\dfrac{\mathrm dy}{\mathrm dx}$ 里既有 $t$ 又有 $y$，以为没做完`, why: R`$y$ 由隐式方程确定、解不出来时，结果含 $t$、$y$ 是正常的`, right: R`吉米【219】点评 p64：答案中应既含有参数 $t$，又含有因变量 $y$`, test: R`吉米【219】的答案含哪些字母？`, ans: R`$t$ 和 $y$：$\dfrac{(y^2-\mathrm e^t)(1+t^2)}{2(1-ty)}$`, link: "题型 8" },
      { wrong: R`极坐标曲线 $r=r(\theta)$ 的切线斜率是 $\dfrac{\mathrm dr}{\mathrm d\theta}$`, why: R`切线斜率是 $\frac{\mathrm dy}{\mathrm dx}$，$r$ 不是纵坐标`, right: R`化成 $x=r\cos\theta$，$y=r\sin\theta$ 再按参数方程求（吉米【227】点评 p66–67）`, test: R`$r=1-\cos\theta$ 在 $\theta=\frac\pi6$ 处：$\frac{\mathrm dr}{\mathrm d\theta}$ 和切线斜率各是多少？`, ans: R`$\frac12$；切线斜率是 1`, link: "题型 10" },
      { wrong: R`相关变化率先代入此刻的数值，再求导`, why: R`代入后变量变成常数，求导得 0，变化率之间的关系丢了`, right: R`先对关系式两边对 $t$ 求导，再代入此刻的值（教材例 10 p105–106）`, test: R`教材例 10 先把 $h=500$ 代入 $\tan\alpha=\frac h{500}$ 再求导，得到什么？`, ans: R`$\tan\alpha=1$，求导得 0，求不出 $\frac{\mathrm d\alpha}{\mathrm dt}$（正确是 0.14 rad/min）`, link: "题型 11" },
      { wrong: R`$S=\pi r^2$ 对 $t$ 求导得 $\dfrac{\mathrm dS}{\mathrm dt}=2\pi r$`, why: R`$r$ 是 $t$ 的函数，要乘 $\frac{\mathrm dr}{\mathrm dt}$`, right: R`$\dfrac{\mathrm dS}{\mathrm dt}=2\pi r\dfrac{\mathrm dr}{\mathrm dt}$（习题全解 习题2-4 第11题 p77）`, test: R`$\frac{\mathrm dr}{\mathrm dt}=6$ m/s，2 s 末 $\frac{\mathrm dS}{\mathrm dt}=$？`, ans: R`$144\pi$ m²/s`, link: "题型 11" },
      { wrong: R`圆锥注水，$V=\frac13\pi r^2h$ 对 $t$ 求导时把水面半径 $r$ 当常数`, why: R`水面上升时水面半径也在变，$r$ 和 $h$ 有相似关系`, right: R`先用相似 $r=\frac h2$ 消去 $r$：$V=\frac{\pi}{12}h^3$，再求导（习题全解 习题2-4 第12题 p77）`, test: R`教材习题2-4 第12题：水深 5 m 时水面上升速率？`, ans: R`$\dfrac{16}{25\pi}\approx0.204$ m/min`, link: "题型 11" },
      { wrong: R`参数方程含 $|t|$ 时，在 $t=0$ 处直接用 $\dfrac{\psi'(t)}{\varphi'(t)}$`, why: R`$\varphi'(0)$ 不存在，公式的条件不满足`, right: R`分 $t\geqslant0$、$t<0$ 消参写成分段函数，分段点用定义（武忠祥 题型三(三) 例2 p70–71）`, test: R`$x=2t+|t|$，$y=|t|\sin t$：$f'(0)$ 存在吗？`, ans: R`存在，$f'(0)=0$`, link: "题型 12" },
      { wrong: R`由导数条件解出 $y(x_0)$ 的几个候选值，都拿去用`, why: R`候选值是从求导后的等式来的，不一定满足原方程`, right: R`代回原方程检验，舍去不满足的（30讲 例4.8 p126）`, test: R`$y^3+xy^2+x^2y+6=0$，$x=1$ 时 $y=0$ 满足原方程吗？`, ans: R`不满足（左边是 6），舍去`, link: "题型 13" }
    ]
  });
})();
