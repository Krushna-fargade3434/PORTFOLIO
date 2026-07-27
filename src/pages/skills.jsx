import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';

const skillGroups = [
  {
    title: 'Languages',
    icon: '💬',
    items: ['Java', 'JavaScript', 'C++', 'Python'],
  },
  {
    title: 'Frontend',
    icon: '🖼️',
    items: ['React', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'Express', 'REST APIs', 'JWT', 'Postman'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    items: ['MongoDB', 'SQL', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    icon: '🧰',
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Terminal'],
  },
];

function Skills() {
  return (
    <AnimatedSection className="py-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="A modern toolkit for building thoughtful products"
          description="I focus on practical full-stack development with a strong foundation in responsive UI, backend systems, APIs, and data-driven applications."
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div key={group.title} className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--card-bg)]/80 p-6 shadow-[0_16px_35px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]" style={{ transitionDelay: `${index * 60}ms` }}>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[color:var(--accent)]/10 p-2 text-lg">{group.icon}</span>
                <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg-page)] px-3 py-2 text-sm text-[color:var(--text-secondary)]">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Skills;