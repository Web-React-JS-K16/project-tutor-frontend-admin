import { call, all, takeLatest, put } from 'redux-saga/effects'
import UserTypes from './user.types'
import { loginSuccess, loginFailure } from './user.actions'
import UserService from '../../services/user.service'

// login
function* login({ payload }) {
  try {
    const user = yield UserService.login(payload)
    yield put(loginSuccess(user))
  } catch (err) {
    console.log('ERR')
    yield put(loginFailure(err.message))
  }
}
function* loginStartSagas() {
  yield takeLatest(UserTypes.LOGIN_START, login)
}

export default function* userSaga() {
  yield all([call(loginStartSagas)])
}
