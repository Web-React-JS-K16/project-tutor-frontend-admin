import MajorType from './major.types'

export const getAllMajor = () => ({
  type: MajorType.GET_ALL_MAJOR,
})

export const getAllSuccess = ({ data }) => ({
  type: MajorType.GET_ALL_SUCCESS_MAJOR,
  payload: { data },
})

export const getAllFailure = message => ({
  type: MajorType.GET_ALL_FAILURE_MAJOR,
  payload: { message },
})
