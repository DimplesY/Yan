"""Generate three independent, static first-screen studies from shared editorial content."""
import html
import json
from pathlib import Path

ROOT = Path(__file__).parent
DATA = {
    'name': 'DimplesY',
    'bio': '一个在长沙的全栈开发者，写代码，也记录技术之外的日常。',
    'articles': [
        {'title': '让个人博客回到写作本身', 'date': '2026.10.12', 'tag': '随想', 'desc': '折腾过框架、主题和部署之后，我开始重新思考：一个属于自己的博客，究竟需要留下什么。'},
        {'title': 'TypeScript 里，那些值得慢一点的类型', 'date': '2026.10.06', 'tag': 'TypeScript', 'desc': '从日常开发里遇到的小问题出发，把类型写得更准确，也让代码更容易被理解。'},
        {'title': '从一个小工具开始，重新理解 Rust', 'date': '2026.09.28', 'tag': 'Rust', 'desc': '与其读完一整本书，不如先做一个自己真正会用的命令行工具。'},
        {'title': '最近在 GitHub 上遇见的好东西', 'date': '2026.09.19', 'tag': '开源', 'desc': '一些想留下来的项目，以及它们为什么让我愿意打开编辑器，亲手试一试。'},
    ],
}
A = [{k: html.escape(v) for k, v in a.items()} for a in DATA['articles']]
BASE = '*{box-sizing:border-box}html,body{margin:0;min-width:1440px;width:100%;min-height:900px}body{font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3,p{margin:0}a{color:inherit;text-decoration:none}nav{display:flex;align-items:center;gap:32px}small{font-size:13px}'

def page(title, css, body):
    return f'<!doctype html>\n<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{title} · DimplesY</title><style>{BASE}{css}</style></head><body>{body}</body></html>\n'

# Each study has its own composition; only the content and browser reset are shared.
editorial = page('独立刊物', '''
body{background:#f5f2e9;color:#262820;padding:0 92px}.top{height:65px;border-bottom:1px solid #c7c5ba;display:flex;align-items:center;justify-content:space-between;font-size:14px}.top .place{color:#66675c}.top nav{gap:27px}.selected{color:#883e42}.masthead{height:163px;display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #262820}.wordmark{font-family:Georgia,serif;font-size:99px;letter-spacing:-7px;font-weight:400;line-height:1}.masthead p{font-family:"Songti SC",STSong,serif;font-size:21px;line-height:1.8}.masthead p small{display:block;font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif;font-size:13px;color:#65665a;margin-top:5px}.section{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #b9bbad;padding:17px 0;font-size:13px;letter-spacing:1px}.dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:#883e42;margin-right:9px}.main{display:grid;grid-template-columns:1.45fr 1fr;gap:48px;margin-top:35px}.lead{border-right:1px solid #c7c5ba;padding:0 48px 26px 0;position:relative}.meta{font-size:13px;color:#66675c;display:flex;gap:20px;align-items:center}.category{color:#883e42}.lead h1{font-family:"Songti SC",STSong,serif;font-weight:600;font-size:57px;line-height:1.45;letter-spacing:-1px;margin:23px 0 20px;max-width:570px}.lead p{font-size:16px;line-height:1.95;color:#53574b;max-width:480px}.read{display:inline-block;font-size:14px;margin-top:29px;border-bottom:1px solid #883e42;padding-bottom:6px;color:#883e42}.latest h2{font-size:14px;font-weight:500;margin-bottom:8px}.story{padding:22px 0;border-bottom:1px solid #c7c5ba}.story:last-child{border-bottom:0}.story h3{font-family:"Songti SC",STSong,serif;font-size:24px;line-height:1.55;font-weight:600;margin:8px 0}.story .meta{font-size:13px}.story p{font-size:14px;line-height:1.7;color:#626559}.footer{margin-top:32px;border-top:2px solid #262820;padding-top:25px;display:flex;justify-content:space-between;align-items:center}.signature{display:flex;gap:18px;align-items:center}.seal{height:44px;width:44px;display:grid;place-items:center;border:1px solid #883e42;color:#883e42;font-family:Georgia,serif;font-size:27px}.signature p{font-size:14px;line-height:1.7}.footer-note{font-family:Georgia,serif;font-style:italic;font-size:17px;color:#66675c}
''', f'''
<header class="top"><span class="place">长沙，中国 · 一个人的博客</span><nav aria-label="主导航"><span class="selected">文章</span><span>关于</span><span>GitHub ↗</span><span>RSS ↗</span></nav></header>
<div class="masthead"><div class="wordmark">DimplesY<span style="color:#883e42">.</span></div><p>写代码，也写日常。<small>关于技术、创造，以及正在发生的生活。</small></p></div>
<div class="section"><span><i class="dot"></i>最近的文字</span><span>2026 / 秋</span></div>
<main class="main"><article class="lead"><div class="meta"><span class="category">{A[0]['tag']}</span><time>{A[0]['date']}</time></div><h1>让个人博客<br>回到写作本身</h1><p>{A[0]['desc']}</p><span class="read">继续阅读 &nbsp; ↗</span></article>
<section class="latest" aria-label="其他文章"><h2>还有这些，想与你分享</h2>{''.join(f'<article class="story"><div class="meta"><span class="category">{a["tag"]}</span><time>{a["date"]}</time></div><h3>{a["title"]}</h3><p>{a["desc"]}</p></article>' for a in A[1:])}</section></main>
<footer class="footer"><div class="signature"><span class="seal">D</span><p>你好，我是 DimplesY。<br><span style="color:#66675c">{DATA['bio']}</span></p></div><span class="footer-note">Always a work in progress.</span></footer>
''')

