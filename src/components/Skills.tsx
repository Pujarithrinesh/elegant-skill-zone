import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Palette, Server, Smartphone } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "JavaScript"],
    color: "text-blue-500"
  },
  {
    icon: Server,
    title: "Backend Development", 
    skills: ["Node.js", "Python", "Express", "FastAPI", "REST APIs", "GraphQL"],
    color: "text-green-500"
  },
  {
    icon: Database,
    title: "Database & Cloud",
    skills: ["PostgreSQL", "MongoDB", "AWS", "Docker", "Firebase", "Supabase"],
    color: "text-purple-500"
  },
  {
    icon: Palette,
    title: "Design & UX",
    skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "User Research"],
    color: "text-pink-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["React Native", "Flutter", "iOS", "Android", "Cross-platform"],
    color: "text-orange-500"
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "Webpack", "Vite", "PWA", "Web Performance"],
    color: "text-cyan-500"
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-primary/10 ${category.color} mr-4`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;