"use client";

import { Zap, Menu, X, Terminal as TerminalIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#problem", label: "01. Threat" },
    { href: "#how-it-works", label: "02. Protocol" },
    { href: "#features", label: "03. Infrastructure" },
    { href: "/careers", label: "04. Careers", badge: "HIRING" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-obsidian/80 backdrop-blur-xl border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center group-hover:bg-flare-violet group-hover:text-white transition-colors">
            <Zap size={18} fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter uppercase text-white leading-none">FlairMe.in</span>
            <span className="mono text-[8px] text-flare-violet font-black uppercase tracking-widest mt-1">HQ: DELHI, IN 🇮🇳</span>
          </div>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="mono text-[10px] text-slate-500 hover:text-white transition-colors flex items-center gap-2">
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
          className="lg:hidden text-white p-2 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-obsidian z-40 lg:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <div className="absolute inset-0 bg-flare-violet/5 blur-[100px] -z-10" />
          
          {navLinks.map((link, idx) => (
            <Link 
              key={idx}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="mono text-2xl text-slate-500 hover:text-white transition-colors flex items-center gap-4"
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
            href="#waitlist" 
            onClick={() => setIsOpen(false)}
            className="mono text-sm bg-white text-black px-12 py-4 rounded font-bold flex items-center gap-3 active:scale-95 transition-all"
          >
            <TerminalIcon size={16} /> ACCESS TERMINAL
          </Link>
        </div>
      </div>
    </nav>
  );
}
