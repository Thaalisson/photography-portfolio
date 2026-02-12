import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Instagram, Facebook, Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#fbf8f4] to-[#f6f1ea] text-ink border-t border-stone-200 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 beige-lines opacity-20" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-5/12">
            <FadeIn>
              <span className="text-xs font-bold uppercase tracking-editorial text-stone-500 mb-6 block">Get in Touch</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-[0.95]">
                Let's start <br/> a <span className="italic text-stone-500">conversation</span>
              </h2>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="group cursor-pointer">
                  <h3 className="uppercase tracking-editorial text-xs text-stone-500 mb-2">Email</h3>
                  <a href="mailto:contato@thalissonphoto.com" className="text-xl md:text-2xl font-serif border-b border-stone-300 pb-2 hover:border-ink transition-all inline-block">contato@thalissonphoto.com</a>
                </div>
                <div className="flex gap-4">
                  <a href="https://instagram.com/devthalisson" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-editorial border border-stone-300 px-4 py-3 hover:border-ink transition-colors">Instagram</a>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-editorial border border-stone-300 px-4 py-3 hover:border-ink transition-colors">WhatsApp</a>
                </div>
                
                <div className="flex gap-6">
                  <a href="#" className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center hover:bg-ink hover:text-white transition-all duration-300">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center hover:bg-ink hover:text-white transition-all duration-300">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center hover:bg-ink hover:text-white transition-all duration-300">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:w-7/12">
            <FadeIn delay={200}>
              <form onSubmit={handleSubmit} className="space-y-10 bg-white/92 backdrop-blur-sm p-8 md:p-12 border border-stone-200 shadow-[0_24px_45px_-30px_rgba(113,82,50,0.42)]">
                {formStatus === 'success' ? (
                  <div className="bg-stone-50 p-10 text-center border border-stone-200">
                    <h3 className="text-3xl font-serif mb-4 text-ink">Message Sent</h3>
                    <p className="text-stone-600 mb-8">Thank you for reaching out. I will be in touch within 24 hours.</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="text-xs uppercase tracking-editorial border-b border-stone-400 pb-1 hover:border-ink hover:text-ink text-stone-500"
                    >
                      Send new message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="group">
                        <input 
                          type="text" 
                          required
                          placeholder="Name"
                          className="w-full bg-transparent border-b border-stone-300 py-4 text-ink placeholder-stone-400 focus:border-ink focus:outline-none transition-colors text-lg"
                        />
                      </div>
                      <div className="group">
                        <input 
                          type="email" 
                          required
                          placeholder="Email"
                          className="w-full bg-transparent border-b border-stone-300 py-4 text-ink placeholder-stone-400 focus:border-ink focus:outline-none transition-colors text-lg"
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <select defaultValue="" className="w-full bg-transparent border-b border-stone-300 py-4 text-stone-500 focus:text-ink focus:border-ink focus:outline-none transition-colors text-lg appearance-none cursor-pointer">
                        <option value="" disabled>Select Inquiry Type</option>
                        <option className="bg-white text-ink">Wedding Photography</option>
                        <option className="bg-white text-ink">Editorial / Commercial</option>
                        <option className="bg-white text-ink">Portrait Session</option>
                        <option className="bg-white text-ink">Mentorship</option>
                      </select>
                    </div>

                    <div className="group">
                      <textarea 
                        rows={3}
                        required
                        placeholder="Tell me about your vision..."
                        className="w-full bg-transparent border-b border-stone-300 py-4 text-ink placeholder-stone-400 focus:border-ink focus:outline-none transition-colors text-lg resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={formStatus === 'submitting'}
                        className="group flex items-center gap-4 text-sm uppercase tracking-editorial hover:text-stone-700 transition-colors"
                      >
                        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                        <span className="w-12 h-[1px] bg-ink group-hover:w-20 transition-all duration-300"></span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
