import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import EnquiryForm from '../components/forms/EnquiryForm';

export default function Contact() {
  useDocumentTitle('Contact Us | Schedule Architectural Consultation', 'Get in touch with Housr 360 Builders. Book an architectural site visit, discuss turnkey estimates, or connect with our structural engineers.');

  const whatsappUrl = getWhatsAppUrl("Hello Housr 360 Builders, I would like to schedule an architectural consultation.");

  return (
    <div className="bg-[#111111] text-white">
      
      {/* Header */}
      <section className="relative py-24 sm:py-32 bg-[#141414] border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40 text-xs text-[#F1D98A] font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Direct Engineering Advisory</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Begin Your Architectural Project
          </h1>
          <p className="text-base sm:text-lg text-[#CCCCCC] max-w-3xl mx-auto leading-relaxed">
            Connect directly with our principal architects and project leads to discuss plot feasibility, turnkey civil estimates, or bespoke interior planning.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Form + Contact Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <EnquiryForm formTitle="Book a Project Consultation" />
            </div>

            {/* Right Column: Direct Contact & Office Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Quick Connect Card */}
              <div className="bg-gradient-to-br from-[#1A2E1D] via-[#141F16] to-[#121212] p-7 rounded-3xl border border-[#25D366]/40 shadow-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      Instant WhatsApp Advisory
                    </h3>
                    <p className="text-xs text-[#AAAAAA]">
                      Direct line to on-duty Senior Civil Engineer
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#CCCCCC] leading-relaxed">
                  Have quick questions about plot dimensions, approximate cost per square foot, or 3D elevation timelines? Chat directly with our engineering desk.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:brightness-110 shadow-lg shadow-[#25D366]/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Corporate Office & Direct Contacts */}
              <div className="bg-[#161616] p-7 rounded-3xl border border-white/10 space-y-6 shadow-xl">
                <h3 className="font-serif text-lg font-bold text-white border-b border-white/10 pb-3">
                  Corporate Office & Hubs
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Main Headquarters</p>
                      <p className="text-[#AAAAAA] leading-relaxed">
                        {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} — {siteConfig.contact.address.pincode}
                      </p>
                      <a
                        href={siteConfig.contact.address.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-[#D4AF37] hover:underline mt-1"
                      >
                        <span>Open in Google Maps</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Telephone Lines</p>
                      <p className="text-[#CCCCCC]">
                        <a href={`tel:${siteConfig.contact.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-[#F1D98A] transition-colors">
                          {siteConfig.contact.phonePrimary}
                        </a>
                      </p>
                      <p className="text-[#999999] text-xs">
                        {siteConfig.contact.phoneSecondary} (Alternate line)
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                    <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Official Correspondence</p>
                      <p className="text-[#CCCCCC]">
                        <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#F1D98A] transition-colors">
                          {siteConfig.contact.email}
                        </a>
                      </p>
                      <p className="text-[#999999] text-xs">
                        {siteConfig.contact.supportEmail}
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                    <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Office Hours</p>
                      <p className="text-[#AAAAAA] text-xs">{siteConfig.contact.businessHours.weekdays}</p>
                      <p className="text-[#888888] text-[11px]">{siteConfig.contact.businessHours.sunday}</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Service Locations Pill Box */}
              <div className="p-6 bg-[#161616] rounded-3xl border border-white/10 text-xs">
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold block mb-2">
                  Operating Cities
                </span>
                <p className="text-[#AAAAAA] mb-3 leading-relaxed">
                  Active site management and engineering deployment teams:
                </p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.serviceLocations.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#CCCCCC]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
