import React, { useCallback, useEffect, useState } from 'react'
import { AppState, AppStateStatus } from 'react-native'
import { useDispatch } from 'react-redux'

import { changeAppStateStatus } from '../redux/appStateStatus/actions'

export default function useAppStateStatus():void {
  const dispatch = useDispatch()
  const handleAppStateChange = useCallback((status: AppStateStatus) => {
    dispatch(changeAppStateStatus(status))
  }, [dispatch])

  useEffect(() => {
    const currentState = AppState.currentState
    handleAppStateChange(currentState)

    AppState.addEventListener('change', handleAppStateChange)

    return () => {
      AppState.removeEventListener('change', handleAppStateChange)
    }
  }, [])
}