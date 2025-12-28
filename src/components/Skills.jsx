import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Full-Stack Development",
      skills: ["Python (100 Days Completed)", "Django(DRF)", "React", "PostgreSQL"],
      color: "text-blue-500"
    },
    {
      title: "Data Science & Automation",
      skills: ["Data Science", "Web Scraping", "Selenium", "Scrapy"],
      color: "text-emerald-500"
    },
    {
      title: "Marketing & CMS",
      skills: ["WordPress Website Building", "Digital Marketing", "SEO", "Niche Strategy"],
      color: "text-amber-500"
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
          <p className="text-slate-400 mt-6 max-w-2xl italic font-['Inter']">
            "Engineering scalable backends, interactive frontends, and data-driven marketing solutions."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div 
              key={index} 
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-6 font-['Space_Grotesk'] ${group.color}`}>
                {group.title}
              </h3>
              
              <ul className="space-y-4 font-['Inter']">
                {group.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-center text-slate-300">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Milestone Badge */}
        <div className="mt-16 p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🏆</div>
            <div>
              <h4 className="text-slate-100 font-bold text-xl font-['Space_Grotesk']">100 Days of Python</h4>
              <p className="text-slate-400 font-['Inter']">Challenge successfully completed. 100+ days of consistent coding.</p>
            </div>
          </div>
          <div className="bg-emerald-500 text-slate-950 px-6 py-2 rounded-full font-bold text-sm">
            CERTIFIED
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;