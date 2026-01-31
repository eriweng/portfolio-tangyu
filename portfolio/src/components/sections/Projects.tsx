import TiltCard from '../layout/TiltCard';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "電子商務系統後端",
      tech: "Go, Gin, DDD, Docker",
      desc: "採用 DDD 架構開發的高併發電商 API，實現購物車、訂單、WebSocket 即時通知。",
      link: "https://github.com/tangyuweng/ecom",
      color: "#22d3ee" // Cyan
    },
    {
      title: "智慧製造 AI 整合介面",
      tech: "UI Design, WebSocket, PLC",
      desc: "設計直覺的戰情室儀表板，將冰冷的良率數據轉化為動態視覺圖表，提升產線監控效率。",
      link: "#",
      color: "#f472b6" // Pink
    },
    {
      title: "鐵桶焊接檢測系統",
      tech: "C# WPF, UX Flow",
      desc: "優化操作流程，透過狀態機邏輯簡化複雜的焊接參數設定，降低作業員學習成本。",
      link: "#",
      color: "#fb923c" // Orange
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="container">
        <span style={{ color: 'var(--color-cta)', fontWeight: 600 }}>PORTFOLIO</span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>精選專案</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {projects.map((proj, index) => (
            <TiltCard key={index} style={{ height: '100%' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  backgroundColor: 'var(--color-background)',
                  padding: '2.5rem',
                  borderRadius: '16px',
                  height: '100%',
                  border: '1px solid rgba(255,255,255,0.05)',
                  background: `linear-gradient(145deg, var(--color-background) 0%, #1a2336 100%)`
                }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: proj.color, marginBottom: '1.5rem', opacity: 0.8 }}></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{proj.title}</h3>
                <p style={{ fontSize: '0.9rem', color: proj.color, marginBottom: '1rem', fontWeight: 600 }}>{proj.tech}</p>
                <p style={{ marginBottom: '2rem', lineHeight: 1.6 }}>
                  {proj.desc}
                </p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                  查看詳情 →
                </a>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
