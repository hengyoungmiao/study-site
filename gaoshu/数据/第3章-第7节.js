/*
类型: 题型
标题: 高等数学 第3章 第7节 曲率 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-28
更新日期: 2026-10-28
状态: 完成

页码一律是印刷页（转换稿的页码标记在每页开头，标记后面的内容属于该页；3.7 从 p164 开始，习题3-7 在 p172）。
教材 = 同济第八版上册；习题全解 = 同济第八版上册习题全解指导（习题3-7 在 p128–132）；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；
30讲 = 张宇基础30讲；18讲 = 张宇高数18讲；武忠祥 = 高等数学辅导讲义（强化）；1000题 = 张宇1000题（只写题号）。
吉米本节「基本题型」两类：求曲线的曲率、曲率半径（【358】–【361】p106–108）、有关曲率的应用题（【362】p108），按考法拆成题型 1–6；
题型 7、8 是教材和习题全解的题型；题型 9–11 是 18讲、武忠祥和考研真题的考法（标「研」）。
网页上不标「⚠️未核验」；所有计算（曲率、曲率中心、渐屈线、dρ/ds、应用题数值）都用代码验算过。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "3.7",
    chapter: 3,
    title: "曲率",
    pages: "教材 p164–172",
    sources: [
      "教材 第三章第七节 p164–172",
      "习题全解 习题3-7 p128–132；总习题三 第17题 p141；附 考研试题选解 第8题（2019）p345",
      "吉米 第3章 §7 曲率 p106–108【358】–【362】",
      "30讲 第5讲 九 曲率及曲率半径 p159–160、习题 5.8 p161（解答 p163）",
      "18讲 第5讲 重要结论 (3) p43、例5.3 p44",
      "武忠祥 第2章 (五) 平面曲线的曲率 p77–78、题型二 例6 p83",
      "1000题 基础篇第5章、强化篇第5章"
    ],
    updated: "2026-10-28",

    framework: {
      main: R`曲率回答"曲线在一点弯得多厉害"：用==单位弧长上切线转过的角度== $K=\left|\dfrac{\mathrm d\alpha}{\mathrm ds}\right|$ 来量。弧微分 $\mathrm ds=\sqrt{1+y'^2}\,\mathrm dx$ 给分母，$\tan\alpha=y'$ 求导给分子，相除就是 $K=\dfrac{|y''|}{(1+y'^2)^{3/2}}$；参数方程、隐函数只是先把 $y'$、$y''$ 求出来。曲率的倒数是曲率半径，曲率圆在这一点和曲线同切线、同曲率、同凹向，可以局部代替曲线。`,
      nodes: [
        { id: "ARC", go: "p1", col: 0, row: 0, kind: "build", label: "弧微分", sub: R`$\mathrm ds=\sqrt{1+y'^2}\,\mathrm dx$` },
        { id: "DEF", go: "p2", col: 1, row: 0, kind: "func", label: "曲率的定义", sub: R`$K=\left|\frac{\mathrm d\alpha}{\mathrm ds}\right|$` },
        { id: "D2", go: "2.4:p8", col: 0, row: 1, kind: "map", label: "求 y′、y″（2.3–2.4）", sub: "显函数、隐函数、参数方程" },
        { id: "FORM", go: "p4", col: 1, row: 1, kind: "prop", label: "曲率公式", sub: R`$K=\frac{|y''|}{(1+y'^2)^{3/2}}$` },
        { id: "PAR", go: "p5", col: 2, row: 0, kind: "prop", label: "参数方程的曲率", sub: "先求 y′ₓ、y″ₓ 再代公式" },
        { id: "RHO", go: "p8", col: 1, row: 2, kind: "func", label: "曲率半径与曲率圆", sub: R`$\rho=\frac1K$` },
        { id: "CEN", go: "p10", col: 2, row: 2, kind: "build", label: "曲率中心与渐屈线", sub: "沿法线向凹侧走 ρ" },
        { id: "APP", go: "p6", col: 0, row: 2, kind: "build", label: "最值与应用", sub: "顶点最弯、砂轮、向心力" }
      ],
      edges: [
        { from: "ARC", to: "DEF", label: "ds 作分母" },
        { from: "DEF", to: "FORM", label: R`$\tan\alpha=y'$ 求导` },
        { from: "D2", to: "FORM", label: R`代入 $y'$、$y''$` },
        { from: "FORM", to: "PAR", label: "导数换成对 t 求" },
        { from: "FORM", to: "RHO", label: "取倒数" },
        { from: "RHO", to: "CEN", label: "定圆心" },
        { from: "FORM", to: "APP", label: "K 当函数求最值" },
        { from: "RHO", to: "APP", label: R`$F=\frac{mv^2}{\rho}$` }
      ],
      keys: [
        { q: R`曲率是怎么定义的？为什么要除以弧长？`, a: R`$K=\lim\limits_{\Delta s\to0}\left|\dfrac{\Delta\alpha}{\Delta s}\right|$，即单位弧长上切线转角的极限（教材 p166）。弯曲程度既和转角有关，也和弧长有关：转角相同，弧越短越弯（教材 p165）。直线 $K=0$，半径 $a$ 的圆 $K=\dfrac1a$（教材 p166–167）。` },
        { q: R`直角坐标和参数方程的曲率公式各是什么？`, a: R`$y=f(x)$ 二阶可导：$K=\dfrac{|y''|}{(1+y'^2)^{3/2}}$（教材 p167）；$x=\varphi(t)$，$y=\psi(t)$：$K=\dfrac{|\varphi'\psi''-\varphi''\psi'|}{(\varphi'^2+\psi'^2)^{3/2}}$（教材 p168）。记不住参数公式就先求 $y'_x$、$y''_x$ 再代第一个公式（吉米【358】p106）。` },
        { q: R`曲率半径和曲率圆是什么？有什么用？`, a: R`$\rho=\dfrac1K$（$K\neq0$）；在法线上凹的一侧取 $|DM|=\rho$ 的点 $D$ 作圆，就是曲率圆（教材 p169）。曲率圆和曲线在该点有相同的切线、曲率和凹向，常用它的一段弧代替曲线弧；砂轮半径不能超过曲率半径的最小值（教材 例3 p169–170）。` },
        { q: R`本节题目主要考什么？`, a: R`求一点的曲率和曲率半径（显函数、参数方程、隐函数）、曲率的最值、曲率圆方程、物理应用（向心力），都是"先求 $y'$、$y''$，再代公式"（30讲 p159："背公式即可"，基本都考填空）。` }
      ]
    },

    points: [
      {
        group: "一、弧微分",
        items: [
          {
            id: "p1", kind: "公式", name: "弧微分公式", page: "教材 p164–165",
            body: R`设函数 $f(x)$ 在区间 $(a,b)$ 内==具有连续导数==。在曲线 $y=f(x)$ 上取定点 $M_0$ 作为度量弧长的基点，==以 $x$ 增大的方向为曲线的正向==，规定有向弧段 $\widehat{M_0M}$ 的值 $s$：$|s|$ 等于弧长，方向与正向一致时 $s>0$，相反时 $s<0$。于是 $s=s(x)$ 是 $x$ 的==单调增加==函数，且 ==$\mathrm ds=\sqrt{1+y'^2}\,\mathrm dx$==（弧微分公式）。`,
            notes: [
              R`推导：$\left(\dfrac{\Delta s}{\Delta x}\right)^2=\left(\dfrac{\widehat{MM'}}{|MM'|}\right)^2\cdot\left[1+\left(\dfrac{\Delta y}{\Delta x}\right)^2\right]$，令 $\Delta x\to0$，==弧长与弦长之比的极限是 1==，得 $\dfrac{\mathrm ds}{\mathrm dx}=\pm\sqrt{1+y'^2}$（教材 p164–165）`,
              R`==根号前取正号==，是因为 $s(x)$ 单调增加（教材 p165）`,
              R`等价写法：$\mathrm dx>0$ 时 $\mathrm ds=\sqrt{(\mathrm dx)^2+(\mathrm dy)^2}$，就是"微小直角三角形的斜边"；第六章求弧长 $s=\int\sqrt{1+y'^2}\,\mathrm dx$ 就从这里来（吉米【360】p107 已经用到）`
            ],
            quiz: R`$y=x^2$ 的弧微分是什么？$x=1$ 处 $\dfrac{\mathrm ds}{\mathrm dx}$ 等于多少？`
          }
        ]
      },
      {
        group: "二、曲率及其计算公式",
        items: [
          {
            id: "p2", kind: "定义", name: "曲率的定义", page: "教材 p165–166",
            body: R`设曲线 $C$ 是==光滑==的，点 $M$ 对应于弧 $s$，切线倾角为 $\alpha$；点 $M'$ 对应于弧 $s+\Delta s$，切线倾角为 $\alpha+\Delta\alpha$。比值 $\overline K=\left|\dfrac{\Delta\alpha}{\Delta s}\right|$ 叫弧段 $\widehat{MM'}$ 的==平均曲率==；$\Delta s\to0$ 时它的极限叫曲线在点 $M$ 处的==曲率==：$K=\lim\limits_{\Delta s\to0}\left|\dfrac{\Delta\alpha}{\Delta s}\right|$。在 $\dfrac{\mathrm d\alpha}{\mathrm ds}$ 存在的条件下，==$K=\left|\dfrac{\mathrm d\alpha}{\mathrm ds}\right|$==。`,
            notes: [
              R`光滑曲线：==每一点都有切线，且切线随切点的移动而连续转动==（教材 p165 脚注）`,
              R`为什么这样定义：==弯曲程度和切线转过的角度有关，也和弧段长度有关==；转角相同时，短弧比长弧弯得厉害（教材 p165）`,
              R`从平均曲率到曲率，类似从平均速度到瞬时速度（教材 p166）；曲率是"切线方向对弧长的变化率"的大小，带绝对值，==所以 $K\geqslant0$==`
            ],
            quiz: R`两段弧的切线都转过 $\frac\pi6$，一段长 1，一段长 3，哪段的平均曲率大？各是多少？`
          },
          {
            id: "p3", kind: "结论", name: "直线和圆的曲率", page: "教材 p166–167",
            body: R`==直线上任意点的曲率都等于零==：切线倾角不变，$\Delta\alpha=0$。半径为 $a$ 的圆上，切线夹角 $\Delta\alpha$ 等于圆心角 $\dfrac{\Delta s}a$，所以 ==$K=\dfrac1a$==：圆上各点曲率相同，==半径越小，曲率越大==。`,
            notes: [
              R`这和直觉一致："直线不弯曲"，小圆比大圆弯（教材 p166–167）`,
              R`用参数方程 $x=a\cos t$，$y=a\sin t$ 代公式也得 $K=\dfrac1a$，可以用来检验记住的公式对不对`
            ],
            quiz: R`曲率处处为 $\frac12$ 的平面曲线可能是什么？曲率处处为 0 的呢？`
          },
          {
            id: "p4", kind: "公式", name: "曲率的计算公式（直角坐标）", page: "教材 p167",
            body: R`设曲线方程是 $y=f(x)$，且 ==$f(x)$ 具有二阶导数==（这时 $f'(x)$ 连续，曲线是光滑的），则 $$K=\frac{|y''|}{(1+y'^2)^{3/2}}.$$`,
            notes: [
              R`推导：$\tan\alpha=y'$ 两边对 $x$ 求导，$\sec^2\alpha\dfrac{\mathrm d\alpha}{\mathrm dx}=y''$，得 ==$\mathrm d\alpha=\dfrac{y''}{1+y'^2}\mathrm dx$==；再除以 $\mathrm ds=\sqrt{1+y'^2}\,\mathrm dx$（教材 p167）`,
              R`例 1：$xy=1$ 在 $(1,1)$ 处，$y'=-1$，$y''=2$，$K=\dfrac2{2^{3/2}}=\dfrac{\sqrt2}2$（教材 p168）`,
              R`隐函数：方程两边对 $x$ 求导两次，==代入该点算出 $y'$、$y''$ 的值再代公式==（习题全解 习题3-7 第1题 p128）`,
              R`30讲的评价："背公式即可"，曲率基本都考填空（30讲 p159）`
            ],
            quiz: R`$y=x^3$ 在原点的曲率是多少？$y=\cos x$ 在 $x=0$ 处呢？`
          },
          {
            id: "p5", kind: "公式", name: "参数方程的曲率公式", page: "教材 p168",
            body: R`曲线由参数方程 $x=\varphi(t)$，$y=\psi(t)$ 给出时，用参数方程求导法求出 $y'_x$ 及 $y''_x$，代入直角坐标公式，得 $$K=\frac{|\varphi'(t)\psi''(t)-\varphi''(t)\psi'(t)|}{[\varphi'^2(t)+\psi'^2(t)]^{3/2}}.$$`,
            notes: [
              R`==记不住这个公式，就先求 $\dfrac{\mathrm dy}{\mathrm dx}$、$\dfrac{\mathrm d^2y}{\mathrm dx^2}$，再代 $\dfrac{|y''|}{(1+y'^2)^{3/2}}$==（吉米【358】p106；30讲 例5.15 p159–160）`,
              R`武忠祥写成 $K=\dfrac{|y''x'-y'x''|}{(x'^2+y'^2)^{3/2}}$，==这里的撇号都是对 $t$ 求导==（武忠祥 p78）`,
              R`!!$y''_x$ 不是 $\dfrac{\psi''(t)}{\varphi''(t)}$!!：$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{\frac{\mathrm d}{\mathrm dt}\left(\frac{\mathrm dy}{\mathrm dx}\right)}{\frac{\mathrm dx}{\mathrm dt}}$（教材 2.4 p103）`
            ],
            quiz: R`星形线 $x=\cos^3t$，$y=\sin^3t$ 在 $t=\frac\pi4$ 处的曲率是多少？`
          },
          {
            id: "p6", kind: "结论", name: "抛物线在顶点处曲率最大", page: "教材 p168",
            body: R`抛物线 $y=ax^2+bx+c$（$a\neq0$）上，$K=\dfrac{|2a|}{[1+(2ax+b)^2]^{3/2}}$，==分子是常数，分母最小时 $K$ 最大==：$2ax+b=0$ 即 $x=-\dfrac b{2a}$（顶点）处，==$K$ 有最大值 $|2a|$==。`,
            notes: [
              R`思路：==把 $K$ 看成 $x$ 的函数求最值==；这里分子是常数，不用求导，直接看分母（教材 p168）`,
              R`一般地，曲率最大的点就是曲率半径最小的点；最值问题按 3.5 节的方法做（吉米【361】点评 p108）`
            ],
            quiz: R`$y=x^2-4x+3$ 在顶点处的曲率和曲率半径各是多少？`
          },
          {
            id: "p7", kind: "公式", name: "曲率的近似公式", page: "教材 p168",
            body: R`当 ==$|y'|$ 同 1 比较起来很小==（记作 $|y'|\ll1$）时，$1+y'^2\approx1$，有近似公式 ==$K\approx|y''|$==。`,
            notes: [
              R`用于工程问题的简化，如梁的微小弯曲变形（教材 p168）`,
              R`!!$|y'|$ 不小时不能用!!：$y=x^2$ 在 $x=1$ 处 $|y''|=2$，而真实曲率 $K=\dfrac2{5\sqrt5}\approx0.179$`
            ],
            quiz: R`$y=0.01x^2$ 在 $x=1$ 处，$|y''|$ 和 $K$ 差多少？`
          }
        ]
      },
      {
        group: "三、曲率圆与曲率半径",
        items: [
          {
            id: "p8", kind: "定义", name: "曲率圆、曲率中心、曲率半径", page: "教材 p169",
            body: R`设曲线 $y=f(x)$ 在点 $M(x,y)$ 处的曲率为 $K$（==$K\neq0$==）。在点 $M$ 处曲线的法线上，==在凹的一侧==取一点 $D$，使 $|DM|=\dfrac1K=\rho$，以 $D$ 为圆心、$\rho$ 为半径作圆，这个圆叫曲线在点 $M$ 处的==曲率圆==，$D$ 叫==曲率中心==，$\rho$ 叫==曲率半径==。==$\rho=\dfrac1K$，$K=\dfrac1\rho$==：曲率半径与曲率互为倒数。`,
            notes: [
              R`==曲率圆与曲线在点 $M$ 有相同的切线和曲率，且在 $M$ 邻近有相同的凹向==，所以常用曲率圆在 $M$ 邻近的一段圆弧近似代替曲线弧（教材 p169）`,
              R`弯曲程度越大，曲率越大，曲率圆的半径越小（30讲 p159）；$\rho=\dfrac{(1+y'^2)^{3/2}}{|y''|}$（$y''\neq0$）（30讲 p159）`,
              R`曲率圆和曲线在该点"二阶相切"：==曲率圆方程对 $x$ 求导得到的 $y'$、$y''$，在该点分别等于 $f'(x_0)$、$f''(x_0)$==（18讲 p43）`
            ],
            quiz: R`曲线在某点的曲率为 0（例如拐点 $y=x^3$ 的原点），有没有曲率圆？`
          },
          {
            id: "p9", kind: "结论", name: "砂轮问题：半径不超过曲率半径的最小值", page: "教材 p169–170",
            body: R`用砂轮磨削工件内表面时，为了不把接触处附近的工件磨去太多，==砂轮的半径应不大于内表面截线上各点处曲率半径中的最小值==。`,
            notes: [
              R`例 3：截线 $y=0.4x^2$，顶点处曲率最大：$y''=0.8$，$K=0.8$，$\rho=1.25$，所以==砂轮半径不超过 1.25 单位长，直径不超过 2.50 单位长==（教材 p169–170）`,
              R`!!曲率半径最小的点 = 曲率最大的点!!，别把"半径最小"和"曲率最小"弄混`
            ],
            quiz: R`截线为 $y=x^2$ 的内表面，砂轮直径最大能取多少？`
          }
        ]
      },
      {
        group: "四、曲率中心的计算公式 渐屈线与渐伸线（教材带 * 号）",
        items: [
          {
            id: "p10", kind: "公式", name: "曲率中心的坐标", page: "教材 p170",
            body: R`设曲线 $y=f(x)$ 在点 $x$ 处 ==$y''\neq0$==，则对应点 $M(x,y)$ 的曲率中心 $D(\alpha,\beta)$ 为 $$\alpha=x-\frac{y'(1+y'^2)}{y''},\qquad\beta=y+\frac{1+y'^2}{y''}.$$ 曲率圆方程为 $(\xi-\alpha)^2+(\eta-\beta)^2=\rho^2$。`,
            notes: [
              R`推导：$M$ 在曲率圆上 $(x-\alpha)^2+(y-\beta)^2=\rho^2$；==半径 $DM$ 垂直于切线==，$y'=-\dfrac{x-\alpha}{y-\beta}$；联立得 $(y-\beta)^2=\dfrac{(1+y'^2)^2}{y''^2}$（教材 p170；吉米【359】p107）`,
              R`开方取号：==$y''>0$（凹弧）时圆心在上方，$y-\beta<0$==；$y''<0$ 时圆心在下方。总之 $y''$ 与 $y-\beta$ 异号（教材 p170）`,
              R`!!曲率圆方程右边是 $\rho^2$!!，不是 $\rho$（习题全解 习题3-7 第10题 p131）`
            ],
            quiz: R`$y=-x^2$ 在原点的曲率中心在哪？`
          },
          {
            id: "p11", kind: "定义", name: "渐屈线与渐伸线", page: "教材 p170–171",
            body: R`点 $(x,f(x))$ 沿曲线 $C$ 移动时，相应的==曲率中心 $D$ 的轨迹 $G$ 叫曲线 $C$ 的渐屈线==，曲线 $C$ 叫 $G$ 的==渐伸线==。$y=f(x)$ 的渐屈线的参数方程（$x$ 为参数）就是曲率中心公式：$\alpha=x-\dfrac{y'(1+y'^2)}{y''}$，$\beta=y+\dfrac{1+y'^2}{y''}$。`,
            notes: [
              R`例 4：摆线 $x=a(t-\sin t)$，$y=a(1-\cos t)$ 的渐屈线是 $\alpha=a(t+\sin t)$，$\beta=a(\cos t-1)$，==平移后仍是一条摆线==（教材 p171）`,
              R`参数方程给出的曲线，先用参数求导法求出 $y'$、$y''$（用 $t$ 表示），再代公式（教材 p171）`
            ],
            quiz: R`求渐屈线时，最后的参数是谁？要不要消去参数？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "求显函数曲线的曲率与曲率半径",
        signal: R`给出 $y=f(x)$，"求曲线在点……处的==曲率==""求==曲率半径=="`,
        example: { q: R`求曲线 $y=\ln\sec x$ 在点 $(x,y)$ 处的曲率及曲率半径。`, src: "教材 习题3-7 第2题 p172；答案 习题全解 p128" },
        idea: {
          key: R`==先求 $y'$、$y''$，再代 $K=\dfrac{|y''|}{(1+y'^2)^{3/2}}$==，$\rho=\dfrac1K$。能化简的先化简 $1+y'^2$，求某点的值就先代点再算。`,
          how: [
            R`++求一阶、二阶导数++`,
            R`++化简 $1+y'^2$++（常常能凑成平方，如 $1+\tan^2x=\sec^2x$）`,
            R`++代公式，分子别忘绝对值，分母是 $\frac32$ 次方++`,
            R`++取倒数得曲率半径++（$K\neq0$）`
          ],
          refs: [
            { src: "教材 p167", text: R`设曲线的直角坐标方程是 $y=f(x)$，且 $f(x)$ 具有二阶导数……$K=\dfrac{|y''|}{(1+y'^2)^{3/2}}$` },
            { src: "30讲 p159", text: R`背公式即可` },
            { src: "吉米【361】点评 p108", text: R`只要公式记忆准确，计算仔细认真，一般就能够顺利地解决问题` }
          ]
        },
        think: R`显函数，直接求 $y'$、$y''$。$y'=\tan x$，于是 $1+y'^2=\sec^2x$，分母 $(\sec^2x)^{3/2}=|\sec x|^3$，和分子的 $\sec^2x$ 约掉。`,
        first: R`求导：$y'=\dfrac1{\sec x}\cdot\sec x\tan x=\tan x$`,
        steps: [
          R`++求一阶导数++：$y'=\dfrac{\sec x\tan x}{\sec x}=\tan x$`,
          R`++求二阶导数++：$y''=\sec^2x$`,
          R`++化简 $1+y'^2$++：$1+\tan^2x=\sec^2x$`,
          R`++代公式++：$K=\dfrac{\sec^2x}{(\sec^2x)^{3/2}}=\dfrac{\sec^2x}{|\sec x|^3}=\dfrac1{|\sec x|}=|\cos x|$`,
          R`++取倒数++：$\rho=\dfrac1K=|\sec x|$`,
          R`++检验++：$x=0$ 时曲线在原点 $y=\ln\sec x\approx\dfrac{x^2}2$，像 $y=\frac12x^2$ 的顶点，$K=1$，和 $|\cos0|=1$ 一致`
        ],
        pitfall: R`!!$(\sec^2x)^{3/2}$ 写成 $\sec^3x$ 丢了绝对值!!；分母的 $\frac32$ 次方漏写`,
        practice: "教材 例1（p168）、习题3-7 第2、3题（p172，答案习题全解 p128）；题型参考：吉米【358】–【361】（p106–108）"
      },
      {
        id: "t2", name: "求参数方程曲线的曲率",
        signal: R`曲线由 ==$x=\varphi(t)$，$y=\psi(t)$== 给出（摆线、星形线、椭圆的参数式），求某个 $t$ 对应点的曲率`,
        example: { q: R`曲线 $x=\cos^3t$，$y=\sin^3t$ 在 $t=\dfrac\pi4$ 对应点处的曲率为 ____。`, src: "30讲 第5讲 例5.15 p159–160；武忠祥 第2章 例6(2) p83" },
        idea: {
          key: R`两条路：① ==先用参数求导法求 $y'_x$、$y''_x$，再代直角坐标公式==；② 直接用 $K=\dfrac{|\varphi'\psi''-\varphi''\psi'|}{(\varphi'^2+\psi'^2)^{3/2}}$，撇号对 $t$ 求导。`,
          how: [
            R`++求 $\varphi'(t)$、$\psi'(t)$，得 $y'_x=\dfrac{\psi'}{\varphi'}$++`,
            R`++求 $y''_x=\dfrac{\frac{\mathrm d}{\mathrm dt}(y'_x)}{\varphi'(t)}$++，别忘了除以 $\varphi'(t)$`,
            R`++代入指定的 $t$ 算出数值，再代 $K=\dfrac{|y''|}{(1+y'^2)^{3/2}}$++`,
            R`++或者直接用参数公式验算一遍++`
          ],
          refs: [
            { src: "教材 p168", text: R`可利用由参数方程所确定的函数的求导法，求出 $y'_x$ 及 $y''_x$，代入(7-3)` },
            { src: "吉米【358】p106", text: R`如记不住曲率的参数方程公式，可先求出 $\frac{\mathrm dy}{\mathrm dx}$、$\frac{\mathrm d^2y}{\mathrm dx^2}$` },
            { src: "30讲 例5.15 分析 p159", text: R`主要考查参数方程求导` }
          ]
        },
        think: R`参数方程，按 2.4 节求 $\dfrac{\mathrm dy}{\mathrm dx}$ 和 $\dfrac{\mathrm d^2y}{\mathrm dx^2}$。$t=\frac\pi4$ 时 $\sin t=\cos t=\frac{\sqrt2}2$，算数值很方便。`,
        first: R`求 $\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{3\sin^2t\cos t}{-3\cos^2t\sin t}=-\tan t$`,
        steps: [
          R`++求一阶导数++：$\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{y'_t}{x'_t}=\dfrac{3\sin^2t\cos t}{-3\cos^2t\sin t}=-\tan t$，$t=\frac\pi4$ 时为 $-1$`,
          R`++求二阶导数（对 $t$ 求导后除以 $x'_t$）++：$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{-\sec^2t}{-3\cos^2t\sin t}=\dfrac1{3\cos^4t\sin t}$`,
          R`++代入 $t=\frac\pi4$++：$\cos^4t=\frac14$，$\sin t=\frac{\sqrt2}2$，$y''=\dfrac1{3\cdot\frac14\cdot\frac{\sqrt2}2}=\dfrac{4\sqrt2}3$`,
          R`++代曲率公式++：$K=\dfrac{\frac{4\sqrt2}3}{[1+(-1)^2]^{3/2}}=\dfrac{4\sqrt2}3\cdot\dfrac1{2\sqrt2}=\dfrac23$`,
          R`++用参数公式验算++：$x'=-\frac{3}{2\sqrt2}$，$x''=\frac3{2\sqrt2}$，$y'=\frac3{2\sqrt2}$，$y''=\frac3{2\sqrt2}$，$K=\dfrac{|y''x'-y'x''|}{(x'^2+y'^2)^{3/2}}=\dfrac23$（武忠祥 p83）`
        ],
        pitfall: R`!!把 $y''_x$ 写成 $\dfrac{\psi''(t)}{\varphi''(t)}$!!，或对 $t$ 求导后!!忘了再除以 $x'_t$!!`,
        practice: "教材 习题3-7 第4题（p172，答案习题全解 p129）；武忠祥 例6(2)（p83）；题型参考：吉米【358】（p106–107）；检验：1000题 强化篇第5章 31题"
      },
      {
        id: "t3", name: "曲率（曲率半径）的最值",
        signal: R`"哪一点处==曲率最大==""哪一点处==曲率半径最小==""$t$ 为何值时曲率最小"`,
        example: { q: R`设摆线 $x=a(t-\sin t)$，$y=a(1-\cos t)$（$a>0$），$t\in(0,2\pi)$。问 $t$ 为何值时曲率最小，并求出最小曲率和该点处的曲率半径。`, src: "吉米【358】p106–107" },
        idea: {
          key: R`==先把 $K$（或 $\rho$）写成 $x$ 或 $t$ 的函数并化简==，再求最值：能直接看出（分子常数看分母、三角函数有界）就不求导；否则对 $\rho$ 求导，按 3.5 节的方法找驻点、判单调。`,
          how: [
            R`++求出一般点的 $K$ 或 $\rho$ 的表达式++`,
            R`++化简++（三角函数用半角公式，根式提出来）`,
            R`++求最值++：能看出就直接看，看不出就求导、找驻点、判断单调性；驻点唯一时极值就是最值`,
            R`++写出点的坐标和最值++`
          ],
          refs: [
            { src: "教材 例2 p168", text: R`因为 $K$ 的分子是常数 $|2a|$，所以只要分母最小，$K$ 就最大` },
            { src: "吉米【358】p107", text: R`不必用导数求极值就可知，当 $\sin\frac t2=1$ 即当 $t=\pi$ 时……曲率最小` },
            { src: "吉米【361】点评 p108", text: R`把曲率和最值结合起来，是本节一类综合题目，这就要求对求最值的方法和步骤要牢记于心` }
          ]
        },
        think: R`参数方程先求 $y'$、$y''$，代公式得到 $K(t)$。$1-\cos t=2\sin^2\frac t2$，化简后 $K$ 只依赖 $\left|\sin\frac t2\right|$，在 $(0,2\pi)$ 上 $\sin\frac t2$ 的最大值一眼可见。`,
        first: R`求 $\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{a\sin t}{a(1-\cos t)}=\dfrac{\sin t}{1-\cos t}$`,
        steps: [
          R`++求一阶导数++：$y'=\dfrac{\sin t}{1-\cos t}$，于是 $1+y'^2=\dfrac{(1-\cos t)^2+\sin^2t}{(1-\cos t)^2}=\dfrac2{1-\cos t}$`,
          R`++求二阶导数++：$y''=\dfrac{\frac{\mathrm d}{\mathrm dt}\left(\frac{\sin t}{1-\cos t}\right)}{a(1-\cos t)}=\dfrac{\frac{\cos t-1}{(1-\cos t)^2}}{a(1-\cos t)}=-\dfrac1{a(1-\cos t)^2}$`,
          R`++代公式++：$K=\dfrac1{a(1-\cos t)^2}\cdot\left(\dfrac{1-\cos t}2\right)^{3/2}=\dfrac1{2\sqrt2\,a\sqrt{1-\cos t}}$`,
          R`++用半角公式化简++：$1-\cos t=2\sin^2\frac t2$，$\sqrt{1-\cos t}=\sqrt2\left|\sin\frac t2\right|$，所以 $K=\dfrac1{4a\left|\sin\frac t2\right|}$`,
          R`++求最值++：$t\in(0,2\pi)$ 时 $0<\sin\frac t2\leqslant1$，==$t=\pi$ 时 $\sin\frac t2=1$ 最大，$K$ 最小==`,
          R`**++写结论++** $t=\pi$，即点 $(a\pi,2a)$ 处曲率最小，$K_{\min}=\dfrac1{4a}$，曲率半径 $\rho=4a$`
        ],
        pitfall: R`!!把"曲率最大"当成"$|y''|$ 最大"!!，忽略了分母 $(1+y'^2)^{3/2}$；开方 $\sqrt{\sin^2\frac t2}$ 漏绝对值`,
        practice: "吉米【361】（p108）；教材 例2（p168）、习题3-7 第5题（p172，答案习题全解 p129）、总习题三 第17题（p179，答案习题全解 p141）；30讲 习题5.8（p161，答案 p163，已知曲率反求点）"
      },
      {
        id: "t4", name: "求曲率中心、曲率圆方程",
        signal: R`"求曲线在点……处的==曲率圆方程==""求==曲率中心=="`,
        example: { q: R`求曲线 $y=\tan x$ 在点 $\left(\dfrac\pi4,1\right)$ 处的曲率圆方程。`, src: "教材 习题3-7 第10题（* 题）p172；答案 习题全解 p131" },
        idea: {
          key: R`==三样东西：圆心 $(\alpha,\beta)$、半径 $\rho$==。圆心用 $\alpha=x-\dfrac{y'(1+y'^2)}{y''}$，$\beta=y+\dfrac{1+y'^2}{y''}$；半径 $\rho^2=\dfrac{(1+y'^2)^3}{y''^2}$。简单曲线也可以"在法线上向凹侧走 $\rho$"直接定圆心。`,
          how: [
            R`++求该点的 $y'$、$y''$ 的值++`,
            R`++算曲率半径++ $\rho=\dfrac{(1+y'^2)^{3/2}}{|y''|}$`,
            R`++算圆心++：用曲率中心公式；或判断凹向，沿法线往凹的一侧量 $\rho$`,
            R`++写方程++ $(\xi-\alpha)^2+(\eta-\beta)^2=\rho^2$`
          ],
          refs: [
            { src: "教材 p169", text: R`在点 $M$ 处的曲线的法线上，在凹的一侧取一点 $D$，使 $|DM|=\frac1K=\rho$` },
            { src: "教材 p170", text: R`$y''$ 与 $y-\beta$ 异号` },
            { src: "吉米【359】p107", text: R`由于 $y''>0$，曲线是凹的，$y_0-\eta<0$` }
          ]
        },
        think: R`曲率圆要圆心和半径。$y'=\sec^2x$、$y''=2\sec^2x\tan x$ 在 $\frac\pi4$ 处都是整数，直接代曲率中心公式。`,
        first: R`求该点导数值：$y'\big|_{x=\frac\pi4}=\sec^2\frac\pi4=2$，$y''\big|_{x=\frac\pi4}=2\sec^2\frac\pi4\tan\frac\pi4=4$`,
        steps: [
          R`++求导数值++：$y'=\sec^2x$，$y''=2\sec^2x\tan x$，在 $x=\frac\pi4$ 处 $y'=2$，$y''=4$，$1+y'^2=5$`,
          R`++算圆心横坐标++：$\alpha=\dfrac\pi4-\dfrac{2\times5}4=\dfrac{\pi-10}4$`,
          R`++算圆心纵坐标++：$\beta=1+\dfrac54=\dfrac94$（$y''>0$，圆心在曲线上方，$\beta>1$ 符合）`,
          R`++算半径的平方++：$\rho^2=\dfrac{(1+y'^2)^3}{y''^2}=\dfrac{125}{16}$`,
          R`**++写方程++** $\left(\xi-\dfrac{\pi-10}4\right)^2+\left(\eta-\dfrac94\right)^2=\dfrac{125}{16}$`
        ],
        pitfall: R`!!圆心的符号搞反!!（曲率中心在凹的一侧）；!!方程右边写成 $\rho$ 而不是 $\rho^2$!!`,
        practice: "教材 曲率中心公式（7-5）（p170）；题型参考：吉米【359】（p107，公式推导）；检验：1000题 基础篇第5章 24题"
      },
      {
        id: "t5", name: "曲率半径对弧长求导（弧微分的应用）",
        signal: R`题目里同时出现==曲率半径 $\rho$ 和弧长 $s$==，要求 $\dfrac{\mathrm d\rho}{\mathrm ds}$、$\dfrac{\mathrm d^2\rho}{\mathrm ds^2}$ 或含它们的式子`,
        example: { q: R`设 $\rho=\rho(x)$ 是抛物线 $y=\sqrt x$ 上任一点 $M(x,y)$（$x\geqslant1$）处的曲率半径，$s=s(x)$ 是该抛物线上介于点 $A(1,1)$ 与 $M$ 之间的弧长，计算 $3\rho\dfrac{\mathrm d^2\rho}{\mathrm ds^2}-\left(\dfrac{\mathrm d\rho}{\mathrm ds}\right)^2$ 的值。`, src: "吉米【360】p107–108" },
        idea: {
          key: R`==$\rho$ 和 $s$ 都是 $x$ 的函数，把 $x$ 当参数==：$\dfrac{\mathrm ds}{\mathrm dx}=\sqrt{1+y'^2}$（弧微分），$\dfrac{\mathrm d\rho}{\mathrm ds}=\dfrac{\mathrm d\rho/\mathrm dx}{\mathrm ds/\mathrm dx}$，二阶导再对 $x$ 求导后除以 $\dfrac{\mathrm ds}{\mathrm dx}$，和参数方程求二阶导一样。`,
          how: [
            R`++写出 $\rho(x)$ 并化简++`,
            R`++用弧微分写 $\dfrac{\mathrm ds}{\mathrm dx}=\sqrt{1+y'^2}$++，不用真的求出 $s(x)$`,
            R`++算 $\dfrac{\mathrm d\rho}{\mathrm ds}=\dfrac{\rho'(x)}{s'(x)}$++`,
            R`++算 $\dfrac{\mathrm d^2\rho}{\mathrm ds^2}=\dfrac{\frac{\mathrm d}{\mathrm dx}\left(\frac{\mathrm d\rho}{\mathrm ds}\right)}{s'(x)}$++，再代入要求的式子`
          ],
          refs: [
            { src: "教材 p165", text: R`$\mathrm ds=\sqrt{1+y'^2}\,\mathrm dx$。这就是弧微分公式` },
            { src: "吉米【360】p107", text: R`$\dfrac{\mathrm d\rho}{\mathrm ds}=\dfrac{\frac{\mathrm d\rho}{\mathrm dx}}{\frac{\mathrm ds}{\mathrm dx}}$` }
          ]
        },
        think: R`$\rho$、$s$ 都是 $x$ 的函数，相当于以 $x$ 为参数的"参数方程"。弧长不用积出来，只要弧微分给出 $\dfrac{\mathrm ds}{\mathrm dx}$。`,
        first: R`求曲率半径：$y'=\dfrac1{2\sqrt x}$，$y''=-\dfrac1{4x^{3/2}}$，$\rho=\dfrac{(1+y'^2)^{3/2}}{|y''|}$`,
        steps: [
          R`++求曲率半径++：$1+y'^2=\dfrac{4x+1}{4x}$，$\rho=\left(\dfrac{4x+1}{4x}\right)^{3/2}\cdot4x^{3/2}=\dfrac12(4x+1)^{3/2}$`,
          R`++用弧微分写 $\dfrac{\mathrm ds}{\mathrm dx}$++：$\dfrac{\mathrm ds}{\mathrm dx}=\sqrt{1+\dfrac1{4x}}=\dfrac{\sqrt{4x+1}}{2\sqrt x}$`,
          R`++求 $\dfrac{\mathrm d\rho}{\mathrm ds}$++：$\dfrac{\mathrm d\rho}{\mathrm dx}=3\sqrt{4x+1}$，所以 $\dfrac{\mathrm d\rho}{\mathrm ds}=3\sqrt{4x+1}\cdot\dfrac{2\sqrt x}{\sqrt{4x+1}}=6\sqrt x$`,
          R`++求 $\dfrac{\mathrm d^2\rho}{\mathrm ds^2}$++：$\dfrac{\mathrm d}{\mathrm dx}(6\sqrt x)=\dfrac3{\sqrt x}$，再除以 $\dfrac{\mathrm ds}{\mathrm dx}$：$\dfrac{\mathrm d^2\rho}{\mathrm ds^2}=\dfrac3{\sqrt x}\cdot\dfrac{2\sqrt x}{\sqrt{4x+1}}=\dfrac6{\sqrt{4x+1}}$`,
          R`**++代入++** $3\cdot\dfrac12(4x+1)^{3/2}\cdot\dfrac6{\sqrt{4x+1}}-36x=9(4x+1)-36x=9$`
        ],
        pitfall: R`!!把 $\dfrac{\mathrm d\rho}{\mathrm ds}$ 当成 $\dfrac{\mathrm d\rho}{\mathrm dx}$!!；求二阶导时!!对 $x$ 求导后忘了再除以 $\dfrac{\mathrm ds}{\mathrm dx}$!!`,
        practice: "教材 习题3-7 第9题（p172，答案习题全解 p131）；题型参考：吉米【360】（p107–108）"
      },
      {
        id: "t6", name: "曲率的物理应用（向心力、压力）",
        signal: R`物体沿曲线运动（==拱桥、俯冲、弯道==），求在某点的==压力、反力、向心力==`,
        example: { q: R`汽车连同载重 5 t，在抛物线拱桥上行驶，速度为 21.6 km/h，桥的跨度为 10 m，拱的矢高为 0.25 m，求汽车越过桥顶时对桥的压力。`, src: "吉米【362】p108；教材 习题3-7 第8题 p172" },
        idea: {
          key: R`==向心力 $F=\dfrac{mv^2}{\rho}$，$\rho$ 是该点的曲率半径==。先建坐标系写出曲线方程，求该点 $\rho$；再按受力方向合成：凸的桥顶 $N=mg-\dfrac{mv^2}\rho$，凹的最低点 $N=mg+\dfrac{mv^2}\rho$。`,
          how: [
            R`++建坐标系，设曲线方程并用已知点定系数++`,
            R`++求该点的曲率半径++ $\rho=\dfrac{(1+y'^2)^{3/2}}{|y''|}$`,
            R`++统一单位++（km/h 化成 m/s，t 化成 kg）`,
            R`++算向心力并按受力方向合成++`
          ],
          refs: [
            { src: "吉米【362】点评 p108", text: R`在解实际问题时，要学会如何合理地应用数学知识，另外熟悉基本的物理学……公式也是必要的` },
            { src: "习题全解 习题3-7 第7题 p130", text: R`座椅对飞行员的反力 $F$ 等于飞行员的离心力及飞行员本身的重量对座椅的压力之和` }
          ]
        },
        think: R`桥顶是抛物线顶点，以顶点为原点、向下为 $y$ 轴正向设 $y=ax^2$，用跨度的一半和矢高定 $a$。顶点处 $y'=0$，$\rho=\dfrac1{|y''|}$。汽车在凸的桥顶，向心力向下，所以压力是重力减向心力。`,
        first: R`建系设 $y=ax^2$，过点 $(5,0.25)$，得 $a=0.01$`,
        steps: [
          R`++建坐标系定方程++：顶点为原点，$y$ 轴向下，$y=ax^2$ 过 $(5,0.25)$，$a=\dfrac{0.25}{25}=0.01$`,
          R`++求顶点处曲率半径++：$y'=0.02x$，$y''=0.02$，$x=0$ 处 $\rho=\dfrac{(1+0)^{3/2}}{0.02}=50$（m）`,
          R`++统一单位++：$v=\dfrac{21.6\times10^3}{3600}=6$（m/s），$m=5\times10^3$ kg`,
          R`++算向心力++：$F=\dfrac{mv^2}\rho=\dfrac{5\times10^3\times36}{50}=3600$（N）`,
          R`**++合成++** 压力 $=mg-F=5\times10^3\times9.8-3600=45400$（N）`
        ],
        pitfall: R`!!凸的桥顶写成 $mg+F$!!（凹的最低点才是加）；!!速度没换成 m/s!!`,
        practice: "教材 例3（p169–170，砂轮）、习题3-7 第7、8题（p172，答案习题全解 p130–131）；题型参考：吉米【362】（p108）"
      },
      {
        id: "t7", name: "求隐函数曲线的曲率",
        signal: R`曲线由方程 ==$F(x,y)=0$== 给出（椭圆、双曲线、超越方程），求某点的曲率`,
        example: { q: R`求椭圆 $4x^2+y^2=4$ 在点 $(0,2)$ 处的曲率。`, src: "教材 习题3-7 第1题 p172；答案 习题全解 p128" },
        idea: {
          key: R`==方程两边对 $x$ 求导两次（$y$ 看成 $x$ 的函数），代入该点依次解出 $y'$、$y''$ 的值==，再代曲率公式。求二阶导时先代入已知的 $x$、$y$、$y'$ 数值，比先求通式省事。`,
          how: [
            R`++两边对 $x$ 求导，代入该点解出 $y'$++`,
            R`++再对 $x$ 求导一次，代入 $x$、$y$、$y'$ 的值解出 $y''$++`,
            R`++代公式++ $K=\dfrac{|y''|}{(1+y'^2)^{3/2}}$`
          ],
          refs: [
            { src: "习题全解 习题3-7 第1题 p128", text: R`由 $8x+2yy'=0$ 知 $y'=\frac{-4x}y$，$y''=\frac{-16}{y^3}$` },
            { src: "教材 2.4 p100–101", text: R`隐函数的二阶导数：对一阶导数的结果再求导，注意 $y$ 是 $x$ 的函数` }
          ]
        },
        think: R`隐函数，求导两次。$(0,2)$ 处 $x=0$，一阶导数直接为 0，二阶导数也很好算。`,
        first: R`两边对 $x$ 求导：$8x+2yy'=0$，得 $y'=-\dfrac{4x}y$`,
        steps: [
          R`++求一阶导数++：$8x+2yy'=0$，$y'=-\dfrac{4x}y$，在 $(0,2)$ 处 $y'=0$`,
          R`++求二阶导数++：$y''=-4\cdot\dfrac{y-xy'}{y^2}=-\dfrac{4(y^2+4x^2)}{y^3}=-\dfrac{16}{y^3}$（用了 $4x^2+y^2=4$）`,
          R`++代入该点++：$y''\big|_{(0,2)}=-\dfrac{16}8=-2$`,
          R`**++代公式++** $K=\dfrac{|-2|}{(1+0)^{3/2}}=2$`,
          R`++检验++：$(0,2)$ 是椭圆 $x^2+\frac{y^2}4=1$ 长轴端点，$K=\dfrac{b}{a^2}=\dfrac{2}{1^2}=2$，一致`
        ],
        pitfall: R`求 $y''$ 时!!把 $y$ 当常数!!，漏了 $y'$；代点时用错点（要先确认点在曲线上）`,
        practice: "习题全解 p128；检验：1000题 基础篇第5章 9题、强化篇第5章 32题"
      },
      {
        id: "t8", name: "求渐屈线方程",
        signal: R`"求曲线的==渐屈线=="（曲率中心的轨迹）`,
        example: { q: R`求抛物线 $y^2=2px$ 的渐屈线方程。`, src: "教材 习题3-7 第11题（* 题）p172；答案 习题全解 p132" },
        idea: {
          key: R`==渐屈线就是曲率中心公式本身==：把一般点的 $y'$、$y''$ 代入 $\alpha=x-\dfrac{y'(1+y'^2)}{y''}$，$\beta=y+\dfrac{1+y'^2}{y''}$，得到以 $x$（或 $y$、$t$）为参数的参数方程；能消参就消去参数。`,
          how: [
            R`++求一般点的 $y'$、$y''$++（用一个变量表示）`,
            R`++代曲率中心公式，化简 $\alpha$、$\beta$++`,
            R`++消去参数++，写出 $\alpha$、$\beta$ 的关系式`
          ],
          refs: [
            { src: "教材 p170", text: R`当点 $(x,f(x))$ 沿曲线 $C$ 移动时，相应的曲率中心 $D$ 的轨迹曲线 $G$ 称为曲线 $C$ 的渐屈线` },
            { src: "教材 例4 p171", text: R`将这些结果代入(7-8)式并化简，便得摆线的渐屈线的参数方程` }
          ]
        },
        think: R`$y^2=2px$ 用 $y$ 作参数最方便：$x=\dfrac{y^2}{2p}$。隐函数求导得 $y'$、$y''$，都用 $y$ 表示，代公式后再消去 $y$。`,
        first: R`求导：$2yy'=2p$，$y'=\dfrac py$；再求导 $y'^2+yy''=0$，$y''=-\dfrac{p^2}{y^3}$`,
        steps: [
          R`++求导数++：$y'=\dfrac py$，$y''=-\dfrac{y'^2}y=-\dfrac{p^2}{y^3}$`,
          R`++算 $\alpha$++：$\alpha=\dfrac{y^2}{2p}-\dfrac{\frac py\left(1+\frac{p^2}{y^2}\right)}{-\frac{p^2}{y^3}}=\dfrac{y^2}{2p}+\dfrac{y^2+p^2}p=\dfrac{3y^2}{2p}+p$`,
          R`++算 $\beta$++：$\beta=y+\dfrac{1+\frac{p^2}{y^2}}{-\frac{p^2}{y^3}}=y-\dfrac{y(y^2+p^2)}{p^2}=-\dfrac{y^3}{p^2}$`,
          R`++消去参数++：$y^2=\dfrac{2p(\alpha-p)}3$，$\beta^2=\dfrac{y^6}{p^4}=\dfrac{8p^3(\alpha-p)^3}{27p^4}$`,
          R`**++写结论++** 渐屈线方程为 $27p\beta^2=8(\alpha-p)^3$`
        ],
        pitfall: R`分式化简时!!负号丢失!!（$y''<0$）；忘了消参或消参时幂次算错`,
        practice: "教材 例4（p171，摆线的渐屈线）；习题全解 p132"
      },
      {
        id: "t9", tag: "研", name: "由曲率圆反求函数在该点的导数值",
        signal: R`已知曲线在某点的==曲率圆方程==，求 $f(x_0)$、$f'(x_0)$、$f''(x_0)$，或与 $a+bx+cx^2$ 比较`,
        example: { q: R`已知曲线 $y=f(x)$ 在点 $(0,1)$ 处的曲率圆方程为 $(x-1)^2+y^2=2$，且当 $x\to0$ 时，二阶可导函数 $f(x)$ 与 $a+bx+cx^2$ 的差为 $o(x^2)$，则（　）。(A) $a=0,b=1,c=\frac32$　(B) $a=1,b=0,c=1$　(C) $a=1,b=1,c=-1$　(D) $a=1,b=0,c=-1$`, src: "18讲 第5讲 例5.3 p44" },
        idea: {
          key: R`==曲率圆和曲线在切点处 $y$、$y'$、$y''$ 都相同==：对曲率圆方程用隐函数求导，算出该点的 $y'$、$y''$，就是 $f'(x_0)$、$f''(x_0)$。再用泰勒公式（3.3）写出二阶展开。`,
          how: [
            R`++由点在曲线上得 $f(x_0)$++`,
            R`++对圆的方程两边对 $x$ 求导，代点得 $f'(x_0)$++`,
            R`++再求导一次，代点得 $f''(x_0)$++`,
            R`++写带佩亚诺余项的泰勒公式比较系数++`
          ],
          refs: [
            { src: "18讲 重要结论 (3) p43", text: R`若 $f(x)$ 在点 $P_0(x_0,y_0)$ 处的曲率圆方程为 $(x-a)^2+(y-b)^2=r^2$，对 $x$ 求导可得 $y'_x$，再对 $x$ 求导可得 $y''_{xx}$，则 $y'_x\big|_{x=x_0}=f'(x_0)$，$y''_{xx}\big|_{x=x_0}=f''(x_0)$` },
            { src: "教材 p169", text: R`曲率圆与曲线在点 $M$ 有相同的切线和曲率，且在点 $M$ 邻近有相同的凹向` }
          ]
        },
        think: R`曲率圆在 $(0,1)$ 处"代替"曲线到二阶，所以圆在该点的 $y'$、$y''$ 就是 $f'(0)$、$f''(0)$。$a+bx+cx^2$ 与 $f(x)$ 差 $o(x^2)$，就是 $f$ 的二阶泰勒多项式。`,
        first: R`点 $(0,1)$ 在曲线上：$f(0)=1$；对圆的方程求导：$2(x-1)+2yy'=0$`,
        steps: [
          R`++由点在曲线上++：$f(0)=1$`,
          R`++对圆的方程求导一次++：$2(x-1)+2yy'=0$，代 $x=0$，$y=1$：$y'=1$，所以 $f'(0)=1$`,
          R`++再求导一次++：$2+2y'^2+2yy''=0$，代 $y=1$，$y'=1$：$y''=-2$，所以 $f''(0)=-2$`,
          R`++写泰勒公式++：$f(x)=1+x+\dfrac{-2}2x^2+o(x^2)=1+x-x^2+o(x^2)$`,
          R`**++比较系数++** $a=1$，$b=1$，$c=-1$，选 (C)`
        ],
        pitfall: R`以为曲率圆只和曲线"相切"，!!只用到一阶导数!!；!!$c$ 取成 $f''(0)$ 忘了除以 2!!`,
        practice: "18讲 例5.3（p44）；检验：1000题 基础篇第5章 10题"
      },
      {
        id: "t10", tag: "研", name: "切线竖直时的曲率：把 x 看作 y 的函数",
        signal: R`所求点处==切线竖直==（$y'$ 不存在），例如 $y^2=x$ 在原点、$x=y^2$ 型曲线`,
        example: { q: R`曲线 $y^2=x$ 在点 $(0,0)$ 处的曲率圆方程为 ____。`, src: "武忠祥 第2章 例6(1) p83" },
        idea: {
          key: R`曲率与坐标轴的选择无关：==$y'$ 不存在时，把 $x$ 看成 $y$ 的函数==，用 $K=\dfrac{|x''_{yy}|}{(1+x'^2_y)^{3/2}}$；圆心沿法线（此时是水平线）向凹的一侧量 $\rho$。`,
          how: [
            R`++发现 $y'$ 在该点不存在（切线竖直）++`,
            R`++改写成 $x=x(y)$，求 $x'_y$、$x''_{yy}$++`,
            R`++代公式求 $K$ 和 $\rho$++`,
            R`++判断开口方向，在水平法线上向凹侧量 $\rho$ 定圆心++`
          ],
          refs: [
            { src: "武忠祥 例6(1) p83", text: R`$\frac{\mathrm dx}{\mathrm dy}\big|_{y=0}=0$，$\frac{\mathrm d^2x}{\mathrm dy^2}\big|_{y=0}=2$，则 $K=\frac{|x''(0)|}{[1+x'^2(0)]^{3/2}}=2$` },
            { src: "1000题 强化篇第5章 33题【注】", text: R`考生要识别出此题是求曲率圆方程的` }
          ]
        },
        think: R`$y^2=x$ 在原点切线是 $y$ 轴，$\dfrac{\mathrm dy}{\mathrm dx}$ 不存在，直角坐标公式用不了。换个角度看：$x=y^2$ 是"躺着的抛物线"，原点是它的顶点。`,
        first: R`改写成 $x=y^2$，求 $x'_y=2y$，$x''_{yy}=2$`,
        steps: [
          R`++判断++：$y'=\dfrac1{2y}$ 在 $y=0$ 处不存在，切线是竖直的 $y$ 轴`,
          R`++把 $x$ 看作 $y$ 的函数++：$x=y^2$，$x'_y\big|_{y=0}=0$，$x''_{yy}=2$`,
          R`++代公式++：$K=\dfrac{|x''|}{(1+x'^2)^{3/2}}=2$，$\rho=\dfrac12$`,
          R`++定圆心++：曲线开口向右（$x\geqslant0$），凹的一侧在右边，法线是 $x$ 轴，圆心 $\left(\dfrac12,0\right)$`,
          R`**++写方程++** $\left(x-\dfrac12\right)^2+y^2=\dfrac14$`
        ],
        pitfall: R`硬套 $y=f(x)$ 的公式，!!$y'$ 不存在就以为曲率不存在!!；圆心放到了左边（凸的一侧）`,
        practice: "武忠祥 例6(1)（p83）；检验：1000题 强化篇第5章 33题"
      },
      {
        id: "t11", tag: "研", name: "两曲线相切且曲率相等的条件",
        signal: R`"两条曲线在 $x=a$ 处==相切且曲率相等==""==有相同的曲率圆=="，判断条件之间的关系`,
        example: { q: R`（2019）设函数 $f(x)$、$g(x)$ 的二阶导函数在 $x=a$ 处连续，则 $\lim\limits_{x\to a}\dfrac{f(x)-g(x)}{(x-a)^2}=0$ 是两条曲线 $y=f(x)$、$y=g(x)$ 在 $x=a$ 处相切且曲率相等的（　）。(A) 充分非必要条件　(B) 充分必要条件　(C) 必要非充分条件　(D) 既非充分又非必要条件`, src: "习题全解 附 考研试题选解 第8题 p345" },
        idea: {
          key: R`==相切：$f(a)=g(a)$，$f'(a)=g'(a)$；再加曲率相等：$|f''(a)|=|g''(a)|$，即 $f''(a)=\pm g''(a)$==（分母已经相等）。极限条件等价于 $f$、$g$ 在 $a$ 处函数值、一阶、二阶导数都相等，比"曲率相等"多要求了 $f''$ 同号。`,
          how: [
            R`++把"相切且曲率相等"翻译成导数条件++：$f(a)=g(a)$，$f'(a)=g'(a)$，$f''(a)=\pm g''(a)$`,
            R`++把极限条件翻译成导数条件++（洛必达或泰勒）`,
            R`++比较两组条件，找反例++`
          ],
          refs: [
            { src: "习题全解 考研试题选解 p345", text: R`若两条曲线……相切且曲率相等，则可得 $f(a)=g(a)$，$f'(a)=g'(a)$，$f''(a)=\pm g''(a)$` },
            { src: "教材 p169", text: R`曲率圆与曲线在点 $M$ 有相同的切线和曲率，且在点 $M$ 邻近有相同的凹向` }
          ]
        },
        think: R`曲率带绝对值，所以"曲率相等"只能推出 $f''(a)=\pm g''(a)$。而极限为 0 要求 $f-g$ 是 $(x-a)^2$ 的高阶无穷小，相当于二阶导也相等。`,
        first: R`翻译"相切且曲率相等"：$f(a)=g(a)$，$f'(a)=g'(a)$，$|f''(a)|=|g''(a)|$`,
        steps: [
          R`++翻译几何条件++：相切 ⇒ $f(a)=g(a)$，$f'(a)=g'(a)$；曲率相等时分母 $(1+f'^2)^{3/2}=(1+g'^2)^{3/2}$，所以 $|f''(a)|=|g''(a)|$`,
          R`++翻译极限条件++：分子分母都趋于 0，连用两次洛必达，$\lim\limits_{x\to a}\dfrac{f(x)-g(x)}{(x-a)^2}=\dfrac{f''(a)-g''(a)}2$（前提是 $f(a)=g(a)$、$f'(a)=g'(a)$；否则极限不可能为 0）`,
          R`++充分性++：极限为 0 ⇒ $f(a)=g(a)$，$f'(a)=g'(a)$，$f''(a)=g''(a)$ ⇒ 相切且曲率相等`,
          R`++必要性举反例++：$f=x^2$，$g=-x^2$，$a=0$：相切（都是 $y=0$），曲率都是 2，但极限 $=\lim\dfrac{2x^2}{x^2}=2\neq0$`,
          R`**++结论++** 充分非必要，选 (A)`
        ],
        pitfall: R`!!把"曲率相等"当成"$f''(a)=g''(a)$"!!，误选 (B)；忘了曲率公式里的绝对值`,
        practice: "习题全解 附 考研试题选解 第8题（p345）"
      }
    ],

    pitfalls: [
      { id: "e3", wrong: R`$(\sec^2x)^{3/2}=\sec^3x$`, why: R`$\sqrt{\sec^2x}=|\sec x|$，开方要加绝对值`, right: R`$(\sec^2x)^{3/2}=|\sec x|^3$，所以 $y=\ln\sec x$ 的 $K=|\cos x|$（习题全解 p128）`, test: R`$y=\ln\sec x$ 在 $x=\frac{2\pi}3$ 附近有定义吗？$K$ 在 $x=\frac\pi3$ 处是多少？`, ans: R`$\sec\frac{2\pi}3=-2<0$，$\ln\sec x$ 无定义；$x=\frac\pi3$ 处 $K=\frac12$`, link: "题型 1" },
      { id: "e6", wrong: R`曲率最大的点就是 $|y''|$ 最大的点`, why: R`$K$ 的分母 $(1+y'^2)^{3/2}$ 也随 $x$ 变，只有 $y'$ 恒为 0 附近才能忽略`, right: R`把 $K$（或 $\rho$）整体写成函数再求最值（教材 例2 p168；习题全解 第5题 p129）`, test: R`$y=\ln x$ 上哪点曲率最大？`, ans: R`$K=\dfrac x{(1+x^2)^{3/2}}$，$x=\dfrac{\sqrt2}2$ 处最大，此时 $\rho=\dfrac{3\sqrt3}2$（而 $|y''|=\frac1{x^2}$ 在 $x\to0^+$ 时无界）`, link: "题型 3" },
      { id: "e8", wrong: R`曲线上每一点都有曲率圆，$\rho=\frac1K$`, why: R`曲率圆的定义要求 $K\neq0$；$K=0$ 时（直线、拐点）没有曲率圆`, right: R`先确认 $K\neq0$ 即 $y''\neq0$，再写 $\rho=\frac1K$（教材 p169）`, test: R`$y=x^3$ 在原点的曲率和曲率半径？`, ans: R`$y''(0)=0$，$K=0$，没有曲率圆（曲率半径不存在）`, link: "知识点 8" },
      { id: "e9", wrong: R`$y=-x^2$ 在原点的曲率中心是 $\left(0,\frac12\right)$`, why: R`曲率中心在凹的一侧；$y''<0$ 时曲线凸，圆心在下方，$\beta<y$`, right: R`$\beta=y+\dfrac{1+y'^2}{y''}=0+\dfrac1{-2}=-\dfrac12$，中心 $\left(0,-\frac12\right)$（教材 p170）`, test: R`$x^2=y+1$ 在 $(0,-1)$ 处的曲率圆方程？`, ans: R`$x^2+\left(y+\frac12\right)^2=\frac14$（1000题 基础篇第5章 24题）`, link: "题型 4" },
      { id: "e12", wrong: R`砂轮半径要不小于曲率半径的最大值`, why: R`砂轮比最弯处的曲率圆还大，就会把最弯处附近磨掉太多`, right: R`砂轮半径不超过曲率半径的最小值，也就是曲率最大处（顶点）的曲率半径（教材 例3 p169–170）`, test: R`内表面截线 $y=x^2$，砂轮直径最大多少？`, ans: R`顶点 $K=2$，$\rho=\frac12$，直径不超过 1`, link: "知识点 9" },
      { id: "e13", wrong: R`汽车过凸的桥顶，压力 $=mg+\dfrac{mv^2}\rho$`, why: R`凸的桥顶，向心加速度向下，由重力减支持力提供：$mg-N=\dfrac{mv^2}\rho$`, right: R`桥顶压力 $=mg-\dfrac{mv^2}\rho$；凹的最低点（俯冲）才是 $mg+\dfrac{mv^2}\rho$（习题全解 第7、8题 p130–131）`, test: R`飞机沿 $y=\frac{x^2}{10000}$ 俯冲，在原点 $v=200$ m/s，飞行员 70 kg，座椅反力？`, ans: R`$\rho=5000$，$70\times9.8+\dfrac{70\times200^2}{5000}=686+560=1246$（N）`, link: "题型 6" },
      { id: "e16", wrong: R`$\dfrac{\mathrm d\rho}{\mathrm ds}=\dfrac{\mathrm d\rho}{\mathrm dx}$`, why: R`$\rho$、$s$ 都是 $x$ 的函数，对 $s$ 求导要除以 $\dfrac{\mathrm ds}{\mathrm dx}$`, right: R`$\dfrac{\mathrm d\rho}{\mathrm ds}=\dfrac{\rho'(x)}{\sqrt{1+y'^2}}$（吉米【360】p107）`, test: R`抛物线 $y=x^2$ 上，$\rho=\frac12(1+4x^2)^{3/2}$，$\dfrac{\mathrm d\rho}{\mathrm ds}=$？`, ans: R`$6x$（习题全解 第9题 p131）`, link: "题型 5" },
      { id: "e17", wrong: R`隐函数求 $y''$ 时，把 $8x+2yy'=0$ 再求导写成 $8+2yy''=0$`, why: R`$yy'$ 是乘积，$y$ 也是 $x$ 的函数，求导得 $y'^2+yy''$`, right: R`$8+2y'^2+2yy''=0$；代点前先算出 $y'$（教材 2.4 p100–101）`, test: R`$x^2-xy+y^2=1$ 在 $(1,1)$ 处的曲率？`, ans: R`$y'=-1$，$y''=-6$，$K=\dfrac{3\sqrt2}2$（1000题 基础篇第5章 9题）`, link: "题型 7" },
      { id: "e18", wrong: R`曲率圆只和曲线相切，只能确定 $f'(x_0)$`, why: R`曲率圆和曲线同切线、同曲率、同凹向，所以 $y'$、$y''$ 都相同`, right: R`对曲率圆方程求导两次，在该点得到 $f'(x_0)$ 和 $f''(x_0)$（18讲 p43）`, test: R`曲线在 $(0,1)$ 处曲率圆为 $(x-1)^2+y^2=2$，$f''(0)=$？`, ans: R`$-2$（18讲 例5.3 p44）`, link: "题型 9" },
      { id: "e19", wrong: R`$y^2=x$ 在原点 $y'$ 不存在，所以曲率不存在`, why: R`曲率是几何量，与坐标选择无关；切线竖直时可以把 $x$ 看成 $y$ 的函数`, right: R`$x=y^2$，$x'_y=0$，$x''_{yy}=2$，$K=2$（武忠祥 例6(1) p83）`, test: R`$y^2=x$ 在原点的曲率圆圆心在哪？`, ans: R`$\left(\frac12,0\right)$，在凹的一侧（右边）`, link: "题型 10" },
      { id: "e20", wrong: R`两曲线在 $x=a$ 相切且曲率相等，就有 $f''(a)=g''(a)$`, why: R`曲率带绝对值，只能得到 $|f''(a)|=|g''(a)|$`, right: R`$f''(a)=\pm g''(a)$；反例 $x^2$ 与 $-x^2$ 在原点（习题全解 考研试题选解 p345）`, test: R`$y=x^2$ 和 $y=-x^2$ 在原点的曲率圆相同吗？`, ans: R`不同：半径都是 $\frac12$，圆心分别在 $\left(0,\frac12\right)$ 和 $\left(0,-\frac12\right)$`, link: "题型 11" }
    ]
  });
})();
