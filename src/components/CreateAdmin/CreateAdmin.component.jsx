/* eslint-disable react/prop-types */
import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import './CreateAdmin.style.scss'

const CreateAdminComponent = ({ form }) => {
  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        // const { email, password } = values
      }
    })
  }

  const checkLengthPassword = (_rule, value, callback) => {
    if (value.length > 0 && (value.length < 8 || value.length > 20)) {
      const myMessage = 'Mật khẩu phải từ 8 đến 20 ký tự'
      callback(myMessage)
    } else {
      callback()
    }
  }

  const comparePassword = (_rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Nhập lại mật khẩu không đúng!')
    } else {
      callback()
    }
  }

  const { getFieldDecorator } = form

  return (
    <div className="create-account-page">
      <h1 className="create-account-page__title">Tạo tài khoản admin</h1>
      <Form onSubmit={handleSubmit} className="create-account-form">
        <Form.Item hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Vui lòng nhập email!' },
              {
                type: 'email',
                message: 'Email không hợp lệ',
              },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              type="email"
            />
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!',
              },
              { validator: checkLengthPassword },
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Mật khẩu"
            />
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('repassword', {
            rules: [
              { required: true, message: 'Vui lòng nhập lại mật khẩu!' },
              { validator: comparePassword },
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Nhập lại mật khẩu"
            />
          )}
        </Form.Item>
        <div className="create-account-form__bottom">
          <Button
            type="primary"
            htmlType="submit"
            className="create-account-form-button btn-login"
            // loading={isLoading}
          >
            Tạo tài khoản
          </Button>
        </div>
      </Form>
      {/* {!isLoading && !isSuccess && <div className="message--error">{message}</div>} */}
    </div>
  )
}

export default Form.create({ name: 'CreateAdminComponent' })(CreateAdminComponent)
