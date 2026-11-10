'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, AlertTriangle, CheckCircle2, Loader2, Link2, MessageSquare, User, LifeBuoy } from 'lucide-react';

export default function ReportModal({
  isOpen,
  onClose,
  initialUrl = '',
  activeLang = 'en',
  t = {},
}) {
  const [url, setUrl] = useState(initialUrl);
  const [issueType, setIssueType] = useState('videoError');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update initialUrl if it changes when opening modal
  useEffect(() => {
    if (isOpen) {
      if (initialUrl && !url) {
        setUrl(initialUrl);
      }
      setSubmitted(false);
      setErrorMessage('');
    }
  }, [isOpen, initialUrl]);

  // Handle ESC key press and scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const issueCategories = [
    { id: 'videoError', label: t.reportCatVideo || 'Video failed to download' },
    { id: 'audioError', label: t.reportCatAudio || 'Audio / MP3 issue' },
    { id: 'watermarkError', label: t.reportCatWatermark || 'Watermark still present' },
    { id: 'otherError', label: t.reportCatOther || 'Other issue / Feedback' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description.trim()) {
      setErrorMessage(t.reportDescRequired || 'Please provide a brief description of the problem.');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    const currentCatObj = issueCategories.find((c) => c.id === issueType);
    const issueLabel = currentCatObj ? currentCatObj.label : issueType;

    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url.trim(),
          issueType,
          issueLabel,
          description: description.trim(),
          contact: contact.trim(),
          lang: activeLang,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || t.reportErrorMsg || 'Failed to send report. Please try again.');
        return;
      }

      setSubmitted(true);
      // Auto close after 3 seconds on success
      setTimeout(() => {
        onClose();
        // Reset after animation
        setTimeout(() => {
          setSubmitted(false);
          setDescription('');
          setContact('');
        }, 300);
      }, 3200);
    } catch (err) {
      setErrorMessage(t.reportErrorMsg || 'Failed to send report. Please check your connection.');
    } finally {
      setSubmitting(false);
    }
  };

  const isRtl = activeLang === 'ar';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="report-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div 
        dir={isRtl ? 'rtl' : 'ltr'}
        className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Gradient Accent */}
        <div className="h-1.5 w-full bg-linear-to-r from-rose-500 via-amber-500 to-rose-600" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 pb-4 flex items-start justify-between gap-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shrink-0">
              <LifeBuoy className="w-5 h-5" />
            </div>
            <div>
              <h3 id="report-modal-title" className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {t.reportTitle || 'Report an Issue to Admin'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {t.reportSubtitle || 'Encountered a problem or broken link? Send details directly to our admin team.'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label={t.reportClose || 'Close'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="p-6 sm:p-8 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              {t.reportSuccessTitle || 'Report Sent to Admin!'}
            </h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed mb-6">
              {t.reportSuccessMsg || 'Thank you! Your issue details have been forwarded to the admin via Telegram for immediate review.'}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              {t.reportClose || 'Close'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            {/* Error Banner */}
            {errorMessage && (
              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Video Link Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t.reportUrlLabel || 'Video or Media Link (Optional)'}
              </label>
              <div className="relative flex items-center">
                <Link2 className={`w-4 h-4 text-slate-400 absolute ${isRtl ? 'right-3' : 'left-3'}`} />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder={t.reportUrlPlaceholder || 'https://www.tiktok.com/@user/video/...'}
                  className={`w-full py-2.5 ${isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'} rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-hidden focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-500/10 transition-all`}
                  disabled={submitting}
                />
              </div>
            </div>

            {/* Category Pills */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {t.reportCategoryLabel || 'What is the issue?'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {issueCategories.map((cat) => {
                  const active = issueType === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setIssueType(cat.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                        active
                          ? 'bg-rose-50 border-rose-300 text-rose-700 shadow-2xs'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description Textarea */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t.reportDescLabel || 'Describe what happened'} <span className="text-rose-500">*</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                rows={3}
                placeholder={t.reportDescPlaceholder || 'What went wrong? (e.g. error message, link not working...)'}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-hidden focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-500/10 transition-all resize-none"
                disabled={submitting}
                required
              />
            </div>

            {/* Optional Contact Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t.reportContactLabel || 'Your Telegram or Email (Optional)'}
              </label>
              <div className="relative flex items-center">
                <User className={`w-4 h-4 text-slate-400 absolute ${isRtl ? 'right-3' : 'left-3'}`} />
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={t.reportContactPlaceholder || '@username or email@domain.com'}
                  className={`w-full py-2.5 ${isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'} rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-hidden focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-500/10 transition-all`}
                  disabled={submitting}
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                disabled={submitting}
                className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                {t.reportCancel || 'Cancel'}
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>{t.reportSubmitting || 'Sending to Admin...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-white" />
                    <span>{t.reportSubmit || 'Send Report to Admin'}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
