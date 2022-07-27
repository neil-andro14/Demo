import React, {useEffect, useState} from 'react';
import globalStorage from '../constant/globalStorage';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Navigationbar from './Navigationbar';
import myStyles from '../css/myStyles';
import COLORS from '../css/colors';
import {getStoredData} from '../constant/globalStorage';
import ContantMessage from '../constant/Messages';
import WebURL from '../API/WebURL';
import APICallServices from '../API/APICallServices';

function HomeScreen({navigation}) {
  // console.log('first', globalStorage.getStoredData('nilesh'));
  const [jsonData, setjsonData] = useState('');

  useEffect(() => {
    callAPI();
  }, []);

  function callAPI() {
    fetch(WebURL.allPostURL, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        setjsonData(json);
      });
  }
  const onPressListItem = item => {
    console.log(item.title);
    setSelectedItem(item.title);
    showAlert(item.title);
    //ToastAndroid.show(item, ToastAndroid.SHORT);
  };

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity
      onPress={onPress}
      style={[backgroundColor, {padding: 10, margin: 10}]}>
      <Text style={[textColor, {fontSize: 18, fontWeight: 'bold'}]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
  const [selectedItem, setSelectedItem] = useState(null);
  const renderListItem = ({item}) => {
    const backgroundColor = item.title === selectedItem ? '#000000' : '#ff00ff';
    const color = item.title === selectedItem ? '#ff0000' : '#0f0fff';
    return (
      <Item
        item={item.title}
        onPress={() => onPressListItem(item)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  const showAlert = item =>
    Alert.alert(
      'Alert Title',
      item,
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>
            navigation.navigate('ContentDetails', {screentitle: item}),
          style: 'default',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => Alert.alert(ContantMessage.CONSTANT_MESSAGE),
      },
    );

  return (
    <SafeAreaView style={myStyles.container}>
      <StatusBar style="auto" />
      <Navigationbar name="Home Screen" />
      <View style={[{width: '100%'}]}>
        <FlatList
          data={jsonData}
          renderItem={renderListItem}
          keyExtractor={item => item.title}
          extraData={selectedItem}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
