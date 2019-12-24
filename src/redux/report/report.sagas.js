import { call, all, takeLatest } from 'redux-saga/effects'
import ReportService from '../../services/report.service'

function* getAllReport(action) {
  try {
    const data = yield ReportService.getAll(action.data)
    action.getAllReportSuccess(data)
  } catch (err) {
    action.getAllReportFailure(err.message)
  }
}

function* getAllReportSaga() {
  yield takeLatest('GET_ALL_REPORT', getAllReport)
}

function* getDetailReport(action) {
  try {
    const data = yield ReportService.getDetail(action.data)
    action.getDetailReportSuccess(data)
  } catch (err) {
    action.getDetailReportFailure(err.message)
  }
}

function* getDetailReportSaga() {
  yield takeLatest('GET_DETAIL_REPORT', getDetailReport)
}

export default function* reportSaga() {
  yield all([call(getAllReportSaga), call(getDetailReportSaga)])
}
