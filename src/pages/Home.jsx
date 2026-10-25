import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  Compass, 
  Layers, 
  Eye, 
  Clock, 
  Award,
  ChevronDown,
  Maximize2
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import ServiceCard from '../components/cards/ServiceCard';
import ProjectCard from '../components/cards/ProjectCard';
import TestimonialCard from '../components/cards/TestimonialCard';
import ProcessCard from '../components/cards/ProcessCard';
import LightboxModal from '../components/gallery/LightboxModal';

export default function Home() {
  useDocumentTitle('Turnkey Construction, 2D/3D Architecture & Interiors', 'Turnkey luxury house construction, architectural 2D/3D elevations, bespoke interior design, renovations, and Vastu-compliant spaces by Housr 360 Builders.');

  // Featured Projects Filtering
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Interiors', 'Renovation'];

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState('');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const filteredProjects = selectedCategory === 'All'
    ? projects.slice(0, 6)
    : projects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase()).slice(0, 6);

  const handleOpenLightbox = (project) => {
    const allImages = [project.coverImage, ...(project.additionalImages || [])];
    setLightboxImages(allImages);
    setLightboxIndex(0);
    setLightboxTitle(project.name);
    setLightboxOpen(true);
  };

  // Work Process Stages
  const workProcessStages = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "In-depth discovery session discussing your vision, plot dimensions, architectural preferences, and lifestyle requirements."
    },
    {
      step: "02",
      title: "Site Assessment & Soil Study",
      description: "On-site survey by our civil engineering team, verifying orientation, soil bearing capacity, and municipal bylaws."
    },
    {
      step: "03",
      title: "Architectural Planning & 3D Design",
      description: "Development of custom 2D floor plans, structural calculations, and photorealistic 3D daytime and dusk elevations."
    },
    {
      step: "04",
      title: "Itemized Estimate & BOQ Sign-off",
      description: "Transparent line-item quotation with branded material specifications and scheduled milestone drawdowns."
    },
    {
      step: "05",
      title: "Execution & Progress Updates",
      description: "Continuous on-site engineering supervision, 200+ quality audit checks, and weekly milestone reports via WhatsApp."
    },
    {
      step: "06",
      title: "Quality Audit & Handover",
      description: "Pre-handover snag checks, deep professional sanitization, as-built drawings pack, and warranty handover."
    }
  ];

  return (
    <div className="relative">
      
      {/* C. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#111111]">
        {/* Cinematic Villa Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop"
            alt="Luxury Architectural Villa by Housr 360 Builders"
            className="w-full h-full object-cover object-center transform scale-102 filter brightness-[0.78]"
          />
          {/* Multi-layered Dark Vignette Overlay for Crisp Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/40" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#111111]/60 to-[#111111]" />
        </div>

        {/* Architectural Line-Art Geometric Overlay */}
        <div className="absolute inset-0 pointer-events-none architectural-grid opacity-35 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A]/90 border border-[#D4AF37]/50 text-xs sm:text-sm text-[#F1D98A] mb-6 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-medium tracking-wide">Architectural Excellence & Turnkey Construction</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md"
          >
            Building Dreams.{' '}
            <span className="gold-gradient-text block sm:inline">
              Creating Timeless Spaces.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-[#D0D0D0] max-w-3xl mx-auto leading-relaxed mb-10 font-normal drop-shadow"
          >
            Turnkey luxury home construction, contemporary 2D/3D elevations, bespoke interior architecture, and Vastu-compliant residences. Engineered with single-point accountability.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#111111] bg-gradient-to-r from-[#D4AF37] via-[#F1D98A] to-[#D4AF37] hover:brightness-110 shadow-2xl shadow-[#D4AF37]/25 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-white bg-[#1A1A1A]/80 hover:bg-[#1A1A1A] border border-white/20 hover:border-[#D4AF37]/60 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Eye className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Our Projects</span>
            </Link>
          </motion.div>

          {/* Architectural Blueprint Decorative Watermark */}
          <div className="mt-14 pt-8 border-t border-white/10 flex items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm text-[#A0A0A0]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Transparent Itemized BOQ</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>On-Site Civil Engineering</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Milestone-Driven Handover</span>
            </div>
          </div>
        </div>
      </section>

      {/* D. TRUST SECTION (Verified factual company metrics) */}
      <section className="relative bg-[#161616] py-14 border-y border-[#D4AF37]/20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="text-center group p-4 rounded-xl hover:bg-white/5 transition-colors">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#D4AF37] block mb-1">
                  {stat.value}
                </span>
                <span className="font-serif text-sm sm:text-base font-semibold text-white block mb-1">
                  {stat.label}
                </span>
                <span className="text-[11px] sm:text-xs text-[#888888] block">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-[10px] uppercase tracking-widest text-[#666666] mt-8">
            * Verified company metrics — editable in <code className="text-[#888888]">siteConfig.js</code>
          </p>
        </div>
      </section>

      {/* E. SERVICES SECTION */}
      <section className="py-24 bg-[#111111] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
              End-to-End Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Architectural & Construction Services
            </h2>
            <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed">
              From raw topography assessment to the placement of custom joinery, our integrated service suites guarantee structural integrity and refined aesthetics.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>

          {/* Bottom All Services CTA */}
          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-colors"
            >
              <span>View In-Depth Technical Scopes</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </div>
        </div>
      </section>

      {/* F. FEATURED PROJECTS SECTION */}
      <section className="py-24 bg-[#141414] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
                Demonstration Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
                Featured Architectural Works
              </h2>
              <p className="text-sm text-[#AAAAAA] max-w-xl">
                Explore a curated selection of residential villas, commercial landmarks, and bespoke interior spaces executed to exacting standards.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#D4AF37] text-[#111111] font-bold shadow-lg shadow-[#D4AF37]/20'
                      : 'bg-[#1C1C1C] text-[#AAAAAA] hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenLightbox={handleOpenLightbox}
              />
            ))}
          </div>

          {/* Portfolio Note & Link */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-[#888888]">
            <p>
              * Portfolio images shown are representative demonstration works until genuine client projects are attached.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#F1D98A] transition-colors"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* G. WHY CHOOSE US */}
      <section className="py-24 bg-[#111111] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop"
                  alt="Precision Construction Work by Housr 360 Builders"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#161616] p-6 rounded-2xl border border-[#D4AF37]/40 shadow-2xl max-w-xs backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-serif text-lg font-bold text-white block">200+ Audits</span>
                    <span className="text-[11px] text-[#888888]">Quality checkpoints per home</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#AAAAAA] leading-relaxed">
                  From concrete slump tests to pressure leak diagnostics, zero corners are cut.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
                  Architectural Integrity
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                  Why Discerning Homeowners Choose Housr 360 Builders
                </h2>
                <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed">
                  Construction in India has traditionally suffered from communication gaps, cost escalations, and unverified contractor claims. Housr 360 Builders replaces uncertainty with structural rigor and absolute transparency.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Quality-Focused Structural Construction",
                    desc: "We exclusively utilize Grade-A Fe550D TMT steel, certified batch concrete, and precision bond-beam masonry to ensure multi-generational resilience."
                  },
                  {
                    title: "Transparent, Unambiguous Communication",
                    desc: "Line-item Bill of Quantities (BOQ) with brand grade specifications. Weekly photo/video milestone reports directly to your phone."
                  },
                  {
                    title: "Thoughtful Architectural Planning",
                    desc: "Spatial ergonomics, daylight harvesting, cross-ventilation, and scientific Vastu integration without aesthetic compromise."
                  },
                  {
                    title: "Single-Point Project Coordination",
                    desc: "Architects, structural engineers, MEP consultants, and interior stylists collaborate under one unified governance model."
                  },
                  {
                    title: "Customized Design Solutions",
                    desc: "No repeated boilerplate templates. Every floor plan and facade is tailored from scratch to your plot dimensions and lifestyle."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#A0A0A0] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#F1D98A] transition-colors"
                >
                  <span>Learn More About Our Engineering Standards</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* H. OUR WORK PROCESS */}
      <section className="py-24 bg-[#141414] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
              Structured Execution
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Our 6-Stage Construction Workflow
            </h2>
            <p className="text-sm text-[#AAAAAA] leading-relaxed">
              Every landmark residence follows a methodical project lifecycle, transforming raw plot coordinates into a pristine architectural masterpiece.
            </p>
          </div>

          {/* Workflow Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {workProcessStages.map((stage, idx) => (
              <ProcessCard
                key={idx}
                step={stage}
                index={idx}
                totalSteps={workProcessStages.length}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-[#777777] italic max-w-xl mx-auto">
              * Note: The exact work process, milestones, and payment disbursements are structured uniquely in the bilateral project contract based on site conditions.
            </p>
          </div>

        </div>
      </section>

      {/* I. 2D PLANS & 3D ELEVATION SHOWCASE */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
                Design Studio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                2D Floor Plans & Photorealistic 3D Elevation
              </h2>
              <p className="text-sm text-[#AAAAAA] leading-relaxed mb-6">
                Experience your home in cinematic clarity before a single cubic meter of concrete is poured. Our architectural draftsmen synthesize sunlight geometry, airflow corridors, and material palettes into hyper-realistic 3D models.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs text-[#CCCCCC]">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <span>Dimensioned 2D floor plans optimized for family living</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#CCCCCC]">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <span>Daylight sun-path simulation & evening warm LED facade renders</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#CCCCCC]">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <span>Complete working structural and MEP execution packages</span>
                </div>
              </div>

              <Link
                to="/services/2d-3d-design"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#111111] bg-gradient-to-r from-[#D4AF37] to-[#F1D98A] hover:brightness-110 shadow-lg transition-all"
              >
                <span>Request a Design Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Showcase Visual Collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-56">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"
                    alt="3D Elevation Exterior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xl h-44 bg-[#1A1A1A] p-4 flex flex-col justify-between">
                  <span className="text-xs uppercase text-[#F1D98A] font-semibold tracking-wider">
                    2D Floor Schematics
                  </span>
                  <p className="text-xs text-[#888888]">
                    Accurate setback calculations, cross-ventilation shafts & ergonomic room configurations.
                  </p>
                  <span className="text-[11px] text-[#D4AF37] font-mono">Precision Working Drawings</span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xl h-44 bg-[#1A1A1A] p-4 flex flex-col justify-between">
                  <span className="text-xs uppercase text-[#F1D98A] font-semibold tracking-wider">
                    Lighting & Textures
                  </span>
                  <p className="text-xs text-[#888888]">
                    Travertine, concrete, louvers, and glass textures rendered with real-world reflection maps.
                  </p>
                  <span className="text-[11px] text-[#D4AF37] font-mono">Photorealistic 4K Renders</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-56">
                  <img
                    src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600&auto=format&fit=crop"
                    alt="Interior 3D Visualization"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* J. CUSTOMER TESTIMONIALS */}
      <section className="py-24 bg-[#141414] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
              Client Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              What Homeowners Say About Housr 360 Builders
            </h2>
            <p className="text-sm text-[#AAAAAA] leading-relaxed">
              Real reflections on our architectural planning, engineering transparency, and turnkey handover execution.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-[#F1D98A] tracking-wider uppercase transition-colors"
            >
              <span>Read More Client Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* K. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 bg-[#111111] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
              Transparent Answers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#AAAAAA]">
              Key considerations regarding construction contracts, design milestones, materials, and estimates.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#161616] rounded-2xl border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-[#A0A0A0] leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* L. FINAL CTA SECTION */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-t border-[#D4AF37]/30 text-center overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs text-[#F1D98A] font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Begin Your Architectural Journey</span>
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Build Something Exceptional.
          </h2>

          <p className="text-sm sm:text-base text-[#B0B0B0] max-w-2xl mx-auto mb-10 leading-relaxed">
            Schedule a confidential discovery meeting with our principal architect and senior engineering lead. We evaluate your plot, listen to your family's aspirations, and outline a clear project roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#111111] bg-gradient-to-r from-[#D4AF37] via-[#F1D98A] to-[#D4AF37] hover:brightness-110 shadow-xl shadow-[#D4AF37]/25 transition-all"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:brightness-110 shadow-xl shadow-[#25D366]/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
        title={lightboxTitle}
      />

    </div>
  );
}
