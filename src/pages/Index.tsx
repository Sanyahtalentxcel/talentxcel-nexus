
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ServicesPreview from "@/components/ServicesPreview";
import CompanyOverview from "@/components/CompanyOverview";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Helmet>
          <title>Talentxcel | Corporate Workforce & IT Solutions</title>
          <meta name="description" content="Talentxcel blends staffing, training, and IT managed services with an AI-first platform for enterprises and job seekers." />
          <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Talentxcel",
              "url": (typeof window!== 'undefined' ? window.location.origin : ''),
              "potentialAction": {
                "@type": "SearchAction",
                "target": (typeof window!== 'undefined' ? window.location.origin : '') + "/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Talentxcel",
              "url": (typeof window!== 'undefined' ? window.location.origin : ''),
              "logo": (typeof window!== 'undefined' ? window.location.origin : '') + "/lovable-uploads/5b681ba5-58bf-4aae-8bef-3ba691eef586.png",
              "sameAs": []
            })}
          </script>
        </Helmet>
        <HeroSection />
        <FeaturesGrid />
        <ServicesPreview />
        <CompanyOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
