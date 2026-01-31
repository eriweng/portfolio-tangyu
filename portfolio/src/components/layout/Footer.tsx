import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '3rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/tangyuweng" target="_blank" rel="noopener noreferrer" style={{ padding: '8px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%' }}>
            <Github size={20} />
          </a>
          <a href="mailto:tangyuw99@gmail.com" style={{ padding: '8px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%' }}>
            <Mail size={20} />
          </a>
        </div>
        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          © {new Date().getFullYear()} Tangyu Weng. All rights reserved.<br />
          Built with React, TypeScript & Golang aspirations.
        </p>
      </div>
    </footer>
  );
}
