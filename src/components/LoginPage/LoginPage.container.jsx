import { connect } from 'react-redux'
import { loginStart } from '../../redux/user/user.actions'
import LoginPage from './LoginPage.component'

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  login: state.user.login,
})

const mapDispatchToProps = dispath => ({
  loginStart: (email, password) => dispath(loginStart(email, password)),
})

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default LoginPageContainer
