import { motion } from 'framer-motion';
import Magnetic from '../layout/Magnetic';

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>

      {/* Background Decor */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(15,23,42,0) 70%)',
          borderRadius: '50%',
          zIndex: -1
        }}
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span style={{ color: 'var(--color-cta)', fontFamily: 'var(--font-heading)', fontWeight: 600, letterSpacing: '0.05em' }}>
            UI/UX DESIGNER & BACKEND ENGINEER
          </span>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 1.1, marginTop: '1rem', marginBottom: '1.5rem' }}>
            翁莉雯 (Eri) <br />
            <span className='text-gradient'>創造極致互動體驗</span>
          </h1>
          <p style={{ maxWidth: '600px', fontSize: '1.3rem', marginBottom: '3rem', lineHeight: 1.6 }}>
            不只是<strong>Golang 後端工程師</strong>，更是一位熱愛 <strong>UI/UX 設計</strong> 的創造者。我將自動化的精準邏輯與設計的感性美學結合，打造穩定且迷人的數位產品。
          </p>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Magnetic>
              <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                查看設計與專案
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '1rem 2rem', fontSize: '1.1rem' }}>
                聯絡我
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
