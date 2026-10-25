/**
 * Fruitella Order & Communication Configuration
 * ============================================
 * Official restaurant configuration for customer order submissions.
 */

export interface WhatsAppOrderConfig {
  /** Normalized international WhatsApp phone number (e.g., '201037221133') */
  phoneNumber: string;
  /** Display phone number for Egyptian local presentation */
  displayPhoneNumber: string;
  /** Business display name in Arabic */
  businessNameAr: string;
  /** Business display name in English */
  businessNameEn: string;
}

/**
 * Official Fruitella WhatsApp Order Configuration.
 * Derived from verified business details (El Obour branch, Hayah Town Mall).
 */
export const WHATSAPP_ORDER_CONFIG: WhatsAppOrderConfig = {
  phoneNumber: '201037221133',
  displayPhoneNumber: '01037221133',
  businessNameAr: 'فروتيلا • Fruitella',
  businessNameEn: 'Fruitella'
};

/**
 * Normalizes an Egyptian phone number to international WhatsApp format (without + or spaces).
 * Examples:
 *   '01037221133' -> '201037221133'
 *   '+201037221133' -> '201037221133'
 *   '201037221133' -> '201037221133'
 */
export function normalizeWhatsAppNumber(rawNumber: string): string {
  if (!rawNumber) return WHATSAPP_ORDER_CONFIG.phoneNumber;

  // Remove non-digit characters
  const digitsOnly = rawNumber.replace(/\D/g, '');

  // If starts with Egypt country code '20'
  if (digitsOnly.startsWith('20') && digitsOnly.length >= 12) {
    return digitsOnly;
  }

  // If local Egyptian number starting with '01'
  if (digitsOnly.startsWith('01') && digitsOnly.length === 11) {
    return '2' + digitsOnly;
  }

  // If local Egyptian number starting with '1' (e.g. 1037221133)
  if (digitsOnly.startsWith('1') && digitsOnly.length === 10) {
    return '20' + digitsOnly;
  }

  return digitsOnly || WHATSAPP_ORDER_CONFIG.phoneNumber;
}
