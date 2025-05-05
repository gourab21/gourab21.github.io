
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, YoutubeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  isExternal?: boolean;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: <Github className="h-7 w-7" />,
      isExternal: true
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <Linkedin className="h-7 w-7" />,
      isExternal: true
    },
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com',
      icon: <Twitter className="h-7 w-7" />,
      isExternal: true
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: <YoutubeIcon className="h-7 w-7" />,
      isExternal: true
    },
    {
      name: 'Google Scholar',
      href: '/googlescholar',
      icon: <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5 12 0Z" /></svg>,
      isExternal: false
    },
    {
      name: 'ORCID',
      href: 'https://orcid.org',
      icon: <div className="h-7 w-7 flex items-center justify-center text-sm font-bold">ID</div>,
      isExternal: true
    },
    {
      name: 'Email',
      href: 'mailto:hello@example.com',
      icon: <Mail className="h-7 w-7" />,
      isExternal: true
    }
  ];
  
  return (
    <footer className="w-full py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => 
              link.isExternal ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${link.name}`}
                  className="text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  aria-label={`Go to ${link.name}`}
                  className="text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  {link.icon}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}