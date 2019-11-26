import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import useAppStateStatus from '../../hooks/useAppStateStatus'
import useHardwareBackPress from '../../hooks/useHardwareBackPress'
import { RootState } from '../../redux/rootReducer'

export default function Home() {
  useAppStateStatus()
  useHardwareBackPress()

  const navigation = useNavigation()
  const appStateStatus = useSelector((state: RootState) => state.appStateStatus)

  const goToProfile = () => {
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <Text>
        This is Home page
      </Text>

      <Button title='Go to profile page' onPress={goToProfile}>
      </Button>

      <Text>
        App is {appStateStatus}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})