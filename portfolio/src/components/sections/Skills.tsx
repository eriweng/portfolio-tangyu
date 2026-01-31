export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="container">
        <span style={{ color: 'var(--color-cta)', fontWeight: 600 }}>WHAT I USE</span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>專業技能</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>程式語言與框架</h3>
            <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              <li>Golang (Gin)</li>
              <li>JavaScript / TypeScript</li>
              <li>React, Express</li>
              <li>C# (WPF)</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>資料庫</h3>
            <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Redis</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>工具與架構</h3>
            <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              <li>Docker / Docker Compose</li>
              <li>Git / GitHub Actions</li>
              <li>Modbus RTU/TCP / WebSocket</li>
              <li>Swagger / DDD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
