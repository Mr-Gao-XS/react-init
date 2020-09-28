const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')
const paths = require('react-scripts/config/paths')
paths.appBuild = path.join(path.dirname(paths.appBuild), 'docs')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  addWebpackAlias({
    '@': resolve('src'),
    _c: resolve('src/components')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    style: 'css'
  })
)
