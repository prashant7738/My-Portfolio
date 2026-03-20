import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Full-Stack Development",
      skills: ["React 18+", "Vite", "Django REST Framework", "Django Channels", "Tailwind CSS", "PostgreSQL"],
      color: "text-blue-500",
      icon: "⚡"
    },
    {
      title: "AI Engineer",
      skills: ["LLM Integration", "Semantic Caching", "ChromaDB", "LangChain"],
      color: "text-emerald-500",
      icon: "🤖"
    },
    {
      title: "Backend & Infrastructure",
      skills: ["Django (DRF)", "WebSockets/Channels", "SQLAlchemy Core", "Redis", "JWT Auth", "CORS/Security"],
      color: "text-purple-500",
      icon: "🔧"
    },
    {
      title: "Data Science & Scraping",
      skills: ["Playwright", "Python Automation", "Selenium", "Beautiful Soup", "Pandas", "Web Scraping"],
      color: "text-pink-500",
      icon: "🕷️"
    },
    {
      title: "Digital Marketing",
      skills: ["WordPress", "SEO Writing", "Email Marketing", "Lead Generation", "AI Marketing"],
      color: "text-cyan-500",
      icon: "📍"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4 font-['Space_Grotesk']">
            Technical <span className="text-blue-600">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-3xl italic font-['Inter'] text-lg">
            Full-stack engineer with expertise in building AI-powered applications, real-time systems, and data-driven solutions. Proficient in frontend frameworks, backend architecture, and emerging AI technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{group.icon}</span>
                <h3 className={`text-lg font-bold font-['Space_Grotesk'] ${group.color}`}>
                  {group.title}
                </h3>
              </div>
              
              <ul className="space-y-3 font-['Inter']">
                {group.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications & Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Django Expert Badge */}
          <div className="p-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-slate-100 font-bold text-xl font-['Space_Grotesk'] mb-2">Django Expert</h4>
                <p className="text-slate-400 font-['Inter']">Certified Django REST Framework Developer with advanced expertise.</p>
              </div>
              <div className="text-4xl">🏆</div>
            </div>
          </div>

          {/* Full-Stack Engineer */}
          <div className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-slate-100 font-bold text-xl font-['Space_Grotesk'] mb-2">Full-Stack Engineer</h4>
                <p className="text-slate-400 font-['Inter']">Building complete solutions from AI backends to responsive frontends.</p>
              </div>
              <div className="text-4xl">🚀</div>
            </div>
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="mt-16 p-8 bg-slate-900 border border-slate-700 rounded-2xl">
          <h3 className="text-xl font-bold text-slate-100 mb-6 font-['Space_Grotesk']">Quick Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Frontend", techs: "React, Vite, Tailwind" },
              { label: "Backend", techs: "Django, DRF, Channels" },
              { label: "Data", techs: "PostgreSQL, SQLAlchemy" },
              { label: "AI", techs: "GPT-5, Groq, Gemini" },
              { label: "Real-time", techs: "WebSockets, Redis" },
              { label: "Maps", techs: "Leaflet, Baato" },
              { label: "Scraping", techs: "Playwright, Selenium" },
              { label: "Auth", techs: "JWT, Token Auth" }
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