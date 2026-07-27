import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="site-nav fixed w-full top-0 z-50" role="navigation" aria-label="Main navigation">
            <div className="nav-content max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
                <NavLink to="/home" className="flex items-center gap-3" aria-label="Homepage">
                    <img src="/portfolio-logo.png" alt="Krushna Fargade logo" className="h-10 w-10 rounded-full object-cover ring-2 ring-[color:var(--accent)]/25" />
                    <div className="leading-tight">
                        <p className="font-semibold text-[color:var(--text-primary)] tracking-wide">KRUSHNA</p>
                        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--text-secondary)]">Portfolio</p>
                    </div>
                </NavLink>

                <button className="md:hidden rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] p-2 text-[color:var(--text-primary)]" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} aria-controls="primary-navigation">
                    {open ? '✕' : '☰'}
                </button>

                <div id="primary-navigation" className={`${open ? 'flex' : 'hidden'} md:flex nav-links gap-6 md:gap-8`}>
                    <NavLink to="/home" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
                    <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
                    <NavLink to="/skills" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Skills</NavLink>
                    <NavLink to="/projects" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
                    <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
                </div>

                <a href="/RESUME-KRUSHNA.pdf" className="btn-primary hidden md:inline-flex" download>
                    Resume
                </a>
            </div>
        </nav>
    );
}

export default Navbar;