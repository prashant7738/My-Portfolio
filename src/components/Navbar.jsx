import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import icons for the menu
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    // State to track if the mobile menu is open
    const [isOpen, setIsOpen] = useState(false);

    // Function to close menu when a link is clicked
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className='sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 h-20'>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-6 h-full'>
                
                {/* Brand / Logo */}
                <Link to="/" className='text-blue-600 font-bold text-2xl tracking-tighter'>
                    PRASHANT-<span className='text-slate-100'>KAFLE</span>
                </Link>

                {/* Desktop Navigation (Hidden on Mobile) */}
                <div className='hidden md:flex gap-10 text-slate-100 font-medium items-center'>
                    <Link to="/" className='hover:text-blue-400 transition-colors'>Home</Link>
                    <Link to="/projects" className='hover:text-blue-400 transition-colors'>Projects</Link>
                    <Link to="/contact" className='bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all'>
                        Contact Me
                    </Link>
                </div>

                {/* Mobile Menu Button (Visible only on Mobile) */}
                <div className='md:hidden flex items-center'>
                    <button onClick={toggleMenu} className='text-slate-100 focus:outline-none'>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {/* This div only shows when isOpen is true */}
            {isOpen && (
                <div className='md:hidden bg-slate-900 border-b border-slate-800 absolute w-full left-0 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300'>
                    <Link to="/" onClick={toggleMenu} className='text-slate-100 text-lg font-medium hover:text-blue-400'>
                        Home
                    </Link>
                    <Link to="/projects" onClick={toggleMenu} className='text-slate-100 text-lg font-medium hover:text-blue-400'>
                        Projects
                    </Link>
                    <Link to="/contact" onClick={toggleMenu} className='bg-blue-600 text-white text-center py-3 rounded-xl font-bold'>
                        Contact Me
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;