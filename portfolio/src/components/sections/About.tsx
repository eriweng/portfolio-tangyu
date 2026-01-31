export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <span style={{ color: 'var(--color-cta)', fontWeight: 600 }}>ABOUT ME</span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>關於我</h2>
        <div style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            我擁有豐富的系統整合與問題分析經驗，擅長將複雜需求轉化為穩定的程式邏輯。目前正積極深耕 <strong>Golang</strong> 領域，除了能熟練操作 CRUD 與 RESTful API 開發，更重視程式碼的模組化與效能優化。
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            我是一位面對變動能耐心拆解問題的開發者，期望能加入專案導向的團隊貢獻價值。
          </p>
        </div>
      </div>
    </section>
  )
}
