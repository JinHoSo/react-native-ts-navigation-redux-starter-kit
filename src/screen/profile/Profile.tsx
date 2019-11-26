import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/rootReducer'

export default function Profile() {
  const appStateStatus = useSelector((state: RootState) => state.appStateStatus)
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text>
        This is Profile page
      </Text>

      <Button title='Go back home' onPress={goBack}>
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