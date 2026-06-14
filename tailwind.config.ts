import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#8B5CF6',
        accent: '#F59E0B',
        surface: '#1E293B',
        bg: '#0F172A',
        success: '#22C55E',
        danger: '#EF4444'
      },
      boxShadow: {
        glow: '0 20px 50px rgba(108, 99, 255, 0.18)',
        glass: '0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(15,23,42,0.4)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(108,99,255,0.2), transparent 40%), linear-gradient(180deg, rgba(15,23,42,0.9), #0f172a)'
      }
    }
  },
  plugins: [typography]
} satisfies Config;
