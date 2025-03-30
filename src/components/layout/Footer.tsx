
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
      href: 'https://github.com/gourab21',
      icon: <Github className="h-5 w-5" />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gourab21/',
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/gourabdas21',
      icon: <Twitter className="h-5 w-5" />
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@gourabdas2128',
      icon: <YoutubeIcon className="h-5 w-5" />
    },
    {
      name: 'ORCID',
      href: 'https://orcid.org/0009-0009-6804-7255',
      icon: <div className="h-5 w-5 flex items-center justify-center text-xs font-bold">ID</div>
    },
    // {
    //   name: 'Google Scholar',
    //   href: 'https://scholar.google.com',
    //   icon: <div className="h-5 w-5 flex items-center justify-center text-xs font-bold">GS</div>
    // },
    {
      name: 'Email',
      href: 'mailto:gourabdas2128@gmail.com',
      icon: <Mail className="h-5 w-5" />
    }
  ];
  
  return (
    <footer className="w-full py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} Gourab. All rights reserved.
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
