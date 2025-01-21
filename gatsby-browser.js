const React = require('react')
const Layout = require('./src/components/Layout').default
const css = require('./src/assets/css/main.css')

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
