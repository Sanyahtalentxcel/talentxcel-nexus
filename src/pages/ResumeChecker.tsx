import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  ATS_ROLE_TAXONOMIES,
  analyzeResumeText,
  type AtsAnalysisResult,
} from "@/data/atsKeywordsByRole";
import {
  FileText,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Share2,
  Copy,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  HelpCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const SAMPLE_RESUME = `Senior Full-Stack Engineer with 5+ years of experience engineering scalable web applications.
Skills: React 19, TypeScript, Next.js, Node.js, PostgreSQL, Docker, REST API, Git, Tailwind CSS, Redis.
Experience:
- Architected enterprise cloud dashboard using React and TypeScript, reducing client-side latency by 45%.
- Developed high-concurrency Node.js microservices processing 12,000 API requests per minute.
- Automated CI/CD deployment pipelines using Docker and GitHub Actions, cutting release cycles from 2 days to 30 minutes.
- Optimized PostgreSQL queries and implemented Redis caching, saving $1,200 monthly in database costs.
Education:
- Bachelor of Technology in Computer Science Engineering (B.Tech).
Projects:
- Scaled distributed ecommerce platform with Next.js supporting 80,000 active monthly shoppers.`;

const ResumeChecker = () => {
  const { toast } = useToast();
  const [selectedRoleId, setSelectedRoleId] = useState<string>("fullstack");
  const [resumeText, setResumeText] = useState<string>("");
  const [analysis, setAnalysis] = useState<AtsAnalysisResult | null>(null);
  const [isCandidateIntakeOpen, setIsCandidateIntakeOpen] = useState<boolean>(false);

  const activeRole = ATS_ROLE_TAXONOMIES.find((r) => r.id === selectedRoleId) || ATS_ROLE_TAXONOMIES[0];

  const handleAnalyze = () => {
    if (!resumeText.trim() || resumeText.trim().length < 50) {
      toast({
        title: "Please paste more content",
        description: "Paste at least a few sentences or your complete resume text to run the ATS scan.",
        variant: "destructive",
      });
      return;
    }
    const result = analyzeResumeText(resumeText, selectedRoleId);
    setAnalysis(result);
  };

  const loadSample = () => {
    setResumeText(SAMPLE_RESUME);
    const result = analyzeResumeText(SAMPLE_RESUME, selectedRoleId);
    setAnalysis(result);
  };

  const copyShareText = () => {
    if (!analysis) return;
    const shareText = `My resume scored ${analysis.overallScore}% on TalentXcel's Free 2026–2027 AI ATS Resume Checker for ${activeRole.name}. Check your score here: ${window.location.href}`;
    navigator.clipboard.writeText(shareText);
    toast({
      title: "Result Copied!",
      description: "Paste it on LinkedIn or share with your engineering network.",
    });
  };

  const shareToLinkedIn = () => {
    if (!analysis) return;
    const summary = encodeURIComponent(
      `I just evaluated my resume using TalentXcel's 2026–2027 AI ATS Score Checker for ${activeRole.name}: Scored ${analysis.overallScore}% with verified keyword density. Check your score for free:`
    );
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${summary}`, "_blank");
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (score >= 60) return "text-amber-600 bg-amber-50 border-amber-200";
    return "text-rose-600 bg-rose-50 border-rose-200";
  };

  const getScoreRating = (score: number) => {
    if (score >= 85) return "Elite ATS Ready";
    if (score >= 70) return "Competitive Pass";
    if (score >= 50) return "Needs Optimization";
    return "High Filter Rejection Risk";
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Helmet>
        <title>Free AI ATS Resume Score & Keyword Checker | 2026–2027 | TalentXcel</title>
        <meta
          name="description"
          content="Free 100% private ATS resume scanner and keyword optimizer for Indian software engineers. Check keyword match, action verb impact, and ATS compatibility score in seconds."
        />
        <meta
          name="keywords"
          content="free ats resume checker india, resume keyword scanner, tech resume score, software engineer resume review, TalentXcel ats tool"
        />
        <link rel="canonical" href="https://talentxcel.co.in/resume-checker" />
        <meta property="og:title" content="Free AI ATS Resume Score & Keyword Checker | TalentXcel" />
        <meta
          property="og:description"
          content="Scan your technical resume against real enterprise ATS parsing engines. 100% free, private, and instant."
        />
        <meta property="og:url" content="https://talentxcel.co.in/resume-checker" />
        <meta property="og:type" content="website" />

        {/* Structured Data: WebApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TalentXcel Free AI ATS Resume Checker",
            "url": "https://talentxcel.co.in/resume-checker",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white border-b border-border/80 pt-10 pb-12 lg:pt-14 lg:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-semibold border border-emerald-500/20">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span>100% Free &amp; Private • Client-Side Browser Analysis • Zero Sign-Up Required</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Free AI ATS Resume Score &amp; Keyword Optimizer
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              75% of tech resumes are discarded by automated Applicant Tracking Systems before a human recruiter sees them. Scan your resume against actual 2026–2027 enterprise hiring filters.
            </p>
          </div>
        </section>

        {/* Main Scanner Section */}
        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Input Panel (6 cols) */}
              <div className="lg:col-span-6 space-y-5">
                <Card className="border-border/80 shadow-sm bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-bold text-slate-900 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        1. Select Target Engineering Role
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={loadSample}
                        className="text-xs text-primary font-semibold hover:bg-primary/5 h-8 px-2"
                      >
                        Load Sample Resume
                      </Button>
                    </CardTitle>
                    <CardDescription className="text-xs">
                      The ATS analyzer uses role-specific keyword taxonomies for 2026–2027 mandates.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Role selector buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {ATS_ROLE_TAXONOMIES.map((r) => {
                        const isSelected = r.id === selectedRoleId;
                        return (
                          <button
                            key={r.id}
                            type="button"
                            onClick={() => {
                              setSelectedRoleId(r.id);
                              if (resumeText.trim().length > 50) {
                                setAnalysis(analyzeResumeText(resumeText, r.id));
                              }
                            }}
                            className={`p-2.5 text-left rounded-xl border text-xs transition-all ${
                              isSelected
                                ? "border-primary bg-primary/5 font-bold ring-1 ring-primary text-primary"
                                : "border-slate-200 hover:bg-slate-50 text-slate-700 bg-white"
                            }`}
                          >
                            <span className="block truncate">{r.name}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Resume Textarea */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <label htmlFor="resume-text" className="font-semibold text-slate-700">
                          2. Paste Your Resume Content (Text / Markdown)
                        </label>
                        <span>{resumeText.trim().split(/\s+/).filter(Boolean).length} words</span>
                      </div>
                      <Textarea
                        id="resume-text"
                        rows={14}
                        placeholder="Paste your resume work experience, technical skills, projects, and education text here..."
                        value={resumeText}
                        onChange={(e) => setResumeText(e.target.value)}
                        className="font-mono text-xs bg-slate-50/60 border-slate-300 rounded-xl leading-relaxed resize-y focus:bg-white"
                      />
                    </div>

                    <Button
                      type="button"
                      onClick={handleAnalyze}
                      className="w-full py-6 text-sm font-bold bg-primary hover:bg-primary/90 text-white shadow-md group"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      <span>Run Instant AI ATS Scan</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column: Real-Time Results & Feedback (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                {!analysis ? (
                  <Card className="border-dashed border-2 border-slate-300 p-8 text-center bg-white/60 space-y-3">
                    <FileText className="h-12 w-12 text-slate-300 mx-auto" />
                    <h3 className="text-base font-bold text-slate-800">Awaiting Resume Scan</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Paste your resume on the left or click <strong>"Load Sample Resume"</strong> to see how enterprise ATS systems score keyword density, impact metrics, and structure.
                    </p>
                  </Card>
                ) : (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                    {/* Score Card Header */}
                    <Card className="border-slate-200 shadow-md bg-white overflow-hidden">
                      <div className="p-6 bg-gradient-to-br from-slate-900 to-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="space-y-1 text-center sm:text-left">
                          <span className="text-xs uppercase font-bold text-blue-200 tracking-wider">
                            ATS Benchmark Score
                          </span>
                          <h3 className="text-xl font-bold text-white">{activeRole.name}</h3>
                          <Badge className="bg-white/20 text-white border-none text-xs font-semibold">
                            {getScoreRating(analysis.overallScore)}
                          </Badge>
                        </div>

                        {/* Circular Score Badge */}
                        <div className="h-24 w-24 rounded-full border-4 border-primary flex flex-col items-center justify-center bg-white/10 shrink-0 shadow-inner">
                          <span className="text-3xl font-black text-white">{analysis.overallScore}</span>
                          <span className="text-[10px] text-blue-200 uppercase font-semibold">out of 100</span>
                        </div>
                      </div>

                      <CardContent className="p-5 space-y-5">
                        {/* 3 Metric Progress Bars */}
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-[11px] text-slate-500 block font-medium">Keywords</span>
                            <span className="text-lg font-bold text-slate-900">{analysis.keywordScore}%</span>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-[11px] text-slate-500 block font-medium">Impact &amp; Metrics</span>
                            <span className="text-lg font-bold text-slate-900">{analysis.impactScore}%</span>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-[11px] text-slate-500 block font-medium">Structure</span>
                            <span className="text-lg font-bold text-slate-900">{analysis.structureScore}%</span>
                          </div>
                        </div>

                        {/* Missing Critical Keywords Box */}
                        {analysis.missingEssentialKeywords.length > 0 && (
                          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                              <AlertTriangle className="h-4 w-4 text-amber-600" />
                              <span>Missing Essential Keywords for {activeRole.name}:</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {analysis.missingEssentialKeywords.map((kw) => (
                                <span
                                  key={kw}
                                  className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white text-amber-800 border border-amber-200"
                                >
                                  + {kw}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Found Essential Keywords */}
                        <div className="space-y-1.5">
                          <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                            Detected Matching Keywords ({analysis.foundEssentialKeywords.length}):
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {analysis.foundEssentialKeywords.map((kw) => (
                              <span
                                key={kw}
                                className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200"
                              >
                                {kw}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actionable Recommendations */}
                        <div className="space-y-2 pt-2 border-t border-slate-100">
                          <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                            <TrendingUp className="h-3.5 w-3.5 text-primary" />
                            Step-by-Step ATS Fixes:
                          </span>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {analysis.actionableFeedback.map((fb, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>{fb}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Virality & Conversion CTAs */}
                        <div className="space-y-2.5 pt-3 border-t border-slate-100">
                          <div className="grid grid-cols-2 gap-2">
                            <Button
                              type="button"
                              variant="secondary"
                              onClick={copyShareText}
                              className="text-xs font-semibold flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800"
                            >
                              <Copy className="h-3.5 w-3.5 text-slate-600" />
                              <span>Copy Result</span>
                            </Button>
                            <Button
                              type="button"
                              variant="secondary"
                              onClick={shareToLinkedIn}
                              className="text-xs font-semibold flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200"
                            >
                              <Share2 className="h-3.5 w-3.5 text-blue-600" />
                              <span>Share on LinkedIn</span>
                            </Button>
                          </div>

                          <Button
                            onClick={() => setIsCandidateIntakeOpen(!isCandidateIntakeOpen)}
                            className="w-full text-xs font-bold bg-primary hover:bg-primary/90 text-white py-5 shadow-xs"
                          >
                            <span>Submit Profile to TalentXcel 72-Hour Vetted Pool</span>
                            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Candidate Intake Dialog */}
                    {isCandidateIntakeOpen && (
                      <Card className="border-primary ring-2 ring-primary/20 shadow-xl bg-white p-5 animate-in fade-in">
                        <div className="flex items-center justify-between pb-3 border-b border-border/80">
                          <div>
                            <h3 className="text-sm font-bold text-slate-900">Direct Placement Intake</h3>
                            <p className="text-xs text-slate-500">
                              Submit your score ({analysis.overallScore}%) for 72-hour enterprise matching
                            </p>
                          </div>
                          <Badge className="bg-emerald-600 text-white text-[10px]">Zero Ghosting</Badge>
                        </div>
                        <div className="pt-4">
                          <LeadCaptureForm defaultCategory="careers" sourceLocation="ResumeChecker" />
                        </div>
                      </Card>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResumeChecker;
