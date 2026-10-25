export default function ProcessCard({ step, index, totalSteps }) {
  return (
    <div className="relative bg-[#161616] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
      {/* Top Number & Step Title */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-3xl font-bold text-[#D4AF37] group-hover:text-[#F1D98A] transition-colors">
            {step.step || `0${index + 1}`}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#777777] font-semibold px-2 py-1 bg-white/5 rounded">
            Stage {index + 1} of {totalSteps}
          </span>
        </div>

        <h4 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#F1D98A] transition-colors">
          {step.title}
        </h4>

        <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
        <span className="w-8 h-0.5 bg-[#D4AF37]/40 group-hover:w-full group-hover:bg-[#D4AF37] transition-all duration-500 rounded-full" />
      </div>
    </div>
  );
}
