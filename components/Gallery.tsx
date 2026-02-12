import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Project, Category } from '../types';
import FadeIn from './FadeIn';

const projects: Project[] = [
  { id: 1, title: 'Ethereal White', category: 'Wedding', imageUrl: '/images/gallery-1.jpg', year: '2023' },
  { id: 2, title: 'Urban Solitude', category: 'Editorial', imageUrl: '/images/gallery-2.jpg', year: '2024' },
  { id: 3, title: 'Golden Hour', category: 'Portrait', imageUrl: '/images/gallery-3.jpg', year: '2023' },
  { id: 4, title: 'Vogue Italia', category: 'Editorial', imageUrl: '/images/gallery-4.jpg', year: '2024' },
  { id: 5, title: 'The Vows', category: 'Wedding', imageUrl: '/images/gallery-5.jpg', year: '2022' },
  { id: 6, title: 'Raw Emotion', category: 'Portrait', imageUrl: '/images/gallery-6.jpg', year: '2023' },
  { id: 7, title: 'Studio 54', category: 'Editorial', imageUrl: '/images/gallery-7.jpg', year: '2024' },
  { id: 8, title: 'Seaside Love', category: 'Wedding', imageUrl: '/images/gallery-8.jpg', year: '2023' },
  { id: 9, title: 'Minimalist', category: 'Portrait', imageUrl: '/images/gallery-9.jpg', year: '2024' },
];

const categories: Category[] = ['All', 'Wedding', 'Editorial', 'Portrait'];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFiltering, setIsFiltering] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [staggerRun, setStaggerRun] = useState(0);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const scrollYRef = useRef(0);

  const filteredProjects = useMemo(
    () => (activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  const isLightboxOpen = selectedProject !== null;

  useEffect(() => {
    if (!isLightboxOpen) return;

    scrollYRef.current = window.scrollY;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollYRef.current);
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!selectedProject) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') navigateLightbox('next');
      if (event.key === 'ArrowLeft') navigateLightbox('prev');
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject, filteredProjects]);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsGridVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isGridVisible) return;
    setStaggerRun((prev) => prev + 1);
  }, [activeCategory, isGridVisible]);

  const handleCategoryChange = (cat: Category) => {
    if (cat === activeCategory) return;
    setIsFiltering(true);
    window.setTimeout(() => {
      setActiveCategory(cat);
      setIsFiltering(false);
    }, 180);
  };

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (newIndex >= filteredProjects.length) newIndex = 0;
    if (newIndex < 0) newIndex = filteredProjects.length - 1;
    
    setSelectedProject(filteredProjects[newIndex]);
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Selected Works</h2>
            <div className="w-16 h-px bg-stone-300 mx-auto mb-8"></div>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-sm uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === cat ? 'text-stone-900 border-b border-stone-900' : 'text-stone-400 hover:text-stone-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[120px] gap-5 transition-all duration-300 ${isFiltering ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'}`}
        >
            {filteredProjects.map((project, index) => (
              <div 
                key={`${project.id}-${activeCategory}-${staggerRun}`}
                className={`group relative cursor-pointer overflow-hidden ${
                  index % 5 === 0
                    ? 'row-span-4 lg:col-span-7 lg:row-span-4 md:col-span-2 md:row-span-3'
                    : index % 3 === 0
                    ? 'row-span-3 lg:col-span-5 lg:row-span-3 md:row-span-2'
                    : 'row-span-3 lg:col-span-4 lg:row-span-3 md:row-span-2'
                } transition-all duration-700 ease-out ${isGridVisible && !isFiltering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 85}ms` }}
                onClick={() => openLightbox(project)}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onLoad={() => setLoadedImages((prev) => ({ ...prev, [project.id]: true }))}
                  onError={(e) => {
                    const image = e.currentTarget;
                    if (image.dataset.fallbackApplied === 'true') return;
                    image.dataset.fallbackApplied = 'true';
                    image.src = '/images/hero-wedding.jpg';
                  }}
                  className={`w-full h-full object-cover grayscale transition-all duration-1000 ${loadedImages[project.id] ? 'scale-100 blur-0' : 'scale-105 blur-sm'} group-hover:scale-110 group-hover:grayscale-0`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-55 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_65%_25%,rgba(255,255,255,0.18),transparent_40%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-2xl font-serif italic mb-1">{project.title}</p>
                      <p className="text-xs uppercase tracking-widest text-white/75">{project.category} | {project.year}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white hover:text-stone-900 transition-colors">
                      <ZoomIn size={14} /> <span className="text-xs tracking-wide">View</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[300] bg-black/98 backdrop-blur-sm flex items-center justify-center overscroll-none"
          style={{ touchAction: 'none' }}
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-stone-300 transition-colors z-[310] w-11 h-11 rounded-full border border-white/20 bg-black/35 backdrop-blur-sm flex items-center justify-center"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 text-white hover:text-stone-300 transition-colors hidden md:block"
          >
            <ChevronLeft size={48} strokeWidth={0.5} />
          </button>

          <div className="w-[92vw] max-w-4xl max-h-[88vh] p-4 relative" onClick={(e) => e.stopPropagation()}>
             <img 
               src={selectedProject.imageUrl} 
               alt={selectedProject.title} 
               className="max-h-[72vh] md:max-h-[80vh] w-full object-contain shadow-2xl mx-auto"
             />
             <div className="text-center mt-6 text-white">
                <h3 className="text-2xl font-serif italic">{selectedProject.title}</h3>
                <p className="text-sm uppercase tracking-widest text-stone-400 mt-1">{selectedProject.category} | {selectedProject.year}</p>
             </div>
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 text-white hover:text-stone-300 transition-colors hidden md:block"
          >
            <ChevronRight size={48} strokeWidth={0.5} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
