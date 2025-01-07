export const formatPhoneNumber = (str: string) => {
  // Remove all non-digits
  const cleaned = str.replace(/\D/g, '');
  // Format as (XXX) XXX-XXXX
  return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};
