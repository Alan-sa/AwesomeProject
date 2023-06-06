import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../constants';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
        <Text style={{color: COLORS.white}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
