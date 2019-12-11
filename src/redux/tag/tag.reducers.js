/* eslint-disable no-underscore-dangle */
import TagType from './tag.types'

const INITIAL_STATE = {
  data: [],
  loading: false,
  err: null,
}

const TagReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TagType.GET_ALL_TAG:
    case TagType.CREATE_TAG:
    case TagType.EDIT_TAG:
    case TagType.DELETE_TAG: {
      return {
        ...state,
        loading: true,
      }
    }
    case TagType.GET_ALL_SUCCESS_TAG: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      }
    }
    case TagType.CREATE_SUCCESS_TAG: {
      return {
        ...state,
        loading: false,
        data: state.data.concat(action.payload.data),
      }
    }
    case TagType.EDIT_SUCCESS_TAG: {
      return {
        ...state,
        loading: false,
        data: state.data.map(item =>
          item._id.toString() === action.payload.data._id.toString() ? action.payload.data : item
        ),
      }
    }
    case TagType.DELETE_SUCCESS_TAG: {
      return {
        ...state,
        loading: false,
        data: state.data.filter(item => item._id.toString() !== action.payload.data._id.toString()),
      }
    }
    case TagType.GET_ALL_FAILURE_TAG:
    case TagType.CREATE_FAILURE_TAG:
    case TagType.EDIT_FAILURE_TAG:
    case TagType.DELETE_FAILURE_TAG: {
      return {
        ...state,
        loading: false,
        err: action.payload.message,
      }
    }
    default:
      return state
  }
}
export default TagReducers
