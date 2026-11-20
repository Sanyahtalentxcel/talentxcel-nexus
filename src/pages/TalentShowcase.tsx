import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  VETTED_TALENT_PROFILES,
  type VettedTalentProfile,
} from "@/data/vettedTalentProfiles";
import {
  Search,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  Briefcase,
  Star,
  Users2,
  Filter,
  ArrowRight,
  Sparkles,
  PhoneCall,
  X,
} from "lucide-react";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const TalentShowcase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSeniority, setSelectedSeniority] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [activeProfileForInterview, setActiveProfileForInterview] = useState<VettedTalentProfile | null>(null);

  const categories = ["All", "Full-Stack", "AI / ML", "DevOps & Cloud", "Backend", "Data & BI", "Mobile"];
  const seniorities = ["All", "Junior", "Mid-Level", "Senior", "Lead / Architect"];
  const locations = ["All", "Noida / Delhi NCR", "Bengaluru", "Hyderabad", "Pune", "Remote (Pan-India)"];

  const filteredProfiles = useMemo(() => {
    return VETTED_TALENT_PROFILES.filter((p) => {
      const matchesSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.keySkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.code.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
      const matchesSen = selectedSeniority === "All" || p.seniority === selectedSeniority;
      const matchesLoc =
        selectedLocation === "All" ||
        p.location.toLowerCase().includes(selectedLocation.toLowerCase()) ||
        p.workMode.toLowerCase().includes(selectedLocation.toLowerCase());

      return matchesSearch && matchesCat && matchesSen && matchesLoc;
    });
  }, [searchQuery, selectedCategory, selectedSeniority, selectedLocation]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Helmet>
        <title>Pre-Vetted Tech Talent Showcase | 72-Hour Deployment SLA | TalentXcel</title>
        <meta
          name="description"
          content="Browse pre-vetted, practitioner-screened software engineers, AI developers, and DevOps architects available for immediate deployment in Delhi NCR, Bengaluru, Hyderabad, and Pune."
        />
        <meta
          name="keywords"
          content="hire developers 72 hours, pre-vetted software engineers India, hire React developers Noida, contract IT staffing Bangalore, tech talent showcase TalentXcel"
        />
        <link rel="canonical" href="https://talentxcel.co.in/talent-showcase" />
        <meta property="og:title" content="Pre-Vetted Tech Talent Showcase | 72-Hour Deployment SLA" />
        <meta
          property="og:description"
          content="Browse verified developer profiles ready for immediate interview and 72-hour onboarding with 90-day guarantee."
        />
        <meta property="og:url" content="https://talentxcel.co.in/talent-showcase" />
        <meta property="og:type" content="website" />

        {/* Structured Data: BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://talentxcel.co.in",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Solutions",
                "item": "https://talentxcel.co.in/staffing-solutions",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Pre-Vetted Talent Showcase",
                "item": "https://talentxcel.co.in/talent-showcase",
              },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white border-b border-border/80 pt-10 pb-12 lg:pt-14 lg:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-700 text-xs font-semibold border border-blue-500/20">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Practitioner Vetted • 72-Hour Deployment SLA • 90-Day Replacement Guarantee</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pre-Vetted Tech Talent Showcase
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Skip 60–90 day notice periods and resume spam. Browse anonymized profiles of verified software engineers, Generative AI specialists, and cloud architects ready for immediate deployment.
            </p>

            {/* Value Highlights Pill Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> 100% Practitioner Code Tested
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" /> First Interviews within 24–48 Hours
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-amber-600" /> Contract, C2H &amp; Dedicated Pods
              </span>
            </div>
          </div>
        </section>

        {/* Search & Filter Toolbar */}
        <section className="py-6 bg-slate-100/70 border-b border-border/80 sticky top-16 z-20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {/* Search input */}
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search by skill (e.g., React, PyTorch, Kubernetes) or role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-white border-slate-300 text-sm h-10 rounded-xl"
                />
              </div>

              {/* Category filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-10 px-3 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    Domain: {c}
                  </option>
                ))}
              </select>

              {/* Location filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="h-10 px-3 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>
                    Location: {l}
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Seniority Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-500 font-semibold flex items-center gap-1 shrink-0">
                <Filter className="h-3 w-3" /> Seniority:
              </span>
              {seniorities.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedSeniority(s)}
                  className={`px-3 py-1 rounded-full font-semibold transition-all shrink-0 ${
                    selectedSeniority === s
                      ? "bg-primary text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Talent Profile Cards Grid */}
        <section className="py-10 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>Available Verified Talent</span>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-bold">
                  {filteredProfiles.length} Profiles Ready
                </Badge>
              </h2>
              <span className="text-xs text-slate-500 hidden sm:inline">
                Anonymized to protect active candidate confidentiality
              </span>
            </div>

            {filteredProfiles.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
                <Users2 className="h-10 w-10 text-slate-400 mx-auto" />
                <h3 className="text-base font-bold text-slate-900">No matching talent profiles found</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Try adjusting your search criteria or request a custom talent pipeline search for your specific requirements.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedSeniority("All");
                    setSelectedLocation("All");
                  }}
                  variant="outline"
                  className="text-xs"
                >
                  Reset All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProfiles.map((p) => (
                  <Card
                    key={p.id}
                    className="border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between bg-white hover:border-primary/50"
                  >
                    <CardHeader className="pb-3 border-b border-slate-100 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                          {p.code}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                          <span>{p.vettingScore} / 5.0</span>
                        </div>
                      </div>

                      <div>
                        <CardTitle className="text-base font-bold text-slate-900 leading-snug line-clamp-2">
                          {p.title}
                        </CardTitle>
                        <CardDescription className="text-xs text-slate-500 mt-1 flex items-center gap-2 flex-wrap">
                          <span>{p.experienceYears} YOE ({p.seniority})</span>
                          <span>•</span>
                          <span>{p.location}</span>
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="py-4 space-y-4 flex-1">
                      {/* Vetting Credential Badge */}
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-800 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>Code Vetted by {p.codeVettedBy}</span>
                      </div>

                      {/* Recent Impact / Achievement */}
                      <div className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <span className="font-semibold text-slate-900 block text-[11px] mb-0.5">Verified Milestone:</span>
                        {p.recentAchievement}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {p.keySkills.slice(0, 5).map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {s}
                          </span>
                        ))}
                        {p.keySkills.length > 5 && (
                          <span className="text-[10px] text-slate-400 font-medium self-center">
                            +{p.keySkills.length - 5} more
                          </span>
                        )}
                      </div>

                      {/* Compensation & Availability Pill */}
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-medium">Benchmark CTC</span>
                          <span className="font-extrabold text-slate-900">
                            ₹{p.expectedCtcLpa.min}–{p.expectedCtcLpa.max} LPA
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 block font-medium">Availability</span>
                          <span className="font-bold text-emerald-700 flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            {p.availability}
                          </span>
                        </div>
                      </div>
                    </CardContent>

                    {/* Action Button */}
                    <div className="p-4 pt-0">
                      <Button
                        onClick={() => setActiveProfileForInterview(p)}
                        className="w-full text-xs font-bold bg-primary hover:bg-primary/90 text-white shadow-xs group"
                      >
                        <span>Request Interview ({p.code})</span>
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Modal: Request Interview Dialog */}
        {activeProfileForInterview && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-start justify-between border-b border-slate-100 pb-3">
                <div>
                  <Badge className="bg-primary/10 text-primary border-none text-[10px] font-bold mb-1">
                    72-Hour Deployment SLA
                  </Badge>
                  <h3 className="text-base font-bold text-slate-900">
                    Request Candidate Interview: {activeProfileForInterview.code}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {activeProfileForInterview.title} • {activeProfileForInterview.location}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProfileForInterview(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-xs text-blue-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  <span>Interview Schedule Timeline:</span>
                </div>
                <p className="text-[11px] leading-relaxed text-blue-800">
                  Our staffing practice director will connect with you within 4 hours to coordinate video interviews and provide full unredacted code screening portfolios.
                </p>
              </div>

              {/* Embedded Lead Capture Form targeting IT Staffing */}
              <div className="pt-2">
                <LeadCaptureForm
                  defaultCategory="it_staffing"
                  sourceLocation={`TalentShowcase-${activeProfileForInterview.code}`}
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TalentShowcase;
