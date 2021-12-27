import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {

  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const accessToken = await AsyncStorage.getItem(this.accessTokenKey());
    return accessToken;
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    await AsyncStorage.setItem(this.accessTokenKey(), accessToken);
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(this.accessTokenKey());
  }

  accessTokenKey() {
    return `${this.namespace}:token`;
  }
}

export default AuthStorage;