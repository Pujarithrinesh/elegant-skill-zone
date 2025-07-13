import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-secondary">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 shadow-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl font-bold text-primary">
                TP
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Thrinesh Pujari
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Full Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Passionate developer with experience in Python, Flask, HTML/CSS, and JavaScript. 
              Interested in AI and SaaS projects, creating innovative solutions that make a difference.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="animate-glow">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="glass" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
                <Instagram className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;