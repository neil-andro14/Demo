import React, {useState} from 'react';
import styles from '../css/myStyles';
import globalStorage from '../constant/globalStorage';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';
import Navigationbar from './Navigationbar';
import {COLORS} from '../css/colors';
import {storeDataString} from '../constant/globalStorage';
function CompanyCode({navigation}) {
  const [changeButtonColor, setButtonColor] = useState('#ff00ff');
  const [isChangeColor, setChangeColor] = useState(false);
  const [isShowCancelButton, setCancelButton] = useState(true);
  const [isClickble, setClickble] = useState(true);

  const onclick = () => {
    console.log('press', isChangeColor);
    isChangeColor ? setButtonColor(COLORS.BLACK) : setButtonColor('#00ff00');
    setChangeColor(!isChangeColor);
  };

  function onTextChangeListener() {
    setClickble(false);
  }
  const _renderCancelButton = () => {
    return (
      <>
        {isShowCancelButton ? (
          <TouchableOpacity
            style={[styles.button, {backgroundColor: changeButtonColor}]}
            onPress={() => onclick()}>
            <Text style={styles.buttonDesign}> Cancel</Text>
          </TouchableOpacity>
        ) : null}
      </>
    );
  };
  function onNextButtonClick() {
    globalStorage.storeDataString('nilesh', 'Salunkhe');
    navigation.navigate('HomeScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Navigationbar name="Company Code" />
        <Text
          style={{
            padding: 2,
            marginTop: 60,
            marginStart: 20,
            marginEnd: 20,
            fontSize: 18,
          }}>
          To get Started,enter your company code and click on the next button
        </Text>

        <TextInput
          placeholder="Company Code"
          style={styles.editValue}
          keyboardType="numeric"
          onChangeText={() => onTextChangeListener()}
          maxLength={6}
        />

        <View style={styles.buttonView}>
          {_renderCancelButton()}
          <Pressable
            style={styles.button}
            disabled={isClickble}
            onPress={() => onNextButtonClick()}>
            <Text style={styles.buttonDesign}>Next</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CompanyCode;
