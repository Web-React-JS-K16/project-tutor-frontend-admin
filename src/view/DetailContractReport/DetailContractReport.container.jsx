import { connect } from 'react-redux'
import { DetailReport } from './DetailContractReport.component'
import { getDetailReport } from '../../redux/report/report.action'
import { getMessage } from '../../redux/chat/chat.action'
import { changeStatusContract } from '../../redux/contract/contract.action'

export default connect(null, { getDetailReport, getMessage, changeStatusContract })(DetailReport)
