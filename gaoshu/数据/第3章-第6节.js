/*
类型: 题型
标题: 高等数学 第3章 第6节 函数图形的描绘 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-28
更新日期: 2026-10-28
状态: 完成

页码一律是印刷页（转换稿的页码标记在每页开头，标记后面的内容属于该页；3.6 从 p159 开始，例 1–3 在 p160–163，习题3-6 在 p163–164）。
教材 = 同济第八版上册（斜渐近线在第八版里放在 总习题一 第14题 p70）；习题全解 = 同济第八版上册习题全解指导（习题3-6 在 p123–128，总习题一 第14题 p48–50）；
吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；30讲 = 张宇基础30讲；18讲 = 张宇高数18讲；武忠祥 = 高等数学辅导讲义（强化）；1000题 = 张宇1000题（只写题号）。
吉米本节「基本题型」只有一类：求曲线的渐近线方程（【347】–【357】p101–106），按考法拆成题型 1–8；题型 9、10 是教材和习题全解的题型；题型 11、12 是武忠祥、18讲的考法，标「研」。
网页上不标「⚠️未核验」；没有出处的几条（陷阱小题、反例）都已逐条核对，导数、极限、函数值用代码验算过。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "3.6",
    chapter: 3,
    title: "函数图形的描绘",
    pages: "教材 p159–164",
    sources: [
      "教材 第三章第六节 p159–164；第一章第三节 p30（水平渐近线）、第四节 p35（铅直渐近线）、总习题一 第14题 p70（斜渐近线）",
      "习题全解 习题3-6 p123–128；总习题一 第14题 p48–50",
      "吉米 第3章 §6 函数图形的描绘 p101–106【347】–【357】",
      "30讲 第5讲 三 渐近线 p151–154、五 作函数图像 p156–158、习题 5.3、5.5、5.7 p160–163",
      "18讲 第5讲 三 渐近线 p45–46",
      "武忠祥 第2章 (四) 曲线的渐近线 p77；题型二 例3–例5 p81–83",
      "1000题 基础篇第5章、强化篇第5章"
    ],
    updated: "2026-10-28",

    framework: {
      main: R`描绘函数图形就是把前面学的工具合起来用：先看定义域和对称性，再用 $f'$ 定升降和极值、$f''$ 定凹凸和拐点，把分点和符号列成一张表；最后用极限找渐近线、看间断点两侧和无穷远处的走向，算出关键点连线。渐近线分铅直、水平、斜三种，按"铅直 → 水平 → 斜"的顺序、$x\to+\infty$ 和 $x\to-\infty$ 两侧分开找。`,
      nodes: [
        { id: "DOM", go: "p5", col: 0, row: 0, kind: "map", label: "定义域与对称性", sub: "奇偶、周期缩小范围" },
        { id: "PTS", go: "p2", col: 1, row: 0, kind: "func", label: "分点", sub: R`$f'$、$f''$ 零点、不存在点、间断点` },
        { id: "TAB", go: "p3", col: 2, row: 0, kind: "build", label: "列表", sub: "升降、凹凸、极值、拐点" },
        { id: "VA", go: "p7", col: 0, row: 1, kind: "prop", label: "铅直渐近线", sub: R`$x\to x_0^\pm$ 时 $f\to\infty$` },
        { id: "PLOT", go: "p1", col: 2, row: 1, kind: "build", label: "描点作图", sub: "五步：关键点 + 补充点" },
        { id: "LIM", go: "p10", col: 0, row: 2, kind: "map", label: "极限（第一章）", sub: "单侧极限、无穷远处" },
        { id: "HA", go: "p6", col: 1, row: 2, kind: "prop", label: "水平渐近线", sub: R`$x\to\pm\infty$ 时 $f\to A$` },
        { id: "SA", go: "p8", col: 2, row: 2, kind: "prop", label: "斜渐近线", sub: R`先求 $a$，再求 $b$` }
      ],
      edges: [
        { from: "DOM", to: "PTS", label: "求导找点" },
        { from: "PTS", to: "TAB", label: "定符号" },
        { from: "TAB", to: "PLOT", label: "性态" },
        { from: "LIM", to: "VA", label: "无穷间断点" },
        { from: "LIM", to: "HA", label: "趋于常数" },
        { from: "HA", to: "SA", label: "同侧趋于∞时再求" },
        { from: "VA", to: "PLOT", label: "间断点两侧走向" },
        { from: "SA", to: "PLOT", label: "无穷远处走向" }
      ],
      keys: [
        { q: R`利用导数描绘函数图形有哪五步？`, a: R`① 定义域和奇偶性、周期性，求 $f'$、$f''$；② 求 $f'$、$f''$ 的零点和不存在的点、$f$ 的间断点，划分部分区间；③ 定各区间内 $f'$、$f''$ 的符号，得升降、凹凸、拐点；④ 求水平、铅直渐近线和其他变化趋势；⑤ 算关键点的函数值，补点连线（教材 p159–160）。` },
        { q: R`三种渐近线各怎么求？`, a: R`铅直：在无定义点、定义区间端点、分段点处求单侧极限，有一侧是 $\infty$ 就是（30讲 p151）；水平：$\lim\limits_{x\to\pm\infty}f(x)=A$（教材 p30）；斜：$a=\lim\frac{f(x)}x\neq0$，$b=\lim[f(x)-ax]$，两个都存在才有（教材 总习题一 第14题 p70；30讲 p152–153）。` },
        { q: R`找渐近线按什么顺序？要注意什么？`, a: R`铅直 → 水平 → 斜（30讲 p152 注3）。水平和斜渐近线 $x\to+\infty$、$x\to-\infty$ 两侧分开求，两侧可能不同（30讲 p151–152）；同一侧有水平渐近线就没有斜渐近线，但另一侧可能有（吉米【349】点评 p102）。` },
        { q: R`列表时分点有哪几类？间断点怎么处理？`, a: R`$f'$、$f''$ 的零点，$f'$、$f''$ 不存在的点，$f$ 的间断点（教材 p159）。间断点不在定义域内，两侧区间断开，不算极值点也不算拐点；无穷间断点处画铅直渐近线（教材 例3 p162–163）。` }
      ]
    },

    points: [
      {
        group: "一、利用导数描绘函数图形",
        items: [
          {
            id: "p1", kind: "方法", name: "描绘函数图形的一般步骤", page: "教材 p159–160",
            body: R`==第一步== 确定函数 $y=f(x)$ 的==定义域==及所具有的某些特性（如==奇偶性、周期性==等），并求出 $f'(x)$ 和 $f''(x)$；==第二步== 求出 $f'(x)$ 和 $f''(x)$ 在定义域内的==全部零点==，并求出 $f(x)$ 的==间断点==及 $f'(x)$ 和 $f''(x)$ ==不存在的点==，用这些点把定义域划分成几个部分区间；==第三步== 确定这些部分区间内 $f'(x)$ 和 $f''(x)$ 的符号，由此确定图形的==升降、凹凸和拐点==；==第四步== 确定图形的==水平、铅直渐近线以及其他变化趋势==；==第五步== 算出 $f'(x)$ 和 $f''(x)$ 的零点以及不存在的点所对应的函数值，定出图形上相应的点，有时还要==补充一些点==，然后连线画出图形。`,
            notes: [
              R`一阶导数的符号定升降，二阶导数的符号定凹凸和拐点；知道了升降、凹凸以及拐点，就==掌握了函数的性态==（教材 p159）`,
              R`吉米把求渐近线提到求导之前：(1) 定义域 (2) 奇偶性、周期性 (3) 水平、铅直、斜渐近线 (4) 求 $f'$、$f''$ 和关键点 (5) 列表 (6) 作图（吉米 p101）`,
              R`30讲 压缩成四步：定义域和对称性、导数工具、渐近线、作图。"==通常不会直接考查作图，但应学会分析函数性态=="（30讲 p156）`
            ],
            quiz: R`描绘 $y=1+\dfrac{36x}{(x+3)^2}$ 的图形，第二步要找哪几个点？各属于哪一类？`
          },
          {
            id: "p2", kind: "方法", name: "划分部分区间的分点", page: "教材 p159、p162",
            body: R`分点有三类：==$f'(x)$、$f''(x)$ 的零点==，==$f'(x)$、$f''(x)$ 不存在的点==，==$f(x)$ 的间断点==。分点由小到大排列，把定义域分成部分区间。==间断点不属于定义域，两侧区间在这里断开==。`,
            notes: [
              R`$f'$ 的零点和不存在点是==极值疑点==，$f''$ 的零点和不存在点是==拐点疑点==（吉米 p101 作图步骤 (4)）`,
              R`例 3：$y=1+\dfrac{36x}{(x+3)^2}$，$x=-3$ 是间断点，$x=3$、$x=6$ 分别是 $f'$、$f''$ 的零点，划分成 $(-\infty,-3)$、$(-3,3]$、$[3,6]$、$[6,+\infty)$（教材 p162）`,
              R`疑点不一定是：$y=\frac15(x^4-6x^2+8x+7)$ 的 $y'=\frac45(x+2)(x-1)^2$，$x=1$ 处 ==$y'=0$ 但不变号，不是极值点==；$y''=\frac{12}5(x+1)(x-1)$ 在 $x=1$ 变号，$(1,2)$ 是拐点（习题全解 习题3-6 第1题 p124）`
            ],
            quiz: R`$y=(x-5)x^{\frac23}$ 的分点有哪些？哪个是"不存在的点"？`
          },
          {
            id: "p3", kind: "方法", name: "列表确定升降、凹凸、极值和拐点", page: "教材 p160；第四节 p144–146、第五节 p150",
            body: R`在每个部分区间内定出 $f'$、$f''$ 的符号：==$f'>0$ 上升，$f'<0$ 下降；$f''>0$ 凹，$f''<0$ 凸==。组合起来有四种曲线弧：==上升而凸、下降而凸、下降而凹、上升而凹==。把分点和区间排成一张表，==$f'$ 在分点两侧变号是极值点，$f''$ 在分点两侧变号是拐点==。`,
            notes: [
              R`例 1：$y=x^3-x^2-x+1$，$f'=(3x+1)(x-1)$，$f''=2(3x-1)$；在 $\left(-\infty,-\frac13\right)$ 内 $f'>0$、$f''<0$，曲线弧==上升而且是凸的==（教材 p160）`,
              R`极值用第一充分条件（$f'$ 变号，教材 p150）；拐点要 $f''$ 在两侧异号，$f''(x_0)=0$ 不够：$y=x^4$ 的 $(0,0)$ 不是拐点（教材 例10 p146–147）`,
              R`==拐点写成曲线上的点 $(x_0,f(x_0))$==：例 1 的拐点是 $\left(\frac13,\frac{16}{27}\right)$（教材 p161）`
            ],
            quiz: R`在某区间内 $f'<0$、$f''>0$，曲线弧是什么样子？`
          },
          {
            id: "p4", kind: "方法", name: "关键点和补充点", page: "教材 p161、p163；吉米 p101",
            body: R`第五步要算出 ==$f'$、$f''$ 的零点和不存在的点所对应的函数值==，定出图形上的==极值点、拐点==等关键点；为了把图形画准，再==补充一些点==，常取==与坐标轴的交点==和间断点两侧的点。`,
            notes: [
              R`例 1 算出 $\left(-\frac13,\frac{32}{27}\right)$、$\left(\frac13,\frac{16}{27}\right)$、$(1,0)$，再补充 $(-1,0)$、$(0,1)$、$\left(\frac32,\frac58\right)$（教材 p161）`,
              R`例 3 在间断点 $x=-3$ 左右补充 $(-1,-8)$、$(-9,-8)$、$\left(-15,-\frac{11}4\right)$，看清两支的走向（教材 p163）`,
              R`"如果作图的关键点（无意义点除外）不够，还可多描一些点，例如 $f(x)$ 与坐标轴的交点等"（吉米 p101）`
            ],
            quiz: R`描绘 $y=x^3-x^2-x+1$ 时，为什么还要补充 $(-1,0)$ 和 $(0,1)$？`
          },
          {
            id: "p5", kind: "方法", name: "利用奇偶性、周期性缩小作图范围", page: "教材 p159、p161–162",
            body: R`==偶函数图形关于 $y$ 轴对称，奇函数图形关于原点对称==，只需讨论 $[0,+\infty)$ 上的图形，再按对称性补全；==周期函数只需讨论一个周期==，再平移。`,
            notes: [
              R`例 2：$y=\frac1{\sqrt{2\pi}}\mathrm e^{-\frac{x^2}2}$ 是偶函数，只讨论 $[0,+\infty)$，最后利用对称性得到 $(-\infty,0]$ 上的图形（教材 p161–162）`,
              R`习题3-6 第5题：$y=\dfrac{\cos x}{\cos2x}$ 是偶函数、以 $2\pi$ 为周期，只讨论 $[0,\pi]$（习题全解 p127）`,
              R`奇函数关于原点对称后，==极大值点变成极小值点==，凹弧变成凸弧，拐点仍是拐点`
            ],
            quiz: R`$y=\dfrac{x}{1+x^2}$ 在 $[0,+\infty)$ 上的极大值点是 $x=1$，在 $(-\infty,0]$ 上呢？`
          }
        ]
      },
      {
        group: "二、曲线的渐近线",
        items: [
          {
            id: "p6", kind: "定义", name: "水平渐近线", page: "教材 p30；30讲 p151",
            body: R`若 ==$\lim\limits_{x\to+\infty}f(x)=A$（或 $\lim\limits_{x\to-\infty}f(x)=A$）==，则直线 ==$y=A$== 是曲线 $y=f(x)$ 的水平渐近线。==$x\to+\infty$ 和 $x\to-\infty$ 分别看==，所以水平渐近线==最多两条==。`,
            notes: [
              R`两侧可能相同，如 $y=\mathrm e^{-|x|}$ 两侧都是 $y=0$；==也可能不同==，如 $y=\arctan x$ 有 $y=\frac\pi2$ 和 $y=-\frac\pi2$ 两条（30讲 p151 注）`,
              R`例 2：$\lim\limits_{x\to+\infty}f(x)=0$，图形有一条水平渐近线 $y=0$（教材 p162）`,
              R`极限是 $\infty$ 或不存在（如 $\lim\limits_{x\to\infty}\sin x$），这一侧==没有水平渐近线==`
            ],
            quiz: R`$y=\dfrac{2^x}{2^x+1}$ 有几条水平渐近线？`
          },
          {
            id: "p7", kind: "定义", name: "铅直渐近线", page: "教材 p35；30讲 p151",
            body: R`若 ==$\lim\limits_{x\to x_0^+}f(x)=\infty$ 或 $\lim\limits_{x\to x_0^-}f(x)=\infty$==（==有一侧就够==），则直线 $x=x_0$ 是曲线的铅直渐近线。==$x_0$ 只在无定义点、定义区间的端点、分段函数的分段点中找==。`,
            notes: [
              R`例：$y=\tan x$ 在 $x=\frac\pi2$ 处；$y=\ln x$ 在 $x\to0^+$ 处（30讲 p151 注）`,
              R`"铅直渐近线应在函数的==无穷间断点==处取得"（吉米【350】点评 p103）`,
              R`分子分母同为 0 的点，约分后有有限极限，==是可去间断点，不是铅直渐近线==：$\dfrac{x^2+x}{x^2-1}$ 在 $x=-1$ 处极限为 $\frac12$（30讲 习题5.3 答案 p162）`,
              R`铅直渐近线可以有无穷多条，如 $y=\tan x$`
            ],
            quiz: R`$y=\mathrm e^{\frac1x}$ 在 $x\to0^-$ 时极限是 0，$x=0$ 还是铅直渐近线吗？`
          },
          {
            id: "p8", kind: "定义", name: "斜渐近线", page: "教材 总习题一 第14题 p70；30讲 p152–153",
            body: R`若 ==$a=\lim\limits_{x\to+\infty}\dfrac{f(x)}x$ 存在且 $a\neq0$==，==$b=\lim\limits_{x\to+\infty}[f(x)-ax]$ 也存在==，则 ==$y=ax+b$== 是曲线（$x\to+\infty$ 一侧）的斜渐近线；$x\to-\infty$ 一侧同样。教材的说法：直线 $L:y=kx+b$ 是曲线的渐近线的==充分必要条件==是 $k=\lim\frac{f(x)}x$、$b=\lim[f(x)-kx]$，$k\neq0$ 时称为斜渐近线。`,
            notes: [
              R`为什么这样求：$\lim[f(x)-(ax+b)]=0$，两边除以 $x$ 得 $\lim\frac{f(x)}x=a$；代回去得 $\lim[f(x)-ax]=b$（30讲 p152 注1）`,
              R`教材用==动点到直线的距离 $d(M,L)\to0$== 定义渐近线，证明它和上面的充要条件等价（教材 p70；习题全解 p48–50）`,
              R`==$a$ 和 $b$ 都要求出来==：$y=x+\sin x$ 的 $a=1$，但 $b=\lim\sin x$ 不存在，没有斜渐近线（30讲 p153 注4）`,
              R`$x\to+\infty$ 和 $x\to-\infty$ 的斜渐近线==可能相同，也可能不同==，有时要分两侧分别求（30讲 p152 注2）`
            ],
            quiz: R`$y=x+\dfrac{\ln x}x$ 有斜渐近线吗？如果有，是哪条？`
          },
          {
            id: "p9", kind: "结论", name: R`斜渐近线的展开求法 $f(x)=ax+b+\alpha(x)$`, page: "武忠祥 p82",
            body: R`如果能把函数写成 ==$f(x)=ax+b+\alpha(x)$，其中 $a\neq0$，$\lim\alpha(x)=0$==，那么 $y=ax+b$ 就是斜渐近线。用泰勒公式或等价无穷小把 $f(x)$ 展开到常数项，直接读出 $a$、$b$。`,
            notes: [
              R`例：$y=\dfrac{(1+x)^{\frac32}}{\sqrt x}=x\left(1+\frac1x\right)^{\frac32}=x+\frac32+x\cdot o\left(\frac1x\right)$，斜渐近线 $y=x+\frac32$（武忠祥 题型二 例3 方法二 p82）`,
              R`展开时==要保留到 $\frac1x$ 这一项==，乘以 $x$ 以后它才变成常数项 $b$`
            ],
            quiz: R`用展开式求 $y=x\mathrm e^{\frac1x}$ 的斜渐近线。`
          },
          {
            id: "p10", kind: "结论", name: "找渐近线的顺序和相互关系", page: "30讲 p152–153；吉米 p102",
            body: R`顺序：==铅直 → 水平 → 斜==。==同一侧水平渐近线和斜渐近线不能同时存在==：$\lim f(x)=A$ 有限时，$\lim\frac{f(x)}x=0$；==只有 $\lim f(x)=\infty$ 的一侧才去求斜渐近线==。所以每一侧水平和斜渐近线合起来最多一条。`,
            notes: [
              R`30讲 的程序：先找无定义点、定义区间端点、分段点求铅直渐近线；再判别 $\lim\limits_{x\to\infty}f(x)$ 是否为常数；若是 $\infty$，再判别 $\lim\frac{f(x)}x$ 是否为非零常数（30讲 p152 注3）`,
              R`==一侧有水平渐近线，不排除另一侧有斜渐近线==：$y=\frac1x+\ln(1+\mathrm e^x)$ 在 $x\to-\infty$ 有 $y=0$，在 $x\to+\infty$ 有 $y=x$（吉米【349】点评 p102）`,
              R`==曲线可以和渐近线相交==，如 $y=\frac{\sin x}x$ 与渐近线 $y=0$ 交于无穷多点（30讲 p153 注4）`,
              R`数条数：铅直的条数 + 两侧的水平或斜渐近线（两侧是同一条直线只算一条）`
            ],
            quiz: R`曲线 $y=\dfrac{x^2}{x+1}$ 一共有几条渐近线？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "求水平渐近线（分式、有界振荡项）",
        signal: R`问"==水平渐近线=="，$f$ 是分式，或含 $\sin x$、$\cos x$ 这类==有界振荡项==`,
        example: { q: R`曲线 $y=\dfrac{x+4\sin x}{5x-2\cos x}$ 的水平渐近线方程为 ____。`, src: "吉米【347】p101–102" },
        idea: {
          key: R`==分别求 $\lim\limits_{x\to+\infty}f(x)$ 和 $\lim\limits_{x\to-\infty}f(x)$==，是常数 $A$ 就有水平渐近线 $y=A$。分式先==分子分母同除以最高次幂==，==有界量乘无穷小是无穷小==。`,
          how: [
            R`++分两侧写极限++：$x\to+\infty$、$x\to-\infty$ 结果相同时可以合写成 $x\to\infty$`,
            R`++分子分母同除以 $x$ 的最高次幂++`,
            R`++有界函数乘无穷小，极限为 0++`,
            R`++极限是常数 $A$ 就写 $y=A$++；是 $\infty$ 或不存在，这一侧没有水平渐近线`
          ],
          refs: [
            { src: "30讲 p151", text: R`若 $\lim_{x\to+\infty}f(x)=y_1$，则 $y=y_1$ 为一条水平渐近线；若 $\lim_{x\to-\infty}f(x)=y_2$，则 $y=y_2$ 为一条水平渐近线` },
            { src: "30讲 p151 注", text: R`$x\to+\infty$ 与 $x\to-\infty$ 时的水平渐近线可能相同，如 $y=\mathrm e^{-|x|}$；也可能不同，如 $y=\arctan x$` },
            { src: "教材 p30", text: R`直线 $y=A$ 是函数 $y=f(x)$ 的图形的水平渐近线` }
          ]
        },
        think: R`$x\to\infty$ 时 $\sin x$、$\cos x$ 来回振荡但有界。分子分母同除以 $x$ 以后，它们变成"有界 × 无穷小"，极限是 0，剩下的就是首项系数之比。两侧算法一样，结果相同。`,
        first: R`分子分母同除以 $x$`,
        steps: [
          R`++分子分母同除以 $x$++：$y=\dfrac{1+\frac{4\sin x}x}{5-\frac{2\cos x}x}$`,
          R`++用有界乘无穷小++：$|\sin x|\le1$、$|\cos x|\le1$，$\frac1x\to0$，所以 $\frac{\sin x}x\to0$，$\frac{\cos x}x\to0$`,
          R`++求极限++：$\lim\limits_{x\to\infty}y=\dfrac{1+0}{5-0}=\dfrac15$，$x\to+\infty$、$x\to-\infty$ 相同`,
          R`**++写结论++** 水平渐近线为 $y=\dfrac15$`
        ],
        pitfall: R`!!用洛必达!!：求导后 $\dfrac{1+4\cos x}{5+2\sin x}$ 极限不存在，但原极限存在，洛必达在这里不适用；这条曲线!!还有一条铅直渐近线!!（$5x=2\cos x$ 的根处），题目只问水平的`,
        practice: "吉米【347】（p101–102）；教材 习题1-4 第8题（p36，答案 习题全解 p23）；30讲 p151 注；检验：1000题基础篇第5章 21题"
      },
      {
        id: "t2", name: "判断有没有水平、铅直渐近线（看候选点的单侧极限）",
        signal: R`选择题"==有且仅有水平渐近线==""既有……也有……"，函数只在 $x>0$ 上定义，或在某点无定义`,
        example: { q: R`$x>0$ 时，曲线 $y=x\sin\dfrac1x$（　）。(A) 有且仅有水平渐近线　(B) 有且仅有铅直渐近线　(C) 既有水平渐近线，也有铅直渐近线　(D) 既无水平渐近线，也无铅直渐近线`, src: "吉米【348】p102" },
        idea: {
          key: R`==铅直渐近线只在无定义点、定义区间端点、分段点处找==，候选点上==单侧极限有一侧是 $\infty$ 就是==，有限就不是；水平渐近线==按定义域==看 $x\to+\infty$ 或 $x\to-\infty$。`,
          how: [
            R`++列出候选点++：无定义点、定义区间端点、分段点`,
            R`++逐点求单侧极限++：有一侧是 $\infty$ 就是铅直渐近线，有限极限（可去间断）就不是`,
            R`++按定义域求无穷远处的极限++：是常数就有水平渐近线`
          ],
          refs: [
            { src: "30讲 p151 注", text: R`此处的 $x_0$ 或是函数的无定义点，或是函数定义区间的端点，或是分段函数的分段点` },
            { src: "30讲 p151", text: R`若 $\lim_{x\to x_0^+}f(x)=\infty$（或 $\lim_{x\to x_0^-}f(x)=\infty$），则 $x=x_0$ 为一条铅直渐近线` },
            { src: "吉米【350】点评 p103", text: R`铅直渐近线应在函数的无穷间断点处取得` }
          ]
        },
        think: R`定义域是 $x>0$，唯一的候选点是端点 $x=0$。$x\to0^+$ 时 $x$ 是无穷小、$\sin\frac1x$ 有界，乘积趋于 0，不是 $\infty$。$x\to+\infty$ 时令 $t=\frac1x$，化成重要极限 $\frac{\sin t}t$。`,
        first: R`列候选点：只有区间端点 $x=0$`,
        steps: [
          R`++列候选点++：$x>0$ 上没有无定义点，候选只有端点 $x=0$`,
          R`++求 $x\to0^+$ 的极限++：$x\to0$，$\left|\sin\frac1x\right|\le1$，所以 $\lim\limits_{x\to0^+}x\sin\frac1x=0$，不是 $\infty$，==没有铅直渐近线==`,
          R`++求 $x\to+\infty$ 的极限++：令 $t=\frac1x$，$\lim\limits_{x\to+\infty}x\sin\frac1x=\lim\limits_{t\to0^+}\dfrac{\sin t}t=1$，==水平渐近线 $y=1$==`,
          R`**++选++** (A)`
        ],
        pitfall: R`!!把 $x\to+\infty$ 的 $x\sin\frac1x$ 当成"无穷大乘有界量"!!：这里 $\sin\frac1x\to0$，是 $\infty\cdot0$ 型；两个极限过程里 $\sin\frac1x$ 的角色正好相反`,
        practice: "吉米【348】【350】（p102–103）；30讲 习题5.3（p160，答案 p162）；检验：1000题基础篇第5章 15题，强化篇第5章 1题"
      },
      {
        id: "t3", name: "求斜渐近线（先求 a，再求 b）",
        signal: R`问"==斜渐近线==""渐近线方程"，$x\to\infty$ 时 $f(x)\to\infty$，且 $f$ 和 $x$ 同阶（如 $(2x-1)\mathrm e^{\frac1x}$、$x\ln\left(\mathrm e+\frac1x\right)$）`,
        example: { q: R`曲线 $y=(2x-1)\mathrm e^{\frac1x}$ 的斜渐近线方程为 ____。`, src: "吉米【352】p103；教材 总习题一 第14(2)题 p70；30讲 习题5.7 p160" },
        idea: {
          key: R`==$a=\lim\dfrac{f(x)}x$（要求 $a\neq0$）==，==$b=\lim[f(x)-ax]$==，==两个都存在==才有斜渐近线 $y=ax+b$；$x\to+\infty$、$x\to-\infty$ 原则上分开求。`,
          how: [
            R`++先确认这一侧 $f(x)\to\infty$++：有限就是水平渐近线，同侧不再有斜渐近线`,
            R`++求 $a=\lim\frac{f(x)}x$++：是非零常数才继续`,
            R`++求 $b=\lim[f(x)-ax]$++：$\infty-\infty$ 型常用倒代换 $t=\frac1x$、等价无穷小或洛必达`,
            R`++两侧分别检查++，相同就合写`
          ],
          refs: [
            { src: "教材 总习题一 第14(1)题 p70", text: R`直线 $L:y=kx+b$ 为曲线 $y=f(x)$ 的渐近线的充分必要条件是 $k=\lim\frac{f(x)}x$，$b=\lim[f(x)-kx]$` },
            { src: "30讲 p153 注4", text: R`求斜渐近线时，$a$ 与 $b$ 均应求出来才可以，仅求出 $a$ 不能确定有斜渐近线` },
            { src: "30讲 p152 注2", text: R`$x\to+\infty$ 与 $x\to-\infty$ 时的斜渐近线可能相同，也可能不同。有时需分左右两侧分别去求` }
          ]
        },
        think: R`$\mathrm e^{\frac1x}\to1$，$f$ 和 $2x$ 同阶，所以 $a=2$。$b$ 是 $\infty-\infty$ 型，拆成 $2x\left(\mathrm e^{\frac1x}-1\right)-\mathrm e^{\frac1x}$，前一项用 $\mathrm e^u-1\sim u$。$\frac1x\to0$ 在两侧都成立，所以两侧结果一样。`,
        first: R`求 $a=\lim\limits_{x\to\infty}\left(2-\frac1x\right)\mathrm e^{\frac1x}$`,
        steps: [
          R`++求 $a$++：$a=\lim\limits_{x\to\infty}\dfrac{(2x-1)\mathrm e^{\frac1x}}x=\lim\limits_{x\to\infty}\left(2-\frac1x\right)\mathrm e^{\frac1x}=2$`,
          R`++拆开 $f(x)-2x$++：$(2x-1)\mathrm e^{\frac1x}-2x=2x\left(\mathrm e^{\frac1x}-1\right)-\mathrm e^{\frac1x}$`,
          R`++用等价无穷小++：$x\to\infty$ 时 $\mathrm e^{\frac1x}-1\sim\frac1x$，所以 $2x\left(\mathrm e^{\frac1x}-1\right)\to2$；$\mathrm e^{\frac1x}\to1$`,
          R`++得 $b$++：$b=2-1=1$`,
          R`**++写结论++** 斜渐近线 $y=2x+1$（$x\to+\infty$、$x\to-\infty$ 相同）`
        ],
        pitfall: R`只求出 $a=2$ 就写 $y=2x$；求 $b$ 时!!把 $\mathrm e^{\frac1x}$ 直接换成 1!!，得 $(2x-1)-2x=-1$，错成 $y=2x-1$（$\infty-\infty$ 里不能只把一部分取极限）`,
        practice: "吉米【351】【352】（p102–103）；教材 总习题一 第14(2)题（p70，答案 习题全解 p50）；30讲 习题5.7（p160，答案 p163）；18讲 例5.5（p45）；检验：1000题基础篇第5章 8、22题，强化篇第5章 15、29题"
      },
      {
        id: "t4", name: "求曲线的全部渐近线（数渐近线条数）",
        signal: R`问"==渐近线的条数==""全部渐近线"，函数里有 $\frac1x$、$\ln(1+\mathrm e^x)$、$\mathrm e^{\frac1x}$ 这类==两侧行为不同==的项`,
        example: { q: R`曲线 $y=\dfrac1x+\ln(1+\mathrm e^x)$ 渐近线的条数为（　）。(A) 0　(B) 1　(C) 2　(D) 3`, src: "吉米【349】p102；30讲 例5.9 p153–154" },
        idea: {
          key: R`按 ==铅直 → 水平 → 斜== 的顺序找；==水平、斜渐近线在 $x\to+\infty$、$x\to-\infty$ 两侧分开讨论==，==同一侧有水平渐近线就不再求斜渐近线==，没有的那一侧再求斜渐近线，最后数条数。`,
          how: [
            R`++找铅直++：候选点逐个求单侧极限`,
            R`++分两侧求水平++：$x\to+\infty$、$x\to-\infty$ 各算一次`,
            R`++没有水平渐近线的一侧再求斜渐近线++：先 $a$ 后 $b$`,
            R`++汇总计数++：两侧是同一条直线只算一条`
          ],
          refs: [
            { src: "30讲 p152 注3", text: R`寻找渐近线的顺序：铅直渐近线、水平渐近线、斜渐近线` },
            { src: "吉米【349】点评 p102", text: R`$x\to-\infty$ 时，$y=0$ 是曲线的一条水平渐近线，不排除 $x\to+\infty$ 时，曲线有斜渐近线 $y=x$` },
            { src: "30讲 例5.9 注 p154", text: R`渐近线的求解是对考生的极限计算能力的考查` }
          ]
        },
        think: R`唯一的无定义点是 $x=0$。$\ln(1+\mathrm e^x)$ 两侧完全不同：$x\to-\infty$ 时 $\mathrm e^x\to0$，它趋于 0；$x\to+\infty$ 时它约等于 $x$。所以水平、斜渐近线必须分两侧算。`,
        first: R`找铅直：$\lim\limits_{x\to0}\left[\frac1x+\ln(1+\mathrm e^x)\right]$`,
        steps: [
          R`++找铅直++：$\lim\limits_{x\to0}\left[\frac1x+\ln(1+\mathrm e^x)\right]=\infty$，$x=0$ 是铅直渐近线`,
          R`++$x\to-\infty$ 求水平++：$\frac1x\to0$，$\ln(1+\mathrm e^x)\to\ln1=0$，$y=0$ 是 $x\to-\infty$ 一侧的水平渐近线`,
          R`++$x\to+\infty$ 求 $a$++：$a=\lim\limits_{x\to+\infty}\left[\dfrac1{x^2}+\dfrac{\ln(1+\mathrm e^x)}x\right]=\lim\limits_{x\to+\infty}\dfrac{\mathrm e^x}{1+\mathrm e^x}=1$（洛必达）`,
          R`++求 $b$++：$\ln(1+\mathrm e^x)-x=\ln(1+\mathrm e^x)-\ln\mathrm e^x=\ln(1+\mathrm e^{-x})\to0$，所以 $b=\lim\limits_{x\to+\infty}\left[\frac1x+\ln(1+\mathrm e^{-x})\right]=0$，$y=x$ 是斜渐近线`,
          R`**++计数++** $x=0$、$y=0$、$y=x$ 共 3 条，选 (D)`
        ],
        pitfall: R`求出 $y=0$ 后!!以为不会再有斜渐近线!!，选 (C)；!!没分两侧!!，直接说 $\lim\limits_{x\to\infty}y$ 不存在`,
        practice: "吉米【349】【350】（p102–103）；30讲 例5.9（p153–154）、习题5.3（p160，答案 p162）；武忠祥 题型二 例4（p82）；检验：1000题基础篇第5章 7、15、21题，强化篇第5章 16、30题"
      },
      {
        id: "t5", name: "两侧斜渐近线不同（左右分开求）",
        signal: R`函数里有 ==$\arctan x$、$\mathrm e^x$、$\sqrt{x^2+\cdots}$、$|x|$== 这类 $x\to+\infty$ 和 $x\to-\infty$ 极限不同的成分`,
        example: { q: R`求函数 $y=f(x)=(x-1)\mathrm e^{\frac\pi2+\arctan x}$ 的单调区间和极值，并求该函数图形的渐近线。`, src: "吉米【354】p103–104" },
        idea: {
          key: R`有两侧不同的成分时，==$x\to+\infty$ 和 $x\to-\infty$ 必须分别求 $a$、$b$==，可能得到两条不同的斜渐近线；==$\sqrt{x^2}=|x|$==，$x\to-\infty$ 时要换成 $-x$。`,
          how: [
            R`++看成分，判断两侧是否不同++：$\arctan x\to\pm\frac\pi2$，$\sqrt{x^2}=|x|$`,
            R`++$x\to+\infty$ 一侧求 $a_1$、$b_1$++`,
            R`++$x\to-\infty$ 一侧求 $a_2$、$b_2$++`,
            R`++分别写出两条++，并注明各是哪一侧的`
          ],
          refs: [
            { src: "30讲 p152 注2", text: R`$x\to+\infty$ 与 $x\to-\infty$ 时的斜渐近线可能相同，也可能不同。有时需分左右两侧分别去求` },
            { src: "武忠祥 题型二 例5 p82–83", text: R`$y=\frac\pi2x-1$ 是 $x\to+\infty$ 时的斜渐近线．同理，$y=-\frac\pi2x-1$ 是 $x\to-\infty$ 时的斜渐近线` },
            { src: "吉米【354】p104", text: R`可见渐近线 $y_1=a_1x+b_1=\mathrm e^\pi(x-2)$，$y_2=a_2x+b_2=x-2$` }
          ]
        },
        think: R`$\mathrm e^{\frac\pi2+\arctan x}$ 在 $+\infty$ 趋于 $\mathrm e^\pi$，在 $-\infty$ 趋于 $\mathrm e^0=1$，两侧斜率不同，必须分开。指数因子恒正，单调性只看剩下的有理式。求 $b$ 时用 $\arctan x-\frac\pi2\sim-\frac1x$（$x\to+\infty$）和 $\arctan x+\frac\pi2\sim-\frac1x$（$x\to-\infty$）。`,
        first: R`求导并提出恒正因子 $\mathrm e^{\frac\pi2+\arctan x}$`,
        steps: [
          R`++求导，提出恒正因子++：$y'=\mathrm e^{\frac\pi2+\arctan x}\left[1+\dfrac{x-1}{1+x^2}\right]=\dfrac{x^2+x}{1+x^2}\mathrm e^{\frac\pi2+\arctan x}$`,
          R`++求驻点、定符号++：驻点 $x=-1$、$x=0$；$(-\infty,-1)$ 内 $y'>0$，$(-1,0)$ 内 $y'<0$，$(0,+\infty)$ 内 $y'>0$`,
          R`++写单调区间和极值++：增区间 $(-\infty,-1]$、$[0,+\infty)$，减区间 $[-1,0]$；极大值 $f(-1)=-2\mathrm e^{\frac\pi4}$，极小值 $f(0)=-\mathrm e^{\frac\pi2}$`,
          R`++$x\to+\infty$ 求 $a_1$、$b_1$++：$a_1=\lim\dfrac{x-1}x\mathrm e^{\frac\pi2+\arctan x}=\mathrm e^\pi$；$f(x)-\mathrm e^\pi x=x\left(\mathrm e^{\frac\pi2+\arctan x}-\mathrm e^\pi\right)-\mathrm e^{\frac\pi2+\arctan x}$，其中 $\mathrm e^{\frac\pi2+\arctan x}-\mathrm e^\pi=\mathrm e^\pi\left(\mathrm e^{\arctan x-\frac\pi2}-1\right)\sim-\dfrac{\mathrm e^\pi}x$，所以 $b_1=-\mathrm e^\pi-\mathrm e^\pi=-2\mathrm e^\pi$`,
          R`++$x\to-\infty$ 求 $a_2$、$b_2$++：$a_2=\mathrm e^0=1$；$\frac\pi2+\arctan x\sim-\frac1x$，$\mathrm e^{\frac\pi2+\arctan x}-1\sim-\frac1x$，所以 $b_2=\lim\left[x\left(\mathrm e^{\frac\pi2+\arctan x}-1\right)-\mathrm e^{\frac\pi2+\arctan x}\right]=-1-1=-2$`,
          R`**++写结论++** $x\to+\infty$：$y=\mathrm e^\pi(x-2)$；$x\to-\infty$：$y=x-2$。$f$ 在 $\mathbb R$ 上连续且两侧趋于 $\infty$，没有铅直、水平渐近线`
        ],
        pitfall: R`!!只按 $x\to\infty$ 算一次!!，说"$\lim\frac{f(x)}x$ 不存在，所以没有斜渐近线"；$x\to-\infty$ 时把 $\frac\pi2+\arctan x$ 当成 $\pi$`,
        practice: "吉米【354】（p103–104）；武忠祥 题型二 例5（p82–83）；检验：1000题基础篇第5章 20、23题"
      },
      {
        id: "t6", name: "由方程确定的曲线的斜渐近线",
        signal: R`曲线由方程 $F(x,y)=0$ 给出（如 $x^3+y^3-3axy=0$），==$y$ 解不出来==，问斜渐近线`,
        example: { q: R`已知曲线 $x^3+y^3-3axy=0$（$a\neq0$），求该曲线的斜渐近线。`, src: "吉米【353】p103" },
        idea: {
          key: R`$y$ 解不出来时，==令 $y=tx$，把曲线化成以 $t$ 为参数的参数方程==；找出==使 $x\to\infty$ 的 $t$ 的趋向==，再求 $k=\lim\frac yx$、$b=\lim(y-kx)$。`,
          how: [
            R`++令 $y=tx$ 代入，解出 $x(t)$、$y(t)$++`,
            R`++找 $x\to\infty$ 对应的 $t\to t_0$++：一般是分母为零的地方`,
            R`++求 $k=\lim\frac yx=\lim t$++`,
            R`++求 $b=\lim(y-kx)$++：通分后约去公因式`
          ],
          refs: [
            { src: "吉米【353】p103", text: R`$k=\lim\frac yx$，$b=\lim(y-kx)$，令 $y=xt$ 代入方程得 $x^3+x^3t^3=3ax^2t$` },
            { src: "30讲 p152 注1", text: R`$f(x)$ 向直线 $y=ax+b$ 趋近，表明二者在无穷远处无限接近，即 $\lim[f(x)-(ax+b)]=0$` }
          ]
        },
        think: R`方程是三次项加一个二次项，令 $y=tx$ 后可以约去 $x^2$，解出 $x=\frac{3at}{1+t^3}$。$x\to\infty$ 恰好对应 $1+t^3\to0$，即 $t\to-1$，而 $\frac yx=t$，所以斜率就是 $-1$。`,
        first: R`令 $y=tx$ 代入方程`,
        steps: [
          R`++令 $y=tx$ 代入++：$x^3+x^3t^3=3ax^2t$，约去 $x^2$（$x\neq0$）得 $x(1+t^3)=3at$`,
          R`++写参数方程++：$x=\dfrac{3at}{1+t^3}$，$y=tx=\dfrac{3at^2}{1+t^3}$`,
          R`++找 $x\to\infty$ 时 $t$ 的去向++：分母 $1+t^3\to0$，即 $t\to-1$`,
          R`++求 $k$++：$k=\lim\dfrac yx=\lim\limits_{t\to-1}t=-1$`,
          R`++求 $b$++：$y+x=\dfrac{3at^2+3at}{1+t^3}=\dfrac{3at(t+1)}{(1+t)(t^2-t+1)}=\dfrac{3at}{t^2-t+1}\to\dfrac{-3a}{3}=-a$`,
          R`**++写结论++** 斜渐近线 $y=-x-a$`
        ],
        pitfall: R`!!想先把 $y$ 解出来!!（三次方程解不出）；求 $b$ 时!!忘了 $k=-1$ 要变成 $y+x$!!，写成 $y-x$`,
        practice: "吉米【353】（p103）；检验：1000题强化篇第5章 10题"
      },
      {
        id: "t7", name: "讨论单调、极值、凹凸、拐点并求渐近线（列表综合）",
        signal: R`一道大题连问"==增减区间及极值、凹凸区间及拐点、渐近线=="，函数是有理分式或含间断点`,
        example: { q: R`已知函数 $y=\dfrac{x^3}{(x-1)^2}$，求：(1) 函数的增减区间及极值；(2) 函数图形的凹凸区间及拐点；(3) 函数图形的渐近线。`, src: "吉米【355】p104" },
        idea: {
          key: R`==一张表同时放 $f'$ 和 $f''$ 的符号==：分点是 ==$f'$、$f''$ 的零点、不存在的点和间断点==；==$f'$ 变号才是极值点，$f''$ 变号才是拐点==；间断点处曲线断开，不算极值点也不算拐点；最后用极限求渐近线。`,
          how: [
            R`++写定义域，求 $f'$、$f''$ 并因式分解++`,
            R`++找全部分点，从小到大排++`,
            R`++列表定符号++，读出单调区间、极值、凹凸区间、拐点`,
            R`++求渐近线++：铅直 → 水平 → 斜`
          ],
          refs: [
            { src: "教材 p159 第二步", text: R`求出一阶导数 $f'(x)$ 和二阶导数 $f''(x)$ 在函数定义域内的全部零点，并求出函数 $f(x)$ 的间断点及 $f'(x)$ 和 $f''(x)$ 不存在的点，用这些点把函数的定义域划分成几个部分区间` },
            { src: "吉米 p101 作图步骤 (4)", text: R`求出 $f'(x)$，$f''(x)$ 从而求出作图的关键点：极值疑点，拐点疑点，函数 $f(x)$ 的边界点及无意义端点` },
            { src: "30讲 例5.11 注 p157", text: R`也可借助上表分析出由每个分段点分出的区间内函数的单调性与曲线的凹凸性` }
          ]
        },
        think: R`$x=1$ 是间断点。$y'$ 的分子 $x^2(x-3)$ 里 $x=0$ 是二重零点，$y'$ 在 0 两侧不变号；$y''$ 的分子 $6x$ 在 0 变号。所以 $x=0$ 是拐点不是极值点。$x=1$ 是无穷间断点，给铅直渐近线；分子比分母高一次，给斜渐近线。`,
        first: R`求导并因式分解：$y'=\dfrac{x^2(x-3)}{(x-1)^3}$`,
        steps: [
          R`++写定义域，求导因式分解++：定义域 $(-\infty,1)\cup(1,+\infty)$，$y'=\dfrac{x^2(x-3)}{(x-1)^3}$，$y''=\dfrac{6x}{(x-1)^4}$`,
          R`++找分点++：$y'=0$ 得 $x=0$、$x=3$；$y''=0$ 得 $x=0$；间断点 $x=1$。区间 $(-\infty,0)$、$(0,1)$、$(1,3)$、$(3,+\infty)$`,
          R`++列表定符号++：$y'$ 依次为 $+,+,-,+$；$y''$ 依次为 $-,+,+,+$`,
          R`++读单调和极值++：增区间 $(-\infty,1)$ 和 $[3,+\infty)$，减区间 $(1,3]$；极小值 $y(3)=\dfrac{27}4$；$x=0$ 两侧 $y'>0$，==不是极值点==`,
          R`++读凹凸和拐点++：$(-\infty,0]$ 上凸，$[0,1)$、$(1,+\infty)$ 上凹；拐点 $(0,0)$`,
          R`++求铅直渐近线++：$\lim\limits_{x\to1}\dfrac{x^3}{(x-1)^2}=+\infty$，$x=1$`,
          R`++求斜渐近线++：$a=\lim\limits_{x\to\infty}\dfrac{x^2}{(x-1)^2}=1$，$b=\lim\limits_{x\to\infty}\left[\dfrac{x^3}{(x-1)^2}-x\right]=\lim\limits_{x\to\infty}\dfrac{2x^2-x}{(x-1)^2}=2$，斜渐近线 $y=x+2$`
        ],
        pitfall: R`!!把 $x=0$ 当极值点!!（$y'=0$ 但不变号）；!!把两个增区间并成 $(-\infty,1)\cup[3,+\infty)$ 说"在并集上单调"!!；!!漏了间断点 $x=1$ 这个分点!!`,
        practice: "吉米【354】【355】（p103–104）；30讲 例5.13（p157–158）、习题5.5（p160，答案 p162）；检验：1000题基础篇第5章 20题"
      },
      {
        id: "t8", name: "用导数描绘函数的图形（五步）",
        signal: R`"==描绘函数的图形==""作出函数的图形"，要求把性态、渐近线都画出来`,
        example: { q: R`运用导数的知识作函数 $y=(x+6)\mathrm e^{\frac1x}$ 的图形。`, src: "吉米【357】p105–106" },
        idea: {
          key: R`==定义域和对称性 → $f'$、$f''$ → 分点列表 → 渐近线和趋势 → 关键点连线==。图上必须有：==极值点、拐点、渐近线、间断点两侧的走向==，不够再补与坐标轴的交点。`,
          how: [
            R`++定定义域，看奇偶性、周期性++`,
            R`++求 $f'$、$f''$，找分点++`,
            R`++列表定升降、凹凸、极值、拐点++`,
            R`++求渐近线和端点处的趋势++：间断点两侧的单侧极限都要算`,
            R`++算关键点坐标，补点，连线++`
          ],
          refs: [
            { src: "教材 p160 第四步", text: R`确定函数图形的水平、铅直渐近线以及其他变化趋势` },
            { src: "30讲 p156", text: R`①确定定义域，考查函数是否有奇偶性，周期性，并用好图像变换；②用导数工具；③考查渐近线；④作出函数图像．这是基本功，一定要重视` },
            { src: "吉米 p101 作图步骤 (6)", text: R`作图，如果作图的关键点（无意义点除外）不够，还可多描一些点，例如 $f(x)$ 与坐标轴的交点等` }
          ]
        },
        think: R`$x=0$ 是间断点，$\mathrm e^{\frac1x}$ 在 0 两侧极限不同：$x\to0^+$ 趋于 $+\infty$，$x\to0^-$ 趋于 0。所以右支沿 $x=0$ 往上走，左支趋向原点。$x\to\infty$ 时 $\mathrm e^{\frac1x}\approx1+\frac1x$，有斜渐近线。`,
        first: R`求 $y'=\dfrac{(x+2)(x-3)}{x^2}\mathrm e^{\frac1x}$`,
        steps: [
          R`++定定义域++：$(-\infty,0)\cup(0,+\infty)$，非奇非偶，不是周期函数`,
          R`++求 $y'$、$y''$++：$y'=\dfrac{x^2-x-6}{x^2}\mathrm e^{\frac1x}=\dfrac{(x+2)(x-3)}{x^2}\mathrm e^{\frac1x}$，$y''=\dfrac{13x+6}{x^4}\mathrm e^{\frac1x}$`,
          R`++找分点++：$y'=0$ 得 $x=-2$、$x=3$；$y''=0$ 得 $x=-\frac6{13}$；间断点 $x=0$`,
          R`++列表++：$(-\infty,-2)$ 升凸，$\left(-2,-\frac6{13}\right)$ 降凸，$\left(-\frac6{13},0\right)$ 降凹，$(0,3)$ 降凹，$(3,+\infty)$ 升凹`,
          R`++读结论++：极大值 $y(-2)=\dfrac4{\sqrt{\mathrm e}}\approx2.43$，极小值 $y(3)=9\sqrt[3]{\mathrm e}\approx12.56$，拐点 $\left(-\dfrac6{13},\dfrac{72}{13}\mathrm e^{-\frac{13}6}\right)\approx(-0.46,0.63)$`,
          R`++求渐近线和趋势++：$\lim\limits_{x\to0^+}y=+\infty$，$x=0$ 是铅直渐近线；$\lim\limits_{x\to0^-}y=0$，左支趋向原点；$a=\lim\limits_{x\to\infty}\dfrac{(x+6)\mathrm e^{\frac1x}}x=1$，$b=\lim\limits_{x\to\infty}\left[x\left(\mathrm e^{\frac1x}-1\right)+6\mathrm e^{\frac1x}\right]=1+6=7$，斜渐近线 $y=x+7$`,
          R`++描点连线++：画出极值点、拐点、渐近线 $x=0$ 和 $y=x+7$，再补与 $x$ 轴的交点 $(-6,0)$，左支在原点处画空心点`
        ],
        pitfall: R`!!只算 $\lim\limits_{x\to0}y$!!，说极限不存在就不画铅直渐近线；!!左支在 $x\to0^-$ 的走向没画!!；求 $b$ 时漏了 $x\left(\mathrm e^{\frac1x}-1\right)\to1$ 这一项，错成 $b=6$`,
        practice: "吉米【357】（p105–106）；教材 例1、例3（p160–163）、习题3-6 第1、4题（p163–164，答案 习题全解 p124、p126–127）；30讲 例5.12、例5.13（p157–158）"
      },
      {
        id: "t9", name: "利用奇偶性、周期性缩小作图范围",
        signal: R`函数是==奇函数或偶函数==（$f(-x)=\pm f(x)$），或是含 $\sin x$、$\cos x$ 的==周期函数==`,
        example: { q: R`描绘函数 $y=\dfrac{x}{1+x^2}$ 的图形。`, src: "教材 习题3-6 第2题 p163；习题全解 p124–125" },
        idea: {
          key: R`==偶函数关于 $y$ 轴对称，奇函数关于原点对称==，只讨论 $[0,+\infty)$；==周期为 $T$ 的函数只讨论一个周期==；画完再按对称性、周期性补全。`,
          how: [
            R`++判断奇偶性、周期性++`,
            R`++只在 $[0,+\infty)$（或一个周期）上求导、列表、求渐近线++`,
            R`++单独看 $x=0$ 这一点++：奇函数过原点，$x=0$ 常是拐点疑点`,
            R`++按对称性或周期性补全图形++`
          ],
          refs: [
            { src: "教材 p159 第一步", text: R`确定函数 $y=f(x)$ 的定义域及函数所具有的某些特性（如奇偶性、周期性等）` },
            { src: "教材 例2 p161", text: R`所以 $f(x)$ 是偶函数，它的图形关于 $y$ 轴对称．因此可以只讨论 $[0,+\infty)$ 上该函数的图形` },
            { src: "吉米 p101 作图步骤 (2)", text: R`判断 $f(x)$ 的奇偶性、周期性（如果有这样的特性，可以缩小作图范围）` }
          ]
        },
        think: R`$f(-x)=-f(x)$，奇函数，图形关于原点对称，只看 $[0,+\infty)$。分母 $1+x^2$ 恒正，没有铅直渐近线；分子比分母低一次，$x\to\infty$ 时趋于 0。`,
        first: R`判断奇偶性：$f(-x)=-f(x)$，只讨论 $[0,+\infty)$`,
        steps: [
          R`++判断奇偶性++：定义域 $\mathbb R$，$f(-x)=-f(x)$，奇函数，只讨论 $[0,+\infty)$`,
          R`++求导++：$y'=\dfrac{1-x^2}{(1+x^2)^2}$，$y''=\dfrac{2x(x^2-3)}{(1+x^2)^3}$`,
          R`++找分点++：在 $[0,+\infty)$ 内 $y'=0$ 得 $x=1$，$y''=0$ 得 $x=0$、$x=\sqrt3$`,
          R`++列表++：$(0,1)$ 升凸，$(1,\sqrt3)$ 降凸，$(\sqrt3,+\infty)$ 降凹`,
          R`++读结论++：极大值 $f(1)=\frac12$；拐点 $(0,0)$（$y''$ 在 0 两侧异号）、$\left(\sqrt3,\frac{\sqrt3}4\right)$`,
          R`++求渐近线++：$\lim\limits_{x\to\infty}\dfrac{x}{1+x^2}=0$，水平渐近线 $y=0$；没有铅直、斜渐近线`,
          R`++按对称补全++：关于原点对称，得极小值 $f(-1)=-\frac12$，拐点 $\left(-\sqrt3,-\frac{\sqrt3}4\right)$`
        ],
        pitfall: R`补全时!!忘了原点也是拐点!!（共三个拐点）；!!对称后仍写"极大值 $f(-1)$"!!，奇函数对称后极大变极小`,
        practice: "教材 例2（p161–162）、习题3-6 第2、3、5题（p163–164，答案 习题全解 p124–128）；30讲 例5.11（p156–157）"
      },
      {
        id: "t10", name: "定义区间端点处的铅直渐近线",
        signal: R`函数含 ==$\ln(\cdots)$、根号==，定义域被挖掉一段（如 $\ln\left(\mathrm e+\frac1x\right)$），问全部渐近线`,
        example: { q: R`求曲线 $y=x\ln\left(\mathrm e+\dfrac1x\right)$ 的渐近线。`, src: "教材 总习题一 第14(3)题 p70；习题全解 p50" },
        idea: {
          key: R`定义域被挖掉一段时，==区间端点也是铅直渐近线的候选点==；先解出定义域，再在每个端点求单侧极限，然后按水平 → 斜求。`,
          how: [
            R`++解定义域++：对数真数 $>0$、偶次根号内 $\ge0$、分母 $\neq0$`,
            R`++列候选点++：无定义点和定义区间的有限端点`,
            R`++在每个端点求单侧极限++：从定义域那一侧趋近`,
            R`++再按水平 → 斜求++`
          ],
          refs: [
            { src: "30讲 p151 注", text: R`此处的 $x_0$ 或是函数的无定义点，或是函数定义区间的端点，或是分段函数的分段点．例：$y=\ln x\,(x>0)$ 在 $x\to0^+$ 处` },
            { src: "习题全解 总习题一 第14(3)题 p50", text: R`所以，曲线有铅直渐近线 $x=-\frac1{\mathrm e}$；又因 $x\to\infty$ 时 $y\to\infty$，所以曲线没有水平渐近线` }
          ]
        },
        think: R`真数 $\mathrm e+\frac1x=\frac{\mathrm ex+1}x>0$，得 $x>0$ 或 $x<-\frac1{\mathrm e}$，候选点有 $x=0$ 和 $x=-\frac1{\mathrm e}$。$x\to0^+$ 时是 $x\ln\frac1x$ 型，趋于 0；$x\to\left(-\frac1{\mathrm e}\right)^-$ 时真数趋于 $0^+$，对数趋于 $-\infty$，乘负的 $x$ 得 $+\infty$。`,
        first: R`解定义域：$\dfrac{\mathrm ex+1}x>0$`,
        steps: [
          R`++解定义域++：$\mathrm e+\frac1x=\dfrac{\mathrm ex+1}x>0$，得 $x<-\frac1{\mathrm e}$ 或 $x>0$`,
          R`++看端点 $x=0$++：$x\to0^+$ 时 $y=x\ln(\mathrm ex+1)-x\ln x\to0$，有限，不是铅直渐近线`,
          R`++看端点 $x=-\frac1{\mathrm e}$++：$x\to\left(-\frac1{\mathrm e}\right)^-$ 时 $\mathrm e+\frac1x\to0^+$，$\ln\left(\mathrm e+\frac1x\right)\to-\infty$，而 $x<0$，所以 $y\to+\infty$，==$x=-\frac1{\mathrm e}$ 是铅直渐近线==`,
          R`++看水平++：$x\to\pm\infty$ 时 $y\to\pm\infty$，没有水平渐近线`,
          R`++求斜++：$a=\lim\limits_{x\to\infty}\ln\left(\mathrm e+\frac1x\right)=1$，$b=\lim\limits_{x\to\infty}x\left[\ln\left(\mathrm e+\frac1x\right)-1\right]=\lim\limits_{x\to\infty}x\ln\left(1+\frac1{\mathrm ex}\right)=\dfrac1{\mathrm e}$，斜渐近线 $y=x+\dfrac1{\mathrm e}$`
        ],
        pitfall: R`!!只看分母的零点 $x=0$，漏掉端点 $x=-\frac1{\mathrm e}$!!；习题全解 p50 把趋近过程印成"$x\to\frac1{\mathrm e}^+$"，应为 $x\to\left(-\frac1{\mathrm e}\right)^-$`,
        practice: "教材 总习题一 第14题（p70，答案 习题全解 p48–50）；吉米【351】（p102–103，题目限定 $x>0$）；30讲 p151 注；检验：1000题基础篇第5章 8题"
      },
      {
        id: "t11", tag: "研", name: "用展开式求斜渐近线",
        signal: R`$f(x)$ 能写成 ==$x\cdot g\left(\frac1x\right)$== 的样子（如 $x\left(1+\frac1x\right)^{\frac32}$、$x\mathrm e^{\frac1x}$、$x^2\ln\left(1+\frac1x\right)$），直接求 $b$ 要算 $\infty-\infty$`,
        example: { q: R`曲线 $y=\dfrac{(1+x)^{\frac32}}{\sqrt x}$ 的斜渐近线方程为 ____。`, src: "武忠祥 题型二 例3 p81–82；18讲 例5.6 p45–46" },
        idea: {
          key: R`把 $f(x)$ 写成 ==$ax+b+\alpha(x)$，$\alpha(x)\to0$==，直接读出斜渐近线 $y=ax+b$；常用 $(1+u)^\alpha$、$\mathrm e^u$、$\ln(1+u)$ 在 $u=\frac1x\to0$ 处展开，==展开到 $u$ 的一次项==。`,
          how: [
            R`++提出 $x$ 的最高次++，化出 $\left(1+\frac1x\right)^\alpha$、$\mathrm e^{\frac1x}$ 等`,
            R`++按 $u=\frac1x$ 展开到一阶++：$(1+u)^\alpha=1+\alpha u+o(u)$`,
            R`++乘回去，整理成 $ax+b+o(1)$++`,
            R`++读出 $a$、$b$++（$a\neq0$）`
          ],
          refs: [
            { src: "武忠祥 题型二 例3 方法二 p82", text: R`由斜渐近线的定义可知，如果 $f(x)=ax+b+\alpha(x)$，这里 $a\neq0$，$\lim\alpha(x)=0$．则曲线 $y=f(x)$ 有斜渐近线 $y=ax+b$` },
            { src: "18讲 例5.6 p45", text: R`$a=\lim_{x\to+\infty}\frac yx=1\neq0$，$b=\lim_{x\to+\infty}(y-ax)=\lim x\cdot\frac32\cdot\frac1x=\frac32$` }
          ]
        },
        think: R`定义域是 $x>0$，只有 $x\to+\infty$ 一侧。$\dfrac{(1+x)^{\frac32}}{\sqrt x}=x\left(1+\frac1x\right)^{\frac32}$，括号用 $(1+u)^\alpha$ 展开到一阶，乘回 $x$ 就出现常数项。`,
        first: R`化成 $y=x\left(1+\frac1x\right)^{\frac32}$`,
        steps: [
          R`++化形++：$x>0$，$y=\dfrac{x^{\frac32}\left(1+\frac1x\right)^{\frac32}}{x^{\frac12}}=x\left(1+\frac1x\right)^{\frac32}$`,
          R`++展开到一阶++：$\left(1+\frac1x\right)^{\frac32}=1+\frac32\cdot\frac1x+o\left(\frac1x\right)$`,
          R`++乘回去++：$y=x+\frac32+x\cdot o\left(\frac1x\right)$，最后一项 $\to0$`,
          R`**++写结论++** 斜渐近线 $y=x+\dfrac32$（$x\to+\infty$）`,
          R`++检验++：$a=\lim\left(1+\frac1x\right)^{\frac32}=1$，$b=\lim\dfrac{(1+x)^{\frac32}-x^{\frac32}}{\sqrt x}=\lim x\left[\left(1+\frac1x\right)^{\frac32}-1\right]=\frac32$，结果相同`
        ],
        pitfall: R`!!只展开到常数项!!：$\left(1+\frac1x\right)^{\frac32}\approx1$，得 $y\approx x$，丢了 $b$；!!忘了定义域只有 $x>0$!!，又去求 $x\to-\infty$`,
        practice: "武忠祥 题型二 例3（p81–82）；18讲 例5.6（p45–46）；检验：1000题强化篇第5章 18、19、30题"
      },
      {
        id: "t12", tag: "研", name: "反函数曲线的渐近线",
        signal: R`"设 $g(x)$ 是 $f(x)$ 的==反函数==，求曲线 $y=g(x)$ 的渐近线"`,
        example: { q: R`设 $g(x)$ 是函数 $f(x)=\dfrac12\ln\dfrac{3+x}{3-x}$ 的反函数，则曲线 $y=g(x)$ 的渐近线方程为 ____。`, src: "18讲 例5.7 p46" },
        idea: {
          key: R`$y=f(x)$ 和它的反函数的图形==关于直线 $y=x$ 对称==：==原函数的铅直渐近线 $x=c$ 变成反函数的水平渐近线 $y=c$==。也可以直接解出反函数再求极限。`,
          how: [
            R`++看原函数定义域端点处是否趋于 $\infty$++，得到原函数的铅直渐近线`,
            R`++关于 $y=x$ 对称++，换成反函数的水平渐近线`,
            R`++或者解出反函数++，求 $x\to\pm\infty$ 的极限检验`
          ],
          refs: [
            { src: "18讲 例5.7 p46", text: R`$g(x)=3-\frac6{\mathrm e^{2x}+1}$，$\lim_{x\to+\infty}g(x)=3$，$\lim_{x\to-\infty}g(x)=-3$．故曲线 $y=g(x)$ 的渐近线方程为 $y=\pm3$` }
          ]
        },
        think: R`$f$ 的定义域是 $(-3,3)$，$x\to3^-$ 时 $f\to+\infty$，$x\to-3^+$ 时 $f\to-\infty$，所以 $f$ 有铅直渐近线 $x=\pm3$。关于 $y=x$ 对称以后，反函数有水平渐近线 $y=\pm3$。`,
        first: R`解出反函数：$\mathrm e^{2y}=\dfrac{3+x}{3-x}$`,
        steps: [
          R`++解反函数++：$2y=\ln\dfrac{3+x}{3-x}$，$\mathrm e^{2y}=\dfrac{3+x}{3-x}$，解得 $x=3-\dfrac6{\mathrm e^{2y}+1}$，即 $g(x)=3-\dfrac6{\mathrm e^{2x}+1}$`,
          R`++求 $x\to+\infty$++：$\mathrm e^{2x}\to+\infty$，$g(x)\to3$`,
          R`++求 $x\to-\infty$++：$\mathrm e^{2x}\to0$，$g(x)\to3-6=-3$`,
          R`++检查铅直和斜++：$g$ 在 $\mathbb R$ 上连续且有界，没有铅直、斜渐近线`,
          R`**++写结论++** 渐近线 $y=3$ 和 $y=-3$`
        ],
        pitfall: R`!!答成 $x=\pm3$!!，那是原函数 $f$ 的铅直渐近线，不是反函数的`,
        practice: "18讲 例5.7（p46）"
      }
    ],

    pitfalls: [
      { wrong: R`水平渐近线算一次 $\lim\limits_{x\to\infty}f(x)$ 就够了`, why: R`$x\to+\infty$ 和 $x\to-\infty$ 的极限可能不同，可能有两条，也可能只有一侧有`, right: R`两侧分开算（30讲 p151 注）`, test: R`$y=\arctan x$ 有几条水平渐近线？`, ans: R`两条：$y=\frac\pi2$（$x\to+\infty$）和 $y=-\frac\pi2$（$x\to-\infty$）`, link: "题型 1" },
      { wrong: R`用洛必达求 $\lim\limits_{x\to\infty}\dfrac{x+4\sin x}{5x-2\cos x}$，求导后极限不存在，所以没有水平渐近线`, why: R`洛必达只说"导数之比的极限存在时原极限等于它"，导数之比没有极限不能推出原极限不存在`, right: R`分子分母同除以 $x$，用有界乘无穷小，极限 $\frac15$（吉米【347】p101–102）`, test: R`$\lim\limits_{x\to\infty}\dfrac{x+\sin x}x=$？`, ans: R`$1$`, link: "题型 1" },
      { wrong: R`题目只问水平渐近线，$y=\dfrac{x+4\sin x}{5x-2\cos x}$ 就只有 $y=\frac15$ 这一条渐近线`, why: R`分母 $5x-2\cos x$ 在 $(0,1)$ 内有零点 $x_0$（零点定理：$x=0$ 处为 $-2$，$x=1$ 处为 $5-2\cos1>0$），而分子在 $x_0$ 处不为 0`, right: R`问全部渐近线时，要把分母的零点也逐个检查`, test: R`这条曲线有铅直渐近线吗？`, ans: R`有一条 $x=x_0$，$x_0\approx0.37$ 是 $5x=2\cos x$ 的根`, link: "题型 1" },
      { wrong: R`分母为 0 的点都是铅直渐近线`, why: R`分子也为 0 时可能是可去间断点，极限有限`, right: R`逐点求极限，是 $\infty$ 才算（30讲 习题5.3 答案 p162）`, test: R`曲线 $y=\dfrac{x^2+x}{x^2-1}$ 有几条渐近线？`, ans: R`2 条：$x=1$ 和 $y=1$（$x=-1$ 处极限为 $\frac12$）`, link: "题型 2" },
      { wrong: R`$\lim\limits_{x\to x_0}f(x)$ 不存在，所以 $x=x_0$ 不是铅直渐近线`, why: R`铅直渐近线只要一侧的单侧极限是 $\infty$`, right: R`分别求 $x\to x_0^+$、$x\to x_0^-$（30讲 p151）`, test: R`$y=\mathrm e^{\frac1x}$ 有哪些渐近线？`, ans: R`$x=0$（$x\to0^+$ 时 $\to+\infty$）和 $y=1$`, link: "题型 2" },
      { wrong: R`铅直渐近线只在分母为 0 的点找`, why: R`定义区间的端点、分段点也是候选点`, right: R`先解定义域，端点逐个求单侧极限（30讲 p151 注；习题全解 p50）`, test: R`$y=x\ln\left(\mathrm e+\frac1x\right)$ 的铅直渐近线是哪条？`, ans: R`$x=-\frac1{\mathrm e}$（$x=0$ 处 $x\to0^+$ 时 $y\to0$，不是）`, link: "题型 10" },
      { wrong: R`$x\to+\infty$ 时 $x\sin\frac1x$ 是"无穷大乘有界量"，所以是无穷大`, why: R`$x\to+\infty$ 时 $\sin\frac1x\to0$，是 $\infty\cdot0$ 型`, right: R`令 $t=\frac1x$，化成 $\lim\limits_{t\to0^+}\frac{\sin t}t=1$（吉米【348】p102）`, test: R`$x>0$ 时 $y=x\sin\frac1x$ 有铅直渐近线吗？`, ans: R`没有：$x\to0^+$ 时 $y\to0$`, link: "题型 2" },
      { wrong: R`算出 $a=\lim\frac{f(x)}x$ 是非零常数，就有斜渐近线`, why: R`$b=\lim[f(x)-ax]$ 也必须存在`, right: R`$a$、$b$ 都求出来（30讲 p153 注4）`, test: R`$y=x+\sin x$ 有斜渐近线吗？`, ans: R`没有：$a=1$，但 $b=\lim\sin x$ 不存在`, link: "题型 3" },
      { wrong: R`$a=0$、$b$ 存在，也算一条斜渐近线 $y=b$`, why: R`$a=0$ 时 $f$ 比 $x$ 增长慢，$y=b$ 就是水平渐近线的情形；斜渐近线要求 $a\neq0$`, right: R`$a=0$ 时回头看水平渐近线（30讲 p152；教材 p70）`, test: R`$y=\sqrt x$ 有水平或斜渐近线吗？`, ans: R`都没有：$a=\lim\frac{\sqrt x}x=0$，而 $\sqrt x\to+\infty$`, link: "知识点 8" },
      { wrong: R`求 $b$ 时把 $\mathrm e^{\frac1x}$ 换成 1：$(2x-1)\mathrm e^{\frac1x}-2x\to(2x-1)-2x=-1$`, why: R`$\infty-\infty$ 型不能只把其中一个因子取极限，$2x\left(\mathrm e^{\frac1x}-1\right)$ 趋于 2 而不是 0`, right: R`拆成 $2x\left(\mathrm e^{\frac1x}-1\right)-\mathrm e^{\frac1x}$，用 $\mathrm e^u-1\sim u$（习题全解 p50）`, test: R`$y=(2x-1)\mathrm e^{\frac1x}$ 的斜渐近线？`, ans: R`$y=2x+1$`, link: "题型 3" },
      { wrong: R`一侧有了水平渐近线，就不用再求斜渐近线了`, why: R`只有同一侧不能并存；另一侧可能趋于 $\infty$，有斜渐近线`, right: R`没有水平渐近线的那一侧单独求斜渐近线（吉米【349】点评 p102）`, test: R`$y=\frac1x+\ln(1+\mathrm e^x)$ 有几条渐近线？`, ans: R`3 条：$x=0$，$y=0$（$x\to-\infty$），$y=x$（$x\to+\infty$）`, link: "题型 4" },
      { wrong: R`两侧的斜渐近线一定相同`, why: R`含 $\arctan x$、$\mathrm e^x$、$|x|$ 的函数两侧极限不同`, right: R`$x\to+\infty$、$x\to-\infty$ 分开求（武忠祥 例5 p82–83）`, test: R`$y=x\arctan x$ 的渐近线？`, ans: R`$y=\frac\pi2x-1$（$x\to+\infty$）和 $y=-\frac\pi2x-1$（$x\to-\infty$）`, link: "题型 5" },
      { wrong: R`$x\to-\infty$ 时 $\dfrac{\sqrt{x^2+1}}x\to1$`, why: R`$\sqrt{x^2}=|x|$，$x<0$ 时等于 $-x$`, right: R`$x\to-\infty$ 时 $\sqrt{x^2+1}=-x\sqrt{1+\frac1{x^2}}$`, test: R`$y=\sqrt{x^2+1}$ 的斜渐近线？`, ans: R`$y=x$（$x\to+\infty$）和 $y=-x$（$x\to-\infty$）`, link: "题型 5" },
      { wrong: R`曲线不会和它的渐近线相交`, why: R`渐近线只描述无穷远处的走向，中间可以穿过`, right: R`例：$y=\frac{\sin x}x$ 与 $y=0$ 交于无穷多点（30讲 p153 注4）`, test: R`$y=\frac{\sin x}x$ 和它的水平渐近线有几个交点？`, ans: R`无穷多个：$x=k\pi$（$k\neq0$）`, link: "知识点 10" },
      { wrong: R`作图分点只取 $f'=0$、$f''=0$ 的点`, why: R`$f'$、$f''$ 不存在的点同样可能是极值点、拐点，也要分区间`, right: R`三类分点都要找（教材 p159 第二步）`, test: R`$y=(x-5)x^{\frac23}$ 的拐点？$x=0$ 是什么点？`, ans: R`拐点 $(-1,-6)$；$x=0$ 处 $y'$、$y''$ 都不存在，是极大值点，不是拐点（30讲 习题5.5 答案 p162）`, link: "题型 7" },
      { wrong: R`$f'$ 在间断点两侧变号，间断点就是极值点`, why: R`极值点必须在定义域内，间断点不在定义域内`, right: R`间断点处曲线断开，看单侧极限，无穷间断点画铅直渐近线（教材 例3 p162–163）`, test: R`$y=1+\dfrac{36x}{(x+3)^2}$ 在 $x=-3$ 两侧 $f'$ 由负变正，$x=-3$ 是极小值点吗？`, ans: R`不是：$x=-3$ 不在定义域内，$\lim\limits_{x\to-3}y=-\infty$，是铅直渐近线`, link: "题型 7" },
      { wrong: R`$f'(x_0)=0$ 的点就是极值点`, why: R`$f'$ 在 $x_0$ 两侧不变号就不是极值点`, right: R`列表看 $f'$ 是否变号（教材 p150 第一充分条件；习题全解 p124）`, test: R`$y=\frac15(x^4-6x^2+8x+7)$ 在 $x=1$ 处是极值点吗？`, ans: R`不是：$y'=\frac45(x+2)(x-1)^2$ 在 1 两侧都为正；$(1,2)$ 是拐点`, link: "题型 7" },
      { wrong: R`$f''(x_0)=0$ 的点就是拐点`, why: R`拐点要求 $f''$ 在两侧异号`, right: R`列表看 $f''$ 是否变号（教材 例10 p146–147）`, test: R`$y=x^4$ 有拐点吗？`, ans: R`没有：$y''=12x^2$ 在 0 两侧都为正`, link: "题型 7" },
      { wrong: R`拐点写成 $x=x_0$`, why: R`拐点是曲线上的点`, right: R`写成 $(x_0,f(x_0))$（教材 p161）`, test: R`$y=x^3-x^2-x+1$ 的拐点？`, ans: R`$\left(\frac13,\frac{16}{27}\right)$`, link: "知识点 3" },
      { wrong: R`间断点只要写出铅直渐近线，两侧走向不用管`, why: R`$\mathrm e^{\frac1x}$ 一类函数在间断点两侧行为不同，一侧趋于 $\infty$、另一侧可能趋于有限值`, right: R`间断点两侧的单侧极限都算，画进图里（吉米【357】p106）`, test: R`$y=(x+6)\mathrm e^{\frac1x}$ 在 $x\to0^-$ 时趋于什么？`, ans: R`趋于 0，左支趋向原点`, link: "题型 8" },
      { wrong: R`奇函数只画了 $[0,+\infty)$，对称过去极大值还是极大值`, why: R`关于原点对称，函数值变号，极大变极小，凹变凸`, right: R`按奇偶性分别对称补全（教材 例2 p161–162）`, test: R`$y=\dfrac{x}{1+x^2}$ 在 $(-\infty,0]$ 上的极值？`, ans: R`极小值 $f(-1)=-\frac12$`, link: "题型 9" },
      { wrong: R`周期函数只画一个周期，就不用管周期里的无定义点`, why: R`周期内的无定义点往往是无穷间断点，给铅直渐近线`, right: R`先写出定义域，再在一个周期内找分点（习题全解 习题3-6 第5题 p127–128）`, test: R`$y=\dfrac{\cos x}{\cos2x}$ 在 $[0,\pi]$ 上有哪些铅直渐近线？`, ans: R`$x=\frac\pi4$ 和 $x=\frac{3\pi}4$`, link: "题型 9" },
      { wrong: R`展开求斜渐近线时，$\left(1+\frac1x\right)^\alpha\approx1$ 就够了`, why: R`乘以 $x$ 后，$\frac1x$ 项才变成常数 $b$`, right: R`展开到 $\frac1x$ 的一次项（武忠祥 例3 方法二 p82）`, test: R`$y=x\mathrm e^{\frac1x}$ 的斜渐近线？`, ans: R`$y=x+1$`, link: "题型 11" },
      { wrong: R`反函数的渐近线和原函数一样`, why: R`反函数图形与原函数关于 $y=x$ 对称，铅直和水平互换`, right: R`原函数的铅直渐近线 $x=c$ 变成反函数的水平渐近线 $y=c$（18讲 例5.7 p46）`, test: R`$y=\ln x$ 的反函数 $y=\mathrm e^x$ 有什么渐近线？`, ans: R`水平渐近线 $y=0$（$x\to-\infty$），对应 $\ln x$ 的铅直渐近线 $x=0$`, link: "题型 12" }
    ]
  });
})();
