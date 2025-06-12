// EmailJS Configuration
// Updated with actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS public key
  PUBLIC_KEY: "SbMC9E1aTxGcM1FYh",
  
  // Your EmailJS service ID
  SERVICE_ID: "service_81h6v55",
  
  // Template IDs
  TEMPLATES: {
    CONTACT_FORM: "template_j9skcyc", // Contact form template ID
    NEWSLETTER: "template_aeuz7et" // Newsletter template ID
  },
  
  // Email addresses
  EMAILS: {
    FEEDBACK: "abdullahr797@gmail.com", // Your feedback email
    STORE: "raza7590842@gmail.com" // Store contact email
  },
  
  // Store information
  STORE_INFO: {
    NAME: "HA Super Store",
    LOCATION: "Chak No 297 JB, Gojra, Pakistan",
    PHONE: "+92 331 7590842",
    WHATSAPP: "923317590842"
  }
};

// Helper function to get timestamp in Pakistan timezone
export const getPakistanTimestamp = () => {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Karachi',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Contact form template parameters
export const getContactFormParams = (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  return {
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
    to_email: EMAILJS_CONFIG.EMAILS.FEEDBACK,
    store_name: EMAILJS_CONFIG.STORE_INFO.NAME,
    timestamp: getPakistanTimestamp()
  };
};

// Newsletter subscription template parameters
export const getNewsletterParams = (email: string) => {
  return {
    subscriber_email: email,
    to_email: EMAILJS_CONFIG.EMAILS.FEEDBACK,
    store_name: EMAILJS_CONFIG.STORE_INFO.NAME,
    subscription_date: getPakistanTimestamp()
  };
}; 