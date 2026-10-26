import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck,
  Share2
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getShareAllContactDetailsWhatsAppUrl } from '../../utils/whatsapp';

// Clean SVG Brand Icons for Social Media
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080510] border-t border-[#A855F7]/25 text-[#B8B2D0] pt-16 pb-8 relative overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E1738] to-[#0A0713] border border-[#A855F7] flex items-center justify-center shadow-lg shadow-purple-950/50">
                <svg className="w-6 h-6 text-[#C084FC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-white">
                  HOUSR <span className="text-[#A855F7]">360</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#999999] font-medium -mt-0.5">
                  BUILDERS
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-zinc-300 max-w-sm">
              Architectural luxury, turnkey residential construction, photorealistic 2D/3D design, and Vastu-compliant engineering in Hosur and Bengaluru. Built with uncompromising transparency.
            </p>

            {/* Factual editable metrics tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17122C] border border-[#A855F7]/30 text-xs text-[#DDD6FE]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>Certified Engineering & Transparent BOQ</span>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Housr 360 Builders on Instagram"
                className="w-9 h-9 rounded-full bg-[#17122C] border border-white/10 flex items-center justify-center text-[#CCCCCC] hover:text-[#DDD6FE] hover:border-[#A855F7]/60 hover:bg-[#7C3AED]/20 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Housr 360 Builders on Facebook"
                className="w-9 h-9 rounded-full bg-[#17122C] border border-white/10 flex items-center justify-center text-[#CCCCCC] hover:text-[#DDD6FE] hover:border-[#A855F7]/60 hover:bg-[#7C3AED]/20 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Housr 360 Builders on LinkedIn"
                className="w-9 h-9 rounded-full bg-[#17122C] border border-white/10 flex items-center justify-center text-[#CCCCCC] hover:text-[#DDD6FE] hover:border-[#A855F7]/60 hover:bg-[#7C3AED]/20 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Housr 360 Builders on YouTube"
                className="w-9 h-9 rounded-full bg-[#17122C] border border-white/10 flex items-center justify-center text-[#CCCCCC] hover:text-[#DDD6FE] hover:border-[#A855F7]/60 hover:bg-[#7C3AED]/20 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase border-b border-[#A855F7]/30 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-[#DDD6FE] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#DDD6FE] transition-colors">About Our Firm</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#DDD6FE] transition-colors">All Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#DDD6FE] transition-colors">Projects Portfolio</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-[#DDD6FE] transition-colors">Client Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#DDD6FE] transition-colors">Consultation & Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#DDD6FE] transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services List */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase border-b border-[#A855F7]/30 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/services/house-construction" className="hover:text-[#DDD6FE] transition-colors">
                  House Construction
                </Link>
              </li>
              <li>
                <Link to="/services/2d-3d-design" className="hover:text-[#DDD6FE] transition-colors">
                  2D Plans & 3D Elevation
                </Link>
              </li>
              <li>
                <Link to="/services/interior-design" className="hover:text-[#DDD6FE] transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link to="/services/renovation" className="hover:text-[#DDD6FE] transition-colors">
                  Renovation & Retrofitting
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-buildings" className="hover:text-[#DDD6FE] transition-colors">
                  Commercial Buildings
                </Link>
              </li>
              <li>
                <Link to="/services/vastu-plans" className="hover:text-[#DDD6FE] transition-colors">
                  Vastu Architectural Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#A855F7]/30">
              <span className="w-1.5 h-4 bg-gradient-to-b from-[#A855F7] to-[#DDD6FE] rounded-full inline-block" />
              <h4 className="font-serif text-sm font-bold tracking-wider text-white uppercase">
                Corporate Office
              </h4>
            </div>

            <div className="bg-[#120E22]/90 p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-[#A855F7]/40 transition-all duration-300 shadow-lg space-y-4 shadow-purple-950/40">
              
              {/* Address Item */}
              <div className="group flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1B1533] border border-[#A855F7]/30 flex items-center justify-center text-[#C084FC] shrink-0 shadow-sm group-hover:border-[#A855F7] group-hover:bg-[#A855F7]/10 transition-colors mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-purple-300/80 font-semibold block mb-0.5">
                    Office Location
                  </span>
                  <p className="text-xs text-[#E5E5E5] leading-relaxed group-hover:text-white transition-colors">
                    {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} — {siteConfig.contact.address.pincode}
                  </p>
                  <a
                    href={siteConfig.contact.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C084FC] hover:text-white mt-1 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="group flex items-start gap-3 pt-3 border-t border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#1B1533] border border-[#A855F7]/30 flex items-center justify-center text-[#C084FC] shrink-0 shadow-sm group-hover:border-[#A855F7] group-hover:bg-[#A855F7]/10 transition-colors mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-purple-300/80 font-semibold block mb-0.5">
                    Direct Phone Lines
                  </span>
                  <div className="flex flex-col space-y-0.5">
                    <a
                      href={`tel:${siteConfig.contact.phonePrimary.replace(/\s+/g, '')}`}
                      className="text-xs font-medium text-white hover:text-[#DDD6FE] transition-colors flex items-center gap-1.5"
                    >
                      <span>{siteConfig.contact.phonePrimary}</span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#7C3AED]/30 text-[#DDD6FE] border border-[#A855F7]/40">Primary</span>
                    </a>
                    {siteConfig.contact.phoneSecondary && (
                      <a
                        href={`tel:${siteConfig.contact.phoneSecondary.replace(/\s+/g, '')}`}
                        className="text-xs text-zinc-400 hover:text-white transition-colors"
                      >
                        {siteConfig.contact.phoneSecondary}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-3 pt-3 border-t border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#1B1533] border border-[#A855F7]/30 flex items-center justify-center text-[#C084FC] shrink-0 shadow-sm group-hover:border-[#A855F7] group-hover:bg-[#A855F7]/10 transition-colors mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-purple-300/80 font-semibold block mb-0.5">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-xs text-[#E5E5E5] hover:text-[#DDD6FE] transition-colors truncate block"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="group flex items-start gap-3 pt-3 border-t border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#1B1533] border border-[#A855F7]/30 flex items-center justify-center text-[#C084FC] shrink-0 shadow-sm group-hover:border-[#A855F7] group-hover:bg-[#A855F7]/10 transition-colors mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-purple-300/80 font-semibold block mb-0.5">
                    Working Schedule
                  </span>
                  <p className="text-xs text-zinc-300 leading-snug">
                    {siteConfig.contact.businessHours.weekdays}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {siteConfig.contact.businessHours.sunday}
                  </p>
                </div>
              </div>

              {/* Quick Share to WhatsApp */}
              <div className="pt-2 border-t border-white/5">
                <a
                  href={getShareAllContactDetailsWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-xs font-semibold transition-all group"
                  title="Forward complete company contact card to WhatsApp"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Contact Details to WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Locations, Copyright & Privacy */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-zinc-300 font-medium">Operating Exclusively in:</span>
            {siteConfig.serviceLocations.map((loc, idx) => (
              <span key={loc} className="flex items-center">
                <span className="text-purple-300 font-semibold">{loc}</span>
                {idx < siteConfig.serviceLocations.length - 1 && <span className="mx-1.5 text-white/30">•</span>}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <p>© {currentYear} {siteConfig.brand.name}. All rights reserved.</p>
            <Link to="/privacy-policy" className="hover:text-white transition-colors underline underline-offset-2">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
