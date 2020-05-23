import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  developer: {
    paddingTop: 70,
    display: 'flex',
    paddingRight: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 300,
    backgroundColor: '#006099',
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  link: {
    color: 'white',
    fontSize: 18,
    paddingBottom: 5,
  },
  codeContainer: {
    paddingTop: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 100,
  },
  infoContainer: {
    paddingBottom: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 10,
  },
  counter: {
    color: 'white',
  },
});

export default styles;