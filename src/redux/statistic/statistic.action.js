/* eslint-disable import/prefer-default-export */
export const getSales = (data, getSalesSuccess, getSalesFailure) => ({
  type: 'GET_SALE',
  data,
  getSalesSuccess,
  getSalesFailure,
})

export const getSalesByYear = (data, getSalesSuccess, getSalesFailure) => ({
  type: 'GET_SALE_BY_YEAR',
  data,
  getSalesSuccess,
  getSalesFailure,
})
