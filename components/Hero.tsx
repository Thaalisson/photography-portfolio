import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation slightly after mount to ensure browser rendering catches the start state
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-[100svh] md:h-screen w-full overflow-hidden bg-stone-900">
      
      {/* 1. Flash Effect Overlay */}
      {/* Starts white (flash) and fades out quickly */}
      <div 
        className={`absolute inset-0 bg-white z-50 pointer-events-none transition-opacity duration-[1500ms] ease-out ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* 2. Background Image with "Snap" Animation */}
      {/* Scales down from 1.1 to 1.0 to simulate the photo settling after the shutter snap */}
      <div className={`absolute inset-0 transition-transform duration-[2500ms] ease-out ${isLoaded ? 'scale-100' : 'scale-110'}`}>
        <img
          src="/images/hero-wedding.jpg"
          alt="Beautiful wedding moment"
          fetchPriority="high"
          className="w-full h-full object-cover object-[62%_center] md:object-center opacity-85 hero-kenburns"
        />
        
        {/* 3. Vintage Noise/Grain Overlay */}
        {/* Adds texture to make it look like film/old photo */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Dark Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/74" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_24%,rgba(229,194,157,0.14),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(0,0,0,0.38),transparent_42%)] md:bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0.28),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_86%,rgba(0,0,0,0.34),transparent_40%)]" />
      </div>

      {/* Content */}
      <div className={`relative h-full container mx-auto px-5 pt-16 pb-16 md:py-0 flex flex-col justify-center items-center text-center text-white transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="hidden md:block text-[11px] md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-5 opacity-85 drop-shadow-md">
          Wedding Photographer
        </h2>
        <h1 className="text-[2.35rem] sm:text-6xl md:text-8xl lg:text-9xl font-serif mb-3 md:mb-6 tracking-tight leading-[0.95] drop-shadow-lg">
          <span className="block sm:inline">Thalisson</span>{' '}
          <span className="block sm:inline">Photo</span>
        </h1>
        <div className="h-[1px] w-14 sm:w-20 bg-white/65 mb-5 md:mb-6 shadow-sm"></div>
        <p className="max-w-[320px] sm:max-w-[760px] text-[1.75rem] sm:text-4xl md:text-5xl font-script mb-5 md:mb-6 opacity-95 drop-shadow-md leading-[1.06]">
          <span className="block">Preserving your</span>
          <span className="block">memories for a</span>
          <span className="block">lifetime</span>
        </p>
        <p className="max-w-[300px] sm:max-w-xl md:max-w-2xl text-[1.07rem] sm:text-lg md:text-xl font-serif italic mb-8 md:mb-12 opacity-85 drop-shadow-md leading-relaxed">
          Timeless wedding stories shaped by light and emotion.
        </p>
        
        <a 
          href="#portfolio"
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden w-[210px] sm:w-auto px-7 sm:px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.17em] border border-white/45 text-white transition-all duration-500 backdrop-blur-sm hover:text-black"
        >
          <span className="relative z-10">View Portfolio</span>
          <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={20} strokeWidth={1} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
