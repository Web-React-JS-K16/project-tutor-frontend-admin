import { call, all } from 'redux-saga/effects'
import userSaga from './user/user.sagas'
import tagSaga from './tag/tag.sagas'
import majorSaga from './major/major.sagas'
import contractSaga from './contract/contract.sagas'
import reportSaga from './report/report.sagas'
import chatSaga from './chat/chat.sagas'
import statisticSaga from './statistic/statistic.sagas'

export default function* rootSagas() {
  yield all([
    call(userSaga),
    call(tagSaga),
    call(majorSaga),
    call(contractSaga),
    call(reportSaga),
    call(chatSaga),
    call(statisticSaga),
  ])
}