index = page('开发者索引', '''
body{background:#132324;color:#e6eee8;display:grid;grid-template-columns:242px 1fr}.rail{height:900px;background:#0c1b1c;border-right:1px solid #344546;padding:42px 28px;display:flex;flex-direction:column}.brand{font-size:25px;font-weight:650;letter-spacing:-1px}.brand b{color:#c6ea81}.rail .description{font-size:13px;color:#a6b9b1;line-height:1.8;margin-top:14px}.rail nav{display:flex;flex-direction:column;align-items:stretch;gap:9px;margin-top:62px;font-size:14px}.rail nav span{padding:13px 14px;color:#b5c5be;display:flex;justify-content:space-between}.rail nav .active{background:#c6ea81;color:#162721;border-radius:3px}.rail-bottom{margin-top:auto;border-top:1px solid #344546;padding-top:24px;font-size:13px;line-height:1.9;color:#a6b9b1}.rail-bottom .github{color:#e6eee8;display:block;margin-top:19px}.workspace{padding:0 58px}.bar{height:91px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #344546;font:13px "SFMono-Regular",Menlo,monospace;color:#b2c3bb}.path{color:#d7e4dc}.bar .mark{color:#c6ea81}.heading{display:flex;justify-content:space-between;align-items:end;padding:47px 0 30px}.heading h1{font-size:38px;letter-spacing:-1px;font-weight:550}.heading p{font-size:14px;color:#b5c5be;margin-top:16px}.heading .rss{font-size:13px;border:1px solid #61716c;padding:10px 15px;border-radius:3px}.tabs{display:flex;gap:27px;border-bottom:1px solid #344546;font-size:14px;color:#a6b9b1}.tabs span{padding:18px 0}.tabs .current{color:#c6ea81;border-bottom:2px solid #c6ea81}.column-head{display:grid;grid-template-columns:48px 1fr 108px 112px;padding:24px 0 15px;font-size:13px;color:#a6b9b1;border-bottom:1px solid #344546}.row{display:grid;grid-template-columns:48px 1fr 108px 112px;align-items:start;padding:21px 0;border-bottom:1px solid #344546}.number{font:13px Menlo,monospace;color:#a6b9b1;padding-top:4px}.row h2{font-size:21px;font-weight:500;line-height:1.45;margin-bottom:11px}.row:first-of-type h2{color:#c6ea81}.row p{font-size:13px;color:#a6b9b1;line-height:1.8;max-width:650px;padding-right:26px}.tag{font-size:13px;color:#d7e4dc;padding-top:5px}.date{font:12px Menlo,monospace;color:#a6b9b1;padding-top:7px}.end{display:flex;justify-content:space-between;align-items:center;padding-top:25px;color:#a6b9b1;font-size:13px}.end span:last-child{font-family:Menlo,monospace}.colophon{color:#c6ea81}
''', f'''
<aside class="rail"><div class="brand">DimplesY<b>_</b></div><p class="description">开发、探索、持续记录。</p><nav aria-label="主导航"><span class="active">文章索引 <span style="padding:0;color:inherit">↗</span></span><span>关于我</span><span>GitHub 收藏</span></nav><div class="rail-bottom">{DATA['bio']}<span class="github">GitHub &nbsp; ↗</span></div></aside>
<main class="workspace"><header class="bar"><span><span class="mark">~/</span> dimplesy <span style="padding:0 12px">/</span> <span class="path">writing</span></span><span>保持好奇，持续构建。</span></header>
<div class="heading"><div><h1>文章索引<span style="color:#c6ea81">.</span></h1><p>技术实践、开源发现，还有一些不成体系的想法。</p></div><span class="rss">订阅 RSS &nbsp; ↗</span></div>
<div class="tabs"><span class="current">全部文章</span><span>TypeScript</span><span>Rust</span><span>开源</span><span>随想</span></div><div class="column-head"><span>#</span><span>标题 / 摘要</span><span>主题</span><span>发布日期</span></div>
<section aria-label="文章列表">{''.join(f'<article class="row"><span class="number">{i:02}</span><div><h2>{a["title"]}</h2><p>{a["desc"]}</p></div><span class="tag">{a["tag"]}</span><time class="date">{a["date"]}</time></article>' for i,a in enumerate(A,1))}</section>
<footer class="end"><span>记录是另一种思考。<span class="colophon"> &nbsp;↳</span></span><span>JavaScript · TypeScript · Python</span></footer></main>
''')

