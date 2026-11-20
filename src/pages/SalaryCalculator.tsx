import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TECH_ROLES,
  LOCATIONS,
  SKILL_BOOSTERS,
  type RoleSalaryData,
} from "@/data/salaryBenchmarks";
import {
  Calculator,
  TrendingUp,
  Building2,
  Users,
  CheckCircle2,
  Share2,
  Copy,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Briefcase,
  Download,
  AlertCircle,
  HelpCircle,
  DollarSign,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const SalaryCalculator = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();

  // Mode: candidate vs employer
  const initialMode = searchParams.get("mode") === "employer" ? "employer" : "candidate";
  const [mode, setMode] = useState<"candidate" | "employer">(initialMode);

  // Selected parameters
  const initialRole = searchParams.get("role") || "fullstack-engineer";
  const initialExp = (searchParams.get("exp") as "fresher" | "mid" | "senior" | "lead") || "mid";
  const initialLoc = searchParams.get("loc") || "delhi-ncr";

  const [selectedRoleId, setSelectedRoleId] = useState<string>(initialRole);
  const [selectedExp, setSelectedExp] = useState<"fresher" | "mid" | "senior" | "lead">(initialExp);
  const [selectedLocId, setSelectedLocId] = useState<string>(initialLoc);
  const [selectedSkillBoosters, setSelectedSkillBoosters] = useState<string[]>(["genai-llm"]);
  const [teamSize, setTeamSize] = useState<number>(3);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState<boolean>(false);

  // Sync state to URL params for shareability
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("mode", mode);
    params.set("role", selectedRoleId);
    params.set("exp", selectedExp);
    params.set("loc", selectedLocId);
    setSearchParams(params, { replace: true });
  }, [mode, selectedRoleId, selectedExp, selectedLocId, setSearchParams]);

  // Current objects
  const activeRole: RoleSalaryData = useMemo(() => {
    return TECH_ROLES.find((r) => r.id === selectedRoleId) || TECH_ROLES[0];
  }, [selectedRoleId]);

  const activeLoc = useMemo(() => {
    return LOCATIONS.find((l) => l.id === selectedLocId) || LOCATIONS[0];
  }, [selectedLocId]);

  // Dynamic calculations
  const calculatedSalaries = useMemo(() => {
    const base = activeRole.baseByExp[selectedExp];
    const locMultiplier = activeLoc.multiplier;

    // Sum skill booster percentages
    const skillMultiplier = selectedSkillBoosters.reduce((acc, boosterId) => {
      const b = SKILL_BOOSTERS.find((item) => item.id === boosterId);
      return acc + (b ? b.multiplier : 0);
    }, 0);

    const totalMultiplier = locMultiplier * (1 + skillMultiplier);

    const p25 = Number((base.p25 * totalMultiplier).toFixed(1));
    const median = Number((base.median * totalMultiplier).toFixed(1));
    const p75 = Number((base.p75 * totalMultiplier).toFixed(1));
    const p90 = Number((base.p90 * totalMultiplier).toFixed(1));

    // Monthly take-home estimate (approx ~74% of gross after PF & slabs for median)
    const monthlyGross = (median * 100000) / 12;
    const monthlyTakeHome = Math.round(monthlyGross * 0.76);

    // Employer metrics
    const employerOverhead = 1.18; // 18% PF, gratuity, insurance, tooling
    const totalCostToEmploy = Number((median * employerOverhead).toFixed(1));
    const monthlyPodCost = Number((((totalCostToEmploy * 100000) / 12) * teamSize).toFixed(0));
    const annualPodCost = Number((totalCostToEmploy * teamSize).toFixed(1));

    return {
      p25,
      median,
      p75,
      p90,
      monthlyTakeHome,
      totalCostToEmploy,
      monthlyPodCost,
      annualPodCost,
    };
  }, [activeRole, selectedExp, activeLoc, selectedSkillBoosters, teamSize]);

  const toggleSkillBooster = (id: string) => {
    setSelectedSkillBoosters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const copyShareLink = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link Copied!",
      description: "Share this custom salary benchmark with your colleagues or hiring team.",
    });
  };

  const shareToLinkedIn = () => {
    const text = encodeURIComponent(
      `Check out the 2026 Tech Salary Benchmark for ${activeRole.title} (${selectedExp.toUpperCase()} level) in ${activeLoc.name}: Median is ₹${calculatedSalaries.median} LPA on TalentXcel's Market Explorer.`
    );
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`, "_blank");
  };

  const expLabels: Record<string, { title: string; subtitle: string }> = {
    fresher: { title: "Entry / Fresher", subtitle: "0–2 Years" },
    mid: { title: "Mid-Level", subtitle: "2–5 Years" },
    senior: { title: "Senior", subtitle: "5–8 Years" },
    lead: { title: "Lead / Architect", subtitle: "8–12+ Years" },
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Helmet>
        <title>2026 Tech Salary Calculator & Hiring Cost Explorer | TalentXcel</title>
        <meta
          name="description"
          content="Free 2026 India tech salary calculator and enterprise hiring budget explorer. Benchmark real-time market compensation for Full-Stack, AI/ML, DevOps, and Data Engineers across Noida, Bengaluru, Hyderabad, and Pune."
        />
        <meta
          name="keywords"
          content="tech salary calculator India 2026, software engineer salary Noida, AI engineer salary Bangalore, developer hiring cost calculator, IT staffing salary benchmarks, TalentXcel compensation explorer"
        />
        <link rel="canonical" href="https://talentxcel.co.in/salary-calculator" />
        <meta property="og:title" content="2026 Tech Salary Calculator & Hiring Cost Explorer | TalentXcel" />
        <meta
          property="og:description"
          content="Real-time technology compensation benchmarks, skill premiums, and team hiring calculators for India."
        />
        <meta property="og:url" content="https://talentxcel.co.in/salary-calculator" />
        <meta property="og:type" content="website" />

        {/* Structured Data: WebApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TalentXcel 2026 Tech Salary & Hiring Cost Calculator",
            "url": "https://talentxcel.co.in/salary-calculator",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
            },
            "provider": {
              "@type": "Organization",
              "@id": "https://talentxcel.co.in/#organization",
              "name": "TalentXcel Services Private Limited",
              "url": "https://talentxcel.co.in",
            },
          })}
        </script>

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
                "item": "https://talentxcel.co.in/services",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "2026 Tech Salary Calculator",
                "item": "https://talentxcel.co.in/salary-calculator",
              },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white border-b border-border/80 pt-10 pb-12 lg:pt-14 lg:pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-semibold border border-emerald-500/20">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                <span>2026 Indian Tech Market Intelligence • 100% Free Public Tool</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Tech Salary Benchmark &amp; <br className="hidden sm:inline" />
                <span className="text-primary">Enterprise Hiring Budget Explorer</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Benchmark market compensation, high-demand skill multipliers, and dedicated engineering pod costs across Delhi NCR, Bengaluru, Hyderabad, and Pune.
              </p>

              {/* Mode Switcher */}
              <div className="pt-2 flex justify-center">
                <Tabs value={mode} onValueChange={(v) => setMode(v as "candidate" | "employer")} className="w-full max-w-md">
                  <TabsList className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
                    <TabsTrigger
                      value="candidate"
                      className="rounded-lg text-xs sm:text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
                    >
                      👨‍💻 For Candidates &amp; Engineers
                    </TabsTrigger>
                    <TabsTrigger
                      value="employer"
                      className="rounded-lg text-xs sm:text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
                    >
                      🏢 For Employers &amp; Hiring Teams
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Main Interactive Canvas */}
        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Interactive Selectors (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* 1. Select Tech Role */}
                <Card className="border-border/80 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        1. Select Technology Role
                      </CardTitle>
                      <Badge variant="outline" className="text-xs font-medium">
                        {TECH_ROLES.length} High-Demand Roles
                      </Badge>
                    </div>
                    <CardDescription className="text-xs">
                      Compensation curves mapped to production Indian enterprise requirements.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {TECH_ROLES.map((role) => {
                        const isSelected = role.id === selectedRoleId;
                        return (
                          <button
                            key={role.id}
                            type="button"
                            onClick={() => setSelectedRoleId(role.id)}
                            className={`p-3 text-left rounded-xl border transition-all ${
                              isSelected
                                ? "border-primary bg-primary/5 ring-1 ring-primary shadow-xs"
                                : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                {role.category}
                              </span>
                              {isSelected && <CheckCircle2 className="h-4 w-4 text-primary" />}
                            </div>
                            <div className="text-sm font-bold text-slate-900 mt-1 line-clamp-1">
                              {role.title}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                              {role.keySkills.slice(0, 3).join(", ")}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* 2. Select Experience Tier */}
                <Card className="border-border/80 shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      2. Experience &amp; Seniority Level
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {(["fresher", "mid", "senior", "lead"] as const).map((tier) => {
                        const isSelected = selectedExp === tier;
                        const info = expLabels[tier];
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setSelectedExp(tier)}
                            className={`p-3 text-center rounded-xl border transition-all ${
                              isSelected
                                ? "border-primary bg-primary/5 ring-1 ring-primary font-bold shadow-xs text-primary"
                                : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white text-slate-800"
                            }`}
                          >
                            <div className="text-xs font-bold">{info.title}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">{info.subtitle}</div>
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* 3. Primary Location Hub */}
                <Card className="border-border/80 shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      3. Target Work Location
                    </CardTitle>
                    <CardDescription className="text-xs">
                      Adjusts for city-level cost-of-living and tech talent competition density.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {LOCATIONS.map((loc) => {
                        const isSelected = selectedLocId === loc.id;
                        return (
                          <button
                            key={loc.id}
                            type="button"
                            onClick={() => setSelectedLocId(loc.id)}
                            className={`p-3 text-left rounded-xl border transition-all ${
                              isSelected
                                ? "border-primary bg-primary/5 ring-1 ring-primary shadow-xs"
                                : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900">{loc.name}</span>
                              {isSelected && <CheckCircle2 className="h-3.5 w-3.5 text-primary" />}
                            </div>
                            <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">{loc.marketNote}</div>
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* 4. High-Demand Skill Boosters */}
                <Card className="border-border/80 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        4. High-Demand Skill Multipliers (Stack Premiums)
                      </CardTitle>
                      <Badge className="bg-amber-500/10 text-amber-700 hover:bg-amber-500/20 text-xs">
                        Market Premium
                      </Badge>
                    </div>
                    <CardDescription className="text-xs">
                      Select specialized proficiencies that command instant salary increases in the 2026 market.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {SKILL_BOOSTERS.map((booster) => {
                        const isChecked = selectedSkillBoosters.includes(booster.id);
                        return (
                          <label
                            key={booster.id}
                            onClick={() => toggleSkillBooster(booster.id)}
                            className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                              isChecked
                                ? "border-amber-400/80 bg-amber-50/40 ring-1 ring-amber-400/60"
                                : "border-slate-200 hover:bg-slate-50 bg-white"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}} // handled by parent label
                              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-xs sm:text-sm font-semibold text-slate-900">
                                  {booster.name}
                                </span>
                                <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md">
                                  +{(booster.multiplier * 100).toFixed(0)}%
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500 mt-0.5">{booster.description}</p>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* 5. Team Size Slider (Employer Mode Only) */}
                {mode === "employer" && (
                  <Card className="border-border/80 shadow-sm bg-blue-50/40 border-blue-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-600" />
                          5. Pod Sizing (Dedicated Team Deployment)
                        </CardTitle>
                        <Badge className="bg-blue-600 text-white text-xs">
                          {teamSize} {teamSize === 1 ? "Engineer" : "Engineers"}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs text-blue-900/70">
                        Calculate total monthly and annual budgeting for dedicated engineering squads.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Slider
                        value={[teamSize]}
                        onValueChange={(vals) => setTeamSize(vals[0])}
                        min={1}
                        max={15}
                        step={1}
                        className="py-2"
                      />
                      <div className="flex justify-between text-xs text-slate-500 font-medium">
                        <span>1 Individual Hire</span>
                        <span>5 Pod Sprint Core</span>
                        <span>10 Squad</span>
                        <span>15 Large Practice</span>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Right Column: Live Calculated Results & Conversion Panel (5 cols sticky) */}
              <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
                <Card className="border-2 border-primary/30 shadow-xl overflow-hidden bg-white">
                  {/* Card Header Bar */}
                  <div className="bg-gradient-to-r from-primary to-blue-700 p-4 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-bold tracking-wider text-blue-100">
                        {mode === "candidate" ? "Compensation Intelligence" : "Employer Budget Benchmark"}
                      </span>
                      <Badge className="bg-white/20 text-white hover:bg-white/30 text-[10px] border-none font-semibold">
                        2026 Verified Data
                      </Badge>
                    </div>
                    <h2 className="text-lg font-bold text-white mt-1 line-clamp-1">{activeRole.title}</h2>
                    <p className="text-xs text-blue-100/90 mt-0.5">
                      {expLabels[selectedExp].title} ({expLabels[selectedExp].subtitle}) • {activeLoc.name}
                    </p>
                  </div>

                  <CardContent className="p-5 sm:p-6 space-y-6">
                    {/* Primary Highlight Metric */}
                    <div className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-200">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {mode === "candidate" ? "Target Median CTC Benchmark" : "Median Annual Budget (Per Head)"}
                      </span>
                      <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-1">
                        ₹{calculatedSalaries.median} <span className="text-xl font-bold text-slate-500">LPA</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1 flex items-center justify-center gap-2">
                        <span>Monthly Take-Home: ~₹{calculatedSalaries.monthlyTakeHome.toLocaleString("en-IN")}/mo</span>
                        <span>•</span>
                        <span className="text-emerald-700 font-semibold">In-Hand Est.</span>
                      </div>
                    </div>

                    {/* 4-Tier Percentile Distribution Grid */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span>Market Percentile Distribution</span>
                        <span>Annual CTC</span>
                      </div>

                      <div className="space-y-2">
                        {/* 25th Percentile */}
                        <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-xs border border-slate-100">
                          <div>
                            <span className="font-semibold text-slate-800">25th Percentile</span>
                            <span className="text-[10px] text-slate-500 block">Base market entry level</span>
                          </div>
                          <span className="font-bold text-slate-700">₹{calculatedSalaries.p25} LPA</span>
                        </div>

                        {/* Median */}
                        <div className="flex items-center justify-between p-2.5 bg-primary/10 rounded-lg text-xs border border-primary/20 font-bold">
                          <div>
                            <span className="text-primary font-bold">50th Percentile (Median)</span>
                            <span className="text-[10px] text-slate-600 block font-normal">Standard competitive market hire</span>
                          </div>
                          <span className="text-primary font-extrabold text-sm">₹{calculatedSalaries.median} LPA</span>
                        </div>

                        {/* 75th Percentile */}
                        <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-xs border border-slate-100">
                          <div>
                            <span className="font-semibold text-slate-800">75th Percentile</span>
                            <span className="text-[10px] text-slate-500 block">Top quartile / high-bar performers</span>
                          </div>
                          <span className="font-bold text-slate-700">₹{calculatedSalaries.p75} LPA</span>
                        </div>

                        {/* 90th Percentile */}
                        <div className="flex items-center justify-between p-2.5 bg-amber-50/60 rounded-lg text-xs border border-amber-200">
                          <div>
                            <span className="font-bold text-amber-900">90th Percentile (Top Tier)</span>
                            <span className="text-[10px] text-amber-700 block">Elite engineering talent</span>
                          </div>
                          <span className="font-extrabold text-amber-900 text-sm">₹{calculatedSalaries.p90} LPA</span>
                        </div>
                      </div>
                    </div>

                    {/* Mode Specific Commercial Breakdown */}
                    {mode === "employer" ? (
                      <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200 space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-blue-950 font-semibold">Pod Size ({teamSize} Members):</span>
                          <span className="font-extrabold text-blue-900 text-sm">
                            ₹{calculatedSalaries.annualPodCost} LPA Total
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs border-t border-blue-200/80 pt-2">
                          <span className="text-slate-600">Monthly SOW Deployment:</span>
                          <span className="font-bold text-slate-900">
                            ~₹{Number(calculatedSalaries.monthlyPodCost).toLocaleString("en-IN")}/mo
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-emerald-800 bg-emerald-100/60 p-2 rounded-lg font-medium">
                          <Clock className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                          <span>TalentXcel SLA: Pre-vetted deployment in <strong>72 Hours</strong> (vs. 60–90 day notice periods).</span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <HelpCircle className="h-3.5 w-3.5 text-primary" />
                          <span>How to Reach the 90th Percentile:</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-slate-600">
                          {activeRole.growthDriver} Focus on system scalability and production AI integration.
                        </p>
                      </div>
                    )}

                    {/* Action CTAs */}
                    <div className="space-y-2.5 pt-2">
                      {mode === "employer" ? (
                        <>
                          <Button
                            onClick={() => setIsLeadFormOpen(!isLeadFormOpen)}
                            className="w-full py-5 text-sm font-bold bg-primary hover:bg-primary/90 text-white shadow-md group"
                          >
                            <span>Deploy Pre-Vetted {activeRole.title} (72-Hr SLA)</span>
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="w-full text-xs font-semibold border-slate-300 text-slate-700 hover:bg-slate-50"
                          >
                            <Link to="/staffing-solutions">
                              <span>Explore IT Staffing &amp; Pod Models</span>
                            </Link>
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            asChild
                            className="w-full py-5 text-sm font-bold bg-primary hover:bg-primary/90 text-white shadow-md group"
                          >
                            <a
                              href="https://talentxcel.in/jobs"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                            >
                              <span>Explore Matching Roles on TalentXcel</span>
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="w-full text-xs font-semibold border-slate-300 text-slate-700 hover:bg-slate-50"
                          >
                            <Link to="/corporate-training">
                              <span>Upskill with Corporate AI Bootcamps (+22% Premium)</span>
                            </Link>
                          </Button>
                        </>
                      )}

                      {/* Share & Copy Buttons (Virality Triggers) */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={copyShareLink}
                          className="text-xs font-semibold flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800"
                        >
                          <Copy className="h-3.5 w-3.5 text-slate-600" />
                          <span>Copy Link</span>
                        </Button>
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={shareToLinkedIn}
                          className="text-xs font-semibold flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200"
                        >
                          <Share2 className="h-3.5 w-3.5 text-blue-600" />
                          <span>Share Result</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Instant Lead Form Accordion / Dropdown */}
                {isLeadFormOpen && (
                  <Card className="border-primary ring-2 ring-primary/20 shadow-xl bg-white p-5 animate-in fade-in slide-in-from-top-3">
                    <div className="flex items-center justify-between pb-3 border-b border-border/80">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Request {activeRole.title} Deployment</h3>
                        <p className="text-xs text-slate-500">72-Hour SLA with 90-Day Replacement Guarantee</p>
                      </div>
                      <Badge className="bg-emerald-600 text-white text-[10px]">Active Intake</Badge>
                    </div>
                    <div className="pt-4">
                      <LeadCaptureForm defaultCategory="it_staffing" sourceLocation="SalaryCalculator" />
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Market Intelligence FAQs (Search SEO Magnet) */}
        <section className="py-12 bg-white border-t border-border/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Methodology &amp; Market Dynamics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Frequently Asked Compensation Questions (2026)
              </h2>
              <p className="text-sm text-slate-600">
                Based on verified first-party placement mandates and industry compensation reports across India.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary shrink-0" />
                  What is driving the highest salary premiums in India in 2026?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Generative AI pipeline implementation, production RAG systems, and specialized LLM fine-tuning command an immediate <strong>20% to 25% compensation premium</strong> over traditional software stacks. Software engineers with demonstrable experience in container orchestration (Kubernetes) and cloud security (SOC2/Zero-Trust) also command top quartile offers.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary shrink-0" />
                  How do Delhi NCR (Noida/Gurgaon) salaries compare to Bengaluru?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Bengaluru remains the highest compensation market with an average 10–12% premium across product engineering roles. However, Delhi NCR (especially Noida Sector 125–135 corridors and Gurgaon Cyber City) has narrowed the gap significantly, offering competitive compensation for enterprise software, BFSI platforms, and AI engineering practices.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary shrink-0" />
                  How does TalentXcel's 72-Hour Deployment SLA compare to market hiring?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  In the open Indian tech market, notice periods average between 60 to 90 days with high candidate dropout rates (35–45%). TalentXcel maintains pre-vetted, benchmarked talent pools and dedicated delivery pods ready for deployment in <strong>72 hours</strong>, backed by our rigorous 5-stage practitioner screening and a 90-day replacement guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SalaryCalculator;
