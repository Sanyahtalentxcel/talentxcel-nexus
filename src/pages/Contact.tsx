import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageCircle, Building, Users, Briefcase } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      info: "contact@talentxcel.co.in",
      action: "mailto:contact@talentxcel.co.in"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      info: "+91 9717181609",
      action: "tel:+919717181609"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      info: "Noida, Uttar Pradesh, India",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Monday to Friday",
      info: "9:00 AM - 6:00 PM IST",
      action: "#"
    }
  ];

  const departments = [
    {
      icon: Building,
      title: "Enterprise Sales",
      email: "enterprise@talentxcel.co.in",
      description: "For corporate solutions and partnerships"
    },
    {
      icon: Users,
      title: "Customer Support",
      email: "support@talentxcel.co.in",
      description: "For platform help and technical issues"
    },
    {
      icon: Briefcase,
      title: "Career Services",
      email: "careers@talentxcel.co.in",
      description: "For individual career guidance and services"
    },
    {
      icon: MessageCircle,
      title: "Media & Press",
      email: "press@talentxcel.co.in",
      description: "For media inquiries and press releases"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Helmet>
          <title>Contact Talentxcel - Get in Touch | Enterprise Sales, Support, Career Services</title>
          <meta name="description" content="Contact Talentxcel: Enterprise sales, customer support, career services. Email: contact@talentxcel.co.in | Phone: +91 9717181609 | Office: Noida, India. Serving India, Europe, Middle East. Mon-Fri 9AM-6PM IST." />
          <meta name="keywords" content="contact Talentxcel, Talentxcel email, Talentxcel phone, Noida office, enterprise sales, customer support, career services, business inquiries, partnership opportunities, get in touch" />
          <link rel="canonical" href="https://talentxcel.co.in/contact" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Contact Talentxcel - Enterprise & Career Services" />
          <meta property="og:description" content="Get in touch: contact@talentxcel.co.in | +91 9717181609 | Noida, India" />
          <meta property="og:url" content="https://talentxcel.co.in/contact" />
          <meta property="og:type" content="website" />
          
          {/* Twitter */}
          <meta name="twitter:title" content="Contact Talentxcel" />
          <meta name="twitter:description" content="Enterprise sales, support & career services. Email or call us today." />
          
          {/* Structured Data - Contact Page */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Talentxcel",
                "url": "https://talentxcel.co.in",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-9717181609",
                    "contactType": "customer service",
                    "email": "contact@talentxcel.co.in",
                    "availableLanguage": ["English", "Hindi"],
                    "areaServed": ["IN", "EU", "ME"]
                  },
                  {
                    "@type": "ContactPoint",
                    "contactType": "sales",
                    "email": "enterprise@talentxcel.co.in"
                  },
                  {
                    "@type": "ContactPoint",
                    "contactType": "technical support",
                    "email": "support@talentxcel.co.in"
                  }
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Plot C, ESquare Building, 2, Sector-45",
                  "addressLocality": "Noida",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201301",
                  "addressCountry": "India"
                }
              }
            })}
          </script>
        </Helmet>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about our services? Want to explore partnership opportunities? 
                We'd love to hear from you and help with your talent needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 group cursor-pointer">
                  <method.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="text-primary font-medium">{method.info}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Departments */}
        <section className="py-14 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5}
                      placeholder="Tell us about your needs or questions..."
                    />
                  </div>
                  
                  <Button size="lg" variant="hero" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Department Contacts */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact by Department</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to the right team for faster assistance with your specific needs.
                </p>
                
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <dept.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{dept.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                          <a 
                            href={`mailto:${dept.email}`}
                            className="text-primary hover:text-primary-hover text-sm font-medium"
                          >
                            {dept.email}
                          </a>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Come visit us at our headquarters in Noida, in the heart of India's tech corridor.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-6">TalentXcel Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        Plot C, ESquare Building, 2<br />
                        Sector-45<br />
                        Noida, Uttar Pradesh 201301<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                        Saturday: 10:00 AM - 2:00 PM IST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Reception</p>
                      <p className="text-muted-foreground">+91 9717181609</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-6">
                  Get Directions
                </Button>
              </Card>
              
              {/* Map Placeholder */}
              <Card className="p-8 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Click to view our location on Google Maps
                  </p>
                  <Button variant="outline" className="mt-4">
                    Open in Maps
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-14 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about TalentXcel and our services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold mb-3">How can I get started with TalentXcel?</h3>
                <p className="text-muted-foreground text-sm">
                  You can start by visiting our platform at TalentXcel.in for individual services 
                  or contact our enterprise team for corporate solutions.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-3">What makes TalentXcel different?</h3>
                <p className="text-muted-foreground text-sm">
                  Our AI-powered platform provides personalized career guidance and matching, 
                  backed by comprehensive support from industry experts.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Do you offer enterprise solutions?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we provide comprehensive B2B solutions including talent management, 
                  corporate training, and API integrations for enterprises.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-3">How can I partner with TalentXcel?</h3>
                <p className="text-muted-foreground text-sm">
                  We welcome partnerships! Contact our business development team to discuss 
                  collaboration opportunities and strategic partnerships.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're an individual looking to advance your career or an organization 
              seeking talent solutions, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Explore Our Platform
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;