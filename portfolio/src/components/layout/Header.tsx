import { useState, useEffect } from 'react';
import { Menu, X, Github, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: '關於我', href: '#about' },
  { name: '設計與技能', href: '#skills' },
  { name: '經歷', href: '#experience' },
  { name: '精選專案', href: '#projects' },
  { name: '聯絡資訊', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-nav)',
        backgroundColor: isScrolled ? 'rgba(16, 0, 43, 0.95)' : 'transparent',
        borderBottom: isScrolled ? '3px solid var(--color-primary)' : 'none',
        transition: 'all 0.4s ease',
        padding: '1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{
          fontSize: '2rem',
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-primary)',
          textShadow: '2px 2px 0 var(--color-secondary)',
          textDecoration: 'none'
        }}>
          eri.design
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--color-text)',
                fontFamily: 'var(--font-body)',
                textTransform: 'uppercase'
              }}
              className="nav-link"
            >
              <span className="hover-glitch">{link.name}</span>
            </a>
          ))}

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/tangyuweng" target="_blank" rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--color-secondary)',
                color: 'var(--color-background)',
                padding: '0.5rem',
                boxShadow: '4px 4px 0 var(--color-primary)'
              }}>
              <Github size={20} strokeWidth={2.5} />
            </a>
            <a href="mailto:tangyuw99@gmail.com"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                padding: '0.5rem',
                boxShadow: '4px 4px 0 var(--color-secondary)'
              }}>
              <Mail size={20} strokeWidth={2.5} />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ display: 'block' }}
        >
          {isMobileMenuOpen ? <X size={28} color="var(--color-primary)" /> : <Menu size={28} color="var(--color-secondary)" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'var(--color-background)',
              borderBottom: '3px solid var(--color-primary)',
              borderTop: '3px solid var(--color-secondary)',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '1rem 0',
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-text-bold)',
                    borderBottom: '1px dashed var(--color-text)'
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover { color: var(--color-secondary) !important; text-decoration: underline wavy var(--color-primary) !important; }
      `}</style>
    </header>
  );
}
