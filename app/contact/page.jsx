'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Clock, Shield } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-slate-700">
      
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4">
          Contact TikFlow Team
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Have a question, feedback, bug report, or DMCA inquiry? We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Sidebar */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Direct Channels</h3>
            
            <div className="flex items-start space-x-3 text-sm">
              <Mail className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900">Email Support</p>
                <a href="mailto:support@tikflow.app" className="text-rose-600 hover:underline">
                  support@tikflow.app
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-sm">
              <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900">Response Window</p>
                <p className="text-slate-500 text-xs mt-0.5">Usually within 24 to 48 business hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-sm">
              <Shield className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900">DMCA Copyright Team</p>
                <a href="mailto:dmca@tikflow.app" className="text-indigo-600 hover:underline">
                  dmca@tikflow.app
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <h4 className="font-bold text-slate-900 mb-1">For Copyright Owners:</h4>
            <p>
              If you are a creator requesting a takedown of links to your content, please select &quot;DMCA Copyright Notice&quot; in the form and provide the direct URL along with proof of ownership for expedited review.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out. A team member will review your message and reply via email within 24-48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 text-xs font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-rose-400 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-rose-400 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Reason for Contact
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-rose-400 focus:bg-white transition-colors"
                  >
                    <option value="general">General Question or Feedback</option>
                    <option value="bug">Report a Broken Link or Bug</option>
                    <option value="dmca">DMCA Copyright Request</option>
                    <option value="partnership">Business / Advertising Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what is on your mind..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-rose-400 focus:bg-white transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold text-sm shadow-md shadow-rose-500/20 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
