import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-stone-100 py-4' : 'bg-transparent py-4 md:py-8'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className={`z-50 relative transition-colors ${isScrolled || isMobileMenuOpen ? 'text-ink' : 'text-white mix-blend-difference'}`}>
          <span className="block text-[0.92rem] md:text-2xl font-serif tracking-[0.08em] md:tracking-[0.16em] uppercase font-bold">Thalisson Photo</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-editorial font-bold transition-colors relative group ${isScrolled ? 'text-stone-600 hover:text-ink' : 'text-white/90 hover:text-white mix-blend-difference'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-ink' : 'bg-white'}`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className={`md:hidden z-50 relative transition-colors ${isMobileMenuOpen || isScrolled ? 'text-ink' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-navigation"
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-10 transition-transform duration-500 ease-in-out transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-serif italic text-ink hover:text-stone-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
