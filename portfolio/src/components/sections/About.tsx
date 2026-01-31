import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span style={{ color: 'var(--color-cta)', fontWeight: 600 }}>ABOUT ME</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>關於我</h2>
          <div style={{ maxWidth: '800px' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              我是<strong>翁莉雯 (Eri)</strong>，一位擁有工業自動化背景的軟體工程師，現在正熱情地轉型投入 <strong>UI/UX 設計</strong>領域。
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              過去在<strong>Golang 後端開發</strong>的經驗，讓我深知「系統穩定性」的重要性；而現在，我更渴望探索「使用者體驗」的無限可能。我相信優秀的產品不僅要跑得快、跑得穩，更要能與使用者產生直覺、愉悅的互動。
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
              我擅長將複雜的邏輯（如自動化控制流程）轉化為清晰、模組化的設計，這使我在設計使用者流程 (User Flow) 時能兼顧邏輯性與美感。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
