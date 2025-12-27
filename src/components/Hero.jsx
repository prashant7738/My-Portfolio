import React from "react";
import myPhoto from '../assets/my_photo.jpg';

const Hero = () => {

    return (
        <section className="min-h-80 flex flex-col items-center justify-center gap-6">
            <div className="flex">
                <img src={myPhoto} alt="My profile" className="w-32 h-32 md:w-70 md:h-70 rounded-full border-4 border-blue-600" />
            </div>
            <div className="flex text-slate-100 font-bold text-3xl p-x-8 p-y-8 md:p-4">
                Hello, Its Me Prashant Kafle !
            </div>
            

        </section>
    );
};


export default Hero;