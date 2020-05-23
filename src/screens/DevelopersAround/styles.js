import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  devsCountContainer: {
    display: 'flex',
    margin: 20,
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: 'bold',
  },
  counter: {
    color: 'red',
  },
  avatarContainer: {
    marginTop: 0,
    marginBottom: 8,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
  avatarName: {
    marginLeft: 25,
    fontSize: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  page: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionText: {
    color: '#006099',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default styles;
