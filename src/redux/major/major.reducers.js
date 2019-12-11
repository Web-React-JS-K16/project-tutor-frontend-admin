import MajorType from './major.types'

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
}

const MajorReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MajorType.GET_ALL_MAJOR: {
      return {
        ...state,
        loading: true,
      }
    }
    case MajorType.GET_ALL_SUCCESS_MAJOR: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      }
    }
    case MajorType.GET_ALL_FAILURE_MAJOR: {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      }
    }
    default:
      return state
  }
}
export default MajorReducers
