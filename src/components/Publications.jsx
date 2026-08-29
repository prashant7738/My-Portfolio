import React from "react";
import { BookOpen, CalendarDays, ExternalLink, FileText, Users } from "lucide-react";

const Publications = () => {
    const publication = {
        title: "Evaluating AI Agents with LLM-Based Judges",
        authors: "Prashant Kafle, Sunil Paudel",
        venue: "Undergraduate research paper, 2026",
        summary:
            "A comparative study on evaluating agent outputs using ROUGE-L, Bradley-Terry, Elo-style rankings, and judge-human agreement analysis on GAIA-style tasks.",
        pdf: "/IEEE-conference-template-062824.pdf",
    };

    return (
        <section className="min-h-screen py-20 px-6 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                        <BookOpen size={16} className="text-cyan-400" />
                        <span className="text-cyan-300 text-sm font-semibold tracking-wide">Research Output</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-100 font-['Space_Grotesk']">
                        My <span className="text-cyan-400">Publications</span>
                    </h1>
                    <p className="text-slate-400 mt-6 max-w-3xl mx-auto font-['Inter'] text-lg">
                        A place for research work, papers, and academic writing alongside projects and engineering work.
                    </p>
                </div>

                <div className="bg-linear-to-br from-slate-900 via-slate-900 to-cyan-950/30 border border-cyan-500/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-cyan-950/20">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                        <div className="max-w-3xl">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="text-xs font-bold tracking-widest uppercase bg-cyan-500/15 text-cyan-300 rounded px-3 py-1 border border-cyan-500/20">
                                    Paper
                                </span>
                                <span className="text-xs font-bold tracking-widest uppercase bg-slate-800 text-slate-300 rounded px-3 py-1 border border-slate-700">
                                    PDF Available
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 font-['Space_Grotesk'] mb-4">
                                {publication.title}
                            </h2>

                            <div className="space-y-3 text-slate-300 font-['Inter']">
                                <div className="flex items-center gap-3">
                                    <Users size={18} className="text-cyan-400 shrink-0" />
                                    <span>{publication.authors}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CalendarDays size={18} className="text-cyan-400 shrink-0" />
                                    <span>{publication.venue}</span>
                                </div>
                            </div>

                            <p className="text-slate-400 mt-6 leading-relaxed font-['Inter'] text-base md:text-lg">
                                {publication.summary}
                            </p>
                        </div>

                        <div className="lg:min-w-60 flex flex-col gap-4">
                            <a
                                href={publication.pdf}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-slate-950 px-6 py-3 rounded-xl font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25"
                            >
                                <FileText size={18} />
                                Read Paper PDF
                            </a>
                            <a
                                href="/projects"
                                className="inline-flex items-center justify-center gap-2 bg-slate-800 text-slate-100 px-6 py-3 rounded-xl font-bold border border-slate-700 hover:border-cyan-500/50 transition-all"
                            >
                                <ExternalLink size={18} />
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;
