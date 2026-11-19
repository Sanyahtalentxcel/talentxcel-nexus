import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Shield, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | TalentXcel</title>
        <meta
          name="description"
          content="TalentXcel Privacy Policy: Learn how we collect, use, protect, and manage your personal data across our integrated technology and workforce solutions."
        />
        <link rel="canonical" href="https://talentxcel.co.in/privacy" />
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
                "name": "Privacy Policy",
                "item": "https://talentxcel.co.in/privacy"
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
              <Shield className="h-4 w-4" /> Data Governance & Protection
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm">
              Last Updated: November 2026 | Effective Date: July 2024
            </p>
          </div>

          <Card className="p-6 sm:p-8 space-y-6 text-foreground/90 leading-relaxed border-border/60">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> 1. Overview & Commitment
              </h2>
              <p>
                At TalentXcel ("we", "us", or "our"), privacy and data security are foundational principles. 
                This Privacy Policy outlines how we collect, handle, store, and protect information when you visit 
                our website (<strong>talentxcel.co.in</strong>), interact with our services, or communicate with our enterprise teams.
              </p>
              <p>
                We adhere to applicable data privacy principles, including India's Digital Personal Data Protection (DPDP) Act, 
                and globally recognized standards for data minimization, user consent, and purpose limitation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" /> 2. Information We Collect
              </h2>
              <p>We only collect information necessary to fulfill your business and service requests:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Inquiry & Contact Information:</strong> Name, business email address, phone number, organization name, and project requirements submitted via our enterprise forms.
                </li>
                <li>
                  <strong className="text-foreground">Professional & Career Inquiries:</strong> Resumes, employment history, and portfolio links provided voluntarily for recruitment or career evaluation.
                </li>
                <li>
                  <strong className="text-foreground">Technical & Usage Data:</strong> Standard server logs, IP addresses, browser types, and anonymous diagnostic metrics to ensure platform uptime and security.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" /> 3. How We Use Your Data
              </h2>
              <p>Your information is used strictly for legitimate commercial and operational purposes:</p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Responding to enterprise technology inquiries",
                  "Scoping recruitment, RPO, and staffing needs",
                  "Evaluating candidates for active opportunities",
                  "Delivering corporate upskilling programs",
                  "Complying with statutory and legal obligations",
                  "Maintaining system security and fraud prevention",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" /> 4. Data Sharing & Third Parties
              </h2>
              <p>
                <strong>We never sell, rent, or trade your personal data.</strong> Information may be shared only under 
                strict confidentiality with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Authorized enterprise clients when you have applied for staffing or recruitment representation.</li>
                <li>Trusted cloud infrastructure providers operating under strict data processing agreements.</li>
                <li>Regulatory authorities when required by law or binding legal processes.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">5. Data Retention & Security</h2>
              <p>
                We implement enterprise-grade technical and organizational security measures—including TLS encryption in transit 
                and role-based access controls—to safeguard data from unauthorized access, alteration, or disclosure. We retain data 
                only as long as needed to fulfill the designated business purpose or statutory requirements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">6. Your Rights & Choices</h2>
              <p>
                You have the right to request access to your data, request corrections, or withdraw consent at any time. 
                To exercise any privacy rights, contact our Data Governance Officer at:
              </p>
              <div className="bg-muted/40 p-4 rounded-xl text-sm border border-border/50">
                <p><strong>Email:</strong> <a href="mailto:privacy@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in" className="text-primary hover:underline font-medium">privacy@talentxcel.co.in / contact@talentxcel.co.in</a></p>
                <p><strong>Address:</strong> Office 1917, 19th Floor, E-Square Building, Sector 96, Noida, Uttar Pradesh 201301, India</p>
              </div>
            </section>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
