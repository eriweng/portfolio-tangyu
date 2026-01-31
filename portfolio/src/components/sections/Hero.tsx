import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Decorative Geometric Shapes */}
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: '100px', height: '100px', border: '4px solid var(--color-secondary)', transform: 'rotate(15deg)' }}></div>
      <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: '150px', height: '150px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', opacity: 0.2 }}></div>
      <div style={{ position: 'absolute', top: '15%', left: '40%', width: '0', height: '0', borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderBottom: '50px solid var(--color-accent)', transform: 'rotate(-20deg)' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--color-accent)',
            color: 'var(--color-background)',
            fontWeight: 'bold',
            fontFamily: 'var(--font-body)',
            marginBottom: '1.5rem',
            boxShadow: '4px 4px 0 var(--color-primary)'
          }}>
            UI/UX DESIGNER & BACKEND DEV
          </div>

          <h1 className="title-shadow" style={{
            fontSize: 'clamp(4rem, 8vw, 8rem)',
            lineHeight: 0.9,
            marginBottom: '2rem',
            maxWidth: '900px'
          }}>
            翁莉雯 <br />
            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-secondary)' }}>(Eri)</span> WENG
          </h1>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(5px)',
            padding: '2rem',
            borderLeft: '4px solid var(--color-primary)',
            maxWidth: '600px',
            marginBottom: '3rem'
          }}>
            <p style={{ fontSize: '1.2rem', margin: 0 }}>
              <strong style={{ color: 'var(--color-secondary)' }}>「邏輯是骨架，設計是靈魂。」</strong><br /><br />
              我將自動化的精準控制與 90 年代的狂野美學結合，為數位產品注入獨特的個性與穩定的核心。
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="retro-btn">
              瀏覽專案 →
            </a>
            <a href="#contact" className="retro-btn outline">
              聯絡我 ☎
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
