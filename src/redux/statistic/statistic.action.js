/* eslint-disable import/prefer-default-export */
export const getSalesByDate = (data, getSalesByDateSuccess, getSalesByDateFailure) => ({
  type: 'GET_SALE_BY_DATE',
  data,
  getSalesByDateSuccess,
  getSalesByDateFailure,
})
