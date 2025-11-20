import { Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-teal transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gold" />
              <span>Certified in YouTube Analytics & Google Ads</span>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShlGrow. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
