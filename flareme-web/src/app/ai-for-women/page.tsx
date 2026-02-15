import Navbar from "@/components/Navbar";
import AosInit from "@/components/AosInit";
import { Zap, MapPin, Users, Heart, Sparkles, Mail, Target } from "lucide-react";
import Link from "next/link";

export default function AiForWomen() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AosInit />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-8">
            <Sparkles size={16} />
            <span className="text-sm font-semibold tracking-wide uppercase">Tech Driven by Women</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-outfit mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Developed with Her
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            At FlareMe, our core technology is built and driven by women. We are committed to empowering women in AI through career development and impactful work.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="#impact" 
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Our Impact
            </Link>
            <Link 
              href="mailto:communication@flairme.in" 
              className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={18} /> Send Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">Our Vision</h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              We believe that the best AI is built by diverse teams. Our mission is to create a technology ecosystem where women drive innovation in Artificial Intelligence and Generative AI.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We are not just offering jobs; we are building careers. We actively support women in technology by providing mentorship, resources, and a platform to lead.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 p-4 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-3xl font-bold text-purple-400">Inclusive</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Growth Focused</span>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-3xl font-bold text-pink-400">Empower</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Women Led</span>
              </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 blur-[100px] opacity-20 -z-10" />
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col items-center text-center gap-4">
                  <Target size={48} className="text-purple-400" />
                  <h3 className="font-bold text-xl">Purpose</h3>
                  <p className="text-sm text-slate-400">Solving real problems.</p>
               </div>
               <div className="p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col items-center text-center gap-4 mt-8">
                  <Users size={48} className="text-pink-400" />
                  <h3 className="font-bold text-xl">Collaboration</h3>
                  <p className="text-sm text-slate-400">Working together to innovate.</p>
               </div>
               <div className="p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col items-center text-center gap-4 -mt-8">
                  <Heart size={48} className="text-red-400" />
                  <h3 className="font-bold text-xl">Support</h3>
                  <p className="text-sm text-slate-400">Mentorship and guidance.</p>
               </div>
               <div className="p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col items-center text-center gap-4">
                  <Zap size={48} className="text-yellow-400" />
                  <h3 className="font-bold text-xl">Innovation</h3>
                  <p className="text-sm text-slate-400">Pushing the boundaries of AI.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Impact Section */}
      <section id="impact" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">Expanding Horizons</h2>
            <p className="text-xl text-slate-400">Creating opportunities where they matter most.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div data-aos="fade-right">
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-full text-purple-400">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Career Development in Bihar</h3>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">
                  We are dedicated to fostering talent in regions like Bihar. By establishing career development initiatives and remote work opportunities, we aim to bridge the geographical gap and bring world-class AI development to every corner of India.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-slate-300">Remote Work</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-slate-300">Local Hubs</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-slate-300">Skill Building</span>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
               <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-pink-500/20 rounded-full text-pink-500">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Nationwide Empowerment</h3>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Our commitment extends beyond borders. We are building a pan-India network of women developers, ensuring that talent from all states has the platform to shine and contribute to the global AI landscape.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-slate-300">Inclusive Hiring</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-slate-300">Community First</span>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-3xl border border-white/10" data-aos="fade-up" data-aos-delay="100">
              <div className="aspect-video relative overflow-hidden">
                 <img 
                  src="/bihar-impact-1.jpeg" 
                  alt="FlareMe educational initiative in Bihar" 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-purple-400 mb-4">
                  <MapPin size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Bihar, India</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Empowering Students</h3>
                <p className="text-slate-300 text-sm">Conducting workshops and mentorship sessions to introduce AI concepts to the next generation.</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl border border-white/10" data-aos="fade-up" data-aos-delay="200">
              <div className="aspect-video relative overflow-hidden">
                 <img 
                  src="/bihar-impact-2.jpeg" 
                  alt="Student engagement session" 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 backdrop-blur-md border border-pink-500/30 text-pink-500 mb-4">
                  <Heart size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Community Reach</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Grassroots Impact</h3>
                <p className="text-slate-300 text-sm">Building a supportive community where aspiring women developers can connect and grow.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-32 text-center bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-4xl mx-auto px-6" data-aos="zoom-in">
          <h2 className="text-5xl md:text-6xl font-black font-outfit mb-8">Join the Revolution.</h2>
          <p className="text-2xl text-slate-400 mb-12">Send your CV or Proposal directly to our team.</p>
          <Link 
            href="mailto:communication@flairme.in" 
            className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center gap-3 mx-auto w-fit"
          >
            <Mail size={24} /> communication@flairme.in
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <Zap className="text-primary fill-primary/20" size={28} />
              <span className="text-2xl font-black font-outfit">FlareMe</span>
            </div>
            <p className="text-slate-500 max-w-xs">Empowering Women in AI.</p>
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
