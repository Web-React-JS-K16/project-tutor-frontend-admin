import { connect } from 'react-redux'
import AccountAdminPage from './AccountAdminPage.component'

const mapStateToProps = state => ({
  user: state.user.currentUser,
})
export default connect(mapStateToProps)(AccountAdminPage)
