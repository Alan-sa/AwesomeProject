import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../constants';
import AzureAuth from 'react-native-azure-auth';

const azureAuth = new AzureAuth({
  clientId: 'YOUR_CLIENT_ID',
});

const makeLogin = async () => {
  try {
    let tokens = await azureAuth.webAuth.authorize({
      scope: 'openid profile User.Read Mail.Read',
    });
    this.setState({accessToken: tokens.accessToken});
    let info = await azureAuth.auth.msGraphRequest({
      token: tokens.accessToken,
      path: '/me',
    });
    this.setState({user: info.displayName, userId: tokens.userId});
  } catch (error) {
    console.log(error);
  }
};

const LoginScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          makeLogin();
        }}
        style={{
          backgroundColor: COLORS.secondary,
          width: '80%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: COLORS.white}}>Azure Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeTabs')}
        style={{
          backgroundColor: COLORS.tertiary,
          width: '80%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: COLORS.white}}>Bypass Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
