import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { InitialState, NavigationContainer, Route } from '@react-navigation/core'
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
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
    route.state.routes[route.state.index].name
    : // If state doesn't exist, we need to default to the initial screen
    route.name

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