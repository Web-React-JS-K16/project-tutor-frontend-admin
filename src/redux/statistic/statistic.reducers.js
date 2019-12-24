import StatisticsTypes from './statistic.types'

const INITIAL_STATE = {
  getTeacherStatisticalData: {
    data: [],
    isLoading: false,
    isSuccess: null,
    message: null,
  },
}

const StatisticsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StatisticsTypes.CLEAR_STATISTIC_STATE:
      return {
        ...INITIAL_STATE,
      }
    // GET TEACHER STATISTICAL DATA
    case StatisticsTypes.TEACHER_GET_STATISTICS:
      return {
        ...state,
        getTeacherStatisticalData: {
          ...state.getTeacherStatisticalData,
          isLoading: true,
        },
      }
    case StatisticsTypes.TEACHER_GET_STATISTICS_SUCCESS:
      return {
        ...state,
        getTeacherStatisticalData: {
          ...state.getTeacherStatisticalData,
          data: action.payload,
          isLoading: false,
          isSuccess: true,
        },
      }
    case StatisticsTypes.TEACHER_GET_STATISTICS_FAILURE:
      return {
        ...state,
        getTeacherStatisticalData: {
          ...state.getTeacherStatisticalData,
          isLoading: false,
          isSuccess: false,
          message: action.payload,
        },
      }
    default:
      return state
  }
}

export default StatisticsReducer
