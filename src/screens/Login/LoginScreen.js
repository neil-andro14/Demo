import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import myStyles from '../../css/myStyles';
import LinearGradient from 'react-native-linear-gradient';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const LoginScreen = () => {
  const primaryColor = ['#9332d9', '#c83989', '#dd3c11'];
  const [secureText, setSecureText] = useState(true);

  const isPasswordVisible = () => {
    return secureText
      ? '..//..//assets/images/showpass.png'
      : '..//..//assets/images/hidepass.png';
  };

  const onClickOnImage = () => {
    setSecureText(!secureText);
  };

  return (
    <SafeAreaView style={myStyles.container}>
      <StatusBar style="auto" backgroundColor={'#9332d9'} />
      <LinearGradient colors={primaryColor} style={{width: '100%', flex: 1}}>
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={require('../../assets/images/profileimage.webp')}
            style={{
              width: 100,
              height: 100,
              borderColor: 'red',
              borderWidth: 1,
              borderRadius: 50,
            }}
            resizeMethod="scale"
          />
        </View>
        <Text
          style={{
            margin: 15,
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Login
        </Text>

        <View style={{width: '100%', alignItems: 'center'}}>
          <Text
            style={{
              color: 'yellow',
              alignSelf: 'flex-start',
              marginStart: '10%',
              fontWeight: '500',
            }}>
            EMAIL
          </Text>
          <TextInput
            placeholder="Enter Email Address"
            placeholderTextColor="white"
            style={{
              width: '80%',
              color: 'white',
              fontSize: 16,
              borderBottomWidth: 1,
              borderBottomColor: 'white',
            }}
          />
          <Text
            style={{
              color: 'yellow',
              alignSelf: 'flex-start',
              marginStart: '10%',
              marginTop: 20,
              fontWeight: '500',
            }}>
            PASSWORD
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: 'white',
              width: '80%',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor="white"
              secureTextEntry={secureText}
              style={{
                color: 'white',
                fontSize: 16,
                width: '90%',
              }}
            />
            <TouchableOpacity onPress={() => onClickOnImage()}>
              <Image
                source={
                  secureText
                    ? require('..//..//assets/images/showpass.png')
                    : require('..//..//assets/images/hidepass.png')
                }
                style={{
                  margin: 5,
                  height: 20,
                  width: 20,
                  tintColor: 'white',
                  alignContent: 'center',
                  resizeMode: 'stretch',
                  alignItems: 'center',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '80%',
              padding: 15,
              marginTop: 35,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: 'yellow',
              borderRadius: 20,
            }}>
            <Pressable>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: 'bold',
                  alignItems: 'center',
                }}>
                Login
              </Text>
            </Pressable>
          </View>
          <Text style={{fontSize: 13, color: '#ccc', marginTop: 10}}>
            Forgot Your Password?
          </Text>
          <View
            style={{
              width: '80%',
              marginTop: 70,
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <View
              style={{
                width: '45%',
                height: 1,
                backgroundColor: '#ccc',
              }}></View>
            <Text style={{width: '10%', textAlign: 'center', color: '#ccc'}}>
              OR
            </Text>
            <View
              style={{
                width: '45%',
                height: 1,
                backgroundColor: '#ccc',
              }}></View>
          </View>
          <View
            style={{
              width: '80%',
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Image
              source={require('..//..//assets/images/facebook.webp')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                alignContent: 'center',
              }}
            />
            <Image
              source={require('..//..//assets/images/google.jpeg')}
              style={{width: 50, height: 50, borderRadius: 25}}
            />
            <Image
              source={require('..//..//assets/images/instagram.webp')}
              style={{width: 50, height: 50, borderRadius: 25}}
            />
            <Image
              source={require('..//..//assets/images/twitter.png')}
              style={{width: 50, height: 50, borderRadius: 25}}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginScreen;
