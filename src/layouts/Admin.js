/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import { connect } from 'react-redux'
import Navbar from '../components/Navbars/Navbar'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'

import { dashboardRoutes, navBarRoutes } from '../routes'
import styles from '../assets/jss/material-dashboard-react/layouts/adminStyle'

import bgImage from '../assets/img/sidebar-2.jpg'
import logo from '../assets/img/reactlogo.png'
// eslint-disable-next-line import/no-named-as-default
import DetailInformationUser from '../view/DetailInformationUser/DetailInformationUser.component'
import { logout } from '../redux/user/user.actions'

let ps

const switchRoutes = (
  <Switch>
    <Route exact path="/admin/user/:_id" component={DetailInformationUser} />
    {dashboardRoutes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />
      }
      return null
    })}
    <Redirect from="/admin" to="/admin/account/user" />
  </Switch>
)

const useStyles = makeStyles(styles)

function Admin({ ...rest }) {
  // styles
  const classes = useStyles()
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef()
  // states and functions
  const [image] = React.useState(bgImage)
  const [color] = React.useState('blue')
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const getRoute = () => {
    return window.location.pathname !== '/admin/maps'
  }
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false)
    }
  }
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      })
      document.body.style.overflow = 'hidden'
    }
    window.addEventListener('resize', resizeFunction)
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy()
      }
      window.removeEventListener('resize', resizeFunction)
    }
  }, [mainPanel])
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={navBarRoutes}
        logoText={rest.user.displayName}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar routes={dashboardRoutes} handleDrawerToggle={handleDrawerToggle} {...rest} />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user.currentUser,
})

export default connect(mapStateToProps, { logout })(Admin)
