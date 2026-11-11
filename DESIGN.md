---
name: 'DimplesY'
description: '开发者的编辑桌：安静、清晰、精确的个人写作空间。'
colors:
  'light-background': '#f7f9f5'
  'light-foreground': '#1a2c24'
  'light-sidebar': '#edf2e9'
  'light-muted': '#52645b'
  'light-accent': '#385f1c'
  'light-active': '#d8ecb7'
  'light-active-text': '#1d3416'
  'light-rule': '#cbd6cd'
  'light-code': '#eaf0e5'
  'light-hover': '#edf3e8'
  'light-syntax-comment': '#5c7062'
  'light-syntax-keyword': '#7945a7'
  'light-syntax-string': '#2c6734'
  'light-syntax-function': '#175f8b'
  'light-syntax-number': '#99521d'
  'light-syntax-property': '#8d3d53'
  'dark-background': '#132324'
  'dark-foreground': '#e6eee8'
  'dark-sidebar': '#0c1b1c'
  'dark-muted': '#a6b9b1'
  'dark-accent': '#c6ea81'
  'dark-active': '#c6ea81'
  'dark-active-text': '#162721'
  'dark-rule': '#344546'
  'dark-code': '#0e1d1e'
  'dark-hover': '#1b2d2c'
  'dark-syntax-comment': '#91a69b'
  'dark-syntax-keyword': '#c7a6e8'
  'dark-syntax-string': '#c6ea81'
  'dark-syntax-function': '#87cddd'
  'dark-syntax-number': '#ecc488'
  'dark-syntax-property': '#e3a1b0'
typography:
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: '38px'
    fontWeight: 550
    lineHeight: 1.4
    letterSpacing: '-1px'
  reading-headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 'clamp(29px, 3vw, 40px)'
    fontWeight: 550
    lineHeight: 1.45
    letterSpacing: '-1px'
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: '21px'
    fontWeight: 500
    lineHeight: 1.55
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: '17px'
    fontWeight: 400
    lineHeight: 1.95
  body-en:
    fontFamily: "Lora, Georgia, 'Times New Roman', serif"
    fontSize: '17px'
    fontWeight: 400
    lineHeight: 1.95
  summary:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: '14px'
    fontWeight: 400
    lineHeight: 1.8
  metadata:
    fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', monospace"
    fontSize: '13px'
    fontWeight: 400
    lineHeight: 1.8
rounded:
  'sm': '3px'
spacing:
  '2': '8px'
  '3': '12px'
  '4': '16px'
  '6': '24px'
  '10': '40px'
components:
  theme-toggle:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-foreground}'
    rounded: '{rounded.sm}'
    padding: '9px 12px'
  outline-link:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-foreground}'
    rounded: '{rounded.sm}'
    padding: '10px 15px'
  nav-active:
    backgroundColor: '{colors.dark-active}'
    textColor: '{colors.dark-active-text}'
    rounded: '{rounded.sm}'
    padding: '13px 14px'
  topic-current:
    textColor: '{colors.dark-accent}'
    padding: '18px 0'
  article-row:
    padding: '26px 0'
  code-block:
    backgroundColor: '{colors.dark-code}'
    textColor: '{colors.dark-foreground}'
    rounded: '{rounded.sm}'
    padding: '22px 24px'
---

# Design System: DimplesY

## Overview

**Creative North Star: "开发者的编辑桌"**

一个安静、清晰、精确的个人写作空间。深青墨底色承托文字，浅草绿标记当前位置与可进入的内容；浅色主题则像雾白纸上的绿墨。路径式面包屑、等宽日期、品牌尾部的下划线共同传达开发者气质，中文排版保留温度。

整体平面、细线分区，组件克制。文章索引依靠列对齐与横向分隔线组织信息，长文依靠有限行宽、宽松行距和清晰标题层级组织阅读。空白是布局的一部分，内容较少时无需填满屏幕。

本文记录当前实现，不代表重新设计。依据为 app/globals.css、app/layout.tsx、app/page.tsx、app/articles/[slug]/page.tsx 与 components/ 下的导航、主题切换、Markdown 组件；已查看首页的深浅主题及移动端首页、关于页。上方 token 是现有样式的文档映射，未接入运行时代码；以源代码为更新依据。颜色以 light-/dark- 前缀区分主题，组件 token 默认展示深色，运行时通过 CSS 变量切换整组角色。

**Key Characteristics:**

- 深青墨与雾白纸双主题，绿色承担主要强调。
- 系统中文无衬线字体搭配等宽的路径、编号与日期。
- 桌面侧栏与平面文章索引；移动端横向导航与纵向条目。
- 细分隔线、微圆角、短促状态反馈，无悬浮卡片层级。

## Colors

绿色带有低调的自然感，强调色服务于方向与阅读，代码高亮色仅在代码中承担语法角色。

### Primary

