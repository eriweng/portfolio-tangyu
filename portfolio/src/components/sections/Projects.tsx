import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "電子商務後端",
      tech: "GO / GIN / DDD",
      desc: "採用 DDD 架構開發的高併發 API，實現購物車、訂單、WebSocket 即時通知。",
      link: "https://github.com/tangyuweng/ecom",
      year: "2025",
      image: import.meta.env.BASE_URL + "ecommerce.png"
    },
    {
      title: "智慧製造 AI",
      tech: "UI / PLC / DATA",
      desc: "設計直覺的戰情室儀表板，將冰冷的良率數據轉化為動態視覺圖表。",
      link: "#",
      year: "2024",
      image: import.meta.env.BASE_URL + "manufacturing.png"
    },
    {
      title: "焊接檢測系統",
      tech: "C# / WPF / UX",
      desc: "優化操作流程，透過狀態機邏輯簡化複雜的焊接參數設定。",
      link: "#",
      year: "2025",
      image: import.meta.env.BASE_URL + "welding.png"
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      {/* Background Grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: -1,
        backgroundImage: 'linear-gradient(var(--color-surface) 2px, transparent 2px)',
        backgroundSize: '100% 40px'
      }}></div>

      <div className="container">
        <h2 className="title-shadow" style={{ fontSize: '3.5rem', marginBottom: '4rem', textAlign: 'center' }}>
          精選專案 <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}>// SELECTED WORKS</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="retro-box"
              style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              {/* Tape Label Effect */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(255,255,255,0.9)',
                color: 'black',
                padding: '2px 12px',
                fontFamily: 'var(--font-body)',
                fontWeight: 'bold',
                fontSize: '0.8rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                zIndex: 2
              }}>
                PROJECT {proj.year}
              </div>

              {/* Image Container */}
              <div style={{
                width: '100%',
                height: '220px',
                borderBottom: '3px solid var(--color-primary)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'var(--color-secondary)',
                  mixBlendMode: 'overlay',
                  opacity: 0.3
                }}></div>
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.2) saturation(1.2)',
                    transition: 'transform 0.4s ease'
                  }}
                  className="project-img"
                />
              </div>

              <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>{proj.title}</h3>
                <div style={{
                  display: 'inline-block',
                  border: '1px solid var(--color-primary)',
                  color: 'var(--color-primary)',
                  padding: '2px 8px',
                  fontSize: '0.8rem',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-body)',
                  alignSelf: 'flex-start'
                }}>
                  {proj.tech}
                </div>
                <p style={{ marginBottom: '2rem', color: '#E0E0E0', flex: 1 }}>
                  {proj.desc}
                </p>
                <a href={proj.link} style={{
                  display: 'block',
                  textAlign: 'center',
                  backgroundColor: 'var(--color-background)',
                  color: 'white',
                  padding: '1rem',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  border: '1px dashed var(--color-text)'
                }}>
                  VIEW SOURCE
                </a>
              </div>

              <style>{`
                .retro-box:hover .project-img {
                    transform: scale(1.1);
                }
              `}</style>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
