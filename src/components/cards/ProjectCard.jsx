import { Link } from 'react-router-dom';
import { MapPin, Maximize2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, onOpenLightbox }) {
  return (
    <div className="group bg-[#161616] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-xl flex flex-col justify-between">
      {/* Cover Image & Hover Triggers */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-[#111111]">
        <img
          src={project.coverImage}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#111111]/85 text-[#F1D98A] border border-[#D4AF37]/40 backdrop-blur-md">
            {project.category}
          </span>
          {project.status && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/60 text-emerald-400 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>{project.status}</span>
            </span>
          )}
        </div>

        {/* Demonstration Indicator Badge */}
        {project.isDemonstration && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-[#1A1A1A]/90 text-[#888888] border border-white/10" title="Demonstration showcase project">
              Demo Project
            </span>
          </div>
        )}

        {/* Lightbox Quick View Button */}
        {onOpenLightbox && (
          <button
            onClick={() => onOpenLightbox(project)}
            className="absolute bottom-4 right-4 p-2.5 rounded-full bg-[#111111]/80 hover:bg-[#D4AF37] text-white hover:text-[#111111] border border-white/20 backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg transform translate-y-2 group-hover:translate-y-0"
            aria-label={`Open gallery view for ${project.name}`}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Card Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#999999] mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>

          <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F1D98A] transition-colors mb-2">
            {project.name}
          </h3>

          <p className="text-xs text-[#A8A8A8] line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex items-center justify-between text-[11px] text-[#777777] pt-3 border-t border-white/5 mb-4">
            <span>Area: <strong className="text-[#CCCCCC]">{project.area || 'Custom'}</strong></span>
            <span>Year: <strong className="text-[#CCCCCC]">{project.completionYear || 'Recent'}</strong></span>
          </div>
        </div>

        {/* Link to Dedicated Project Page */}
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center justify-between w-full py-2.5 px-3 rounded-lg bg-white/5 hover:bg-[#D4AF37]/15 text-xs font-semibold text-[#D4AF37] hover:text-[#F1D98A] border border-white/5 hover:border-[#D4AF37]/30 transition-all"
        >
          <span>View Project Architecture</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
