import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ChatrAssistant from "@/components/ChatrAssistant";
import {
  CorporateIntroSection,
  ThreePillarsSection,
  EcosystemSection,
  LeadershipPreviewSection,
  WhyTalentXcelSection,
  CaseStudiesPreviewSection,
  PartnershipsSection,
  ContactPortalSection,
} from "@/components/HomeSections";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Helmet>
          <title>TalentXcel — Integrated Technology &amp; Talent Solutions</title>
          <meta
            name="description"
            content="TalentXcel brings together enterprise technology solutions, workforce expertise, and talent development to help organizations build, scale, and transform."
          />
          <meta
            name="keywords"
            content="TalentXcel, technology solutions, IT staffing, AI solutions, workforce solutions, enterprise software development, corporate training, RPO, India, Europe, Middle East"
          />
          <link rel="canonical" href="https://talentxcel.co.in/" />
          
          {/* Open Graph */}
          <meta property="og:title" content="TalentXcel — Integrated Technology &amp; Talent Solutions" />
          <meta
            property="og:description"
            content="Enterprise software, AI automation, IT staffing, and corporate talent development under one roof."
          />
          <meta property="og:url" content="https://talentxcel.co.in/" />
          <meta property="og:type" content="website" />
          
          {/* Twitter */}
          <meta name="twitter:title" content="TalentXcel — Integrated Technology &amp; Talent Solutions" />
          <meta
            name="twitter:description"
            content="Technology That Moves Business Forward. Talent That Makes It Possible."
          />
          
          {/* Structured Data - WebSite linked to canonical Organization in index.html */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://talentxcel.co.in/#website",
              "name": "TalentXcel",
              "alternateName": ["Talentxcel", "TalentXcel Corporate"],
              "url": "https://talentxcel.co.in",
              "description": "Integrated technology and talent solutions company providing enterprise software, AI development, workforce solutions, and talent development.",
              "publisher": {
                "@type": "Organization",
                "@id": "https://talentxcel.co.in/#organization",
                "name": "TalentXcel Services Private Limited",
                "url": "https://talentxcel.co.in"
              }
            })}
          </script>
        </Helmet>
        
        {/* Redesigned 52/48 Balanced Hero */}
        <HeroSection />

        {/* Section A — Corporate Introduction */}
        <CorporateIntroSection />

        {/* Section B — Three Business Pillars */}
        <ThreePillarsSection />

        {/* Section C — Integrated Ecosystem */}
        <EcosystemSection />

        {/* Section D — Leadership & Governance */}
        <LeadershipPreviewSection />

        {/* Section E — Why TalentXcel (Integrated Model Advantage) */}
        <WhyTalentXcelSection />

        {/* Section F — Case Studies & Client Outcomes */}
        <CaseStudiesPreviewSection />

        {/* Section G — Strategic Partnerships & MoUs */}
        <PartnershipsSection />

        {/* Section H — Enterprise Contact & Enquiry Portal */}
        <ContactPortalSection />
      </main>
      <Footer />
      <ChatrAssistant />
    </div>
  );
};

export default Index;
