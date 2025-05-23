import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatCurrency(value: string, locale?: string, currency?: string) {
  const number = parseFloat(value);
  if (isNaN(number)) return value;

  // Fallbacks if locale or currency is not provided
  const userLocale = locale || navigator?.language || 'en-US';

  // Example mapping based on locale; expand as needed
  const currencyMap: Record<string, string> = {
    'en-US': 'USD',
    'en-GB': 'GBP',
    'de-DE': 'EUR',
    'fr-FR': 'EUR',
    'ja-JP': 'JPY',
    'en-GH': 'GHS', // Ghana
  };

  const resolvedCurrency = currency || currencyMap[userLocale] || 'USD';

  return new Intl.NumberFormat(userLocale, {
    style: 'currency',
    currency: resolvedCurrency,
  }).format(number);
}
