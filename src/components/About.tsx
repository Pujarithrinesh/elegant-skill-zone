import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "5+" },
    { icon: Award, label: "Projects Completed", value: "50+" },
    { icon: MapPin, label: "Happy Clients", value: "30+" },
    { icon: Download, label: "Code Commits", value: "1000+" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  digital solutions that bridge the gap between design and functionality. My journey 
                  started with curiosity about how websites work, and it has evolved into a deep 
                  expertise in modern web technologies.
                </p>
                <p>
                  I specialize in React, Node.js, and cloud technologies, with a strong focus on 
                  creating user-centered experiences. Whether it's building scalable web applications, 
                  optimizing performance, or crafting intuitive user interfaces, I approach every 
                  project with attention to detail and a commitment to excellence.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community through 
                  blog posts and mentoring.
                </p>
              </div>
            </div>

            {/* Skills highlight */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">What I Do Best</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Full-Stack Development",
                  "UI/UX Design",
                  "Performance Optimization",
                  "API Integration",
                  "Database Design",
                  "Cloud Architecture"
                ].map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Right Content - Stats & Photo */}
          <div className="space-y-8">
            {/* Profile Image */}
            <Card className="overflow-hidden border-0 shadow-elegant bg-gradient-primary p-1">
              <div className="bg-background rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-secondary flex items-center justify-center text-8xl font-bold text-primary">
                  JD
                </div>
              </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="text-center p-6 border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quote */}
            <Card className="border-0 shadow-card bg-primary/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-muted-foreground text-center">
                  "Code is poetry written in logic. Every line should serve a purpose, 
                  every function should tell a story."
                </blockquote>
                <div className="text-center mt-4">
                  <div className="text-sm font-semibold text-primary">- John Developer</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;