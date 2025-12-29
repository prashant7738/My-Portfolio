import React from "react";

const Project = () =>{

    const projectList = [

        {
            title : "WordPress Solution For Buisness",
            description : " I created a website ",
            category : "Digital Marketing",
            tags : ["WordPress", "Elementor", "SEO"],
            link : "#"

        },
        {
            title : "WordPress Solution For Buisness",
            description : " I created a website ",
            category : "Digital Marketing",
            tags : ["WordPress", "Elementor", "SEO"],
            link : "#"
        },
        {
            title : "WordPress Solution For Buisness",
            description : " I created a website ",
            category : "Digital Marketing",
            tags : ["WordPress", "Elementor", "SEO"],
            link : "#"

        }
    ];

    return(
        <section className="min-h-screen py-20 px-6">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-100 font-['Space_Grotesk']">
                    My <span className="text-blue-500">Projects</span>
                </h1>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-['Inter']">
                    A collection of my work in Web Development, Data Science, and Digital Marketing.
                </p>
            </div>

            {/* GRID OF ALL PROJECTS */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    projectList.map((project, index) => (
                         
                        <div key={index} className="group relative bg-slate-900 border-slate-800 p-8 rounded-3xl hover:bg-slate-900/80 transition-all duration-300 ">
                            <span className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-4 block ">{project.category}</span>

                            <h3 className="text-slate-100 font-['Space_Grotesk'] mb-4 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                        </div>

                    )
                )
                };
            </div>
        </section>

    );

};


export default Project;