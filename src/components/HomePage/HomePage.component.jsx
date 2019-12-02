/* eslint-disable react/prop-types */
import React from 'react'
import { Form } from 'antd'

const HomePageComponent = () => {
  return <div>This is home</div>
}

export default Form.create({ name: 'LoginForm' })(HomePageComponent)
