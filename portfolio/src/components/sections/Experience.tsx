export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <span style={{ color: 'var(--color-cta)', fontWeight: 600 }}>MY PATH</span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>工作經歷</h2>

        <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--color-secondary)' }}>
          <div style={{ position: 'relative', paddingBottom: '3rem' }}>
            <div style={{ position: 'absolute', left: '-29px', top: '0', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--color-cta)' }}></div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>軟體工程師</h3>
            <div style={{ color: 'var(--color-cta)', marginBottom: '0.5rem' }}>品漢精密有限公司 | 2024/06 – 2025/07</div>
            <ul style={{ marginBottom: '1rem', listStyle: 'disc', paddingLeft: '1.2rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>PC-Based 控制系統開發：使用 C# 開發 HMI/WPF 人機介面。</li>
              <li style={{ marginBottom: '0.5rem' }}>資料通訊模組：開發 Modbus RTU/TCP 通訊模組，整合 PLC (Mitsubishi / Delta) 程式設計。</li>
              <li>系統整合：負責資料庫與後端系統整合，提升產線設備的穩定性與可維護性。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
