import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { APP_CONFIG } from 'configs'

export const createStore = (preloadedState: any) => {
  const middlewares: any = []

  if (APP_CONFIG.MODE === 'development' && typeof window !== 'undefined') {
    const logger = createLogger({
      level: 'info',
      collapsed: true
    })

    middlewares.push(logger)
  }

  return configureStore({
    reducer: {
      // reducers go here
    },
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
    devTools: APP_CONFIG.MODE === 'development'
  })
}

let store: any;

const initializeStore = (preloadedState: any) => {
  let _store = store || createStore(preloadedState)

  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState })
    store = undefined
  }

  if (typeof window === 'undefined') {
    return _store
  }

  if (!store) {
    store = _store
  }

  return store
}

export const useStore = (preloadedState: any) => initializeStore(preloadedState);