import UserTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  login: {
    isSuccess: null,
    isLoading: null,
    message: null,
  },
  createAccount: {
    isSuccess: null,
    isLoading: null,
    message: null,
  },
  getAllUser: {
    data: null,
    isLoading: false,
    message: null,
  },
  getAllStudent: {
    data: null,
    isLoading: true,
    message: null,
    length: 1,
  },
  getAllTeacher: {
    data: null,
    isLoading: false,
    message: null,
    length: 1,
  },
  getInforUser: {
    data: null,
    isLoading: false,
    message: null,
  },
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // login
    case UserTypes.LOGIN_START:
      return {
        ...state,
        login: {
          isLoading: true,
        },
      }
    case UserTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        login: {
          isLoading: false,
          isSuccess: true,
        },
      }
    case UserTypes.LOGIN_FAILURE:
      return {
        ...state,
        login: {
          isLoading: false,
          isSuccess: false,
          message: action.payload,
        },
      }
    // create account
    case UserTypes.CREATE_ACCOUNT:
      return {
        ...state,
        createAccount: {
          isLoading: true,
        },
      }
    case UserTypes.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        createAccount: {
          isLoading: false,
          isSuccess: true,
          message: action.payload.message,
        },
      }
    case UserTypes.CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        createAccount: {
          isLoading: false,
          isSuccess: false,
          message: action.payload.message,
        },
      }
    case UserTypes.CLEAR_CREATE_ACCOUNT:
      return {
        ...state,
        createAccount: {
          isLoading: null,
          isSuccess: null,
          message: null,
        },
      }
    // get all user
    case UserTypes.GET_ALL_USER:
      return {
        ...state,
        getAllUser: {
          isLoading: true,
        },
      }
    case UserTypes.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        getAllUser: {
          isLoading: false,
          data: action.payload.data,
        },
      }
    case UserTypes.GET_ALL_USER_FAILURE:
      return {
        ...state,
        getAllUser: {
          isLoading: false,
          message: action.payload.message,
        },
      }
    // get all student
    case UserTypes.GET_ALL_STUDENT:
      return {
        ...state,
        getAllStudent: {
          isLoading: true,
        },
      }
    case UserTypes.GET_ALL_STUDENT_SUCCESS:
      return {
        ...state,
        getAllStudent: {
          isLoading: false,
          data: action.payload.data,
          length: action.payload.length,
        },
      }
    case UserTypes.GET_ALL_STUDENT_FAILURE:
      return {
        ...state,
        getAllStudent: {
          isLoading: false,
          message: action.payload.message,
        },
      }

    // get all teacher
    case UserTypes.GET_ALL_TEACHER:
      return {
        ...state,
        getAllTeacher: {
          isLoading: true,
        },
      }
    case UserTypes.GET_ALL_TEACHER_SUCCESS:
      return {
        ...state,
        getAllTeacher: {
          isLoading: false,
          data: action.payload.data,
          length: action.payload.length,
        },
      }
    case UserTypes.GET_ALL_TEACHER_FAILURE:
      return {
        ...state,
        getAllTeacher: {
          isLoading: false,
          message: action.payload.message,
        },
      }
    // get information user
    case UserTypes.GET_INFOR_USER:
      return {
        ...state,
        getInforUser: {
          isLoading: true,
        },
      }
    case UserTypes.GET_INFOR_USER_SUCCESS:
      return {
        ...state,
        getInforUser: {
          isLoading: false,
          data: action.payload.data,
        },
      }
    case UserTypes.GET_INFOR_USER_FAILURE:
      console.log(action.payload.message)
      return {
        ...state,
        getInforUser: {
          isLoading: false,
          message: action.payload.message,
        },
      }
    default:
      return state
  }
}

export default userReducer
