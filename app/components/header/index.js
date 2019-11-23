import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import styles from './style'

class Header extends PureComponent {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Link7</Text>
      </View>
    )
  }
}

export default Header
