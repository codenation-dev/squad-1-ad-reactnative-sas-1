import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(197, 226, 238, 0.4)',
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 20,
    zIndex: 1,
    display: 'flex',
    alignItems: 'flex-end',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});

export default styles;
