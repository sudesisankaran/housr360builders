import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Layers, 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Maximize2, 
  MessageSquare, 
  Building2 
} from 'lucide-react';
import { getProjectBySlug, projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { getWhatsAppUrl } from '../utils/whatsapp';
import LightboxModal from '../components/gallery/LightboxModal';
import ProjectCard from '../components/cards/ProjectCard';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useDocumentTitle(
    project ? `${project.name} | Architectural Case Study` : 'Project Not Found',
    project ? project.description : 'Project details'
  );

  if (!project) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#0A0713] text-white px-4">
        <div className="text-center max-w-md">
          <Building2 className="w-16 h-16 text-[#A855F7] mx-auto mb-4" />
          <h2 className="font-serif text-2xl font-bold mb-2">Project Not Found</h2>
          <p className="text-sm text-zinc-400 mb-6">
            The architectural project you requested does not exist in our portfolio registry.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7C3AED] to-[#A855F7] shadow-lg shadow-purple-900/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [project.coverImage, ...(project.additionalImages || [])];
  const relatedProjects = projects.filter(p => p.category === project.category && p.slug !== project.slug).slice(0, 3);

  const handleOpenLightbox = (index = 0) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const whatsappMessage = `Hello Housr 360 Builders, I am inquiring about the architectural specifications and construction estimate for ${project.name} (${project.location}).`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <div className="bg-[#0A0713] text-white">
      
      {/* 1. Cinematic Hero Header */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full h-full object-cover object-center filter brightness-[0.70]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0713] via-[#0A0713]/60 to-black/30" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C084FC] hover:text-white mb-6 transition-colors bg-black/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0A0713]/90 text-[#DDD6FE] border border-[#A855F7]/50 backdrop-blur-md">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{project.status}</span>
            </span>
            {project.isDemonstration && (
              <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider bg-white/10 text-zinc-400 border border-white/10">
                Demonstration Content
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            {project.name}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-zinc-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#A855F7]" />
              {project.location}
            </span>
            {project.area && (
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#A855F7]" />
                Built-Up Area: <strong>{project.area}</strong>
              </span>
            )}
            {project.completionYear && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#A855F7]" />
                Completed: <strong>{project.completionYear}</strong>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 2. Project Specifications Matrix */}
      <section className="bg-[#120E22] border-y border-[#A855F7]/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-1">Architectural Style</span>
              <span className="font-serif text-sm font-semibold text-white block">{project.architecturalStyle || 'Modern Luxury'}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-1">Client Typology</span>
              <span className="font-serif text-sm font-semibold text-white block">{project.clientType || 'Private Commission'}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-1">Total Footprint</span>
              <span className="font-serif text-sm font-semibold text-white block">{project.area || 'Custom Build'}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-1">Project Milestone</span>
              <span className="font-serif text-sm font-semibold text-[#C084FC] block">{project.status}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Narrative & Features */}
      <section className="py-24 bg-[#0A0713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold block">
                Architectural Concept
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {project.tagline}
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              {/* Scope of Execution */}
              {project.scope && (
                <div className="pt-6 border-t border-white/10">
                  <h3 className="font-serif text-base font-bold text-white mb-4">
                    Turnkey Scope of Execution
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.scope.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Card: Key Highlights & WhatsApp Inquiry */}
            <div className="lg:col-span-5 bg-[#120E22] rounded-3xl p-7 border border-[#A855F7]/30 shadow-2xl space-y-6 shadow-purple-950/50">
              <h3 className="font-serif text-lg font-bold text-white">
                Key Architectural Highlights
              </h3>
              
              <div className="space-y-3">
                {project.keyFeatures && project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-zinc-200 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-xs text-zinc-400">
                  Envisaging a residence with similar architectural volumes or finishes in Hosur or Bengaluru?
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:brightness-110 shadow-lg shadow-[#25D366]/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire for Similar Project</span>
                </a>
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#A855F7] hover:brightness-110 shadow-lg shadow-purple-900/40 transition-all"
                >
                  <span>Request Full Technical Estimate</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Complete Project Photo Gallery */}
      <section className="py-20 bg-[#120E22] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold block mb-2">
                Visual Documentation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Project Gallery ({allImages.length} Views)
              </h2>
            </div>
            <span className="text-xs text-zinc-400">
              Click any photo to open full-screen lightbox
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allImages.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-[#2D2252] hover:border-[#A855F7]/60 shadow-xl bg-black"
              >
                <img
                  src={imgUrl}
                  alt={`${project.name} photo ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-[#A855F7] text-white shadow-xl">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-[#0A0713]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold block mb-2">
                  Explore More
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Similar Architectural Works
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-xs font-semibold text-[#C084FC] hover:text-white flex items-center gap-1"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={allImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
        title={project.name}
      />

    </div>
  );
}
