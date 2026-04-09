// Design System Tokens - Cupertino-inspired minimalist aesthetic

export const colors = {
  // Primary palette - Professional blue for CTAs and accents
  primary: '#0071E3', // Apple blue
  primary_dark: '#0051BA',
  primary_light: '#34C759',

  // Neutrals - Professional grays (with warm beige tones)
  neutral_0: '#FFFBF5', // Cream beige (was #FFFFFF)
  neutral_50: '#FFFEF7', // Light beige (was #F9F9F9)
  neutral_100: '#FBF8F3', // Warm neutral (was #F5F5F7)
  neutral_200: '#F5F0E8', // Light warmth (was #EBEBF0)
  neutral_300: '#D2D2D7',
  neutral_400: '#A1A1A6',
  neutral_500: '#86868B',
  neutral_600: '#666666',
  neutral_700: '#424245',
  neutral_800: '#1D1D1F',
  neutral_900: '#000000',

  // Semantic colors
  text_primary: '#1D1D1F',
  text_secondary: '#86868B',
  text_tertiary: '#A1A1A6',
  text_inverse: '#FFFFFF',

  background_primary: '#FFFBF5', // Cream beige (was #FFFFFF)
  background_secondary: '#FFFEF7', // Light beige (was #F5F5F7)
  background_tertiary: '#FBF8F3', // Warm neutral (was #EBEBF0)

  border: '#D2D2D7',
  border_light: '#EBEBF0',

  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  info: '#0071E3',
};

export const typography = {
  // Font family - System fonts for performance and consistency
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    mono: '"SF Mono", Monaco, "Courier New", monospace',
  },

  // Font sizes (in pixels)
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 40,
    '6xl': 48,
    '7xl': 56,
    '8xl': 64,
  },

  // Font weights
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.6,
    loose: 1.8,
  },
};

export const spacing = {
  // 8px base unit scale
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
};

export const breakpoints = {
  mobile: 320,
  mobileLg: 480,
  tablet: 640,
  tabletLg: 1024,
  desktop: 1280,
  desktopLg: 1536,
};

export const shadows = {
  none: 'none',
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
};

export const borderRadius = {
  none: 0,
  sm: 4,
  base: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

export const transitions = {
  fast: '150ms ease-in-out',
  base: '200ms ease-in-out',
  slow: '300ms ease-in-out',
};
