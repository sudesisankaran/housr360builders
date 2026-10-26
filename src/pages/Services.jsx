import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import ServiceCard from '../components/cards/ServiceCard';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Services() {
  useDocumentTitle('Architectural & Construction Services | Hosur & Bengaluru', 'Explore our six specialized construction and design disciplines: turnkey house construction, 2D/3D elevations, interior design, renovation, commercial buildings, and Vastu planning in Hosur & Bengaluru.');

  return (
    <div className="bg-[#0A0713] text-white">
      
      {/* Services Hero Header */}
      <section className="relative py-24 sm:py-32 bg-[#120E22] border-b border-[#A855F7]/20 overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17122C] border border-[#A855F7]/40 text-xs text-[#DDD6FE] font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>Turnkey Disciplines • Hosur & Bengaluru</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Our Architectural & Construction Services
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            From plot surveying and municipal blueprints to turnkey RCC civil construction and bespoke interior joinery, Housr 360 Builders handles every phase with single-point accountability.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-[#0A0713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>

        </div>
      </section>

      {/* The Turnkey Advantage */}
      <section className="py-20 bg-[#120E22] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold block mb-2">
                Unified Accountability
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                The Turnkey Construction Advantage
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                When you hire separate architects, civil contractors, carpenters, and electricians, delays and finger-pointing become inevitable. Housr 360’s turnkey model consolidates every team under a unified management structure in Hosur and Bengaluru.
              </p>

              <div className="space-y-3">
                {[
                  "No cost escalation disputes between architect and site contractor",
                  "Guaranteed material compliance with pre-agreed BOQ brands",
                  "Single warranty document covering civil structure and MEP installations",
                  "Direct access to your dedicated Project Lead on WhatsApp"
                ].map((adv, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0" />
                    <span>{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#17122C] p-8 rounded-3xl border border-[#A855F7]/30 shadow-2xl space-y-6 shadow-purple-950/50">
              <h3 className="font-serif text-xl font-bold text-white">
                Need a Custom Architectural Scope?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Whether you need a standalone 3D elevation render, a full residential villa constructed from ground break, or an extensive structural renovation, we customize our engagement to fit your project scope in Hosur or Bengaluru.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#A855F7] hover:brightness-110 shadow-lg shadow-purple-900/40 transition-all"
                >
                  <span>Request Custom Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={getWhatsAppUrl("Hello Housr 360 Builders, I would like to enquire about a custom service scope in Hosur / Bengaluru.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:brightness-110 transition-all shadow-lg shadow-[#25D366]/20"
                >
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
