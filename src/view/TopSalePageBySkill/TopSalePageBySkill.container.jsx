import { connect } from 'react-redux'
import { TopSalePageBySkill } from './TopSalePageBySkill.component'
import { getSalesBykill } from '../../redux/skill/skill.action'

export default connect(null, { getSalesBykill })(TopSalePageBySkill)
