import { siteConfig } from '../config/siteConfig';

/**
 * Generates a clean, encoded wa.me URL for WhatsApp communication.
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
