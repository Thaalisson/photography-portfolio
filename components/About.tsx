import React from 'react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-[#fcfaf7] to-[#f4f1ee] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 beige-lines opacity-35"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 beige-sheen" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Image Layout */}
          <div className="w-full md:w-1/2 relative">
            <FadeIn>
              <div className="relative p-6">
                {/* Decorative background box for "Richness" */}
                <div className="absolute top-0 left-0 w-[90%] h-[90%] bg-[#efe3d5] z-0" />
                <div className="absolute -left-3 top-10 bottom-10 w-px bg-[#d6c0a8]/70 z-0" />
                <img
                  src="/images/about-portrait.jpg"
                  alt="Thalisson portrait"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="relative z-10 w-full h-[420px] sm:h-[520px] md:h-[600px] object-cover object-center saturate-110 transition-all duration-700 shadow-[0_28px_45px_-24px_rgba(77,53,34,0.38)]"
                />
              </div>
            </FadeIn>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <FadeIn delay={200}>
              <span className="text-xs font-bold uppercase tracking-editorial text-stone-400 mb-4 block">About Me</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-10 text-ink leading-tight">
                Capturing <br/><span className="italic text-stone-500">Silence</span> in Chaos
              </h2>
              <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg text-justify">
                <p>
                  Photography is more than an image; it is an inheritance. My work explores the delicate balance between the posed and the candid, finding elegance in unscripted moments.
                </p>
                <p>
                  With a background in fine arts and editorial design, I bring a curator's eye to every session. I favor natural light, clean lines, and deep, emotive tones that stand the test of time.
                </p>
                <p>
                  Whether documenting a union of souls or defining a brand's visual identity, my approach is always the same: minimal interference, maximum impact.
                </p>
                <div className="pt-8">
                   <p className="font-serif italic text-2xl text-ink">Thalisson Photo</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
