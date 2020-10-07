// React Native Navigation Drawer – Example using Latest Navigation Version
// https://aboutreact.com/react-native-navigation-drawer

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const ThirdPage = ({navigation}) => {
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
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is Third Page under Third Page Option
          </Text>
          <Button
            onPress={() => navigation.navigate('FirstPage')}
            title="Go to First Page"
          />
          <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Go to Second Page"
          />
        </View>
        <Text style={{fontSize: 18, textAlign: 'center', color: 'grey'}}>
          React Navigate Drawer
        </Text>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
         New Horizons Peru 2020
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;