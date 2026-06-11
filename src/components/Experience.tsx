'use client';

import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    title: 'Backend & AI Developer Intern',
    organization: 'Pyonix Technologies',
    date: 'Jan 2025 – Present',
    achievements: [
      'Engineered 6+ microservices with Django REST Framework and FastAPI',
      'Created AI-driven workflow automation with LangChain and LangGraph',
      'Optimized PostgreSQL queries cutting API response time by 44%',
      'Architected real-time notification systems via WebSocket and FCM',
      'Configured CI/CD pipelines with GitHub Actions and Docker',
      'Expanded test coverage with PyTest across 20+ endpoints',
    ],
  },
  {
    title: 'B.E. in Information Technology',
    organization: 'Sardar Patel College of Engineering',
    date: 'Graduated July 2025',
    achievements: [
      'CGPA: 8.5/10.0',
      'Focus: AI, Machine Learning, Backend Systems',
    ],
  },
  {
    title: 'Certifications & Achievements',
    organization: 'Various',
    date: '2024 - 2025',
    achievements: [
      'Complete ML Bootcamp (Krish Naik, Udemy) — ML, DL, NLP, Deployment',
      'TCS NQT — Cleared & shortlisted for TCS Prime Interview 2026',
      'Kaggle Competitor — Active in ML competitions',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Experience() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FAFAFA]" id="experience">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mb-20 text-center"
        >
          <div className="mb-4 flex justify-center">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              Journey
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Experience &amp; Education
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            My professional journey
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-orange-200 via-orange-400 to-transparent md:left-1/2 md:-ml-px" />

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="relative flex flex-col gap-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div key={index} variants={itemVariants} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                  <div className="absolute left-4 md:left-1/2 -ml-[5px] mt-1.5 h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.6)]" />

                  <div className="pl-12 md:pl-0 md:w-1/2" />
                  
                  <div className={`pl-12 md:pl-0 md:w-1/2 flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow relative w-full">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-4">
                        {exp.date}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <h4 className="text-orange-500 font-medium mb-4">{exp.organization}</h4>
                      
                      <ul className={`flex flex-col gap-2 text-gray-600 text-sm leading-relaxed ${isEven ? 'text-left' : 'md:text-right text-left'}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className={`flex ${isEven ? 'items-start' : 'md:items-start md:flex-row-reverse items-start'} gap-2`}>
                            <span className="text-orange-400 mt-0.5 text-xs">▹</span>
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
