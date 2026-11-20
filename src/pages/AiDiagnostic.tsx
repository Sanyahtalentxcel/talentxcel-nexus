import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DIAGNOSTIC_QUESTIONS,
  calculateDiagnosticResult,
  type DiagnosticResult,
} from "@/data/aiDiagnosticQuestions";
import {
  Brain,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Clock,
  ShieldCheck,
  Building2,
  ArrowRight,
  Download,
  Share2,
  Copy,
  BookOpen,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const AiDiagnostic = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [teamSizeIndex, setTeamSizeIndex] = useState<number>(1);
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [isProposalFormOpen, setIsProposalFormOpen] = useState<boolean>(false);

  const currentQ = DIAGNOSTIC_QUESTIONS[currentStep];

  const handleSelectOption = (qId: string, optionIndex: number, score: number) => {
    const updatedAnswers = { ...answers, [qId]: score };
    setAnswers(updatedAnswers);

    if (qId === "team_size") {
      setTeamSizeIndex(optionIndex);
    }

    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const computed = calculateDiagnosticResult(updatedAnswers, qId === "team_size" ? optionIndex : teamSizeIndex);
      setResult(computed);
    }
  };

  const resetDiagnostic = () => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
    setIsProposalFormOpen(false);
  };

  const copyDiagnosticResult = () => {
    if (!result) return;
    const summaryText = `Our engineering team benchmarked at ${result.maturityTier} on TalentXcel's Enterprise AI Readiness Diagnostic. Estimated annual productivity gain: ₹${(result.estimatedAnnualSavingsInr / 100000).toFixed(1)} Lakhs. Explore here: ${window.location.href}`;
    navigator.clipboard.writeText(summaryText);
    toast({
      title: "Scorecard Copied!",
      description: "Paste and share with your VP of Engineering or Leadership Team.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Helmet>
        <title>Enterprise AI Workforce Readiness Diagnostic | 2026–2027 | TalentXcel</title>
        <meta
          name="description"
          content="Free 2-minute diagnostic for CTOs and Engineering Leaders. Assess Generative AI maturity, calculate weekly developer hours saved, and estimate annual team productivity in INR."
        />
        <meta
          name="keywords"
          content="enterprise AI readiness assessment, AI corporate training ROI calculator, generative ai adoption engineering teams India, TalentXcel AI diagnostic"
        />
        <link rel="canonical" href="https://talentxcel.co.in/ai-diagnostic" />
        <meta property="og:title" content="Enterprise AI Workforce Readiness Diagnostic | TalentXcel" />
        <meta
          property="og:description"
          content="Assess your technical team's AI readiness and calculate annual developer productivity gains."
        />
        <meta property="og:url" content="https://talentxcel.co.in/ai-diagnostic" />
        <meta property="og:type" content="website" />

        {/* Structured Data: WebApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TalentXcel Enterprise AI Workforce Readiness Diagnostic",
            "url": "https://talentxcel.co.in/ai-diagnostic",
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-700 text-xs font-semibold border border-purple-500/20">
              <Brain className="h-4 w-4 text-purple-600" />
              <span>2026–2027 Executive Tool • 5 Quick Diagnostic Questions • Instant ROI Benchmark</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Enterprise AI Workforce Readiness Diagnostic
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Evaluate your software engineering organization's Generative AI adoption maturity, identify sprint velocity bottlenecks, and calculate your annual developer productivity upside in INR.
            </p>
          </div>
        </section>

        {/* Diagnostic Canvas */}
        <section className="py-10 lg:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {!result ? (
              <Card className="border-border/80 shadow-lg bg-white overflow-hidden">
                {/* Step Progress Bar */}
                <div className="bg-slate-100 p-4 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>
                    Question {currentStep + 1} of {DIAGNOSTIC_QUESTIONS.length}
                  </span>
                  <div className="flex gap-1.5">
                    {DIAGNOSTIC_QUESTIONS.map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-6 rounded-full transition-all ${
                          i <= currentStep ? "bg-primary" : "bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {currentQ.question}
                    </h2>
                    <p className="text-xs text-slate-500">{currentQ.subtitle}</p>
                  </div>

                  {/* Options List */}
                  <div className="space-y-3">
                    {currentQ.options.map((opt, idx) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => handleSelectOption(currentQ.id, idx, opt.score)}
                        className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-primary hover:bg-primary/5 hover:ring-1 hover:ring-primary transition-all bg-white group flex items-start justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <span className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors block">
                            {opt.label}
                          </span>
                          <span className="text-xs text-slate-500 leading-relaxed block">
                            {opt.description}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-primary shrink-0 group-hover:translate-x-1 transition-all mt-1" />
                      </button>
                    ))}
                  </div>

                  {/* Back button if past step 0 */}
                  {currentStep > 0 && (
                    <div className="pt-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="text-xs text-slate-500 hover:text-slate-800"
                      >
                        ← Back to Previous Question
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              /* Diagnostic Result Scorecard */
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3">
                <Card className="border-slate-200 shadow-xl bg-white overflow-hidden">
                  {/* Result Header */}
                  <div className="p-6 sm:p-8 bg-gradient-to-r from-brand-navy to-slate-900 text-white space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-bold tracking-wider text-purple-300">
                        Enterprise Scorecard
                      </span>
                      <Badge className="bg-white/20 text-white border-none text-xs font-semibold">
                        2026–2027 Benchmark
                      </Badge>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {result.maturityTier}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                      {result.summary}
                    </p>
                  </div>

                  <CardContent className="p-6 sm:p-8 space-y-6">
                    {/* ROI Highlight Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 text-center space-y-1">
                        <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                          Engineering Velocity Upside
                        </span>
                        <div className="text-3xl sm:text-4xl font-black text-emerald-900">
                          {result.hoursSavedPerDevPerWeek} <span className="text-base font-bold">Hrs/Dev/Wk</span>
                        </div>
                        <span className="text-xs text-emerald-700 block">
                          ~{result.totalWeeklyHoursSaved.toLocaleString("en-IN")} hours returned to sprints each week
                        </span>
                      </div>

                      <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-200 text-center space-y-1">
                        <span className="text-xs font-semibold text-blue-800 uppercase tracking-wider block">
                          Est. Annual Productivity Value
                        </span>
                        <div className="text-3xl sm:text-4xl font-black text-blue-900">
                          ₹{(result.estimatedAnnualSavingsInr / 100000).toFixed(1)} <span className="text-base font-bold">Lakhs</span>
                        </div>
                        <span className="text-xs text-blue-700 block">
                          Direct engineer output recapture per year
                        </span>
                      </div>
                    </div>

                    {/* Recommended Bootcamp Track */}
                    <div className="p-5 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-purple-950 uppercase tracking-wider">
                        <BookOpen className="h-4 w-4 text-purple-700" />
                        <span>Recommended Corporate Training Track:</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {result.recommendedBootcampTrack}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Customized 2-day on-site or blended bootcamp delivered by senior practitioners, focusing on automated test generation, enterprise code refactoring, and zero-data-retention security policies.
                      </p>
                    </div>

                    {/* Action Items List */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        Key 2026–2027 Executive Priorities:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {result.keyActionItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3 pt-3 border-t border-slate-100">
                      <Button
                        onClick={() => setIsProposalFormOpen(!isProposalFormOpen)}
                        className="w-full py-6 text-sm font-bold bg-primary hover:bg-primary/90 text-white shadow-md group"
                      >
                        <span>Request Custom Executive Proposal &amp; 2-Day Syllabus</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={copyDiagnosticResult}
                          className="flex-1 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800"
                        >
                          <Copy className="h-3.5 w-3.5 mr-1.5" />
                          <span>Copy Scorecard Summary</span>
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={resetDiagnostic}
                          className="text-xs font-semibold text-slate-600"
                        >
                          Retake Diagnostic
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Lead Form Accordion */}
                {isProposalFormOpen && (
                  <Card className="border-primary ring-2 ring-primary/20 shadow-xl bg-white p-6 animate-in fade-in">
                    <div className="flex items-center justify-between pb-3 border-b border-border/80">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">Request Executive Training Proposal</h3>
                        <p className="text-xs text-slate-500">
                          Pre-configured for {result.maturityTier} • Fast SLA dispatch
                        </p>
                      </div>
                      <Badge className="bg-purple-600 text-white text-[10px]">Corporate L&amp;D</Badge>
                    </div>
                    <div className="pt-4">
                      <LeadCaptureForm defaultCategory="corporate_training" sourceLocation="AiDiagnostic" />
                    </div>
                  </Card>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiDiagnostic;
