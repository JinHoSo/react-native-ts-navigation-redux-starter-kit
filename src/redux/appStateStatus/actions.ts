import { AppStateStatus } from 'react-native'
import { ThunkAction } from 'redux-thunk'

import { RootState } from '../rootReducer'
import actionTypes from './actionTypes'
import { AppStateStatusAction } from './reducer'

export const changeAppStateStatus = (status: AppStateStatus): Thunk => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.CHANGE_APP_STATE_STATUS,
      status
    })
  }
}

export type Thunk = ThunkAction<void, RootState, null, AppStateStatusAction>