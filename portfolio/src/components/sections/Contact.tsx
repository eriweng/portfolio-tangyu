import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div style={{ border: '4px solid var(--color-text)', padding: '3rem', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--color-background)',
            padding: '0 20px'
          }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-accent)' }}>LET'S CONNECT</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}><Mail size={40} color="var(--color-primary)" /></div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>EMAIL</h3>
              <a href="mailto:tangyuw99@gmail.com" style={{ fontSize: '1.1rem', borderBottom: '2px solid var(--color-secondary)' }}>tangyuw99@gmail.com</a>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}><Phone size={40} color="var(--color-primary)" /></div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>PHONE</h3>
              <div style={{ fontSize: '1.1rem' }}>0909-197-319</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}><MapPin size={40} color="var(--color-primary)" /></div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>LOCATION</h3>
              <div style={{ fontSize: '1.1rem' }}>Tainan City, Taiwan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
