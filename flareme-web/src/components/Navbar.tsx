import { Zap } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="text-primary fill-primary/20" size={32} />
          <span className="text-2xl font-black font-outfit tracking-tighter">FlareMe</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#problem" className="text-slate-400 hover:text-white transition-colors font-medium">The Problem</Link>
          <Link href="#how-it-works" className="text-slate-400 hover:text-white transition-colors font-medium">How it Works</Link>
          <Link href="#features" className="text-slate-400 hover:text-white transition-colors font-medium">Features</Link>
          <Link 
            href="#waitlist" 
            className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-slate-200 transition-all hover:scale-105 active:scale-95"
          >
            Get Early Access
          </Link>
        </div>
      </div>
    </nav>
  );
}
