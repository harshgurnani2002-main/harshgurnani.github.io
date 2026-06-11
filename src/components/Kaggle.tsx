'use client';

import { motion } from 'framer-motion';

const STATS = [
  { label: 'Active Competitor', value: 'Kaggle' },
  { label: 'ML Bootcamp', value: 'Certified' },
  { label: 'Models Deployed', value: '6+' },
  { label: 'Technologies', value: '15+' },
];

const TOOLKIT = [
  'Scikit-Learn', 'XGBoost', 'LightGBM', 'CatBoost',
  'PyTorch', 'TensorFlow', 'Pandas', 'NumPy',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Kaggle() {
  return (
    <section id="kaggle" className="relative py-32 bg-[#FAFAFA]">
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
              Data Science
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Kaggle &amp; ML Achievements
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Competitive machine learning &amp; data science
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 text-center"
            >
              <div className="mb-2 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-red-500 sm:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-6 text-xl font-semibold text-gray-900">Machine Learning Toolkit</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {TOOLKIT.map((tool) => (
              <motion.span
                key={tool}
                variants={chipVariants}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-orange-300 hover:text-orange-600"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12"
          >
            <a
              href="https://kaggle.com/harshgurnani08"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-orange-500 hover:shadow-orange-500/25"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.075.305z" />
              </svg>
              View Kaggle Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
