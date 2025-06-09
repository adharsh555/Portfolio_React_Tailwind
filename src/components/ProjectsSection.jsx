import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Resume Reviewer System",
    description: "AI-powered resume reviewer that analyzes grammar, tone, and keyword matching against job descriptions to provide real-time feedback and improvement suggestions.",
    image: "/projects/AI_Resume.png",
    tags: ["React", "TailwindCSS", "FastAPI", "Python", "Huggingface"],
    demoUrl: "#",
    githubUrl: "https://github.com/adharsh555/AI-Powered-Resume-Reviewer",
  },
  {
    id: 2,
    title: "Portfolio Landing Page",
    description: "A beautiful Portfolio using React and Tailwind.",
    image: "/projects/Portfolio.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  
  {
  id: 3,
  title: "Personal Blog Website",
  description:"Full-stack blog platform with responsive design and RESTful APIs using HTML, CSS, JavaScript, Node.js, and EJS.",
  image: "/projects/personal-blog.png", // Replace with actual image path
  tags: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "EJS"],
  demoUrl: "#", // Add actual demo URL if hosted
  githubUrl: "https://github.com/adharsh555/Blog", // Add actual GitHub repo URL
},
{
  id: 4,
  title: "PETORIA – AI-Powered Pet Companion",
  description:
    "An AI-driven pet care platform offering behavior analysis, smart reminders, and real-time support using Firebase, FlutterFlow, and ML.",
  image: "/projects/petoria.png", // Replace with actual image path
  tags: ["FlutterFlow", "Firebase", "AI", "Machine Learning"],
  demoUrl: "https://1024terabox.com/s/1GS1Zfe4OIjLittZ-0KS8_g", // APK or demo link
  githubUrl: "https://github.com/adharsh555/petoria", // Research/publication link
}



];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/adharsh555"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};