# 庄生晓梦 · 博客源码

这是 [https://zzxm.github.io](https://zzxm.github.io) 的源码仓库。

站点由 **Hexo 8 + NexT 8.29** 生成，GitHub Actions 自动构建并部署到 GitHub Pages。
写作 = 改 Markdown → `git push`，不用服务器、不用数据库。

> 仓库历史说明：本仓库早期是 VuePress(vdoing) 版本，2026-11 迁移到 Hexo。
> 旧源码保存在分支 `backup-vdoing-source` / `theme-vdoing`，迁移前的 `main` 快照是标签 `pre-hexo-migration`。
> 迁移时**保留了全部 222 篇笔记正文**，并沿用原来的 `permalink: /pages/xxxx/`，老链接不会失效。

## 目录结构

```
.
├── _config.yml              # Hexo 主配置：站点信息、url、主题、markdown 渲染
├── _config.next.yml         # NexT 主题配置：配色、菜单、搜索、代码块
├── package.json             # 依赖与 npm scripts
├── .github/workflows/
│   └── pages.yml            # push 到 main 自动构建 + 部署 Pages
└── source/
    ├── _posts/              # 文章（222 篇，按原笔记目录分好 categories/tags）
    ├── about/               # 关于页
    ├── categories/ tags/    # 分类页、标签页
    ├── img/                 # 文章里引用的图片（如 /img/git.png）
    └── _data/               # 预留：想加自定义数据放这里
```

## 本地预览

```powershell
npm install          # 首次
npm run server       # http://localhost:4000 实时预览
npm run build        # 只生成静态文件到 public/
npm run clean        # 站点诡异时先清缓存
npm run deploy       # 备用：手动推到 gh-pages（一般用 Actions，不用这条）
```

## 发布

```powershell
git add -A
git commit -m "post: 文章标题"
git push origin main
```

推送后到仓库 **Actions** 标签页看进度，约 1 分钟完成，站点即更新在 https://zzxm.github.io/ 。

首次需要确认一次（只需做一次）：仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。

## 写新文章

```powershell
npx hexo new post "文章标题"        # 生成 source/_posts/文章标题.md
```

新文章默认按 `permalink: :year/:month/:day/:title/` 生成地址；老笔记里手写的 `permalink: pages/xxx/` 会覆盖默认规则，保持原地址不变。

front-matter 最小示例：

```yaml
---
title: 文章标题
date: 2026-11-02 15:00:00
categories:
  - 前端
tags:
  - hexo
---
```

## 常见问题

**样式丢失 / 跳转 404**
→ `_config.yml` 的 `url` 必须是 `https://zzxm.github.io`，`root: /`。

**Actions 报 `npm install` 失败**
→ 看 Actions 日志里的第一个 error；本地先跑 `npm install` 复现。依赖都在 `package.json`，不用 git submodule。

**改了主题配置没生效**
→ 改的是 `_config.next.yml`（不是 `node_modules/hexo-theme-next/_config.yml`），改完 `npm run clean && npm run build`。

**想换自定义域名**
→ Settings → Pages → Custom domain，并在 `source/` 放一个内容为域名的 `CNAME` 文件。

## 备注

- 主题：NexT 8.29.1，Gemini 方案；深色模式跟随系统 `prefers-color-scheme` 自动切换（没有手动切换按钮）。
- 搜索：本地搜索（`hexo-generator-searchdb`），不依赖 Algolia。
- 评论、访问统计需要第三方账号，按需在 `_config.next.yml` 里打开。
- 原 vdoing 的 `::: tip` 容器语法、目录页、`@pages` 模板在迁移时已清理，正文与代码块完整保留。
