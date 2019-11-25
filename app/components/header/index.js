import React, { useState } from 'react'
import {
  View, Text, TouchableHighlight,
} from 'react-native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import styles from './style'

const Header = ({ children }) => {
  const [openSearch, setOpenSearch] = useState(false)
  return (
    <View style={[styles.header, styles.row]}>
      {!openSearch && <Text style={styles.title}>Link7</Text>}
      {openSearch
      && (
      <TouchableHighlight style={styles.icon} onPress={() => setOpenSearch(false)}>
        <FontAwesome5 name="arrow-left" size={28} color="white" />
      </TouchableHighlight>
      )}
      {openSearch && children}
      <View style={styles.row}>
        {!openSearch
        && (
        <TouchableHighlight style={styles.icon} onPress={() => setOpenSearch(true)}>
          <FontAwesome name="search" size={28} color="white" />
        </TouchableHighlight>
        )}
        {openSearch
      && (
      <TouchableHighlight style={styles.icon} onPress={() => setOpenSearch(false)}>
        <FontAwesome5 name="times" size={28} color="white" />
      </TouchableHighlight>
      )}
        <FontAwesome style={[styles.icon, styles.microphone]} name="microphone" size={28} color="white" />
      </View>
    </View>
  )
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Header
