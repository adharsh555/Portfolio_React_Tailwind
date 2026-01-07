import React, { useState } from "react";
import { cn } from "../lib/utils";
import { Code2, Server, Wrench, Layers, Terminal, Database, ShieldCheck, Cpu } from "lucide-react";

const skills = [
  // AI & Architecture
  { name: "LLM Integration (Gemini/OpenAI)", level: 80, category: "ai" },
  { name: "RAG Architectures (Intermediate)", level: 70, category: "ai" },
  { name: "Vector Databases (pgvector)", level: 75, category: "ai" },
  { name: "System Design (Developing)", level: 65, category: "ai" },

  // Backend & Cloud
  { name: "FastAPI / Node.js", level: 80, category: "backend" },
  { name: "PostgreSQL / Redis", level: 80, category: "backend" },
  { name: "Docker / Containerization", level: 70, category: "backend" },
  { name: "AWS / Cloud Deployment", level: 60, category: "backend" },
  { name: "CI/CD Pipelines", level: 70, category: "backend" },

  // Frontend
  { name: "React / Next.js", level: 85, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "State Management (Redux)", level: 75, category: "frontend" },
];

const categories = [
  { id: "all", name: "All Skills", icon: Layers },
  { id: "ai", name: "AI & Architecture", icon: Cpu },
  { id: "backend", name: "Backend & Cloud", icon: Server },
  { id: "frontend", name: "Frontend", icon: Code2 },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Technical <span className="text-primary italic">Foundation</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            A rigorous selection of industry-standard tools and methodologies I've mastered to build high-impact software.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl text-sm md:text-base font-bold transition-all duration-300 border-2",
                activeCategory === cat.id
                  ? "bg-primary border-primary text-primary-foreground shadow-xl shadow-primary/20 scale-105"
                  : "bg-card border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
              )}
            >
              <cat.icon className="w-4 h-4" />
              <span className="whitespace-nowrap">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 md:p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl md:rounded-3xl hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

              <div className="relative z-10 space-y-4 md:space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-base md:text-lg tracking-tight group-hover:text-primary transition-colors">{skill.name}</h3>
                  <span className="text-[10px] md:text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg">
                    {skill.level}%
                  </span>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <div className="w-full h-1.5 md:h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000 ease-in-out group-hover:shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Proficiency</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
