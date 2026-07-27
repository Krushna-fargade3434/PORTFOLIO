function Footer() {
    return (
        <footer className="py-6" style={{borderTop: '1px solid var(--border)'}}>
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className=" text-lg font-semibold">
                    RadhaKrushna Fargade
                </h2>

                <p className="mt-1 text-sm muted">
                    Building scalable web applications, AI-powered solutions and meaningful digital experiences.
                </p>

                <div className="mt-4 flex items-center justify-center gap-4">
                    <a href="https://github.com/Krushna-fargade3434" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
                    <a href="https://www.linkedin.com/in/krushna-fargade3434" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
                    <a href="mailto:fargaderadhakrushna2004@gmail.com" className="footer-link">Email</a>
                    <a href="https://leetcode.com/u/KrushnaFargade/" target="_blank" rel="noreferrer" className="footer-link">LeetCode</a>
                </div>

                <p className="mt-3 text-xs muted">
                    © {new Date().getFullYear()} RadhaKrushna. All rights reserved.
                </p>

      </div>
        </footer>
    )
}

export default Footer;