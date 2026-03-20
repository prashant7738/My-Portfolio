import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import myPhoto from '../assets/my-image-2.jpeg';

const Hero = () => {

    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 py-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="flex justify-center mb-8">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                    <img 
                        src={myPhoto} 
                        alt="My profile" 
                        className="relative w-40 h-40 md:w-72 md:h-72 rounded-full border-4 border-blue-600 object-cover shadow-2xl shadow-blue-900/40 transition-transform hover:scale-105 duration-300" 
                    />
                </div>
            </div>

            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-slate-100 font-['Space_Grotesk'] mb-4">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Prashant</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-300 font-['Inter'] mb-2">Full-Stack Engineer & AI Enthusiast</p>
                
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="max-w-3xl px-4 text-center">
                <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-['Inter'] mb-8">
                    I architect <span className="font-bold text-blue-400">scalable full-stack solutions</span> combining modern backend systems with intuitive frontends. 
                    Specializing in <span className="font-bold text-emerald-400">AI integration</span>, <span className="font-bold text-purple-400">real-time systems</span>, and <span className="font-bold text-amber-400">data-driven applications</span>.
                </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-12">
                <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-xl text-center hover:border-purple-500/50 transition-all">
                    <div className="text-3xl mb-2">💾</div>
                    <h3 className="text-slate-100 font-bold font-['Space_Grotesk'] mb-1">Full Stack Web Developer</h3>
                    <p className="text-slate-400 text-sm">Django Rest Framework Expert and React Builder</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-xl text-center hover:border-blue-500/50 transition-all">
                    <div className="text-3xl mb-2">🏆</div>
                    <h3 className="text-slate-100 font-bold font-['Space_Grotesk'] mb-1">Python Develper</h3>
                    <p className="text-slate-400 text-sm">Advance Python Expert and Web Scrapper</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-xl text-center hover:border-emerald-500/50 transition-all">
                    <div className="text-3xl mb-2">🤖</div>
                    <h3 className="text-slate-100 font-bold font-['Space_Grotesk'] mb-1">AI Engineer</h3>
                    <p className="text-slate-400 text-sm">GPT-5, LLaMA, Gemini</p>
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                    href="/projects"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-600/50 transition-all transform hover:scale-105 group"
                >
                    View My Work
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-slate-800 text-slate-100 px-8 py-3 rounded-lg font-bold border border-slate-700 hover:border-blue-500/50 transition-all"
                >
                    Get In Touch
                </a>
            </div>

        </section>
    );
};


export default Hero;
