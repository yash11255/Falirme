'use client';

import { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'The Problem', href: '/#problem' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Features', href: '/#features' },
    { name: 'AI for Women', href: '/ai-for-women' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/5 py-4 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Zap className="text-primary fill-primary/20" size={32} />
          <span className="text-2xl font-black font-outfit tracking-tighter">FlareMe</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-slate-400 hover:text-white transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#waitlist"
            className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-slate-200 transition-all hover:scale-105 active:scale-95"
          >
            Get Early Access
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 rounded-md bg-white/10 border border-white/10 hover:bg-white/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/5 p-6 flex flex-col gap-6 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-400 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#waitlist"
            className="bg-white text-black px-6 py-3 rounded-full font-bold text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Early Access
          </Link>
        </div>
      )}
    </nav>
  );
}