import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import WaitlistForm from "@/components/WaitlistForm";
import AosInit from "@/components/AosInit";
import { Zap, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AosInit />
      <Navbar />
      <Hero />

      {/* Social Proof */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold tracking-widest uppercase mb-12 text-slate-500">
            Currently onboarding early D2C brands & <span className="text-primary italic">Founding Partners</span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-700">
            {[
              { name: "GLOW BEAUTY", type: "D2C Brand" },
              { name: "SNEAKR LAB", type: "Shopify Store" },
              { name: "LUXE GEAR", type: "D2C Brand" },
              { name: "DORM DECOR", type: "Founding Partner" }
            ].map((brand) => (
              <div key={brand.name} className="flex flex-col items-center">
                <span className="text-2xl font-black font-outfit tracking-tighter text-slate-300 mb-1">{brand.name}</span>
                <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">{brand.type}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
              Private Beta Access Only
            </span>
          </div>
        </div>
      </section>

      <Problem />

      {/* How it Works */}
      <section id="how-it-works" className="py-32 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">Three Steps to Safety</h2>
            <p className="text-xl text-slate-400">FlareMe integrates seamlessly into your existing return flow.</p>
          </div>

          <div className="space-y-12">
            {[
              { num: "01", title: "Customer Uploads Image", desc: "The moment a return request is initiated, our system intercepts the proof-of-damage photos." },
              { num: "02", title: "AI Forensics Scan", desc: "FlareMe analyzes pixel inconsistencies, AI artifacts, and hidden metadata to detect any form of manipulation." },
              { num: "03", title: "Instant Fraud Report", desc: "Your team receives an authenticity score + fraud probability report. Flag suspicious returns automatically." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-8 items-start group" data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}>
                <div className="text-2xl font-bold text-primary px-5 py-2 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-lg text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />

      {/* Waitlist Section */}
      <section id="waitlist" className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#131521] border border-white/5 rounded-[48px] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-indigo-500/5" data-aos="zoom-in">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[100px] -z-10" />
            
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-outfit mb-4">Apply for Early Access</h2>
              <p className="text-slate-400 text-lg">Join the waitlist to become a founding partner. We are onboarding a limited number of brands per month.</p>
            </div>

            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-40 text-center">
        <div className="max-w-4xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-black font-outfit mb-8">AI return fraud is growing.</h2>
          <p className="text-2xl text-slate-400 mb-12 italic">Every day you wait, you lose revenue to sophisticated digital scams. Stop bleeding profit today.</p>
          <Link 
            href="#waitlist" 
            className="inline-block bg-white text-black px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl"
          >
            Protect Your Revenue Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <Zap className="text-primary fill-primary/20" size={28} />
              <span className="text-2xl font-black font-outfit">FlareMe</span>
            </div>
            <p className="text-slate-500 max-w-xs">Next-gen AI cybersecurity for the eCommerce world.</p>
          </div>
          
          <div className="text-slate-400">
            <p className="mb-4">&copy; 2024 FlareMe AI. All rights reserved.</p>
            <div className="flex gap-8 justify-center md:justify-end">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
