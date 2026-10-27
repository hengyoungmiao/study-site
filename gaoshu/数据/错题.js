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
  }
]);
})();
