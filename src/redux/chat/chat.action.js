/* eslint-disable import/prefer-default-export */
export const getMessage = (data, getMessageSuccess, getMessageFailure) => ({
  type: 'GET_MESSAGE',
  data,
  getMessageSuccess,
  getMessageFailure,
})
