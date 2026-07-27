import { motion } from 'framer-motion';

const MotionSection = motion.section;

function AnimatedSection({ children, className = '', delay = 0, fullWidth = false }) {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
      className={`${fullWidth ? '' : 'w-full'} ${className}`}
    >
      {children}
    </MotionSection>
  );
}

export default AnimatedSection;
