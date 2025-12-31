import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  // Function to scroll back to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Bio Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-100 font-['Space_Grotesk'] tracking-tighter">
              PRASHANT<span className="text-blue-500">.DEV</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Computer Engineering student and Full-Stack Developer specializing in Python, Django, and React. Building scalable solutions from Nepal to the world.
            </p>
          </div>

          {/* Contact & Social Column */}
          <div className="space-y-4">
            <h4 className="text-slate-100 font-bold text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:prashantkafle33@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-blue-500 transition-colors group">
                <Mail size={18} />
                <span>prashantkafle7738@gmail.com</span>
              </a>
              <div className="flex gap-4 pt-2">
                <a href="https://github.com/prashant7738" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/prashantkafle33" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://x.com/PrashantK7738" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation/Back to Top Column */}
          <div className="flex flex-col md:items-end justify-between">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors text-sm font-bold uppercase tracking-widest"
            >
              Back to top <ArrowUp size={16} />
            </button>
            <div className="mt-8 md:mt-0 text-right">
              <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-[10px] font-bold uppercase tracking-tighter">
                Available for Freelance
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Prashant. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-default uppercase tracking-widest">Built with React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;