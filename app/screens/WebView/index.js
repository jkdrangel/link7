import React from 'react'
import { WebView } from 'react-native-webview'
import PropTypes from 'prop-types'

const WebComponent = ({ link }) => (
  <WebView source={{ uri: link }} />
)

WebComponent.propTypes = {
  link: PropTypes.string.isRequired,
}

export default WebComponent
