import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const MotionDiv = motion.div;

function Home() {
    return (
        <AnimatedSection className="min-h-[75vh] grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] py-8 lg:py-10">
            <MotionDiv initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">Software Engineer • Full Stack Developer</p>
                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[color:var(--text-primary)]">
                    Hi, I&apos;m <span className="block text-[color:var(--accent)]">Krushna Fargade</span>
                </h1>
                <h2 className="mt-4 text-xl sm:text-2xl font-medium text-[color:var(--text-secondary)]">Full Stack Developer • AI Enthusiast • Computer Engineering Student</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
                    Building scalable web applications, AI-powered solutions, and modern digital experiences with a strong focus on clean architecture and measurable outcomes.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <a href="/RESUME-KRUSHNA.pdf" className="btn-primary" download>Download Resume</a>
                    <a href="/projects" className="btn-secondary">View Projects</a>
                    <a href="https://github.com/Krushna-fargade3434" target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
                    <a href="https://www.linkedin.com/in/krushna-fargade3434" target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn</a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-[color:var(--text-secondary)]">
                    <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] px-3 py-2">📍 Pune, India</span>
                    <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] px-3 py-2">Open to Internships</span>
                    <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] px-3 py-2">Available for Full-Time Roles</span>
                </div>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="flex justify-center lg:justify-end">
                <div className="relative">
                    <div className="absolute inset-0 rounded-[2rem] bg-[color:var(--accent)]/10 blur-3xl" />
                    <img src="/self-img.png" alt="Krushna Fargade" className="hero-image relative h-72 w-72 rounded-[2rem] object-cover sm:h-80 sm:w-80 lg:h-96 lg:w-96" loading="eager" />
                </div>
            </MotionDiv>
        </AnimatedSection>
    );
}

export default Home;