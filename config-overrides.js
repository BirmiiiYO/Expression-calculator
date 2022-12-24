// eslint-disable-next-line import/no-extraneous-dependencies
const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets': 'src/assets',
    '@constants': 'src/constants',
    '@layout': 'src/Layout',
    '@pages': 'src/pages',
    '@utilities': 'src/utilities',
    '@styles': 'src/styles',
    '@src': 'src',
  })(config)

  return config
}