- **浅草绿 / 绿墨**：对应 dark-accent / light-accent，用于品牌下划线、首页标题句点、当前主题、文章链接、引用竖线、键盘焦点和索引首条标题。
- **选中底色与墨色**：对应各主题的 active / active-text，用于桌面当前导航项和文本选区。深色主题的 accent 与 active 相同，浅色主题的强调文字与选中底色分离。

### Neutral

| 角色后缀   | 视觉名称与用途                                |
| ---------- | --------------------------------------------- |
| background | 深青墨 / 雾白纸：页面主画布                   |
| sidebar    | 更深青墨 / 浅灰绿纸：侧栏分区                 |
| foreground | 雾白文字 / 深绿墨：主要内容                   |
| muted      | 灰绿文字：摘要、日期、面包屑、辅助信息        |
| rule       | 灰绿细线：列头、文章行、导航、页眉与页脚边界  |
| code       | 深墨代码底 / 淡绿代码纸：代码和表头的局部层次 |
| hover      | 轻微提亮 / 浅绿染色：导航及主题按钮悬停       |

颜色的精确值见 frontmatter。语法颜色对应 syntax-comment、syntax-keyword、syntax-string、syntax-function、syntax-number、syntax-property；操作符和标点复用 muted。不要将语法用紫、蓝、粉等颜色扩展成常规 UI 强调色。

**The Semantic Pair Rule.** 使用前景、背景和交互状态的同主题配对；新增样式引用现有语义变量，不将深色主题的浅草绿直接用于浅色正文链接。

## Typography

**Display / Body Font:** 系统无衬线字体栈，中文优先系统可用的苹方与微软雅黑。没有独立展示字体；英文正文使用下述衬线字体。

**Label / Mono Font:** SFMono-Regular、Consolas、Liberation Mono、monospace，用于面包屑、索引编号、日期及代码；主题名称、标签与按钮仍使用无衬线字体。

**English Body Font:** 标记为 `lang: en` 的文章正文使用 Lora（body-en），字号和行距沿用 body，移动端同样缩为 16px。通过 `next/font/google` 提供常规与斜体可变字体，构建时下载并由本站托管，使用 swap 显示策略。关闭预加载，仅在英文正文实际使用时加载。正文内标题仍使用系统无衬线，代码仍使用等宽字体。中文文章及其中穿插的英文保留无衬线；未标记语言时默认 `zh-CN`。

字重温和，标题主要通过字号、留白与少量字距收紧形成层级。frontmatter 的 headline 对应首页标题，reading-headline 对应文章标题，body 对应文章正文，并非全站所有文字的基础字号。

| 层级                       | 应用与响应变化                                                      |
| -------------------------- | ------------------------------------------------------------------- |
| 首页标题                   | 桌面使用 headline；移动端缩为 30px，保留强调句点                    |
| 文章标题                   | 使用 reading-headline；移动端固定 30px，支持平衡换行与长词断行      |
| 索引条目标题               | 使用 title；移动端 20px，整段可换行                                 |
| 文章正文                   | 使用 body；移动端 16px，行高仍为 1.95                               |
| 正文二级 / 三级 / 四级标题 | 26 / 22 / 19px，字重 550、行高 1.5；二级标题移动端 24px             |
| 摘要与辅助文字             | 索引摘要用 summary；文章导语为 16px / 1.9；导航与元信息多为 13–14px |
| 品牌                       | 25px、字重 650、字距 -1px；移动端 24px                              |
| 代码                       | 正文字号的 0.85 倍，等宽字体、行高 1.8                              |

**The Quiet Hierarchy Rule.** 保持正文宽松、辅助文字收敛，延续现有的中等字重层级；不要把导航或日期提升为大号展示文字。

## Layout

- **桌面框架**：两列，侧栏宽 242px，其余空间自适应；侧栏贴顶粘滞、高度 100vh。工作区左右内边距为 clamp(28px, 4vw, 58px)，内容允许收缩。页眉高 91px，页脚以自动上外边距推至剩余空间底部。
- **索引**：页标题区域上下内边距为 47px / 30px；索引列为编号 48px、弹性标题摘要、主题 108px、日期 112px。条目使用竖向内边距，摘要与标题间隔 11px；不做卡片网格。
- **阅读栏**：宽度 100%、最大 760px，在工作区内居中；顶部间隔 36px、底部 58px。段落、列表、引用、代码块和表格上下间距 24px；小标题外边距为 40px 0 18px。
- **常用节奏**：frontmatter 保留复用的 8 / 12 / 16 / 24 / 40px 步长。实现还包含场景专用值，不应强行量化为整齐的全局栅格。

### Responsive behavior

| 范围 | 当前行为 |
| --- | --- |
| 大于 1100px | 完整侧栏与四列索引 |
| 701–1100px | 侧栏 210px，左右内边距 22px；索引隐藏主题列，列宽改为 36px、弹性标题、100px 日期 |
| 不大于 700px | 框架转为纵向；侧栏变顶部导航，左右 24px，隐藏品牌说明与侧栏底部 RSS；当前项改为透明底、绿色文字与底部细线 |
| 不大于 700px | 工作区左右 24px，页眉高 60px；隐藏索引列头，条目改为 27px 编号加弹性标题，日期放在标题下方；箭头常显 |
| 不大于 700px | 首页标题区缩为 25px 0 12px，说明隐藏；主题导航允许换行；阅读栏顶部间隔 28px；代码块内边距 17px；隐藏页脚 GitHub 链接 |

