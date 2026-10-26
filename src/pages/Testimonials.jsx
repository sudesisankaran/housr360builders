import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Sparkles, CheckCircle2, MessageSquare, ArrowRight, Info } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import TestimonialCard from '../components/cards/TestimonialCard';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Testimonials() {
  useDocumentTitle('Client Testimonials | Homeowner Reviews', 'Read verified reviews from homeowners and commercial clients who partnered with Housr 360 Builders for turnkey construction in Hosur and Bengaluru.');

  const [filterType, setFilterType] = useState('All');

  const filteredList = filterType === 'All'
    ? testimonials
    : testimonials.filter(t => t.projectType.toLowerCase().includes(filterType.toLowerCase()));

  return (
    <div className="bg-[#0A0713] text-white">
      
      {/* Header */}
      <section className="relative py-24 sm:py-32 bg-[#120E22] border-b border-[#A855F7]/20 overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17122C] border border-[#A855F7]/40 text-xs text-[#DDD6FE] font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>Reputation & Trust • Hosur & Bengaluru</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Client Testimonials & Experiences
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Real feedback from homeowners and investors who entrusted us with their primary residences, corporate landmarks, and turnkey interiors in Hosur and Bengaluru.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 max-w-xl text-left">
            <Info className="w-4 h-4 text-[#A855F7] shrink-0" />
            <span>
              <strong>Editorial Notice:</strong> Sample demonstration testimonials displayed for review during initial site deployment until direct client submission integration is enabled.
            </span>
          </div>
        </div>
      </section>

      {/* Summary Score Bar */}
      <section className="py-10 bg-[#120E22] border-b border-[#A855F7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
            <div className="flex items-center gap-3">
              <span className="font-serif text-4xl font-extrabold text-[#C084FC]">5.0</span>
              <div className="text-left">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A855F7] text-[#A855F7]" />
                  ))}
                </div>
                <span className="text-xs text-zinc-400">Average Client Rating</span>
              </div>
            </div>

            <div className="h-8 w-px bg-white/10 hidden sm:block" />

            <div className="text-left">
              <span className="font-mono text-2xl font-bold text-white block">99%</span>
              <span className="text-xs text-zinc-400">Milestone Adherence Satisfaction</span>
            </div>

            <div className="h-8 w-px bg-white/10 hidden sm:block" />

            <div className="text-left">
              <span className="font-mono text-2xl font-bold text-white block">250+</span>
              <span className="text-xs text-zinc-400">Families & Spaces Handed Over</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-[#0A0713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredList.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-20 bg-gradient-to-r from-[#17122C] to-[#120E22] rounded-3xl p-8 sm:p-12 border border-[#A855F7]/30 shadow-2xl text-center max-w-3xl mx-auto shadow-purple-950/50">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Experience the Housr 360 Difference?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mb-8 max-w-lg mx-auto">
              Schedule a preliminary site review and design walkthrough with our principal engineering team in Hosur or Bengaluru.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#A855F7] hover:brightness-110 shadow-lg shadow-purple-900/40 transition-all"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:brightness-110 transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
