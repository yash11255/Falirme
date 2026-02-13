"use client";

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

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
      console.error('Waitlist submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-bold font-outfit mb-2">You&apos;re on the list!</h3>
        <p className="text-slate-400">
          Thank you for applying for early access. Our team will review your application and reach out if it&apos;s a good fit for our private beta.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-400">Full Name</label>
          <input 
            required 
            type="text" 
            name="name"
            placeholder="John Doe"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-400">Brand Name</label>
          <input 
            required 
            type="text" 
            name="brand"
            placeholder="Elite Clothing"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-400">Website URL</label>
          <input 
            required 
            type="url" 
            name="website"
            placeholder="https://elite.com"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-400">Monthly Order Volume</label>
          <select 
            required
            name="volume"
            className="bg-[#131521] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none"
          >
            <option value="" disabled selected>Select volume</option>
            <option value="0-500">0 - 500</option>
            <option value="500-2000">500 - 2,000</option>
            <option value="2000-10000">2,000 - 10,000</option>
            <option value="10000+">10,000+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-400">Work Email</label>
          <input 
            required 
            type="email" 
            name="email"
            placeholder="john@elite.com"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-400">Phone Number</label>
          <input 
            required 
            type="tel" 
            name="phone"
            placeholder="+1 (555) 000-0000"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <button 
        disabled={status === 'loading'}
        type="submit" 
        className="w-full bg-gradient-to-r from-primary to-secondary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20"
      >
        {status === 'loading' ? 'Processing...' : (
          <>Secure My Spot <Send size={18} /></>
        )}
      </button>
      
      <p className="text-center text-xs text-slate-500">🔒 Your data is secure. Private founding member application.</p>
    </form>
  );
}
