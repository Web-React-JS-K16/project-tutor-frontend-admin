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
          message: action.payload,
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
    default:
      return state
  }
}

export default userReducer
