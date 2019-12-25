/* eslint-disable import/prefer-default-export */
export const getAllReport = (data, getAllReportSuccess, getAllReportFailure) => ({
  type: 'GET_ALL_REPORT',
  data,
  getAllReportSuccess,
  getAllReportFailure,
})

export const getDetailReport = (data, getDetailReportSuccess, getDetailReportFailure) => ({
  type: 'GET_DETAIL_REPORT',
  data,
  getDetailReportSuccess,
  getDetailReportFailure,
})
