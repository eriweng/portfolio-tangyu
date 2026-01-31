import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-surface)', borderTop: '4px solid var(--color-primary)', borderBottom: '4px solid var(--color-secondary)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              padding: '0.5rem 2rem',
              transform: 'rotate(-2deg)',
              boxShadow: '4px 4px 0 white'
            }}
          >
            <h2 style={{ fontSize: '2rem', margin: 0 }}>HELLO WORLD</h2>
          </motion.div>

          <div style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '1.5rem', lineHeight: 1.6, fontFamily: 'var(--font-heading)', color: 'white' }}>
              我是<span style={{ color: 'var(--color-secondary)' }}>翁莉雯 (Eri)</span>。
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              我是一位擁有工業自動化背景的軟體工程師，現在正熱情地轉型投入 <strong>UI/UX 設計</strong>。
            </p>
            <p style={{ fontSize: '1.1rem', paddingLeft: '2rem', borderLeft: '4px solid var(--color-accent)' }}>
              過去在<strong>Golang 後端開發</strong>的經驗，讓我深知「系統穩定性」的重要性；而現在，我用 <strong>Bold & Retro</strong> 的視覺語言，打破工程師的刻板印象，創造既有邏輯又充滿個性的數位體驗。
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
