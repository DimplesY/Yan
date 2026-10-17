# DimplesY 的博客

Next.js 博客，采用「开发者索引」设计，支持亮色与暗色模式，使用 Markdown 文件发表文章。

## 本地运行

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
- 文件名就是 URL：上面的文章地址为 `/articles/hello-world`。文件名建议使用英文小写和短横线。
- 首页按日期倒序展示，支持按主题筛选。所有文章自动进入 `/rss.xml`。
- 图片放进 `public/images/`，引用方式为 `![说明](/images/photo.jpg)`。
- `pnpm dev` 下可直接预览修改。提交文件并按现有流程重新部署后，即公开发表。修改或删除同样需要重新部署。
- `content/articles/` 是公开内容目录，不支持草稿；未准备发布的内容请放在目录外。保留文章文件名可避免旧链接失效。
- Markdown 中的 HTML 不执行；代码块支持语法高亮，在开头的三个反引号后标注语言（如 `typescript`、`python`、`rust`），颜色跟随亮暗主题。未标注或不支持的语言按纯文本显示。
- 探索页面中的文章拟稿不作为正式文章发布。
- 无效的元数据会在服务端日志中报告，该文件不进入文章列表；对应 URL 返回 404。

## 关于我

“关于我”导航跳转到 `/articles/about`，介绍内容保存在 `content/articles/about.md`，可直接用 Markdown 修改。它与其他文章一样出现在文章索引和 RSS 中。

## 检查

```sh
pnpm exec tsc --noEmit
pnpm lint
pnpm exec tsx --test tests/articles.test.ts tests/markdown-code.test.tsx
```

## 设计探索

三种方向的离线对比页：`design/oil-ui/round-01/style-explorer.html`。

重新生成候选首屏（Python 3.10+）：

```sh
python3 design/oil-ui/round-01/generate.py
```

对比页使用 Oil UI skill 自带的 `build_explorer.py` 从 `manifest.json` 生成，不是项目运行依赖。方向选择、参考截图与视觉验证记录见该目录下的 `DESIGN.md`。
