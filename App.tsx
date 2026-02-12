import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroSplash from './components/IntroSplash';
import ImmersiveLayer from './components/ImmersiveLayer';

function App() {
  return (
    <div className="relative min-h-screen bg-canvas font-sans text-ink">
      <IntroSplash name="Thalisson Photo" />
      <ImmersiveLayer />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[2] opacity-[0.08] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.05' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
        }}
      />
      <Navbar />
      <main className="relative z-[3]">
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Testimonials />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
