import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPageContainer from './components/LoginPage/LoginPage.container'
import 'antd/dist/antd.css'
import HomePageComponent from './components/HomePage/HomePage.component'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route path="/login" component={LoginPageContainer} />
      </Switch>
    </div>
  )
}

export default App
