import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import myStyles from '../../css/myStyles';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../css/colors';

const SettingScreen = () => {
  const userProfile = [
    {name: '2019-0525', icon: 'arrow-right'},
    {name: 'Ecotech Services', icon: 'person'},
    {name: 'eco@ecotechservices.com', icon: 'email'},
    {name: '9665941484', icon: 'call'},
  ];
  return (
    <View style={myStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      {userProfile.map((item, index) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
              marginStart: 20,
              marginTop: 5,
            }}>
            <FontAwesome name={item.icon} size={25} color="black" />
            <Text
              style={{
                color: COLORS.BLACK,
                alignContent: 'center',
                marginStart: 10,
                fontSize: 18,
                borderBottomWidth: 1,
                borderColor: COLORS.BLACK,
              }}>
              {item.name}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default SettingScreen;
