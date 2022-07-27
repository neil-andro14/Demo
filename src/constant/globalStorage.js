import AsyncStorage from '@react-native-async-storage/async-storage';

const globalStorage = {
  async storeDataString(key, value) {
    try {
      console.log('Storage Key', key, 'Value:', value);
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('Storage Error ', e);
    }
  },
  async storeDataObject(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log('Storage Error Object', e);
    }
  },

  async getStoredData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  },
};

export default globalStorage;
