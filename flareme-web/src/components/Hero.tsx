import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className="pt-24 pb-16 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center gap-4 mb-8" data-aos="fade-down">
          <span className="bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
            🚀 Launching Soon
          </span>
          <span className="bg-secondary/10 border border-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold">
            🔒 Limited Beta Access
          </span>
        </div>

        <h1 
          className="text-5xl md:text-8xl font-black font-outfit leading-[1.05] tracking-tight mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          AI Is Scamming Your Store. <br />
          <span className="text-gradient">FlareMe Stops It.</span>
        </h1>

        <p 
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Detect AI-manipulated return images before they cost you money. Protect your revenue from the next generation of refund fraud.
        </p>

        <div 
          className="flex flex-col sm:flex-row justify-center gap-6 mb-20"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link 
            href="#waitlist" 
            className="group bg-gradient-to-r from-primary to-secondary px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl shadow-primary/20"
          >
            Join the Waitlist <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="#how-it-works" 
            className="bg-white/5 border border-white/10 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            Explore Technology
          </Link>
        </div>

        <div 
          className="relative max-w-5xl mx-auto"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10">
            <Image 
              src="/flareme-hero.png" 
              alt="FlareMe AI Fraud Detection"
              width={1920}
              height={1080}
              className="w-full h-auto animate-glow"
              priority
            />
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl -z-10" />
        </div>
      </div>
    </header>
  );
}
