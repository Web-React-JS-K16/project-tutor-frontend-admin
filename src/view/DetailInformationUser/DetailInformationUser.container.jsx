/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux'
import { getInforUser, blockUnBlockAccount } from '../../redux/user/user.actions'
import DetailInformationUser from './DetailInformationUser.component'

const mapStateToProps = state => ({
  user: state.user.getInforUser.data,
  loading: state.user.getInforUser.isLoading,
  errInfo: state.user.getInforUser.err,
})

const mapDispatchToProps = dispatch => ({
  getInforUser: id => dispatch(getInforUser(id)),
  blockUnblockAccount: (id, type) => dispatch(blockUnBlockAccount(id, type)),
})

const DetailInformationUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailInformationUser)

export default DetailInformationUserContainer
