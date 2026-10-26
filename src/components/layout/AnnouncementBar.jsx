import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !siteConfig.announcement.enabled) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#120E22] via-[#211640] to-[#120E22] border-b border-[#A855F7]/25 text-xs text-[#E5E5E5] px-4 py-2 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-[#DDD6FE] font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#A855F7] animate-pulse" />
            <span>Consultation Advisory:</span>
          </span>
          <span className="text-zinc-300">
            {siteConfig.announcement.message}
          </span>
          {siteConfig.announcement.ctaLink && (
            <Link
              to={siteConfig.announcement.ctaLink}
              className="inline-flex items-center gap-1 text-[#C084FC] hover:text-[#FFFFFF] font-semibold underline underline-offset-2 ml-1 transition-colors"
            >
              <span>{siteConfig.announcement.ctaText}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-zinc-400 hover:text-white p-1 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-[#A855F7]"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
