import {View, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import React from 'react';
import myStyles from '../../css/myStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={myStyles.container}>
      <StatusBar style="auto" />

      <Text>DashboardScreen</Text>
      <Icon name="map-marker-alt" size={30} color="black"></Icon>
    </SafeAreaView>
  );
};

export default DashboardScreen;
