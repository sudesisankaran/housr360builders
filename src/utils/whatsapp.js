import { siteConfig } from '../config/siteConfig';

/**
 * Generates a clean, encoded wa.me URL for direct WhatsApp communication.
 * @param {string} message - Message text to pre-fill
 * @param {string} customNumber - Optional custom number override
 * @returns {string} wa.me URL
 */
export function getWhatsAppUrl(message = '', customNumber = null) {
  const number = customNumber || siteConfig.whatsapp.number;
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const finalMessage = message || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(finalMessage)}`;
}

/**
 * Contextual WhatsApp link for a specific service.
 * @param {string} serviceTitle 
 * @returns {string}
 */
export function getServiceWhatsAppUrl(serviceTitle) {
  const message = `Hello Housr 360 Builders, I am interested in your ${serviceTitle} service. Please share more details and consultation availability.`;
  return getWhatsAppUrl(message);
}

/**
 * Contextual WhatsApp link for a specific project.
 * @param {string} projectName 
 * @param {string} projectCategory 
 * @returns {string}
 */
export function getProjectWhatsAppUrl(projectName, projectCategory) {
  const message = `Hello Housr 360 Builders, I explored your ${projectCategory || ''} project "${projectName}" on your website and would like to discuss a similar project.`;
  return getWhatsAppUrl(message);
}

/**
 * Format form enquiry data for WhatsApp submission
 * @param {Object} formData 
 * @returns {string}
 */
export function formatEnquiryForWhatsApp(formData) {
  const lines = [
    `*NEW PROJECT ENQUIRY — HOUSR 360 BUILDERS*`,
    `──────────────────────────`,
    `*Full Name:* ${formData.fullName}`,
    `*Phone:* ${formData.phone}`,
    formData.email ? `*Email:* ${formData.email}` : null,
    `*Service Required:* ${formData.service}`,
    `*Location:* ${formData.location}`,
    formData.budget ? `*Approx Budget:* ${formData.budget}` : null,
    `*Preferred Contact:* ${formData.contactMethod || 'WhatsApp'}`,
    `*Project Details:*`,
    `"${formData.description}"`,
    `──────────────────────────`,
    `_Sent via Housr 360 Builders Online Portal_`
  ].filter(Boolean);

  return getWhatsAppUrl(lines.join('\n'));
}

/**
 * Convenience alias for EnquiryForm WhatsApp URL generation
 */
export function getEnquirySubmissionWhatsAppUrl(formData) {
  return formatEnquiryForWhatsApp(formData);
}


/**
 * Complete, formatted business contact card text for sharing
 */
export function getAllContactDetailsText() {
  return [
    `*HOUSR 360 BUILDERS — OFFICIAL CONTACT DETAILS*`,
    `──────────────────────────────`,
    `🏛 *Turnkey Construction | 2D/3D Elevations | Interiors*`,
    ``,
    `📞 *Contact Numbers:*`,
    `• Primary / WhatsApp: ${siteConfig.contact.phonePrimary}`,
    `• Office Line: ${siteConfig.contact.phoneSecondary}`,
    ``,
    `📧 *Official Email:*`,
    `${siteConfig.contact.email}`,
    ``,
    `📍 *Office Address:*`,
    `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} — ${siteConfig.contact.address.pincode}`,
    ``,
    `🗺 *Google Maps Location:*`,
    `${siteConfig.contact.address.googleMapsUrl}`,
    ``,
    `🌐 *Official Social Profiles:*`,
    `• Instagram: ${siteConfig.socials.instagram}`,
    `• YouTube: ${siteConfig.socials.youtube}`,
    `• Facebook: ${siteConfig.socials.facebook}`,
    ``,
    `⏰ *Office Hours:*`,
    `${siteConfig.contact.businessHours.weekdays}`,
    `${siteConfig.contact.businessHours.sunday}`,
    `──────────────────────────────`,
    `_Housr 360 Builders — Building Dreams. Creating Timeless Spaces._`
  ].join('\n');
}

/**
 * Generates an instant WhatsApp share link to broadcast all company contact details to any chat/contact
 */
export function getShareAllContactDetailsWhatsAppUrl() {
  const text = getAllContactDetailsText();
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
}
