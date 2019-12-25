import { connect } from 'react-redux'
import { StatisticPage } from './StatisticPage.component'
import { getSales, getSalesByYear } from '../../redux/statistic/statistic.action'

export default connect(null, { getSales, getSalesByYear })(StatisticPage)
