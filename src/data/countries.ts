// Country / region list with international dial codes.
// Curated for the site's primary B2B markets (research peptides).
// Order = how the dropdown is shown (alphabetical within regions).
export type CountryOption = {
  code: string;        // ISO 3166-1 alpha-2
  name: string;        // display name (English)
  dialCode: string;    // international call prefix, e.g. "+1"
  flag: string;        // emoji flag
};

export const COUNTRIES: CountryOption[] = [
  // North America
  { code: 'US', name: 'United States',     dialCode: '+1',  flag: '🇺🇸' },
  { code: 'CA', name: 'Canada',            dialCode: '+1',  flag: '🇨🇦' },
  { code: 'MX', name: 'Mexico',            dialCode: '+52', flag: '🇲🇽' },
  // South America
  { code: 'BR', name: 'Brazil',            dialCode: '+55', flag: '🇧🇷' },
  { code: 'AR', name: 'Argentina',         dialCode: '+54', flag: '🇦🇷' },
  { code: 'CL', name: 'Chile',             dialCode: '+56', flag: '🇨🇱' },
  { code: 'CO', name: 'Colombia',          dialCode: '+57', flag: '🇨🇴' },
  { code: 'PE', name: 'Peru',              dialCode: '+51', flag: '🇵🇪' },
  // Europe (Western + Central)
  { code: 'GB', name: 'United Kingdom',    dialCode: '+44', flag: '🇬🇧' },
  { code: 'IE', name: 'Ireland',           dialCode: '+353', flag: '🇮🇪' },
  { code: 'FR', name: 'France',            dialCode: '+33', flag: '🇫🇷' },
  { code: 'DE', name: 'Germany',           dialCode: '+49', flag: '🇩🇪' },
  { code: 'NL', name: 'Netherlands',       dialCode: '+31', flag: '🇳🇱' },
  { code: 'BE', name: 'Belgium',           dialCode: '+32', flag: '🇧🇪' },
  { code: 'ES', name: 'Spain',             dialCode: '+34', flag: '🇪🇸' },
  { code: 'PT', name: 'Portugal',          dialCode: '+351', flag: '🇵🇹' },
  { code: 'IT', name: 'Italy',             dialCode: '+39', flag: '🇮🇹' },
  { code: 'AT', name: 'Austria',           dialCode: '+43', flag: '🇦🇹' },
  { code: 'CH', name: 'Switzerland',       dialCode: '+41', flag: '🇨🇭' },
  { code: 'LU', name: 'Luxembourg',        dialCode: '+352', flag: '🇱🇺' },
  // Europe (Nordic)
  { code: 'SE', name: 'Sweden',            dialCode: '+46', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway',            dialCode: '+47', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark',           dialCode: '+45', flag: '🇩🇰' },
  { code: 'FI', name: 'Finland',           dialCode: '+358', flag: '🇫🇮' },
  { code: 'IS', name: 'Iceland',           dialCode: '+354', flag: '🇮🇸' },
  // Europe (Eastern + Mediterranean)
  { code: 'PL', name: 'Poland',            dialCode: '+48', flag: '🇵🇱' },
  { code: 'CZ', name: 'Czechia',           dialCode: '+420', flag: '🇨🇿' },
  { code: 'SK', name: 'Slovakia',          dialCode: '+421', flag: '🇸🇰' },
  { code: 'HU', name: 'Hungary',           dialCode: '+36', flag: '🇭🇺' },
  { code: 'RO', name: 'Romania',           dialCode: '+40', flag: '🇷🇴' },
  { code: 'BG', name: 'Bulgaria',          dialCode: '+359', flag: '🇧🇬' },
  { code: 'GR', name: 'Greece',            dialCode: '+30', flag: '🇬🇷' },
  { code: 'TR', name: 'Türkiye',           dialCode: '+90', flag: '🇹🇷' },
  { code: 'RU', name: 'Russia',            dialCode: '+7',  flag: '🇷🇺' },
  { code: 'UA', name: 'Ukraine',           dialCode: '+380', flag: '🇺🇦' },
  // Asia (East)
  { code: 'CN', name: 'China',             dialCode: '+86', flag: '🇨🇳' },
  { code: 'HK', name: 'Hong Kong SAR',     dialCode: '+852', flag: '🇭🇰' },
  { code: 'TW', name: 'Taiwan',            dialCode: '+886', flag: '🇹🇼' },
  { code: 'JP', name: 'Japan',             dialCode: '+81', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea',       dialCode: '+82', flag: '🇰🇷' },
  { code: 'MN', name: 'Mongolia',          dialCode: '+976', flag: '🇲🇳' },
  // Asia (Southeast)
  { code: 'SG', name: 'Singapore',         dialCode: '+65', flag: '🇸🇬' },
  { code: 'MY', name: 'Malaysia',          dialCode: '+60', flag: '🇲🇾' },
  { code: 'TH', name: 'Thailand',          dialCode: '+66', flag: '🇹🇭' },
  { code: 'VN', name: 'Vietnam',           dialCode: '+84', flag: '🇻🇳' },
  { code: 'ID', name: 'Indonesia',         dialCode: '+62', flag: '🇮🇩' },
  { code: 'PH', name: 'Philippines',       dialCode: '+63', flag: '🇵🇭' },
  // Asia (South + Central + West)
  { code: 'IN', name: 'India',             dialCode: '+91', flag: '🇮🇳' },
  { code: 'PK', name: 'Pakistan',          dialCode: '+92', flag: '🇵🇰' },
  { code: 'BD', name: 'Bangladesh',        dialCode: '+880', flag: '🇧🇩' },
  { code: 'LK', name: 'Sri Lanka',         dialCode: '+94', flag: '🇱🇰' },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia',      dialCode: '+966', flag: '🇸🇦' },
  { code: 'IL', name: 'Israel',            dialCode: '+972', flag: '🇮🇱' },
  { code: 'QA', name: 'Qatar',             dialCode: '+974', flag: '🇶🇦' },
  { code: 'KW', name: 'Kuwait',            dialCode: '+965', flag: '🇰🇼' },
  { code: 'EG', name: 'Egypt',             dialCode: '+20', flag: '🇪🇬' },
  { code: 'ZA', name: 'South Africa',      dialCode: '+27', flag: '🇿🇦' },
  { code: 'NG', name: 'Nigeria',           dialCode: '+234', flag: '🇳🇬' },
  { code: 'KE', name: 'Kenya',             dialCode: '+254', flag: '🇰🇪' },
  { code: 'MA', name: 'Morocco',           dialCode: '+212', flag: '🇲🇦' },
  // Oceania
  { code: 'AU', name: 'Australia',         dialCode: '+61', flag: '🇦🇺' },
  { code: 'NZ', name: 'New Zealand',       dialCode: '+64', flag: '🇳🇿' },
];

// Lightweight index: ISO code → option.
export const COUNTRY_BY_CODE: Record<string, CountryOption> = Object.fromEntries(
  COUNTRIES.map((c) => [c.code, c]),
);
