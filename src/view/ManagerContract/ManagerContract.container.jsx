import { connect } from 'react-redux'
import ManagerContract from './ManagerContract.component'
import { getAllContract } from '../../redux/contract/contract.action'

const mapDispatchToProps = dispatch => ({
  getAllContract: (data, getAllContractSuccess, getAllContractFailure) =>
    dispatch(getAllContract(data, getAllContractSuccess, getAllContractFailure)),
})

const ManagerContractContainer = connect(null, mapDispatchToProps)(ManagerContract)

export default ManagerContractContainer
