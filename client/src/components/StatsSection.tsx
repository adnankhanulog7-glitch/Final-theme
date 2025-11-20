import { useEffect, useState, useRef } from "react";

interface Stat {
  value: string;
  label: string;
  targetNumber: number;
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.targetNumber / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
              currentStep++;
              if (currentStep >= steps) {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = stat.targetNumber;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(increment * currentStep);
                  return newCounts;
                });
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [stats, isVisible]);

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`stat-${index}`}
            >
              <div className="text-5xl md:text-6xl font-heading font-bold mb-2" style={{ color: '#facc15' }}>
                {isVisible ? `${counts[index]}${stat.value.replace(/[0-9]/g, '')}` : stat.value}
              </div>
              <div className="text-lg uppercase tracking-wide" style={{ color: '#4a5568' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
