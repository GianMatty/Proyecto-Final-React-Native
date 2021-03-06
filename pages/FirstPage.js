// React Native Navigation Drawer – Example using Latest Navigation Version
// https://aboutreact.com/react-native-navigation-drawer

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 6,
            }}>
            Giancarlo Matias Mauricio
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Proyecto Final de React Native
          </Text>
          <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Ir a Geolocalizacion"
          />
          <Text></Text>
          <Button
            onPress={() => navigation.navigate('ThirdPage')}
            title="Ir a AsincStorage"
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
