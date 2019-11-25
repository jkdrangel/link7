import React, { useState } from 'react'
import {
  View, Text, TouchableHighlight,
} from 'react-native'
import {
  MaterialCommunityIcons, AntDesign,
} from '@expo/vector-icons'
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
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableHighlight>
      )}
      {openSearch && children}
      <View style={styles.row}>
        {!openSearch
        && (
        <TouchableHighlight style={styles.icon} onPress={() => setOpenSearch(true)}>
          <AntDesign name="search1" size={24} color="white" />
        </TouchableHighlight>
        )}
        {openSearch
      && (
      <TouchableHighlight style={styles.icon} onPress={() => setOpenSearch(false)}>
        <AntDesign name="close" size={24} color="white" />
      </TouchableHighlight>
      )}
        <MaterialCommunityIcons style={styles.microphone} name="microphone" size={24} color="white" />
      </View>
    </View>
  )
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Header
