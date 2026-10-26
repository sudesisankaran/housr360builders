import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, MapPin, Eye, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { instagramVideos, instagramProfileInfo } from '../../data/instagramVideos';
import InstagramVideoModal from './InstagramVideoModal';

// Clean SVG Instagram Icon
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function InstagramReelsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = ['All', 'Structural & RCC', 'Civil Construction', 'Site Walkthrough', 'Elevation & Masonry', 'Interior Finishing'];

  const filteredVideos = selectedCategory === 'All'
    ? instagramVideos
    : instagramVideos.filter(v => v.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleOpenVideo = (video) => {
    setActiveVideo(video);
    setModalOpen(true);
  };

  return (
    <section className="py-24 bg-[#0A0713] relative overflow-hidden border-t border-[#A855F7]/20" id="site-videos">
      {/* Background Architectural Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-900/20 via-violet-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none architectural-grid opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17122C] border border-[#A855F7]/40 text-xs text-[#C084FC] font-semibold mb-4 backdrop-blur-md">
              <InstagramIcon className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>Live Site Reels • {instagramProfileInfo.handle}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Real Construction.{' '}
              <span className="purple-gradient-text block sm:inline">
                Live From Our Sites.
              </span>
            </h2>

            <p className="mt-4 text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Transparent civil engineering you can see. Watch our structural audits, rebar casting, and turnkey finishes recorded directly on our Hosur and Bengaluru project sites.
            </p>
          </div>

          {/* Instagram Follow Badge Card */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={instagramProfileInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-950/80 to-[#17122C] hover:from-purple-900/90 hover:to-[#221A3D] border border-[#A855F7]/40 text-xs font-semibold text-white transition-all shadow-lg shadow-purple-950/40 hover:scale-[1.02]"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-purple-300 uppercase font-medium">Follow on Instagram</span>
                <span className="block font-bold">{instagramProfileInfo.handle}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-purple-300 ml-1" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-md shadow-purple-900/40 font-semibold'
                  : 'bg-[#17122C]/80 text-zinc-300 hover:text-white border border-white/10 hover:border-[#A855F7]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Reel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => handleOpenVideo(video)}
              className="group cursor-pointer rounded-2xl bg-[#120E22] border border-[#2E2254] hover:border-[#A855F7]/70 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-950/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/5] sm:aspect-[9/14] overflow-hidden bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120E22] via-[#120E22]/30 to-black/40" />

                {/* Reel Badge Top Left */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] text-white font-medium">
                  <InstagramIcon className="w-3 h-3 text-[#A855F7]" />
                  <span>Reel</span>
                </div>

                {/* Duration Badge Top Right */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] text-zinc-300 font-mono">
                  {video.duration}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white flex items-center justify-center shadow-2xl shadow-purple-900/80 group-hover:scale-115 transition-transform duration-300 pl-1 ring-4 ring-purple-500/25">
                    <Play className="w-6 h-6 fill-white text-white" />
                  </div>
                </div>

                {/* Location Pill Bottom Left */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 text-[11px] text-zinc-200 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <MapPin className="w-3 h-3 text-[#A855F7]" />
                    <span className="truncate max-w-[140px]">{video.location}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-zinc-300 bg-black/70 backdrop-blur-md px-2 py-1 rounded-full">
                    <Eye className="w-2.5 h-2.5 text-[#C084FC]" />
                    {video.viewsCount}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C084FC] block mb-1.5">
                    {video.category}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {video.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#C084FC] group-hover:text-white transition-colors">
                  <span>Watch Reel</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#17122C] via-[#1F173B] to-[#120E22] border border-[#A855F7]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                Want daily construction updates from Hosur & Bengaluru?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300">
                Follow <strong className="text-purple-300">@hosur360builders</strong> for unfiltered RCC tests, drone passes, and design unveilings.
              </p>
            </div>
          </div>

          <a
            href={instagramProfileInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:brightness-110 shadow-lg shadow-purple-900/40 transition-all"
          >
            <span>Visit Instagram Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Video Modal Player */}
      <InstagramVideoModal
        video={activeVideo}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
