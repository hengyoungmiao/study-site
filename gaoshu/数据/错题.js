/*
错题区的题目。录入方法见 gaoshu/说明.md「往错题区加一道题」。
编号 id 只增不改（自评记录按 "w/编号" 存）；新题加在数组最后。
*/
(function () {
  const R = String.raw;
  KB.addWrong([
  {
    id: 1, created: "2026-10-27", chapter: 2, section: "2.3",
    source: "示例错题（出处待补）", teacher: false, cause: "计算",
    data: {
      title: R`$f(x)=x^2\sin 2x$，求 $f^{(20)}(\pi/2)$`,
      stem: R`设 $f(x)=x^2\sin 2x$，求 $f^{(20)}\left(\frac{\pi}{2}\right)$。`,
      mine: R`莱布尼茨公式展开后，第二项 $\mathrm C_{20}^1\,(x^2)'\,(\sin 2x)^{(19)}$ 的系数没算对，漏了 $\mathrm C_{20}^1\cdot 2x=40x$ 这个系数。`,
      where: R`第二项的系数：$\mathrm C_{20}^1=20$ 要乘上 $(x^2)'=2x$，合起来是 $40x$。`,
      key: R`**令 $u=\sin 2x$、$v=x^2$，用莱布尼茨公式只剩三项，再用 $(\sin 2x)^{(n)}=2^n\sin\left(2x+\frac{n\pi}{2}\right)$ 代点**，代 $x=\frac{\pi}{2}$ 后第一、三项为 0。`,
      see: R`看到「多项式 × 有 n 阶公式的函数」求高阶导，想到莱布尼茨公式，多项式次数决定只剩几项；只求某点的值就先代点看哪几项消失。`,
      ans: R`$$\begin{aligned}f^{(20)}(x)={}&x^2(\sin 2x)^{(20)}+\mathrm C_{20}^1\cdot 2x\,(\sin 2x)^{(19)}\\&+\mathrm C_{20}^2\cdot 2\,(\sin 2x)^{(18)}\end{aligned}$$
其中 $(\sin 2x)^{(n)}=2^n\sin\left(2x+\frac{n\pi}{2}\right)$（教材 例5 p95）。代 $x=\frac{\pi}{2}$，$2x=\pi$：
第一项 $\sin(\pi+10\pi)=0$；第三项 $\sin(\pi+9\pi)=0$；第二项 $\sin\left(\pi+\frac{19\pi}{2}\right)=1$。
$$f^{(20)}\left(\frac{\pi}{2}\right)=40\cdot\frac{\pi}{2}\cdot 2^{19}=10\cdot 2^{20}\pi$$`,
      variant: R`设 $f(x)=x^2\cos 2x$，求 $f^{(20)}(0)$。（这次是哪一项留下来？）`,
      variantAns: R`代 $x=0$ 后含 $x^2$、$2x$ 的项都为 0，只剩第三项：$\mathrm C_{20}^2\cdot 2\cdot 2^{18}\cos\left(0+9\pi\right)=-380\cdot 2^{18}=-95\cdot 2^{20}$。`,
      links: ["2.3/p8", "2.3/t8", "2.3/t9"]
    }
  },
  {
    id: 2, created: "2026-10-29", chapter: 2, section: "2.1",
    source: "老师补充 2026-10-29（课堂 例1）", teacher: true,
    data: {
      title: R`$f(x)=(x-a)\varphi(x)$，$\varphi$ 在 $a$ 处只连续，求 $f'(a)$`,
      stem: R`设 $f(x)=(x-a)\varphi(x)$，其中 $\varphi(x)$ 在 $x=a$ 处连续，求 $f'(a)$。`,
      where: R`陷阱在条件：题目只说 $\varphi$ 连续，!!没说可导!!。用乘积公式 $f'(x)=\varphi(x)+(x-a)\varphi'(x)$ 再代 $x=a$ 是错的，因为 $\varphi'(a)$ 可能不存在。`,
      key: R`**只给连续、没给可导，乘积求导公式用不了，只能用导数定义**；约掉 $x-a$ 后用连续性代值。`,
      see: R`看到「某个因子只知连续、不知可导」，想到乘积公式失效，回到导数定义 $f'(a)=\lim\limits_{x\to a}\dfrac{f(x)-f(a)}{x-a}$。`,
      ans: R`$f(a)=(a-a)\varphi(a)=0$。由导数定义（教材 p73）：
$$f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}=\lim_{x\to a}\frac{(x-a)\varphi(x)-0}{x-a}=\lim_{x\to a}\varphi(x)=\varphi(a)$$
最后一步的依据是 $\varphi$ 在 $x=a$ 处连续：$\lim\limits_{x\to a}\varphi(x)=\varphi(a)$（吉米【134】p39；30讲 习题3.5 注 p117）。`,
      variant: R`(1) 设 $f(x)=(x^2-a^2)\varphi(x)$，$\varphi$ 在 $x=a$ 处连续，求 $f'(a)$。(2) $g(x)=|x-a|\varphi(x)$ 在 $x=a$ 处什么时候可导？`,
      variantAns: R`(1) $f'(a)=\lim\limits_{x\to a}\dfrac{(x-a)(x+a)\varphi(x)}{x-a}=2a\varphi(a)$。(2) $g'_-(a)=-\varphi(a)$，$g'_+(a)=\varphi(a)$，可导 $\Leftrightarrow\varphi(a)=0$（2.1 题型 3）。`,
      links: ["2.1/t1", "2.1/e10", "2.1/t3", "c2-end/m15"]
    }
  },
  {
    id: 3, created: "2026-10-20", chapter: 1, section: "1.10",
    source: "课堂小测 2026-10-20", teacher: false, cause: "方法选择",
    data: {
      title: R`$f(x)=\lim\limits_{n\to\infty}\dfrac{x+x^2e^{nx}}{1+e^{nx}}$ 求连续区间`,
      stem: R`设 $f(x)=\lim\limits_{n\to\infty}\dfrac{x+x^2e^{nx}}{1+e^{nx}}$，求 $f(x)$ 的连续区间。`,
      mine: R`考场上紧张，没有分段讨论，没求出 $f(x)$ 的表达式（原卷没拍照）。`,
      where: R`第一步：$e^{nx}$ 当 $n\to\infty$ 时的极限取决于 $x$ 的符号，!!不分 $x>0$、$x<0$、$x=0$ 三段就求不出 $f(x)$!!。`,
      key: R`**由极限定义的函数，先按 $x$ 分段求出表达式，再看分界点**。`,
      see: R`看到 $\lim\limits_{n\to\infty}$ 里含 $x^n$、$e^{nx}$ 这类随 $x$ 变化趋向不同的项，想到按 $|x|$ 与 1、$x$ 与 0 的大小分段（1 章末 题型 26）。`,
      ans: R`$x>0$：分子分母同除以 $e^{nx}$，$f(x)=\lim\limits_{n\to\infty}\dfrac{xe^{-nx}+x^2}{e^{-nx}+1}=x^2$。
$x<0$：$e^{nx}\to0$，$f(x)=x$。
$x=0$：$f(0)=\dfrac{0+0}{1+1}=0$。
所以 $f(x)=\begin{cases}x,&x<0\\0,&x=0\\x^2,&x>0\end{cases}$。在 $x\neq0$ 处是初等函数，连续；在 $x=0$ 处 $\lim\limits_{x\to0^-}x=0$，$\lim\limits_{x\to0^+}x^2=0$，都等于 $f(0)$，也连续。
连续区间是 $(-\infty,+\infty)$。`,
      variant: R`设 $g(x)=\lim\limits_{n\to\infty}\dfrac{1+x}{1+x^{2n}}$，求间断点并判断类型。`,
      variantAns: R`$|x|<1$：$g=1+x$；$|x|>1$：$g=0$；$x=1$：$g=1$；$x=-1$：$g=0$。$x=1$ 处左极限 2、右极限 0，跳跃间断点；$x=-1$ 处左右极限都是 0、$g(-1)=0$，连续。`,
      links: ["c1-end/t26", "1.8/t4"]
    }
  },
  {
    id: 4, created: "2026-10-19", chapter: 1, section: "1.5",
    source: "网页自测 2026-10-19（教材 习题1-5 第5题，习题全解 p26–27）", teacher: false, cause: "概念不清",
    data: {
      title: R`「存在 ± 不存在」和「存在 × 不存在」的结论`,
      stem: R`判断对错并说明理由：(1) $\lim f$ 存在、$\lim g$ 不存在，则 $\lim(f+g)$ 不存在；(2) $\lim f$ 存在、$\lim g$ 不存在，则 $\lim fg$ 不存在。`,
      mine: R`总结成「只有加法且有存在极限的函数才可以判断」，把乘法一律当成不能判断。`,
      where: R`乘法要看存在的那个极限是不是 0：!!$\lim f\neq0$ 时乘积一定不存在!!，只有 $\lim f=0$ 时才不一定。`,
      key: R`**存在 ± 不存在 = 不存在；存在（且不为 0）× 不存在 = 不存在；极限为 0 乘不存在，结果不确定**。`,
      see: R`看到「一个存在、一个不存在」的组合，想到用反证：假设结果存在，再用四则运算把不存在的那个「解」出来。`,
      ans: R`(1) 对。若 $\lim(f+g)$ 存在，则 $g=(f+g)-f$ 的极限存在，矛盾。
(2) 错。$\lim f=A\neq0$ 时，若 $\lim fg$ 存在，则 $g=\dfrac{fg}{f}$ 的极限存在，矛盾，所以不存在；但 $A=0$ 时不一定，例如 $x\to0$ 时 $f=x$、$g=\sin\dfrac1x$，$\lim fg=0$ 存在。`,
      links: ["1.5/p7", "1.5/t7"]
    }
  }
]);
})();
