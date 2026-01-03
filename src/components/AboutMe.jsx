import React from 'react';
import { Brain, Briefcase, Code, GraduationCap } from "lucide-react";
import { cn } from '../lib/utils';

export const AboutMe = () => {
  return (
    <section id="about" className="py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Left Side: Text Content */}
          <div className="flex-1 space-y-6 md:space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center md:text-left">
                Behind the <span className="text-primary italic">Code</span>.
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto md:mx-0 transition-all duration-500 hover:w-32" />
            </div>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed text-center md:text-left">
              <p>
                I am a passionate Software Engineer dedicated to architecting solutions that solve complex problems.
                My journey in tech is driven by an insatiable curiosity and a commitment to excellence.
              </p>
              <p>
                With expertise across the full stack, I focus on creating performant, scalable, and inclusive
                digital experiences. I believe that good software is not just about writing code, but about
                understanding the "why" behind every feature.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
              <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/50 transition-colors">
                <Code className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <span className="font-medium text-sm md:text-base">Clean Architecture</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/50 transition-colors">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <span className="font-medium text-sm md:text-base">Continuous Learning</span>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Stats/Highlights */}
          <div className="w-full md:w-1/3 mt-8 md:mt-0 space-y-6 animate-fade-in">
            <div className="p-6 md:p-8 bg-card border border-border rounded-2xl md:rounded-3xl shadow-2xl shadow-primary/5 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-primary/20 transition-all" />

              <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Quick Highlights
              </h3>

              <ul className="space-y-4">
                {[
                  { label: 'Role', value: 'Software Engineer' },
                  { label: 'Experience', value: 'Junior / Full Stack' },
                  { label: 'Focus', value: 'Frontend & Backend' },
                  { label: 'Location', value: 'Remote / Hybrid' },
                ].map((stat) => (
                  <li key={stat.label} className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-xs md:text-sm text-muted-foreground">{stat.label}</span>
                    <span className="text-xs md:text-sm font-semibold">{stat.value}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full mt-8 py-3 bg-card border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all text-sm md:text-base active:scale-95">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
