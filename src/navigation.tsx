import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { InitialState, Route, getFocusedRouteNameFromRoute } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Home from './screen/home/Home'
import Profile from './screen/profile/Profile'
import Settings from './screen/settings/Settings'
import { navigationRef } from './services/navigationService'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

type Router = Omit<Route<string>, 'key'> & {
  state?: InitialState;
}

const getHeaderTitle = (route: Router) => {
  const routeName = getFocusedRouteNameFromRoute(route)
  return routeName
}

const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={'Home'}
      component={Home}
      options={{
        title: 'Home',
      }}
    />
    <Tab.Screen
      name={'Settings'}
      component={Settings}
      options={{
        title: 'Settings',
      }}
    />
  </Tab.Navigator>
)

export const AppNavigation = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      initialRouteName={'Home'}
      headerMode={'screen'}
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >

      <Stack.Screen
        name={'Home'}
        component={TabNavigation}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />

      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)