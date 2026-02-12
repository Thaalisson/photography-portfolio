import React from 'react';
import FadeIn from './FadeIn';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Thalisson didn't just take photos; he captured the very essence of our relationship. Looking at the album feels like reliving the day all over again.",
    author: "Sarah & James",
    role: "Wedding Clients"
  },
  {
    id: 2,
    text: "Her eye for detail and composition is unmatched. The editorial spread she shot for our spring collection elevated our brand identity completely.",
    author: "Marcella D.",
    role: "Fashion Director"
  },
  {
    id: 3,
    text: "I usually hate being in front of the camera, but Thalisson made me feel so comfortable and beautiful. The results were stunningly natural.",
    author: "Emily R.",
    role: "Portrait Session"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           <div className="lg:col-span-3 text-center mb-8">
             <span className="uppercase tracking-[0.2em] text-xs text-stone-400">Kind Words</span>
           </div>
           {testimonials.map((t, idx) => (
             <FadeIn key={t.id} delay={idx * 150}>
               <div className="flex flex-col items-center text-center p-6">
                 <div className="text-4xl text-stone-300 font-serif mb-4">"</div>
                 <p className="text-xl font-serif italic text-stone-700 mb-6 leading-relaxed">
                   {t.text}
                 </p>
                 <div className="mt-auto">
                   <h4 className="uppercase tracking-widest text-sm font-bold text-stone-900">{t.author}</h4>
                   <p className="text-xs text-stone-400 mt-1">{t.role}</p>
                 </div>
               </div>
             </FadeIn>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
