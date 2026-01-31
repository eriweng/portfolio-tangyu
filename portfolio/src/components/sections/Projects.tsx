export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="container">
        <span style={{ color: 'var(--color-cta)', fontWeight: 600 }}>WHAT I'VE BUILT</span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>專案成就</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Project 1 */}
          <div style={{ backgroundColor: 'var(--color-background)', padding: '2rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>電子商務系統後端服務</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Go, Gin, GORM, MySQL, Redis, Docker, JWT</p>
            <p style={{ marginBottom: '1.5rem' }}>
              採用 DDD (領域驅動設計) 架構開發的電商 API。
              功能實現：包含商品管理、購物車、訂單處理、用戶管理及 WebSocket 即時通訊。
            </p>
            <a href="https://github.com/tangyuweng/ecom" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-cta)', fontWeight: 500 }}>查看程式碼 →</a>
          </div>

          {/* Project 2 */}
          <div style={{ backgroundColor: 'var(--color-background)', padding: '2rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>智慧製造與 AI 視覺檢測整合系統</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>系統整合, PLC, AI 檢測</p>
            <p style={{ marginBottom: '1.5rem' }}>
              建立設備通訊架構，確保 AI 模組、機械手臂與 PLC 間的資料流穩定。開發即時檢測狀態顯示與產線稼動率監控介面。
              協助客戶將檢測良率由 93% 提升至 97% 以上。
            </p>
          </div>

          {/* Project 3 */}
          <div style={{ backgroundColor: 'var(--color-background)', padding: '2rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>鐵桶焊接品質檢測系統</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>C# WPF, 狀態機, PLC</p>
            <p style={{ marginBottom: '1.5rem' }}>
              使用 C# WPF 顯示即時生產資訊（良率、空壓狀態等）。後端控制：設計狀態機流程，處理 PLC/感測器通訊與檢測異常保護。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
