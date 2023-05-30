import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from './feed/FeedScreen';
import SavedScreen from './saved/SavedScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants';

const Tabs = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: COLORS.tertiary,
      }}>
      <Tabs.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}

export default function NavigationScreen() {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
}