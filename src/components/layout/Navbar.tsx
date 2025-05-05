import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const { theme, toggleTheme } = useTheme();
   
   const navLinks = [
     { name: "Home", path: "/" },
     { name: "Achievement", path: "/achievement" },
     { name: "Publication", path: "/publication" },
     { name: "Google Scholar", path: "/googlescholar" },
     { name: "Codes", path: "/codes" },
     { name: "Resume", path: "/resume" },
     { name: "Gallery", path: "/gallery" },
   ];
 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent touch events from opening the menu by swiping
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      // Don't prevent default touch behavior - just don't open the menu on swipe
    };
    document.addEventListener('touchstart', handleTouchStart);
    return () => document.removeEventListener('touchstart', handleTouchStart);
  }, []);
  return <header className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300", isScrolled ? "py-3 glass-panel" : "py-6 bg-transparent")}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-foreground text-xl font-medium flex items-center" aria-label="Go to homepage">
          <span className="text-primary mr-1 text-2xl font-bold">G</span>
          <span className="inline-block">Das</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={cn("px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300", location.pathname === link.path ? "text-primary" : "text-foreground/80 hover:text-primary")}>
              {link.name}
            </Link>)}
          
          <button onClick={toggleTheme} className="ml-2 p-2 rounded-full bg-secondary/80 hover:bg-primary/20 transition-colors" aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-secondary/80 hover:bg-primary/20 transition-colors" aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-foreground/80 hover:text-primary transition-colors z-50" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation - Fixed position with transform for slide in/out */}
      <div className={cn("md:hidden fixed inset-y-0 right-0 w-64 bg-background/95 backdrop-blur-md z-40 shadow-lg transition-transform duration-300 ease-in-out", isMenuOpen ? "translate-x-0" : "translate-x-full")} style={{
      touchAction: "none"
    }} // Prevent touch events from affecting this element
    >
        <nav className="flex flex-col items-start justify-start h-full px-6 pt-24">
          {navLinks.map((link, index) => <Link key={link.path} to={link.path} className={cn("py-3 text-lg font-medium transition-colors duration-300 w-full text-left", location.pathname === link.path ? "text-primary" : "text-foreground/80 hover:text-primary")} style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {link.name}
            </Link>)}
        </nav>
      </div>
      
      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && <div className="md:hidden fixed inset-0 bg-black/20 z-30" onClick={() => setIsMenuOpen(false)} aria-hidden="true" />}
    </header>;
}
