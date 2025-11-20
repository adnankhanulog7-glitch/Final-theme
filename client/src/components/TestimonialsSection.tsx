import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface Testimonial {
  name: string;
  platform: string;
  image: string;
  quote: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
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

  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 4) {
    groupedTestimonials.push(testimonials.slice(i, i + 4));
  }

  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="container mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 relative px-8 md:px-0" data-testid="heading-testimonials">
          <span className="sparkle absolute -left-1 md:left-12 top-2 md:top-1/2 md:-translate-y-1/2 text-cyan-400 text-2xl">✦</span>
          What Our Clients Say
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
              {groupedTestimonials.map((group, groupIndex) => (
                <CarouselItem key={groupIndex} className="basis-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {group.map((testimonial, index) => {
                      const actualIndex = groupIndex * 4 + index;
                      return (
                        <Card 
                          key={actualIndex}
                          className="blue-glow-card overflow-visible transition-all duration-300 border-2"
                          data-testid={`card-testimonial-${actualIndex}`}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                              <Avatar className="w-16 h-16 mr-4">
                                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-heading font-semibold text-lg" data-testid={`text-client-${actualIndex}`}>
                                  {testimonial.name}
                                </h3>
                                <p className="text-sm text-blue-400">{testimonial.platform}</p>
                              </div>
                            </div>
                            
                            <div className="flex gap-1 mb-3">
                              {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                              ))}
                            </div>
                            
                            <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
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
