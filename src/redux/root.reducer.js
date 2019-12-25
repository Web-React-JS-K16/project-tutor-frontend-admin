import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user.reducers'
import tagReducers from './tag/tag.reducers'
import majorReducers from './major/major.reducers'
import statisticsReducers from './statistic/statistic.reducers'

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: [
    'currentUser', // save only currentUser to storage
  ],
}

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  tag: tagReducers,
  major: majorReducers,
  statistic: statisticsReducers,
})

export default rootReducer
