import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ color: 'var(--color-cta)', fontFamily: 'var(--font-heading)', fontWeight: 600, letterSpacing: '0.05em' }}>
            BACKEND ENGINEER
          </span>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1.1, marginTop: '1rem', marginBottom: '1.5rem' }}>
            翁塘雨 <br />
            <span className='text-gradient'>後端工程師</span>
          </h1>
          <p style={{ maxWidth: '600px', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
            擅長系統整合與問題分析，目前專注於 <strong>Golang 後端開發</strong>，熟悉 RESTful API、資料庫設計及雲端應用。
          </p>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="btn btn-primary">
              查看專案
            </a>
            <a href="#contact" className="btn" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
              聯絡我
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
