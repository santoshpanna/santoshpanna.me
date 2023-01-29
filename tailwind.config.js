module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
    "./src/assets/lotties/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-nunito)', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        'primary':  'var(--base-color)',
        'primary-light':  'var(--base-color-light)',
        'primary-dark':  'var(--base-color-dark)',
    
      },
    },
  },
  plugins: [],
}