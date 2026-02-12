import React from 'react';
import { Instagram, PinIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-stone-500 py-12 border-t border-stone-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <span className="font-serif text-xl text-ink block mb-2">Thalisson Photo</span>
          <span className="text-[10px] uppercase tracking-editorial opacity-60">Copyright {new Date().getFullYear()} @devThalisson</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/devthalisson"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 border border-stone-300 rounded-full flex items-center justify-center text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-300"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Pinterest"
            className="w-10 h-10 border border-stone-300 rounded-full flex items-center justify-center text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-300"
          >
            <PinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
