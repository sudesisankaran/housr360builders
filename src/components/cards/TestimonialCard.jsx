import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-[#120E22] rounded-2xl p-6 sm:p-7 border border-[#2D2252] hover:border-[#A855F7]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-950/40 flex flex-col justify-between relative group">
      {/* Decorative Violet Quote Icon */}
      <div className="absolute top-6 right-6 text-[#A855F7]/15 group-hover:text-[#A855F7]/30 transition-colors pointer-events-none">
        <Quote className="w-10 h-10" />
      </div>

      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#A855F7] text-[#A855F7]" />
          ))}
          <span className="ml-2 text-xs font-semibold text-[#DDD6FE]">5.0</span>
        </div>

        {/* Highlight Headline */}
        {testimonial.highlight && (
          <h4 className="font-serif text-sm font-semibold text-white mb-2 leading-snug">
            "{testimonial.highlight}"
          </h4>
        )}

        {/* Quote Body */}
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author Footer */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.clientName}
            className="w-11 h-11 rounded-full object-cover border border-[#A855F7]/40 shadow-sm"
            loading="lazy"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <h5 className="font-serif text-xs font-bold text-white">
                {testimonial.clientName}
              </h5>
              {testimonial.isVerified && (
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7]" title="Verified Client" />
              )}
            </div>
            <p className="text-[11px] text-zinc-400">{testimonial.location}</p>
          </div>
        </div>

        {/* Project Type Tag */}
        {testimonial.projectSlug ? (
          <Link
            to={`/projects/${testimonial.projectSlug}`}
            className="hidden sm:inline-block text-[10px] text-[#C084FC] hover:underline"
          >
            {testimonial.projectType}
          </Link>
        ) : (
          <span className="hidden sm:inline-block text-[10px] text-zinc-500">
            {testimonial.projectType}
          </span>
        )}
      </div>
    </div>
  );
}
