import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Phone, 
  Wallet, 
  Globe, 
  Shield, 
  ExternalLink,
  Download,
  ArrowRight
} from "lucide-react";

const ChatrSection = () => {
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
      window.open('https://play.google.com/store/apps/details?id=com.chatr.app', '_blank');
    } else {
      window.open('https://chatr.chat', '_blank');
    }
  };

  const highlights = [
    { icon: MessageSquare, text: "Unified chat & calling" },
    { icon: Phone, text: "Native calling technology" },
    { icon: Wallet, text: "Integrated wallet & micro-tasks" },
    { icon: Globe, text: "Built for Indian networks" },
    { icon: Shield, text: "Privacy-first infrastructure" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-primary">A TalentXcel Technology</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CHATR
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              A Communication Service by TalentXcel
            </p>
            <p className="text-base text-muted-foreground/80 mb-8 max-w-lg">
              Chat, call, earn, pay, and collaborate — all in one platform. 
              A next-gen communication technology built for India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              {isMobile ? (
                <>
                  <Button size="lg" className="font-semibold" onClick={handleInstallClick}>
                    <Download className="mr-2 h-4 w-4" />
                    Install CHATR App
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://chatr.chat" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Web
                    </a>
                  </Button>
                </>
              ) : (
                <>
                  <Button size="lg" className="font-semibold" asChild>
                    <a href="https://chatr.chat" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open CHATR
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleInstallClick}>
                    <Download className="mr-2 h-4 w-4" />
                    Get the App
                  </Button>
                </>
              )}
            </div>

            <Link 
              to="/chatr" 
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              Learn more about CHATR
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Right Content - Feature Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:shadow-glass hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="p-2 bg-primary/10 rounded-lg w-fit mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
            
            {/* Trust Badge */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-4 flex flex-col justify-center">
              <p className="text-xs text-muted-foreground">Operated by</p>
              <p className="text-sm font-semibold text-primary">TalentXcel Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatrSection;
