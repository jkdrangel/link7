import React, { useState, useEffect } from 'react'
import {
  View, FlatList, Modal, TextInput,
} from 'react-native'
import WebView from 'react-native-webview'
import { getProducts } from '../../services/api'
import CardItem from '../../components/card-item'
import Header from '../../components/header'
import styles from './styles'
import FilterBar from '../../components/filter-bar'

const App = () => {
  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState('')
  const [query, setQuery] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!loading) {
      getProducts(query).then((res) => setProducts(res))
      setLoading(true)
    }
    if (modalVisible !== !!selected) {
      setModalVisible(!!selected)
    }
  })
  return (
    <View>
      <Header>
        <TextInput
          style={styles.textInput}
          autoFocus
          onSubmitEditing={(evt) => { setQuery(evt.nativeEvent.text); setLoading(false) }}
        />
      </Header>
      <FilterBar amount={products.length} />
      <FlatList
        data={products}
        extraData={query}
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
