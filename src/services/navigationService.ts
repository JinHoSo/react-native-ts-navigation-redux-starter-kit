import { NavigationContainerRef } from '@react-navigation/core'
import * as React from 'react'

export const navigationRef = React.createRef() as React.RefObject<NavigationContainerRef>

export const navigate = (name: string, params: { [key: string]: any }) => {
  navigationRef.current && navigationRef.current.navigate(name, params)
}

export const goBack = () => {
  navigationRef.current && navigationRef.current.goBack()
}

export const canGoBack = (): boolean => {
  return navigationRef.current && navigationRef.current.canGoBack()
}