import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Lazy-loaded route components for performance and code-splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Chatr = lazy(() => import("./pages/Chatr"));
const Culture = lazy(() => import("./pages/Culture"));
const Careers = lazy(() => import("./pages/Careers"));
const Investors = lazy(() => import("./pages/Investors"));
const Contact = lazy(() => import("./pages/Contact"));
const Team = lazy(() => import("./pages/Team"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const CorporateTraining = lazy(() => import("./pages/CorporateTraining"));
const StaffingSolutions = lazy(() => import("./pages/StaffingSolutions"));
const UniversityPartnerships = lazy(() => import("./pages/UniversityPartnerships"));
const RevenuePortal = lazy(() => import("./pages/RevenuePortal"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-primary/20 border-t-primary rounded-full animate-spin" />
      <span className="text-xs text-muted-foreground font-medium">Loading TalentXcel...</span>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/chatr" element={<Chatr />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/leadership" element={<Team />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Commercial Revenue Engines */}
              <Route path="/corporate-training" element={<CorporateTraining />} />
              <Route path="/corporate-training/*" element={<CorporateTraining />} />
              <Route path="/staffing-solutions" element={<StaffingSolutions />} />
              <Route path="/it-staffing" element={<StaffingSolutions />} />
              <Route path="/permanent-recruitment" element={<StaffingSolutions />} />
              <Route path="/contract-staffing" element={<StaffingSolutions />} />
              <Route path="/executive-search" element={<StaffingSolutions />} />
              <Route path="/recruitment-process-outsourcing" element={<StaffingSolutions />} />
              <Route path="/employer-solutions" element={<StaffingSolutions />} />
              <Route path="/university-partnerships" element={<UniversityPartnerships />} />
              <Route path="/campus-employability" element={<UniversityPartnerships />} />
              <Route path="/institutional-training" element={<UniversityPartnerships />} />

              {/* Protected Revenue Operations Portal */}
              <Route path="/admin" element={<RevenuePortal />} />
              <Route path="/revenue-portal" element={<RevenuePortal />} />

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
