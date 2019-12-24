import { call, all, takeLatest } from 'redux-saga/effects'
import ChatService from '../../services/chat.service'

function* getMessage(action) {
  try {
    const data = yield ChatService.getAll(action.data)
    action.getMessageSuccess(data)
  } catch (err) {
    action.getMessageFailure(err.message)
  }
}

function* getMessageSaga() {
  yield takeLatest('GET_MESSAGE', getMessage)
}

export default function* reportSaga() {
  yield all([call(getMessageSaga)])
}
