import { Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-obsidian/80 backdrop-blur-xl border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center group-hover:bg-flare-violet group-hover:text-white transition-colors">
            <Zap size={18} fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter uppercase text-white leading-none">FlareMe</span>
            <span className="mono text-[8px] text-flare-violet font-black uppercase tracking-widest mt-1">HQ: DELHI, IN 🇮🇳</span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex gap-8">
            <Link href="#problem" className="mono text-[10px] text-slate-500 hover:text-white transition-colors">01. Threat</Link>
            <Link href="#how-it-works" className="mono text-[10px] text-slate-500 hover:text-white transition-colors">02. Protocol</Link>
            <Link href="#features" className="mono text-[10px] text-slate-500 hover:text-white transition-colors">03. Infrastructure</Link>
            <Link href="/careers" className="mono text-[10px] text-slate-500 hover:text-white transition-colors flex items-center gap-2">
              04. Careers
              <span className="bg-signal-green/20 text-signal-green px-1.5 py-0.5 rounded-[2px] text-[8px] font-black animate-pulse">HIRING</span>
            </Link>
          </div>
          
          <div className="h-4 w-[1px] bg-white/10" />

          <Link 
            href="#waitlist" 
            className="mono text-[10px] bg-white text-black px-6 py-2 rounded font-bold hover:bg-slate-200 transition-all"
          >
            Access Terminal
          </Link>
        </div>
      </div>
    </nav>
  );
}
