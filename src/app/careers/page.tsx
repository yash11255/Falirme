import Navbar from "@/components/Navbar";
import { Zap, ArrowRight, BrainCircuit, Code, Search, Users, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  const roles = [
    {
      title: "ML FORENSIC ENGINEER",
      team: "NEURAL ENGINE",
      location: "DELHI / HYBRID",
      desc: "Architecting Vision Transformers to detect sub-pixel synthetic artifacts in product imagery."
    },
    {
      title: "FULL STACK ARCHITECT",
      team: "INFRASTRUCTURE",
      location: "DELHI NCR / REMOTE",
      desc: "Building high-performance latency-critical APIs that handle 10,000+ verification requests per second."
    },
    {
      title: "CYBER-SEC RESEARCHER",
      team: "ADVERSARIAL LABS",
      location: "MUMBAI / REMOTE",
      desc: "Reverse-engineering emerging Gen-AI fraud tactics from TikTok and global dark-web clusters."
    }
  ];

  return (
    <main className="min-h-screen bg-obsidian text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-flare-violet/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-signal-green/5 border border-signal-green/20 rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse" />
            <span className="mono text-[10px] text-signal-green uppercase font-black tracking-widest">Expansion Protocol Active</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase mb-8">
            WE ARE HIRING: <br />
            <span className="text-[#666]">EXPANDING TEAM.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Join the front lines of e-commerce defense. We are building the world's most sophisticated forensic layer for the Generative-AI era.
          </p>

          <a 
            href="https://forms.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flare-button h-16 px-12 group"
          >
            JOIN THE SQUAD NOW <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-20">
            <div className="space-y-2">
              <p className="mono text-flare-violet text-[10px] uppercase font-black tracking-[0.3em]">Protocol 04: Human Capital</p>
              <h2 className="text-4xl font-black uppercase italic tracking-tight">Active Deployments</h2>
            </div>
            <div className="hidden md:block">
              <span className="mono text-[10px] text-slate-500 uppercase tracking-widest">3 Open Positions</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {roles.map((role, idx) => (
              <div key={idx} className="flare-card p-8 rounded-2xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group cursor-pointer border hover:border-flare-violet/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-4">
                      <span className="mono text-[8px] px-2 py-1 bg-flare-violet/10 text-flare-violet rounded font-black border border-flare-violet/20">{role.team}</span>
                      <span className="mono text-[8px] text-slate-600 uppercase font-bold tracking-widest">{role.location}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-flare-violet transition-colors">{role.title}</h3>
                    <p className="text-slate-400 font-medium max-w-2xl">{role.desc}</p>
                  </div>
                  <a 
                    href="https://forms.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full md:w-auto h-12 px-6 border border-white/10 rounded flex items-center justify-center gap-3 mono text-[10px] font-black uppercase hover:bg-white hover:text-black transition-all"
                  >
                    Apply Now <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Simplified for Careers) */}
      <footer className="py-20 border-t border-white/5 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">FlareMe</span>
            </div>
            <div className="hidden lg:flex gap-6">
              <p className="mono text-[10px] text-slate-500 font-bold uppercase tracking-widest">info@flairme.in</p>
              <p className="mono text-[10px] text-slate-500 font-bold uppercase tracking-widest">+91 9560302235</p>
            </div>
          </div>
          <p className="mono text-[10px] text-slate-600 font-black tracking-widest uppercase">&copy; 2024 FLAREME AI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="/" className="mono text-[10px] text-slate-500 hover:text-white uppercase transition-colors">Main Console</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
