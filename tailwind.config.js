function RGB(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

function HSL(variableName, lightness) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${lightness}, ${opacityValue})`
    }
    return `hsl(var(${variableName}, ${lightness}))`
  }
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  important: true,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      lobxs: HSL('--lobxs-hue-saturation', 'var(--lobxs-lightness)'),
      'lobxs-light': HSL('--lobxs-hue-saturation', 'var(--lobxs-light)'),
      'lobxs-lighter': HSL('--lobxs-hue-saturation', 'var(--lobxs-lighter)'),
      'lobxs-dark': HSL('--lobxs-hue-saturation', 'var(--lobxs-dark)'),
      'lobxs-darker': HSL('--lobxs-hue-saturation', 'var(--lobxs-darker)'),
      'lobxs-contrast': 'rgb(var(--lobxs-contrast))',
      neutral: RGB('--neutral'),
      'neutral-100': RGB('--neutral-100'),
      'neutral-200': RGB('--neutral-200'),
      'neutral-300': RGB('--neutral-300'),
      'neutral-contrast': RGB('--neutral-contrast'),
      'neutral-contrast-light': RGB('--neutral-contrast-light'),
      'neutral-contrast-alt': RGB('--neutral-contrast-alt'),
      'neutral-contrast-disabled': RGB('--neutral-contrast-disabled'),
      'neutral-contrast-accessible': RGB('--neutral-contrast-accessible'),
      alert: RGB('--alert'),
      'alert-contrast': RGB('--alert-contrast'),
      warn: RGB('--warn'),
      'warn-contrast': RGB('--warn-contrast'),
      success: RGB('--success'),
      'success-contrast': RGB('--success-contrast'),
      link: RGB('--link')
    },
    fontFamily: {
      sans: 'var(--sans)',
      serif: 'var(--serif)'
    },
    extend: {
      borderRadius: {
        'lobxs-sm': 'var(--lobxs-sm)',
        'lobxs-md': 'var(--lobxs-md)',
        'lobxs-lg': 'var(--lobxs-lg)',
        'lobxs-fixed': 'var(--lobxs-fixed)'
      },
      spacing: {
        app: 'var(--app)',
        'button-fixed': 'var(--button-fixed)',
        header: '4.5rem'
      },
      backgroundImage: {
        forest: "url('../assets/img/tree-smudge.png')",
        valley: "url('../assets/img/valley.png')",
        wolfPack: "url('../assets/img/wolf-pack.jpg')",
        heroSmudge: "url('../assets/img/lobxs-hero-bottom.png')",
        bottomSmudge: "url('../assets/img/bottom-smudge.png')",
        trees: "url('../assets/img/bg-trees.png')"
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },

  plugins: [require('@tailwindcss/line-clamp')]
}
