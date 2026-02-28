import { motion } from 'framer-motion';
import './Projects.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
  {
    num: '01',
    title: 'Real-Time Opinion Trading Platform',
    desc: 'A full-scale opinion trading platform built from the ground up in React Native. Users trade on live events with real-time price fluctuations powered by WebSocket streams. Architected for 50K+ concurrent users with normalized state management, optimized list rendering, and sub-100ms UI updates.',
    tags: ['React Native', 'WebSocket', 'Zustand', 'Real-Time', 'TypeScript'],
    stats: ['50K+ concurrent users', '200+ live events', '1000+ events/sec'],
    color: 'green',
    large: true,
  },
  {
    num: '02',
    title: 'Multi-Gateway Payment Engine',
    desc: 'Resilient payment infrastructure integrating Razorpay, Cashfree, and Slice with intelligent gateway routing, automatic failover, and real-time transaction polling. Handles ₹1.5Cr+ in daily volume.',
    tags: ['Razorpay', 'Cashfree', 'Real-Time Polling', 'Multi-Currency'],
    stats: ['₹1.5Cr+ daily', '10K+ daily top-ups'],
    color: 'orange',
  },
  {
    num: '03',
    title: 'Real-Money Gaming Suite',
    desc: 'High-performance gaming platforms — Cricket Fantasy, Ludo, and Plinko — with real-time multiplayer, animated game mechanics using Reanimated & Skia, and seamless wallet integration.',
    tags: ['React Native', 'Reanimated', 'Skia', 'Gaming'],
    stats: ['16K+ DAUs', '130K+ MAUs'],
    color: 'green',
  },
  {
    num: '04',
    title: 'Server-Driven UI Framework',
    desc: 'A dynamic rendering engine that transforms backend JSON configurations into native UI components. Powers 50+ component types with A/B testing, personalization, and feature flags — all without app updates.',
    tags: ['SDUI', 'Dynamic Rendering', 'A/B Testing', 'Feature Flags'],
    stats: ['50+ components', 'Zero-downtime rollouts'],
    color: 'orange',
  },
  {
    num: '05',
    title: 'Fault-Tolerant WebSocket System',
    desc: 'Custom WebSocket infrastructure with auto-reconnection, message buffering during network drops, heartbeat monitoring, and exponential backoff. Ensures zero data loss for 50K+ concurrent connections.',
    tags: ['WebSocket', 'Auto-Reconnect', 'Message Queue', 'Fault Tolerance'],
    stats: ['Zero data loss', '50K+ connections'],
    color: 'green',
  },
];

export default function Projects() {
  return (
    <section className="projects section-padding" id="projects">
      <div className="container">
        <div className="about__grid">
          <div className="about__label">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="section-number">03</span>
              <span className="section-label">Featured Work</span>
            </motion.div>
          </div>

          <div className="about__content">
            <motion.h2
              className="section-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              Systems built for <span className="gradient-text">scale & speed</span>
            </motion.h2>

            <div className="projects__grid">
              {projects.map((p, i) => (
                <motion.div
                  className={`project-card project-card--${p.color} ${p.large ? 'project-card--large' : ''}`}
                  key={p.num}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="project-card__num">{p.num}</span>
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.desc}</p>
                  <div className="project-card__tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-card__stats">
                    {p.stats.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
