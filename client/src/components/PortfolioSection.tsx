import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface PortfolioItem {
  title: string;
  image: string;
  category: string;
  videoUrl?: string;
}

interface PortfolioSectionProps {
  items: PortfolioItem[];
}

export default function PortfolioSection({ items }: PortfolioSectionProps) {
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

  const handleVideoClick = (videoUrl: string | undefined) => {
    if (videoUrl) {
      window.open(videoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 6) {
    groupedItems.push(items.slice(i, i + 6));
  }

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 relative px-8 md:px-0" data-testid="heading-portfolio">
          <span className="sparkle absolute -left-1 md:left-12 top-2 md:top-1/2 md:-translate-y-1/2 text-cyan-400 text-2xl">✦</span>
          Our Portfolio
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
              {groupedItems.map((group, groupIndex) => (
                <CarouselItem key={groupIndex} className="basis-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.map((item, index) => {
                      const actualIndex = groupIndex * 6 + index;
                      return (
                        <Card 
                          key={actualIndex}
                          className="group overflow-hidden blue-glow-card cursor-pointer transition-all duration-300 border-2"
                          onClick={() => handleVideoClick(item.videoUrl)}
                          data-testid={`card-portfolio-${actualIndex}`}
                        >
                          <CardContent className="p-0">
                            <div className="relative aspect-video overflow-hidden rounded-md shadow-md">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-blue-500/20 opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="button-gradient-glow rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                  <Play className="w-8 h-8 text-white fill-current" />
                                </div>
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-heading font-bold text-xl text-center">{item.title}</h3>
                            </div>
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
