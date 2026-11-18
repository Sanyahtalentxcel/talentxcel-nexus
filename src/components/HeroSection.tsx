import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import modernWorkspace from "@/assets/modern-workspace.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-brand-soft pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-border/70">
      {/* Subtle background ambient geometric grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#101B32 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (52% width = col-span-7) */}
          <div className="lg:col-span-7 space-y-6 max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Integrated Technology &amp; Talent Solutions</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-brand-navy leading-[1.15] tracking-tight">
              Technology That Moves Business Forward.{" "}
              <span className="text-primary block sm:inline lg:block mt-1 sm:mt-0 lg:mt-1">
                Talent That Makes It Possible.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl">
              TalentXcel brings together technology solutions, workforce expertise and talent development to help organisations build, scale and transform.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 font-semibold shadow-soft hover:shadow-medium transition-all group"
              >
                <Link to="/services" className="flex items-center justify-center space-x-2">
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-slate-300 text-brand-navy hover:bg-white hover:border-slate-400 font-semibold px-6 py-3"
              >
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>

            {/* Value Highlights Pill Bar */}
            <div className="pt-6 border-t border-border/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-brand-muted">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-brand-charcoal">Enterprise Software</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-brand-charcoal">IT Staffing &amp; RPO</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-brand-charcoal">Corporate Academies</span>
              </div>
            </div>
          </div>

          {/* Right Column (48% width = col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Composition */}
              <div className="relative rounded-2xl overflow-hidden shadow-large border border-border/80 bg-white">
                <img
                  src={modernWorkspace}
                  alt="TalentXcel Integrated Enterprise Workspace and Technology Ecosystem"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover"
                  loading="eager"
                  decoding="async"
                />
                {/* Subtle dark gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent pointer-events-none" />

                {/* Floating Bottom Card: Convergence Banner */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-medium border border-border/70">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Integrated Delivery
                    </span>
                    <span className="inline-flex items-center text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                      Active Operations
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-brand-navy">
                    Enterprise Software • AI Automation • IT Staffing
                  </p>
                </div>
              </div>

              {/* Floating Top-Right Accent Card */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white rounded-xl shadow-large border border-border/80 p-3 items-center space-x-3 z-10 max-w-xs animate-in fade-in duration-300">
                <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-navy">Governance &amp; SLAs</div>
                  <div className="text-[11px] text-brand-muted">Practitioner-led accountability</div>
                </div>
              </div>

              {/* Floating Bottom-Left Accent Card */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white rounded-xl shadow-large border border-border/80 p-3 items-center space-x-3 z-10 max-w-xs animate-in fade-in duration-300">
                <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-navy">Cross-Market Reach</div>
                  <div className="text-[11px] text-brand-muted">India • Europe • Middle East</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
