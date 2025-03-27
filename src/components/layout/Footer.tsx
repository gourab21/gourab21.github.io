
import React from 'react';
import { Github, Linkedin, Twitter, Mail, YoutubeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: <Github className="h-5 w-5" />
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com',
      icon: <Twitter className="h-5 w-5" />
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: <YoutubeIcon className="h-5 w-5" />
    },
    {
      name: 'ORCID',
      href: 'https://orcid.org',
      icon: <div className="h-5 w-5 flex items-center justify-center text-xs font-bold">ID</div>
    },
    {
      name: 'Google Scholar',
      href: 'https://scholar.google.com',
      icon: <div className="h-5 w-5 flex items-center justify-center text-xs font-bold">GS</div>
    },
    {
      name: 'Email',
      href: 'mailto:hello@example.com',
      icon: <Mail className="h-5 w-5" />
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
            {socialLinks.map((link) => (
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
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
