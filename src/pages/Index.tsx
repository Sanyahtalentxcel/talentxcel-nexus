
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
