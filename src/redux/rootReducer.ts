import { combineReducers } from 'redux'

import { appStateStatus, AppStateStatusState } from './appStateStatus/reducer'

export interface RootState {
  appStateStatus: AppStateStatusState
}

export const rootReducer = combineReducers<RootState>({
  appStateStatus
})