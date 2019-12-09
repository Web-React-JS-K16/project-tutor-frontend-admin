import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import Admin from './layouts/Admin'

const App = () => {
  console.log('in app.js, process env 2: ', process.env.NODE_ENV)
  return (
    <div>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/admin/account/admin" />
      </Switch>
    </div>
  )
}

export default App
