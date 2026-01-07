import React from 'react';
import { ExternalLink, Github, Code2, Sparkles, Brain, Dumbbell, Container, Share2 } from "lucide-react";
import { cn } from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "AI Fitness Coach",
    subtitle: "Personalized Health Assistant",
    description: "An AI-powered fitness ecosystem built with Next.js 16. Generates tailored workout and diet plans using Gemini AI, featuring PDF exports, voice summaries, and AI image generation.",
    problem: "Bridging the gap between generic fitness advice and personalized user needs using real-time AI generation.",
    solution: "Implemented Gemini 2.0 Flash for low-latency plan generation and structured data export via client-side PDF libraries.",
    role: "Full-Stack Dev",
    tags: ["Next.js", "Gemini AI", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/adharsh555/Ai_fitness_coach",
    demoUrl: "https://ai-fitness-coach-adharsh.vercel.app/",
    icon: Dumbbell
  },
  {
    id: 2,
    title: "Semantic Engine AI",
    subtitle: "High-Performance RAG Platform",
    description: "A robust Retrieval-Augmented Generation (RAG) platform using Gemini embeddings and pgvector. Transforms unstructured documentation into a cited, context-aware knowledge base.",
    problem: "Handling hallucination in AI by grounding responses in specific, indexed documentation.",
    solution: "Architected a RAG pipeline utilizing pgvector for semantic search and hybrid keyword-matching for high recall.",
    role: "Backend Engineer",
    tags: ["React", "Node.js", "PostgreSQL", "Gemini API"],
    githubUrl: "https://github.com/adharsh555/Semantic-Engine-AI-Retrieval",
    demoUrl: "https://semantic-retrieval-ai.vercel.app/",
    icon: Brain
  },
  {
    id: 3,
    title: "Product Importer",
    subtitle: "Containerized Background Processor",
    description: "A high-performance product importer using FastAPI and Celery. Supports streaming CSV uploads, background processing via Redis, and real-time progress updates via SSE.",
    problem: "Efficiently processing multi-gigabyte CSV uploads without blocking the main event loop.",
    solution: "Used Celery workers with a Redis broker to handle intensive I/O tasks asynchronously, providing real-time UI updates via SSE.",
    role: "Applied Engineer",
    tags: ["FastAPI", "Celery", "Redis", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/adharsh555/Product_Importer_",
    demoUrl: "https://product-importer-csv-production.up.railway.app/",
    icon: Container
  },
  {
    id: 4,
    title: "Pair Programming Prototype",
    subtitle: "Real-time Collaborative Editor",
    description: "A real-time collaborative coding environment powered by FastAPI WebSockets. Features instant document sync, room-based collaboration, and persistent editor states.",
    problem: "Maintaining state consistency across multiple concurrent users in a low-latency collaborative environment.",
    solution: "Implemented WebSocket-based state synchronization with a lightweight versioning system to resolve minor conflicts.",
    role: "Full-Stack Dev",
    tags: ["FastAPI", "WebSockets", "React", "Redux Toolkit"],
    githubUrl: "https://github.com/adharsh555/Real-time-Pair-Programming-Prototype",
    demoUrl: "https://live-pair-program.up.railway.app/",
    icon: Share2
  },
  {
    id: 5,
    title: "AI-SecOps",
    subtitle: "Real-Time Threat Detection",
    description: "A robust security layer for AI pipelines, detecting prompt injections and unauthorized access in real-time.",
    problem: "Detecting adversarial prompt attacks in real-time before they reach the core LLM logic.",
    solution: "Deployed a transformer-based classifier at the middleware layer to filter incoming traffic based on security heuritsics.",
    role: "Project Developer",
    tags: ["Python", "Transformers", "Huggingface", "Flask"],
    githubUrl: "https://github.com/adharsh555/AI-secops",
    icon: Sparkles
  },
  {
    id: 6,
    title: "Petoria",
    subtitle: "AI Pet Companion",
    description: "An AI-driven pet care platform offering behavior analysis and smart health reminders. Integrated ML for mood detection.",
    problem: "Personalizing pet care by analyzing health data into actionable, automated reminders.",
    solution: "Integrated Firebase Cloud Functions to trigger health alerts based on time-series behavior data.",
    role: "Mobile/ML Dev",
    tags: ["FlutterFlow", "Firebase", "Machine Learning"],
    demoUrl: "https://1024terabox.com/s/1GS1Zfe4OIjLittZ-0KS8_g",
    githubUrl: "https://github.com/adharsh555/petoria",
    icon: Sparkles
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Featured <span className="text-primary italic">Works</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl">
              Engineering solutions to complex problems through modern AI architectures,
              real-time systems, and scalable cloud infrastructure.
            </p>
          </div>
          <a
            href="https://github.com/adharsh555"
            target="_blank"
            className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors pb-2"
          >
            All Repositories <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card border border-border rounded-2xl md:rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 p-6 md:p-8 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all" />

              <div className="relative z-10 space-y-6 flex-1">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-secondary/50 rounded-xl md:rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                    <project.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-secondary/30 px-2 py-1 rounded-md">
                    {project.role}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">{project.title}</h3>
                  <p className="text-[10px] md:text-xs font-semibold text-primary/80 uppercase tracking-widest">{project.subtitle}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-border/50 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-2">
                    <div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-tighter mb-1">Challenge</h4>
                      <p className="text-xs text-muted-foreground leading-snug">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-tighter mb-1">Architecture</h4>
                      <p className="text-xs text-muted-foreground leading-snug">{project.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 md:px-3 md:py-1 bg-secondary/30 text-[9px] md:text-[10px] font-bold rounded-lg border border-border/50 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-6 pt-6 mt-auto border-t border-border/30">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
