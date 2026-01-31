import { Github, Mail } from 'lucide-react';
import Magnetic from '../layout/Magnetic';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '4rem 0', marginTop: '4rem', backgroundColor: '#0b1120' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>Let's Build Something Amazing.</h2>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Magnetic>
            <a href="https://github.com/tangyuweng" target="_blank" rel="noopener noreferrer" style={{ padding: '12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'block', backgroundColor: 'var(--color-background)' }}>
              <Github size={24} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="mailto:tangyuw99@gmail.com" style={{ padding: '12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'block', backgroundColor: 'var(--color-background)' }}>
              <Mail size={24} />
            </a>
          </Magnetic>
        </div>
        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
          © {new Date().getFullYear()} 翁莉雯 (Eri).<br />
          Designed & Developed with Passion.
        </p>
      </div>
    </footer>
  );
}
