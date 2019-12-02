import UserTypes from './user.types'

// login
export const loginStart = (email, password) => ({
  type: UserTypes.LOGIN_START,
  payload: { email, password },
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
