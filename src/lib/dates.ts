export function formatDate(d: Date, lang: 'id' | 'en'): string {
  return new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-US', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(d);
}

export function toIsoUtc(d: Date): string {
  return d.toISOString();
}
