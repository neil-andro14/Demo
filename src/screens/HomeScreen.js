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

function HomeScreen() {
  // console.log('first', globalStorage.getStoredData('nilesh'));
  useEffect(() => {
    testCall();
    console.log('Initial commit value');
  }, []);

  const onPressListItem = item => {
    console.log(item);
    setSelectedItem(item);
    showAlert(item);
    //ToastAndroid.show(item, ToastAndroid.SHORT);
  };
  const testCall = async () => {
    console.log('Other', await globalStorage.getStoredData('nilesh'));
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
    const backgroundColor = item.key === selectedItem ? '#000000' : '#ff00ff';
    const color = item.key === selectedItem ? '#ff0000' : '#0f0fff';

    return (
      <Item
        item={item.key}
        onPress={() => onPressListItem(item.key)}
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
          onPress: () => Alert.alert('OK Pressed'),
          style: 'default',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );

  return (
    <SafeAreaView style={myStyles.container}>
      <StatusBar style="auto" />
      <Navigationbar name="Home Screen" />
      <View style={[{width: '100%'}]}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
          ]}
          renderItem={renderListItem}
          keyExtractor={item => item.key}
          extraData={selectedItem}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
