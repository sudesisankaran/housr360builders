import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { isScrolled } = useScrollPosition(30);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0713]/95 backdrop-blur-md shadow-2xl border-b border-[#A855F7]/25 py-3'
          : 'bg-[#0A0713]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#A855F7] rounded-lg p-1"
            aria-label="Housr 360 Builders Home"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E1738] to-[#0A0713] border border-[#A855F7]/60 flex items-center justify-center shadow-lg group-hover:border-[#C084FC] transition-all duration-300 shadow-purple-950/50">
              <svg className="w-6 h-6 text-[#C084FC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#DDD6FE] transition-colors">
                HOUSR <span className="text-[#A855F7]">360</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B8B2D0] font-medium -mt-0.5">
                BUILDERS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {siteConfig.navLinks.map((link) => {
              if (link.dropdown) {
                const isServicesActive = location.pathname.startsWith('/services');
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <NavLink
                      to={link.path}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors py-2 ${
                        isServicesActive
                          ? 'text-[#DDD6FE]'
                          : 'text-[#E5E5E5] hover:text-[#C084FC]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#A855F7]' : ''
                        }`}
                      />
                    </NavLink>

                    {/* Services Dropdown Menu */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 top-full pt-2 w-72 z-50"
                        >
                          <div className="bg-[#17122C] border border-[#A855F7]/30 rounded-xl shadow-2xl p-2 backdrop-blur-xl shadow-purple-950/60">
                            <div className="px-3 py-2 border-b border-white/5 mb-1 flex items-center justify-between">
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C084FC]">
                                Architectural Services
                              </span>
                              <Link
                                to="/services"
                                className="text-[11px] text-[#B8B2D0] hover:text-white transition-colors"
                              >
                                View All →
                              </Link>
                            </div>
                            {link.dropdown.map((subItem) => (
                              <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                className={({ isActive }) =>
                                  `block px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                                    isActive
                                      ? 'bg-[#7C3AED]/20 text-[#DDD6FE] font-semibold border-l-2 border-[#A855F7]'
                                      : 'text-[#D0D0D0] hover:bg-white/5 hover:text-white'
                                  }`
                                }
                              >
                                {subItem.name}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors relative py-1 ${
                      isActive
                        ? 'text-[#DDD6FE] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#A855F7] after:rounded-full'
                        : 'text-[#E5E5E5] hover:text-[#C084FC]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs text-[#CCCCCC] hover:text-[#DDD6FE] transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
              aria-label="Call Housr 360 Builders"
            >
              <Phone className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>{siteConfig.contact.phonePrimary}</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#A855F7] hover:brightness-110 shadow-lg shadow-purple-900/40 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#A855F7]"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:brightness-110 transition-colors shadow-md shadow-purple-900/40"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#CCCCCC] hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A855F7]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#120E22] border-b border-[#A855F7]/30 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-1">
              {siteConfig.navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.name} className="py-2 border-b border-white/5">
                      <div className="flex items-center justify-between text-sm font-semibold text-[#DDD6FE] mb-2 px-2">
                        <span>{link.name}</span>
                        <Link
                          to="/services"
                          className="text-xs text-[#A855F7] underline"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All
                        </Link>
                      </div>
                      <div className="grid grid-cols-1 gap-1 pl-3">
                        {link.dropdown.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={({ isActive }) =>
                              `block py-2 px-3 text-xs rounded-lg transition-colors ${
                                isActive
                                  ? 'text-[#DDD6FE] bg-[#7C3AED]/20 font-semibold'
                                  : 'text-[#B8B8B8] hover:text-white hover:bg-white/5'
                              }`
                            }
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-[#DDD6FE] bg-[#7C3AED]/20 font-semibold'
                          : 'text-[#E5E5E5] hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </nav>

            <div className="mt-5 pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${siteConfig.contact.phonePrimary.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 text-xs text-[#CCCCCC] hover:text-white px-2 py-1"
              >
                <Phone className="w-4 h-4 text-[#A855F7]" />
                <span>Direct Line: {siteConfig.contact.phonePrimary}</span>
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#A855F7] shadow-lg shadow-purple-900/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Project Consultation</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
