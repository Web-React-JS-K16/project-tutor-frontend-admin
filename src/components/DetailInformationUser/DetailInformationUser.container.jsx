/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux'
import { getInforUser } from '../../redux/user/user.actions'
import DetailInformationUser from './DetailInformationUser.component'

const mapStateToProps = state => ({
  user: state.user.getInforUser.data,
  loading: state.user.getInforUser.isLoading,
  messageInfo: state.user.getInforUser.message,
})

const mapDispatchToProps = dispatch => ({
  getInforUser: id => dispatch(getInforUser(id)),
})

const DetailInformationUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailInformationUser)

export default DetailInformationUserContainer
