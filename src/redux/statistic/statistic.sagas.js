import { call, all, takeLatest, put } from 'redux-saga/effects'
import StatisticService from '../../services/statistic.service'
import {
  getTeacherStatisticalDataSuccess,
  getTeacherStatisticalDataFailure,
} from './statistic.action'
import StatisticsTypes from './statistic.types'

function* getSales(action) {
  try {
    const data = yield StatisticService.getSales(action.data)
    action.getSalesSuccess(data)
  } catch (err) {
    action.getSalesFailure(err.message)
  }
}

function* getSalesSaga() {
  yield takeLatest(StatisticsTypes.GET_SALE, getSales)
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
  yield takeLatest(StatisticsTypes.GET_SALE_BY_YEAR, getSalesByYear)
}

// get statistical data
function* getTeacherStatisticalData({ payload: filterConditions }) {
  try {
    const data = yield StatisticService.getTeacherStatisticalData(filterConditions)
    yield put(getTeacherStatisticalDataSuccess(data))
  } catch (err) {
    yield put(getTeacherStatisticalDataFailure(err.message))
  }
}
export function* getTeacherStatisticalDataSaga() {
  yield takeLatest(StatisticsTypes.TEACHER_GET_STATISTICS, getTeacherStatisticalData)
}

export default function* reportSaga() {
  yield all([call(getSalesSaga), call(getSalesByYearSaga), call(getTeacherStatisticalDataSaga)])
}
