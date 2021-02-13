import { AppStateStatus, AppState } from 'react-native'
import { Reducer } from 'redux'

import actionTypes from './actionTypes'

export type AppStateStatusState = AppStateStatus

export interface AppStateStatusAction {
  type: string
  status: AppStateStatus
}

const defaultAppStateStatusState = AppState.currentState

export const appStateStatus: Reducer<AppStateStatusState, AppStateStatusAction> = (state = defaultAppStateStatusState, action: AppStateStatusAction) => {
  switch (action.type) {
    case actionTypes.CHANGE_APP_STATE_STATUS:
      return action.status
    default:
      return state
  }
}
