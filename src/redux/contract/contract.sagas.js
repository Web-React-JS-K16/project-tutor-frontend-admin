import { call, all, takeLatest } from 'redux-saga/effects'
import ContractService from '../../services/contract.service'

function* getAllContract(action) {
  try {
    const data = yield ContractService.getAll(action.data)
    action.getAllContractSuccess(data)
  } catch (err) {
    action.getAllContractFailure(err.message)
  }
}

function* getAllContractSaga() {
  yield takeLatest('GET_ALL_CONTRACT', getAllContract)
}

function* getDetailContract(action) {
  try {
    const data = yield ContractService.getDetail(action.data)
    action.getDetailContractSuccess(data)
  } catch (err) {
    action.getDetailContractFailure(err.message)
  }
}

function* getDetailContractSaga() {
  yield takeLatest('GET_DETAIL_CONTRACT', getDetailContract)
}

function* changeStatusContract(action) {
  try {
    const data = yield ContractService.changeStatus(action.data)
    action.changeStatusContractSuccess(data)
  } catch (err) {
    action.changeStatusContractFailure(err.message)
  }
}

function* changeStatusContractSaga() {
  yield takeLatest('CHANGE_STATUS_CONTRACT', changeStatusContract)
}

export default function* contractSaga() {
  yield all([call(getAllContractSaga), call(getDetailContractSaga), call(changeStatusContractSaga)])
}
