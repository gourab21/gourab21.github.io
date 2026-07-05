import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Gourab Das.</p>
        <div className="flex gap-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Link to="/publications" className="hover:text-accent">
            Publications
          </Link>
          <Link to="/cv" className="hover:text-accent">
            CV
          </Link>
          <Link to="/contact" className="hover:text-accent">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
