import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Helmet>
        <title>404 | Talentxcel</title>
        <meta name="description" content="Page not found - Talentxcel" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Oops! Page not found</p>
        <Link to="/" className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-primary hover:bg-primary/10 border border-border">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
