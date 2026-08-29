import React from "react";
import { ArrowRight, Brain, Layers, Code2, BookOpen, FileText } from 'lucide-react';
import myPhoto from '../assets/my-image-2.jpeg';

const Hero = () => {

    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 py-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>

            <div className="flex justify-center mb-4">
                <div className="relative group">
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-violet-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                    <img 
                        src={myPhoto} 
                        alt="My profile" 
                        className="relative w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-blue-500 object-cover shadow-2xl shadow-blue-900/40 transition-transform hover:scale-105 duration-300" 
                    />
                </div>
            </div>

            <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                    <Brain size={16} className="text-blue-400" />
                    <span className="text-blue-400 text-sm font-semibold tracking-wide">Gen AI Engineer</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-100 font-['Space_Grotesk'] mb-4">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-violet-400">Prashant</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-300 font-['Inter'] mb-2">Building Intelligent Systems with LLMs & Agentic Workflows</p>
                
                <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-violet-500 mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="max-w-3xl px-4 text-center">
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-['Inter'] mb-8">
                    I engineer <span className="font-bold text-blue-400">production-grade AI systems</span> — not just prompt wrappers.
                    Specializing in <span className="font-bold text-violet-400">RAG pipelines</span>, <span className="font-bold text-cyan-400">multi-agent architectures</span>, and <span className="font-bold text-emerald-400">LLM-powered backends</span> that solve real problems.
                </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-8">
                <div className="bg-slate-900/60 border border-blue-500/30 p-6 rounded-xl text-center hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                    <div className="flex justify-center mb-3"><Brain size={32} className="text-blue-400" /></div>
                    <h3 className="text-slate-100 font-bold font-['Space_Grotesk'] mb-2">Gen AI Engineer</h3>
                    <p className="text-slate-400 text-sm">RAG Pipelines · LangGraph · Multi-Agent Systems · pgvector</p>
                </div>
                <div className="bg-slate-900/60 border border-violet-500/30 p-6 rounded-xl text-center hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/10 transition-all">
                    <div className="flex justify-center mb-3"><Layers size={32} className="text-violet-400" /></div>
                    <h3 className="text-slate-100 font-bold font-['Space_Grotesk'] mb-2">Full-Stack Builder</h3>
                    <p className="text-slate-400 text-sm">FastAPI · Django · React · PostgreSQL · SQLAlchemy</p>
                </div>
                <div className="bg-slate-900/60 border border-cyan-500/30 p-6 rounded-xl text-center hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
                    <div className="flex justify-center mb-3"><Code2 size={32} className="text-cyan-400" /></div>
                    <h3 className="text-slate-100 font-bold font-['Space_Grotesk'] mb-2">Python Expert</h3>
                    <p className="text-slate-400 text-sm">LangChain · LlamaIndex · Groq · HuggingFace · Automation</p>
                </div>
            </div>

            {/* LLM Tech badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl">
                {["LangGraph", "LangChain", "RAG", "pgvector", "Groq", "Llama 3", "HuggingFace", "FastAPI", "Prompt Engineering"].map(tag => (
                    <span key={tag} className="bg-slate-800/80 border border-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full hover:border-blue-500/50 hover:text-blue-300 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                    href="/projects"
                    className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-violet-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-600/50 transition-all transform hover:scale-105 group"
                >
                    View AI Projects
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-slate-800 text-slate-100 px-8 py-3 rounded-lg font-bold border border-slate-700 hover:border-blue-500/50 transition-all"
                >
                    Get In Touch
                </a>
            </div>

            <div className="w-full max-w-4xl px-4">
                <div className="bg-slate-900/70 border border-cyan-500/20 rounded-2xl p-6 md:p-8 shadow-xl shadow-cyan-950/10 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 mb-4">
                                <BookOpen size={14} className="text-cyan-400" />
                                <span className="text-cyan-300 text-xs font-bold tracking-widest uppercase">Research Spotlight</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 font-['Space_Grotesk'] mb-2">
                                Evaluating AI Agents with LLM-Based Judges
                            </h2>
                            <p className="text-slate-400 font-['Inter'] max-w-2xl">
                                Publication on agent evaluation, ranking, and judge-human agreement analysis. A strong signal that your work is not limited to app builds.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="/publications"
                                className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-slate-950 px-5 py-3 rounded-xl font-bold hover:bg-cyan-400 transition-all"
                            >
                                <BookOpen size={16} />
                                View Publication
                            </a>
                            <a
                                href="/IEEE-conference-template-062824.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-slate-800 text-slate-100 px-5 py-3 rounded-xl font-bold border border-slate-700 hover:border-cyan-500/50 transition-all"
                            >
                                <FileText size={16} />
                                Read PDF
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};


export default Hero;
