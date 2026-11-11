# DimplesY 的博客

Next.js 博客，以「开发者的编辑桌」为设计主题，支持亮色与暗色模式，使用 Markdown 文件发表文章。

## 项目文档

- [DESIGN.md](DESIGN.md)：修改界面时查阅，记录配色、排版、布局、组件状态和响应式行为。
- [AGENTS.md](AGENTS.md)：agent 的任务入口，说明何时读取规范及如何验证改动。
- [.impeccable/design.json](.impeccable/design.json)：Impeccable 的组件预览与扩展数据；配合 DESIGN.md 更新，预览中的合成色阶不属于运行时 token。

## 本地运行

开发环境建议使用 Node.js 24；新版 lint-staged 要求至少 Node.js 22.22.1。

```sh
pnpm install
pnpm dev
```

打开终端显示的本地地址，通常为 http://localhost:3000 。

主题默认暗色，可通过顶部按钮切换到亮色。选择保存在浏览器中，刷新或打开文章时保留。

## 发表文章

在 `content/articles/` 新建 `.md` 文件，例如 `hello-world.md`：

```markdown
---
title: '你好，世界'
date: '2026-10-17'
description: '这篇文章的简短介绍。'
tags:
  - 随想
---

正文使用 Markdown。

## 小标题

支持列表、链接、图片、引用、代码块、表格和任务列表。
```

- `title`、`date` 必填；日期为 `YYYY-MM-DD`，建议加引号。`description`、`tags` 可省略。
- 英文文章添加 `lang: en`，正文使用通过 `next/font/google` 加载的 Lora 衬线字体；省略 `lang` 或填写 `lang: zh-CN` 时保留中文无衬线正文。标题、导航和代码字体不受影响；语言由作者标记，不自动检测。字体在构建时下载并由站点自托管，构建环境需要能访问 Google Fonts。
- 文件名就是 URL：上面的文章地址为 `/articles/hello-world`。文件名建议使用英文小写和短横线。
- 首页按日期倒序展示，支持按主题筛选。`/rss.xml` 输出最近文章的摘要，条数与站点信息由 [lib/rss-utils.ts](lib/rss-utils.ts) 中的默认配置控制。
- 图片放进 `public/images/`，引用方式为 `![说明](/images/photo.jpg)`。
- `pnpm dev` 下可直接预览修改。提交文件并按现有流程重新部署后，即公开发表。修改或删除同样需要重新部署。
- `content/articles/` 是公开内容目录，不支持草稿；未准备发布的内容请放在目录外。保留文章文件名可避免旧链接失效。
- Markdown 中的 HTML 不执行；代码块支持语法高亮，在开头的三个反引号后标注语言（如 `typescript`、`python`、`rust`），颜色跟随亮暗主题。未标注或不支持的语言按纯文本显示。
- 无效的元数据会在服务端日志中报告，该文件不进入文章列表；对应 URL 返回 404。

## 关于我

“关于我”导航跳转到 `/articles/about`，介绍内容保存在 `content/articles/about.md`，可直接用 Markdown 修改。它与其他文章一样出现在文章索引和 RSS 中。

## 检查

`tsc` 使用 TypeScript 7（`@typescript/native` 别名）；`typescript` 使用官方 TypeScript 6 API 兼容包，供 Next.js 和 ESLint 调用。两者按[官方并行安装方案](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0)配置。

```sh
pnpm exec tsc --noEmit
pnpm lint
pnpm exec tsx --test tests/articles.test.ts tests/markdown-code.test.tsx
```

涉及路由、元数据或 RSS 的改动，再运行 `pnpm build` 检查生产构建；可用脚本以 [package.json](package.json) 为准。
