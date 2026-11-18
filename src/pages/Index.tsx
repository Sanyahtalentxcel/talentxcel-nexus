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
          
          {/* Structured Data - Website */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TalentXcel",
              "alternateName": ["Talentxcel", "TalentXcel Corporate"],
              "url": "https://talentxcel.co.in",
              "description": "Integrated technology and talent solutions company providing enterprise software, AI development, workforce solutions, and talent development.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://talentxcel.co.in/services?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })}
          </script>
          
          {/* Structured Data - Organization */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://talentxcel.co.in/#organization",
              "name": "TalentXcel",
              "alternateName": "TalentXcel Services Private Limited",
              "url": "https://talentxcel.co.in",
              "logo": "https://talentxcel.co.in/talentxcel-assets/5b681ba5-58bf-4aae-8bef-3ba691eef586.png",
              "foundingDate": "2024-07",
              "description": "TalentXcel delivers integrated technology and talent solutions, combining enterprise software and AI engineering with comprehensive workforce and learning services.",
              "slogan": "Technology That Moves Business Forward. Talent That Makes It Possible.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9717181609",
                "contactType": "customer service",
                "email": "contact@talentxcel.co.in",
                "areaServed": ["IN", "EU", "ME"],
                "availableLanguage": ["English", "Hindi"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office 1917, 19th Floor, E-Square Building, Sector 96",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201301",
                "addressCountry": "India"
              },
              "hasMap": "https://share.google/9XwBijGdqZx4s5NN1",
              "sameAs": [
                "https://in.linkedin.com/company/talentxcel-services-private-limited",
                "https://talentxcel.in",
                "https://talentxcel.net",
                "https://chatr.chat"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "TalentXcel Solutions Portfolio",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Technology & AI Solutions",
                      "description": "Enterprise software engineering, AI/ML development, cloud infrastructure, and systems modernization."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Talent & Workforce Solutions",
                      "description": "IT staffing, permanent recruitment, contract staffing, executive search, and recruitment process outsourcing."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Learning & Talent Development",
                      "description": "Corporate technical upskilling, university partnerships, and internship development engines."
                    }
                  }
                ]
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
