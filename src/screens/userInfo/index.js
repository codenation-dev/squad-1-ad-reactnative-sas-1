/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const userInfo = () => {
  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.fotoPerfil}
          source={{
            uri:
              'https://avatars3.githubusercontent.com/u/54677103?s=400&u=b6e4e11c6718162d380a34d127626d0ce775414a&v=4',
          }}
        />
        <Text style={styles.titulo}> Ahmad Forhat </Text>
        <Text style={styles.text}> ahmad.forhat@gmail.com </Text>
      </View>
      <View style={styles.body}>
        <Image
          style={styles.code}
          source={{
            uri:
              'https://seeklogo.com/images/Q/qr-code-logo-27ADB92152-seeklogo.com.png',
          }}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.singOut}>
          <Text style={styles.link}>Sing Out</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://sistemas.mre.gov.br/kitweb/datafiles/Houston/pt-br/image/Wear-Camera-Remote.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 200,
    backgroundColor: '#006099',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fotoPerfil: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginBottom: 15,
  },
  titulo: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: '#ffff',
    fontSize: 12,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  code: {
    marginTop: 30,
    marginBottom: 30,
    height: 140,
    width: 140,
  },
  singOut: {
    marginLeft: 15,
  },
  link: {
    fontSize: 14,
    color: '#006099',
  },
  tinyLogo: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default userInfo;
