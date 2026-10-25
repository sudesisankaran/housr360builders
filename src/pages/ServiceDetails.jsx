import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  Layers, 
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';
import { services, getServiceBySlug } from '../data/services';
import { projects } from '../data/projects';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import EnquiryForm from '../components/forms/EnquiryForm';
import ProjectCard from '../components/cards/ProjectCard';
import ProcessCard from '../components/cards/ProcessCard';
import LightboxModal from '../components/gallery/LightboxModal';
import NotFound from './NotFound';

export default function ServiceDetails({ explicitSlug }) {
  const { slug } = useParams();
  const currentSlug = explicitSlug || slug;
  const service = getServiceBySlug(currentSlug);

  useDocumentTitle(
    service ? `${service.title} | Services` : 'Service Details',
    service ? service.shortDescription : 'Housr 360 Builders Services'
  );

  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState('');

  if (!service) {
    return <NotFound />;
  }

  // Find related projects
  const relatedProjectsList = projects.filter(p => 
    service.relatedProjects && service.relatedProjects.includes(p.slug)
  );

  const handleOpenLightbox = (project) => {
    const allImages = [project.coverImage, ...(project.additionalImages || [])];
    setLightboxImages(allImages);
    setLightboxIndex(0);
    setLightboxTitle(project.name);
    setLightboxOpen(true);
  };

  const whatsappUrl = getServiceWhatsAppUrl(service.title);

  return (
    <div className="bg-[#111111] text-white">
      
      {/* 1. Service Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#141414]">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover object-center filter brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/75 to-[#111111]/45" />
          <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A]/90 border border-[#D4AF37]/50 text-xs sm:text-sm text-[#F1D98A] mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{service.badge}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#D0D0D0] max-w-3xl mx-auto leading-relaxed mb-8">
            {service.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#enquiry-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#111111] bg-gradient-to-r from-[#D4AF37] via-[#F1D98A] to-[#D4AF37] hover:brightness-110 shadow-xl transition-all"
            >
              <span>Request Service Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:brightness-110 shadow-xl transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Introduction & Benefits */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">
                Discipline Overview
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                Architectural Integrity Meets Construction Discipline
              </h2>
              <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Benefits Cards */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#161616] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                    <h4 className="font-serif text-sm font-bold text-[#F1D98A] mb-1.5">
                      {b.title}
                    </h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sticky Card */}
            <div className="lg:col-span-5 bg-[#161616] rounded-3xl p-7 border border-[#D4AF37]/30 shadow-2xl">
              <div className="rounded-2xl overflow-hidden mb-6 h-52">
                <img
                  src={service.cardImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-serif text-lg font-bold text-white mb-3">
                Key Technical Highlights
              </h3>
              <div className="space-y-3 mb-6">
                {service.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CCCCCC]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <a
                href="#enquiry-section"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#111111] bg-gradient-to-r from-[#D4AF37] to-[#F1D98A] hover:brightness-110 transition-all"
              >
                <span>Enquire About {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Scope of Work */}
      <section className="py-20 bg-[#141414] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
              Deliverables & Specifications
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-3">
              Comprehensive Scope of Work
            </h2>
            <p className="text-xs sm:text-sm text-[#AAAAAA]">
              Every project phase has clear technical specifications, eliminating guesswork and ambiguity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.scopeOfWork.map((scope, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#181818] border border-white/10 hover:border-[#D4AF37]/40 transition-colors flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#111111] border border-[#D4AF37]/50 flex items-center justify-center text-[10px] font-mono text-[#D4AF37] shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs text-[#CCCCCC] leading-relaxed">
                  {scope}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Step-by-Step Workflow */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
              Methodical Execution
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Step-by-Step Delivery Process
            </h2>
            <p className="text-sm text-[#AAAAAA]">
              How we execute this service from initial site briefing to final sign-off.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {service.stepByStepProcess.map((step, idx) => (
              <ProcessCard
                key={idx}
                step={step}
                index={idx}
                totalSteps={service.stepByStepProcess.length}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. Related Projects Gallery */}
      {relatedProjectsList.length > 0 && (
        <section className="py-20 bg-[#141414] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
                  Portfolio Evidence
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Related Works in {service.title}
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-xs font-semibold text-[#D4AF37] hover:text-[#F1D98A] flex items-center gap-1"
              >
                <span>All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjectsList.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenLightbox={handleOpenLightbox}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Service FAQs */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
              Technical Clarity
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mb-3">
              Common Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#161616] rounded-2xl border border-white/10 overflow-hidden"
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

      {/* 7. Enquiry Section */}
      <section id="enquiry-section" className="py-24 bg-[#141414] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            defaultService={service.title}
            formTitle={`Consult with Our Lead for ${service.title}`}
          />
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
