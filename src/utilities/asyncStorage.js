import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (keyName, value) => {
  try {
    await AsyncStorage.setItem(keyName, value);
    console.log(keyName, value);
    return true;
  } catch (e) {
    return false;
  }
};

export const getData = async keyName => {
  try {
    const value = await AsyncStorage.getItem(keyName);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};
