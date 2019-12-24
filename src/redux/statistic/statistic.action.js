import StatisticsTypes from './statistic.types'

export const onClearStatisticState = () => ({
  type: StatisticsTypes.CLEAR_STATISTIC_STATE,
})

/* eslint-disable import/prefer-default-export */
export const getSales = (data, getSalesSuccess, getSalesFailure) => ({
  type: StatisticsTypes.GET_SALE,
  data,
  getSalesSuccess,
  getSalesFailure,
})

export const getSalesByYear = (data, getSalesSuccess, getSalesFailure) => ({
  type: StatisticsTypes.GET_SALE_BY_YEAR,
  data,
  getSalesSuccess,
  getSalesFailure,
})

//= == get statistical data
export const getTeacherStatisticalData = filterConditions => ({
  type: StatisticsTypes.TEACHER_GET_STATISTICS,
  payload: filterConditions,
})
export const getTeacherStatisticalDataSuccess = data => ({
  type: StatisticsTypes.TEACHER_GET_STATISTICS_SUCCESS,
  payload: data,
})
export const getTeacherStatisticalDataFailure = message => ({
  type: StatisticsTypes.TEACHER_GET_STATISTICS_FAILURE,
  payload: message,
})
