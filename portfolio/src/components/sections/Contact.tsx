import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <span style={{ color: 'var(--color-cta)', fontWeight: 600 }}>GET IN TOUCH</span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>聯絡資訊</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'var(--color-secondary)', borderRadius: '50%' }}>
              <Mail size={24} color="var(--color-cta)" />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>電子信箱</div>
              <a href="mailto:tangyuw99@gmail.com" style={{ fontSize: '1.1rem' }}>tangyuw99@gmail.com</a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'var(--color-secondary)', borderRadius: '50%' }}>
              <Phone size={24} color="var(--color-cta)" />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>聯絡電話</div>
              <div style={{ fontSize: '1.1rem' }}>0909-197-319</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'var(--color-secondary)', borderRadius: '50%' }}>
              <MapPin size={24} color="var(--color-cta)" />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>通訊地址</div>
              <div style={{ fontSize: '1.1rem' }}>台南市歸仁區和順路***</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
