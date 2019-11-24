import React, { useState, useEffect } from 'react'
import {
  View, FlatList, Modal,
} from 'react-native'
import WebView from 'react-native-webview'
import { getProductsList } from '../../services/api'
import CardItem from '../../components/card-item'
import Header from '../../components/header'

const App = () => {
  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [initialLoading, setLoading] = useState(false)

  useEffect(() => {
    if (!initialLoading) {
      getProductsList().then((res) => setProducts(res))
      setLoading(true)
    }
    if (modalVisible !== !!selected) {
      setModalVisible(!!selected)
    }
  })
  return (
    <View>
      <Header />
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <CardItem
            onItemClick={() => { setSelected(item._link) }}
            item={item}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setSelected(null)
        }}
      >
        {!!selected && (
          <WebView
            source={{ uri: selected }}
          />
        )}
      </Modal>
    </View>
  )
}

export default App
