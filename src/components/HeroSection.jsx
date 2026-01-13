import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useEnvironment } from '../context/EnvironmentContext';
import { cn } from '../lib/utils';

const HeroSection = () => {
  const { timeMode } = useEnvironment();

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className={cn(
          "absolute top-10 md:top-20 right-[5%] md:right-[10%] w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl opacity-20 transition-all duration-1000",
          timeMode === 'day' ? "bg-yellow-400" : "bg-blue-600"
        )} />
        <div className={cn(
          "absolute bottom-10 md:bottom-20 left-[5%] md:left-[10%] w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-10 transition-all duration-1000",
          timeMode === 'day' ? "bg-orange-300" : "bg-purple-800"
        )} />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center space-y-6 md:space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h2 className="text-primary font-semibold tracking-wider text-xs md:text-sm uppercase">
            Full-Stack Developer • AI Enthusiast
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Building <span className="text-primary italic">AI-Powered</span> Cloud Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Specializing in Full-Stack Engineering with a focus on RAG pipelines,
            low-latency APIs, and seamless user experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6">
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto group px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="./projects/Adharsh_P_Ajayakumar_CV.pdf"
            download="Adharsh_Resume.pdf"
            className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-full font-bold flex items-center justify-center gap-2 hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95"
          >
            Download Resume
          </a>
          <div className="flex items-center gap-6 md:gap-4 px-6 md:px-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-full mt-2 sm:mt-0">
            <a href="https://github.com/adharsh555" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/adharsh-p-ajayakumar/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            </a>
            <a href="mailto:adharshajay55@gmail.com" title="Email: adharshajay55@gmail.com">
              <Mail className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Unique Liquid Drop Scroll Indicator - Hidden on very small screens */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4 group cursor-pointer">
        <div className="relative h-12 md:h-16 w-[2px]">
          {/* The Line */}
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-[line-glow_2s_infinite]" />
          {/* The Drop */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.8)] animate-[liquid-drop_3s_ease-in-out_infinite]" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
          Explore
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
