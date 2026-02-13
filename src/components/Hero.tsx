import { ArrowRight, Fingerprint, Activity, Terminal as TerminalIcon, Cpu, BrainCircuit, AlertTriangle, ShieldCheck, ShoppingCart, Ban, Boxes, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className="relative pt-24 pb-32 border-b border-white/5 bg-[#010101]">
      {/* Background Industrial Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-flare-violet/5 blur-[120px] -z-10 opacity-30" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-flare-cyan/5 blur-[80px] -z-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-y-16 lg:gap-16">
          
          {/* Left Column: Intelligence & Interaction */}
          <div className="col-span-12 lg:col-span-7 space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-signal-red/5 border border-signal-red/20 rounded-full mb-8" data-aos="fade-right">
                <div className="w-1.5 h-1.5 rounded-full bg-signal-red animate-pulse" />
                <span className="mono text-[10px] text-signal-red uppercase font-black tracking-widest">Live Threat Detection: 10% Industry Ratio</span>
              </div>

              <h1 
                className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.82] tracking-tighter text-white italic uppercase mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                DON'T LET AI <br />
                <span className="text-[#666]">SCAM YOUR STORE.</span>
              </h1>

              <p 
                className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                The 2026 Shift: <span className="text-white font-bold">65% of refund abuse</span> is now AI-engineered. We deploy <span className="text-flare-violet font-bold">Adversarial Forensics</span> to identify "Phantom" damage at the pixel level—saving you <span className="text-white font-bold">$261 per incident</span>.
              </p>
            </div>

            <div 
              className="flex flex-col sm:flex-row gap-4 items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link href="#waitlist" className="flare-button w-full sm:w-auto h-14">
                Initialize System Access <ArrowRight size={16} />
              </Link>
              <Link href="#how-it-works" className="w-full sm:w-auto px-8 h-14 border border-white/10 rounded font-bold text-xs tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-2 uppercase text-slate-400">
                <TerminalIcon size={14} /> 2026 Intelligence Log
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-12" data-aos="fade-up" data-aos-delay="400">
              {[
                { label: "AI Share", val: "3 / 10", color: "text-flare-cyan", sub: "Attempts AI-Powered" },
                { label: "Avg Loss", val: "$261", color: "text-signal-red", sub: "Loss Per Refund" },
                { label: "Belief", val: "65%", color: "text-white", sub: "Ease of Fraud" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="mono text-[8px] text-slate-600 font-black uppercase">{stat.label}</p>
                  <p className={`text-2xl font-black font-display tracking-tight ${stat.color}`}>{stat.val}</p>
                  <p className="text-[9px] text-slate-700 font-bold uppercase">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Forensic Visualization */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6" data-aos="zoom-in" data-aos-delay="500">
            {/* Assembly Guard Frame */}
            <div className="relative border border-white/10 rounded-2xl bg-white/[0.02] p-2 shadow-2xl overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-flare-violet/20 blur-3xl rounded-full group-hover:bg-flare-violet/40 transition-all duration-1000" />
              
              <div className="bg-obsidian border border-white/5 rounded-xl p-5 space-y-5">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded bg-flare-violet animate-pulse" />
                    <span className="mono text-[10px] text-slate-300 font-black uppercase">Forensic Ingestion active [HQ: DEL]</span>
                  </div>
                  <span className="mono text-[8px] text-slate-600 font-bold">#DEL-CENTRAL-01</span>
                </div>

                <div className="relative aspect-[4/3] rounded-lg bg-black border border-white/5 overflow-hidden">
                  <div className="scanner-line h-px bg-flare-violet shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
                  <Image 
                    src="/flareme-hero.png" 
                    alt="Neural Forensic Analysis" 
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md px-3 py-1.5 border border-flare-violet/50 rounded flex items-center gap-2 scale-90 sm:scale-100">
                    <Fingerprint size={12} className="text-flare-violet" />
                    <span className="mono text-[8px] text-white font-black">LATENT ARTIFACT DETECTED</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="mono text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2">
                       <Ban size={12} className="text-signal-red" /> Threat: Phantom Damage
                    </span>
                    <span className="mono text-signal-red font-black">99.1% Confidence</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-signal-red w-[99.1%] animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Intelligence / Secondary Asset */}
            <div className="border border-white/10 rounded-2xl bg-white/[0.02] p-5 flex items-center gap-5 transition-all hover:border-white/20">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-flare-cyan">
                <ShoppingCart size={22} />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between">
                  <span className="mono text-[10px] text-slate-400 font-black uppercase">Sheep Shearers Alert</span>
                  <span className="text-[10px] text-signal-red font-black mono animate-pulse">CRITICAL</span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Coordinated Tiktok cluster flagged. Intercepting synthetic claims worth <span className="text-white">$3,654.00</span> in current node.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
