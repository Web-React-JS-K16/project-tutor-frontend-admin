/* eslint-disable import/prefer-default-export */
export const getSalesBykill = (data, getSalesSuccess, getSalesFailure) => ({
  type: 'GET_SALE_BY_SKILL',
  data,
  getSalesSuccess,
  getSalesFailure,
})
