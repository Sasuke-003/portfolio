import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiExternalLink } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const links = [
  {
    label: 'Email',
    value: 'muhammadhafeez896@gmail.com',
    href: 'mailto:muhammadhafeez896@gmail.com',
    icon: <HiMail size={20} />,
  },
  {
    label: 'Phone',
    value: '+91 9731299294',
    href: 'tel:+919731299294',
    icon: <HiPhone size={20} />,
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://linkedin.com/in/',
    icon: <FaLinkedinIn size={18} />,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'View my code',
    href: 'https://github.com/',
    icon: <FaGithub size={18} />,
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="contact__inner">
          <motion.h2
            className="contact__title"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            Let's build something{' '}
            <span className="gradient-text">extraordinary</span>
            <span className="accent">.</span>
          </motion.h2>

          <motion.p
            className="contact__subtitle"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            I'm open to senior roles, architecture consulting, and interesting projects.
            If you're building something ambitious, let's talk.
          </motion.p>

          <motion.div
            className="contact__links"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="contact-card"
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-card__icon">{l.icon}</div>
                <div className="contact-card__info">
                  <span className="contact-card__label">{l.label}</span>
                  <span className="contact-card__value">{l.value}</span>
                </div>
                <HiExternalLink className="contact-card__arrow" size={18} />
              </a>
            ))}
          </motion.div>

          <motion.div
            className="contact__location"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="hero__pulse" />
            Mangalore, India
          </motion.div>
        </div>
      </div>
    </section>
  );
}
