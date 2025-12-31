import React from "react";
import myPhoto from '../assets/my-image-2.jpeg';

const Hero = () => {

    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-6">
            <div className="flex">
                <img src={myPhoto} alt="My profile" className="w-32 h-32 md:w-64 md:h-64 rounded-full border-4 border-blue-600 object-cover shadow-2xl shadow-blue-900/20 transition-transform hover:scale-105 hover:shadow-blue-600/40 duration-300" />
            </div>
            <div className=" text-slate-100 font-bold text-3xl px-8 py-8 md:text-5xl md:p-4">
                Hi, I’m Prashant
            </div>

            {/* <div className="flex px-8 border border-6 border-amber-800 ">
                <p className="text-slate-100 text-xl font-normal md:text-2xl text-justify"> I’m a <span className="font-bold text-slate-500">Computer Engineering</span> student and aspiring <span className="font-bold text-slate-500">Full Stack Developer</span> from Nepal, specializing in Python, Django, and React. I build real-world web applications, automation tools, and data-driven solutions with a strong focus on digital marketing and scalable systems.
                </p>
            </div> */}
            <div className="max-w-2xl px-4 ">
                <p className="text-slate-100 text-lg font-normal md:text-xl md:text-justify leading-relaxed"> From <span className="font-bold text-slate-500">Backend</span> logic to <span className="font-bold text-slate-500">Frontend</span> experience — I build complete solutions. Aspiring full-stack developer specializing in Python, Django, and React.
                </p>
            </div>
            

        </section>
    );
};


export default Hero;