import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Phone, 
  Wallet, 
  Globe, 
  Shield, 
  ExternalLink,
  Download,
  Smartphone,
  Monitor
} from "lucide-react";

const Chatr = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
      setIsMobile(mobileKeywords.some(keyword => userAgent.includes(keyword)));
    };
    checkDevice();
  }, []);

  const handleInstallClick = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android')) {
      // Placeholder for Play Store link
      window.open('https://play.google.com/store/apps/details?id=com.chatr.app', '_blank');
    } else {
      window.open('https://chatr.chat', '_blank');
    }
  };

  const serviceHighlights = [
    {
      icon: MessageSquare,
      title: "Unified Chat & Calling",
      description: "Seamless messaging and voice communication in one platform"
    },
    {
      icon: Phone,
      title: "Native Calling Technology",
      description: "Works even when app is closed — never miss a call"
    },
    {
      icon: Wallet,
      title: "Integrated Wallet & Micro-Tasks",
      description: "Earn, pay, and transact within the app ecosystem"
    },
    {
      icon: Globe,
      title: "Built for India",
      description: "Optimized for low-bandwidth networks across India"
    },
    {
      icon: Shield,
      title: "Privacy-First Infrastructure",
      description: "Your data stays secure with end-to-end encryption"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>CHATR - Communication Service by TalentXcel | Chat, Call, Earn, Pay</title>
        <meta name="description" content="CHATR is a next-gen communication platform by TalentXcel. Chat, call, earn, pay, and collaborate — all in one app. Privacy-first, India-first messaging infrastructure." />
        <meta name="keywords" content="CHATR, TalentXcel, communication app, messaging India, chat app, voice calls, digital wallet, micro-tasks, privacy messaging" />
        <link rel="canonical" href="https://talentxcel.co.in/chatr" />
        
        <meta property="og:title" content="CHATR - Communication Service by TalentXcel" />
        <meta property="og:description" content="Next-gen communication technology. Chat, call, earn, pay — all in one platform built for India." />
        <meta property="og:url" content="https://talentxcel.co.in/chatr" />
        <meta property="og:type" content="product" />
        
        <meta name="twitter:title" content="CHATR - Communication Service by TalentXcel" />
        <meta name="twitter:description" content="Chat, call, earn, pay, and collaborate — all in one platform." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "CHATR",
            "applicationCategory": "CommunicationApplication",
            "operatingSystem": "Android, Web",
            "description": "Next-gen communication platform by TalentXcel for chat, calls, payments, and collaboration",
            "author": {
              "@type": "Organization",
              "name": "TalentXcel Technologies Pvt Ltd"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            }
          })}
        </script>
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">A TalentXcel Technology</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                CHATR
              </span>
              <span className="block text-foreground mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                A Communication Service by TalentXcel
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Chat, call, earn, pay, and collaborate — all in one platform.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10">
              A next-gen communication technology built by TalentXcel.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {isMobile ? (
                <>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto min-w-[220px] h-14 text-lg font-semibold shadow-large hover:shadow-xl transition-all"
                    onClick={handleInstallClick}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Install CHATR App
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto min-w-[220px] h-14 text-lg"
                    asChild
                  >
                    <a href="https://chatr.chat" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Open CHATR Web
                    </a>
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto min-w-[220px] h-14 text-lg font-semibold shadow-large hover:shadow-xl transition-all"
                    asChild
                  >
                    <a href="https://chatr.chat" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Open CHATR
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto min-w-[220px] h-14 text-lg"
                    onClick={handleInstallClick}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Install CHATR App
                  </Button>
                </>
              )}
            </div>

            {/* Device Indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
              {isMobile ? (
                <>
                  <Smartphone className="h-4 w-4" />
                  <span>Mobile detected — Get the app for the best experience</span>
                </>
              ) : (
                <>
                  <Monitor className="h-4 w-4" />
                  <span>Desktop detected — Open CHATR in your browser</span>
                </>
              )}
            </div>

            {/* Trust Line */}
            <p className="text-sm text-muted-foreground/70 border-t border-border/50 pt-6 inline-block px-8">
              CHATR is a core service operated by{" "}
              <span className="font-semibold text-foreground">TalentXcel Technologies</span>
            </p>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Built for Modern Communication
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A complete communication infrastructure designed for India's digital future
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-glass hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </div>
              ))}

              {/* CTA Card */}
              <div className="sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                <h3 className="font-semibold text-lg mb-2">Ready to Get Started?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Join thousands of users on CHATR
                </p>
                <Button asChild>
                  <a href="https://chatr.chat" target="_blank" rel="noopener noreferrer">
                    Launch CHATR
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Attribution */}
        <section className="py-8 bg-slate-50 border-t border-border/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs text-muted-foreground">
              CHATR™ is a conversational AI communication technology developed and operated within the TalentXcel ecosystem.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Chatr;
