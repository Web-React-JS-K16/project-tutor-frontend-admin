import UserTypes from './user.types'

// login
export const loginStart = (email, password) => ({
  type: UserTypes.LOGIN_START,
  payload: { email, password },
})

export const logout = () => ({
  type: UserTypes.LOG_OUT,
})

export const loginSuccess = user => ({
  type: UserTypes.LOGIN_SUCCESS,
  payload: user,
})

export const loginFailure = error => ({
  type: UserTypes.LOGIN_FAILURE,
  payload: error,
})

// create admin account
export const createAccount = adminInfo => ({
  type: UserTypes.CREATE_ACCOUNT,
  payload: adminInfo,
})
export const createAccountSuccess = ({ user, message }) => ({
  type: UserTypes.CREATE_ACCOUNT_SUCCESS,
  payload: { user, message },
})
export const createAccountFailure = message => ({
  type: UserTypes.CREATE_ACCOUNT_FAILURE,
  payload: message,
})
export const clearCreateAccount = () => ({
  type: UserTypes.CLEAR_CREATE_ACCOUNT,
})

// get all user
export const getAllUser = () => ({
  type: UserTypes.GET_ALL_USER,
})

export const getAllUserSuccess = ({ data }) => ({
  type: UserTypes.GET_ALL_USER_SUCCESS,
  payload: { data },
})

export const getAllUserFailure = message => ({
  type: UserTypes.GET_ALL_USER_FAILURE,
  payload: { message },
})

// get all student
export const getAllStudent = data => ({
  type: UserTypes.GET_ALL_STUDENT,
  payload: { data },
})

export const getAllStudentSuccess = ({ data, length }) => ({
  type: UserTypes.GET_ALL_STUDENT_SUCCESS,
  payload: { data, length },
})

export const getAllStudentFailure = message => ({
  type: UserTypes.GET_ALL_STUDENT_FAILURE,
  payload: { message },
})

// get all teacher
export const getAllTeacher = data => ({
  type: UserTypes.GET_ALL_TEACHER,
  payload: { data },
})

export const getAllTeacherSuccess = ({ data, length }) => ({
  type: UserTypes.GET_ALL_TEACHER_SUCCESS,
  payload: { data, length },
})

export const getAllTeacherFailure = message => ({
  type: UserTypes.GET_ALL_TEACHER_FAILURE,
  payload: { message },
})

// get information of user
export const getInforUser = id => ({
  type: UserTypes.GET_INFOR_USER,
  payload: { id },
})

export const getInforUserSuccess = ({ data }) => ({
  type: UserTypes.GET_INFOR_USER_SUCCESS,
  payload: { data },
})

export const getInforUserFailure = message => ({
  type: UserTypes.GET_INFOR_USER_FAILURE,
  payload: { message },
})

export const blockUnBlockAccount = data => ({
  type: UserTypes.BLOCK_UNBLOCK_ACCOUNT,
  payload: { data },
})

export const blockUnBlockAccountSuccess = ({ data, message }) => ({
  type: UserTypes.BLOCK_UNBLOCK_ACCOUNT_SUCCESS,
  payload: { data, message },
})

export const blockUnlockAccountFailure = message => ({
  type: UserTypes.BLOCK_UNBLOCK_ACCOUNT_FAILURE,
  payload: { message },
})
