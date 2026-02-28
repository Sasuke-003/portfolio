import { motion } from 'framer-motion';
import { HiLightningBolt, HiCube, HiCurrencyDollar } from 'react-icons/hi';
import './About.css';

const highlights = [
  {
    icon: <HiLightningBolt size={24} />,
    title: 'Performance Obsessed',
    desc: '60fps animations under heavy load. Optimized rendering pipelines for real-time data streams.',
    color: 'green',
  },
  {
    icon: <HiCube size={24} />,
    title: 'Systems Architect',
    desc: 'Designed fault-tolerant WebSocket systems with auto-reconnection and zero data loss.',
    color: 'orange',
  },
  {
    icon: <HiCurrencyDollar size={24} />,
    title: 'Fintech Veteran',
    desc: 'Built payment infrastructure handling ₹1.5Cr+ daily across multiple gateways.',
    color: 'green',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__label">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="section-number">01</span>
              <span className="section-label">About Me</span>
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
              Turning complex problems into{' '}
              <span className="gradient-text">elegant mobile solutions</span>
            </motion.h2>

            <motion.div
              className="about__text"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              <p>
                I'm a Senior React Native Engineer based in Mangalore, India, with deep expertise in
                building <strong>real-time systems</strong> and <strong>high-scale mobile platforms</strong>.
                My work sits at the intersection of performance engineering and product thinking — I don't
                just write code, I architect systems that handle thousands of concurrent users without breaking a sweat.
              </p>
              <p>
                At <strong>Jumbo</strong>, I single-handedly built an Opinion Trading platform from scratch that
                handles 50K+ concurrent users and processes 1000+ WebSocket events per second while maintaining
                buttery smooth 60fps animations. I've architected payment systems processing over ₹1.5 Crore daily,
                and built gaming platforms that serve 130K+ monthly active users.
              </p>
              <p>
                Previously at <strong>Robosoft Technologies</strong>, I designed server-driven UI frameworks that
                render 50+ dynamic components — enabling zero-downtime feature rollouts and A/B testing without app updates.
                I believe the best engineering is invisible: users just feel that everything works perfectly.
              </p>
            </motion.div>

            <div className="about__highlights">
              {highlights.map((h, i) => (
                <motion.div
                  className={`highlight-card highlight-card--${h.color}`}
                  key={h.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="highlight-card__icon">{h.icon}</div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
