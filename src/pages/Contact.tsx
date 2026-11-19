import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Building2, 
  Users, 
  GraduationCap, 
  CheckCircle2, 
  AlertCircle, 
  Send,
  ShieldCheck,
  Copy
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/components/ui/use-toast";

type FormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  serviceInterest: string;
  positionsCount: string;
  skillsNeeded: string;
  timeline: string;
  location: string;
  message: string;
  honeypot: string; // Anti-spam field (hidden)
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  serviceInterest: "",
  positionsCount: "",
  skillsNeeded: "",
  timeline: "",
  location: "",
  message: "",
  honeypot: "",
};

const Contact = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("enterprise-tech");
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mailDispatchUrl, setMailDispatchUrl] = useState<string | null>(null);
  const [inquirySummary, setInquirySummary] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: "Enterprise Sales & Inquiries",
      description: "Direct email contact",
      info: "enterprise@talentxcel.co.in",
      action: "mailto:enterprise@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in"
    },
    {
      icon: Phone,
      title: "Direct Telephone",
      description: "Speak with our team",
      info: "+91 9717181609",
      action: "tel:+919717181609"
    },
    {
      icon: MapPin,
      title: "Corporate Office",
      description: "Noida headquarters (Google Maps ↗)",
      info: "Office 1917, 19th Floor, E-Square Building, Sector 96, Noida, UP 201301",
      action: "https://share.google/9XwBijGdqZx4s5NN1"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Standard IST operation",
      info: "Monday to Friday, 9:00 AM - 6:00 PM IST",
      action: "#"
    }
  ];

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleCopyInquiry = () => {
    if (!inquirySummary) return;
    navigator.clipboard.writeText(inquirySummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Full name is required.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Business email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Please provide a valid email address.";
    }
    if (!formData.organization.trim()) {
      nextErrors.organization = "Company or institution name is required.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Please describe your project or inquiry.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam bot check
    if (formData.honeypot) {
      console.warn("Spam submission intercepted.");
      return;
    }

    if (!validate()) {
      toast({
        title: "Validation Error",
        description: "Please complete all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Prepare formal email payload routed to Founder & Managing Director with CC to contact@
    const subject = `[TalentXcel Inquiry - ${activeTab.toUpperCase()}] from ${formData.organization || formData.name}`;
    const bodyText = 
`TALENTXCEL CONTACT PORTAL INQUIRY
=====================================================
Executive Recipient: Founder & Managing Director Desk
Primary: sanobar.jahan@talentxcel.co.in
CC: contact@talentxcel.co.in
=====================================================

CONTACT & ORGANIZATION:
- Full Name: ${formData.name}
- Business Email: ${formData.email}
- Telephone: ${formData.phone || "N/A"}
- Organization: ${formData.organization}

INQUIRY PARAMETERS:
- Category / Tab: ${activeTab}
- Service Area: ${formData.serviceInterest || "General Inquiry"}
- Headcount / Positions Needed: ${formData.positionsCount || "N/A"}
- Required Tech Stack / Skills: ${formData.skillsNeeded || "N/A"}
- Target Timeline: ${formData.timeline || "N/A"}
- Delivery Location: ${formData.location || "N/A"}

PROJECT SCOPE & MESSAGE:
${formData.message}

=====================================================
Submitted via: https://talentxcel.co.in/contact
Timestamp: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
Strict DPDP Act Confidentiality Enforced.`;

    const to = "sanobar.jahan@talentxcel.co.in";
    const cc = activeTab === "staffing"
      ? "careers@talentxcel.co.in, enterprise@talentxcel.co.in"
      : activeTab === "general"
      ? "support@talentxcel.co.in, contact@talentxcel.co.in"
      : "enterprise@talentxcel.co.in, contact@talentxcel.co.in";
    const mailtoLink = `mailto:${to}?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

    setMailDispatchUrl(mailtoLink);
    setInquirySummary(bodyText);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Inquiry Dispatched",
        description: "Your inquiry details have been routed to sanobar.jahan@talentxcel.co.in (CC: contact@talentxcel.co.in).",
      });

      // Trigger automatic mailto client dispatch
      try {
        window.location.href = mailtoLink;
      } catch (err) {
        console.warn("Mail client popup suppressed:", err);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact TalentXcel | Enterprise Inquiries & Solutions</title>
        <meta
          name="description"
          content="Contact TalentXcel for enterprise software development, IT staffing, corporate training, and university partnerships. Email: contact@talentxcel.co.in | Phone: +91 9717181609"
        />
        <meta
          name="keywords"
          content="Contact TalentXcel, enterprise tech inquiry, hire developers, IT staffing inquiry, corporate training, Noida office"
        />
        <link rel="canonical" href="https://talentxcel.co.in/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://talentxcel.co.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://talentxcel.co.in/contact"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <Navbar />

      <main className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <Mail className="h-4 w-4" /> Enterprise Conversion Portal
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              Connect with <span className="bg-gradient-primary bg-clip-text text-transparent">TalentXcel</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore custom technology development, specialized workforce solutions, or institutional learning partnerships with our enterprise teams.
            </p>
          </div>

          {/* Contact Methods Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {contactMethods.map((m, index) => {
              const Icon = m.icon;
              return (
                <Card key={index} className="p-6 border-border/60 text-center hover:shadow-soft transition-all">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-1">{m.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{m.description}</p>
                  <a 
                    href={m.action} 
                    target={m.action.startsWith("http") ? "_blank" : undefined}
                    rel={m.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-xs sm:text-sm font-semibold text-primary hover:underline break-words"
                  >
                    {m.info}
                  </a>
                </Card>
              );
            })}
          </div>

          {/* Dedicated Conversion Pathways */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 sm:p-8 border-border/60 shadow-medium">
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight mb-2">Select Your Inquiry Pathway</h2>
                <p className="text-sm text-muted-foreground">
                  Choose the specialized department to ensure your request reaches the right solution architect.
                </p>
              </div>

              <Tabs defaultValue="enterprise-tech" onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full mb-6 h-auto p-1 gap-1">
                  <TabsTrigger value="enterprise-tech" className="text-xs sm:text-sm py-2.5">
                    Technology & AI
                  </TabsTrigger>
                  <TabsTrigger value="staffing" className="text-xs sm:text-sm py-2.5">
                    IT Staffing & RPO
                  </TabsTrigger>
                  <TabsTrigger value="training" className="text-xs sm:text-sm py-2.5">
                    Training & Academia
                  </TabsTrigger>
                  <TabsTrigger value="general" className="text-xs sm:text-sm py-2.5">
                    General Inquiries
                  </TabsTrigger>
                </TabsList>

                {isSubmitted ? (
                  <div className="p-6 sm:p-8 text-center space-y-4 bg-white rounded-2xl border border-emerald-300 shadow-soft">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-fit mx-auto">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Inquiry Prepared &amp; Registered</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Your inquiry has been compiled and routed directly to the Executive Leadership &amp; Operations Desk at <strong>sanobar.jahan@talentxcel.co.in</strong> (CC: contact@talentxcel.co.in). A solution specialist will follow up with you shortly.
                    </p>

                    <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-xl p-3.5 sm:p-4 text-xs text-emerald-950 text-left space-y-1.5 max-w-lg mx-auto">
                      <div className="font-semibold flex items-center gap-1.5 text-emerald-900">
                        <ShieldCheck className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                        <span>Executive Delivery Routing</span>
                      </div>
                      <p className="text-[11.5px] leading-relaxed text-emerald-900/90">
                        Primary Recipient: <span className="font-mono font-semibold">sanobar.jahan@talentxcel.co.in</span> (Founder &amp; MD)
                        <br />
                        Department CC: <span className="font-mono font-semibold">contact@talentxcel.co.in</span>
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      {mailDispatchUrl && (
                        <a
                          href={mailDispatchUrl}
                          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-soft hover:shadow-medium transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          <span>Confirm Dispatch in Email App</span>
                        </a>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopyInquiry}
                        className="w-full sm:w-auto text-xs sm:text-sm"
                      >
                        {copied ? (
                          <>
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mr-1.5" />
                            <span>Inquiry Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5 mr-1.5" />
                            <span>Copy Inquiry Text</span>
                          </>
                        )}
                      </Button>
                    </div>

                    <div className="pt-3">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData(initialFormState);
                          setMailDispatchUrl(null);
                        }}
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field for bot suppression */}
                    <div className="hidden" aria-hidden="true">
                      <input 
                        type="text" 
                        name="website_url_check" 
                        value={formData.honeypot} 
                        onChange={(e) => handleInputChange("honeypot", e.target.value)} 
                        tabIndex={-1} 
                        autoComplete="off" 
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Your Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="email">Business Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="rahul@company.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone / WhatsApp Number (Optional)</Label>
                        <Input
                          id="phone"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>

                      <div>
                        <Label htmlFor="organization">Company or Institution Name *</Label>
                        <Input
                          id="organization"
                          placeholder="e.g. Acme Technologies"
                          value={formData.organization}
                          onChange={(e) => handleInputChange("organization", e.target.value)}
                          className={errors.organization ? "border-destructive" : ""}
                        />
                        {errors.organization && <p className="text-xs text-destructive mt-1">{errors.organization}</p>}
                      </div>
                    </div>

                    {/* Dynamic Fields Based on Tab */}
                    {activeTab === "enterprise-tech" && (
                      <div className="grid sm:grid-cols-2 gap-4 p-4 bg-muted/20 rounded-xl border border-border/50">
                        <div>
                          <Label htmlFor="tech-interest">Primary Service of Interest</Label>
                          <Input
                            id="tech-interest"
                            placeholder="e.g. Custom AI Model, SaaS Platform, Cloud Migration"
                            value={formData.serviceInterest}
                            onChange={(e) => handleInputChange("serviceInterest", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="tech-timeline">Target Timeline</Label>
                          <Input
                            id="tech-timeline"
                            placeholder="e.g. Immediate (1-2 months), Next Quarter, or Custom Timeline"
                            value={formData.timeline}
                            onChange={(e) => handleInputChange("timeline", e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                    {activeTab === "staffing" && (
                      <div className="grid sm:grid-cols-3 gap-4 p-4 bg-muted/20 rounded-xl border border-border/50">
                        <div>
                          <Label htmlFor="staff-positions">Estimated Openings</Label>
                          <Input
                            id="staff-positions"
                            placeholder="e.g. 5 Software Engineers"
                            value={formData.positionsCount}
                            onChange={(e) => handleInputChange("positionsCount", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="staff-skills">Core Technical Skills</Label>
                          <Input
                            id="staff-skills"
                            placeholder="e.g. React, Python, AWS, DevOps"
                            value={formData.skillsNeeded}
                            onChange={(e) => handleInputChange("skillsNeeded", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="staff-loc">Work Location</Label>
                          <Input
                            id="staff-loc"
                            placeholder="e.g. Noida, Bangalore, Remote"
                            value={formData.location}
                            onChange={(e) => handleInputChange("location", e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                    {activeTab === "training" && (
                      <div className="grid sm:grid-cols-2 gap-4 p-4 bg-muted/20 rounded-xl border border-border/50">
                        <div>
                          <Label htmlFor="train-program">Program Interest</Label>
                          <Input
                            id="train-program"
                            placeholder="e.g. Corporate AI Upskilling / University Hackathon"
                            value={formData.serviceInterest}
                            onChange={(e) => handleInputChange("serviceInterest", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="train-count">Estimated Cohort Size</Label>
                          <Input
                            id="train-count"
                            placeholder="e.g. 25-50 Engineers / Students"
                            value={formData.positionsCount}
                            onChange={(e) => handleInputChange("positionsCount", e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="message">Project Requirements / Details *</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Please outline your objectives, project scope, technical requirements, or partnership goals..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        <span>Protected by enterprise privacy & data encryption</span>
                      </div>
                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                        {isSubmitting ? "Processing..." : (
                          <>
                            Submit Enterprise Inquiry <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </Tabs>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
