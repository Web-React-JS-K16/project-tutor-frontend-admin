import { call, all, takeLatest } from 'redux-saga/effects'
import StatisticService from '../../services/statistic.service'

function* getSales(action) {
  try {
    const data = yield StatisticService.getSales(action.data)
    action.getSalesSuccess(data)
  } catch (err) {
    action.getSalesFailure(err.message)
  }
}

function* getSalesSaga() {
  yield takeLatest('GET_SALE', getSales)
}

function* getSalesByYear(action) {
  try {
    const data = yield StatisticService.getSalesByYear(action.data)
    action.getSalesSuccess(data)
  } catch (err) {
    action.getSalesFailure(err.message)
  }
}

function* getSalesByYearSaga() {
  yield takeLatest('GET_SALE_BY_YEAR', getSalesByYear)
}

export default function* reportSaga() {
  yield all([call(getSalesSaga), call(getSalesByYearSaga)])
}
