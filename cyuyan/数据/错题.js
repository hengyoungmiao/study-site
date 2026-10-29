/*
错题区的题目。录入方法见 cyuyan/说明.md「往错题区加一道题」（和 gaoshu/说明.md 相同）。
编号 id 只增不改（自评记录按 "w/编号" 存）；新题加在数组最后。
2026-10-30 从学习仓库 学习档案/错题/C语言-错题本.md 迁来 E1–E9、E11（E10 已撤销；E12 是答题习惯，不是题，留在原文件）。
代码写法和数据文件相同：行内代码 ‹x›，代码块 ~~~c … ~~~。
*/
(function () {
  const R = String.raw;
  KB.addWrong([
  {
    id: 1, created: "2026-09-21", chapter: 1, section: "1.4",
    source: "上机 ex1.c 2026-09-21（原 E1）", cause: "语法",
    data: {
      title: R`用 ‹printf› 忘了写 ‹#include <stdio.h>›`,
      stem: R`下面的程序能不能通过编译？为什么？
~~~c
int main(void)
{
    printf("Hello\n");
    return 0;
}
~~~`,
      mine: R`整个 include 行都没写，以为直接 ‹printf› 就能用。`,
      where: R`‹printf› 的函数原型在 ‹stdio.h› 里，不包含头文件，编译器不知道 ‹printf› 是什么。`,
      key: R`**用了库函数，就要包含它的头文件**：‹printf›、‹scanf›、‹getchar›、‹putchar› 在 ‹stdio.h›。`,
      see: R`看到程序里有 ‹printf›、‹scanf›，先找第一行有没有 ‹#include <stdio.h>›。`,
      ans: R`gcc ‹-std=c17› 下报 ‹implicit declaration of function 'printf'›，是编译错误。教材说「printf、scanf 可以省略包含命令」是 C89 的老规则（教材 p8）：考试按书答，自己写代码一律写上 include。`,
      links: ["1.4/p3"]
    }
  },
  {
    id: 2, created: "2026-09-21", chapter: 1, section: "1.5",
    source: "改错练习 2026-09-21（原 E2）", cause: "语法",
    data: {
      title: R`‹include› 前面漏了 ‹#›`,
      stem: R`找出错误：‹include<stdio.h>›`,
      mine: R`没发现少了 ‹#›。`,
      where: R`‹#› 是预处理命令的标志，没有它，编译器把 ‹include› 当成普通标识符。`,
      key: R`**预处理命令都以 ‹#› 开头，末尾不加分号**。`,
      see: R`看到 ‹include›、‹define›，先看前面有没有 ‹#›。`,
      ans: R`应为 ‹#include <stdio.h>›。少了 ‹#› 时 gcc 报 ‹expected '=', ',', ';' … before '<' token›：报错说的是「编译器以为你在干什么」，先看行号和 ‹^› 指的位置。`,
      links: ["1.4/p3", "1.5/t3"]
    }
  },
  {
    id: 3, created: "2026-09-21", chapter: 1, section: "1.4",
    source: "上机 ex1.c 2026-09-21（原 E3）", cause: "语法",
    data: {
      title: R`‹printf› 的文字用了单引号`,
      stem: R`找出错误：‹printf('Hello,world!\n');›`,
      mine: R`用单引号括了整句话。`,
      where: R`单引号只能括一个字符，字符串要用双引号。`,
      key: R`**‹'A'› 是一个字符，‹"A"› 是字符串；‹printf› 的格式控制串必须用双引号**。`,
      see: R`看到单引号里不止一个字符（转义字符 ‹'\n'› 算一个），就是错的。`,
      ans: R`应为 ‹printf("Hello,world!\n");›。gcc 报 ‹multi-character literal›，就是在说单引号里装了多个字符（教材 3.6）。`,
      links: ["1.4/p5"]
    }
  },
  {
    id: 4, created: "2026-09-21", chapter: 1, section: "1.4",
    source: "教材 习题一 第1题（原 E4）", cause: "概念不清",
    data: {
      title: R`程序从哪里开始、到哪里结束`,
      stem: R`一个 C 程序有 5 个函数，‹main› 是第 3 个。程序从哪里开始执行、到哪里结束？`,
      mine: R`答「从第 3 个开始，到第 5 个结束」。`,
      where: R`以为程序要一路执行到文件里最后一个函数。`,
      key: R`**从 ‹main› 开始，‹main› 执行完就结束**；别的函数只有被调用才执行。`,
      see: R`选项里出现「到本程序文件的最后一个函数结束」，是标准陷阱。`,
      ans: R`从 ‹main› 函数开始执行，到 ‹main› 函数结束。第 4、5 个函数如果没被 ‹main› 调用，一次也不执行（教材 p11）。`,
      links: ["1.4/p2", "1.4/e1"]
    }
  },
  {
    id: 5, created: "2026-09-21", chapter: 1, section: "1.5",
    source: "课后自测 2026-09-21（原 E5；9/22 答对一次）", cause: "语法",
    data: {
      title: R`哪些后面不能加分号`,
      stem: R`① ‹#include <stdio.h>›　② ‹int main(void)›　③ ‹printf("hi\n")›　④ 函数体最后的 ‹}›。哪些后面不能加分号？`,
      mine: R`答「①②」，漏了 ④。`,
      where: R`漏了右花括号。`,
      key: R`**语句以分号结尾；预处理命令、函数头、花括号 ‹}› 之后不加分号**。`,
      see: R`问「哪些不加分号」，按三类逐个对：预处理命令、函数头、‹}›。`,
      ans: R`①②④ 不能加；③ 是语句，必须加分号（教材 1.5.1 第 (5) 条，p11）。`,
      links: ["1.5/p2", "1.5/t3"]
    }
  },
  {
    id: 6, created: "2026-09-21", chapter: 1, section: "1.5",
    source: "上机 ex1.c 2026-09-21（原 E6）", cause: "执行过程推错",
    data: {
      title: R`‹\t› 放错位置`,
      stem: R`要输出三行：‹name: "wu"›、‹age:›（制表符）‹19›、‹C is fun!›。写出 ‹printf› 语句。`,
      mine: R`写成 ‹"name: \"wu\"\n\tage: 19\n\tC is fun!\n"›，制表符跑到了第 2、3 行的行首。`,
      where: R`以为 ‹\t› 是「给这一行加缩进」。`,
      key: R`**‹printf› 从左到右一个字符一个字符输出，‹\t› 在哪个位置，制表就发生在哪个位置**。`,
      see: R`读输出题时，在纸上跟着格式串逐个字符写，遇到 ‹\n› 换行、‹\t› 跳到下一个制表位。`,
      ans: R`‹printf("name: \"wu\"\nage:\t19\nC is fun!\n");›（转义字符表见教材 表1-1，p12）`,
      links: ["1.5/p4"]
    }
  },
  {
    id: 7, created: "2026-09-22", chapter: 1, section: "1.5",
    source: "课后自测 2026-09-22（原 E7，三次重问，最后只剩 main）", cause: "概念不清",
    data: {
      title: R`哪些是关键字：‹main› 不是`,
      stem: R`‹int›、‹define›、‹sizeof›、‹printf›、‹const›、‹main›、‹stdio›、‹getchar›、‹else› 中，哪些是关键字？`,
      mine: R`第 3 次作答把 ‹main› 当成了关键字，还把 ‹printf› 说成「预处理命令字」。`,
      where: R`‹main› 后面能加括号，是函数名，不是关键字。`,
      key: R`**能加括号调用的（函数名）和头文件名一律不是关键字，是系统已定义标识符**；关键字全是小写，‹sizeof› 是关键字。`,
      see: R`不认识的词先问：它像不像函数名或头文件名？像，就不是关键字。`,
      ans: R`关键字：‹int›、‹sizeof›、‹const›、‹else›。不是关键字：‹define›（预处理命令字）、‹printf›、‹getchar›（库函数名）、‹main›（主函数名）、‹stdio›（头文件名），都是系统已定义标识符（教材 1.5.3，p12–13）。`,
      links: ["1.5/p7", "1.5/t1", "1.5/e1", "1.5/e3"]
    }
  },
  {
    id: 8, created: "2026-09-22", chapter: 1, section: "1.4",
    source: "改错练习 例1-1 2026-09-22（原 E8）", cause: "概念不清",
    data: {
      title: R`没写 ‹return 0› 不算错`,
      stem: R`改错题：‹main› 函数最后没有 ‹return 0;›，这算不算一处错误？`,
      mine: R`把「没有 return 值」当成一处错误报了。`,
      where: R`改错题多报假错一样扣分。`,
      key: R`**本书的 ‹main› 不利用返回值，省略 ‹return 0;› 也无妨，不是错误**。`,
      see: R`改错题只报真错：语法错误、结果不对的地方。`,
      ans: R`不算错。教材原文：「对于本书的 main 程序，都不再利用这个返回值，为此，常常省略这个 return 语句也无妨」（教材 例1-1，p7）。`,
      links: ["1.4/t1"]
    }
  },
  {
    id: 9, created: "2026-09-22", chapter: 1, section: "1.4",
    source: "改错练习 例1-2 2026-09-22（原 E9，9/25 重抽未作答）", cause: "语法",
    data: {
      title: R`‹printf› 参数之间的逗号`,
      stem: R`找出错误：‹printf("%d %d\n" a b);›`,
      mine: R`只找到格式控制串和参数之间缺的逗号，没找到 ‹a› 和 ‹b› 之间的。`,
      where: R`参数表里多个量之间也要用逗号隔开。`,
      key: R`**‹printf(格式控制串, 参数1, 参数2, …)›：串和参数之间、参数和参数之间都用逗号**。`,
      see: R`改 ‹printf›、‹scanf› 时数一数：格式符几个，后面就该有几个参数、几个逗号。`,
      ans: R`应为 ‹printf("%d %d\n", a, b);›，缺两个逗号（教材 例1-2，p8）。`,
      links: ["1.4/p5"]
    }
  },
  {
    id: 10, created: "2026-09-22", chapter: 1, section: "1.4",
    source: "课后自测 2026-09-22（原 E11）", cause: "概念不清",
    data: {
      title: R`变量为什么要先说明后使用`,
      stem: R`C 为什么规定变量要先说明后使用？这反映 C 属于哪一类语言？`,
      mine: R`答「C 语言面向过程」。`,
      where: R`答到了 C 和 C++ 的区别上。`,
      key: R`**先说明后使用是编译型语言的共同特点**，和解释型的 BASIC 不同。`,
      see: R`「C 和 C++ 的区别」答面向过程 vs 面向对象；「C 和 BASIC 的区别、为什么要先说明变量」答编译型 vs 解释型。`,
      ans: R`C 是编译型语言，编译阶段就要给变量分配内存、确定类型和运算规则，所以必须先说明（教材 例1-2 说明，p8）。`,
      links: ["1.4/p4"]
    }
  }
]);
})();
