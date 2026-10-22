/*
类型: 题型
标题: 高等数学 第2章 第2节 函数的求导法则 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-10-22
更新日期: 2026-10-22
状态: 完成

页码一律是印刷页（转换稿的页码标记在每页开头，标记后面的内容属于该页；已用教材目录核对：2.2 从 p82 开始，2.3 从 p94 开始）。
教材 = 同济第八版上册；习题全解 = 同济第八版上册习题全解指导；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准）；
30讲 = 张宇基础30讲；18讲 = 张宇高数18讲；武忠祥 = 高等数学辅导讲义（强化）；1000题 = 张宇1000题（第4章，只写题号）。
本节只用求导公式和四则、反函数、复合三条法则；要用高阶导数（2.3）、隐函数和参数方程（2.4）、洛必达（3.2）的题都注明了"后做"。
网页上不标「⚠️未核验」；没有出处的几条（记忆口诀、反例）都已逐条核对，计算用代码验算过。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "2.2",
    chapter: 2,
    title: "函数的求导法则",
    pages: "教材 p82–93",
    sources: [
      "教材 第二章第二节 p82–93",
      "习题全解 习题2-2 p57–65",
      "吉米 第2章 §2【164】–【177】p47–52",
      "30讲 第4讲 p120–126",
      "18讲 第4讲 例4.9 p41；第3讲 p30–32",
      "武忠祥 第2章第一节 p58、题型三(一) p67–69",
      "1000题 第4章（基础篇、强化篇）"
    ],
    updated: "2026-10-22",

    framework: {
      main: R`2.1 用定义推出了六个基本导数公式，本节再给三条法则——四则运算、反函数、复合函数——补齐 16 个公式后，任何初等函数都能求导。做题的关键是看清结构：先化简，再按"和差 → 积商 → 复合"拆开，复合函数从外往里一层层乘。法则失效的地方（分段点、某一层不可导）回到 2.1 的定义。`,
      nodes: [
        { id: "BASE", go: "p7", col: 1, row: 1, kind: "map", label: "基本导数公式", sub: "2.1 推出的 6 类 + 本节补的" },
        { id: "ARITH", go: "p1", col: 0, row: 0, kind: "func", label: "四则运算法则", sub: R`$(uv)'=u'v+uv'$` },
        { id: "INV", go: "p3", col: 2, row: 0, kind: "func", label: "反函数法则", sub: R`$\frac{\mathrm dy}{\mathrm dx}=1\big/\frac{\mathrm dx}{\mathrm dy}$` },
        { id: "TRIG", go: "p2", col: 0, row: 1, kind: "prop", label: "tan、cot、sec、csc", sub: "写成 sin、cos 的商" },
        { id: "CHAIN", go: "p5", col: 2, row: 2, kind: "func", label: "复合函数链式法则", sub: R`$f'(u)\cdot g'(x)$` },
        { id: "ARC", go: "p4", col: 2, row: 1, kind: "prop", label: "反三角函数", sub: "arcsin、arctan …" },
        { id: "ELEM", go: "t1", col: 1, row: 2, kind: "build", label: "任意初等函数求导", sub: "化简 → 拆结构 → 逐层乘" },
        { id: "DEF", go: "t5", col: 0, row: 2, kind: "build", label: "法则失效处用定义", sub: "分段点、某层不可导" }
      ],
      edges: [
        { from: "ARITH", to: "TRIG", label: "商法则推出" },
        { from: "INV", to: "ARC", label: "取倒数推出" },
        { from: "TRIG", to: "BASE", label: "补进公式表" },
        { from: "ARC", to: "BASE", label: "补进公式表" },
        { from: "BASE", to: "ELEM", label: "公式 + 四则" },
        { from: "CHAIN", to: "ELEM", label: "一层层剥" },
        { from: "ELEM", to: "DEF", label: "条件不满足时" }
      ],
      keys: [
        { q: R`三条求导法则各要求什么条件？`, a: R`四则：$u$、$v$ 在该点都可导（教材 p83）；反函数：直接函数单调、可导且导数 $\neq0$（教材 p85）；复合：内层在 $x$ 处、外层在 $u=g(x)$ 处都可导（教材 p87）。三条都只是充分条件。` },
        { q: R`拿到一个初等函数，求导的顺序是什么？`, a: R`先化简（拆对数、根式写成分数指数）；再看最外层运算是和差、积商还是复合；复合从外往里一层层乘到 $x$（吉米【165】点评 p48；教材 p88）。` },
        { q: R`哪些地方不能直接套法则？`, a: R`分段点、绝对值零点、法则条件不满足的点（某个因子或某一层不可导）：回到 2.1 的定义求左右导数（30讲 p124；武忠祥 p68）。` },
        { q: R`$f'(x_0)$ 和 $\lim\limits_{x\to x_0}f'(x)$ 有什么区别？`, a: R`前者用定义求，后者是先用公式求导再取极限；前者存在时后者可以不存在（$x^2\sin\frac1x$ 在 0 处）。二者相等才说 $f'$ 在 $x_0$ 连续（吉米【176】点评 p51；18讲 p29）。` }
      ]
    },

    points: [
      {
        group: "一、函数的和、差、积、商的求导法则",
        items: [
          {
            id: "p1", kind: "定理", name: "定理 1：四则运算法则", page: "教材 p83–84",
            body: R`如果 $u=u(x)$、$v=v(x)$ 都在点 $x$ 处可导，那么它们的和、差、积、商（分母不为零的点）都在点 $x$ 处可导，且 $(u\pm v)'=u'\pm v'$，$(uv)'=u'v+uv'$，$\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\ (v\neq0)$。`,
            notes: [
              R`推广：$(uvw)'=u'vw+uv'w+uvw'$；$(Cu)'=Cu'$（教材 p84）`,
              R`积的法则的证明用到"可导必连续"：$v(x+\Delta x)\to v(x)$（教材 p83）`,
              R`法则只是充分条件：$u$ 在某点不可导时，$uv$ 在该点仍可能可导，如 $x\cdot|x|$ 在 0 处（18讲 p31）`,
              R`因式超过三个的乘积求某一点的导数，不要直接用乘积法则展开，用 2.1 的定义法（30讲 p121）`
            ],
            quiz: R`$(x\mathrm e^x\sin x)'=$？`
          },
          {
            id: "p2", kind: "公式", name: "正切、余切、正割、余割的导数", page: "教材 p84–85",
            body: R`$(\tan x)'=\sec^2x$，$(\cot x)'=-\csc^2x$，$(\sec x)'=\sec x\tan x$，$(\csc x)'=-\csc x\cot x$。`,
            notes: [
              R`都由商法则推出：$\tan x=\dfrac{\sin x}{\cos x}$、$\sec x=\dfrac1{\cos x}$（教材例 4、例 5 p84–85）`,
              R`余切、余割的推导是教材习题2-2 第1题（答案习题全解 p58）`
            ],
            quiz: R`$(\sec x)'$ 和 $(\csc x)'$ 各是什么？哪个带负号？`
          }
        ]
      },
      {
        group: "二、反函数的求导法则",
        items: [
          {
            id: "p3", kind: "定理", name: "定理 2：反函数的求导法则", page: "教材 p85",
            body: R`如果 $x=f(y)$ 在区间 $I_y$ 内单调、可导且 $f'(y)\neq0$，那么它的反函数 $y=f^{-1}(x)$ 在区间 $I_x=\{x\mid x=f(y),y\in I_y\}$ 内也可导，且 $[f^{-1}(x)]'=\dfrac1{f'(y)}$，即 $\dfrac{\mathrm dy}{\mathrm dx}=\dfrac1{\frac{\mathrm dx}{\mathrm dy}}$。`,
            notes: [
              R`一句话：反函数的导数等于直接函数导数的倒数（教材 p85）`,
              R`证明的关键：单调保证 $\Delta y\neq0$，连续保证 $\Delta x\to0$ 时 $\Delta y\to0$（教材 p85）`,
              R`求某一点的导数时要找"对应点"：$g'(y_0)=\dfrac1{f'(x_0)}$，其中 $y_0=f(x_0)$（18讲 p41）`,
              R`$f'(y)=0$ 的点，反函数的导数为无穷大：$x=y^3$ 在 $y=0$ 处导数为 0，反函数 $\sqrt[3]x$ 在 $x=0$ 处不可导（2.1 p3）`
            ],
            quiz: R`$y=f(x)$ 单调可导，$f(1)=3$，$f'(1)=2$，反函数 $g$ 在 $y=3$ 处的导数是多少？`
          },
          {
            id: "p4", kind: "公式", name: "反三角函数的导数", page: "教材 p86",
            body: R`$(\arcsin x)'=\dfrac1{\sqrt{1-x^2}}$，$(\arccos x)'=-\dfrac1{\sqrt{1-x^2}}$（$-1<x<1$）；$(\arctan x)'=\dfrac1{1+x^2}$，$(\operatorname{arccot}x)'=-\dfrac1{1+x^2}$。`,
            notes: [
              R`推导 $\arcsin$：$x=\sin y$，$y\in\left(-\frac\pi2,\frac\pi2\right)$ 时 $\cos y>0$，所以 $\cos y=\sqrt{1-x^2}$，根号前取正号（教材例 6 p86）`,
              R`$\arccos x=\frac\pi2-\arcsin x$，$\operatorname{arccot}x=\frac\pi2-\arctan x$，所以导数只差一个负号（教材 p86）`
            ],
            quiz: R`$\arcsin x$ 的导数公式在哪个区间成立？$\arctan x$ 的呢？`
          }
        ]
      },
      {
        group: "三、复合函数的求导法则",
        items: [
          {
            id: "p5", kind: "定理", name: "定理 3：复合函数的求导法则（链式法则）", page: "教材 p87–89",
            body: R`如果 $u=g(x)$ 在点 $x$ 处可导，$y=f(u)$ 在点 $u=g(x)$ 处可导，那么 $y=f[g(x)]$ 在点 $x$ 处可导，且 $\dfrac{\mathrm dy}{\mathrm dx}=f'(u)\cdot g'(x)=\dfrac{\mathrm dy}{\mathrm du}\cdot\dfrac{\mathrm du}{\mathrm dx}$。`,
            notes: [
              R`多个中间变量：$y=f(u)$，$u=\varphi(v)$，$v=\psi(x)$，则 $\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\mathrm dy}{\mathrm du}\cdot\dfrac{\mathrm du}{\mathrm dv}\cdot\dfrac{\mathrm dv}{\mathrm dx}$（教材 p89）`,
              R`用法：先分析函数由哪些简单函数复合而成，再从外往里逐层求导；熟练后不写中间变量（教材 p88–89）`,
              R`$f'[g(x)]$ 是 $f$ 对内层整体求导后代入 $g(x)$；$\{f[g(x)]\}'$ 是整个复合函数对 $x$ 求导，多乘一个 $g'(x)$（30讲 p122）`,
              R`两层都可导只是充分条件：有一层不可导时，复合函数仍可能可导（武忠祥 p68）`
            ],
            quiz: R`$f(u)=u^3$，$f'(x^2)$ 和 $[f(x^2)]'$ 各等于什么？`
          },
          {
            id: "p6", kind: "结论", name: "两个常用的复合结果", page: "30讲 p120、p124；教材习题2-2 第7(8)题 p92",
            body: R`$(\ln|x|)'=\dfrac1x\ (x\neq0)$，一般地 $[\ln|u(x)|]'=\dfrac{u'(x)}{u(x)}$；$\left[\ln\left(x+\sqrt{x^2+a^2}\right)\right]'=\dfrac1{\sqrt{x^2+a^2}}$。`,
            notes: [
              R`$\ln|x|$ 分 $x>0$、$x<0$ 两段分别求导，结果一样，所以求导时可以"视绝对值而不见"（30讲 p124）`,
              R`$a=1$ 时就是反双曲正弦 $\operatorname{arsh}x$ 的导数（教材例 16 p91；习题全解 p61）`
            ],
            quiz: R`$(\ln|\cos x|)'=$？`
          }
        ]
      },
      {
        group: "四、基本求导法则与导数公式",
        items: [
          {
            id: "p7", kind: "公式", name: "常数和基本初等函数的 16 个导数公式", page: "教材 p90",
            body: R`$(C)'=0$；$(x^\mu)'=\mu x^{\mu-1}$；$(\sin x)'=\cos x$；$(\cos x)'=-\sin x$；$(\tan x)'=\sec^2x$；$(\cot x)'=-\csc^2x$；$(\sec x)'=\sec x\tan x$；$(\csc x)'=-\csc x\cot x$；$(a^x)'=a^x\ln a$；$(\mathrm e^x)'=\mathrm e^x$；$(\log_ax)'=\dfrac1{x\ln a}$；$(\ln x)'=\dfrac1x$；$(\arcsin x)'=\dfrac1{\sqrt{1-x^2}}$；$(\arccos x)'=-\dfrac1{\sqrt{1-x^2}}$；$(\arctan x)'=\dfrac1{1+x^2}$；$(\operatorname{arccot}x)'=-\dfrac1{1+x^2}$。`,
            notes: [
              R`来源：常数、幂、正弦、余弦、指数、对数由 2.1 的定义推出；正切类由商法则推出；反三角由反函数法则推出（教材 p75–90）`,
              R`记忆：名字里带"余"（cos、cot、csc、arccos、arccot）的五个，导数都带负号`
            ],
            quiz: R`$(\log_ax)'$ 和 $(a^x)'$ 里的 $\ln a$ 分别在分子还是分母？`
          },
          {
            id: "p8", kind: "公式", name: "双曲函数的导数（带 *，了解）", page: "教材 p91",
            body: R`$(\operatorname{sh}x)'=\operatorname{ch}x$，$(\operatorname{ch}x)'=\operatorname{sh}x$，$(\operatorname{th}x)'=\dfrac1{\operatorname{ch}^2x}$；$(\operatorname{arsh}x)'=\dfrac1{\sqrt{1+x^2}}$，$(\operatorname{arch}x)'=\dfrac1{\sqrt{x^2-1}}\ (x>1)$，$(\operatorname{arth}x)'=\dfrac1{1-x^2}\ (-1<x<1)$。`,
            notes: [
              R`$\operatorname{sh}x=\dfrac{\mathrm e^x-\mathrm e^{-x}}2$，$\operatorname{ch}x=\dfrac{\mathrm e^x+\mathrm e^{-x}}2$，用和差法则和 $(\mathrm e^{-x})'=-\mathrm e^{-x}$ 推出（教材 p91）`,
              R`$\operatorname{arsh}x=\ln\left(x+\sqrt{1+x^2}\right)$，用复合法则推出（教材 p91）`
            ],
            quiz: R`$(\operatorname{ch}x)'$ 带负号吗？和 $(\cos x)'$ 比较一下。`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "具体初等函数求导（先化简再求）",
        signal: R`给出含 $\ln$、根式、分式的具体函数，求 $y'$ 或 $y'|_{x=x_0}$`,
        example: { q: R`设 $y=\arctan\mathrm e^x-\ln\sqrt{\dfrac{\mathrm e^{2x}}{\mathrm e^{2x}+1}}$，则 $\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=1}=$ ____。`, src: "吉米【165】p48" },
        idea: {
          key: R`先用对数、指数的运算性质把函数化简（拆 $\ln$、根式写成分数指数、能约先约），再按"和差 → 积商 → 复合"逐层套法则和公式。`,
          how: [
            R`化简：$\ln$ 的积、商、幂拆开；根式写成分数指数；能约分先约分`,
            R`看最外层运算是和差、积商还是复合`,
            R`逐层套法则和 16 个公式`,
            R`整理结果；求某点的值时，化简后的式子再代入`
          ],
          refs: [
            { src: "吉米【165】点评 p48", text: R`一般初等函数在求导之前应先化简，将函数化成最简形式后再求导，可使求导过程大大简化，避免出错` },
            { src: "习题全解 习题2-2 第2(4)题 p58", text: R`$y'=\left(\dfrac12\sin2x\right)'=\dfrac12\cdot2\cos2x=\cos2x$` }
          ]
        },
        first: R`把 $\ln\sqrt{\cdots}$ 拆开：$=\frac12\ln\mathrm e^{2x}-\frac12\ln(\mathrm e^{2x}+1)$`,
        steps: [
          R`化简：$y=\arctan\mathrm e^x-x+\dfrac12\ln(\mathrm e^{2x}+1)$（$\ln\mathrm e^{2x}=2x$）`,
          R`$(\arctan\mathrm e^x)'=\dfrac{\mathrm e^x}{1+\mathrm e^{2x}}$（复合：外层 $\arctan u$，内层 $\mathrm e^x$）`,
          R`$\left[\dfrac12\ln(\mathrm e^{2x}+1)\right]'=\dfrac12\cdot\dfrac{2\mathrm e^{2x}}{\mathrm e^{2x}+1}=\dfrac{\mathrm e^{2x}}{\mathrm e^{2x}+1}$`,
          R`$y'=\dfrac{\mathrm e^x}{1+\mathrm e^{2x}}-1+\dfrac{\mathrm e^{2x}}{\mathrm e^{2x}+1}=\dfrac{\mathrm e^x-1}{1+\mathrm e^{2x}}$，所以 $y'(1)=\dfrac{\mathrm e-1}{\mathrm e^2+1}$`
        ],
        pitfall: R`不化简直接对 $\ln\sqrt{\frac{\cdots}{\cdots}}$ 用三层复合，算错率很高；拆 $\ln\sqrt{\ }$ 时漏了系数 $\frac12$`,
        practice: "吉米【164】【165】（p48）；教材习题2-2 第2、3题（p92，答案习题全解 p58–59）；检验：1000题基础篇第4章 6题"
      },
      {
        id: "t2", name: "多层复合函数求导（链式法则）",
        signal: R`函数套了两三层（$\mathrm e^{\tan\frac1x}$、$\ln\cos(\mathrm e^x)$），或乘积、复合混在一起`,
        example: { q: R`设 $y=\mathrm e^{\tan\frac1x}\cdot\sin\dfrac1x$，则 $y'=$ ____。`, src: "吉米【166】p48" },
        idea: {
          key: R`从最外层往里"剥"：每剥一层乘上这一层的导数（里面整体不动），一直乘到 $x$；乘积和复合混在一起时，先用乘积法则拆开，再对每个因子用链式法则。`,
          how: [
            R`写出复合链 $y\to u\to v\to x$（熟练后心里写）`,
            R`外层导数（内层当整体，不动）× 内层导数`,
            R`一直乘到自变量 $x$ 为止`,
            R`乘积、商和复合混合：先用积、商法则拆成几项，每项再剥`
          ],
          refs: [
            { src: "教材 p88", text: R`应用复合函数求导法则时，首先要分析所给函数可看作由哪些函数复合而成，或者说，所给函数能分解成哪些函数的复合` },
            { src: "30讲 p122", text: R`一元复合函数求导规则图（链式求导法则）：$f\to u\to v\to x$，$f'_x=f'_u\cdot u'_v\cdot v'_x$ … 考试最多 3 层` },
            { src: "吉米【166】点评 p48", text: R`这是一道有多重复合关系的函数的求导问题，要求读者熟悉基本初等函数的导数公式和复合函数求导法则` }
          ]
        },
        first: R`先用乘积法则拆成两项，两项里都有 $\frac1x$ 这一层`,
        steps: [
          R`乘积法则：$y'=\left(\mathrm e^{\tan\frac1x}\right)'\sin\dfrac1x+\mathrm e^{\tan\frac1x}\left(\sin\dfrac1x\right)'$`,
          R`$\left(\mathrm e^{\tan\frac1x}\right)'=\mathrm e^{\tan\frac1x}\cdot\sec^2\dfrac1x\cdot\left(-\dfrac1{x^2}\right)$（三层：$\mathrm e^u$、$\tan v$、$\frac1x$）`,
          R`$\left(\sin\dfrac1x\right)'=\cos\dfrac1x\cdot\left(-\dfrac1{x^2}\right)$`,
          R`合并：$y'=-\dfrac1{x^2}\mathrm e^{\tan\frac1x}\left(\cos\dfrac1x+\sin\dfrac1x\sec^2\dfrac1x\right)=-\dfrac1{x^2}\mathrm e^{\tan\frac1x}\left(\cos\dfrac1x+\tan\dfrac1x\sec\dfrac1x\right)$`
        ],
        pitfall: R`剥到中间就停，漏乘最里层 $\left(\frac1x\right)'=-\frac1{x^2}$；$\left(\mathrm e^u\right)'$ 写成 $u\mathrm e^{u-1}$`,
        practice: "教材 例13、14（p89）、习题2-2 第6、7、8、11题（p92–93，答案习题全解 p59–64）；30讲 例4.2（p122）；检验：1000题强化篇第4章 1题"
      },
      {
        id: "t3", name: "抽象复合函数求导",
        signal: R`含 $f(\square)$，只知道 $f'$ 的表达式或某点的值，求 $y'$ 或 $y'|_{x_0}$；或由 $h=F(g)$ 的导数关系反求 $g$ 的值`,
        example: { q: R`已知 $y=f\left(\dfrac{3x-2}{3x+2}\right)$，$f'(x)=\arctan x^2$，则 $\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=0}=$ ____。`, src: "吉米【168】p49" },
        idea: {
          key: R`$[f(g(x))]'=f'(g(x))\cdot g'(x)$：$f'$ 在内层的值处取值，再乘内层导数；只问某一点时，先算出内层在这点的值。`,
          how: [
            R`认出外层 $f$ 和内层 $g(x)$`,
            R`写 $y'=f'(g(x))\cdot g'(x)$，$f'$ 后面括号里是整个内层`,
            R`求某一点：先算 $g(x_0)$，再查 $f'(g(x_0))$，再乘 $g'(x_0)$`,
            R`反求题（已知 $h'$、$g'$ 求 $g$ 的值）：对关系式求导，代入已知点解方程`
          ],
          refs: [
            { src: "30讲 p122", text: R`$\{f[g(x)]\}'$（整体对 $x$ 求导）$=\frac{\mathrm d\{f[g(x)]\}}{\mathrm dx}$，而 $f'[g(x)]=\frac{\mathrm d\{f[g(x)]\}}{\mathrm d[g(x)]}$，要看清楚求导符号的位置，不要弄错了` },
            { src: "习题全解 习题2-2 第10(1)题 p63", text: R`$y'=f'(x^2)\,2x=2xf'(x^2)$` }
          ]
        },
        first: R`内层 $u=\dfrac{3x-2}{3x+2}$，$x=0$ 时 $u=-1$`,
        steps: [
          R`$\dfrac{\mathrm dy}{\mathrm dx}=f'(u)\cdot\dfrac{\mathrm du}{\mathrm dx}$，$u=\dfrac{3x-2}{3x+2}$（链式法则，教材 p87）`,
          R`$\dfrac{\mathrm du}{\mathrm dx}=\dfrac{3(3x+2)-3(3x-2)}{(3x+2)^2}=\dfrac{12}{(3x+2)^2}$，$x=0$ 时为 $3$`,
          R`$x=0$ 时 $u=-1$，$f'(-1)=\arctan(-1)^2=\arctan1=\dfrac\pi4$`,
          R`$\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=0}=\dfrac\pi4\cdot3=\dfrac{3\pi}4$`
        ],
        pitfall: R`把 $f'$ 的表达式里的 $x$ 直接代 0（$\arctan0=0$），没换成内层的值 $-1$；漏乘 $u'$`,
        practice: "吉米【168】【169】（p49）；教材习题2-2 第9、10题（p93，答案习题全解 p62–63）；武忠祥 题型三(一)例2（p68）；30讲 习题4.1（p135）；检验：1000题基础篇第4章 1、4题"
      },
      {
        id: "t4", name: "先求出函数表达式再求导（极限式、函数方程）",
        signal: R`$f(x)$ 由极限式 $\lim\limits_{t\to\infty}\cdots$ 给出，或由 $af(x)+bf\left(\frac1x\right)=\cdots$、$2f(1+x)+f(1-x)=\cdots$ 这类方程给出`,
        example: { q: R`设函数 $f(x)$ 在 $(-\infty,+\infty)$ 上满足 $2f(1+x)+f(1-x)=\mathrm e^x$，试求 $f'(x)$。`, src: "吉米【172】p49–50" },
        idea: {
          key: R`先求出 $f(x)$ 的显式表达式——极限式用重要极限算出来，函数方程用换元再造一个方程、联立解出——再用公式求导。`,
          how: [
            R`极限式：与极限变量无关的部分当常数，用重要极限求出 $f$`,
            R`函数方程：用 $x\to-x$ 或 $x\to\frac1x$ 再造一个方程，两式联立解出 $f(\cdots)$`,
            R`换元 $t=1+x$ 等，写成 $f(x)$ 的式子`,
            R`套公式求导`
          ],
          refs: [
            { src: "吉米【167】p48", text: R`先利用重要极限 $\lim\limits_{x\to\infty}\left(1+\frac1x\right)^x=\mathrm e$ 求出 $f(t)$ 的表达式，然后求 $f'(t)$` },
            { src: "吉米【171】p49", text: R`由已知得 $af\left(\frac1x\right)+bf(x)=cx$，解方程组 … 得 $f(x)=\dfrac{\frac{ac}x-bcx}{a^2-b^2}$` }
          ]
        },
        first: R`把 $x$ 换成 $-x$，再得一个方程`,
        steps: [
          R`原式 ①：$2f(1+x)+f(1-x)=\mathrm e^x$；$x$ 换成 $-x$ 得 ②：$2f(1-x)+f(1+x)=\mathrm e^{-x}$`,
          R`$2\times$① $-$ ②：$3f(1+x)=2\mathrm e^x-\mathrm e^{-x}$`,
          R`令 $t=1+x$：$f(t)=\dfrac{2\mathrm e^{t-1}-\mathrm e^{1-t}}3$，即 $f(x)=\dfrac{2\mathrm e^{x-1}-\mathrm e^{1-x}}3$`,
          R`$f'(x)=\dfrac{2\mathrm e^{x-1}+\mathrm e^{1-x}}3$（$(\mathrm e^{1-x})'=-\mathrm e^{1-x}$）`
        ],
        pitfall: R`消元时系数配错；$(\mathrm e^{1-x})'$ 漏了内层导数 $-1$，结果符号写成减号`,
        practice: "吉米【167】【171】【172】（p48–50）；30讲 习题4.2（p135）；检验：1000题基础篇第4章 12、13题"
      },
      {
        id: "t5", name: "分段函数的导函数（分段点用定义）",
        signal: R`分段函数求 $f'(x)$，或"确定 $a,b$ 使 $f$ 可导，并求 $f'(x)$"`,
        example: { q: R`试确定常数 $a,b$ 的值，使 $f(x)=\begin{cases}1+\ln(1-2x),&x\leqslant0\\a+b\mathrm e^x,&x>0\end{cases}$ 在 $x=0$ 处可导，并求出此时的 $f'(x)$。`, src: "吉米【174】p50–51" },
        idea: {
          key: R`分段点以外用公式，分段点处用定义求左右导数（先保证连续）；最后把导函数也写成分段形式，分段点单独写值。`,
          how: [
            R`非分段点：各段分别用求导公式`,
            R`分段点：先让它连续（左右极限 = 函数值），再用定义求左、右导数`,
            R`左右导数相等才可导，写出 $f'(x_0)$`,
            R`合并成分段的 $f'(x)$`
          ],
          refs: [
            { src: "30讲 p124", text: R`①在分段点 $x_0$ 处用导数定义求导 … 根据 $f'_+(x_0)$ 是否等于 $f'_-(x_0)$ 来判定 $f'(x_0)$；②在非分段点用导数公式求导` },
            { src: "吉米【174】点评 p51", text: R`确定参数的值使分段函数可导的问题，通常一要利用函数在一点处可导的充要条件是在该点的左导数与右导数均存在且相等；二要利用函数可导必连续` }
          ]
        },
        first: R`$x=0$ 处先保连续：$f(0)=1$，右极限 $a+b$`,
        steps: [
          R`连续：$\lim\limits_{x\to0^+}(a+b\mathrm e^x)=a+b=f(0)=1$`,
          R`$f'_-(0)=\lim\limits_{x\to0^-}\dfrac{\ln(1-2x)}x=-2$（等价无穷小 $\ln(1-2x)\sim-2x$）`,
          R`$f'_+(0)=\lim\limits_{x\to0^+}\dfrac{a+b\mathrm e^x-1}x=\lim\limits_{x\to0^+}\dfrac{b(\mathrm e^x-1)}x=b$（用了 $a=1-b$）`,
          R`$b=-2$，$a=3$，$f'(0)=-2$；$f'(x)=\begin{cases}-\dfrac2{1-2x},&x\leqslant0\\-2\mathrm e^x,&x>0\end{cases}$`
        ],
        pitfall: R`分段点处直接把某一段的公式代进去当导数；没先用连续定出 $a+b=1$，右导数的分子就写不对`,
        practice: "吉米【174】（p50–51）、【173】（p50，要用洛必达，学完 3.2 再做）；教材习题2-1 第19题（p82）；检验：1000题基础篇第4章 14题"
      },
      {
        id: "t6", name: "导函数在分段点的连续性",
        signal: R`"讨论 $f'(x)$ 在 $x=0$ 处的连续性""导函数在 0 处连续，求 $\lambda$ 的范围"`,
        example: { q: R`$f(x)=\begin{cases}x\arctan\dfrac1{x^2},&x\neq0\\0,&x=0\end{cases}$，试讨论 $f'(x)$ 在 $x=0$ 处的连续性。`, src: "吉米【176】p51" },
        idea: {
          key: R`$f'$ 在 $x_0$ 连续 $\Leftrightarrow\lim\limits_{x\to x_0}f'(x)=f'(x_0)$：$f'(x_0)$ 用定义求，$x\neq x_0$ 时用公式求 $f'(x)$ 再取极限，两者比较。`,
          how: [
            R`用定义求 $f'(x_0)$（不存在就谈不上导函数连续）`,
            R`$x\neq x_0$ 时用公式求 $f'(x)$`,
            R`求 $\lim\limits_{x\to x_0}f'(x)$`,
            R`比较；含参数（如 $x^\lambda\cos\frac1x$）时，分别写出"$f'(0)$ 存在"和"极限等于 $f'(0)$"对参数的要求`
          ],
          refs: [
            { src: "吉米【176】点评 p51", text: R`一般地，分段函数在分界点的导数应按导数定义计算，分段函数在区间上的导数可用求导法则计算` },
            { src: "吉米【175】p51", text: R`当 $\lambda>1$，有 $f'(x)=\lambda x^{\lambda-1}\cos\frac1x+x^{\lambda-2}\sin\frac1x\ (x\neq0)$，$f'(0)=0$ … 显然当 $\lambda>2$ 时，$\lim\limits_{x\to0}f'(x)=0=f'(0)$` }
          ]
        },
        first: R`先用定义求 $f'(0)$`,
        steps: [
          R`$f'(0)=\lim\limits_{x\to0}\dfrac{x\arctan\frac1{x^2}-0}{x}=\lim\limits_{x\to0}\arctan\dfrac1{x^2}=\dfrac\pi2$（$\frac1{x^2}\to+\infty$）`,
          R`$x\neq0$：$f'(x)=\arctan\dfrac1{x^2}+x\cdot\dfrac1{1+\frac1{x^4}}\cdot\left(-\dfrac2{x^3}\right)=\arctan\dfrac1{x^2}-\dfrac{2x^2}{1+x^4}$`,
          R`$\lim\limits_{x\to0}f'(x)=\dfrac\pi2-0=\dfrac\pi2$`,
          R`$\lim\limits_{x\to0}f'(x)=f'(0)$，所以 $f'(x)$ 在 $x=0$ 处连续`
        ],
        pitfall: R`用 $\lim\limits_{x\to0}f'(x)$ 代替 $f'(0)$：这个极限不存在时就说 $f'(0)$ 不存在（$x^2\sin\frac1x$ 就是反例）`,
        practice: "吉米【175】【176】（p51）、【177】（p51–52，要用洛必达和二阶导数，后做）；检验：1000题基础篇第3章 10题，强化篇第3章 3、12题"
      },
      {
        id: "t7", name: "反函数求导",
        signal: R`"$g$ 是 $f$ 的反函数，求 $g'(y_0)$""推导反三角函数的导数""求 $\frac{\mathrm dx}{\mathrm dy}$"`,
        example: { q: R`已知 $f(x)=\mathrm e^x+2x+1$，$g(y)$ 与 $f(x)$ 互为反函数，求 $g'(2)$。`, src: "18讲 例4.9 p41（原题求 $g''(2)$，这里只求一阶）" },
        idea: {
          key: R`$\dfrac{\mathrm dy}{\mathrm dx}=1\Big/\dfrac{\mathrm dx}{\mathrm dy}$：先找出对应点（解 $f(x_0)=y_0$），再取 $f'(x_0)$ 的倒数；推导公式时，最后要把 $y$ 换回 $x$，根号前的正负号由 $y$ 的范围定。`,
          how: [
            R`确认直接函数单调、可导、导数不为 0`,
            R`由 $y_0$ 求对应的 $x_0$（多半靠观察，试 $0,\pm1$）`,
            R`$g'(y_0)=\dfrac1{f'(x_0)}$`,
            R`求导函数时，用 $x=f(y)$ 把结果写成 $x$ 的式子，注意开方取正还是取负`
          ],
          refs: [
            { src: "教材 p85", text: R`上述结论可简单地说成：反函数的导数等于直接函数导数的倒数` },
            { src: "教材 例6 p86", text: R`$\cos y=\sqrt{1-\sin^2y}=\sqrt{1-x^2}$（因为当 $-\frac\pi2<y<\frac\pi2$ 时，$\cos y>0$，所以根号前只取正号）` }
          ]
        },
        first: R`找对应点：$f(x_0)=2$，试 $x_0=0$`,
        steps: [
          R`$f'(x)=\mathrm e^x+2>0$，$f$ 单调增加、可导、导数不为 0，反函数存在且可导（定理 2，教材 p85）`,
          R`$f(0)=1+0+1=2$，所以 $y=2$ 对应 $x=0$，$g(2)=0$`,
          R`$g'(2)=\dfrac1{f'(0)}=\dfrac1{1+2}=\dfrac13$`
        ],
        pitfall: R`写成 $g'(2)=\dfrac1{f'(2)}$：倒数要在对应点 $x_0=0$ 处取，不是在 $y_0=2$ 处`,
        practice: "教材 例6–例8（p86–87）；18讲 例4.9（p41，二阶部分学完 2.3 再做）；30讲 例4.7（p126，同上）；检验：1000题基础篇第4章 5题"
      },
      {
        id: "t8", name: "用求导法则推导导数公式",
        signal: R`"推导 $(\cot x)'$、$(\csc x)'$""证明双曲函数的导数公式"`,
        example: { q: R`推导余切函数及余割函数的导数公式：$(\cot x)'=-\csc^2x$，$(\csc x)'=-\csc x\cot x$。`, src: "教材 习题2-2 第1题 p92" },
        idea: {
          key: R`正切类写成 $\sin$、$\cos$ 的商用商法则；双曲函数写成指数式用和差、复合法则；反三角、反双曲用反函数法则或对数式。`,
          how: [
            R`改写成已知导数的函数的和、差、积、商`,
            R`套法则（商法则：分子是"上导乘下 − 上乘下导"）`,
            R`用 $\sin^2x+\cos^2x=1$、$\operatorname{ch}^2x-\operatorname{sh}^2x=1$ 化简`,
            R`写成标准形式`
          ],
          refs: [
            { src: "教材 例4 p84", text: R`$(\tan x)'=\left(\dfrac{\sin x}{\cos x}\right)'=\dfrac{\cos^2x+\sin^2x}{\cos^2x}=\dfrac1{\cos^2x}=\sec^2x$` },
            { src: "习题全解 习题2-2 第1题 p58", text: R`$(\csc x)'=\left(\dfrac1{\sin x}\right)'=\dfrac{-\cos x}{\sin^2x}=-\csc x\cot x$` }
          ]
        },
        first: R`$\cot x=\dfrac{\cos x}{\sin x}$，$\csc x=\dfrac1{\sin x}$，用商法则`,
        steps: [
          R`$(\cot x)'=\dfrac{(\cos x)'\sin x-\cos x(\sin x)'}{\sin^2x}=\dfrac{-\sin^2x-\cos^2x}{\sin^2x}$（商法则，教材 p83）`,
          R`$=-\dfrac1{\sin^2x}=-\csc^2x$`,
          R`$(\csc x)'=\dfrac{0\cdot\sin x-1\cdot\cos x}{\sin^2x}=-\dfrac{\cos x}{\sin^2x}$`,
          R`$=-\dfrac1{\sin x}\cdot\dfrac{\cos x}{\sin x}=-\csc x\cot x$`
        ],
        pitfall: R`商法则分子顺序写反（$uv'-u'v$），结果差一个负号`,
        practice: "教材 例4、例5（p84–85）、例16（p91，带 * 了解）、习题2-2 第1题（p92，答案习题全解 p58）、第12题（p93，带 *）"
      },
      {
        id: "t9", name: "求某一点的导数值（不必求整体表达式）",
        signal: R`只问 $y'|_{x=x_0}$、某时刻的速度、某点的切线；尤其是 $f[f(x)]$、分段函数套复合`,
        example: { q: R`设 $f(x)=\begin{cases}\ln\sqrt x,&x\geqslant1\\2x-1,&x<1\end{cases}$，且 $y=f[f(x)]$，则 $\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=\mathrm e}=$ ____。`, src: "30讲 例4.3 p122–123" },
        idea: {
          key: R`只求某一点的导数时，不必写出整个复合函数：先算内层在这点的值，判断它落在哪一段（是不是分段点），再用链式法则代值。`,
          how: [
            R`算 $x_0$ 处内层的值 $g(x_0)$`,
            R`判断 $x_0$、$g(x_0)$ 是不是分段点：是分段点就要用定义`,
            R`$[f(g(x))]'|_{x_0}=f'(g(x_0))\cdot g'(x_0)$`,
            R`速度、切线等应用题：先求导函数，再代值`
          ],
          refs: [
            { src: "30讲 例4.3 方法总结 p123", text: R`本题求的是某一点的导数值，不是求导函数，所以无须先求 $f[f(x)]$ 的表达式` },
            { src: "习题全解 习题2-2 第5题 p59", text: R`$y'=2\cos x+2x$，$y'|_{x=0}=2$，$y|_{x=0}=0$，因此曲线在点 $(0,0)$ 处的切线方程为 $y-0=2(x-0)$` }
          ]
        },
        first: R`先算内层：$f(\mathrm e)=\ln\sqrt{\mathrm e}=\dfrac12$`,
        steps: [
          R`$\mathrm e>1$，内层用 $\ln\sqrt x=\frac12\ln x$：$f(\mathrm e)=\dfrac12$，$f'(\mathrm e)=\dfrac1{2x}\Big|_{x=\mathrm e}=\dfrac1{2\mathrm e}$`,
          R`$\frac12<1$，外层落在 $2x-1$ 这一段，而且不是分段点：$f'\left(\frac12\right)=2$`,
          R`$\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=\mathrm e}=f'(f(\mathrm e))\cdot f'(\mathrm e)=2\cdot\dfrac1{2\mathrm e}=\dfrac1{\mathrm e}$（链式法则）`
        ],
        pitfall: R`外层也用 $\ln\sqrt x$ 那一段求 $f'\left(\frac12\right)$；或者先把 $f[f(x)]$ 分四种情况写出来，费时又容易错`,
        practice: "30讲 例4.3（p122–123）；教材习题2-2 第3、4、5题（p92，答案习题全解 p58–59）；吉米【164】（p48）；检验：1000题基础篇第4章 2、4题"
      },
      {
        id: "t10", name: "含绝对值的函数求导（研）",
        signal: R`$y=|x\mathrm e^{-x}|$、$\ln|x|$、$|f(x-1)|$ 一类，求 $y'$ 或某点导数`,
        example: { q: R`设函数 $y=|x\mathrm e^{-x}|$，求 $y'$。`, src: "30讲 例4.6 p124–125（原题求 $y''$，这里只求一阶）" },
        idea: {
          key: R`先看绝对值里面的符号，去掉绝对值写成分段函数；非分段点用公式，分段点用定义（或 2.1 题型 10 的结论）；$\ln|u|$ 求导可以"视绝对值而不见"。`,
          how: [
            R`找出绝对值里面等于 0 的点`,
            R`去掉绝对值，分段写出`,
            R`各段用公式求导`,
            R`分段点用定义判断左右导数；特例 $(\ln|u|)'=\frac{u'}u$ 直接用`
          ],
          refs: [
            { src: "30讲 例4.5 方法总结 p124", text: R`对含绝对值的函数求导，先将其写成分段函数，然后在分段点处有定义用导数定义求导，无定义不用求，非分段点用导数公式求导` },
            { src: "30讲 p124", text: R`$\ln|x|$ 求导时，可视"绝对值符号"而不见` }
          ]
        },
        first: R`$\mathrm e^{-x}>0$，绝对值只看 $x$ 的符号`,
        steps: [
          R`去绝对值：$y=\begin{cases}-x\mathrm e^{-x},&x<0\\x\mathrm e^{-x},&x\geqslant0\end{cases}$`,
          R`$x>0$：$y'=\mathrm e^{-x}-x\mathrm e^{-x}=\mathrm e^{-x}(1-x)$；$x<0$：$y'=\mathrm e^{-x}(x-1)$`,
          R`$x=0$：$y'_-(0)=\lim\limits_{x\to0^-}\dfrac{-x\mathrm e^{-x}}x=-1$，$y'_+(0)=1$，不可导`,
          R`$y'=\begin{cases}\mathrm e^{-x}(x-1),&x<0\\\mathrm e^{-x}(1-x),&x>0\end{cases}$，$x=0$ 处不可导`
        ],
        pitfall: R`去绝对值后在 $x=0$ 处也用公式代值；把 $(\ln|x|)'$ 写成 $\frac1{|x|}$`,
        practice: "30讲 例4.5、4.6（p124–125，4.6 求 $y''$ 的部分学完 2.3 再做）；18讲 例3.6（p31–32）；检验：1000题基础篇第4章 3题"
      },
      {
        id: "t11", name: "链式法则条件不满足时复合函数的可导性（研）",
        signal: R`复合函数 $f(g(x))$ 中，内层或外层在相应点不可导（分段点、$\sqrt x$ 在 0 处、$x^3\sin\frac1x$ 一类）`,
        example: { q: R`设 $f(x)=\begin{cases}x^2,&x\geqslant0\\x^4,&x<0\end{cases}$，$g(x)=\begin{cases}-\sqrt x,&x>0\\x^2,&x\leqslant0\end{cases}$，$y=f(g(x))$，则（　）。(A) $\left.\frac{\mathrm dy}{\mathrm dx}\right|_{x=1}=1$　(B) $\left.\frac{\mathrm dy}{\mathrm dx}\right|_{x=1}$ 不存在　(C) $\left.\frac{\mathrm dy}{\mathrm dx}\right|_{x=0}=0$　(D) $\left.\frac{\mathrm dy}{\mathrm dx}\right|_{x=0}$ 不存在`, src: "武忠祥 题型三(一)例3 p68" },
        idea: {
          key: R`链式法则只是充分条件：内层、外层都可导才能用；有一层在相应点不可导时，不能直接下"不可导"的结论，要先写出复合函数的表达式（或用定义）再判断。`,
          how: [
            R`查内层 $g$ 在 $x_0$ 处、外层 $f$ 在 $g(x_0)$ 处是否可导`,
            R`都可导：直接用链式法则`,
            R`有一个不可导：写出 $f(g(x))$ 在 $x_0$ 附近的表达式`,
            R`用定义求左右导数判断`
          ],
          refs: [
            { src: "武忠祥 题型三(一)例3 注(2) p68", text: R`如果 $g'(x_0)$ 和 $f'(u_0)$ 至少有一个不存在，则 $y=f(g(x))$ 在 $x_0$ 处并非一定不可导，此时，先求出复合函数 $y=f(g(x))$ 的表达式，然后再进一步考查 $y=f(g(x))$ 在 $x_0$ 处的可导性` },
            { src: "武忠祥 题型三(一)例4 注 p69", text: R`这是一种"经典"的错误，原因是极限 $\lim\limits_{x\to0}\dfrac{f(x^3\sin\frac1x)-f(0)}{x^3\sin\frac1x}$ 不存在，因为求极限的函数在 $x=0$ 的任何去心邻域内都有没定义的点 $x=\frac1{n\pi}$` }
          ]
        },
        first: R`$x=1$ 处两层都可导，直接用链式法则；$x=0$ 处 $g'(0)$ 不存在，要写出复合表达式`,
        steps: [
          R`$x=1$：$g(1)=-1$，$g'(1)=-\dfrac1{2\sqrt x}\Big|_{x=1}=-\dfrac12$，$f'(-1)=4x^3|_{x=-1}=-4$，$\left.\frac{\mathrm dy}{\mathrm dx}\right|_{x=1}=(-4)\cdot\left(-\dfrac12\right)=2$，排除 (A)(B)`,
          R`$x=0$：$g'_+(0)$ 不存在（$-\sqrt x$ 的差商 $\to-\infty$），链式法则用不了`,
          R`写表达式：$x>0$ 时 $g=-\sqrt x<0$，$y=g^4=x^2$；$x\leqslant0$ 时 $g=x^2\geqslant0$，$y=g^2=x^4$`,
          R`$y=\begin{cases}x^2,&x>0\\x^4,&x\leqslant0\end{cases}$，$y'_\pm(0)=0$，所以 $\left.\frac{\mathrm dy}{\mathrm dx}\right|_{x=0}=0$，选 (C)`
        ],
        pitfall: R`看到 $g'(0)$ 不存在就选 (D)；反过来，内层导数为 0 时机械地写 $F'(0)=f'(0)\cdot0$，忽略了差商的分母可能为 0（武忠祥例 4 注）`,
        practice: "武忠祥 题型三(一)例3、例4（p68–69）"
      }
    ],

    pitfalls: [
      { wrong: R`$(uv)'=u'v'$`, why: R`积的导数不是导数的积；证明里要"加一项减一项"拆成两部分`, right: R`$(uv)'=u'v+uv'$（教材 p83）`, test: R`$(x\cdot x)'$ 按 $u'v'$ 算是多少？正确答案是多少？`, ans: R`按错的算是 1，正确是 $2x$`, link: "知识点 定理 1" },
      { wrong: R`$\left(\dfrac uv\right)'=\dfrac{u'}{v'}$，或分子写成 $uv'-u'v$`, why: R`商法则分子是"上导乘下 − 上乘下导"，顺序反了差一个负号`, right: R`$\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$（教材 p83）`, test: R`$\left(\dfrac x{x+1}\right)'=$？`, ans: R`$\dfrac1{(x+1)^2}$`, link: "题型 8" },
      { wrong: R`$(\sin2x)'=\cos2x$`, why: R`漏乘内层 $2x$ 的导数`, right: R`复合函数要乘到最里层：$(\sin2x)'=2\cos2x$（教材 p87）`, test: R`$(\mathrm e^{-3x^2})'=$？`, ans: R`$-6x\mathrm e^{-3x^2}$（习题全解 p60）`, link: "题型 2" },
      { wrong: R`$[f(x^2)]'=f'(x^2)$`, why: R`$f'(x^2)$ 只是外层导数，还要乘内层导数`, right: R`$[f(x^2)]'=2xf'(x^2)$（习题全解 p63）`, test: R`$f(u)=u^3$：$f'(x^2)$、$[f(x^2)]'$ 各是多少？`, ans: R`$3x^4$；$6x^5$`, link: "题型 3" },
      { wrong: R`$f'(x)=\arctan x^2$，$y=f(g(x))$，求 $y'(0)$ 时把 $x=0$ 直接代进 $\arctan x^2$`, why: R`$f'$ 要在内层的值 $g(0)$ 处取值`, right: R`先算 $g(0)$，再求 $f'(g(0))$（吉米【168】p49）`, test: R`$g(x)=\dfrac{3x-2}{3x+2}$，$f'(g(0))$ 是 $f'(0)$ 吗？`, ans: R`不是，是 $f'(-1)=\frac\pi4$`, link: "题型 3" },
      { wrong: R`$(2^x)'=x\cdot2^{x-1}$`, why: R`把指数函数当成幂函数`, right: R`$(a^x)'=a^x\ln a$；底是常数、指数是变量才是指数函数（教材 p90）`, test: R`$(2^x)'$ 和 $(x^2)'$ 各是多少？`, ans: R`$2^x\ln2$；$2x$`, link: "知识点 16 个公式" },
      { wrong: R`$(x^x)'=x\cdot x^{x-1}$ 或 $x^x\ln x$`, why: R`$x^x$ 底和指数都是变量，既不是幂函数也不是指数函数`, right: R`写成 $x^x=\mathrm e^{x\ln x}$ 再用链式法则：$(x^x)'=x^x(\ln x+1)$（30讲 例4.12 p129）`, test: R`$x^x$ 在 $x=1$ 处的导数是多少？`, ans: R`1`, link: "题型 2" },
      { wrong: R`反函数求导后保留 $\dfrac1{\cos y}$，或 $\cos y$ 开方取了负号`, why: R`结果要写成 $x$ 的函数；符号由 $y$ 的取值范围决定`, right: R`$y\in\left(-\frac\pi2,\frac\pi2\right)$ 时 $\cos y>0$，$\cos y=\sqrt{1-x^2}$（教材例 6 p86）`, test: R`$x=\sin y$，$y\in\left(-\frac\pi2,\frac\pi2\right)$，$\cos y$ 用 $x$ 怎么写？`, ans: R`$\sqrt{1-x^2}$（取正）`, link: "题型 7" },
      { wrong: R`$f$ 与 $g$ 互为反函数，$g'(y_0)=\dfrac1{f'(y_0)}$`, why: R`倒数要在对应点取：$x_0$ 满足 $f(x_0)=y_0$`, right: R`$g'(y_0)=\dfrac1{f'(x_0)}$（18讲 p41）`, test: R`$f(x)=\mathrm e^x+2x+1$，$g'(2)$ 等于 $\frac1{f'(2)}$ 吗？`, ans: R`不等于，$g'(2)=\frac1{f'(0)}=\frac13$`, link: "题型 7" },
      { wrong: R`$\lim\limits_{x\to x_0}f'(x)$ 不存在，所以 $f'(x_0)$ 不存在`, why: R`$f'(x_0)$ 由定义决定，和导函数在附近有没有极限是两回事`, right: R`分段点的导数用定义求（吉米【176】点评 p51；18讲 p29–30）`, test: R`$f(x)=x^2\sin\frac1x\ (x\neq0)$，$f(0)=0$：$f'(0)$ 存在吗？`, ans: R`存在，$f'(0)=\lim x\sin\frac1x=0$（习题全解 p56）`, link: "题型 6" },
      { wrong: R`$f$ 处处可导，所以导函数 $f'$ 处处连续`, why: R`导函数可以在某点振荡没有极限`, right: R`可导 ⇏ 导函数连续；要判断就比较 $\lim f'(x)$ 和 $f'(x_0)$（18讲 p29）`, test: R`$x^2\sin\frac1x$（补充 $f(0)=0$）的导函数在 0 处连续吗？`, ans: R`不连续：$x\neq0$ 时 $f'(x)=2x\sin\frac1x-\cos\frac1x$，$x\to0$ 时没有极限`, link: "题型 6" },
      { wrong: R`内层（或外层）在某点不可导，复合函数在该点就不可导`, why: R`链式法则只是充分条件`, right: R`先写出复合函数的表达式再判断（武忠祥 p68）`, test: R`$f$、$g$ 如题型 11，$f(g(x))$ 在 0 处可导吗？`, ans: R`可导，导数为 0`, link: "题型 11" },
      { wrong: R`$u$ 在某点不可导，$uv$ 在该点就不可导`, why: R`四则法则只是充分条件`, right: R`$v$ 在该点为 0 时乘积可能可导（18讲 p31；2.1 题型 1）`, test: R`$x\cdot|x|$ 在 0 处可导吗？`, ans: R`可导，导数为 0`, link: "知识点 定理 1" },
      { wrong: R`分段点处用某一段的求导公式代值`, why: R`公式只在开区间内成立，分段点要看两侧`, right: R`分段点先查连续，再用定义求左右导数（30讲 p124）`, test: R`$f(x)=\begin{cases}x^2,&x\leqslant0\\x,&x>0\end{cases}$ 在 0 处可导吗？`, ans: R`连续，但左导数 0、右导数 1，不可导`, link: "题型 5" },
      { wrong: R`$(\ln|x|)'=\dfrac1{|x|}$`, why: R`$x<0$ 时 $[\ln(-x)]'=\frac{-1}{-x}=\frac1x$`, right: R`$(\ln|x|)'=\dfrac1x\ (x\neq0)$（30讲 p124）`, test: R`$(\ln|x|)'$ 在 $x=-2$ 处等于多少？`, ans: R`$-\frac12$`, link: "题型 10" },
      { wrong: R`$\sqrt{1-\frac1{x^2}}=\dfrac{\sqrt{x^2-1}}x$`, why: R`$\sqrt{x^2}=|x|$，$x<0$ 时差一个负号`, right: R`$\sqrt{1-\frac1{x^2}}=\dfrac{\sqrt{x^2-1}}{|x|}$；所以 $\left(\arccos\frac1x\right)'=\dfrac{|x|}{x^2\sqrt{x^2-1}}$（习题全解 p60）`, test: R`$\sqrt{x^2}$ 等于 $x$ 吗？`, ans: R`等于 $|x|$`, link: "题型 2" },
      { wrong: R`$\ln\sqrt{\dfrac{1-x}{1+x^2}}=\ln(1-x)-\ln(1+x^2)$`, why: R`漏了根号带来的系数 $\frac12$`, right: R`$=\dfrac12\ln(1-x)-\dfrac12\ln(1+x^2)$，化简后再求导（吉米【165】点评 p48）`, test: R`$y=\ln\sqrt{\dfrac{1-x}{1+x^2}}$，$y'(0)=$？`, ans: R`$-\frac12$`, link: "题型 1" },
      { wrong: R`$(uvw)'=u'vw+uv'w$（漏项）`, why: R`三个因子要轮流求导，每次只导一个`, right: R`$(uvw)'=u'vw+uv'w+uvw'$（教材 p84）`, test: R`$(x\mathrm e^x\sin x)'=$？`, ans: R`$\mathrm e^x\sin x+x\mathrm e^x\sin x+x\mathrm e^x\cos x$`, link: "知识点 定理 1" },
      { wrong: R`求 $f[f(x)]$ 在 $x=\mathrm e$ 处的导数，外层也用 $x\geqslant1$ 那一段`, why: R`外层在 $f(\mathrm e)=\frac12$ 处取值，$\frac12<1$`, right: R`先算内层的值，再判断外层落在哪一段（30讲 例4.3 p123）`, test: R`$f(\mathrm e)=\frac12$ 落在哪一段？`, ans: R`$x<1$ 的 $2x-1$ 段`, link: "题型 9" }
    ]
  });
})();
