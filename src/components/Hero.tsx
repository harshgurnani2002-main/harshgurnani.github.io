'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' as const } },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 150]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.05]);

  return (
    <section id="about" ref={containerRef} className="relative flex min-h-screen w-full items-center overflow-hidden bg-white">
      {/* ── parallax cover image ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <Image
          src="/images/hero-light.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center opacity-80"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* ── light gradient overlay ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/40 via-white/80 to-white" />

      {/* ── main content ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8 mt-16">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} className="mb-4 font-mono text-xs tracking-[0.25em] text-orange-500 font-semibold uppercase">
            Portfolio &mdash; 2025
          </motion.p>
          
          <motion.h1 variants={fadeUp} className="mb-6 text-6xl font-black tracking-tight text-gray-900 md:text-7xl lg:text-8xl">
            Harsh<br />Gurnani
          </motion.h1>

          <motion.h2 variants={fadeUp} className="mb-8 max-w-2xl text-xl font-medium text-gray-600 md:text-2xl">
            Backend Engineer &amp; Generative AI Developer
          </motion.h2>

          <motion.div variants={fadeUp} className="mb-12 flex flex-col gap-2 border-l-4 border-orange-500 pl-4 sm:flex-row sm:items-center sm:gap-6 sm:border-l-0 sm:pl-0">
            <span className="text-sm font-medium text-gray-500">Building Production AI Systems</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-orange-300 sm:block" />
            <span className="text-sm font-medium text-gray-500">LLM Applications</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-orange-300 sm:block" />
            <span className="text-sm font-medium text-gray-500">Scalable Architecture</span>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#projects" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition-all hover:bg-orange-600 shadow-lg shadow-orange-500/30">
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            <a href="/Harsh_Gurnani_Resume.pdf" target="_blank" className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-900 transition-colors hover:border-orange-500 hover:text-orange-500 shadow-sm">
              Download Resume
            </a>

            <a href="#contact" className="group ml-2 inline-flex items-center gap-2 font-medium text-gray-600 transition-colors hover:text-orange-500">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="absolute inset-x-0 bottom-10 z-20 flex flex-col items-center gap-2" variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 1.2 }}>
        <span className="font-mono text-xs font-medium tracking-widest text-gray-400 uppercase">Scroll</span>
        <motion.svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
