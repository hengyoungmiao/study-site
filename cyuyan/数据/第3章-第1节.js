/*
类型: 题型
标题: C语言 第3章 第1节 本章引例 —— 知识点和例题代码
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-21
状态: 完成

页码一律是印刷页。教材 =《新编C语言程序设计》第2版（钱雪忠等）；辅导 =《新编C语言程序设计实验与学习辅导》第2版。
本文件所有程序都用 gcc -Wall -Wextra -std=c17 实际编译运行过，输出以实测为准。
写法：字符串用 R`...`（String.raw）。里面不能放反引号，所以代码块写 ~~~c ... ~~~，行内代码写 ‹x›。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "3.1",
    chapter: 3,
    title: "本章引例",
    pages: "教材 p32–33",
    sources: ["教材 3.1 p32–33（例3-1）", "辅导 实验3 p45"],
    updated: "2026-10-29",
    exam: "四套卷（2014、2015、2017、2018）没有直接考引例；它用到的字符运算在 3.6、3.8 考。",

    points: [
      {
        group: "一、一个程序的三段布局",
        items: [
          {
            id: "p1", kind: "结论", name: "程序 = 数据结构 + 算法，程序分三段", page: "教材 p32",
            body: R`数据结构就是不同类型的数据表示，是算法要加工的对象；每个程序先要把用到的数据定义清楚。例3-1 的 ‹main› 函数体按先后分成三段：①变量定义段，②数据运算处理段，③结果输出段。`,
            notes: [
              R`编写程序的目标：对不同类型的数据，用算法加工后输出正确结果（p32）`,
              R`第4章小结把它说得更完整：变量类型定义 → 变量赋值或输入 → 数据运算或处理 → 结果输出（p87）`
            ],
            quiz: R`一个最简单的 C 程序，函数体里通常依次做哪几件事？`
          },
          {
            id: "p2", kind: "结论", name: "例3-1 用到的几样东西", page: "教材 p32–33",
            body: R`例3-1 一次用到了：预处理命令 ‹#include›、‹#define›（符号常量 PI）；字符、整型、单精度、双精度四种变量；算术运算、强制类型转换 ‹(float)side›、位运算 ‹side>>2^radius›；用 ‹sizeof› 查看类型和变量占的字节数。后面几节会把这些一个个讲清楚。`,
            notes: [
              R`‹c2=c1+3› 是字符加整数：字符参与运算时用的是它的 ASCII 码，所以 ‹'a'+3› 得 ‹'d'›（p32）`,
              R`‹c3=c1-32› 把小写字母转成大写：大小写字母的 ASCII 码相差 32（p32）`
            ],
            quiz: R`为什么 ‹'a'-32› 得到的是 ‹'A'›？`
          }
        ]
      },
      {
        group: "二、sizeof 运算符",
        items: [
          {
            id: "p3", kind: "定义", name: "sizeof：求类型或变量占的字节数", page: "教材 p32–33、p39–40",
            body: R`‹sizeof(类型名)› 或 ‹sizeof(变量或表达式)› 得到它占用的字节数。例3-1 用它输出 ‹char›、‹int›、‹double›、‹float› 和各变量占的字节数，帮助认识不同类型的内存分配。`,
            notes: [
              R`教材用 ‹%d› 输出 ‹sizeof› 的值；‹sizeof› 的结果类型是 ‹size_t›，64 位 gcc 下更严谨的写法是 ‹%zu›，或先强转 ‹(int)sizeof(x)›（推断：依据是 gcc 对 ‹%d› 配 ‹sizeof› 给出格式警告）`,
              R`在 gcc（Windows 64 位）实测：‹char›=1，‹short›=2，‹int›=4，‹long›=4，‹long long›=8，‹float›=4，‹double›=8；教材用 VC++2010 的结果与此基本相同（p39–40）`
            ],
            quiz: R`‹sizeof(c1)› 和 ‹sizeof(char)› 的值相同吗？为什么？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", kind: "读程序", nocheck: "程序段，不是完整程序", name: "读引例程序：字符运算和位运算的结果",
        signal: R`程序里有 ‹char› 变量参与加减、有 ‹>>› ‹^› 等位运算，要求写出输出`,
        example: {
          q: R`写出下面程序段的输出：
~~~c
char c1 = 'a', c2, c3;
int radius = 2, side = 4, xor;
c2 = c1 + 3;
c3 = c1 - 32;
xor = side >> 2 ^ radius;
printf("%c %c %d\n", c2, c3, xor);
~~~`,
          src: "教材 例3-1 p32–33"
        },
        idea: {
          key: R`字符运算按 ASCII 码算；位运算先查优先级，再把数写成二进制逐位算。`,
          how: [R`字符：把字符换成 ASCII 码做整数运算，输出时按 ‹%c› 还原成字符`, R`位运算：‹>>› 的优先级高于 ‹^›，先移位再异或`, R`异或：相同位得 0，不同位得 1，写成二进制竖着算`],
          refs: [
            { src: "教材 p32", text: R`位操作：side>>2 结果为 1，"1^2" 结果为 3，即 0001^0010=0011；a 后面第 3 个字母赋值给 c2，a 转成大写字母赋给 c3` }
          ]
        },
        first: R`‹'a'› 的 ASCII 码是 97，大小写字母相差 32`,
        steps: [
          R`‹c2 = 'a' + 3› = 100，对应字符 ‹'d'›；‹c3 = 'a' - 32› = 65，对应字符 ‹'A'›`,
          R`‹side >> 2›：4 的二进制 100 右移 2 位得 1；再与 ‹radius›=2 异或：01 ^ 10 = 11，即 3`,
          R`输出：‹d A 3›（gcc 实测）`
        ],
        pitfall: R`把 ‹side >> 2 ^ radius› 看成先异或：‹>>› 优先级高于 ‹^›，必须先移位`,
        practice: "教材 例3-1（p32–33）；辅导 实验3「程序运行」p45"
      }
    ],

    pitfalls: [
      { wrong: R`‹printf("%d", sizeof(int))› 在任何平台上都是对的`, why: R`‹sizeof› 的结果是 ‹size_t›，在 64 位平台上比 ‹int› 宽，用 ‹%d› 属于类型不匹配`, right: R`写 ‹printf("%zu", sizeof(int))›，或 ‹printf("%d", (int)sizeof(int))›`, test: R`用 gcc -Wall 编译 ‹printf("%d\n", sizeof(int));› 会怎样？`, ans: R`gcc 给出 ‹-Wformat› 警告：‹%d› 需要 ‹int›，实际是 ‹long long unsigned int›（Windows 64 位）；输出恰好是 4，但写法不规范`, link: "知识点 sizeof" },
      { wrong: R`‹side>>2^radius› 是先 ‹2^radius›`, why: R`移位运算符的优先级高于按位异或`, right: R`先 ‹side>>2›，再与 ‹radius› 异或`, test: R`‹int side=4, radius=2;› ‹side>>2^radius› 等于多少？`, ans: R`3：先 4>>2=1，再 1^2=3`, link: "题型 1" },
      { wrong: R`‹'a'-32› 得到的是一个数，不再是字符`, why: R`C 里字符本来就是整数（ASCII 码），‹'a'-32› 的值是 65，按 ‹%c› 输出就是 ‹A›，按 ‹%d› 输出就是 65`, right: R`输出时由格式符决定看成字符还是整数`, test: R`‹printf("%c %d", 'a'-32, 'a'-32);› 输出什么？`, ans: R`‹A 65›`, link: "知识点 例3-1 用到的几样东西" }
    ]
  });
})();
