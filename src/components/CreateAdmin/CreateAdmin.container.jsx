import { connect } from 'react-redux'
import CreateAdminComponent from './CreateAdmin.component'
import { createAccount, clearCreateAccount } from '../../redux/user/user.actions'

const mapStateToProps = state => ({
  createAccount: state.user.createAccount,
})

const mapDispatchToProps = dispath => ({
  createAccountStart: user => dispath(createAccount(user)),
  clearCreateAccount: () => dispath(clearCreateAccount()),
})

const CreateAdminContainer = connect(mapStateToProps, mapDispatchToProps)(CreateAdminComponent)

export default CreateAdminContainer
