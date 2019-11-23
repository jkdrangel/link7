import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { getProductsList } from '../../services/api'
import CardItem from '../../components/card-item'
import Header from '../../components/header'

const App = () => {
  const [products, setProducts] = useState([])
  const [initialLoading, setLoading] = useState(false)

  useEffect(() => {
    if (!initialLoading) {
      getProductsList().then((res) => setProducts(res))
      setLoading(true)
    }
  })
  return (
    <View>
      <Header />
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default App
