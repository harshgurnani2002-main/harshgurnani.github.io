'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const PROJECTS = [
  {
    title: 'Ipsy Style',
    subtitle: 'E-Commerce with Generative AI',
    image: '/images/project-ipsystyle.png',
    tech: ['Django', 'Next.js', 'PostgreSQL', 'AWS', 'Gemini API'],
    description: 'Full-featured e-commerce platform with AI-powered virtual try-on and 360° product visualization.',
    metrics: ['100+ SKUs', 'AI Try-On', 'SEO Optimized', 'AWS S3'],
    link: 'https://ipsystyle.com',
  },
  {
    title: 'Scan2Serve',
    subtitle: 'QR-Based Restaurant Ordering',
    image: '/images/project-scan2serve.png',
    tech: ['Python', 'Django', 'WebSocket', 'Redis'],
    description: 'Real-time QR-driven restaurant ordering system with WebSocket-based kitchen notifications.',
    metrics: ['10+ Sessions', 'Real-time WS', 'Redis Caching', 'Live Menu'],
    link: 'https://scan2serve.in',
  },
  {
    title: 'Dapperz',
    subtitle: 'Premium E-Commerce',
    image: '/images/project-dapperz.png',
    tech: ['Django', 'PostgreSQL', 'REST API', 'AWS'],
    description: 'Premium e-commerce platform for stainless steel accessories and clothing with inventory management.',
    metrics: ['50+ Listings', 'REST API', 'Secure Payments', 'Inventory'],
    link: 'https://dapperz.in',
  },
  {
    title: 'AI/ML Pipeline',
    subtitle: 'Kaggle Competitions',
    image: '/images/project-ai-pipeline.png',
    tech: ['Python', 'Scikit-Learn', 'XGBoost', 'Deep Learning'],
    description: 'Machine learning experimentation and competition work on Kaggle, including model training pipelines.',
    metrics: ['Kaggle', 'Ensembles', 'Feature Eng.', 'Optimization'],
    link: 'https://kaggle.com/harshgurnani08',
  },
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [maxScrollX, setMaxScrollX] = useState(0);

  const measureScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      // How far left we need to translate so the last card is fully visible
      setMaxScrollX(Math.max(0, scrollWidth - viewportWidth));
    }
  }, []);

  useEffect(() => {
    // Measure after mount & images load
    measureScroll();
    window.addEventListener('resize', measureScroll);
    // Re-measure after a short delay to account for image loading
    const timer = setTimeout(measureScroll, 500);
    return () => {
      window.removeEventListener('resize', measureScroll);
      clearTimeout(timer);
    };
  }, [measureScroll]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll to the exact measured horizontal distance (in pixels)
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScrollX]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[400vh] bg-[#FAFAFA]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div ref={scrollContainerRef} style={{ x }} className="flex gap-8 pl-[10vw] pr-[10vw]">
          
          {/* Intro Screen */}
          <div className="flex h-[80vh] w-[80vw] flex-col items-center justify-center shrink-0 text-center px-4">
            <div className="mb-4">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
                Portfolio
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Scroll down to explore production systems I&apos;ve designed and deployed.
            </p>
            <div className="animate-bounce">
              <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Project Screens */}
          {PROJECTS.map((project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              className="flex h-[80vh] w-[85vw] max-w-[1000px] shrink-0 flex-col bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg transition-all duration-500 my-auto"
            >
              {/* Browser Window Mockup */}
              <div className="w-full bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 px-3 py-1 text-xs text-gray-500 bg-white border border-gray-200 rounded-md shadow-sm font-mono flex-1 text-center truncate max-w-sm">
                  {project.link.replace('https://', '')}
                </div>
              </div>

              {/* Image Container */}
              <div className="relative w-full h-[45%] overflow-hidden bg-gray-100 border-b border-gray-100 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 1000px"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1 overflow-y-auto">
                <div className="mb-2 text-sm font-bold tracking-widest text-orange-500 uppercase">
                  {project.subtitle}
                </div>
                <h3 className="mb-3 text-3xl font-bold text-gray-900">{project.title}</h3>
                <p className="mb-6 text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="text-center">
                      <span className="block text-sm font-semibold text-gray-900">{metric}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-500"
                >
                  Visit Website
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
