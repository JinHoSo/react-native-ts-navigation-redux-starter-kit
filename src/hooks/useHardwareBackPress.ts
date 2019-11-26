import { useNavigation } from '@react-navigation/core'
import React, { useCallback, useEffect } from 'react'
import { BackHandler } from 'react-native'

export default function useHardwareBackPress():void {
  const navigation = useNavigation()
  const handleBackPress = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack()
      return true
    }
    else {
      return false
    }
  }, [navigation])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress)

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
    }
  }, [])
}