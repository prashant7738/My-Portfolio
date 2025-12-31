import React from "react";
// Import icons for the links
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Project = () => {
    const projectList = [
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

    return (
        <section className="min-h-screen py-20 px-6 bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-100 font-['Space_Grotesk']">
                        My <span className="text-blue-500">Projects</span>
                    </h1>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-['Inter']">
                        Engineering scalable solutions from backend logic to high-converting digital platforms.
                    </p>
                </div>

                {/* PROJECT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projectList.map((project, index) => (
                        <div key={index} className="group bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">
                                        {project.category}
                                    </span>
                                    <div className="flex gap-3">
                                        {/* GitHub Link - Shows only if github exists */}
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {/* Live Link - Shows only if live exists */}
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-100 font-['Space_Grotesk'] mb-4 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 font-['Inter'] leading-relaxed mb-8">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="bg-slate-950 text-slate-400 text-[10px] px-3 py-1 rounded-md border border-slate-800 uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Main Button Link */}
                                <a 
                                    href={project.live || project.github} 
                                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-100 group/link"
                                >
                                    View Details 
                                    <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Freelance CTA */}
                <div className="mt-20 p-10 bg-gradient-to-r from-blue-700 to-blue-600 rounded-3xl text-center shadow-2xl shadow-blue-900/20">
                    <h2 className="text-2xl md:text-3xl font-bold text-white font-['Space_Grotesk'] mb-4">
                        Looking for a Full-Stack Developer?
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-md mx-auto font-['Inter']">
                        I specialize in Python automation and custom WordPress development. Let's build your project.
                    </p>
                    <button className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all transform hover:scale-105">
                        Start a Conversation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Project;