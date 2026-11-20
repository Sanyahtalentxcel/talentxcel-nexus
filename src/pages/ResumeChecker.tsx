import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  ATS_ROLE_TAXONOMIES,
  analyzeResumeText,
  extractKeywordsFromJobDescription,
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
  Plus,
  RefreshCw,
  SlidersHorizontal,
  Briefcase,
  Zap,
  Check,
  Globe,
  X,
  Wand2,
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

const SAMPLE_JD_TALENTXCEL = `Senior Full-Stack AI Engineer (TalentXcel Requisition)
We are seeking a senior engineer proficient in React, Next.js, TypeScript, Node.js, and Python.
Required Skills:
- Hands-on expertise with PyTorch, LangChain, RAG, and Vector Databases.
- Production experience with PostgreSQL, Docker, Kubernetes, and AWS cloud infrastructure.
- Strong grounding in REST API design, Git, CI/CD pipelines, and high-concurrency architecture.`;

const ResumeChecker = () => {
  const { toast } = useToast();

  // Mode Selection: Preset vs Custom Job Description
  const [targetMode, setTargetMode] = useState<"preset" | "custom">("preset");
  const [selectedRoleId, setSelectedRoleId] = useState<string>("fullstack");
  const [customJdText, setCustomJdText] = useState<string>("");
  const [customKeywords, setCustomKeywords] = useState<string[]>([
    "react", "typescript", "next.js", "node.js", "python", "langchain", "rag", "docker", "aws", "postgresql"
  ]);
  const [newCustomSkill, setNewCustomSkill] = useState<string>("");

  // Resume content & analysis state
  const [resumeText, setResumeText] = useState<string>("");
  const [analysis, setAnalysis] = useState<AtsAnalysisResult | null>(null);
  const [previousScore, setPreviousScore] = useState<number | null>(null);
  const [autoRedirect, setAutoRedirect] = useState<boolean>(false);
  const [redirectCountdown, setRedirectCountdown] = useState<number | null>(null);
  const [isCandidateIntakeOpen, setIsCandidateIntakeOpen] = useState<boolean>(false);

  const activeRole = ATS_ROLE_TAXONOMIES.find((r) => r.id === selectedRoleId) || ATS_ROLE_TAXONOMIES[0];
  const activeTargetTitle = targetMode === "custom" ? "Custom Role (talentxcel.in)" : activeRole.name;

  // Execute Scan
  const runScan = (textToAnalyze: string, activeCustomKeywords?: string[]) => {
    if (!textToAnalyze.trim() || textToAnalyze.trim().length < 40) {
      toast({
        title: "Please paste more content",
        description: "Paste at least a few sentences or your complete resume text to run the ATS scan.",
        variant: "destructive",
      });
      return;
    }

    const customList = targetMode === "custom"
      ? (activeCustomKeywords || customKeywords)
      : undefined;

    const result = analyzeResumeText(textToAnalyze, selectedRoleId, customList);
    if (analysis) {
      setPreviousScore(analysis.overallScore);
    }
    setAnalysis(result);

    // Auto-redirect trigger to Resume.talentxcel.in
    if (autoRedirect) {
      setRedirectCountdown(2);
      toast({
        title: `Scan Complete: ${result.overallScore}% ATS Score!`,
        description: "Redirecting to Resume.talentxcel.in in 2 seconds...",
      });
      setTimeout(() => {
        handleRedirectToResumeBuilder(result.overallScore, textToAnalyze);
        setRedirectCountdown(null);
      }, 2000);
    }
  };

  const handleAnalyze = () => {
    runScan(resumeText);
  };

  const loadSample = () => {
    setResumeText(SAMPLE_RESUME);
    runScan(SAMPLE_RESUME);
  };

  const loadSampleJd = () => {
    setCustomJdText(SAMPLE_JD_TALENTXCEL);
    const extracted = extractKeywordsFromJobDescription(SAMPLE_JD_TALENTXCEL);
    setCustomKeywords(extracted);
    toast({
      title: "Sample JD Loaded!",
      description: `Extracted ${extracted.length} required skills from talentxcel.in job spec.`,
    });
    if (resumeText.trim().length > 40) {
      runScan(resumeText, extracted);
    }
  };

  const handleExtractFromCustomJd = () => {
    if (!customJdText.trim()) {
      toast({
        title: "Please paste a job description",
        description: "Paste requirements or job specs from talentxcel.in/jobs to extract target keywords.",
        variant: "destructive",
      });
      return;
    }
    const extracted = extractKeywordsFromJobDescription(customJdText);
    setCustomKeywords(extracted);
    toast({
      title: "Keywords Extracted!",
      description: `Matched ${extracted.length} essential tech skills from the description.`,
    });
    if (resumeText.trim().length > 40) {
      runScan(resumeText, extracted);
    }
  };

  const handleAddCustomSkill = () => {
    const trimmed = newCustomSkill.trim().toLowerCase();
    if (!trimmed) return;
    if (!customKeywords.includes(trimmed)) {
      const updated = [...customKeywords, trimmed];
      setCustomKeywords(updated);
      setNewCustomSkill("");
      if (resumeText.trim().length > 40) {
        runScan(resumeText, updated);
      }
    }
  };

  const handleRemoveCustomSkill = (skillToRemove: string) => {
    const updated = customKeywords.filter((s) => s !== skillToRemove);
    setCustomKeywords(updated);
    if (resumeText.trim().length > 40) {
      runScan(resumeText, updated);
    }
  };

  // In-place Resume Customization: Add individual keyword
  const handleInjectSingleKeyword = (kw: string) => {
    const addition = `\n- Technical Competency: Proficient in ${kw} with enterprise production deployment.`;
    const updated = resumeText + addition;
    setResumeText(updated);
    toast({
      title: `Added "${kw}" to resume!`,
      description: "Click 'Re-Test ATS Score' or scan to see your updated score.",
    });
    runScan(updated);
  };

  // In-place Resume Customization: Auto-Inject All Missing Keywords
  const handleAutoInjectAllMissing = () => {
    if (!analysis || analysis.missingEssentialKeywords.length === 0) return;
    const missingList = analysis.missingEssentialKeywords;
    const formattedBlock = `\n\nKey Skills & Technical Proficiencies (Tailored for ${activeTargetTitle}):\n- Core Technologies: ${missingList.join(", ")}`;
    const updated = resumeText + formattedBlock;
    setResumeText(updated);
    runScan(updated);
    toast({
      title: "All Missing Keywords Injected!",
      description: `Added ${missingList.length} skills to your resume. Score recalculated in real time.`,
    });
  };

  // Redirection Handler to Resume.talentxcel.in
  const handleRedirectToResumeBuilder = (scoreVal?: number, textVal?: string) => {
    const activeText = textVal || resumeText;
    const currentScore = scoreVal ?? (analysis ? analysis.overallScore : 0);

    // Save resume to browser localStorage for seamless import on Resume.talentxcel.in
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("talentxcel_custom_resume", activeText);
        localStorage.setItem("talentxcel_resume_score", String(currentScore));
        localStorage.setItem("talentxcel_target_role", activeTargetTitle);
      }
    } catch (e) {
      console.warn("Local storage cache notice:", e);
    }

    const redirectUrl = `https://resume.talentxcel.in/?utm_source=talentxcel_ats_checker&score=${currentScore}&role=${encodeURIComponent(activeTargetTitle)}`;
    window.open(redirectUrl, "_blank");
  };

  const copyShareText = () => {
    if (!analysis) return;
    const shareText = `My resume scored ${analysis.overallScore}% on TalentXcel's 2026–2027 AI ATS Resume Checker for ${activeTargetTitle}. Check your score & optimize for free: ${window.location.href}`;
    navigator.clipboard.writeText(shareText);
    toast({
      title: "Result Copied!",
      description: "Paste it on LinkedIn or share with your engineering network.",
    });
  };

  const shareToLinkedIn = () => {
    if (!analysis) return;
    const summary = encodeURIComponent(
      `I just evaluated my technical resume using TalentXcel's 2026–2027 AI ATS Score Checker for ${activeTargetTitle}: Scored ${analysis.overallScore}% with verified keyword density. Check your score for free:`
    );
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${summary}`, "_blank");
  };

  const getScoreRating = (score: number) => {
    if (score >= 85) return "Elite ATS Ready";
    if (score >= 70) return "Competitive Pass";
    if (score >= 50) return "Needs Optimization";
    return "High Filter Rejection Risk";
  };

  const wordsCount = useMemo(() => {
    return resumeText.trim().split(/\s+/).filter(Boolean).length;
  }, [resumeText]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Helmet>
        <title>Free AI ATS Resume Score & Keyword Checker | 2026–2027 | TalentXcel</title>
        <meta
          name="description"
          content="Free 100% private ATS resume scanner and keyword optimizer with customizable job description matching. Direct export to Resume.talentxcel.in."
        />
        <meta
          name="keywords"
          content="free ats resume checker india, resume keyword scanner, tech resume score, software engineer resume review, TalentXcel ats tool, resume.talentxcel.in"
        />
        <link rel="canonical" href="https://talentxcel.co.in/resume-checker" />
        <meta property="og:title" content="Free AI ATS Resume Score & Keyword Checker | TalentXcel" />
        <meta
          property="og:description"
          content="Scan your technical resume against real enterprise ATS parsing engines. 100% free, private, customizable, and instant."
        />
        <meta property="og:url" content="https://talentxcel.co.in/resume-checker" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white border-b border-border/80 pt-10 pb-12 lg:pt-14 lg:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-semibold border border-emerald-500/20">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span>100% Free &amp; Private • Customization Engine • Direct Export to Resume.talentxcel.in</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              AI ATS Resume Score &amp; Keyword Customizer
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Scan your resume against 2026–2027 enterprise hiring filters or paste a custom job description from <strong>talentxcel.in</strong>. Customize missing skills in 1-click and export directly to <strong>Resume.talentxcel.in</strong>.
            </p>
          </div>
        </section>

        {/* Main Scanner Section */}
        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Input Panel & Customization Controls (6 cols) */}
              <div className="lg:col-span-6 space-y-5">
                <Card className="border-border/80 shadow-sm bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-bold text-slate-900 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        1. Target Criteria &amp; Customization
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
                      Choose standard 2026–2027 role benchmarks or customize against a specific job post from talentxcel.in.
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Mode Toggle: Preset vs Custom */}
                    <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
                      <button
                        type="button"
                        onClick={() => {
                          setTargetMode("preset");
                          if (resumeText.trim().length > 40) {
                            runScan(resumeText);
                          }
                        }}
                        className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                          targetMode === "preset"
                            ? "bg-white text-slate-900 shadow-xs font-bold"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Standard Role Benchmark
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setTargetMode("custom");
                          if (resumeText.trim().length > 40) {
                            runScan(resumeText, customKeywords);
                          }
                        }}
                        className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                          targetMode === "custom"
                            ? "bg-white text-primary shadow-xs font-bold"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        <SlidersHorizontal className="h-3.5 w-3.5" />
                        <span>Custom Job Description</span>
                        <span className="px-1.5 py-0.2 text-[9px] rounded bg-emerald-100 text-emerald-800 font-bold">
                          talentxcel.in
                        </span>
                      </button>
                    </div>

                    {/* Mode 1: Preset Role selector buttons */}
                    {targetMode === "preset" && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 animate-in fade-in">
                        {ATS_ROLE_TAXONOMIES.map((r) => {
                          const isSelected = r.id === selectedRoleId;
                          return (
                            <button
                              key={r.id}
                              type="button"
                              onClick={() => {
                                setSelectedRoleId(r.id);
                                if (resumeText.trim().length > 40) {
                                  const result = analyzeResumeText(resumeText, r.id);
                                  setAnalysis(result);
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
                    )}

                    {/* Mode 2: Custom Job Description Input */}
                    {targetMode === "custom" && (
                      <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100 space-y-3 animate-in fade-in">
                        <div className="flex items-center justify-between text-xs">
                          <label htmlFor="custom-jd" className="font-bold text-slate-800 flex items-center gap-1.5">
                            <Briefcase className="h-3.5 w-3.5 text-primary" />
                            <span>Paste Target Job Description (from talentxcel.in/jobs)</span>
                          </label>
                          <button
                            type="button"
                            onClick={loadSampleJd}
                            className="text-primary hover:underline text-[11px] font-semibold"
                          >
                            Load Sample JD
                          </button>
                        </div>
                        <Textarea
                          id="custom-jd"
                          rows={3}
                          placeholder="Paste the job requirements, responsibilities, or tech stack from any talentxcel.in listing..."
                          value={customJdText}
                          onChange={(e) => setCustomJdText(e.target.value)}
                          className="font-mono text-xs bg-white border-blue-200 rounded-lg leading-relaxed resize-y"
                        />
                        <div className="flex items-center justify-between gap-2">
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            onClick={handleExtractFromCustomJd}
                            className="text-xs font-semibold h-8 bg-white border-blue-200 hover:bg-blue-50 text-blue-900"
                          >
                            <Wand2 className="h-3.5 w-3.5 mr-1 text-primary" />
                            <span>Extract Target Skills</span>
                          </Button>
                          <a
                            href="https://talentxcel.in/jobs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-blue-700 hover:text-blue-900 flex items-center gap-1 font-semibold"
                          >
                            <span>Browse live jobs on talentxcel.in</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>

                        {/* Active Custom Target Keywords */}
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[11px] font-semibold text-slate-600 block">
                            Active Target Keywords ({customKeywords.length}):
                          </span>
                          <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto p-1 bg-white rounded-lg border border-slate-200">
                            {customKeywords.map((skill) => (
                              <span
                                key={skill}
                                className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200"
                              >
                                <span>{skill}</span>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveCustomSkill(skill)}
                                  className="text-blue-400 hover:text-blue-700"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </span>
                            ))}
                          </div>
                          {/* Add manual skill input */}
                          <div className="flex items-center gap-2 pt-1">
                            <Input
                              type="text"
                              placeholder="Add another required skill (e.g. redis, tailwind)..."
                              value={newCustomSkill}
                              onChange={(e) => setNewCustomSkill(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  handleAddCustomSkill();
                                }
                              }}
                              className="h-8 text-xs bg-white"
                            />
                            <Button
                              type="button"
                              size="sm"
                              onClick={handleAddCustomSkill}
                              className="h-8 px-3 text-xs"
                            >
                              <Plus className="h-3.5 w-3.5 mr-1" />
                              Add
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Resume Textarea */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <label htmlFor="resume-text" className="font-semibold text-slate-700">
                          2. Paste or Customize Your Resume Content
                        </label>
                        <span>{wordsCount} words</span>
                      </div>
                      <Textarea
                        id="resume-text"
                        rows={13}
                        placeholder="Paste your resume work experience, technical skills, projects, and education text here..."
                        value={resumeText}
                        onChange={(e) => setResumeText(e.target.value)}
                        className="font-mono text-xs bg-slate-50/60 border-slate-300 rounded-xl leading-relaxed resize-y focus:bg-white"
                      />
                    </div>

                    {/* Auto-redirect checkbox */}
                    <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 text-xs text-slate-700">
                      <input
                        type="checkbox"
                        id="auto-redirect-toggle"
                        checked={autoRedirect}
                        onChange={(e) => setAutoRedirect(e.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                      />
                      <label htmlFor="auto-redirect-toggle" className="cursor-pointer select-none">
                        Auto-redirect to <strong>Resume.talentxcel.in</strong> after test completes
                      </label>
                    </div>

                    {/* Primary Scan Button */}
                    <Button
                      type="button"
                      onClick={handleAnalyze}
                      className="w-full py-6 text-sm font-bold bg-primary hover:bg-primary/90 text-white shadow-md group"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      <span>{analysis ? "Re-Test ATS Score & Keywords" : "Run Instant AI ATS Scan"}</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column: Real-Time Results, In-Place Customization & Redirect (6 cols) */}
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
                          <h3 className="text-xl font-bold text-white">{activeTargetTitle}</h3>
                          <div className="flex items-center gap-2 justify-center sm:justify-start">
                            <Badge className="bg-white/20 text-white border-none text-xs font-semibold">
                              {getScoreRating(analysis.overallScore)}
                            </Badge>
                            {previousScore !== null && previousScore !== analysis.overallScore && (
                              <Badge className="bg-emerald-500 text-white text-[10px] font-bold">
                                {analysis.overallScore > previousScore
                                  ? `+${analysis.overallScore - previousScore}% Improvement!`
                                  : `${analysis.overallScore - previousScore}%`}
                              </Badge>
                            )}
                          </div>
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

                        {/* Missing Critical Keywords Box with In-Place Customization Click */}
                        {analysis.missingEssentialKeywords.length > 0 && (
                          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                                <AlertTriangle className="h-4 w-4 text-amber-600" />
                                <span>Missing Essential Skills for {activeTargetTitle}:</span>
                              </div>
                              <span className="text-[10px] text-amber-700 italic">Click any skill to inject</span>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                              {analysis.missingEssentialKeywords.map((kw) => (
                                <button
                                  key={kw}
                                  type="button"
                                  onClick={() => handleInjectSingleKeyword(kw)}
                                  className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white hover:bg-amber-100 text-amber-900 border border-amber-300 shadow-xs transition-colors cursor-pointer flex items-center gap-1"
                                  title="Click to add to your resume"
                                >
                                  <Plus className="h-3 w-3 text-amber-600" />
                                  <span>{kw}</span>
                                </button>
                              ))}
                            </div>

                            {/* Auto-Inject All Missing Keywords button */}
                            <div className="pt-1 flex flex-col sm:flex-row items-center gap-2">
                              <Button
                                type="button"
                                size="sm"
                                onClick={handleAutoInjectAllMissing}
                                className="w-full sm:w-auto text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white h-8"
                              >
                                <Zap className="h-3.5 w-3.5 mr-1" />
                                <span>Auto-Inject All {analysis.missingEssentialKeywords.length} Missing Keywords</span>
                              </Button>
                              <span className="text-[11px] text-slate-500">
                                Appends formatted skill block &amp; recalculates score
                              </span>
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

                        {/* Step-by-Step ATS Fixes */}
                        <div className="space-y-2 pt-2 border-t border-slate-100">
                          <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                            <TrendingUp className="h-3.5 w-3.5 text-primary" />
                            Step-by-Step ATS Recommendations:
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

                        {/* HIGH CONVERSION BANNER: Redirect to Resume.talentxcel.in */}
                        <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 border-2 border-primary/30 space-y-3">
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-700 px-2 py-0.5 rounded bg-purple-100 border border-purple-200">
                                Official Resume Builder
                              </span>
                              <h4 className="text-sm font-bold text-slate-900">
                                Ready to Format &amp; Download Your Recruiter-Ready PDF?
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                Move your customized content directly into <strong>Resume.talentxcel.in</strong> to format with 10+ ATS-tested templates, customize typography, and export verified PDFs.
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                            <Button
                              type="button"
                              onClick={() => handleRedirectToResumeBuilder()}
                              className="w-full sm:w-auto text-xs font-bold bg-primary hover:bg-primary/90 text-white shadow-md flex items-center justify-center gap-1.5"
                            >
                              <Globe className="h-3.5 w-3.5" />
                              <span>Redirect to Resume.talentxcel.in</span>
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                            <a
                              href="https://talentxcel.in/jobs"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full sm:w-auto text-xs font-semibold px-3 py-2 rounded-lg text-slate-700 hover:text-primary hover:bg-white/80 border border-slate-200 text-center transition-colors"
                            >
                              Browse Jobs on talentxcel.in ↗
                            </a>
                          </div>
                        </div>

                        {/* Virality & Candidate Pool CTAs */}
                        <div className="space-y-2.5 pt-2 border-t border-slate-100">
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
                            className="w-full text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white py-5 shadow-xs"
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
                          <LeadCaptureForm defaultCategory="it_staffing" />
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