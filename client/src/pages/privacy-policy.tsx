import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly to us when you fill out our contact form, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Name (required)</li>
              <li>Email address (required)</li>
              <li>Phone number (optional)</li>
              <li>YouTube channel URL (optional)</li>
              <li>Message content (optional)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>
          
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">3. Data Storage</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your form submissions are securely stored through Netlify Forms and may be exported to Google Sheets 
              for our internal customer relationship management. We implement appropriate technical and organizational 
              measures to protect your personal data against unauthorized or unlawful processing and against accidental 
              loss, destruction, or damage.
            </p>
          </section>
          
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">4. Your Rights (GDPR/CCPA)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Objection:</strong> Object to the processing of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise any of these rights, please contact us at hello@ShlGrow.com
            </p>
          </section>
          
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">5. Cookies and Analytics</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use Google Analytics (tracking ID: G-XYZ) to analyze website traffic and improve user experience. 
              This service uses cookies to collect information about how visitors use our site. You can opt out of 
              Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
            </p>
          </section>
          
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">6. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Netlify:</strong> For hosting and form submissions</li>
              <li><strong>Google Analytics:</strong> For website analytics</li>
              <li><strong>Google Sheets:</strong> For data management (optional)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this 
              privacy policy, unless a longer retention period is required by law.
            </p>
          </section>
          
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 text-muted-foreground">
              <p>Email: hello@ShlGrow.com</p>
              <p>Phone: +1 (234) 567-890</p>
              <p>Address: New York, USA | London, UK | Singapore</p>
            </div>
          </section>
          
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
