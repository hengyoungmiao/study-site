# study-site

恆的学习网站，纯静态，部署在 Cloudflare Workers 静态资源（`wrangler.jsonc` 里 `assets.directory` 是仓库根目录，没有构建步骤）。

| 路径 | 内容 |
|---|---|
| `index.html` | 首页（以后改成个人主页） |
| `gaoshu/` | 高数知识网页；`gaoshu/说明.md` 写了怎么加一节 |

- 本仓库是网页的标准版本；学习仓库 `进度库/交互网页/高等数学/` 是备份，每次更新后同步。
- 加一节：在 `gaoshu/数据/` 放 `第N章-第M节.js`，在 `gaoshu/index.html` 的 `DATA_FILES` 加一行。
- 复习记录存在浏览器 localStorage（键 `gaoshu-kb-v1`），换域名会是空的，用页面右上角「记录」复制/导入。

- 个人记录（自评、总结、错题）在 `records` 分支，由网页和克提交；详见 `gaoshu/说明.md`。
