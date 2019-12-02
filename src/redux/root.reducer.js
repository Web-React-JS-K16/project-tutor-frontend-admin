import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user.reducers'

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: [
    'currentUser', // save only currentUser to storage
  ],
}

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
})

export default rootReducer
