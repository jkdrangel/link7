import React from 'react'
import { View } from 'react-native'
import Home from './app/screens/Home'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}
