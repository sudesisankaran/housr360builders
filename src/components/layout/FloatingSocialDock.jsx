import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';

// Clean, high-fidelity brand & action SVG icons
function PhoneCallIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.779.82 2.791.82 3.18 0 5.767-2.586 5.767-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.374 8.204c-.145.411-.741.771-1.026.818-.283.048-.646.074-1.895-.443-1.597-.661-2.617-2.285-2.696-2.39-.079-.105-.644-.858-.644-1.636 0-.777.408-1.16.553-1.317.145-.157.316-.197.422-.197.106 0 .211.002.303.007.098.005.228-.037.356.27.132.316.449 1.096.488 1.176.04.079.066.172.013.277-.053.106-.079.172-.158.264-.079.092-.167.206-.238.277-.079.079-.161.165-.069.323.092.158.41.677.88 1.096.604.538 1.113.705 1.272.784.158.079.251.066.343-.04.092-.105.396-.462.502-.62.105-.158.211-.132.356-.079.145.053.924.436 1.082.515.158.079.264.119.303.185.04.066.04.383-.105.794z"/>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.662 1.444 5.176L2 22l4.981-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.693 0-3.266-.492-4.588-1.341l-.329-.213-2.96.776.79-2.885-.233-.37A8.136 8.136 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YouTubeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function GoogleIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function FloatingSocialDock({ customMessage = null }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const whatsappUrl = getWhatsAppUrl(customMessage);
  const cleanPhone = siteConfig.contact.phonePrimary.replace(/\s+/g, '');

  const socialActions = [
    {
      id: 'call',
      name: 'Call Now',
      label: `Call ${siteConfig.contact.phonePrimary}`,
      url: `tel:${cleanPhone}`,
      icon: PhoneCallIcon,
      bgClass: 'bg-[#17122C] text-[#DDD6FE] hover:bg-[#A855F7] hover:text-white',
      borderClass: 'border-[#A855F7]/50 hover:border-[#A855F7]',
      tooltipColor: 'text-[#DDD6FE]',
      isExternal: false,
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      label: 'Chat on WhatsApp',
      url: whatsappUrl,
      icon: WhatsAppIcon,
      bgClass: 'bg-[#25D366] text-white hover:bg-[#20bd5a]',
      borderClass: 'border-[#25D366]/40',
      tooltipColor: 'text-[#25D366]',
      isPrimary: true,
      hasPulse: true,
      isExternal: true,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      label: 'Follow on Instagram',
      url: siteConfig.socials.instagram,
      icon: InstagramIcon,
      bgClass: 'bg-[#181818] text-[#E1306C] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white',
      borderClass: 'border-white/10 hover:border-[#E1306C]/50',
      tooltipColor: 'text-[#E1306C]',
      isExternal: true,
    },
    {
      id: 'youtube',
      name: 'YouTube',
      label: 'Watch on YouTube',
      url: siteConfig.socials.youtube,
      icon: YouTubeIcon,
      bgClass: 'bg-[#181818] text-[#FF0000] hover:bg-[#FF0000] hover:text-white',
      borderClass: 'border-white/10 hover:border-[#FF0000]/50',
      tooltipColor: 'text-[#FF0000]',
      isExternal: true,
    },
    {
      id: 'google',
      name: 'Google',
      label: 'Reviews & Location',
      url: siteConfig.socials.google,
      icon: GoogleIcon,
      bgClass: 'bg-[#181818] text-white hover:bg-[#222222]',
      borderClass: 'border-white/10 hover:border-[#4285F4]/50',
      tooltipColor: 'text-[#4285F4]',
      isExternal: true,
    },
    {
      id: 'facebook',
      name: 'Facebook',
      label: 'Connect on Facebook',
      url: siteConfig.socials.facebook,
      icon: FacebookIcon,
      bgClass: 'bg-[#181818] text-[#1877F2] hover:bg-[#1877F2] hover:text-white',
      borderClass: 'border-white/10 hover:border-[#1877F2]/50',
      tooltipColor: 'text-[#1877F2]',
      isExternal: true,
    },
  ];

  return (
    <aside 
      aria-label="Quick contact, phone call, and social links" 
      className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2.5"
    >
      {socialActions.map((item) => {
        const IconComponent = item.icon;
        const isHovered = hoveredItem === item.id;

        return (
          <div key={item.id} className="relative flex items-center">
            {/* Tooltip Label */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#1A1A1A]/95 text-white text-xs font-semibold whitespace-nowrap shadow-2xl border border-white/15 backdrop-blur-md flex items-center gap-1.5 pointer-events-none"
                >
                  <span className={item.tooltipColor}>{item.name}:</span>
                  <span>{item.label}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Button */}
            <a
              href={item.url}
              {...(item.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`relative p-3 rounded-full shadow-2xl border transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#A855F7] flex items-center justify-center backdrop-blur-md ${item.bgClass} ${item.borderClass}`}
              aria-label={item.label}
            >
              {/* Optional Subtle Pulse for WhatsApp flagship */}
              {item.hasPulse && (
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
              )}

              <IconComponent className="w-5 h-5 relative z-10" />

              {/* Violet status dot for WhatsApp */}
              {item.isPrimary && (
                <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-[#C084FC] border-2 border-[#0A0713] rounded-full z-20" />
              )}
            </a>
          </div>
        );
      })}
    </aside>
  );
}
