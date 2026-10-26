import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function PrivacyPolicy() {
  useDocumentTitle('Privacy Policy | Housr 360 Builders', 'Privacy Policy and data protection terms for Housr 360 Builders website and consultation portal.');

  return (
    <div className="bg-[#0A0713] text-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C084FC] hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>

        {/* Header */}
        <div className="border-b border-white/10 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17122C] border border-[#A855F7]/40 text-xs text-[#DDD6FE] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>Official Policy Document</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Last Updated: January 2025 • Governs all interactions on housr360builders.com
          </p>
        </div>

        {/* Document Sections */}
        <div className="space-y-10 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#A855F7]">1.</span> Introduction
            </h2>
            <p>
              At {siteConfig.brand.name} (“we”, “our”, or “us”), we respect the privacy of our clients, prospective homeowners, and website visitors. This Privacy Policy details how we collect, use, and protect the information submitted through our online consultation forms, WhatsApp communication channels, and site visits in Hosur and Bengaluru.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#A855F7]">2.</span> Information We Collect
            </h2>
            <p>
              When you submit a project enquiry or request an architectural consultation, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>Your full legal name</li>
              <li>Contact details, specifically your mobile phone number and optional email address</li>
              <li>Project details, including plot location in Hosur or Bengaluru, approximate built-up area, and service preferences</li>
              <li>Approximate budget range and specific architectural or Vastu requirements</li>
              <li>Technical device data collected anonymously for website performance optimization</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#A855F7]">3.</span> Purpose of Data Processing
            </h2>
            <p>
              The data you provide is used exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>Assess the civil and architectural feasibility of your proposed construction project</li>
              <li>Schedule on-site topography visits and preliminary engineering discovery meetings</li>
              <li>Formulate customized 2D/3D design proposals and itemized Bill of Quantities (BOQ)</li>
              <li>Communicate project milestones and milestone progress updates via your preferred channel</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#A855F7]">4.</span> Zero Broker Sharing & Third-Party Protection
            </h2>
            <p>
              We maintain a strict policy against commercializing client information. We do not sell, lease, trade, or distribute your personal details to real estate brokers, external marketing agencies, or financial intermediaries under any circumstance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#A855F7]">5.</span> Direct WhatsApp Communication
            </h2>
            <p>
              When you choose to communicate with our engineers via WhatsApp, your interaction is encrypted in transit by WhatsApp/Meta in accordance with their standard end-to-end encryption protocols. We use WhatsApp purely for technical consultations and project progress reports.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#A855F7]">6.</span> Data Security & Retention
            </h2>
            <p>
              We implement industry-standard encryption protocols and access controls to prevent unauthorized access, alteration, or disclosure of your project blueprints and personal contact information. Project documentation is retained solely for warranty records and building audit compliance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#A855F7]">7.</span> Contacting Our Data Grievance Desk
            </h2>
            <p>
              If you have any questions regarding your personal information, or wish to request data deletion following completion of your project, you may write to our compliance officer:
            </p>
            <div className="p-4 bg-[#120E22] rounded-xl border border-white/10 space-y-1 text-xs text-zinc-400">
              <p><strong className="text-white">Email:</strong> {siteConfig.contact.email}</p>
              <p><strong className="text-white">Phone:</strong> {siteConfig.contact.phonePrimary}</p>
              <p><strong className="text-white">Postal Address:</strong> {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} — {siteConfig.contact.address.pincode}</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
