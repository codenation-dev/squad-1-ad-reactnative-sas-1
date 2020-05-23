import React from 'react';
import {View, Image} from 'react-native';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {useDispatch} from 'react-redux';
import styles from './styles';

import {signInRequest} from '../../store/modules/auth/actions';
import ButtonComponent from '../../components/Button';

const LoginScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <ButtonComponent
        title="Login with Github"
        onPress={() => dispatch(signInRequest())}
        icon={faGithub}
      />
    </View>
  );
};

export default LoginScreen;
