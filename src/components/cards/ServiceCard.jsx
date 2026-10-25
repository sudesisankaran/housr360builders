import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Home, 
  PenTool, 
  Compass, 
  Hammer, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';

const iconMap = {
  Home,
  PenTool,
  Compass,
  Hammer,
  Building2,
  ShieldCheck,
};

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = iconMap[service.iconName] || Home;

  return (
    <div className="group relative bg-[#161616] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-xl flex flex-col justify-between">
      {/* Card Image with subtle zoom */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={service.cardImage}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Dark overlay gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/40 to-transparent" />

        {/* Badge & Icon */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#111111]/85 text-[#F1D98A] border border-[#D4AF37]/30 backdrop-blur-md">
            {service.badge}
          </span>
        </div>

        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[#111111]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-all duration-300 shadow-lg">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F1D98A] transition-colors mb-2">
            {service.title}
          </h3>
          <p className="text-xs text-[#A8A8A8] line-clamp-3 leading-relaxed mb-4">
            {service.shortDescription}
          </p>

          {/* Key highlight pills */}
          {service.highlights && service.highlights.length > 0 && (
            <div className="space-y-1.5 mb-6 pt-3 border-t border-white/5">
              {service.highlights.slice(0, 2).map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[11px] text-[#B8B8B8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="truncate">{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] group-hover:text-[#F1D98A] tracking-wider uppercase transition-colors"
          >
            <span>Explore Service</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
          <span className="text-[10px] font-mono text-[#666666]">0{index + 1}</span>
        </div>
      </div>
    </div>
  );
}
