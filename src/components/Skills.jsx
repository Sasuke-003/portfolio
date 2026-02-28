import { motion } from 'framer-motion';
import './Skills.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const categories = [
  {
    title: 'Core',
    items: ['React Native', 'React.js', 'TypeScript', 'JavaScript ES6+'],
  },
  {
    title: 'State & Data',
    items: ['Zustand', 'Redux', 'TanStack Query', 'WebSocket'],
  },
  {
    title: 'Animation & UI',
    items: ['Reanimated', 'Gesture Handler', 'Skia', 'Lottie'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express', 'REST APIs', 'WebSocket Server'],
  },
  {
    title: 'Tooling',
    items: ['Android Studio', 'Xcode', 'CI/CD', 'OTA Updates'],
  },
  {
    title: 'Performance',
    items: ['Radon', 'Flashlight', 'RN Devtools', 'Profiling'],
  },
];

export default function Skills() {
  return (
    <section className="skills section-padding" id="skills">
      <div className="container">
        <div className="about__grid">
          <div className="about__label">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="section-number">04</span>
              <span className="section-label">Tech Stack</span>
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
              Tools of the <span className="gradient-text">trade</span>
            </motion.h2>

            <motion.div
              className="skills__grid"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              {categories.map((cat) => (
                <div className="skill-category" key={cat.title}>
                  <h4 className="skill-category__title">{cat.title}</h4>
                  <div className="skill-category__items">
                    {cat.items.map((item) => (
                      <div className="skill-item" key={item}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
