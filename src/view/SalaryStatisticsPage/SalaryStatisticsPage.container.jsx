import { connect } from 'react-redux'
import SalaryStatisticsPage from './SalaryStatisticsPage.component'
import {
  onClearStatisticState,
  getTeacherStatisticalData,
} from '../../redux/statistic/statistic.action'

const mapStateToProps = state => ({
  getTeacherStatisticalDataObj: state.statistic.getTeacherStatisticalData,
})

const mapDispatchToProps = dispatch => ({
  onClearStatisticState: () => dispatch(onClearStatisticState()),
  getTeacherStatisticalData: filterConditions =>
    dispatch(getTeacherStatisticalData(filterConditions)),
})

const SalaryStatisticsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SalaryStatisticsPage)

export default SalaryStatisticsPageContainer
