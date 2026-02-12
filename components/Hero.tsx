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
    <section id="home" className="relative min-h-[92vh] md:h-screen w-full overflow-hidden bg-stone-900">
      
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
          className="w-full h-full object-cover object-center opacity-85 hero-kenburns"
        />
        
        {/* 3. Vintage Noise/Grain Overlay */}
        {/* Adds texture to make it look like film/old photo */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Dark Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/72" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(229,194,157,0.18),transparent_48%)]" />
      </div>

      {/* Content */}
      <div className={`relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-[11px] md:text-sm uppercase tracking-[0.3em] mb-5 opacity-85 drop-shadow-md">
          Wedding Photographer
        </h2>
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif mb-4 md:mb-6 tracking-tight leading-[0.95] drop-shadow-lg">
          Thalisson Photo
        </h1>
        <div className="h-[1px] w-20 bg-white/65 mb-6 shadow-sm"></div>
        <p className="max-w-[760px] text-3xl sm:text-4xl md:text-5xl font-script mb-6 opacity-95 drop-shadow-md leading-none">
          Preserving your memories for a lifetime
        </p>
        <p className="max-w-2xl text-lg md:text-xl font-serif italic mb-10 md:mb-12 opacity-85 drop-shadow-md leading-relaxed">
          Timeless wedding stories shaped by light and emotion.
        </p>
        
        <a 
          href="#portfolio"
          className="group relative inline-flex items-center gap-3 overflow-hidden px-10 py-4 text-xs font-bold uppercase tracking-editorial border border-white/50 text-white transition-all duration-500 backdrop-blur-sm hover:text-black"
        >
          <span className="relative z-10">View Portfolio</span>
          <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={20} strokeWidth={1} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
