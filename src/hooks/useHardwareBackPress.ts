import { useNavigation } from '@react-navigation/core'
import React, { useCallback, useEffect } from 'react'
import { BackHandler } from 'react-native'

import { canGoBack, goBack } from '../services/navigationService'

export const useGlobalHardwareBackPress = (): void => {
  const handleBackPress = useCallback(() => {
    if (canGoBack()) {
      goBack()
      return true
    }
    else {
      return false
    }
  }, [])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress)

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
    }
  }, [])
}

export const useHardwareBackPress = (): void => {
  const navigation = useNavigation()

  const handleBackPress = useCallback(() => {
    if (canGoBack()) {
      goBack()
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