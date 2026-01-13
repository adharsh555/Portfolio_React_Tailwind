import React from 'react';
import { Brain, Code, User, Target, Sparkles, Download } from "lucide-react";
import profileImg from '../assets/profile.jpg';
import { cn } from '../lib/utils';

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mt-12">

          {/* Left Side: Professional Photo */}
          <div className="relative group shrink-0 w-full flex justify-center lg:w-auto">
            {/* Decorative Rings */}
            <div className="absolute inset-[-15px] rounded-full border border-primary/10 animate-[spin_20s_linear_infinite] transition-all group-hover:border-primary/30 hidden md:block" />
            <div className="absolute inset-[-8px] rounded-full border-2 border-primary/20 transition-all group-hover:scale-105" />

            {/* Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl flex items-center justify-center bg-card">
              <img
                src={profileImg}
                alt="Adharsh P Ajayakumar"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-2 -right-2 lg:bottom-4 lg:right-4 bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold shadow-xl border border-primary/50 text-sm md:text-base">
              Engineer
            </div>
          </div>

          {/* Right Side: Professional Narrative */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-semibold mb-2">
                <User className="w-4 h-4" /> Professional Profile
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Crafting the future with <span className="text-primary italic">Precision</span> & <span className="text-secondary italic">AI</span>.
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                I am a focused <strong>Full-Stack Software Engineer</strong> dedicated to building high-performance, AI-integrated solutions. With a strong foundation in modern web technologies and a specialization in <strong>RAG-driven architectures</strong>, I transform complex technical requirements into elegant, scalable digital experiences.
              </p>
              <p>
                My professional journey is defined by a commitment to <strong>clean architecture</strong> and a restless curiosity for emerging technologies. I blend technical proficiency with a strategic mindset, ensuring that every project is a robust solution that drives real-world value.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-3xl mx-auto lg:mx-0">
              {[
                { icon: Code, title: "Architecture", desc: "Modular & Maintainable" },
                { icon: Brain, title: "AI Systems", desc: "LLM & RAG Integration" },
                { icon: Target, title: "Strategy", desc: "Impact-Driven Growth" },
                { icon: Sparkles, title: "Execution", desc: "Quality-Driven delivery" }
              ].map((pillar, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl hover:border-primary/40 hover:bg-card/60 transition-all group text-left">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm md:text-base">{pillar.title}</h3>
                    <p className="text-xs text-muted-foreground">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="./projects/Adharsh_P_Ajayakumar_CV.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                <Download className="w-5 h-5" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
