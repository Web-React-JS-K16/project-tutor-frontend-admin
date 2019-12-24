import { connect } from 'react-redux'
import ManagerReport from './ManagerReport.component'
import { getAllReport } from '../../redux/report/report.action'

export default connect(null, { getAllReport })(ManagerReport)
