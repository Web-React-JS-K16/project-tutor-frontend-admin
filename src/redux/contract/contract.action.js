/* eslint-disable import/prefer-default-export */
export const getAllContract = (data, getAllContractSuccess, getAllContractFailure) => ({
  type: 'GET_ALL_CONTRACT',
  data,
  getAllContractSuccess,
  getAllContractFailure,
})

export const getDetailContract = (data, getDetailContractSuccess, getDetailContractFailure) => ({
  type: 'GET_DETAIL_CONTRACT',
  data,
  getDetailContractSuccess,
  getDetailContractFailure,
})

export const changeStatusContract = (
  data,
  changeStatusContractSuccess,
  changeStatusContractFailure
) => ({
  type: 'CHANGE_STATUS_CONTRACT',
  data,
  changeStatusContractSuccess,
  changeStatusContractFailure,
})
