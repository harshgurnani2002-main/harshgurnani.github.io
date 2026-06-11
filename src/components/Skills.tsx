'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  colorRgb: string;
  skills: string[];
  featured?: boolean;
}

const categories: SkillCategory[] = [
  {
    title: 'Backend Engineering',
    icon: '⚙️',
    color: '#F97316', // Orange 500
    colorRgb: '249, 115, 22',
    skills: [
      'Python', 'Django', 'FastAPI', 'PostgreSQL',
      'Redis', 'REST APIs', 'WebSocket', 'Microservices',
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: '🧠',
    color: '#8B5CF6', // Violet 500
    colorRgb: '139, 92, 246',
    skills: [
      'Scikit-Learn', 'XGBoost', 'LightGBM', 'CatBoost',
      'Deep Learning', 'LLMs', 'NLP',
    ],
  },
  {
    title: 'Generative AI',
    icon: '✨',
    color: '#F43F5E', // Rose 500
    colorRgb: '244, 63, 94',
    skills: [
      'LangChain', 'LangGraph', 'OpenAI API', 'Gemini API',
      'RAG', 'Prompt Engineering', 'AI Agents', 'Vector Search',
    ],
    featured: true,
  },
  {
    title: 'Infra & DevOps',
    icon: '🏗️',
    color: '#F59E0B', // Amber 500
    colorRgb: '245, 158, 11',
    skills: [
      'Docker', 'Kubernetes', 'AWS (EC2, S3)', 'GitHub Actions',
      'CI/CD', 'Prometheus', 'ELK Stack',
    ],
  },
  {
    title: 'Data Science',
    icon: '📊',
    color: '#0EA5E9', // Sky 500
    colorRgb: '14, 165, 233',
    skills: [
      'Pandas', 'NumPy', 'Feature Engineering', 'Model Evaluation',
      'Data Pipelines',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const chipContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function Skills() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FAFAFA]" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <div className="mb-4 flex justify-center">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              Tech Stack
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Engineering Stack
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Technologies I use to build production systems
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {categories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className={`relative group ${category.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 blur-sm transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${category.color}30, transparent 60%)` }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
      <div
        className="relative h-full rounded-2xl p-6 transition-all duration-500 bg-white"
        style={{
          border: `1px solid ${isHovered ? `${category.color}50` : '#E5E7EB'}`,
          boxShadow: isHovered ? `0 4px 20px rgba(${category.colorRgb}, 0.08)` : '0 1px 2px rgba(0,0,0,0.05)',
        }}
      >
        <div className="mb-5 flex items-center gap-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-all duration-500"
            style={{
              backgroundColor: `rgba(${category.colorRgb}, ${isHovered ? 0.15 : 0.05})`,
            }}
          >
            {category.icon}
          </div>
          <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300" style={{ color: isHovered ? category.color : '#111827' }}>
            {category.title}
          </h3>
        </div>
        <motion.div className="flex flex-wrap gap-2" variants={chipContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {category.skills.map((skill) => (
            <SkillChip key={skill} skill={skill} color={category.color} colorRgb={category.colorRgb} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function SkillChip({ skill, color, colorRgb }: { skill: string; color: string; colorRgb: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      variants={chipVariants}
      className="inline-flex cursor-default select-none items-center rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 bg-gray-50 text-gray-600 border border-gray-200"
      style={{
        backgroundColor: isHovered ? `rgba(${colorRgb}, 0.1)` : undefined,
        borderColor: isHovered ? `rgba(${colorRgb}, 0.3)` : undefined,
        color: isHovered ? color : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {skill}
    </motion.span>
  );
}
