import Breadcrumbs from '../../components/Breadcrumbs';
import React from 'react';
import { Mail, Clock, Shield } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Support',
  description: 'Contact the QukTik support team for technical help, bug reports, and copyright inquiries. We reply to all messages within 24 hours.',
  alternates: {
    canonical: 'https://quktik.com/contact',
  },
  openGraph: {
    title: 'Contact QukTik Support',
    description: 'Get in touch with the QukTik support team for technical assistance or copyright inquiries.',
    url: 'https://quktik.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-slate-700">
      <Breadcrumbs items={[{ name: 'Contact Support', url: '/contact' }]} />
      
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4">
          Contact QukTik Team
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
                <a href="mailto:support@quktik.com" className="text-rose-600 hover:underline">
                  support@quktik.com
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
                <a href="mailto:dmca@quktik.com" className="text-indigo-600 hover:underline">
                  dmca@quktik.com
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
            <ContactForm />
          </div>
        </div>

      </div>

    </div>
  );
}
