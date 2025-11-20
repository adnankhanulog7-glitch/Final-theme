import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, DollarSign, TrendingUp, Heart } from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyYouTubeSection() {
  const benefits: Benefit[] = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Global Reach",
      description: "Access 2+ billion users worldwide and connect with audiences across every continent."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      title: "Monetization Opportunities",
      description: "Multiple revenue streams from ads, sponsorships, memberships, and merchandise."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Long-Term Growth",
      description: "Evergreen content continues generating views and revenue for years after publication."
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-500" />,
      title: "Audience Loyalty",
      description: "Deeper engagement with long-form content turns fans into superfans and customers."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold relative px-8 md:px-0" data-testid="heading-why-youtube">
            <span className="sparkle absolute -left-1 md:left-12 top-2 md:top-1/2 md:-translate-y-1/2 text-cyan-400 text-2xl">✦</span>
            Why Start on YouTube?
            <span className="sparkle absolute -right-1 md:right-12 top-2 md:top-1/2 md:-translate-y-1/2 text-blue-400 text-2xl">✦</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground italic mt-2">
            (Even If You're Not There Yet)
          </p>
        </div>
        
        <p className="text-base md:text-lg text-center max-w-5xl mx-auto mb-16 leading-relaxed">
          If you're crushing it on TikTok, Instagram, or regional platforms like Douyin, but not on YouTube, you're missing out on massive opportunities. With 2.5B+ users worldwide, superior monetization (up to 5x more than short-form platforms), and evergreen content that ranks forever, YouTube is the key to global domination, audience loyalty, and long-term revenue. Our free consultation will show you exactly how to transition and succeed—whether you're a famous creator expanding worldwide or a small brand boosting sales.
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="blue-glow-card overflow-visible transition-all duration-300 border-2"
                data-testid={`card-benefit-${index}`}
              >
                <CardHeader>
                  <div className="mb-4">{benefit.icon}</div>
                  <CardTitle className="font-heading font-bold text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-base">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
