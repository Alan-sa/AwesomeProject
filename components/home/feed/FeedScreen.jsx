import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Welcome from '../welcome/Welcome';
import HomeScreen from '../HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const FeedStackNavigator = createNativeStackNavigator();

const FeedScreen = () => {
  return (
    <FeedStackNavigator.Navigator initialRouteName="Home">
      <FeedStackNavigator.Screen name="Home" component={HomeScreen} />
    </FeedStackNavigator.Navigator>
  );
};

export default FeedScreen;
{
  /* <Stack.Screen
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" />
          ),
          headerTitle: '',
        }}
      /> */
}
