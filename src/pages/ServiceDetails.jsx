import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  ChevronDown, 
  Layers, 
  Compass, 
  Building2 
} from 'lucide-react';
import { getServiceBySlug } from '../data/services';
import { projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { getWhatsAppUrl } from '../utils/whatsapp';
import EnquiryForm from '../components/forms/EnquiryForm';
import ProcessCard from '../components/cards/ProcessCard';
import ProjectCard from '../components/cards/ProjectCard';
import LightboxModal from '../components/gallery/LightboxModal';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  // Lightbox State for related projects
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState('');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useDocumentTitle(
    service ? `${service.title} | Housr 360 Builders` : 'Service Not Found',
    service ? service.shortDescription : 'Service details'
  );

  if (!service) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#0A0713] text-white px-4">
        <div className="text-center max-w-md">
          <Building2 className="w-16 h-16 text-[#A855F7] mx-auto mb-4" />
          <h2 className="font-serif text-2xl font-bold mb-2">Service Not Found</h2>
          <p className="text-sm text-zinc-400 mb-6">
            The architectural service you are looking for is not listed in our directory.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7C3AED] to-[#A855F7] shadow-lg shadow-purple-900/40"
          >
            <span>View All Services</span>
          </Link>
        </div>
      </div>
    );
  }

  // Filter projects loosely related to this service
  const relatedProjectsList = projects.slice(0, 3);

  const handleOpenLightbox = (project) => {
    const allImages = [project.coverImage, ...(project.additionalImages || [])];
    setLightboxImages(allImages);
    setLightboxIndex(0);
    setLightboxTitle(project.name);
    setLightboxOpen(true);
  };

  const whatsappMessage = `Hello Housr 360 Builders, I would like to consult about your "${service.title}" services for my project in Hosur / Bengaluru.`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <div className="bg-[#0A0713] text-white">
      
      {/* 1. Service Hero Header */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.cardImage}
            alt={service.title}
            className="w-full h-full object-cover filter brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0713] via-[#0A0713]/75 to-[#0A0713]/45" />
          <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17122C]/90 border border-[#A855F7]/50 text-xs sm:text-sm text-[#DDD6FE] mb-6 backdrop-blur-md shadow-lg shadow-purple-950/50">
            <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>{service.badge}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {service.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#enquiry-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#A855F7] hover:brightness-110 shadow-xl shadow-purple-900/40 transition-all"
            >
              <span>Request Service Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:brightness-110 shadow-xl shadow-[#25D366]/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Introduction & Benefits */}
      <section className="py-24 bg-[#0A0713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold block">
                Discipline Overview
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                Architectural Integrity Meets Construction Discipline
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Benefits Cards */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#120E22] border border-[#2D2252] hover:border-[#A855F7]/40 transition-colors">
                    <h4 className="font-serif text-sm font-bold text-[#DDD6FE] mb-1.5">
                      {b.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sticky Card */}
            <div className="lg:col-span-5 bg-[#120E22] rounded-3xl p-7 border border-[#A855F7]/30 shadow-2xl shadow-purple-950/50">
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
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <a
                href="#enquiry-section"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:brightness-110 shadow-lg shadow-purple-900/40 transition-all"
              >
                <span>Enquire About {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Scope of Work */}
      <section className="py-20 bg-[#120E22] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold block mb-2">
              Deliverables & Specifications
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-3">
              Comprehensive Scope of Work
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Every project phase has clear technical specifications, eliminating guesswork and ambiguity for projects in Hosur & Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.scopeOfWork.map((scope, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#17122C] border border-white/10 hover:border-[#A855F7]/40 transition-colors flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#0A0713] border border-[#A855F7]/50 flex items-center justify-center text-[10px] font-mono text-[#C084FC] shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {scope}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Step-by-Step Workflow */}
      <section className="py-24 bg-[#0A0713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold block mb-2">
              Methodical Execution
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Step-by-Step Delivery Process
            </h2>
            <p className="text-sm text-zinc-400">
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
        <section className="py-20 bg-[#120E22] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold block mb-2">
                  Portfolio Evidence
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Related Works in {service.title}
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-xs font-semibold text-[#C084FC] hover:text-white flex items-center gap-1"
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
      <section className="py-24 bg-[#0A0713]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold block mb-2">
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
                  className="bg-[#120E22] rounded-2xl border border-white/10 hover:border-[#A855F7]/30 overflow-hidden"
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
                      className={`w-5 h-5 text-[#A855F7] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-4">
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
      <section id="enquiry-section" className="py-24 bg-[#120E22] border-t border-white/5">
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
