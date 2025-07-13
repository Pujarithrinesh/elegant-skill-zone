import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john@developer.com",
      href: "mailto:john@developer.com"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-gray-900" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-blue-400" },
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-elegant bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com"
                  className="border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Project Collaboration"
                  className="border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..."
                  className="min-h-32 border-border focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.label}
                  className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/60 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <a 
                          href={info.href}
                          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="border-0 shadow-card bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-3 rounded-full bg-primary/10 text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="border-0 shadow-card bg-gradient-primary/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-lg font-semibold text-foreground">Available for Work</div>
                    <div className="text-sm text-muted-foreground">
                      Currently accepting new projects and collaborations
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;