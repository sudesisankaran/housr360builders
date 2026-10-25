import { Link } from 'react-router-dom';
import { Home, ArrowRight, Compass, Search } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('404 Page Not Found | Housr 360 Builders');

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#111111] text-white py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#161616] border border-[#D4AF37]/40 text-[#D4AF37] mx-auto flex items-center justify-center shadow-2xl">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <div>
          <span className="font-mono text-sm uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
            Error 404
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white mb-3">
            Blueprint Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed">
            The architectural page or specification you are attempting to view does not exist or may have been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#111111] bg-gradient-to-r from-[#D4AF37] to-[#F1D98A] hover:brightness-110 shadow-lg transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs text-[#777777]">
          <p>Looking for a specific service? Browse our disciplines:</p>
          <div className="flex flex-wrap justify-center gap-3 mt-3 text-[#D4AF37]">
            <Link to="/services/house-construction" className="hover:underline">House Construction</Link>
            <span>•</span>
            <Link to="/services/2d-3d-design" className="hover:underline">2D/3D Design</Link>
            <span>•</span>
            <Link to="/services/interior-design" className="hover:underline">Interior Design</Link>
            <span>•</span>
            <Link to="/services/commercial-buildings" className="hover:underline">Commercial</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
