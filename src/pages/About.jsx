import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Compass,
  HardHat,
  FileCheck,
  Building,
  Users
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function About() {
  useDocumentTitle('About Us | Architectural Luxury & Engineering Rigor', 'Learn about Housr 360 Builders: our architectural philosophy, civil engineering standards, and commitment to transparency.');

  return (
    <div className="bg-[#111111] text-white">
      
      {/* Hero Header */}
      <section className="relative py-24 sm:py-32 bg-[#141414] border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40 text-xs text-[#F1D98A] font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Architectural Pedigree & Civil Integrity</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Crafting Residences of Distinction Since {siteConfig.brand.establishedYear}.
          </h1>
          <p className="text-base sm:text-lg text-[#CCCCCC] max-w-3xl mx-auto leading-relaxed">
            Housr 360 Builders was founded to bridge the historical divide between high-concept architectural design and uncompromising on-site civil engineering execution.
          </p>
        </div>
      </section>

      {/* Verified Metrics Bar */}
      <section className="py-12 bg-[#161616] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx}>
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#D4AF37] block mb-1">
                  {stat.value}
                </span>
                <span className="font-serif text-sm font-semibold text-white block mb-0.5">
                  {stat.label}
                </span>
                <span className="text-[11px] text-[#888888]">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern villa architecture by Housr 360"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#161616] p-6 rounded-2xl border border-[#D4AF37]/40 shadow-2xl hidden sm:block max-w-xs">
                <p className="font-serif text-sm font-bold text-white mb-1">
                  Zero Compromise on Raw Materials
                </p>
                <p className="text-xs text-[#999999]">
                  Direct OEM relationships with certified steel and cement manufacturers ensure zero adulteration.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">
                The Housr 360 Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Where Architectural Imagination Meets Engineering Certainty
              </h2>
              <p className="text-sm text-[#AAAAAA] leading-relaxed">
                For decades, homeowners in India faced a persistent challenge: architects drew visionary plans that contractors struggled to build, while conventional civil builders produced sturdy boxes devoid of spatial elegance or natural ventilation.
              </p>
              <p className="text-sm text-[#AAAAAA] leading-relaxed">
                Housr 360 Builders was conceived to eliminate this friction. By bringing visionary architects, certified structural engineers, interior designers, and veteran site managers under a single cohesive studio, we deliver turnkey homes that honor the original creative intent without unexpected budget inflation.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <Compass className="w-5 h-5 text-[#D4AF37] mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Architectural Harmony</h4>
                  <p className="text-xs text-[#888888]">Micro-climatic orientation, natural airflow corridors, and Vastu alignment.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <HardHat className="w-5 h-5 text-[#D4AF37] mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Resident Engineers</h4>
                  <p className="text-xs text-[#888888]">Qualified civil engineers stationed on-site daily, enforcing 200+ quality protocols.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-[#141414] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
              Foundational Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Our 4 Pillars of Construction Excellence
            </h2>
            <p className="text-sm text-[#AAAAAA]">
              Every client engagement is anchored in unshakeable engineering standards and open communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Engineering Precision",
                desc: "We build strictly with Fe550D TMT reinforcement, batch-tested ready-mix concrete, and comprehensive multi-layer waterproofing membranes."
              },
              {
                icon: FileCheck,
                title: "Total Transparency",
                desc: "Every kilogram of steel, bag of cement, and conduit pipe is specified in an exhaustive Bill of Quantities. No surprise variation bills."
              },
              {
                icon: Clock,
                title: "Milestone Accountability",
                desc: "Structured project phases tied directly to verifiable site milestones, giving you predictable timelines and financial clarity."
              },
              {
                icon: Award,
                title: "Architectural Individuality",
                desc: "We do not believe in boilerplate copy-paste floor plans. Every home is a custom response to your family's daily habits and aesthetic tastes."
              }
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#181818] p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#111111] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Quality Assurance */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#141414] rounded-3xl p-8 sm:p-14 border border-[#D4AF37]/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-2 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Site Governance & Safety
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Stringent 200-Point Quality Inspection Checklists
                </h3>
                <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                  Before concrete is poured for any column or slab, our lead engineer signs off on rebar spacing, cover blocks, shuttering plumb lines, and conduit conduits. We conduct slump tests and lab cube compression testing to ensure target compressive strengths are achieved.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#F1D98A]">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Cube strength testing</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Hydrostatic pipe pressure checks</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Ultrasonic concrete flaw testing</span>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#111111] bg-gradient-to-r from-[#D4AF37] to-[#F1D98A] hover:brightness-110 shadow-xl transition-all"
                >
                  <span>Schedule Site Meeting</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
