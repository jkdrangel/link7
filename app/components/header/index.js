import React, { useState } from 'react'
import {
  View, Text, TextInput, TouchableHighlight,
} from 'react-native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import styles from './style'

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false)
  return (
    <View style={styles.header}>
      {!openSearch && <Text style={styles.title}>Link7</Text>}
      {openSearch
      && (
      <TouchableHighlight style={styles.icon} onPress={() => setOpenSearch(false)}>
        <FontAwesome5 name="arrow-left" size={28} color="white" />
      </TouchableHighlight>
      )}
      {openSearch && <TextInput />}
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

export default Header
