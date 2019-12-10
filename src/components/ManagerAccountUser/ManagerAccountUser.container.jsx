import { connect } from 'react-redux'
import { getAllStudent, getAllTeacher } from '../../redux/user/user.actions'
import ManagerAccountUser from './ManagerAccountUser.component'

const mapStateToProps = state => ({
  students: state.user.getAllStudent.data,
  loadingSt: state.user.getAllStudent.isLoading,
  teachers: state.user.getAllTeacher.data,
  loadingTc: state.user.getAllTeacher.isLoading,
})

const mapDispatchToProps = dispatch => ({
  getAllStudent: () => dispatch(getAllStudent()),
  getAllTeacher: () => dispatch(getAllTeacher()),
})

const ManagerAccountUserContainer = connect(mapStateToProps, mapDispatchToProps)(ManagerAccountUser)

export default ManagerAccountUserContainer
