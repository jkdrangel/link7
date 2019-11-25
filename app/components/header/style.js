import globalStyles from '../../styles/globalStyles'

const styles = {
  ...globalStyles,
  header: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    height: 80,
    marginBottom: 20,
    paddingTop: 40,
    backgroundColor: '#fd0061',
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
  icon: {
    paddingHorizontal: 16,
  },
  microphone: {
    marginTop: -6,
    padding: 6,
    marginHorizontal: 4,
    borderRadius: 15,
    height: 36,
    width: 36,
    backgroundColor: '#ff0071',
  },
}

export default styles
