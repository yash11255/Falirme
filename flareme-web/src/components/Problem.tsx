import { AlertTriangle, EyeOff, TrendingDown } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <AlertTriangle className="text-red-500" size={32} />,
      title: "AI-Generated Scams",
      description: "Customers are using generative AI to add fake damage, hair, or defects to perfectly good items to claim full refunds."
    },
    {
      icon: <EyeOff className="text-red-400" size={32} />,
      title: "Invisible to Humans",
      description: "Modern AI edits are pixel-perfect. Manual checks can no longer identify manipulated return images accurately."
    },
    {
      icon: <TrendingDown className="text-red-600" size={32} />,
      title: "Draining Margins",
      description: "Fraudulent returns cost retailers $100B+ annually. Every fake refund approved is pure profit lost from your bottom line."
    }
  ];

  return (
    <section id="problem" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">The Silent Revenue Killer</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Refund abuse is evolving. Is your team equipped to handle AI-generated fraud?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div 
              key={idx}
              className="group bg-[#131521] border border-white/5 p-12 rounded-[32px] hover:border-red-500/30 transition-all hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
