import React, { useEffect, useState } from 'react';

interface IntroSplashProps {
  name: string;
}

const IntroSplash: React.FC<IntroSplashProps> = ({ name }) => {
  const [phase, setPhase] = useState<'boot' | 'focus' | 'click' | 'flash' | 'reveal' | 'done'>('boot');

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setPhase('focus'), 120),
      window.setTimeout(() => setPhase('click'), 650),
      window.setTimeout(() => setPhase('flash'), 790),
      window.setTimeout(() => setPhase('reveal'), 900),
      window.setTimeout(() => setPhase('done'), 1260),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  if (phase === 'done') {
    return null;
  }

  const isClick = phase === 'click' || phase === 'flash';
  const isFlash = phase === 'flash';
  const isReveal = phase === 'reveal';
  const isSettled = phase === 'focus' || phase === 'click';
  const showContent = phase === 'focus' || phase === 'click';
  const shutterTopTransform = isReveal ? 'translateY(-100%)' : isClick ? 'translateY(0)' : 'translateY(-100%)';
  const shutterBottomTransform = isReveal ? 'translateY(100%)' : isClick ? 'translateY(0)' : 'translateY(100%)';

  return (
    <div
      className={`fixed inset-0 z-[120] overflow-hidden bg-black transition-opacity duration-500 ${isReveal ? 'opacity-0' : 'opacity-100'}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 120,
        overflow: 'hidden',
        background: '#050505',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(0,0,0,0.95)_65%)]" />

      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-black transition-transform duration-300 ease-in ${isClick ? 'translate-y-0' : '-translate-y-full'} ${isReveal ? '-translate-y-full' : ''}`}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '50%',
          background: '#000',
          transform: shutterTopTransform,
          transition: 'transform 300ms ease-in',
        }}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-black transition-transform duration-300 ease-in ${isClick ? 'translate-y-0' : 'translate-y-full'} ${isReveal ? 'translate-y-full' : ''}`}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '50%',
          background: '#000',
          transform: shutterBottomTransform,
          transition: 'transform 300ms ease-in',
        }}
      />

      <div
        className={`absolute inset-0 bg-white transition-opacity duration-100 ${isFlash ? 'opacity-90' : 'opacity-0'}`}
        style={{
          position: 'absolute',
          inset: 0,
          background: '#fff',
          opacity: isFlash ? 0.9 : 0,
          transition: 'opacity 100ms ease-out',
        }}
      />

      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white transition-opacity duration-150 ${showContent ? 'opacity-100' : 'opacity-0'}`}
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px',
          textAlign: 'center',
          color: '#fff',
          opacity: showContent ? 1 : 0,
          transition: 'opacity 150ms ease-out',
        }}
      >
        <div
          className={`mb-8 h-24 w-24 rounded-full border border-white/40 transition-all duration-700 ${isSettled ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
          style={{
            width: 96,
            height: 96,
            borderRadius: 9999,
            border: '1px solid rgba(255,255,255,0.4)',
            marginBottom: 32,
            transform: isSettled ? 'scale(1)' : 'scale(1.25)',
            opacity: isSettled ? 1 : 0,
            transition: 'all 700ms ease-out',
          }}
        />

        <p
          className={`text-xs uppercase tracking-[0.35em] text-white/70 transition-all duration-700 ${isSettled ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
          style={{
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: '0.35em',
            color: 'rgba(255,255,255,0.7)',
            transform: isSettled ? 'translateY(0)' : 'translateY(12px)',
            opacity: isSettled ? 1 : 0,
            transition: 'all 700ms ease-out',
          }}
        >
          Photography
        </p>
        <h1
          className={`mt-6 text-4xl font-serif tracking-[0.18em] md:text-6xl transition-all duration-700 ${isSettled ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          style={{
            marginTop: 24,
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2rem, 4vw, 3.75rem)',
            letterSpacing: '0.14em',
            transform: isSettled ? 'scale(1)' : 'scale(0.95)',
            opacity: isSettled ? 1 : 0,
            transition: 'all 700ms ease-out',
          }}
        >
          {name}
        </h1>

        <p
          className={`mt-8 text-[10px] uppercase tracking-[0.5em] text-white/65 transition-all duration-300 ${phase === 'click' ? 'opacity-100 scale-110' : 'opacity-0 scale-95'}`}
          style={{
            marginTop: 32,
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.5em',
            color: 'rgba(255,255,255,0.65)',
            opacity: phase === 'click' ? 1 : 0,
            transform: phase === 'click' ? 'scale(1.1)' : 'scale(0.95)',
            transition: 'all 300ms ease-out',
          }}
        >
          Shot
        </p>
      </div>
    </div>
  );
};

export default IntroSplash;
