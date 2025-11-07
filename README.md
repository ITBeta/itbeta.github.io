# ITBeta 個人博客

使用 [Eleventy](https://www.11ty.dev/) 建立的靜態博客,部署在 GitHub Pages。

## 功能特點

- ✅ 完整支援繁體中文(香港地區)
- ✅ 整合 Cloudflare Images 和 Stream
- ✅ 自動化 GitHub Actions 部署
- ✅ 響應式設計
- ✅ 快速且安全

## 本地開發

### 安裝依賴

```bash
npm install
```

### 啟動開發服務器

```bash
npm start
```

訪問 `http://localhost:8080`

### 建立靜態網站

```bash
npm run build
```

輸出目錄: `_site/`

## 寫作指南

### 新增文章

在 `src/posts/` 目錄下創建新的 Markdown 文件:

```markdown
---
title: 文章標題
description: 文章描述
date: 2025-11-07
---

文章內容...
```

### 插入 Cloudflare Images

```liquid
{% cfImage "your-image-id", "圖片描述", "public" %}
```

### 插入 Cloudflare Stream 影片

```liquid
{% cfVideo "your-video-id" %}
```

## Cloudflare 設定

在倉庫的 Settings > Secrets and variables > Actions 中新增:

- `CF_ACCOUNT_HASH`: 您的 Cloudflare Account Hash

或在本地開發時在 `.env` 文件中設定:

```
CF_ACCOUNT_HASH=your_account_hash_here
```

## GitHub Pages 設定

1. 前往倉庫 Settings > Pages
2. Source 選擇 "GitHub Actions"
3. 推送到 main 分支後會自動部署

## 安全性

- 使用最新版本的 Eleventy
- 依賴項定期更新
- 不包含敏感資訊在倉庫中
- CSP 和安全標頭已配置

## 授權

MIT License
