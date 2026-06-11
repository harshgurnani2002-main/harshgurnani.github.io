'use client';

import { motion } from 'framer-motion';

const PHILOSOPHIES = [
  {
    title: 'Production-First Mindset',
    description: 'Every line of code I write is meant for production. I build systems that handle real traffic, real users, and real edge cases.',
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'AI with Purpose',
    description: "I don't build AI for the sake of AI. Every model, every pipeline, every agent I create solves a tangible business problem.",
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Systems Thinking',
    description: 'Great software is about architecture, not just code. I design systems that scale, maintain, and evolve gracefully.',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Continuous Evolution',
    description: 'The AI landscape changes weekly. I stay at the frontier through active experimentation, competitions, and continuous learning.',
    color: 'from-emerald-400 to-teal-500',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex justify-center">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              Mindset
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Engineering Philosophy
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Principles that guide my work
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {PHILOSOPHIES.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg"
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
