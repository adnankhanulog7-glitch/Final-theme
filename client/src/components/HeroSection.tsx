import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  backgroundImage: string;
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #0b1120 0%, #1e293b 50%, #0f172a 100%)',
        }}
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-blue-500/30 rounded-lg floating-particle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-20 h-20 border-2 border-cyan-400/30 rounded-full floating-particle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-blue-400/30 floating-particle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-14 h-14 border-2 border-cyan-500/30 rounded-lg floating-particle" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-20 right-32 w-10 h-10 border-2 border-blue-300/30 rounded-full floating-particle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-52 left-1/3 w-8 h-8 border-2 border-cyan-300/30 floating-particle" style={{ animationDelay: '2.5s' }} />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-24 text-center animate-fade-in-up">
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
          ShlGrow - Your Ultimate
          <span className="block mt-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            YouTube Growth Partner
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          We empower creators, influencers, and brands with 360-degree management, researching, scripting, editing, and growth strategies.
        </p>
        
        <Button 
          size="lg" 
          className="button-gradient-glow text-white font-semibold group border-0"
          onClick={scrollToContact}
          data-testid="button-cta-hero"
        >
          <span 
            className="inline-block mr-1.5 group-hover:animate-bounce transition-all" 
            style={{ 
              color: '#FFF',
              fontSize: '20px'
            }}
          >
            🚀
          </span>
          Book Our Free Consult Now
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
