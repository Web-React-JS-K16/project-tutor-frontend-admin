/* eslint-disable react/prop-types */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import Admin from './layouts/Admin'
import LoginPageContainer from './view/LoginPage/LoginPage.container'

const App = ({ currentUser }) => {
  console.log('in app.js, process env 2: ', process.env.NODE_ENV)
  return (
    <div>
      <Route path="/login" component={LoginPageContainer} />
      {currentUser ? (
        <Switch>
          <Route path="/admin" component={Admin} />
          <Redirect to="/admin/acccount/admin" />
        </Switch>
      ) : (
        <Switch>
          <Redirect from="/" to="/login" />
        </Switch>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(App)
