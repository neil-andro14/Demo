import {View, Text, Modal, Pressable} from 'react-native';
import React from 'react';

const CustomDialogPop = props => {
  {
    console.log('===========', props);
  }
  const {
    yesButto = true,
    noButton = false,
    yesText = 'Ok',
    noText = 'No',
    title = 'Nilesh',
    contentMessage = 'Value',
    visible = false,
  } = props;
  const [modelVisible, setModelVisible] = useState(visible);
  {
    console.log('======Loading customDialog');
  }
  return (
    <Modal animationType="fade" transparent={true} visible={modelVisible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(52, 52, 52, 0.6)',
          alignItems: 'center',
        }}>
        <View
          style={{
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <Text>{title}</Text>
          <Pressable onPress={() => setModelVisible(!modelVisible)}>
            <Text
              style={{
                fontSize: 14,
                backgroundColor: 'blue',
                color: 'white',
                padding: 8,
                marginTop: 10,
                borderRadius: 10,
              }}>
              Close
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CustomDialogPop;
