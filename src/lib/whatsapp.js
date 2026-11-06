import { siteConfig } from "@/config/siteConfig";

/**
 * Generates a standard WhatsApp click-to-chat URL with prefilled message
 * @param {string} customMessage 
 * @returns {string} wa.me URL
 */
export function getWhatsAppUrl(customMessage = "") {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const defaultText = `Hello Local Bharat, I would like assistance with discovering local businesses or requesting a custom quotation.`;
  const text = customMessage ? encodeURIComponent(customMessage.trim()) : encodeURIComponent(defaultText);
  return `https://wa.me/${cleanNumber}?text=${text}`;
}

/**
 * Generates WhatsApp URL for a specific product enquiry
 * @param {object} product 
 * @param {string} currentUrl (optional)
 * @returns {string}
 */
export function getProductWhatsAppUrl(product, currentUrl = "") {
  if (!product) return getWhatsAppUrl();
  const urlPart = currentUrl ? `\nListing Link: ${currentUrl}` : "";
  const message = `Hello Local Bharat, I am interested in ${product.name} (by ${product.vendor || "Local Vendor"}). Please share quotation and delivery details.${urlPart}`;
  return getWhatsAppUrl(message);
}

/**
 * Generates WhatsApp URL for custom project enquiry
 * @param {string} projectTopic 
 * @returns {string}
 */
export function getProjectWhatsAppUrl(projectTopic = "") {
  const message = projectTopic
    ? `Hello Local Bharat, I would like to discuss a custom requirement: ${projectTopic}.`
    : `Hello Local Bharat, I have a custom project requirement and would like quotation assistance.`;
  return getWhatsAppUrl(message);
}
