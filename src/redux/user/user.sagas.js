/* eslint-disable no-underscore-dangle */
import { call, all, takeLatest, put } from 'redux-saga/effects'
import UserTypes from './user.types'
import {
  loginSuccess,
  loginFailure,
  createAccountSuccess,
  createAccountFailure,
  getAllUserSuccess,
  getAllUserFailure,
  getAllStudentSuccess,
  getAllStudentFailure,
  getAllTeacherFailure,
  getAllTeacherSuccess,
  getInforUserSuccess,
  getInforUserFailure,
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

// Get all user

function* getAllUser() {
  try {
    const data = yield UserService.getAllUser()
    yield put(getAllUserSuccess(data))
  } catch (err) {
    yield put(getAllUserFailure(err.message))
  }
}

function* getAllUserSaga() {
  yield takeLatest(UserTypes.GET_ALL_USER, getAllUser)
}

// Get all student

function* getAllStudent() {
  try {
    const data = yield UserService.getAllStudent()
    yield put(getAllStudentSuccess(data))
  } catch (err) {
    yield put(getAllStudentFailure(err.message))
  }
}

function* getAllStudentSaga() {
  yield takeLatest(UserTypes.GET_ALL_STUDENT, getAllStudent)
}

// Get all teacher
function* getAllTeacher() {
  try {
    const data = yield UserService.getAllTeacher()
    yield put(getAllTeacherSuccess(data))
  } catch (err) {
    yield put(getAllTeacherFailure(err.message))
  }
}

function* getAllTeacherSaga() {
  yield takeLatest(UserTypes.GET_ALL_TEACHER, getAllTeacher)
}

// Get all teacher
function* getInforUser(action) {
  try {
    const data = yield UserService.getInforUser(action.payload.id)
    yield put(getInforUserSuccess(data))
  } catch (err) {
    yield put(getInforUserFailure(err.message))
  }
}

function* getInforUserSaga() {
  yield takeLatest(UserTypes.GET_INFOR_USER, getInforUser)
}

// =====
export default function* userSaga() {
  yield all([
    call(loginStartSagas),
    call(createAccountSaga),
    call(getAllUserSaga),
    call(getAllStudentSaga),
    call(getAllTeacherSaga),
    call(getInforUserSaga),
  ])
}
