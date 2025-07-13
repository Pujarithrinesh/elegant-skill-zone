import { Button } from "@/components/ui/button";
import { Heart, Github, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">TP</span>
              </div>
              <span className="text-lg font-bold text-foreground">Thrinesh Pujari</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Right - Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-1 mb-4 md:mb-0">
              <span>&copy; {currentYear} Thrinesh Pujari. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and lots of coffee.</span>
            </div>
            <div className="text-center md:text-right">
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;