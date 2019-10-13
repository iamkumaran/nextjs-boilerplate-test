const withOffline = require('next-offline')
const withSass = require('@zeit/next-sass')

const nextConfig = {}

module.exports = withSass(withOffline(nextConfig))
// module.exports = withSass()