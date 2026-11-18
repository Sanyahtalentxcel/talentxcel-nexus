import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ServicesPreview from "@/components/ServicesPreview";
import CompanyOverview from "@/components/CompanyOverview";
import ChatrSection from "@/components/ChatrSection";
import ChatrAssistant from "@/components/ChatrAssistant";
import {
  CoreCapabilities,
  ProductsEcosystem,
  LiveProjects,
  EnterpriseUseCases,
  WhyTalentXcel,
  BuildWithUs,
  StrongCTA,
} from "@/components/EnterpriseSections";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Helmet>
          <title>TalentXcel — Integrated Technology & Talent Solutions</title>
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
          <meta property="og:title" content="TalentXcel — Integrated Technology & Talent Solutions" />
          <meta
            property="og:description"
            content="Enterprise software, AI automation, IT staffing, and corporate talent development under one roof."
          />
          <meta property="og:url" content="https://talentxcel.co.in/" />
          <meta property="og:type" content="website" />
          
          {/* Twitter */}
          <meta name="twitter:title" content="TalentXcel — Integrated Technology & Talent Solutions" />
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
                "streetAddress": "Plot C, ESquare Building, Sector-45",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201301",
                "addressCountry": "India"
              },
              "sameAs": [
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
        
        <HeroSection />
        <FeaturesGrid />
        <CoreCapabilities />
        <ProductsEcosystem />
        <ChatrSection />
        <LiveProjects />
        <EnterpriseUseCases />
        <WhyTalentXcel />
        <BuildWithUs />
        <ServicesPreview />
        <CompanyOverview />
        <StrongCTA />
      </main>
      <Footer />
      <ChatrAssistant />
    </div>
  );
};

export default Index;
