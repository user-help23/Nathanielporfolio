// WhatsApp Integration Utility
export const whatsappConfig = {
  phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+1234567890',
  businessName: 'Nathaniel Patrick',
};

export const sendWhatsappMessage = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = whatsappConfig.phoneNumber.replace(/\D/g, '');
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    '_blank',
    'noopener,noreferrer'
  );
};

export const getWhatsappLink = (message: string = '') => {
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = whatsappConfig.phoneNumber.replace(/\D/g, '');
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
