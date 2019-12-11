import { call, all } from 'redux-saga/effects'
import userSaga from './user/user.sagas'
import tagSaga from './tag/tag.sagas'
import majorSaga from './major/major.sagas'

export default function* rootSagas() {
  yield all([call(userSaga), call(tagSaga), call(majorSaga)])
}
