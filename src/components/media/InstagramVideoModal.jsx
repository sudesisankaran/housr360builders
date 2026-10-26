import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, MessageSquare, MapPin, Eye, CheckCircle2, Volume2 } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function InstagramVideoModal({ video, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  const whatsappMessage = `Hello Hosur 360 Builders, I saw your Instagram reel "${video.title}" (${video.location}) and would like to consult about similar construction work for my plot.`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#120E22] border border-[#A855F7]/30 rounded-3xl shadow-2xl shadow-purple-950/60 overflow-hidden z-10 flex flex-col lg:flex-row my-auto max-h-[92vh]"
        >
          {/* Close Button Top Right */}
          <button
            onClick={onClose}
            aria-label="Close video player"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-[#A855F7] text-white transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side: Video / Instagram Embed Box */}
          <div className="lg:w-1/2 bg-black flex flex-col items-center justify-center relative min-h-[460px] sm:min-h-[520px] overflow-hidden">
            {/* Embedded Instagram Reel */}
            <iframe
              src={`${video.embedUrl}?autoplay=1`}
              title={video.title}
              className="w-full h-full min-h-[480px] sm:min-h-[530px] border-0"
              allowFullScreen
              scrolling="no"
              loading="lazy"
            />

            {/* Direct fallback trigger overlay at bottom */}
            <div className="absolute bottom-3 left-3 right-3 bg-[#0A0713]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-purple-300">
                <Volume2 className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>Tap video to unmute</span>
              </span>
              <a
                href={video.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C084FC] hover:text-white font-semibold flex items-center gap-1"
              >
                <span>Full Reel</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Side: Reel Metadata & Construction Details */}
          <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Category & Location Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#A855F7]/15 text-[#C084FC] border border-[#A855F7]/40">
                  {video.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  <MapPin className="w-3 h-3 text-[#A855F7]" />
                  {video.location}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 ml-auto">
                  <Eye className="w-3 h-3 text-[#A855F7]" />
                  {video.viewsCount}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                {video.title}
              </h3>

              {/* Caption */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                {video.caption}
              </p>

              {/* Engineering Highlights */}
              <div className="bg-[#17122C] p-4 rounded-2xl border border-white/10 mb-6">
                <h4 className="text-xs uppercase tracking-wider text-[#C084FC] font-semibold mb-2.5">
                  Civil Engineering Checkpoints
                </h4>
                <ul className="space-y-2">
                  {video.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#A855F7] hover:brightness-110 shadow-lg shadow-purple-900/40 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire About Similar Project</span>
              </a>

              <a
                href={video.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>Open on @hosur360builders Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
