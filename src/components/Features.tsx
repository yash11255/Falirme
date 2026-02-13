import { Search, Layers, FileText, ShieldCheck, Webhook, Bell, Binary, Database, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Binary />,
      title: "Vision Transformers",
      protocol: "TRNSFRM-CORE",
      description: "Utilizing attention mechanisms to identify non-local pixel dependencies indicative of synthetic image generation."
    },
    {
      icon: <Layers />,
      title: "Latent Space Analysis",
      protocol: "LATENT-PX",
      description: "Deconstructing images into latent vectors to detect high-dimensional anomalies that bypass traditional forensic filters."
    },
    {
      icon: <FileText />,
      title: "Archetype Matching",
      protocol: "GAN-VLD",
      description: "Comparing suspicious regions against a database of 40M+ Generative Adversarial Network (GAN) fingerprints."
    },
    {
      icon: <ShieldCheck />,
      title: "Autonomous Inference",
      protocol: "INF-SCORE",
      description: "Real-time model inference providing a definitive probabilistic risk score with sub-millisecond latency."
    },
    {
      icon: <Webhook />,
      title: "Neural SDK Integration",
      protocol: "WASM-NODE",
      description: "WASM-optimized neural processing layers for edge-side verification across all major D2C platforms."
    },
    {
      icon: <Bell />,
      title: "Self-Learning Heuristics",
      protocol: "SLH-MITIGATE",
      description: "Adaptive mitigation protocols that evolve with emerging AI fraud techniques through continuous training."
    }
  ];

  return (
    <section id="features" className="py-40 border-t border-white/5 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20" data-aos="fade-up">
          <p className="mono text-flare-cyan mb-4">Phase 03: Forensic Infrastructure</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            ENGINEERED <br />
            <span className="text-[#444]">FOR CERTAINTY.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="flare-card p-10 rounded-xl group hover:bg-white/[0.02] transition-colors"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-flare-violet group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <span className="mono text-[8px] text-slate-600 bg-white/5 px-2 py-0.5 rounded uppercase">{feature.protocol}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
