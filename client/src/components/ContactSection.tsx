import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    channelUrl: "",
    message: "",
    agreedToPrivacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToPrivacy) {
      toast({
        title: "Privacy Policy Required",
        description: "Please agree to the Privacy Policy to submit the form.",
        variant: "destructive"
      });
      return;
    }

    console.log("Form submitted:", formData);
    toast({
      title: "Audit Request Submitted!",
      description: "We'll get back to you within 24 hours with your free channel audit."
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      channelUrl: "",
      message: "",
      agreedToPrivacy: false
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card/50">
      <div className="container mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 relative px-8 md:px-0" data-testid="heading-contact">
          <span className="sparkle absolute -left-1 md:left-12 top-2 md:top-1/2 md:-translate-y-1/2 text-cyan-400 text-2xl">✦</span>
          Let's Talk About Your YouTube Vision
          <span className="sparkle absolute -right-1 md:right-12 top-2 md:top-1/2 md:-translate-y-1/2 text-blue-400 text-2xl">✦</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:hello@ShlGrow.com" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  hello@ShlGrow.com
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="input-blue-focus bg-card border-card-border"
                data-testid="input-name"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="input-blue-focus bg-card border-card-border"
                data-testid="input-email"
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="input-blue-focus bg-card border-card-border"
                data-testid="input-phone"
              />
            </div>
            
            <div>
              <Label htmlFor="channelUrl">Channel URL</Label>
              <Input
                id="channelUrl"
                type="url"
                placeholder="https://youtube.com/@yourchannel"
                value={formData.channelUrl}
                onChange={(e) => setFormData({ ...formData, channelUrl: e.target.value })}
                className="input-blue-focus bg-card border-card-border"
                data-testid="input-channel-url"
              />
            </div>
            
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input-blue-focus bg-card border-card-border"
                data-testid="input-message"
              />
            </div>
            
            <div className="flex items-start gap-2">
              <Checkbox
                id="privacy"
                checked={formData.agreedToPrivacy}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, agreedToPrivacy: checked as boolean })
                }
                data-testid="checkbox-privacy"
              />
              <Label htmlFor="privacy" className="text-sm cursor-pointer">
                I agree to the{" "}
                <a href="/privacy-policy" className="text-blue-400 hover:text-cyan-400 hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full button-gradient-glow text-white border-0"
              data-testid="button-submit-audit"
            >
              Submit Your Audit Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