**The Reading Width Rule.** 索引利用工作区宽度，文章正文保留最大阅读栏；长代码和表格在自身容器内横向滚动，不撑宽整个页面。

## Elevation & Depth

当前系统没有投影式海拔层级。结构主要由 sidebar、background、code 等色面和 1px 分隔线表现；悬停仅轻微改变底色、文字或边框。移动导航的选中下划线使用 inset box-shadow 实现，它是一条状态线，不是浮起阴影。

**The Flat Surface Rule.** 延续平面关系，用细线与色调变化区分区域；不要为现有文章条目添加投影、玻璃模糊或浮起卡片。

## Shapes

导航项、主题按钮、订阅链接、行内代码和代码块共享微圆角 sm。大面积页面分区保持直线边缘；边框通常为 1px，选中指示线为 2px。主题按钮图案是小圆形的半实心符号，属于功能图标，不构成胶囊组件体系。

## Components

### Navigation

桌面主导航纵向排布，间隔 9px，距品牌区域 61px。普通项使用 muted，悬停切为正文色和 hover 底色；当前项使用 active / active-text，并显示方向箭头。移动端横排、间隔 20px，当前项改为强调文字和底部 2px 状态线。保持 aria-current 与视觉选中状态一致。

### Theme toggle / Outline link

主题切换为透明底、细边框、微圆角按钮，最小宽度 110px，内部图案与文字间隔 10px。悬停时边框变强调色并出现 hover 底色；客户端尚未挂载时禁用并降低至 0.6 不透明度。移动端最小宽度 94px，内边距 8px 9px。

RSS 订阅为描边链接，文字与箭头间隔 14px，悬停边框和文字变为强调色；移动端内边距 8px 12px。当前项目没有通用实心主按钮、表单输入框、弹窗或独立卡片组件，不应从文档推断这些组件已存在。

### Topic tabs

以文本主题链接实现筛选，默认 muted，当前项与悬停使用 accent；当前项底部显示 2px 细线。桌面间隔 27px，移动端 24px；允许换行，不使用胶囊标签。当前链接保持 aria-current。

### Article index row

由编号、标题摘要、主题文字与日期组成，以底部分隔线串联。首条标题始终用强调色；其他标题悬停时强调。桌面箭头在标题悬停或键盘聚焦时由左侧 3px 偏移淡入，移动端常显。主题是文字链接，不是带底色标签。

### Markdown reading

正文链接常显强调色和下划线，下划线偏移 4px。引用以强调色的 2px 左边线、24px 左侧留白和 muted 文字呈现。代码使用 code 底色、rule 边框与微圆角，保留空白与独立横向滚动；语法高亮由主题变量驱动。表格采用底部分隔线、12px 16px 单元格内边距、代码底色表头，外层提供可聚焦的横向滚动区域。图片等比缩放、居中、不超出正文。

### Empty state / Footer

空状态和 404 直接在页面上排版，以简短标题、说明与返回文字链接引导，不使用插画或浮层。页脚与正文之间有细线，品牌和一句说明左对齐，桌面外链位于右侧。

### Interaction & accessibility

- 链接、按钮及可聚焦滚动区域使用 2px accent 焦点轮廓，偏移 5px；保留「跳到正文」链接及图标的可访问名称。
- 常规文字、边框、背景、箭头过渡为 180ms；按钮和文字链接按下时向下移动 1px，变换用时 100ms。
- 页面进入采用 300ms 淡入与上移复位（初始向下 5px），缓动为 cubic-bezier(0.2, 0.7, 0.2, 1)。
- 尊重 prefers-reduced-motion：停用动画和过渡，平滑滚动恢复为普通滚动。主题切换通过 next-themes 禁用切换过程的过渡；默认深色，不跟随系统。

## Do's and Don'ts

### Do:

- **Do** 使用现有语义色变量，同时维护深色与浅色主题。
- **Do** 保留列对齐、细线分区及正文最大阅读栏，让内容建立层级。
- **Do** 将路径、编号、日期和代码交给等宽字体，中文阅读交给系统无衬线字体。
- **Do** 同步维护悬停、键盘焦点、当前项和减少动态效果的状态。
- **Do** 根据实际内容隐藏次要列、调整日期位置，延续现有移动端行为。

### Don't:

- **Don't** 将文章索引改成带投影的大圆角卡片，或用装饰填满空白。
- **Don't** 将代码语法色扩展为全站 UI 配色，或混用两个主题的前景背景。
- **Don't** 隐藏键盘焦点，或让长代码、长链接与表格撑宽页面。
- **Don't** 将本文未实现的表单、弹窗和按钮变体视为既有组件规范。
