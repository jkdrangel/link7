import React, { PureComponent } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  container: {
  },
}

class CardItem extends PureComponent {
  render() {
    const { item: { picture, title, price: { current, installment, nonPromotional } } } = this.props
    return (
      <View style={styles.container}>
        <Image source={{ uri: picture }} />
        <Text>
          {title}
        </Text>
        <Text>
          {current}
          {nonPromotional && <Text>{nonPromotional}</Text>}
        </Text>
        {
            installment
        && (
        <Text>
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
