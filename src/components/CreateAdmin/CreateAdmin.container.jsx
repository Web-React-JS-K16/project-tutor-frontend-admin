import { connect } from 'react-redux'
import { createAccount, clearCreateAccount } from '../../redux/user/user.actions'
import CreateAdminComponent from './CreateAdmin.component'

const mapStateToProps = state => ({
  createAccount: state.user.createAccount,
})

const mapDispatchToProps = dispath => ({
  createAccountStart: user => dispath(createAccount(user)),
  clearCreateAccount: () => dispath(clearCreateAccount()),
})

const CreateAdminContainer = connect(mapStateToProps, mapDispatchToProps)(CreateAdminComponent)

export default CreateAdminContainer
