import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);
    return(
        <nav className="site-nav fixed w-full top-0 z-50" role="navigation" aria-label="Main navigation">
            <div className="nav-content max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="Logo flex gap-4 items-center">
                                        <NavLink to="/home" className="flex items-center gap-3" aria-label="Homepage">
                                                <picture>
                                                    <source srcSet="/portfolio-logo.png" type="image" />
                                                    <img src="/portfolio-logo.png" alt="logo" className="h-10 w-10 rounded-full object-cover" />
                                                </picture>
                                                <h1 className="font-semibold text-lg">My Portfolio</h1>
                                        </NavLink>
                </div>
                <button className="md:hidden muted" onClick={() => setOpen(!open)} aria-label="menu" aria-expanded={open} aria-controls="primary-navigation">
                    {open ? '✕' : '☰'}
                </button>

                <div id="primary-navigation" className={`${open ? 'flex' : 'hidden'} md:flex nav-links gap-8`}> 
                    <NavLink to="/home" className={({isActive})=> `nav-link ${isActive? 'active':''}`}>Home</NavLink>
                    <NavLink to="/about" className={({isActive})=> `nav-link ${isActive? 'active':''}`}>About</NavLink>
                    <NavLink to="/skills" className={({isActive})=> `nav-link ${isActive? 'active':''}`}>Technical Expertise</NavLink>
                    <NavLink to="/projects" className={({isActive})=> `nav-link ${isActive? 'active':''}`}>Featured Projects</NavLink>
                    <NavLink to="/contact" className={({isActive})=> `nav-link ${isActive? 'active':''}`}>Contact</NavLink>
                </div>

                <a href="/RESUME-KRUSHNA.pdf" className="btn-primary ml-4" download>⬇ Download Resume</a>
            </div>
        </nav>
    );
}

export default Navbar;