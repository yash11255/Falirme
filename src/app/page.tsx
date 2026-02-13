import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import WaitlistForm from "@/components/WaitlistForm";
import AosInit from "@/components/AosInit";
import { Zap, ShieldCheck, Terminal as TerminalIcon, Globe, Lock, Cpu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-white">
      <AosInit />
      <Navbar />
      <Hero />

      {/* Trust & Network Section */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
        <div className="absolute inset-0 bg-flare-cyan/5 w-1/3 blur-3xl opacity-20 -left-20" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-slate-500 hover:text-white transition-colors duration-700">
            <div className="flex flex-col gap-1">
              <span className="mono text-[8px] text-flare-violet font-black uppercase tracking-widest">Diagnostic Nodes Active</span>
              <span className="text-sm font-bold tracking-widest uppercase text-white/40">Secure Network Partners</span>
            </div>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              {['THE DASH MEDIA', 'PRINTDASH', 'INAS', 'NIAD GROUP'].map((brand) => (
                <div key={brand} className="flex flex-col items-center gap-2 group">
                  <span className="mono text-sm tracking-[0.3em] font-black group-hover:text-flare-cyan transition-colors">{brand}</span>
                  <div className="h-0.5 w-4 bg-white/5 group-hover:bg-flare-cyan transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Problem />

      {/* Protocol Section */}
      <section id="how-it-works" className="py-40 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20" data-aos="fade-up">
            <p className="mono text-flare-violet mb-4">Phase 02: Verification Protocol</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
              Proof of <br />
              <span className="text-[#444]">Origin Logic.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Globe size={24} />, title: "Latent Ingestion", desc: "Our neural ingestion layer intercepts return evidence, performing initial latent feature extraction via edge inference." },
              { icon: <Cpu size={24} />, title: "Neural Scrutiny", desc: "Cross-referencing pixel clusters against 40M+ adversarial archetypes to detect diffusion-based generative edits." },
              { icon: <Lock size={24} />, title: "Heuristic Shield", desc: "Autonomous mitigation logic based on self-learning heuristics to quarantine high-confidence synthetic fraud." }
            ].map((step, idx) => (
              <div key={idx} className="space-y-6 group" data-aos="fade-up" data-aos-delay={idx * 150}>
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded text-flare-violet group-hover:border-flare-violet transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-tight uppercase group-hover:text-flare-violet transition-colors">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />

      {/* Terminal Section */}
      <section id="waitlist" className="py-60 border-t border-white/5 bg-obsidian">
        <div className="max-w-5xl mx-auto px-6" data-aos="zoom-in">
          <div className="flare-card rounded-2xl p-8 md:p-24 border-white/20 relative shadow-[0_0_100px_rgba(139,92,246,0.05)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-flare-violet to-transparent opacity-50" />
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-8 bg-flare-violet/10 border border-flare-violet/20 px-3 py-1 rounded">
                <TerminalIcon size={12} className="text-flare-violet" />
                <span className="mono text-[10px] text-flare-violet">Access Request Portal [v4.1]</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic uppercase">Secure Your Spot.</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Currently vetting a limited number of High-Volume D2C brands for our Q1 2024 Private Beta expansion.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-obsidian relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase font-display">FlareMe</span>
            </div>
            <p className="mono text-[8px] text-slate-600 leading-relaxed uppercase tracking-[0.2em] font-medium mb-6">Next-Generation Forensic Infrastructure for E-Commerce Protection.</p>
            <div className="space-y-2">
              <p className="mono text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="text-flare-violet">E:</span> info@flairme.in
              </p>
              <p className="mono text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="text-flare-violet">P:</span> +91 9560302235
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-12">
            <Link href="#problem" className="mono text-[10px] text-slate-400 hover:text-white transition-colors">01. Threat</Link>
            <Link href="#how-it-works" className="mono text-[10px] text-slate-400 hover:text-white transition-colors">02. Protocol</Link>
            <Link href="#features" className="mono text-[10px] text-slate-400 hover:text-white transition-colors">03. Infra</Link>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mono text-[10px] text-slate-600 mb-2 tracking-widest font-black">&copy; 2024 FLAREME AI [IND-CORE-LABS].</p>
            <p className="mono text-[8px] text-flare-violet mb-4 tracking-widest font-black uppercase">Architected in Delhi, India 🇮🇳</p>
            <div className="flex gap-8 justify-center md:justify-end">
              <Link href="#" className="mono text-[8px] text-slate-400 hover:text-white transition-colors tracking-widest uppercase">Privacy</Link>
              <Link href="#" className="mono text-[8px] text-slate-400 hover:text-white transition-colors tracking-widest uppercase">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
