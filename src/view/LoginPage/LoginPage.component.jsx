/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'
import { Form, Icon, Input, Button } from 'antd'
import { Redirect } from 'react-router-dom'
import './LoginPage.style.scss'

const LoginPage = ({ currentUser, form, loginStart, login: { isLoading, isSuccess, message } }) => {
  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        const { email, password } = values
        loginStart(email, password)
      }
    })
  }

  const { getFieldDecorator } = form

  if (currentUser) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-page">
      <h1 className="login-page__title">
        Đăng nhập
        <div>Admin</div>
      </h1>

      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Vui lòng nhập email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              type="email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!',
              },
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Mật khẩu"
            />
          )}
        </Form.Item>
        <div className="login-form__bottom">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button btn-login"
            loading={isLoading}
          >
            Đăng nhập
          </Button>
        </div>
      </Form>
      {!isLoading && !isSuccess && <div className="message--error">{message}</div>}
    </div>
  )
}

LoginPage.propTypes = {}

export default Form.create({ name: 'LoginForm' })(LoginPage)
