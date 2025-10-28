import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center glass-strong p-12 rounded-3xl">
        <h1 className="mb-4 text-6xl font-bold text-gradient">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl transition-all shadow-lg hover:shadow-accent/50"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
