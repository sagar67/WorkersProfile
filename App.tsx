import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from './Components/WelcomeScreen';
import CategoriesScreen from './Components/CategoriesScreen';
import IconSelector, { ICON_TYPE } from './Components/common/Icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Welcome') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Categories') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            }
            return (
              <IconSelector
                type={ICON_TYPE.Ionicons}
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 13,
            paddingBottom:5,
          },
          tabBarStyle: {
            height: 60,
          },
        })}>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
