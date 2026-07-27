
function Contact() {
  return (
    <section
      id="contact"
      style={{paddingTop:120, paddingBottom:120}}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="section-title mb-4">Let's Build Something Together</h2>

        <p className="muted mb-10">
          Feel free to reach out for collaboration or opportunities
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          <a
            href="mailto:fargaderadhakrushna2004@gmail.com"
            className="card contact-card rounded-xl p-6 transition"
          >
            <p className="accent font-semibold">📧 Email</p>
            <p className="muted text-sm mt-2 break-all">
              fargaderadhakrushna2004@gmail.com
            </p>
          </a>

          <a
            href="tel:+917796776096"
            className="card contact-card rounded-xl p-6 transition"
          >
            <p className="accent font-semibold">📞 Phone</p>
            <p className="muted text-sm mt-2">
              +91 77967 76096
            </p>
          </a>

          <a
            href="https://github.com/Krushna-fargade3434"
            target="_blank"
            rel="noreferrer"
            className="card contact-card rounded-xl p-6 transition"
          >
            <p className="accent font-semibold">🐙 GitHub</p>
            <p className="muted text-sm mt-2">
              github.com/Krushna-fargade3434
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/krushna-fargade3434"
            target="_blank"
            rel="noreferrer"
            className="card contact-card rounded-xl p-6 transition"
          >
            <p className="accent font-semibold">🔗 LinkedIn</p>
            <p className="muted text-sm mt-2">
              linkedin.com/in/krushna-fargade3434
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;