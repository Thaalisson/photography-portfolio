import React from 'react';
import FadeIn from './FadeIn';
import { MessageCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-canvas border-t border-linen">
      <div className="flex flex-col md:flex-row h-full">
        
        {/* Image Side - Mimicking the beige warmth of the screenshot */}
        <div className="w-full md:w-1/2 relative min-h-[500px] bg-linen">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
            alt="Lifestyle Portrait" 
            className="w-full h-full object-cover opacity-90 grayscale-[20%]"
          />
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-white relative">
          <FadeIn>
            <div className="max-w-md">
              <h2 className="text-5xl lg:text-6xl font-serif text-ink mb-6 leading-tight">
                Subscribe <br/>
                <span className="italic font-light">to my</span> <br/>
                Newsletter!
              </h2>
              
              <p className="text-stone-500 font-light mb-10 leading-relaxed text-sm lg:text-base">
                If you're interested in staying up-to-date with the latest updates, news, and special offers from me, be sure to subscribe to my newsletter. I promise to only send you high-quality content and to respect your inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-0 border border-ink p-1 bg-white">
                <input 
                  type="email" 
                  placeholder="Enter your email here" 
                  className="flex-grow px-4 py-3 bg-transparent text-ink placeholder-stone-400 focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-ink text-white px-8 py-3 text-sm uppercase tracking-editorial hover:bg-stone-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Floating Chat Button Mimic */}
          <div className="absolute bottom-8 right-8">
            <button className="bg-white border border-stone-200 shadow-xl px-6 py-3 rounded-full flex items-center gap-3 hover:scale-105 transition-transform">
              <MessageCircle size={20} className="text-ink fill-current" />
              <span className="font-serif italic text-ink">Let's Chat!</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;