import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Send, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  ShieldCheck,
  PhoneCall,
  Mail,
  Sparkles 
} from 'lucide-react';
import { formatEnquiryForWhatsApp } from '../../utils/whatsapp';

export default function EnquiryForm({ defaultService = '', formTitle = 'Request a Construction Consultation' }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      service: defaultService || 'House Construction',
      location: '',
      budget: '',
      description: '',
      contactMethod: 'WhatsApp',
      consent: false,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate frontend validation & processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmittedData(data);
    setSubmissionSuccess(true);
    setIsSubmitting(false);
  };

  const handleWhatsAppRedirect = () => {
    if (submittedData) {
      const url = formatEnquiryForWhatsApp(submittedData);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleReset = () => {
    reset();
    setSubmittedData(null);
    setSubmissionSuccess(false);
  };

  return (
    <div className="bg-[#161616] rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
      {/* Decorative architectural background line */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#D4AF37]/10 to-transparent pointer-events-none rounded-full blur-2xl" />

      {/* Header */}
      <div className="mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#D4AF37]/30 text-xs text-[#F1D98A] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Priority Consultation Desk</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
          {formTitle}
        </h3>
        <p className="text-xs sm:text-sm text-[#A0A0A0]">
          Speak directly with our principal architects and structural engineers. We provide an initial technical evaluation and preliminary BOQ breakdown.
        </p>
      </div>

      {/* Success State Overlay */}
      {submissionSuccess && submittedData ? (
        <div className="py-8 text-center space-y-6 relative z-10 bg-[#111111]/80 rounded-2xl p-6 border border-emerald-500/30">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              Enquiry Received, {submittedData.fullName}!
            </h4>
            <p className="text-xs sm:text-sm text-[#CCCCCC] max-w-md mx-auto leading-relaxed">
              Thank you for contacting Housr 360 Builders. Your enquiry for <strong className="text-[#F1D98A]">{submittedData.service}</strong> in <strong className="text-[#F1D98A]">{submittedData.location}</strong> has been staged for our engineering team.
            </p>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="p-4 bg-[#1A1A1A] rounded-xl border border-[#D4AF37]/30 max-w-lg mx-auto text-left space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F1D98A]">
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Accelerate Your Site Visit via WhatsApp</span>
            </div>
            <p className="text-xs text-[#AAAAAA]">
              Forward this enquiry directly to our WhatsApp consultation desk for an instant response from an on-duty engineer:
            </p>
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:brightness-110 shadow-lg shadow-[#25D366]/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forward Enquiry to WhatsApp Now</span>
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={handleReset}
              className="text-xs text-[#888888] hover:text-white underline transition-colors"
            >
              Submit another project enquiry
            </button>
          </div>
        </div>
      ) : (
        /* The Form */
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative z-10" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#E5E5E5] mb-1.5 uppercase tracking-wider">
                Full Name <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Vikram Reddy"
                className={`w-full bg-[#111111] border ${
                  errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                } rounded-xl px-4 py-3 text-sm text-white placeholder-[#555555] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all`}
                {...register('fullName', {
                  required: 'Please enter your full name',
                  minLength: { value: 3, message: 'Name must be at least 3 characters' },
                })}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Indian Mobile Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#E5E5E5] mb-1.5 uppercase tracking-wider">
                Mobile Number <span className="text-[#D4AF37]">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[#777777] font-mono">
                  +91
                </span>
                <input
                  id="phone"
                  type="tel"
                  placeholder="74022 44144"
                  className={`w-full bg-[#111111] border ${
                    errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                  } rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-[#555555] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all`}
                  {...register('phone', {
                    required: 'Mobile number is required',
                    pattern: {
                      value: /^(?:(?:\+|0{0,2})91(\s*[- ]*\s*)?|[0]?)?[6789]\d{9}$/,
                      message: 'Please enter a valid 10-digit Indian mobile number',
                    },
                  })}
                />
              </div>
              {errors.phone && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email Address (Optional) */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#E5E5E5] mb-1.5 uppercase tracking-wider">
                Email Address <span className="text-[#777777] text-[10px] lowercase font-normal">(optional)</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className={`w-full bg-[#111111] border ${
                  errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                } rounded-xl px-4 py-3 text-sm text-white placeholder-[#555555] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all`}
                {...register('email', {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email.message}
                </p>
              )}
            </div>

            {/* Service Required */}
            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-[#E5E5E5] mb-1.5 uppercase tracking-wider">
                Service Required <span className="text-[#D4AF37]">*</span>
              </label>
              <select
                id="service"
                className="w-full bg-[#111111] border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
                {...register('service', { required: 'Please select a service' })}
              >
                <option value="House Construction">House Construction (Turnkey Luxury Villa)</option>
                <option value="2D Plans & 3D Elevation">2D Plans & 3D Elevation Architecture</option>
                <option value="Interior Design">Interior Design & Joinery</option>
                <option value="Renovation">Renovation & Structural Retrofitting</option>
                <option value="Commercial Buildings">Commercial Buildings & Complexes</option>
                <option value="Vastu Plans">Vastu Plans & Spatial Alignment</option>
              </select>
            </div>

            {/* Project Location */}
            <div>
              <label htmlFor="location" className="block text-xs font-semibold text-[#E5E5E5] mb-1.5 uppercase tracking-wider">
                Project Location / City <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                id="location"
                type="text"
                placeholder="e.g. Jubilee Hills, Hyderabad"
                className={`w-full bg-[#111111] border ${
                  errors.location ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                } rounded-xl px-4 py-3 text-sm text-white placeholder-[#555555] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all`}
                {...register('location', { required: 'Project location is required' })}
              />
              {errors.location && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.location.message}
                </p>
              )}
            </div>

            {/* Approximate Budget */}
            <div>
              <label htmlFor="budget" className="block text-xs font-semibold text-[#E5E5E5] mb-1.5 uppercase tracking-wider">
                Estimated Budget Range <span className="text-[#777777] text-[10px] lowercase font-normal">(optional)</span>
              </label>
              <select
                id="budget"
                className="w-full bg-[#111111] border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
                {...register('budget')}
              >
                <option value="">Select an estimated budget range</option>
                <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs</option>
                <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                <option value="₹1 Crore – ₹2.5 Crores">₹1 Crore – ₹2.5 Crores</option>
                <option value="₹2.5 Crores – ₹5 Crores">₹2.5 Crores – ₹5 Crores</option>
                <option value="Above ₹5 Crores">Above ₹5 Crores</option>
              </select>
            </div>

          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="description" className="block text-xs font-semibold text-[#E5E5E5] mb-1.5 uppercase tracking-wider">
              Project Description & Requirements <span className="text-[#D4AF37]">*</span>
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Tell us about your plot size, floors planned, style preferences, or key requirements..."
              className={`w-full bg-[#111111] border ${
                errors.description ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'
              } rounded-xl px-4 py-3 text-sm text-white placeholder-[#555555] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none`}
              {...register('description', {
                required: 'Please provide brief details of your project',
                minLength: { value: 10, message: 'Please provide at least 10 characters' },
              })}
            />
            {errors.description && (
              <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.description.message}
              </p>
            )}
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-xs font-semibold text-[#E5E5E5] mb-2 uppercase tracking-wider">
              Preferred Contact Channel
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'WhatsApp', label: 'WhatsApp', icon: MessageSquare },
                { value: 'Phone Call', label: 'Phone Call', icon: PhoneCall },
                { value: 'Email', label: 'Email', icon: Mail },
              ].map((channel) => {
                const ChannelIcon = channel.icon;
                return (
                  <label
                    key={channel.value}
                    className="flex items-center justify-center gap-2 p-3 bg-[#111111] border border-white/10 hover:border-[#D4AF37]/40 rounded-xl cursor-pointer text-xs font-medium text-[#CCCCCC] has-checked:border-[#D4AF37] has-checked:bg-[#D4AF37]/10 has-checked:text-[#F1D98A] transition-all"
                  >
                    <input
                      type="radio"
                      value={channel.value}
                      className="sr-only"
                      {...register('contactMethod')}
                    />
                    <ChannelIcon className="w-3.5 h-3.5" />
                    <span>{channel.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer text-xs text-[#A0A0A0]">
              <input
                type="checkbox"
                className="mt-0.5 rounded border-white/20 bg-[#111111] text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-offset-0"
                {...register('consent', {
                  required: 'You must agree to be contacted regarding this enquiry',
                })}
              />
              <span>
                I agree to be contacted by Housr 360 Builders architects regarding my project enquiry. We respect your privacy and never share details with external brokers.
              </span>
            </label>
            {errors.consent && (
              <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.consent.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-[#111111] bg-gradient-to-r from-[#D4AF37] via-[#F1D98A] to-[#D4AF37] hover:brightness-110 shadow-xl shadow-[#D4AF37]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Validating & Staging Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Project Consultation Request</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-[#777777] pt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Encrypted frontend transmission • WhatsApp instant connect available</span>
          </div>
        </form>
      )}
    </div>
  );
}
