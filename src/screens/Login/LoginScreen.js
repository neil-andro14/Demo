import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import myStyles from '../../css/myStyles';
import LinearGradient from 'react-native-linear-gradient';
import SimpleToast from 'react-native-simple-toast';

const LoginScreen = ({navigation}) => {
  const primaryColor = ['#9332d9', '#c83989', '#dd3c11'];
  const [secureText, setSecureText] = useState(true);
  const [userName, setuserName] = useState('ff@ff.com');
  const [password, setpassword] = useState('Password@1');
  const isPasswordVisible = () => {
    return secureText
      ? '..//..//assets/images/showpass.png'
      : '..//..//assets/images/hidepass.png';
  };

  const onClickOnImage = () => {
    setSecureText(!secureText);
  };

  const onSubmit = () => {
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])/;
    if (userName == '') {
      SimpleToast.show('Enter Email');
    } else if (regEmail.test(userName) === false) {
      SimpleToast.show('Enter Validate Email Adddress');
    } else if (password == '') {
      SimpleToast.show('Enter Password');
    } else if (regPassword.test(password) === false) {
      SimpleToast.show(
        'Password must be at least one uppercase, one lowercase, one special character and one number.',
      );
    } else if (password.length < 8) {
      SimpleToast.show('min 8 character Password.');
    } else {
      SimpleToast.show(`Login Successfully ${userName}`);
      navigation.navigate('DashboardScreen');
    }
  };

  return (
    <SafeAreaView style={myStyles.container}>
      <StatusBar style="auto" backgroundColor={'#9332d9'} />
      <LinearGradient colors={primaryColor} style={{width: '100%', flex: 1}}>
        <View style={styles.logo_container}>
          <Image
            source={require('../../assets/images/profileimage.webp')}
            style={styles.logo}
            resizeMethod="scale"
          />
        </View>
        <Text style={styles.login_label}>Login</Text>

        <View style={{width: '100%', alignItems: 'center'}}>
          <Text style={styles.text_label}>EMAIL</Text>
          <TextInput
            placeholder="Enter Email Address"
            placeholderTextColor="white"
            autoCapitalize="none"
            onChangeText={textValue => setuserName(textValue)}
            value={userName}
            style={styles.bottomBoraderDesign}
          />
          <Text style={[styles.text_label, {marginTop: 30}]}>PASSWORD</Text>
          <View
            style={[
              styles.bottomBoraderDesign,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor="white"
              secureTextEntry={secureText}
              onChangeText={textPassword => setpassword(textPassword)}
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
                style={styles.secure_image}
              />
            </TouchableOpacity>
          </View>

          <Pressable
            style={styles.button_design}
            onPress={() => {
              onSubmit();
            }}>
            <Text style={styles.bottomTextLabel}>Login</Text>
          </Pressable>

          <Text
            style={{
              fontSize: 13,
              color: '#ccc',
              marginTop: 10,
              alignSelf: 'flex-end',
              marginEnd: '10%',
            }}>
            Forgot Your Password?
          </Text>
          <View style={styles.lineContainer}>
            <View style={styles.line_view} />
            <Text style={{width: '10%', textAlign: 'center', color: '#ccc'}}>
              OR
            </Text>
            <View style={styles.line_view} />
          </View>
          <View style={styles.social_container}>
            <Image
              source={require('..//..//assets/images/facebook.png')}
              style={styles.socialMedia}
            />
            <Image
              source={require('..//..//assets/images/google.png')}
              style={styles.socialMedia}
            />
            <Image
              source={require('..//..//assets/images/instagram.png')}
              style={styles.socialMedia}
            />
            <Image
              source={require('..//..//assets/images/twitter.png')}
              style={[styles.socialMedia, {resizeMode: 'repeat'}]}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  socialMedia: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  social_container: {
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  line_view: {
    width: '45%',
    height: 1,
    backgroundColor: '#ccc',
  },
  text_label: {
    color: 'yellow',
    alignSelf: 'flex-start',
    marginStart: '10%',
    fontWeight: '500',
    marginTop: 10,
  },
  button_design: {
    width: '80%',
    padding: 10,
    marginTop: 35,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderRadius: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 50,
  },
  logo1: {
    margin: 5,
    height: 20,
    width: 20,
    tintColor: 'white',
    alignContent: 'center',
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  secure_image: {
    margin: 5,
    height: 20,
    width: 20,
    tintColor: 'white',
    alignContent: 'center',
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  logo_container: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  login_label: {
    margin: 15,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  bottomBoraderDesign: {
    width: '80%',
    color: 'white',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  lineContainer: {
    width: '80%',
    marginTop: 70,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  bottomTextLabel: {
    width: '100%',
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
export default LoginScreen;
