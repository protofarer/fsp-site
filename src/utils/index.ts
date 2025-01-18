export const stripPhoneNumber = (str: string) => {
  return str.replace(/\D/g, '');
};

export const displayPhoneNumber = (str: string) => {
  // Remove all non-digits
  const cleaned = str.replace(/\D/g, '');
  // Format as (XXX) XXX-XXXX
  return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

export const slugify = (str: string): string => {
  return (
    str
      // Convert to lowercase
      .toLowerCase()
      // Replace spaces and underscores with hyphens
      .replace(/[\s_]+/g, '-')
      // Remove accents/diacritics using Unicode normalization
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      // Remove all characters that are not letters, numbers, or hyphens
      .replace(/[^a-z0-9-]/g, '')
      // Remove leading/trailing hyphens
      .replace(/^-+|-+$/g, '')
      // Replace multiple consecutive hyphens with a single hyphen
      .replace(/-+/g, '-')
  );
};
