import { connect } from 'react-redux'
import { getAllStudent, getAllTeacher } from '../../redux/user/user.actions'
import ManagerAccountUser from './ManagerAccountUser.component'

const mapStateToProps = state => ({
  students: state.user.getAllStudent.data,
  loadingSt: state.user.getAllStudent.isLoading,
  lengthSt: state.user.getAllStudent.length,
  messageInfoSt: state.user.getAllStudent.message,
  teachers: state.user.getAllTeacher.data,
  loadingTc: state.user.getAllTeacher.isLoading,
  messageInfoTc: state.user.getAllTeacher.message,
  lengthTc: state.user.getAllTeacher.length,
})

const mapDispatchToProps = dispatch => ({
  getAllStudent: data => dispatch(getAllStudent(data)),
  getAllTeacher: data => dispatch(getAllTeacher(data)),
})

const ManagerAccountUserContainer = connect(mapStateToProps, mapDispatchToProps)(ManagerAccountUser)

export default ManagerAccountUserContainer
