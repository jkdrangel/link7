import React, { PureComponent } from 'react'
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'

class CardItem extends PureComponent {
  render() {
    const {
      item: { picture, title, price: { current, installment, nonPromotional } },
      onItemClick,
    } = this.props
    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={onItemClick}>
          <Image style={styles.cardImage} source={{ uri: picture }} />
          <Text style={styles.cardTitle}>
            {title}
          </Text>
          <Text style={styles.cardPrice}>
            {current}
            {nonPromotional && <Text style={styles.cardNonPromotional}>{nonPromotional}</Text>}
          </Text>
          {
            installment
        && (
        <Text style={styles.cardInstallment}>
          {installment}
        </Text>
        )
        }
        </TouchableOpacity>
      </View>
    )
  }
}

CardItem.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.shape({
      current: PropTypes.string.isRequired,
      nonPromotional: PropTypes.string,
      installment: PropTypes.string,
    }).isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    _link: PropTypes.string.isRequired,
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
}

export default CardItem
