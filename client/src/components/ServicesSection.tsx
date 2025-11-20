import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AnimeVideoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="20" height="16" rx="2" stroke="#3b82f6" strokeWidth="2"/>
    <circle cx="12" cy="14" r="3" stroke="#3b82f6" strokeWidth="2"/>
    <line x1="24" y1="10" x2="22" y2="12" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="24" y1="18" x2="22" y2="16" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="25" y1="8" x2="27" y2="6" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const AnimeDocumentIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3h12l6 6v16H6V3z" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M18 3v6h6" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="10" y1="13" x2="18" y2="13" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="10" y1="17" x2="18" y2="17" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4" y1="2" x2="2" y2="0" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const AnimeEditIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="1" stroke="#3b82f6" strokeWidth="2"/>
    <rect x="6" y="8" width="4" height="8" fill="#3b82f6"/>
    <rect x="11" y="10" width="4" height="6" fill="#3b82f6"/>
    <rect x="16" y="12" width="3" height="4" fill="#3b82f6"/>
    <line x1="3" y1="22" x2="21" y2="22" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="23" y1="4" x2="25" y2="2" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const AnimeImageIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="22" height="18" rx="2" stroke="#3b82f6" strokeWidth="2"/>
    <circle cx="10" cy="10" r="2" stroke="#3b82f6" strokeWidth="2"/>
    <path d="M3 18l6-6 4 4 6-6 6 6" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="26" y1="3" x2="28" y2="1" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const AnimeMegaphoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10l16-6v20l-16-6V10z" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M20 8l4-2v16l-4-2" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M8 18v4l2 2" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="25" y1="5" x2="27" y2="3" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const AnimeChartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 22l6-8 4 4 6-10 4 6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="4" cy="22" r="1.5" fill="#3b82f6"/>
    <circle cx="10" cy="14" r="1.5" fill="#3b82f6"/>
    <circle cx="14" cy="18" r="1.5" fill="#3b82f6"/>
    <circle cx="20" cy="8" r="1.5" fill="#3b82f6"/>
    <circle cx="24" cy="14" r="1.5" fill="#3b82f6"/>
    <line x1="26" y1="5" x2="28" y2="3" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const AnimeUsersIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="8" r="4" stroke="#3b82f6" strokeWidth="2"/>
    <path d="M2 22c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="10" r="3" stroke="#3b82f6" strokeWidth="2"/>
    <path d="M18 22c0-3.3 2.7-6 6-6 1.1 0 2.1.3 3 .8" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="1" y1="2" x2="3" y2="0" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

export default function ServicesSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const services: Service[] = [
    {
      icon: <AnimeVideoIcon />,
      title: "YouTube Channel Management",
      description: "Full-spectrum management for explosive growth in subscribers, views, and global reach."
    },
    {
      icon: <AnimeDocumentIcon />,
      title: "Scripting & Research",
      description: "Compelling scripts backed by deep trend, audience, SEO optimization and competitor research."
    },
    {
      icon: <AnimeEditIcon />,
      title: "Professional Video Editing",
      description: "Dynamic edits with strong retention hooks, impactful subtitles, and smooth storytelling flow."
    },
    {
      icon: <AnimeImageIcon />,
      title: "Custom Thumbnails & Graphics",
      description: "Eye-catching designs to boost click-through rates and align with your brand."
    },
    {
      icon: <AnimeMegaphoneIcon />,
      title: "YouTube Ads & Promotion",
      description: "Targeted ads to drive global traffic and convert views into sales or subscribers."
    },
    {
      icon: <AnimeChartIcon />,
      title: "Strategy Consulting",
      description: "Personalized audits, content ideation, and algorithm-friendly strategies."
    },
    {
      icon: <AnimeUsersIcon />,
      title: "End-to-End Support for Creators & Brands",
      description: "In-depth research, scripting from scratch, professional editing, SEO, and analytics to scale your channel worldwide."
    }
  ];

  const groupedServices = [];
  for (let i = 0; i < services.length; i += 4) {
    groupedServices.push(services.slice(i, i + 4));
  }

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 relative px-8 md:px-0" data-testid="heading-services">
          <span className="sparkle absolute -left-1 md:left-12 top-2 md:top-1/2 md:-translate-y-1/2 text-cyan-400 text-2xl">✦</span>
          Our Services
          <span className="sparkle absolute -right-1 md:right-12 top-2 md:top-1/2 md:-translate-y-1/2 text-blue-400 text-2xl">✦</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {groupedServices.map((group, groupIndex) => (
                <CarouselItem key={groupIndex} className="basis-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {group.map((service, index) => {
                      const actualIndex = groupIndex * 4 + index;
                      return (
                        <Card 
                          key={actualIndex}
                          className="blue-glow-card overflow-visible transition-all duration-300 border-2"
                          data-testid={`card-service-${actualIndex}`}
                        >
                          <CardHeader>
                            <div className="mb-4">{service.icon}</div>
                            <CardTitle className="font-heading font-bold text-xl">{service.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-base">{service.description}</p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-400"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
