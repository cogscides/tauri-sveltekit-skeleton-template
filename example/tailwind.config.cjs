const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    require('path').join(
      require.resolve('@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    ),
  ],

  darkMode: 'class', // adds .dark to the body

  theme: {
    extend: {},
  },

  plugins: [
    require('@skeletonlabs/skeleton/tailwind/theme.cjs'),
    require('@tailwindcss/forms'),
  ],
}

module.exports = config
