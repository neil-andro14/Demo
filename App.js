/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';
import Navigationbar from './src/screens/Navigationbar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import CompanyCodeScreen from './src/screens/CompanyCode';
import HomeScreen from './src/screens/HomeScreen';

const StackNavi = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavi.Navigator screenOptions={{headerShown: false}}>
        <StackNavi.Screen
          name="CompanyCode"
          component={CompanyCodeScreen}
          options={{title: 'Company Code Screena'}}
        />

        <StackNavi.Screen name="HomeScreen" component={HomeScreen} />
      </StackNavi.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
