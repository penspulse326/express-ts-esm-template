註：這個 repo 所有的檔案，包含這篇 README，都是使用 Claude 建立的，  
旨在讓我自己快速上手 TypeScript 與 ESM 在 Node.js 上的設定，  
所以文本都沒有經過修改，如有需要歡迎自行 clone。

# Express TypeScript ESM 專案模板

一個現代化的 Express.js 專案模板，使用 TypeScript 和 ES Modules。

## 特色功能

- 🚀 使用 TypeScript 的 Express.js
- 📦 支援 ES Modules (ESM)
- 🔥 開發環境支援熱重載
- 🛠️ 型別安全的請求和回應處理
- 🔧 生產環境就緒的建構設定
- 📝 TypeScript 路徑別名支援
- 🚦 內建錯誤處理
- 🌿 清晰的專案結構

## 快速開始

1. 克隆此專案：

```bash
git clone https://github.com/your-username/express-ts-esm-starter.git
cd express-ts-esm-starter
```

2. 安裝依賴套件：

```bash
pnpm install
```

3. 複製環境變數範本：

```bash
cp .env.example .env
```

4. 啟動開發伺服器：

```bash
pnpm run dev
```

5. 建構生產版本：

```bash
pnpm run build
```

6. 啟動生產伺服器：

```bash
pnpm start
```

## 專案結構

```
.
├── src/
│   ├── index.ts        # 應用程式進入點
│   └── types/          # 型別定義
├── dist/               # 編譯後的 JavaScript 檔案
├── .env.example        # 環境變數範本
├── .gitignore         # Git 忽略規則
├── package.json       # 專案配置檔
├── tsconfig.json      # TypeScript 配置
└── nodemon.json       # Nodemon 配置
```

## 可用腳本

- `pnpm run dev` - 啟動開發伺服器（支援熱重載）
- `pnpm run build` - 建構生產版本
- `pnpm start` - 啟動生產伺服器

## 環境變數

查看 `.env.example` 以了解可用的配置選項。

## 貢獻指南

歡迎提出貢獻！請隨時提交 Pull Request。

## 授權條款

本專案採用 Unlicense 授權 - 詳見 [UNLICENSE](https://unlicense.org/) 檔案。

## 支援功能擴充

此模板可輕易整合以下功能：

- 資料庫連接（MySQL、MongoDB、PostgreSQL 等）
- 身份驗證與授權
- API 文件生成
- 單元測試
- 程式碼風格規範（ESLint + Prettier）
- Docker 容器化
- CI/CD 部署流程

## 常見問題

Q: 如何更改伺服器端口？  
A: 在 `.env` 檔案中修改 `PORT` 值。

Q: 如何添加新的路由？  
A: 在 `src` 目錄下創建新的路由檔案，並在 `index.ts` 中引入。
