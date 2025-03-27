
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 - Page Not Found";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-bold text-primary mb-2">404</h1>
          <p className="text-xl text-foreground/80 mb-6">Oops! Page not found</p>
          <p className="text-foreground/60 mb-8">
            The page you are looking for might have been removed, had its name 
            changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium inline-block"
          >
            Return to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
