import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&h=400",
    technologies: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts using OpenWeather API.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=600&h=400",
    technologies: ["JavaScript", "CSS3", "OpenWeather API", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "Portfolio CMS",
    description: "A headless CMS built for portfolio websites with dynamic content management, SEO optimization, and multi-language support.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
    technologies: ["Next.js", "Strapi", "PostgreSQL", "GraphQL"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "Fitness Tracker",
    description: "A mobile-first fitness tracking application with workout logging, progress visualization, and social sharing features.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&h=400",
    technologies: ["React Native", "Redux", "SQLite", "Charts"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "AI Chatbot Interface",
    description: "An intelligent chatbot interface with natural language processing, context awareness, and integration with various AI models.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=400",
    technologies: ["Python", "FastAPI", "OpenAI", "React", "WebSocket"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, demonstrating expertise across different technologies and domains
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/5 text-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden border-0 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card/60 backdrop-blur-sm"
              style={{ animationDelay: `${(index + featuredProjects.length) * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-primary/5 text-foreground">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-primary/5 text-muted-foreground">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1 text-xs">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-xs">
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
