import React from 'react';
import {Text, SafeAreaView, StatusBar} from 'react-native';
import Navigationbar from './Navigationbar';
import myStyles from '../css/myStyles';

function ContentDetails({navigation, route}) {
  const {screentitle} = route.params;
  return (
    <SafeAreaView style={myStyles.container}>
      <StatusBar style="auto" />
      {console.log('first', screentitle)}
      <Navigationbar name={screentitle} />
    </SafeAreaView>
  );
}

export default ContentDetails;
