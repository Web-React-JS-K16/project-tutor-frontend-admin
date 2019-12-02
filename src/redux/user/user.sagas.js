import { call, all, takeLatest, put } from 'redux-saga/effects'
import UserTypes from './user.types'
import {
  loginSuccess,
  loginFailure,
  createAccountSuccess,
  createAccountFailure,
} from './user.actions'
import UserService from '../../services/user.service'

// login
function* login({ payload }) {
  try {
    const user = yield UserService.login(payload)
    yield put(loginSuccess(user))
  } catch (err) {
    yield put(loginFailure(err.message))
  }
}
function* loginStartSagas() {
  yield takeLatest(UserTypes.LOGIN_START, login)
}

// create account
function* createAccount({ payload }) {
  try {
    // result : {user, message}
    const result = yield UserService.createAccount(payload)
    yield put(createAccountSuccess(result))
  } catch (err) {
    yield put(createAccountFailure(err.message))
  }
}
function* createAccountSaga() {
  yield takeLatest(UserTypes.CREATE_ACCOUNT, createAccount)
}

// =====
export default function* userSaga() {
  yield all([call(loginStartSagas), call(createAccountSaga)])
}