garden = page('数字花园', '''
body{background:#f0e8df;color:#253aa2;padding:0 70px}.top{height:104px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #aeb0c0}.logo{font-family:Georgia,serif;font-size:34px;letter-spacing:-1.4px}.logo em{color:#b7442b;font-style:normal}.top nav{gap:35px;font-size:14px}.top nav span:first-child{border-bottom:1px solid currentColor;padding-bottom:6px}.layout{display:grid;grid-template-columns:268px 1fr;gap:44px;padding-top:43px}.intro{padding-top:4px}.intro h1{font-weight:550;font-size:48px;line-height:1.4;letter-spacing:-2px}.intro .bio{font-size:14px;line-height:1.9;max-width:230px;margin-top:25px;color:#4a5090}.asterisk{font-family:Georgia,serif;font-size:156px;line-height:.95;margin:22px 0 7px;color:#b7442b;transform:rotate(12deg);transform-origin:64px center}.intro .aside-note{font-family:"Songti SC",STSong,serif;font-size:19px;line-height:1.8;max-width:210px}.topics{font-size:13px;margin-top:39px;line-height:2;color:#4a5090}.notes{display:grid;grid-template-columns:1.08fr 1fr;gap:23px;align-items:start}.note{padding:27px 29px;position:relative;overflow:hidden}.meta{display:flex;justify-content:space-between;font-size:13px;gap:10px}.note h2{font-size:25px;font-weight:550;line-height:1.55;letter-spacing:-.5px;margin-top:29px;position:relative;z-index:1}.note p{font-size:14px;line-height:1.9;margin-top:17px;position:relative;z-index:1}.note .arrow{position:absolute;right:27px;bottom:23px;font-size:27px}.note.first{height:354px;background:#d9dded;border-radius:2px 2px 72px 2px}.first h2{font-family:"Songti SC",STSong,serif;font-size:36px;font-weight:600;max-width:300px;margin-top:35px}.first p{max-width:290px;color:#414e8a}.note.second{background:#b7442b;color:#fff5e9;height:294px;transform:rotate(2deg);margin-top:18px}.second h2{font-size:27px;margin-top:33px}.second p{color:#fff0e2}.note.third{background:transparent;border-top:1px solid #aeb0c0;height:264px;padding:24px 5px;margin-top:2px}.third h2{font-size:24px;margin-top:21px}.third p{color:#4a5090}.note.fourth{background:#e3d49e;height:283px;margin-top:-35px;transform:rotate(-2deg);color:#3a421e}.fourth h2{margin-top:25px;font-size:27px}.fourth p{color:#4d542e}.footer{margin-top:17px;border-top:1px solid #aeb0c0;padding-top:19px;display:flex;justify-content:space-between;font-size:13px;color:#4a5090}
''', f'''
<header class="top"><div class="logo">DimplesY<em>✳</em></div><nav aria-label="主导航"><span>文字</span><span>关于</span><span>GitHub ↗</span><span>订阅 RSS ↗</span></nav></header>
<main class="layout"><aside class="intro"><h1>在这里，<br>记录生长。</h1><p class="bio">{DATA['bio']}</p><div class="asterisk" aria-hidden="true">✳</div><p class="aside-note">把遇见的好东西，<br>变成自己的小发现。</p><div class="topics">最近在探索<br>TypeScript / Rust / Go<br>以及，技术以外的生活。</div></aside>
<section class="notes" aria-label="最近文章">{''.join(f'<article class="note {cls}"><div class="meta"><span>{a["tag"]}</span><time>{a["date"]}</time></div><h2>{a["title"]}</h2><p>{a["desc"]}</p><span class="arrow" aria-hidden="true">↗</span></article>' for cls,a in zip(['first','second','third','fourth'],A))}</section></main>
<footer class="footer"><span>一小片持续生长的互联网。</span><span>DimplesY · 长沙</span></footer>
''')

