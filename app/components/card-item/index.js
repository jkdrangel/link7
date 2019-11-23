import React, { PureComponent } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'

class CardItem extends PureComponent {
  render() {
    const { item: { picture, title, price: { current, installment, nonPromotional } } } = this.props
    return (
      <View style={styles.card}>
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
}

export default CardItem
