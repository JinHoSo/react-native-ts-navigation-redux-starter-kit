import AsyncStorage from '@react-native-community/async-storage'
import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import { stage } from '../constants/stage'
import { rootReducer } from './rootReducer'

const sensitivePersistConfig = {
  key: 'root',
  //You can persist all your reducers or to select specific ones that will be persisted 
  // whitelist: ['appStateStatus'], 
  // blacklist: ['appStateStatus'],
  whitelist: [],
  storage: AsyncStorage,
}

const sensitivePersistedReducer = persistReducer(sensitivePersistConfig, rootReducer)

function getMiddleware() {
  if (stage === 'dev') {
    return [thunk, logger]
  }

  return [thunk]
}

export const store = createStore(
  sensitivePersistedReducer,
  compose(applyMiddleware(...getMiddleware())),
)

export const persistor = persistStore(store)