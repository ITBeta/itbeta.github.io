# 快速修復 404 錯誤

## 方法 1: 直接訪問工作流程運行頁面（最簡單）

**直接點擊以下鏈接：**

👉 https://github.com/ITBeta/itbeta.github.io/actions/workflows/deploy.yml

然後：
1. 點擊右上角的 **Run workflow** 按鈕
2. 在彈出的選單中，確認分支為 `claude/eleventy-github-pages-blog-011CUshEJbLDdV4yTYSg4685`
3. 點擊綠色的 **Run workflow** 按鈕
4. 等待 1-2 分鐘，刷新頁面查看運行狀態
5. 完成後訪問 https://itbeta.github.io

---

## 方法 2: 如果方法 1 找不到工作流程

這可能是因為工作流程還沒有運行過。請嘗試創建一個空提交來觸發：

```bash
# 在本地執行
cd /home/user/itbeta.github.io
git commit --allow-empty -m "Trigger GitHub Actions"
git push
```

然後等待 1-2 分鐘，GitHub Actions 會自動運行並部署。

---

## 方法 3: 合併到 main 分支（如果您有權限）

由於 GitHub 限制，您可能無法直接推送到 main。請嘗試創建 Pull Request：

1. 訪問：https://github.com/ITBeta/itbeta.github.io/compare/main...claude/eleventy-github-pages-blog-011CUshEJbLDdV4yTYSg4685
2. 點擊 **Create pull request**
3. 填寫標題和描述，然後點擊 **Create pull request**
4. 審核後點擊 **Merge pull request**
5. 刪除功能分支（可選）

---

## 檢查工作流程運行狀態

訪問：https://github.com/ITBeta/itbeta.github.io/actions

您應該能看到：
- ✅ 綠色勾號 = 部署成功
- 🟡 黃色圓圈 = 正在運行
- ❌ 紅色叉號 = 部署失敗（點擊查看詳情）

---

## 仍然無法訪問？

### 檢查清單：

1. **GitHub Pages 設置**
   - 訪問：https://github.com/ITBeta/itbeta.github.io/settings/pages
   - 確認 Source 設置為 **GitHub Actions**

2. **倉庫可見性**
   - 訪問：https://github.com/ITBeta/itbeta.github.io/settings
   - 確認倉庫是 **Public**（公開）

3. **工作流程權限**
   - 訪問：https://github.com/ITBeta/itbeta.github.io/settings/actions
   - 確認 Workflow permissions 設置為 **Read and write permissions**

4. **Actions 是否啟用**
   - 訪問：https://github.com/ITBeta/itbeta.github.io/settings/actions
   - 確認 Actions permissions 設置為 **Allow all actions and reusable workflows**

---

## 部署成功後

您的博客將在以下地址訪問：
- 🌐 主頁：https://itbeta.github.io
- 📝 第一篇文章：https://itbeta.github.io/posts/first-post/

## 需要我幫忙嗎？

如果以上方法都無法解決，請告訴我：
1. 點擊方法 1 的鏈接後看到什麼？
2. GitHub Actions 頁面是否顯示任何工作流程？
3. 是否有任何錯誤信息？
