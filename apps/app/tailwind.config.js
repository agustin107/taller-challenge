const ui = require('@taller-challenge/ui/tailwind')

module.exports = {
  presets: [ui],
  // `ui.content` includes a path to the components that are using tailwind in @acme/ui
  content: ui.content.concat([
    './src/**/*.{js,ts,jsx,tsx}',
  ]),
}
