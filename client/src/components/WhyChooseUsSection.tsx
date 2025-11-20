import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Rocket, TrendingUp, Users, Globe, Shield } from "lucide-react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyChooseUsSection() {
  const reasons: Reason[] = [
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Specialized Expertise",
      description: "YouTube-first approach with certified experts who live and breathe the platform's algorithm and best practices."
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "From Scratch to Success",
      description: "We build channels from the ground up, handling everything from initial setup to viral growth strategies."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Proven Track Record",
      description: "50+ successful channel launches and 1,500+ optimized videos speak to our consistent results."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Client-Centric Approach",
      description: "Your success is our success. We work as an extension of your team, not just another agency."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Global Focus",
      description: "International presence with local expertise in major markets across the US, Europe, and Asia."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Risk-Free Guarantee",
      description: "We're so confident in our services, we offer a satisfaction guarantee on all our packages."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6 relative px-8 md:px-0" data-testid="heading-why-choose">
          <span className="sparkle absolute -left-1 md:left-12 top-2 md:top-1/2 md:-translate-y-1/2 text-cyan-400 text-2xl">✦</span>
          Why ShlGrow is the Best Choice
          <span className="sparkle absolute -right-1 md:right-12 top-2 md:top-1/2 md:-translate-y-1/2 text-blue-400 text-2xl">✦</span>
        </h2>
        
        <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          In a crowded market of content agencies, we stand out by delivering measurable results, 
          personalized strategies, and unwavering commitment to your channel's success.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="blue-glow-card overflow-visible transition-all duration-300 border-2"
              data-testid={`card-reason-${index}`}
            >
              <CardHeader>
                <div className="mb-4">{reason.icon}</div>
                <CardTitle className="font-heading text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
