/* eslint-disable react-hooks/exhaustive-deps */
import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';

const dataDevs = {
  array: [
    {
      nome: 'Ahmad Forhat',
      email: 'ahmad.forhat@gmailc.com',
      foto:
        'https://avatars3.githubusercontent.com/u/54677103?s=400&u=b6e4e11c6718162d380a34d127626d0ce775414a&v=4',
    },
    {
      nome: 'Maria Nathyelle',
      email: 'nathyellemonteiro19@gmail.com',
      foto:
        'https://avatars3.githubusercontent.com/u/18617063?s=400&u=16ccde40121050ab6c50da4ccfd40bc5e216450c&v=4',
    },
    {
      nome: 'wiliam lee',
      email: 'wiliam.lee@gmail.com',
      foto:
        'https://avatars0.githubusercontent.com/u/41973973?s=400&u=7a7c49c1d2a4b8f2ce7117e073bbe9a64579757c&v=4',
    },
  ],
};

const userInfo = () => {
  const list = data => {
    return data.array.map(element => {
      return (
        <>
          <View style={styles.container}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: element.foto,
              }}
            />
            <View style={styles.usuarioText}>
              <Text style={styles.titulo}>{element.nome}</Text>
              <Text style={styles.text}>{element.email}</Text>
            </View>
          </View>
          <View style={styles.linha} />
        </>
      );
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.subTitle}>
          Achamos{' '}
          <Text style={styles.highLighted}>{dataDevs.array.length} devs</Text>{' '}
          em sua região
        </Text>
      </View>
      <View>{list(dataDevs)}</View>
    </ScrollView>
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
