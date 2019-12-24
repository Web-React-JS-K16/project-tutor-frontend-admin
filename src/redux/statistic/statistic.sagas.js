import { call, all, takeLatest } from 'redux-saga/effects'
import StatisticService from '../../services/statistic.service'

function* getSalesByDate(action) {
  try {
    const data = yield StatisticService.getSalesByDate(action.data)
    action.getSalesByDateSuccess(data)
  } catch (err) {
    action.getSalesByDateFailure(err.message)
  }
}

function* getSalesByDateSaga() {
  yield takeLatest('GET_SALE_BY_DATE', getSalesByDate)
}

export default function* reportSaga() {
  yield all([call(getSalesByDateSaga)])
}
