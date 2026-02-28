import { motion } from 'framer-motion';
import './Experience.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const jobs = [
  {
    role: 'Senior React Native Engineer',
    company: 'Jumbo',
    location: 'Delhi, India',
    date: '2024 — Present',
    achievements: [
      {
        tag: 'Real-Time Trading',
        color: 'green',
        text: 'Single-handedly architected a real-time Opinion Trading platform in React Native, supporting 50K+ concurrent users across 200+ live events. Engineered the system to handle 1000+ WebSocket events/sec while maintaining smooth 60fps UI through normalized state management and optimized rendering pipelines.',
      },
      {
        tag: 'WebSocket Architecture',
        color: 'orange',
        text: 'Built a resilient real-time WebSocket system that keeps 50K+ users in sync with live market prices. Designed with auto-reconnection, message buffering during network drops, and fault-tolerant event broadcasting, ensuring zero data loss even under unstable connections.',
      },
      {
        tag: 'Payment Infrastructure',
        color: 'green',
        text: 'Architected a multi-gateway payment system integrating Razorpay, Cashfree, and Slice with backend-driven gateway selection and automatic failover — processing 10K+ daily top-ups with real-time status polling, coupon integration, and multi-currency wallet support.',
      },
      {
        tag: 'Gaming Platforms',
        color: 'orange',
        text: 'Built and scaled high-performance real-money gaming platforms including Cricket Fantasy, Ludo, and Plinko — serving 16K+ DAUs and 130K+ MAUs, processing ₹1.5Cr+ in daily top-ups.',
      },
    ],
    metrics: [
      { value: '50K+', label: 'Concurrent Users' },
      { value: '1000+', label: 'Events/sec' },
      { value: '₹1.5Cr+', label: 'Daily Volume' },
      { value: '60fps', label: 'UI Performance' },
    ],
  },
  {
    role: 'React Native Engineer',
    company: 'Robosoft Technologies',
    location: 'India',
    date: '2021 — 2024',
    achievements: [
      {
        tag: 'Server-Driven UI',
        color: 'green',
        text: 'Architected a server-driven UI framework rendering 50+ dynamic components across Home, product catalogue, and product detail screens — enabling backend-controlled layouts, A/B testing, personalized content per user segment, and feature flag rollouts without app updates, with CDN fallback for resilience.',
      },
      {
        tag: 'Push & Analytics',
        color: 'orange',
        text: 'Implemented end-to-end push notification and analytics system with CleverTap — tracking 500+ user events across 3 platforms (CleverTap, Firebase, Linkrunner), with rich push templates, custom notification sounds, deep link routing, and uninstall tracking.',
      },
      {
        tag: 'Performance Engineering',
        color: 'green',
        text: 'Engineered a custom PromiseQueue with pause/resume capability, bounded queue sizing, and event-loop yielding every 100 tasks — preventing UI thread starvation and memory leaks during high-throughput operations, ensuring smooth 60fps performance under load.',
      },
    ],
    metrics: [
      { value: '50+', label: 'Dynamic Components' },
      { value: '500+', label: 'Events Tracked' },
      { value: '3', label: 'Platforms' },
      { value: '60fps', label: 'Under Load' },
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience section-padding" id="experience">
      <div className="container">
        <div className="about__grid">
          <div className="about__label">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="section-number">02</span>
              <span className="section-label">Experience</span>
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
              Where I've made <span className="gradient-text">an impact</span>
            </motion.h2>

            {jobs.map((job) => (
              <motion.div
                className="exp-card"
                key={job.company}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="exp-card__header">
                  <div>
                    <h3 className="exp-card__role">{job.role}</h3>
                    <p className="exp-card__company">
                      {job.company} <span className="exp-card__location">• {job.location}</span>
                    </p>
                  </div>
                  <span className="exp-card__date">{job.date}</span>
                </div>

                <div className="exp-card__body">
                  {job.achievements.map((a) => (
                    <div className="exp-achievement" key={a.tag}>
                      <span className={`exp-tag exp-tag--${a.color}`}>{a.tag}</span>
                      <p>{a.text}</p>
                    </div>
                  ))}
                </div>

                <div className="exp-card__metrics">
                  {job.metrics.map((m) => (
                    <div className="exp-metric" key={m.label}>
                      <span className="exp-metric__value">{m.value}</span>
                      <span className="exp-metric__label">{m.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              className="exp-card exp-card--small"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="exp-card__header">
                <div>
                  <h3 className="exp-card__role">B.E. in Computer Science</h3>
                  <p className="exp-card__company">
                    Srinivas Institute of Technology <span className="exp-card__location">• India</span>
                  </p>
                </div>
                <span className="exp-card__date">2017 — 2021</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
