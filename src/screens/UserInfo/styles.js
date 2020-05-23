import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  developer: {
    paddingTop: 70,
    display: 'flex',
    paddingRight: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 250,
    backgroundColor: '#006099',
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  link: {
    color: 'white',
    fontSize: 18,
    paddingBottom: 36,
  },
  codeContainer: {
    paddingTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  actionContainer: {
    marginTop: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionText: {
    color: '#006099',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});

export default styles;