for filename, markup in [('editorial.html', editorial), ('index.html', index), ('garden.html', garden)]:
    # Check the shared editorial content survives each independent composition.
    plain = markup.replace('<br>', '').replace('\n', '')
    assert all(a['title'] in plain for a in A), filename
    assert 'https://fonts.' not in markup and '<script' not in markup
    (ROOT / filename).write_text(markup, encoding='utf-8')

manifest = {
    'schemaVersion': 1, 'lang': 'zh', 'project': 'DimplesY · 博客设计探索', 'round': '01',
    'brief': '同一位开发者、同一组文章，探索三种不同的阅读与个人表达方式。推荐 01「独立刊物」。本轮为桌面首屏视觉方案，文章为共用拟稿。',
    'nativeViewport': '1440x900',
    'candidates': [
        {'id':'editorial','name':'独立刊物','concept':'把博客当作一份由你亲自编辑的刊物，让文字成为主角。','typography':'Georgia 99px 刊头 / 宋体 57px 主标题 / 苹方 14–16px 正文','palette':['#f5f2e9','#262820','#883e42'],'traits':['横向刊头与双线分隔','一篇主文 + 三篇短索引','宋体标题与酒红色注记'],'source':'editorial.html'},
        {'id':'index','name':'开发者索引','concept':'像打开自己的代码工作区一样，直接进入清晰、有秩序的文章目录。','typography':'系统黑体 38px 标题 / 21px 文章 / Menlo 12–13px 日期与序号','palette':['#132324','#0c1b1c','#c6ea81'],'traits':['纵向身份侧栏','通栏文章表与日期对齐','深青墨色与黄绿定位'],'source':'index.html'},
        {'id':'garden','name':'数字花园','concept':'把技术和日常放在同一片生长中的花园里，让读者先认识你。','typography':'系统黑体 48px 宣言 / 宋体 36px 主文 / 14px 正文','palette':['#f0e8df','#253aa2','#b7442b','#e3d49e'],'traits':['个人引言与错落笔记','蓝墨、陶红与纸张色块','星号与不对称圆角呼应'],'source':'garden.html'},
    ],
}
(ROOT / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
print('Generated 3 studies; shared-content assertions passed.')
