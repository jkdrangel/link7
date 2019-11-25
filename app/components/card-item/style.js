import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

const styles = {
  card: {
    width: (width) / 2,
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  cardImage: {
    width: (width - 32) / 2,
    aspectRatio: 195 / 140,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#13a5a4',
  },
  cardPrice: {
    fontSize: 18,
    color: '#f97225',
  },
  cardNonPromotional: {
    textDecorationLine: 'line-through',
    fontSize: 16,
    color: '#d0cfcd',
  },
  cardInstallment: {
    fontSize: 16,
    color: '#86868a',
  },
}

export default styles
