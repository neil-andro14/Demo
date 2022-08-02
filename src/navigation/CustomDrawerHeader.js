import {View, Text, Image, Alert} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS} from '../css/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
const CustomDrawerHeader = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',

            height: 200,
            marginTop: -10,
            justifyContent: 'center',
            backgroundColor: COLORS.primayColor,
          }}>
          <Image
            source={require('../assets/images/img_avatar.png')}
            style={{
              width: 90,
              height: 90,
              borderRadius: 45,
              margin: 10,
              alignSelf: 'center',
            }}
          />
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'white',
                padding: 1,
              }}>
              Ecotech Services
            </Text>
            <Text numberOfLines={1} style={{color: 'white', padding: 1}}>
              eco@ecotechservices.com
            </Text>
            <View style={{flexDirection: 'row', padding: 1}}>
              <Icon
                name="map-marker-alt"
                size={15}
                color="white"
                style={{marginEnd: 5}}></Icon>
              <Text style={{color: 'white'}}>Kondhaw,Pune</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, marginTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <View style={{backgroundColor: 'black', height: 1}} />
        <View
          style={{
            flexDirection: 'row',
            padding: 8,
            justifyContent: 'space-between',
          }}>
          <Feather
            name="log-out"
            size={30}
            color="black"
            onPress={() => Alert.alert('User', 'Do you went to Log Out')}
          />
          <Feather name="settings" size={30} color="black" />
        </View>
      </View>
    </View>
  );
};

export default CustomDrawerHeader;
