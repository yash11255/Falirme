import { AlertTriangle, EyeOff, TrendingDown, Cpu, ShieldAlert, BadgeAlert, Fingerprint, Receipt, Eraser, UserX, Target, Zap } from 'lucide-react';

export default function Problem() {
  const tactics = [
    {
      icon: <Fingerprint className="text-flare-violet" />,
      title: "Phantom Damage",
      label: "Visual Manipulation",
      desc: "AI overlays water damage, screen cracks, or mold onto pristine inventory photos to trigger 'damaged' refunds."
    },
    {
      icon: <Receipt className="text-flare-cyan" />,
      title: "Synthetic Receipts",
      label: "Document Fraud",
      desc: "High-fidelity generation of fake digital receipts and shipping labels that are 100% indistinguishable to the human eye."
    },
    {
      icon: <Eraser className="text-signal-red" />,
      title: "AI Aging",
      label: "Asset Degradation",
      desc: "Fraudsters use AI to 'age' new apparel—adding pills, stains, or fraying—to claim items arrived in poor condition."
    }
  ];

  return (
    <section id="problem" className="py-40 bg-obsidian border-t border-white/5 relative overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12" data-aos="fade-up">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-px bg-flare-violet" />
               <p className="mono text-flare-violet text-[10px] uppercase font-black tracking-[0.3em]">Phase 01: The Threat Landscape</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-[0.9]">
              AI HAS DEPLOYED. <br />
              <span className="text-[#666]">YOUR REVENUE IS THE TARGET.</span>
            </h2>
          </div>
          <div className="md:w-72">
            <div className="flare-card rounded-xl p-6 border-signal-red/20 bg-signal-red/[0.03] space-y-4">
              <div className="flex items-center gap-3">
                <ShieldAlert className="text-signal-red" size={20} />
                <span className="mono text-[10px] text-signal-red font-black uppercase">Critical Alert</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                Platform telemetry confirms 10% of global D2C return volume is now architected by generative models.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Market Intelligence Block */}
          <div className="col-span-12 lg:col-span-8" data-aos="fade-up">
            <div className="flare-card h-full rounded-2xl p-10 md:p-14 border-white/5 bg-white/[0.01]">
              <div className="flex items-start justify-between mb-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-flare-violet/10 border border-flare-violet/20 flex items-center justify-center rounded-xl text-flare-violet">
                    <Target size={24} />
                  </div>
                  <h3 className="text-3xl font-black text-white italic uppercase tracking-tight">The Generative Arms Race</h3>
                </div>
                <div className="text-right">
                  <p className="mono text-[8px] text-slate-600 uppercase font-black">Intel Source</p>
                  <p className="mono text-[10px] text-white font-bold tracking-widest">PINDROP_ANALYSIS_2026</p>
                </div>
              </div>
              
              <p className="text-lg text-slate-400 leading-relaxed font-medium mb-12 max-w-2xl">
                Retail fraud is no longer manual. AI has automated the creation of "evidence," making <span className="text-white">3 out of every 10</span> fraud attempts indistinguishable from valid claims.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/5 pt-10">
                {[
                  { val: "10.0%", label: "Fraud Ratio" },
                  { val: "65.0%", label: "Belief Impact" },
                  { val: "3 / 10", label: "AI Powered" },
                  { val: "$261", label: "Avg. Loss" }
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-2xl font-black font-display text-white">{item.val}</p>
                    <p className="mono text-[8px] text-slate-500 uppercase font-black">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tactic Cards Side Grid */}
          <div className="col-span-12 lg:col-span-4 grid grid-rows-3 gap-6">
            {tactics.map((tactic, idx) => (
              <div key={idx} className="flare-card rounded-2xl p-6 border-white/5 bg-white/[0.01] flex gap-5 items-start" data-aos="fade-left" data-aos-delay={idx * 100}>
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center shrink-0">
                  {tactic.icon}
                </div>
                <div className="space-y-1">
                  <p className="mono text-[8px] text-slate-600 uppercase font-black tracking-widest">{tactic.label}</p>
                  <h4 className="text-sm font-black text-white uppercase">{tactic.title}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2">{tactic.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Capital Leakage Full-Width Block */}
          <div className="col-span-12 mt-6" data-aos="fade-up">
            <div className="flare-card rounded-2xl p-10 md:px-14 md:py-16 border-white/10 bg-[#050505] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-signal-red/5 blur-[100px] -z-10 group-hover:bg-signal-red/10 transition-all duration-1000" />
              
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <TrendingDown className="text-signal-red" size={32} />
                    <h3 className="text-3xl font-black text-white uppercase italic tracking-tight">Financial Hemorrhage</h3>
                  </div>
                  <p className="text-lg text-slate-400 leading-relaxed font-medium max-w-2xl">
                    Every fraudulent refund is pure profit lost. When accounting for capital, shipping, and lost inventory, most brands lose <span className="text-white">$261 per incident</span>. FlareMe intercepts this leakage at the point of request.
                  </p>
                </div>
                
                <div className="w-full lg:w-[400px] bg-white/[0.02] border border-white/5 rounded-2xl p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="mono text-[10px] text-signal-red font-black uppercase">Sheep Shearers Alert</p>
                    <Zap size={14} className="text-signal-red animate-pulse" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                    "Coordinated clusters on TikTok automate shattered-glass refunds for low-value items where human review overhead exceeds the loss amount."
                  </p>
                  <div className="pt-4 border-t border-white/5">
                    <p className="mono text-[8px] text-slate-600 uppercase mb-2">Cluster Activity</p>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-signal-red w-[85%] animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
