import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !siteConfig.announcement.enabled) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#181818] via-[#1f1b14] to-[#181818] border-b border-[#D4AF37]/25 text-xs text-[#E5E5E5] px-4 py-2 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-[#F1D98A] font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>Consultation Advisory:</span>
          </span>
          <span className="text-[#CCCCCC]">
            {siteConfig.announcement.message}
          </span>
          {siteConfig.announcement.ctaLink && (
            <Link
              to={siteConfig.announcement.ctaLink}
              className="inline-flex items-center gap-1 text-[#F1D98A] hover:text-[#FFFFFF] font-semibold underline underline-offset-2 ml-1 transition-colors"
            >
              <span>{siteConfig.announcement.ctaText}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-[#888888] hover:text-[#FFFFFF] p-1 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
