import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';

const certifications = [
  { title: 'Full Stack Web Development', provider: 'Apna College', href: 'https://www.apnacollege.in/certificate_v2/68d3fa0826af06db09016814/user/68a5c12cb5cb699ad508be85' },
  { title: 'Full Stack Bootcamp', provider: 'Dr. Angela Yu', href: 'https://www.udemy.com/certificate/UC-6b736f70-f43f-46fa-beb5-5a68344525fa/' },
  { title: 'Database Management Systems', provider: 'NPTEL', href: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS18S63950020001349148' },
  { title: 'Business Intelligence & Analytics', provider: 'NPTEL', href: 'https://storage.googleapis.com/2026-mar-halltickets/certificate-generation-apr26/final/regular/noc26-cs64/NOC26CS64S15010018704786782.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=archive-run%40nptel-exam.iam.gserviceaccount.com%2F20260727%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260727T114553Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=62de187477da733fd18fcab2a4111e450c2ba266914016ed520f431df972c234e9d43baa51651929ae5d2f00e46b9a9f4183b4926380af2795bd26a1f005c9ad0e4e1936f4f7440add731d2ee8ac6b007e4d516e7f7763ebddc2fe62de0bfce1126c4246e34154507466351f6145ab14a2ba016f2c1739951df3f3ecc71d196ca4738d41267a9a81a9f27270548fe9bb168cec46c0a775b68a050d673c0fa5ab7ce334a28a6cf7080e8512f21d341ffa8ffe93f7ddef6b4e82fb7e69069558a3eb8f971fcd75d94caef3603c406be1bce785b2608c550f0176147dcb94ff7937a0efd56bff6bd191bab67d02756fe5a8ebfbc688d09288a5efdcd886077428e7' },
  { title: 'Programming in Java', provider: 'NPTEL', href: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS105S56870017604220527' },
  { title: 'Python for Data Science', provider: 'NPTEL', href: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS104S43180052609139767' },
];

const achievements = [
  { title: 'Chess Winner', detail: 'Kurukshetra Chess Competition — College Level, 2025', icon: '♟️' },
  { title: 'Internship', detail: 'Hands-on experience building full-stack web products and shipping user-facing features.', icon: '💼' },
];

function About() {
  return (
    <AnimatedSection className="py-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="About"
          title="A builder with strong product intuition"
          description="I’m a final-year Computer Engineering student passionate about Full Stack Development, AI, scalable software architecture, and solving real-world problems. I enjoy building responsive applications using React, Node.js, MongoDB, and modern web technologies."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--card-bg)]/80 p-7 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[color:var(--accent)]/10 p-2 text-xl">🎓</div>
              <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">Education</h3>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-page)]/70 p-4">
                <p className="font-semibold text-[color:var(--text-primary)]">B.Tech Computer Engineering (Pursuing) • 2023–2026</p>
                <p className="mt-1 text-sm text-[color:var(--text-secondary)]">VBKBIET, Baramati — CGPA: 8.72/10</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-page)]/70 p-4">
                <p className="font-semibold text-[color:var(--text-primary)]">HSC • 2023</p>
                <p className="mt-1 text-sm text-[color:var(--text-secondary)]">Vidyadham Junior College, Shirur — 74.17%</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--card-bg)]/80 p-7 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[color:var(--accent)]/10 p-2 text-xl">✨</div>
              <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">Quick Facts</h3>
            </div>
            <div className="mt-6 space-y-3 text-sm text-[color:var(--text-secondary)]">
              <div className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-page)]/70 p-3"><span>📍</span><span>Based in Pune, India</span></div>
              <div className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-page)]/70 p-3"><span>💡</span><span>Interested in web apps, AI, and scalable systems</span></div>
              <div className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-page)]/70 p-3"><span>🚀</span><span>Available for internships and full-time roles</span></div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">Certifications</h3>
            <div className="mt-5 grid gap-3">
              {certifications.map((item) => (
                <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-bg)]/80 p-4 transition hover:-translate-y-1 hover:border-[color:var(--accent)] hover:shadow-[0_16px_32px_rgba(15,23,42,0.08)]">
                  <div>
                    <p className="font-medium text-[color:var(--text-primary)]">{item.title}</p>
                    <p className="mt-1 text-sm text-[color:var(--text-secondary)]">{item.provider}</p>
                  </div>
                  <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg-page)] px-3 py-1 text-sm text-[color:var(--accent)]">View Certificate ↗</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">Achievements</h3>
            <div className="mt-5 grid gap-3">
              {achievements.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-bg)]/80 p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-[color:var(--text-primary)]">{item.title}</p>
                      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default About;