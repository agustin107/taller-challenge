const path = require('path')

module.exports = {
  // `content` is replaced instead of extended, so this line has to be added in
  // the `content` of each app' tailwind.config.js
  content: [path.join(path.dirname(require.resolve('@taller-challenge/ui')), '**/*.{js,ts,jsx,tsx}')],
  theme: {
    extend: {},
  },
}
