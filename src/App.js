import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPageContainer from './components/LoginPage/LoginPage.container'
import 'antd/dist/antd.css'
import HomePageComponent from './components/HomePage/HomePage.component'
import CreateAdminContainer from './components/CreateAdmin/CreateAdmin.container'

const App = () => {
  console.log('in app.js, process env 2: ', process.env.NODE_ENV)
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route path="/login" component={LoginPageContainer} />
        <Route path="/account/create" component={CreateAdminContainer} />
      </Switch>
    </div>
  )
}

export default App
