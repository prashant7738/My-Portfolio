import React, { useState } from 'react';
import { Mail, MapPin, Send, User, Code2, GraduationCap } from 'lucide-react';

const AboutContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message sent! Prashant will get back to you soon.");
  };

  return (
    <section id="about-contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN: ABOUT ME */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 font-['Space_Grotesk'] mb-6">
                About <span className="text-blue-500">Me</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-['Inter']">
                I am a <span className="text-slate-100 font-semibold">Computer Engineering</span> student from Nepal with a deep focus on building functional, logic-driven applications. My journey is defined by a mix of engineering discipline and creative problem solving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl">
                <div className="text-blue-500"><Code2 size={24} /></div>
                <div>
                  <h4 className="text-slate-100 font-bold text-sm">Python Expert</h4>
                  <p className="text-slate-500 text-xs mt-1">100 Days of Course Completed</p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl">
                <div className="text-emerald-500"><GraduationCap size={24} /></div>
                <div>
                  <h4 className="text-slate-100 font-bold text-sm">Engineering</h4>
                  <p className="text-slate-500 text-xs mt-1">Focus on Scalable Systems</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-900">
              <div className="flex items-center gap-4 text-slate-400">
                <MapPin className="text-blue-500" size={20} />
                <span>Lalitpur, Nepal (Available for Remote)</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <Mail className="text-blue-500" size={20} />
                <span>prashantkafle7738@gmail.com</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="relative">
            {/* Decorative Glow */}
            <div className="absolute -inset-2 bg-blue-600/20 rounded-[2rem] blur-xl"></div>
            
            <div className="relative bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-[2rem]">
              <h3 className="text-2xl font-bold text-slate-100 font-['Space_Grotesk'] mb-2">Send a Message</h3>
              <p className="text-slate-500 text-sm mb-8">Have a project? I'm currently open for freelance work.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-slate-500 text-xs uppercase font-bold mb-2 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Enter your name"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-slate-500 text-xs uppercase font-bold mb-2 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="email@example.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-slate-500 text-xs uppercase font-bold mb-2 ml-1">Message</label>
                  <textarea 
                    rows="4"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Tell me about your project..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.98]"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutContact;