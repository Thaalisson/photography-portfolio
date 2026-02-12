import React, { useEffect, useState } from 'react';

const ImmersiveLayer: React.FC = () => {
  const [x, setX] = useState(50);
  const [y, setY] = useState(30);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const nextX = (event.clientX / window.innerWidth) * 100;
      const nextY = (event.clientY / window.innerHeight) * 100;
      setX(nextX);
      setY(nextY);
    };

    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setProgress(nextProgress);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[4] h-[2px] bg-gradient-to-r from-amber-200 via-stone-900 to-amber-200 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] opacity-60 mix-blend-soft-light transition-[background] duration-300"
        style={{
          background: `radial-gradient(circle at ${x}% ${y}%, rgba(255, 229, 180, 0.26), rgba(255,255,255,0) 34%)`,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0) 52%, rgba(0,0,0,0.08) 100%)',
        }}
      />
    </>
  );
};

export default ImmersiveLayer;
