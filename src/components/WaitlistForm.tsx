"use client";

import { useState } from 'react';
import { Send, CheckCircle, ArrowRight, Lock, ShieldCheck, Database } from 'lucide-react';

export default function WaitlistForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name'),
        brand: formData.get('brand'),
        website: formData.get('website'),
        volume: formData.get('volume'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        timestamp: new Date().toISOString(),
      };

      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flare-card p-12 rounded-lg text-center border-signal-green/20">
        <div className="w-16 h-16 bg-signal-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-signal-green" size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white italic">APPLICATION RECEIVED</h3>
        <p className="text-slate-500 font-medium font-mono text-xs uppercase tracking-widest">Your brand has been added to the vetting queue. We will contact you via secure channel.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="space-y-2">
          <label className="mono text-[8px] text-slate-500 uppercase tracking-widest pl-1">Brand Name [Identity]</label>
          <input 
            required 
            type="text" 
            name="brand"
            placeholder="E.G. APEX APPAREL"
            className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-flare-violet/50 transition-all font-mono placeholder:text-slate-800"
          />
        </div>
        <div className="space-y-2">
          <label className="mono text-[8px] text-slate-500 uppercase tracking-widest pl-1">Corporate URL [Domain]</label>
          <input 
            required 
            type="url" 
            name="website"
            placeholder="HTTPS://APEX.COM"
            className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-flare-violet/50 transition-all font-mono placeholder:text-slate-800"
          />
        </div>
        <div className="space-y-2">
          <label className="mono text-[8px] text-slate-500 uppercase tracking-widest pl-1">Primary Liaison [Full Name]</label>
          <input 
            required 
            type="text" 
            name="name"
            placeholder="JOHN DOE"
            className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-flare-violet/50 transition-all font-mono placeholder:text-slate-800"
          />
        </div>
        <div className="space-y-2">
          <label className="mono text-[8px] text-slate-500 uppercase tracking-widest pl-1">Work Email [Encrypted]</label>
          <input 
            required 
            type="email" 
            name="email"
            placeholder="JD@APEX.COM"
            className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-flare-violet/50 transition-all font-mono placeholder:text-slate-800"
          />
        </div>
        <div className="space-y-2">
          <label className="mono text-[8px] text-slate-500 uppercase tracking-widest pl-1">Monthly Traffic [Volume]</label>
          <select 
            required
            name="volume"
            defaultValue=""
            className="w-full bg-obsidian border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-flare-violet/50 transition-all font-mono text-slate-400"
          >
            <option value="" disabled>SELECT DATA RANGE</option>
            <option value="0-2000">ENTRY [&lt; 2,000 ORDERS]</option>
            <option value="2000-10000">MID [2,000 - 10,000]</option>
            <option value="10000+">ENTERPRISE [10,000+]</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="mono text-[8px] text-slate-500 uppercase tracking-widest pl-1">Phone [Direct Line]</label>
          <input 
            required 
            type="tel" 
            name="phone"
            placeholder="+1 000 000 0000"
            className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-flare-violet/50 transition-all font-mono placeholder:text-slate-800"
          />
        </div>
      </div>

      <button 
        disabled={status === 'loading'}
        type="submit" 
        className="flare-button w-full h-16 justify-center text-lg active:scale-95 disabled:opacity-50"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-3">
            <Database size={18} className="animate-spin" /> VALIDATING CREDENTIALS...
          </span>
        ) : (
          <span className="flex items-center gap-3">
            SUBMIT ACCESS REQUEST <ArrowRight size={20} />
          </span>
        )}
      </button>

      <div className="flex items-center justify-center gap-6 mt-8 opacity-30 grayscale">
        <div className="flex items-center gap-2"><ShieldCheck size={12} /><span className="mono text-[8px]">AES-256</span></div>
        <div className="flex items-center gap-2"><Lock size={12} /><span className="mono text-[8px]">ISO 27001</span></div>
        <div className="flex items-center gap-2"><Database size={12} /><span className="mono text-[8px]">SOC2 Type II</span></div>
      </div>
    </form>
  );
}
