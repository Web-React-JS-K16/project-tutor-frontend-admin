/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import CreateAdminContainer from './components/CreateAdmin/CreateAdmin.container'
import AccountAdminPage from './view/AccountAdminPage/AccountAdminPage.component'
import ManagerAccountUserContainer from './view/ManagerAccountUser/ManagerAccountUser.container'
import DetailInformationUserContainer from './view/DetailInformationUser/DetailInformationUser.container'
import ManagerTagSkillContainer from './view/ManagerTagSkill/ManagerTagSkill.container'

const dashboardRoutes = [
  {
    path: '/account/admin',
    name: 'Tài khoản admin',
    component: AccountAdminPage,
    layout: '/admin',
  },
  {
    path: '/account/user/:_id',
    name: 'Thông tin chi tiết',
    component: DetailInformationUserContainer,
    layout: '/admin',
  },
  {
    path: '/account/user',
    name: 'Tài khoản người dùng',
    component: ManagerAccountUserContainer,
    layout: '/admin',
  },
  {
    path: '/skill',
    name: 'Tag kỹ năng',
    rtlName: 'لوحة القيادة',
    component: ManagerTagSkillContainer,
    layout: '/admin',
  },
  {
    path: '/contract',
    name: 'Hợp đồng',
    rtlName: 'لوحة القيادة',
    component: CreateAdminContainer,
    layout: '/admin',
  },
  {
    path: '/report',
    name: 'Khiếu nại, tố cáo',
    rtlName: 'لوحة القيادة',
    component: CreateAdminContainer,
    layout: '/admin',
  },
  {
    path: '/statistic',
    name: 'Thống kê',
    rtlName: 'لوحة القيادة',
    component: CreateAdminContainer,
    layout: '/admin',
  },
]

const navBarRoutes = [
  {
    path: '/account/admin',
    name: 'Tài khoản admin',
    icon: Person,
    component: AccountAdminPage,
    layout: '/admin',
  },
  {
    path: '/account/user',
    name: 'Tài khoản người dùng',
    icon: SupervisorAccountIcon,
    component: ManagerAccountUserContainer,
    layout: '/admin',
  },
  {
    path: '/skill',
    name: 'Tag kỹ năng',
    rtlName: 'لوحة القيادة',
    icon: BusinessCenterIcon,
    component: CreateAdminContainer,
    layout: '/admin',
  },
  {
    path: '/contract',
    name: 'Hợp đồng',
    rtlName: 'لوحة القيادة',
    icon: Dashboard,
    component: CreateAdminContainer,
    layout: '/admin',
  },
  {
    path: '/report',
    name: 'Khiếu nại, tố cáo',
    rtlName: 'لوحة القيادة',
    icon: ChatIcon,
    component: CreateAdminContainer,
    layout: '/admin',
  },
  {
    path: '/statistic',
    name: 'Thống kê',
    rtlName: 'لوحة القيادة',
    icon: EqualizerIcon,
    component: CreateAdminContainer,
    layout: '/admin',
  },
]

export { dashboardRoutes, navBarRoutes }
