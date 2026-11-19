import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Scale, CheckCircle2, AlertCircle, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service | TalentXcel</title>
        <meta
          name="description"
          content="TalentXcel Terms of Service: Review the terms and conditions governing the use of our corporate website and integrated technology and talent solutions."
        />
        <link rel="canonical" href="https://talentxcel.co.in/terms" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://talentxcel.co.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Terms of Service",
                "item": "https://talentxcel.co.in/terms"
              }
            ]
          })}
        </script>
      </Helmet>
      <Navbar />

      <main className="py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3">
              <Scale className="h-4 w-4" /> Legal Framework
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
            <p className="text-muted-foreground text-sm">
              Last Updated: November 2026 | Effective Date: July 2024
            </p>
          </div>

          <Card className="p-6 sm:p-8 space-y-6 text-foreground/90 leading-relaxed border-border/60">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-primary" /> 1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using <strong>talentxcel.co.in</strong> (the "Website"), you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue 
                use of the Website immediately.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">2. Corporate Scope & Services</h2>
              <p>
                TalentXcel provides integrated technology solutions, recruitment & workforce services, and corporate learning programs. 
                Information presented on this website is for informational and business development purposes. Specific client engagements, 
                statements of work (SOWs), master service agreements (MSAs), and service level agreements (SLAs) are governed by independent, 
                executed commercial contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">3. Permissible Use</h2>
              <p>When using our website and communication channels, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Submit false, misleading, or fraudulent contact or candidate information.</li>
                <li>Attempt to bypass security features, reverse-engineer, or disrupt website infrastructure.</li>
                <li>Scrape, harvest, or automate bulk data collection without prior written authorization.</li>
                <li>Transmit unsolicited advertising, promotional materials, or spam.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">4. Intellectual Property</h2>
              <p>
                All brand marks, logos, software architectures, website copy, visual designs, and technical documentation on this Website 
                are the intellectual property of TalentXcel or its licensors. No content may be reproduced, redistributed, or modified 
                without explicit written consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" /> 5. Disclaimer & Limitation of Liability
              </h2>
              <p>
                While we strive for operational accuracy, all website content is provided on an "as is" and "as available" basis without 
                warranties of any kind, whether express or implied. TalentXcel shall not be liable for any indirect, incidental, or 
                consequential damages arising from the use or inability to use this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">6. Governing Law & Dispute Resolution</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. Any legal action or proceeding 
                arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in Uttar Pradesh / New Delhi, India.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">7. Contact & Notices</h2>
              <p>For inquiries regarding these Terms of Service, contact:</p>
              <div className="bg-muted/40 p-4 rounded-xl text-sm border border-border/50">
                <p><strong>Legal Department:</strong> <a href="mailto:legal@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in" className="text-primary hover:underline font-medium">legal@talentxcel.co.in / contact@talentxcel.co.in</a></p>
                <p><strong>TalentXcel Services Private Limited</strong> | Office 1917, 19th Floor, E-Square Building, Sector 96, Noida, Uttar Pradesh 201301, India</p>
              </div>
            </section>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
