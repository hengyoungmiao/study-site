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
  }
]);
})();
