import { useState, useEffect } from 'react';
import { Menu, X, Github, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../layout/Magnetic';

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
        backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.4s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '90px' }}>
        <a href="#" style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '8px' }}>
          eri<span style={{ color: 'var(--color-cta)' }}>.design</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Magnetic key={link.name}>
              <a
                href={link.href}
                style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--color-text-muted)', padding: '0.5rem' }}
                className="nav-link"
              >
                {link.name}
              </a>
            </Magnetic>
          ))}
          <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Magnetic>
              <a href="https://github.com/tangyuweng" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem' }}>
                <Github size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="mailto:tangyuw99@gmail.com" style={{ padding: '0.5rem' }}>
                <Mail size={20} />
              </a>
            </Magnetic>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ display: 'block' }}
        >
          {isMobileMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
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
              top: '90px',
              left: 0,
              right: 0,
              backgroundColor: 'var(--color-background)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              padding: '1rem',
              overflow: 'hidden'
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ display: 'block', padding: '0.8rem 0', fontSize: '1.2rem', textAlign: 'center' }}
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
        .nav-link:hover { color: var(--color-cta) !important; }
      `}</style>
    </header>
  );
}
