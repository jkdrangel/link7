import React from 'react'
import {
  View, Text,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import styles from './style'

const FilterBar = ({ amount }) => (
  <View style={[styles.bar, styles.row]}>
    <Text style={styles.description}>
      { `${amount} produtos encontrados` }
    </Text>
    <View style={styles.row}>
      <Text style={styles.filter}>
          Filtrar
      </Text>
      <FontAwesome name="angle-down" size={20} color="#cac8c5" />
    </View>
  </View>
)

FilterBar.propTypes = {
  amount: PropTypes.number.isRequired,
}

export default FilterBar
