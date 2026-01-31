# Eri Weng (翁莉雯) - Portfolio Website

> **90s Cyber-Fashion Aesthetic | UI/UX & Backend Engineering Showcase**

這是一個展示 **翁莉雯 (Eri)** 從工業自動化轉型為 **UI/UX 設計師 & 後端工程師** 的個人作品集網站。網站設計採用 **90年代復古時尚 (Retro-Futurism)** 風格，結合大膽的排版、霓虹配色與高互動性的網頁特效。

🔗 **Live Demo**: [https://eriweng.github.io/portfolio-tangyu/](https://eriweng.github.io/portfolio-tangyu/)

---

## 🎨 設計特色 (Design Features)

本專案不僅是資訊的載體，更是設計能力的展現：

- **視覺風格**: 結合 Vaporwave、Cyberpunk 與 90年代時尚雜誌排版。
- **色彩計畫**: 深紫 (`#10002B`) 基底，搭配霓虹粉 (`#FF00FF`) 與青色 (`#00FFFF`) 的強烈對比。
- **互動體驗**:
  - **毛玻璃磁吸游標**: 客製化的 64px 霧面玻璃游標，具備物理慣性與縮放效果。
  - **3D 傾斜卡片**: 專案卡片隨滑鼠位置產生 3D 視差傾斜。
  - **磁吸按鈕**: 按鈕與連結會輕微吸附滑鼠，增加操作手感。
  - **滾動特效**: 元素隨頁面滾動產生交錯進場動畫。

## 🛠 技術堆疊 (Tech Stack)

- **核心框架**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **建置工具**: [Vite](https://vitejs.dev/)
- **樣式與動畫**:
  - **Vanilla CSS Variables**: 用於全域主題與響應式設計。
  - **Framer Motion**: 處理複雜的進場與轉場動畫。
  - **Lucide React**: 輕量級 SVG 圖標庫。
- **部署**: GitHub Actions + GitHub Pages

## 📂 專案結構 (Project Structure)

```bash
portfolio/
├── public/              # 靜態資源 (Generated 90s Images)
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, Cursor, Magnetic Wrapper
│   │   └── sections/    # Hero, About, Projects, etc.
│   ├── App.tsx          # 主程式入口
│   └── index.css        # 全域樣式與變數定義
└── vite.config.ts       # Vite 配置
```

## 🚀 本地開發 (Local Development)

1. **Clone 專案**
   ```bash
   git clone https://github.com/eriweng/portfolio-tangyu.git
   cd portfolio-tangyu/portfolio
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **啟動開發伺服器**
   ```bash
   npm run dev
   ```
   瀏覽器打開 `http://localhost:5173` 即可預覽。

4. **建置生產版本**
   ```bash
   npm run build
   ```

## 📄 授權 (License)

MIT License © 2026 Eri Weng
