import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target, Zap, Download, Calendar, ExternalLink } from "lucide-react";

const Investors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,211,209,0.1),transparent_50%)]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Invest in the <span className="bg-gradient-primary bg-clip-text text-transparent">Future of Talent</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join us in building the world's most comprehensive career ecosystem. TalentXcel Home Plus is transforming how talent connects with opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Download Pitch Deck
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Snapshot */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Company Snapshot</h2>
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-12 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-primary">Founded</h3>
                  <p className="text-3xl font-bold mb-8">July 2024</p>
                  
                  <h3 className="text-xl font-semibold mb-6 text-primary">Headquarters</h3>
                  <p className="text-3xl font-bold">India</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-primary">Business Model</h3>
                  <p className="text-lg mb-8">AI-first career ecosystem for individuals & enterprises</p>
                  
                  <h3 className="text-xl font-semibold mb-6 text-primary">Core Product</h3>
                  <p className="text-lg">TalentXcel Home Plus</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics 2025 YTD */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Key Metrics (2025 YTD)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-muted-foreground">Active Users</div>
                <div className="text-sm text-green-500 mt-2">+150% YoY</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Enterprise Clients</div>
                <div className="text-sm text-green-500 mt-2">+200% YoY</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Customer Retention</div>
                <div className="text-sm text-green-500 mt-2">+5% YoY</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">180%</div>
                <div className="text-muted-foreground">Revenue Growth</div>
                <div className="text-sm text-green-500 mt-2">YoY</div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Market Opportunity</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
                <div className="text-3xl font-bold text-primary mb-2">$12.3B</div>
                <div className="text-muted-foreground">Global Talent Management Market</div>
                <div className="text-sm text-muted-foreground mt-2">by 2026</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
                <div className="text-3xl font-bold text-primary mb-2">$2.1B</div>
                <div className="text-muted-foreground">India TAM</div>
                <div className="text-sm text-muted-foreground mt-2">15% CAGR</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500M+</div>
                <div className="text-muted-foreground">Workforce Underserved</div>
                <div className="text-sm text-muted-foreground mt-2">by existing solutions</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2M+</div>
                <div className="text-muted-foreground">Indian Companies</div>
                <div className="text-sm text-muted-foreground mt-2">seeking digital talent solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Edge */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Competitive Edge</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-First Platform</h3>
                    <p className="text-muted-foreground">
                      Advanced ML models for precise talent-opportunity matching with superior accuracy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Platform Ecosystem</h3>
                    <p className="text-muted-foreground">
                      End-to-end value chain from individual discovery to enterprise hiring solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strong Network Effects</h3>
                    <p className="text-muted-foreground">
                      Value scales with each user, creating sustainable competitive advantages.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Execution-Focused</h3>
                    <p className="text-muted-foreground">
                      Proven ability to deliver, grow, and scale with demonstrated market traction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <h3 className="text-xl font-semibold">July 2024</h3>
                  </div>
                  <p className="text-muted-foreground">Founded with a mission to empower India's talent using AI</p>
                </div>
                <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <h3 className="text-xl font-semibold">Late 2024</h3>
                  </div>
                  <p className="text-muted-foreground">Beta platform launched; early traction across metros</p>
                </div>
                <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <h3 className="text-xl font-semibold">2025</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">• Rapid growth among individuals & SMBs</p>
                    <p className="text-muted-foreground">• Signed 100+ enterprise clients</p>
                    <p className="text-muted-foreground">• Reached 5,000+ active users</p>
                    <p className="text-muted-foreground">• Positioned for Series A</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Coverage */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Media Coverage</h2>
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-12 text-center">
              <p className="text-xl mb-8">TalentXcel Home Plus has been featured in:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                <div className="text-lg font-semibold text-primary">ET</div>
                <div className="text-lg font-semibold text-primary">Business Standard</div>
                <div className="text-lg font-semibold text-primary">Mint</div>
                <div className="text-lg font-semibold text-primary">Inc42</div>
                <div className="text-lg font-semibold text-primary">YourStory</div>
                <div className="text-lg font-semibold text-primary">TechCrunch</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner with Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Partner with Us?</h2>
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-12 text-center max-w-4xl mx-auto mb-20">
              <p className="text-xl mb-8">We're looking for visionary investors to join us on our mission to redefine India's career ecosystem.</p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Capital + Strategic Support</h3>
                  <p className="text-muted-foreground">Growth capital with strategic guidance</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Access to Hiring Networks</h3>
                  <p className="text-muted-foreground">Leverage existing talent networks</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Product & Growth Mentorship</h3>
                  <p className="text-muted-foreground">Expertise in scaling platforms</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-lg font-semibold text-primary">Investor Relations</p>
                  <p className="text-muted-foreground">investors@talentxcel.co.in</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-primary">Direct Line</p>
                  <p className="text-muted-foreground">+91 9717161809</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:investors@talentxcel.co.in">
                    Contact Investment Team
                  </a>
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Meeting
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Investors;