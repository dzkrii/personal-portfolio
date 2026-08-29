export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

export type LocalizedText = Record<Locale, string>;
