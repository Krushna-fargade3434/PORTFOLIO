function About() {
  return (
    <section id="about" style={{paddingTop:120, paddingBottom:120}}>
      <div className="max-w-4xl mx-auto px-4">

        <header className="mb-8">
          <h2 className="text-4xl font-bold mb-2">About Me</h2>
          <p className="muted">Computer Engineering student focused on full‑stack development, data structures, and building reliable, maintainable software.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <div className="md:col-span-2 card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold accent mb-3">Education</h3>
            <div className="space-y-4">
              <div className="">
                <p className="font-medium">B.Tech Computer Engineering (Pursuing) (2023–2026)</p>
                <p className="muted text-sm">VBKBIET, Baramati — CGPA: 8.72/10</p>
              </div>

              <div>
                <p className="font-medium">HSC (2023)</p>
                <p className="muted text-sm">Vidyadham Junior College, Shirur — 74.17%</p>
              </div>

              <div>
                <p className="font-medium">SSC (2021)</p>
                <p className="muted text-sm">Vidyadham Prashala, Shirur — 93%</p>
              </div>
            </div>
          </div>

          <aside className="card p-6 rounded-2xl">
            <h3 className="text-lg font-semibold accent mb-3">Quick Facts</h3>
            <ul className="muted space-y-2 text-sm">
              <li>Location: Pune, India</li>
              <li>Interests: Web Apps, AI, Databases</li>
              <li>Availability: Open to internships</li>
            </ul>
          </aside>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 accent">Certifications</h3>

          <ul className="grid gap-3">
            <li className="card p-4 rounded-xl flex justify-between items-center">
              <span className="text-sm muted">Full Stack Web Development — Apna College</span>
              <a href="https://www.apnacollege.in/certificate_v2/68d3fa0826af06db09016814/user/68a5c12cb5cb699ad508be85" className="transition-link accent">View →</a>
            </li>

            <li className="card p-4 rounded-xl flex justify-between items-center">
              <span className="text-sm muted">Full Stack Bootcamp — Dr. Angela Yu</span>
              <a href="https://www.udemy.com/certificate/UC-6b736f70-f43f-46fa-beb5-5a68344525fa/" className="transition-link accent">View →</a>
            </li>

            <li className="card p-4 rounded-xl flex justify-between items-center">
              <span className="text-sm muted">Database Management Systems — NPTEL</span>
              <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS18S63950020001349148" className="transition-link accent">View →</a>
            </li>

            <li className="card p-4 rounded-xl flex justify-between items-center">
              <span className="text-sm muted">Business Intelligence & Analytics — NPTEL</span>
              <a href="https://storage.googleapis.com/2026-mar-halltickets/certificate-generation-apr26/final/regular/noc26-cs64/NOC26CS64S15010018704786782.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=archive-run%40nptel-exam.iam.gserviceaccount.com%2F20260727%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260727T114553Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=62de187477da733fd18fcab2a4111e450c2ba266914016ed520f431df972c234e9d43baa51651929ae5d2f00e46b9a9f4183b4926380af2795bd26a1f005c9ad0e4e1936f4f7440add731d2ee8ac6b007e4d516e7f7763ebddc2fe62de0bfce1126c4246e34154507466351f6145ab14a2ba016f2c1739951df3f3ecc71d196ca4738d41267a9a81a9f27270548fe9bb168cec46c0a775b68a050d673c0fa5ab7ce334a28a6cf7080e8512f21d341ffa8ffe93f7ddef6b4e82fb7e69069558a3eb8f971fcd75d94caef3603c406be1bce785b2608c550f0176147dcb94ff7937a0efd56bff6bd191bab67d02756fe5a8ebfbc688d09288a5efdcd886077428e7" className="transition-link accent">View →</a>
            </li>

            <li className="card p-4 rounded-xl flex justify-between items-center">
              <span className="text-sm muted">Programming in Java — NPTEL</span>
              <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS105S56870017604220527" className="transition-link accent">View →</a>
            </li>

            <li className="card p-4 rounded-xl flex justify-between items-center">
              <span className="text-sm muted">Python for Data Science — NPTEL</span>
              <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS104S43180052609139767" className="transition-link accent">View →</a>
            </li>


          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mt-6 mb-4 text-indigo-400">Achievements</h3>
          <div className="card p-5 rounded-xl">
            <p>🏆 Winner — Kurukshetra Chess Competition (College Level, 2025)</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;