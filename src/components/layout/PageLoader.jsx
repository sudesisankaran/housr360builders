import { Compass, Sparkles } from 'lucide-react';

export default function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#111111] text-white">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-[#161616] border border-[#D4AF37]/50 flex items-center justify-center shadow-2xl">
          <svg className="w-8 h-8 text-[#D4AF37] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#F1D98A] rounded-full animate-ping" />
      </div>

      <div className="mt-5 text-center">
        <span className="font-serif text-sm font-semibold tracking-wider text-white uppercase block">
          HOUSR <span className="text-[#D4AF37]">360</span>
        </span>
        <span className="text-[10px] text-[#888888] tracking-widest uppercase mt-0.5 block">
          Loading Architectural Space...
        </span>
      </div>
    </div>
  );
}
