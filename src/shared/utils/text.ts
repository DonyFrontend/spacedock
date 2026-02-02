export const stripHtml = (value: string) =>
  value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

export const truncate = (value: string, maxLength = 180) =>
  value.length > maxLength ? `${value.slice(0, maxLength - 1)}…` : value;
