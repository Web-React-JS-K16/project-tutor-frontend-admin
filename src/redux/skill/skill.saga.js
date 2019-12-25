import { call, all, takeLatest } from 'redux-saga/effects'
import SkillService from '../../services/skill.service'

function* getSales(action) {
  try {
    const data = yield SkillService.getSales(action.data)
    action.getSalesSuccess(data)
  } catch (err) {
    action.getSalesFailure(err.message)
  }
}

function* getSalesSaga() {
  yield takeLatest('GET_SALE_BY_SKILL', getSales)
}

// function* getSalesByYear(action) {
//   try {
//     const data = yield StatisticService.getSalesByYear(action.data)
//     action.getSalesSuccess(data)
//   } catch (err) {
//     action.getSalesFailure(err.message)
//   }
// }

// function* getSalesByYearSaga() {
//   yield takeLatest('GET_SALE_BY_YEAR', getSalesByYear)
// }

export default function* reportSaga() {
  yield all([call(getSalesSaga)])
}
