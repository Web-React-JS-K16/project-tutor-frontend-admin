import TagType from './tag.types'

export const getAllTag = data => ({
  type: TagType.GET_ALL_TAG,
  payload: { data },
})

export const getAllSuccess = ({ data, length }) => ({
  type: TagType.GET_ALL_SUCCESS_TAG,
  payload: { data, length },
})

export const getAllFailure = message => ({
  type: TagType.GET_ALL_FAILURE_TAG,
  payload: { message },
})

export const createTag = data => ({
  type: TagType.CREATE_TAG,
  payload: { data },
})

export const createTagSuccess = ({ data }) => ({
  type: TagType.CREATE_SUCCESS_TAG,
  payload: { data },
})

export const createTagFailure = message => ({
  type: TagType.CREATE_FAILURE_TAG,
  payload: { message },
})

export const editTag = data => ({
  type: TagType.EDIT_TAG,
  payload: { data },
})

export const editTagSuccess = ({ data }) => ({
  type: TagType.EDIT_SUCCESS_TAG,
  payload: { data },
})

export const editTagFailure = message => ({
  type: TagType.EDIT_FAILURE_TAG,
  payload: { message },
})

export const deleteTag = data => ({
  type: TagType.DELETE_TAG,
  payload: { data },
})

export const deleteTagSuccess = ({ data }) => ({
  type: TagType.DELETE_SUCCESS_TAG,
  payload: { data },
})

export const deleteTagFailure = message => ({
  type: TagType.DELETE_FAILURE_TAG,
  payload: { message },
})
