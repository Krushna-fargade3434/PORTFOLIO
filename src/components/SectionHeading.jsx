import { motion } from 'framer-motion';

const MotionDiv = motion.div;

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)] mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--text-primary)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base md:text-lg leading-8 text-[color:var(--text-secondary)]">
          {description}
        </p>
      ) : null}
    </MotionDiv>
  );
}

export default SectionHeading;
