import React from "react";
// Import icons for the links
import { Github, ExternalLink, Zap, Award, Database } from 'lucide-react';

const Project = () => {
    const projectList = [
        {
            title: "HealthSaathi",
            description: "AI-powered medical triage web application with instant symptom assessment in Nepali & English. Voice input, real-time maps, user authentication, and offline-ready features.",
            category: "Full-Stack AI",
            tags: ["React", "Django", "GPT-5", "Groq LLM", "Tailwind", "PostgreSQL", "Leaflet.js"],
            github: "https://github.com/prashant7738/HealthSaathi",
            live: "https://healthsaathi.example.com",
            featured: true,
            hackathon: true,
            icon: "🏥",
            highlights: ["AI Symptom Triage", "Voice Input", "Maps Integration", "Bilingual Support"]
        },
        {
            title: "LIVE BIDDING NP",
            description: "Real-time auction platform with live WebSocket bidding, role-aware admin controls, and SQL-first data architecture. JWT authentication with HttpOnly cookies.",
            category: "Full-Stack",
            tags: ["React", "Django Channels", "SQLAlchemy", "PostgreSQL", "WebSockets", "Vite"],
            github: "https://github.com/prashant7738/ProjectBiddingDBMS",
            live: "https://project-bidding-dbms.vercel.app",
            featured: true,
            dbms: true,
            icon: "🔨",
            highlights: ["Real-time WebSockets", "SQLAlchemy Core", "Role-based Auth", "Live Auction Updates"]
        },
        {
            title: "Web Scraping - Playwright",
            description: "Advanced web scraping system using Playwright for fake review detection dataset. Handles dynamic websites with JavaScript rendering and intelligent data extraction.",
            category: "Data Science",
            tags: ["Playwright", "Python", "Data Analysis", "Chrome Automation"],
            github: "https://github.com/prashant7738/playwright-scraper",
            live: "",
            featured: false,
            icon: "🕷️"
        },
        {
            title: "Python 100 Days",
            description: "Deep dive into Python mastery—from basic logic to complex automation scripts and data analysis projects.",
            category: "Python",
            tags: ["Python", "Tkinter", "Pandas"],
            github: "https://github.com/prashant7738/100days_python",
            live: "" // Leave empty if not available
        },
        {
            title: "Web Scrapping Suite",
            description: "A collection of scrapers that extract data from dynamic websites using headless browsers and proxy rotation.",
            category: "Data Science",
            tags: ["Beautiful Soup", "Scrapy", "Selenium"],
            github: "https://github.com/prashant7738/followerapi",
            live: "" 
        },
        {
            title: "WordPress Business Solution",
            description: "Custom built WordPress site for a niche business with integrated SEO and high-performance PageSpeed scores.",
            category: "Digital Marketing",
            tags: ["WordPress", "Elementor", "SEO"],
            github: "", // WordPress usually doesn't have a github repo
            live: "https://footballbootszone.great-site.net"
        },
        {
            title: "Django Rest Framework API",
            description: "A full-featured backend API for an e-commerce platform with JWT authentication.",
            category: "Web Development",
            tags: ["Python", "Django", "DRF"],
            github: "https://github.com/prashant7738/ecommerce_backend",
            live: ""
        }
    ];

    // Separate featured and regular projects
    const featuredProjects = projectList.filter(p => p.featured);
    const regularProjects = projectList.filter(p => !p.featured);

    return (
        <section className="min-h-screen py-20 px-6 bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-100 font-['Space_Grotesk']">
                        My <span className="text-blue-500">Projects</span>
                    </h1>
                    <p className="text-slate-400 mt-6 max-w-2xl mx-auto font-['Inter'] text-lg">
                        Engineering scalable solutions from AI-powered healthcare to real-time auctions. From backend logic to high-converting digital platforms.
                    </p>
                </div>

                {/* FEATURED PROJECTS SECTION */}
                {featuredProjects.length > 0 && (
                    <div className="mb-20">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-10 font-['Space_Grotesk'] flex items-center gap-2">
                            <Zap size={28} className="text-amber-500" />
                            Highlighted Projects
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            {featuredProjects.map((project, index) => (
                                <div 
                                    key={index} 
                                    className={`group relative bg-gradient-to-br rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between h-full
                                        ${project.hackathon 
                                            ? 'from-green-900/30 to-emerald-900/30 border-2 border-emerald-500/50 hover:border-emerald-400 shadow-2xl shadow-emerald-900/20' 
                                            : 'from-purple-900/30 to-blue-900/30 border-2 border-purple-500/50 hover:border-purple-400 shadow-2xl shadow-purple-900/20'
                                        }
                                    `}
                                >
                                    {/* Badge Icons */}
                                    <div className="absolute top-4 right-4 flex items-center gap-2">
                                        {project.hackathon && (
                                            <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-full px-3 py-1 flex items-center gap-1">
                                                <Award size={14} className="text-emerald-400" />
                                                <span className="text-xs font-bold text-emerald-400">HACKATHON</span>
                                            </div>
                                        )}
                                        {project.dbms && (
                                            <div className="bg-purple-500/20 border border-purple-500/50 rounded-full px-3 py-1 flex items-center gap-1">
                                                <Database size={14} className="text-purple-400" />
                                                <span className="text-xs font-bold text-purple-400">DBMS</span>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-start mb-4 mt-8">
                                            <div>
                                                <span className="text-xs font-bold tracking-widest uppercase bg-blue-500/20 text-blue-300 rounded px-3 py-1 inline-block">
                                                    {project.category}
                                                </span>
                                                <div className="text-3xl mt-3">{project.icon}</div>
                                            </div>
                                            <div className="flex gap-3">
                                                {project.github && (
                                                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform">
                                                        <Github size={22} />
                                                    </a>
                                                )}
                                                {project.live && (
                                                    <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-110 transform">
                                                        <ExternalLink size={22} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-bold text-slate-100 font-['Space_Grotesk'] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-300 font-['Inter'] leading-relaxed mb-6 text-base">
                                            {project.description}
                                        </p>

                                        {/* Highlights */}
                                        {project.highlights && (
                                            <div className="grid grid-cols-2 gap-2 mb-6">
                                                {project.highlights.map((highlight, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                                        {highlight}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="bg-slate-950/50 text-slate-300 text-[9px] px-3 py-2 rounded-md border border-slate-700 uppercase tracking-widest font-semibold hover:border-blue-500/70 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-600/50 transition-all transform hover:scale-105">
                                            View Full Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* REGULAR PROJECTS SECTION */}
                {regularProjects.length > 0 && (
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-10 font-['Space_Grotesk'] flex items-center gap-2">
                            <span className="text-xl">📊</span>
                            Other Projects
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regularProjects.map((project, index) => (
                                <div 
                                    key={index} 
                                    className="group bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 rounded px-2 py-1">
                                                {project.category}
                                            </span>
                                            <div className="flex gap-2">
                                                {project.github && (
                                                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                                                        <Github size={18} />
                                                    </a>
                                                )}
                                                {project.live && (
                                                    <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                                                        <ExternalLink size={18} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-100 font-['Space_Grotesk'] mb-3 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 font-['Inter'] leading-relaxed mb-4 text-sm">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="bg-slate-950 text-slate-400 text-[8px] px-2 py-1 rounded border border-slate-800 uppercase tracking-widest font-semibold">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {(project.live || project.github) && (
                                            <a 
                                                href={project.live || project.github} 
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 group/link transition-colors"
                                            >
                                                Explore
                                                <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="mt-20 p-12 bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 rounded-3xl text-center shadow-2xl shadow-blue-900/40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-4">
                            Let's Build Something Extraordinary
                        </h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto font-['Inter'] text-base">
                            With expertise in AI integration, real-time systems, full-stack development, and data science, I'm ready to bring your vision to life.
                        </p>
                        <a 
                            href="/contact"
                            className="inline-block bg-white text-blue-700 px-12 py-4 rounded-full font-bold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Start a Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;