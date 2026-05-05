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
          <title>Talentxcel - AI-Powered Talent Management Platform | 5K+ Users, 100+ Enterprises | India's Leading Career Ecosystem</title>
          <meta name="description" content="Talentxcel: AI-first career ecosystem founded 2024. 5,000+ active users, 100+ enterprise clients, 95% retention. Complete workforce solutions: staffing, IT consulting, training. Individual services: AI resume builder, job matching, career coaching. Serving India, Europe, Middle East." />
          <meta name="keywords" content="Talentxcel, AI talent management, career platform India, job matching, resume builder, workforce solutions, staffing services, IT consulting, recruitment India, HR tech, career development, enterprise hiring" />
          <link rel="canonical" href="https://talentxcel.co.in/" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Talentxcel - AI Career Ecosystem | 5K+ Users, 100+ Enterprises" />
          <meta property="og:description" content="India's leading AI-powered talent platform. 95% retention, comprehensive workforce & career solutions." />
          <meta property="og:url" content="https://talentxcel.co.in/" />
          <meta property="og:type" content="website" />
          
          {/* Twitter */}
          <meta name="twitter:title" content="Talentxcel - AI Career Ecosystem" />
          <meta name="twitter:description" content="5K+ users, 100+ enterprises. AI-powered talent management & career development." />
          
          {/* Structured Data - Website */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Talentxcel",
              "alternateName": "TalentXcel",
              "url": "https://talentxcel.co.in",
              "description": "AI-powered career ecosystem providing talent management, workforce solutions, and career development services",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://talentxcel.co.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })}
          </script>
          
          {/* Structured Data - Organization with detailed info */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Talentxcel",
              "alternateName": "TalentXcel",
              "url": "https://talentxcel.co.in",
              "logo": "https://talentxcel.co.in/lovable-uploads/5b681ba5-58bf-4aae-8bef-3ba691eef586.png",
              "foundingDate": "2024-07",
              "description": "AI-first career ecosystem empowering professionals and enterprises with talent management, workforce solutions, and career development services",
              "slogan": "Empowering Careers, Transforming Businesses",
              "numberOfEmployees": "50-100",
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
                "streetAddress": "Plot C, ESquare Building, 2, Sector-45",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201301",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://talentxcel.in",
                "https://talentxcel.net"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Talentxcel Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Staffing & Recruitment Solutions",
                      "description": "Comprehensive workforce solutions for enterprises"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Career Services",
                      "description": "AI-powered resume building, job matching, and career coaching"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "IT Consulting & Managed Services",
                      "description": "Expert IT infrastructure and managed operations"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "5000",
                "bestRating": "5"
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
