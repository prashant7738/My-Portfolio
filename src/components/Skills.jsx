import React from 'react';
import { Brain, Layers, Code2, Database, Cpu, Zap } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Gen AI & LLM Engineering",
      skills: ["LangChain / LangGraph", "RAG Pipelines", "Prompt Engineering", "Embedding Models (BGE)", "Groq API / HuggingFace", "Agentic Workflows", "Vector Databases", "Llama 3 / GPT / Gemini"],
      color: "text-blue-400",
      borderHover: "hover:border-blue-400",
      shadowHover: "hover:shadow-blue-500/10",
      icon: <Brain size={28} className="text-blue-400" />
    },
    {
      title: "RAG & Vector Infrastructure",
      skills: ["pgvector (PostgreSQL)", "ChromaDB", "Semantic Search", "Hybrid OCR (PyMuPDF + EasyOCR)", "Document Chunking", "Retrieval Optimization", "Anti-Hallucination Patterns", "Context Window Management"],
      color: "text-violet-400",
      borderHover: "hover:border-violet-400",
      shadowHover: "hover:shadow-violet-500/10",
      icon: <Database size={28} className="text-violet-400" />
    },
    {
      title: "Backend & APIs",
      skills: ["FastAPI", "Django REST Framework", "Django Channels", "SQLAlchemy Core", "PostgreSQL", "Redis", "WebSockets", "JWT Auth"],
      color: "text-cyan-400",
      borderHover: "hover:border-cyan-400",
      shadowHover: "hover:shadow-cyan-500/10",
      icon: <Cpu size={28} className="text-cyan-400" />
    },
    {
      title: "Frontend",
      skills: ["React 18+", "Astro 6", "TypeScript", "Vite", "Tailwind CSS", "Responsive Design"],
      color: "text-emerald-400",
      borderHover: "hover:border-emerald-400",
      shadowHover: "hover:shadow-emerald-500/10",
      icon: <Layers size={28} className="text-emerald-400" />
    },
    {
      title: "Python & Data Engineering",
      skills: ["Pandas / NumPy / SciPy", "Matplotlib", "Playwright / Selenium", "Beautiful Soup", "Python Automation", "Data Pipelines"],
      color: "text-amber-400",
      borderHover: "hover:border-amber-400",
      shadowHover: "hover:shadow-amber-500/10",
      icon: <Code2 size={28} className="text-amber-400" />
    },
    {
      title: "DevOps & Tooling",
      skills: ["Git / GitHub", "Docker (basics)", "Alembic (DB Migrations)", "Vercel / Railway", "Supabase", "Environment Config"],
      color: "text-pink-400",
      borderHover: "hover:border-pink-400",
      shadowHover: "hover:shadow-pink-500/10",
      icon: <Zap size={28} className="text-pink-400" />
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4 font-['Space_Grotesk']">
            Technical <span className="text-blue-500">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-3xl italic font-['Inter'] text-lg">
            Gen AI engineer with a focus on building production-ready LLM applications — RAG systems, multi-agent pipelines, and intelligent backends grounded in solid software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-slate-900 to-slate-800/60 border border-slate-700 p-8 rounded-2xl ${group.borderHover} transition-all duration-300 hover:shadow-lg ${group.shadowHover} group`}
            >
              <div className="flex items-center gap-3 mb-6">
                {group.icon}
                <h3 className={`text-lg font-bold font-['Space_Grotesk'] ${group.color}`}>
                  {group.title}
                </h3>
              </div>
              
              <ul className="space-y-3 font-['Inter']">
                {group.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:bg-blue-400 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Highlight badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/30 rounded-2xl hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-slate-100 font-bold text-xl font-['Space_Grotesk'] mb-2">Multi-Agent Systems</h4>
                <p className="text-slate-400 font-['Inter']">Built a 4-agent LangGraph pipeline for automated data analysis — structural profiling, LLM semantic tagging, preprocessing, and statistical analysis.</p>
              </div>
              <div className="text-4xl ml-4">🤖</div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/30 rounded-2xl hover:border-violet-400 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-slate-100 font-bold text-xl font-['Space_Grotesk'] mb-2">Production RAG System</h4>
                <p className="text-slate-400 font-['Inter']">Deployed a full-stack RAG application with pgvector, BGE embeddings, citation-backed answers, and hallucination-prevention guardrails.</p>
              </div>
              <div className="text-4xl ml-4">🧠</div>
            </div>
          </div>
        </div>

        {/* AI Tech Stack Summary */}
        <div className="mt-16 p-8 bg-slate-900 border border-slate-700 rounded-2xl">
          <h3 className="text-xl font-bold text-slate-100 mb-6 font-['Space_Grotesk']">AI & Full-Stack Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "LLM Frameworks", techs: "LangChain, LangGraph" },
              { label: "LLM Models", techs: "Llama 3, Groq, Gemini" },
              { label: "Vector DB", techs: "pgvector, ChromaDB" },
              { label: "Embeddings", techs: "BGE-small, HuggingFace" },
              { label: "AI Backend", techs: "FastAPI, Django" },
              { label: "Frontend", techs: "React, Astro, Vite" },
              { label: "Data", techs: "Pandas, NumPy, SciPy" },
              { label: "Auth & Infra", techs: "JWT, Supabase, Docker" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm text-slate-300 font-['Inter']">{item.techs}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;