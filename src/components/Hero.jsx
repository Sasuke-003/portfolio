import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import './Hero.css';

const stats = [
  { value: '4.5+', label: 'Years Experience' },
  { value: '130K+', label: 'Monthly Users' },
  { value: '50K+', label: 'Concurrent Users' },
  { value: '₹1.5Cr+', label: 'Daily Transactions' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-grid" />
      <motion.div
        className="hero__content container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero__badge" variants={fadeUp}>
          <span className="hero__pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1 className="hero__title" variants={fadeUp}>
          I build{' '}
          <span className="gradient-text">high-performance</span>
          <br />
          mobile experiences<span className="accent">.</span>
        </motion.h1>

        <motion.p className="hero__subtitle" variants={fadeUp}>
          Senior React Native Engineer crafting real-time systems, real-money platforms,
          and scalable architectures that serve{' '}
          <span className="hero__highlight">130K+ monthly active users</span>.
        </motion.p>

        <motion.div className="hero__stats" variants={fadeUp}>
          {stats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div className="hero__actions" variants={fadeUp}>
          <a href="#projects" className="btn btn--primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn--secondary">
            Get In Touch
          </a>
        </motion.div>

        <motion.div className="hero__scroll" variants={fadeUp}>
          <HiArrowDown size={18} />
          <div className="hero__scroll-line" />
        </motion.div>
      </motion.div>
    </section>
  );
}
