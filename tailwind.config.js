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
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
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
      'neutral-400': RGB('--neutral-400'),
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
      link: '#16b7de',
      blue: '#16b7de'
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
        forest: "url('/img/tree-smudge.png')",
        valley: "url('/img/valley.png')",
        wolfPack: "url('/img/wolf-pack.png')",
        heroSmudge: "url('/img/lobxs-hero-bottom.png')",
        bottomSmudge: "url('/img/bottom-smudge.png')",
        trees: "url('/img/bg-trees.png')",
        mountains: "url('/img/mountains.png')",
        whiteSmudge: "url('/img/white-smudge.png')",
        topWhiteSmudge: "url('/img/top-white-smudge.png')",
        lobxsFooter: "url('/img/lobxs-footer.png')",
        wolfPackHero: "url('/img/wolf-pack-hero.png')",
        bgBottomSmudge: "url('/img/bg-smudge-bottom.png')",
        heroBottom: "url('/img/hero-bottom.png')",
        aboutBanner: "url('/img/about-banner.png')",
        nuestroEjemplo: "url('/img/nuestro-ejemplo.png')",
        sleepingWolf: "url('/img/sleeping-wolf.png')",
        academyBanner: "url('/img/academy-banner.png')",
        academyBackground: "url('/img/academy-background.jpeg')",
        trailTechniqueBackground: "url('/img/trail-technique-bg.jpeg')"
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },

  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: 'd-',
    themes: [
      {
        mytheme: {
          neutral: '#ededed' // have to do this because dasiy seems to be broken.
        }
      }
    ]
  }
}
