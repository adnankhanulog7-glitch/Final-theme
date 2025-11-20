import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface AboutSectionProps {
  teamMembers: TeamMember[];
}

export default function AboutSection({ teamMembers }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6 relative px-8 md:px-0" data-testid="heading-about">
          <span className="sparkle absolute -left-1 md:left-12 top-2 md:top-1/2 md:-translate-y-1/2 text-cyan-400 text-2xl">✦</span>
          Who We Are
          <span className="sparkle absolute -right-1 md:right-12 top-2 md:top-1/2 md:-translate-y-1/2 text-blue-400 text-2xl">✦</span>
        </h2>
        
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Founded in 2023 by ex-YouTube experts from the US, Europe, and Asia. 
          With offices in New York, London, and Singapore, we bring global expertise to help your channel thrive.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="blue-glow-card overflow-visible transition-all duration-300 border-2"
              data-testid={`card-team-${index}`}
            >
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="font-heading font-semibold text-xl mb-1" data-testid={`text-name-${index}`}>
                  {member.name}
                </h3>
                <p className="text-blue-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="outline" className="px-4 py-2 text-base border-gold text-gold" data-testid="badge-cert-analytics">
            <Award className="w-4 h-4 mr-2" />
            YouTube Analytics Certified
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-base border-gold text-gold" data-testid="badge-cert-ads">
            <Award className="w-4 h-4 mr-2" />
            Google Ads Certified
          </Badge>
        </div>
      </div>
    </section>
  );
}
