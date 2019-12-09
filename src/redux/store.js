import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root.reducer'
import rootSagas from './root.saga'

const sagaMiddleWare = createSagaMiddleware()
const middlewares = [sagaMiddleWare]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

console.log('in store.js, process env: ', process.env.NODE_ENV)

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleWare.run(rootSagas)
export const persistor = persistStore(store)

export default { store, persistStore }
