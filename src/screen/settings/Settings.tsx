import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/rootReducer'

export default function Settings() {
  const appStateStatus = useSelector((state: RootState) => state.appStateStatus)
  const navigation = useNavigation()

  const goToProfile = () => {
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <Text>
        This is Settings page
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
    alignItems: 'center',
    justifyContent: 'center'
  }
})