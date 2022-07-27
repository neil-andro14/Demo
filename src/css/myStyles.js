import {StyleSheet} from 'react-native';
import {COLORS} from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  editValue: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BLACK,
    height: 45,
    width: '85%',
    marginEnd: 20,
    marginStart: 20,
    fontSize: 20,
    marginTop: 30,
  },
  textTitle: {
    fontSize: 18,
    backgroundColor: '#ff00ff',
    color: '#ffffff',
    borderRadius: 3,
    padding: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonView: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 40,
    justifyContent: 'space-evenly',
  },

  button: {
    alignItems: 'center',
    backgroundColor: COLORS.primayColor,
    width: '40%',
    color: '#ffffff',
    height: 45,
    justifyContent: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },

  buttonDesign: {
    color: '#ffffff',
    fontSize: 16,
    alignContent: 'center',
    fontWeight: 'bold',
  },

  listItem: {
    width: '100%',
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.GRAY_COLOR,
  },
});
