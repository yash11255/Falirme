"use client";

import { Zap, Menu, X, Terminal as TerminalIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { sectionId: "problem", label: "01. Threat" },
    { sectionId: "how-it-works", label: "02. Protocol" },
    { sectionId: "features", label: "03. Infrastructure" },
    { href: "/ai-for-women", label: "04. AI for Women", badge: "NEW" },
    { href: "/careers", label: "05. Careers", badge: "HIRING" },
  ];

  const resolveHref = (link: { sectionId?: string; href?: string }) => {
    if (link.href) return link.href;
    if (!link.sectionId) return "/";
    return pathname === "/" ? `#${link.sectionId}` : `/#${link.sectionId}`;
  };

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 w-full z-50 bg-obsidian/80 backdrop-blur-xl border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center gap-3">
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center group-hover:bg-flare-violet group-hover:text-white transition-colors">
            <Zap size={18} fill="currentColor" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xl font-black tracking-tighter uppercase text-white leading-none">FlairMe.in</span>
            <span className="mono hidden sm:block text-[8px] text-flare-violet font-black uppercase tracking-widest mt-1">HQ: DELHI, IN 🇮🇳</span>
          </div>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={resolveHref(link)} className="mono text-[10px] text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                {link.label}
                {link.badge && (
                  <span className="bg-signal-green/20 text-signal-green px-1.5 py-0.5 rounded-[2px] text-[8px] font-black animate-pulse">{link.badge}</span>
                )}
              </Link>
            ))}
          </div>
          
          <div className="h-4 w-[1px] bg-white/10" />

          <Link 
            href="#waitlist" 
            className="mono text-[10px] bg-white text-black px-6 py-2 rounded font-bold hover:bg-slate-200 transition-all"
          >
            Access Terminal
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="lg:hidden shrink-0 text-white p-2.5 relative z-50 rounded-md border border-white/20 bg-zinc-900/90 backdrop-blur-md hover:bg-zinc-800 transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-obsidian z-40 lg:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={closeMenu}
            className="absolute inset-0 cursor-default"
          />
          <div className="absolute inset-0 bg-flare-violet/5 blur-[100px] -z-10" />
          
          {navLinks.map((link, idx) => (
            <Link 
              key={idx}
              href={resolveHref(link)}
              onClick={closeMenu}
              className="mono text-2xl text-slate-500 hover:text-white transition-colors flex items-center gap-4 relative z-10"
            >
              <span className="text-flare-violet opacity-50">{link.label.split('.')[0]}.</span>
              {link.label.split('.')[1]}
              {link.badge && (
                <span className="bg-signal-green/20 text-signal-green px-3 py-1 rounded text-xs font-black">{link.badge}</span>
              )}
            </Link>
          ))}
          
          <div className="h-px w-24 bg-white/10 my-4" />
          
          <Link 
            href={pathname === "/" ? "#waitlist" : "/#waitlist"} 
            onClick={closeMenu}
            className="mono text-sm bg-white text-black px-12 py-4 rounded font-bold flex items-center gap-3 active:scale-95 transition-all relative z-10"
          >
            <TerminalIcon size={16} /> ACCESS TERMINAL
          </Link>
        </div>
      </div>
    </nav>
  );
}
