import { Link } from 'react-router-dom';
import { MapPin, Maximize2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, onOpenLightbox }) {
  return (
    <div className="group bg-[#120E22] rounded-2xl overflow-hidden border border-[#2D2252] hover:border-[#A855F7]/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-950/50 flex flex-col justify-between">
      {/* Cover Image & Hover Triggers */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-[#0A0713]">
        <img
          src={project.coverImage}
          alt={project.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop";
          }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120E22] via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#0A0713]/85 text-[#DDD6FE] border border-[#A855F7]/40 backdrop-blur-md">
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
            <span className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-[#17122C]/90 text-zinc-400 border border-white/10" title="Demonstration showcase project">
              Demo Project
            </span>
          </div>
        )}

        {/* Lightbox Quick View Button */}
        {onOpenLightbox && (
          <button
            onClick={() => onOpenLightbox(project)}
            className="absolute bottom-4 right-4 p-2.5 rounded-full bg-[#0A0713]/80 hover:bg-[#A855F7] text-white hover:text-white border border-white/20 backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg transform translate-y-2 group-hover:translate-y-0"
            aria-label={`Open gallery view for ${project.name}`}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Card Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#A855F7] shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>

          <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#DDD6FE] transition-colors mb-2">
            {project.name}
          </h3>

          <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-3 border-t border-white/5 mb-4">
            <span>Area: <strong className="text-zinc-200">{project.area || 'Custom'}</strong></span>
            <span>Year: <strong className="text-zinc-200">{project.completionYear || 'Recent'}</strong></span>
          </div>
        </div>

        {/* Link to Dedicated Project Page */}
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center justify-between w-full py-2.5 px-3 rounded-lg bg-white/5 hover:bg-[#7C3AED]/25 text-xs font-semibold text-[#C084FC] hover:text-white border border-white/5 hover:border-[#A855F7]/40 transition-all"
        >
          <span>View Project Architecture</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
