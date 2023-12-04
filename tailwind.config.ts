import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      sans:	'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      onest: ['Onest', 'system-ui'],
      inter: ['var(--font-inter)'],
    },
    colors: {
      'primary': 'rgb(220, 244, 88)',
      'secondary': 'rgb(51, 51, 49)',
      'tertiary': 'rgb(143, 143, 143)',
      'dark': 'rgb(13, 13, 13)',
      'light': 'rgb(255, 255, 255)',
      'info': 'rgb(69, 120, 187)',
    }
  },
  plugins: [],
}
export default config
