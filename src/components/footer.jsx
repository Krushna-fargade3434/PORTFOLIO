function Footer() {
    const links = [
        { label: 'GitHub', href: 'https://github.com/Krushna-fargade3434', icon: '↗' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krushna-fargade3434', icon: '↗' },
        { label: 'LeetCode', href: 'https://leetcode.com/u/KrushnaFargade/', icon: '↗' },
        { label: 'Email', href: 'mailto:fargaderadhakrushna2004@gmail.com', icon: '✉' },
    ]

    return (
        <footer className="border-t border-[color:var(--border)] py-10 sm:py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Available for opportunities</p>
                <h2 className="mt-3 text-xl font-semibold text-[color:var(--text-primary)]">
                    Designed & Developed by Krushna Fargade
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[color:var(--text-secondary)]">
                    Building thoughtful products, polished interfaces, and reliable web experiences with a focus on performance and clarity.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    {links.map((link) => (
                        <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] px-3 py-2 text-sm text-[color:var(--text-secondary)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]">
                            <span>{link.icon}</span>
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>

                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[color:var(--text-secondary)]">
                    © {new Date().getFullYear()} Krushna Fargade. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;