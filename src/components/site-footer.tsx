import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer mt-16 border-t border-border">
      <div className="site-footer-inner mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <Link to="/" className="brand-lockup" aria-label="Gourab Das home">
          <span className="brand-name">GDAS</span>
        </Link>
        <nav className="site-footer-nav" aria-label="Footer navigation">
          <Link to="/publications">Publications</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/cv">CV</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">
            Contact <ArrowUpRight className="size-3" />
          </Link>
          <Link to="/news">News</Link>
        </nav>
        <p className="site-footer-copy">© {new Date().getFullYear()} Gourab Das</p>
      </div>
    </footer>
  );
}
