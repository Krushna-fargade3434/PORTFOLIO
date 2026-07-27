import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';

const contactWays = [
  { title: 'Email', value: 'fargaderadhakrushna2004@gmail.com', href: 'mailto:fargaderadhakrushna2004@gmail.com', icon: '✉️' },
  { title: 'Phone', value: '+91 77967 76096', href: 'tel:+917796776096', icon: '📞' },
  { title: 'GitHub', value: 'github.com/Krushna-fargade3434', href: 'https://github.com/Krushna-fargade3434', icon: '🐙' },
  { title: 'LinkedIn', value: 'linkedin.com/in/krushna-fargade3434', href: 'https://www.linkedin.com/in/krushna-fargade3434', icon: '🔗' },
];

function Contact() {
  return (
    <AnimatedSection className="py-6">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something meaningful together"
          description="I’m always excited to connect around new opportunities, thoughtful products, and collaborative engineering challenges."
          align="center"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {contactWays.map((item) => (
            <a key={item.title} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--card-bg)]/80 p-6 text-left shadow-[0_16px_35px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[color:var(--accent)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[color:var(--accent)]/10 p-2 text-lg">{item.icon}</span>
                <p className="font-semibold text-[color:var(--text-primary)]">{item.title}</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Contact;