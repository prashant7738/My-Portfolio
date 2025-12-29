import React from 'react'

const Navbar = () => {
    

    return(
        <nav className='sticky top-0 z-50 bg-slate-900 h-20 '>
            <div className='flex justify-between items-center px-6 py-6'>

                <div className='flex text-blue-600  font-bold text-2xl color-surface h-full px-8 '>My Portfolio</div>

                <div className='hidden md:flex gap-8 text-slate-100 text-2xl h-full'>
                    
                    <a href="/" className='hover:text-blue-400 transition-colors'>Home</a>
                
                    <a href="/projects" className='hover:text-blue-400 transition-colors'>Projects</a>
                    <a href="#about" className='hover:text-blue-400 transition-colors'>About</a>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;



