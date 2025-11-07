# GitHub Pages 設置指南

## 重要：必須完成以下步驟才能訪問您的博客

目前您的博客代碼已準備就緒，但需要在 GitHub 上進行配置才能正常訪問。

## 步驟 1: 啟用 GitHub Pages

1. 前往您的倉庫：https://github.com/ITBeta/itbeta.github.io
2. 點擊 **Settings**（設置）
3. 在左側菜單中點擊 **Pages**
4. 在 **Source** 下拉選單中選擇 **GitHub Actions**

   ![GitHub Pages Source](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/github-actions-source.webp)

## 步驟 2: 檢查工作流程權限

1. 在 Settings 中，點擊左側的 **Actions** > **General**
2. 滾動到 **Workflow permissions**
3. 確保選擇了 **Read and write permissions**
4. 勾選 **Allow GitHub Actions to create and approve pull requests**
5. 點擊 **Save**

## 步驟 3: 觸發部署

### 方案 A: 手動觸發 (推薦)

1. 前往倉庫的 **Actions** 標籤
2. 在左側選擇 **Deploy Eleventy to GitHub Pages**
3. 點擊右側的 **Run workflow** 按鈕
4. 選擇分支 `claude/eleventy-github-pages-blog-011CUshEJbLDdV4yTYSg4685`
5. 點擊 **Run workflow**

### 方案 B: 合併到 main 分支

如果您有權限推送到 main 分支：

```bash
git checkout main
git merge claude/eleventy-github-pages-blog-011CUshEJbLDdV4yTYSg4685
git push origin main
```

### 方案 C: 創建 Pull Request

1. 前往：https://github.com/ITBeta/itbeta.github.io/pulls
2. 點擊 **New pull request**
3. Base: `main` ← Compare: `claude/eleventy-github-pages-blog-011CUshEJbLDdV4yTYSg4685`
4. 創建並合併 PR

## 步驟 4: 驗證部署

1. 前往 **Actions** 標籤查看工作流程運行狀態
2. 等待綠色勾號 ✓（通常需要 1-2 分鐘）
3. 訪問：https://itbeta.github.io

## 常見問題

### Q: 仍然顯示 404？

**檢查清單：**
- ✓ GitHub Pages Source 是否設置為 "GitHub Actions"？
- ✓ Workflow 是否成功運行？（Actions 標籤中查看）
- ✓ 等待 2-3 分鐘讓 CDN 更新

### Q: Actions 運行失敗？

1. 檢查 Actions 標籤中的錯誤信息
2. 確認 Workflow permissions 已正確設置
3. 查看 `package.json` 和 `node_modules` 是否正確

### Q: 如何更新內容？

1. 在 `src/posts/` 中添加新的 `.md` 文件
2. 提交並推送
3. GitHub Actions 會自動重新部署

## 需要幫助？

如果按照以上步驟仍無法訪問，請檢查：
- 倉庫是否為公開 (Public)
- GitHub Actions 是否啟用
- 工作流程日誌中的具體錯誤信息
