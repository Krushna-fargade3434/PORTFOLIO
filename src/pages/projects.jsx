import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';

const MotionArticle = motion.article;

const projects = [
  {
    title: 'BookMyCorner',
    description: 'A full-stack rental marketplace with cloud-based uploads, secure auth, and polished listing management.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Passport.js', 'Cloudinary', 'Bootstrap'],
    live: 'https://bookmycorner34.netlify.app/listings',
    github: 'https://github.com/Krushna-fargade3434/BookMyCorner.git',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'MiniGPT',
    description: 'An AI chat assistant with persistent conversation threads, markdown rendering, and a responsive React experience.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API'],
    live: 'https://mini-gptx.vercel.app',
    github: 'https://github.com/Krushna-fargade3434/MiniGPT',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'PayTrax',
    description: 'A finance tracker with interactive analytics, secure Supabase auth, and modern dashboard interactions.',
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    live: 'https://paytrax.vercel.app',
    github: 'https://github.com/Krushna-fargade3434/PAYTRAX.git',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Weather App',
    description: 'A responsive weather dashboard with live forecasts, search, and polished UI transitions.',
    tech: ['React.js', 'Material-UI', 'JavaScript', 'OpenWeatherMap API', 'Vite'],
    live: '#',
    github: 'https://github.com/Krushna-fargade3434/weatherDost',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Scriblet',
    description: 'A secure notes app with authentication, search, customization, and a clean product experience.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'PWA'],
    live: 'https://scriblet.vercel.app/',
    github: 'https://github.com/Krushna-fargade3434/SCRIBLET',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
  },
];

function Projects() {
  return (
    <AnimatedSection className="py-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Products that combine usability with technical depth"
          description="Each project reflects a blend of thoughtful UX, solid engineering decisions, and strong product instincts."
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <MotionArticle key={project.title} whileHover={{ y: -6, scale: 1.01 }} transition={{ duration: 0.25 }} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--card-bg)]/80 shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[color:var(--text-secondary)]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg-page)] px-3 py-1 text-xs font-medium text-[color:var(--text-secondary)]">{tech}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2">Live Demo ↗</a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost inline-flex items-center gap-2">GitHub ↗</a>
                </div>
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Projects;