import React from 'react';
import { Camera, Heart, Users, Star } from 'lucide-react';
import { Service } from '../types';
import FadeIn from './FadeIn';

const services: Service[] = [
  {
    id: 1,
    title: 'Weddings',
    description: 'Documentary style coverage for the modern couple. Less posing, more living.',
    icon: <Heart strokeWidth={0.5} size={40} />,
    priceStart: 'From $4,200'
  },
  {
    id: 2,
    title: 'Editorial',
    description: 'Campaigns and lookbooks crafted with an artistic direction and high-fashion sensibility.',
    icon: <Star strokeWidth={0.5} size={40} />,
    priceStart: 'Custom Quote'
  },
  {
    id: 3,
    title: 'Portraits',
    description: 'Raw, honest portraiture. Captured in studio or on location.',
    icon: <Users strokeWidth={0.5} size={40} />,
    priceStart: 'From $800'
  },
  {
    id: 4,
    title: 'Events',
    description: 'Curated coverage for galas, launches, and intimate private gatherings.',
    icon: <Camera strokeWidth={0.5} size={40} />,
    priceStart: 'From $1,500'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-[#f4f1ee] to-[#fbf8f4] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 beige-lines opacity-25"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 beige-sheen opacity-70" />
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 md:mb-20 items-start">
            <h2 className="text-4xl md:text-5xl font-serif text-ink text-left">
              Services & <br/> <span className="italic text-stone-500">Investment</span>
            </h2>
            <p className="text-stone-500 max-w-sm font-light text-lg md:text-sm leading-relaxed text-left md:text-right">
              Tailored experiences for those who value the art of photography and the preservation of memory.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
              <div className="service-card bg-white/90 backdrop-blur-sm p-8 h-full min-h-[320px] flex flex-col justify-between transition-all duration-500 group border border-stone-200 hover:border-[#d0b79c] hover:-translate-y-1 hover:shadow-[0_20px_38px_-24px_rgba(113,82,50,0.42)]">
                <div className="service-icon text-stone-400 group-hover:text-[#b8956e] transition-colors duration-500">
                  {service.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif mb-4 text-ink">{service.title}</h3>
                  <p className="text-stone-500 font-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-stone-100 mt-6">
                  <span className="text-xs uppercase tracking-editorial text-stone-400 group-hover:text-ink transition-colors">
                    {service.priceStart}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
