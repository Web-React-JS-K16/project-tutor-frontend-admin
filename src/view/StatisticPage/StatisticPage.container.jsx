import { connect } from 'react-redux'
import { StatisticPage } from './StatisticPage.component'
import { getSalesByDate } from '../../redux/statistic/statistic.action'

export default connect(null, { getSalesByDate })(StatisticPage)
