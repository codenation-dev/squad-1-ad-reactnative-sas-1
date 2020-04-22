import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Linking,
  Button,
} from 'react-native';
import {useSelector} from 'react-redux';

const userAroundScreen = ({navigation}) => {
  const developersAround = useSelector(state => state.developersAround);

  const item = developersAround.items;

  let newList = Object.keys(item).map(elem => {
    let login = item[elem].login;
    let image = item[elem].avatar_url;
    let key = item[elem].id;
    let url = item[elem].html_url;
    let obj = {
      login: login,
      image: image,
      key: key,
      url: url,
    };
    return obj;
  });

  return (
    <ScrollView>
      {Object.keys(item).map(elem => {
        let login = item[elem].login;
        let image = {uri: item[elem].avatar_url, width: 150, height: 150};
        let key = item[elem].id;
        let url = item[elem].html_url;
        return (
          <View key={key}>
            <Image source={image} />
            <View>
              <Text>{login}</Text>
              <Button
                title="My Page"
                onPress={() => Linking.openURL(url)}
                color="#000"
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default userAroundScreen;
