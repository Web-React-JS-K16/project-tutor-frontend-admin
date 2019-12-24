import { connect } from 'react-redux'
import { DetailContractPage } from './DetailContractPage.component'
import { getDetailContract, changeStatusContract } from '../../redux/contract/contract.action'

export default connect(null, { getDetailContract, changeStatusContract })(DetailContractPage)
