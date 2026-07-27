function Home() {
    return(
        <section style={{paddingTop:80, paddingBottom:80}} className="min-h-[60vh] flex items-center px-4 md:px-10">
      
            <div className="flex-1">
                <h5 className="hero-title font-extrabold mb-4">Radhakrushna Ashok Fargade</h5>

                <p className="lead mb-6">Building scalable web applications, AI solutions and modern digital experiences.</p>

                <div className="flex gap-4 items-center mb-6">
                  <a href="/RESUME-KRUSHNA.pdf" className="btn-primary btn-text">⬇ Download Resume</a>
                  <a href="/projects" className="btn-secondary btn-text transition-link" style={{padding:'12px 24px', borderRadius:14, border:`1px solid var(--border)`, color:'var(--text-heading)'}}>View Projects</a>
                </div>

                                <div className="flex gap-4 text-sm muted">
                                    <span className="px-3 py-2 bg-transparent border border-transparent muted">Available for Internship</span>
                                    <span className="px-3 py-2 muted">Pune, India</span>
                                    <span className="px-3 py-2 muted">Open to Work</span>
                                </div>
            </div>

            <div className="flex-1 flex justify-center">
                <img src="/self-img.png" alt="profile" className="hero-image float-slow w-72 h-72 md:w-96 md:h-96 object-cover"/>
            </div>

        </section>
    );
}

export default Home;