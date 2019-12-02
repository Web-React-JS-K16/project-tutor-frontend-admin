/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { Form, Icon, Input, Button, message } from 'antd'
import './CreateAdmin.style.scss'

const CreateAdminComponent = ({
  form,
  createAccount: { isLoading, isSuccess },
  createAccount,
  createAccountStart,
  clearCreateAccount,
}) => {
  useEffect(() => {
    console.log('on use effect: ', isSuccess)
    if (isSuccess) {
      message.info(createAccount.message)
      form.resetFields()
      // clear reducer createAccount
      clearCreateAccount()
    }
  }, [isSuccess, form, clearCreateAccount, createAccount.message])

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        const { email, password, displayName } = values
        createAccountStart({ email, password, displayName })
      }
    })
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
    <div className="login-page">
      <h1 className="login-page__title">
        Đăng nhập
        <div>Admin</div>
      </h1>

      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Vui lòng nhập email!' },
              {
                type: 'email',
                message: 'Email không hợp lệ!',
              },
            ],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              type="email"
            />
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('displayName', {
            rules: [
              { required: true, message: 'Vui lòng nhập tên!' },
              { max: 20, message: 'Tên không được vượt quá 20 ký tự!' },
              { min: 3, message: 'Tên phải dài hơn 2 ký tự!' },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Tên"
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
              {
                min: 5,
                message: 'Mật khẩu phải từ 5 ký tự trở lên',
              },
              {
                max: 20,
                message: 'Mật khẩu tối đa là 20 ký tự',
              },
              // { validator: () => checkLengthPassword() }
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
        <div className="login-form__bottom">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button btn-login"
            loading={isLoading}
          >
            Tạo tài khoản
          </Button>
        </div>
      </Form>
      {!isLoading && isSuccess !== null && (
        <div className="message--error">{createAccount.message}</div>
      )}
    </div>
  )
}

// class CreateAdminComponent extends React.Component {
//   getDerivedStateFromProps(nextProps) {
//     console.log("next props: ", nextProps);
//     console.log(" props: ", this.props);
//     const { form, createAccount } = this.props

//     if (nextProps.createAccount.isSuccess !== createAccount.isSuccess
//       && nextProps.createAccount.isSuccess) {
//         console.log("on reset: ");
//       form.resetFields()
//     }
//   }

//   handleSubmit = e => {
//     e.preventDefault()
//     const { createAccountStart, form } = this.props
//     form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values)
//         const { email, password, displayName } = values
//         createAccountStart({ email, password, displayName })

//       }
//     })
//   }

//   comparePassword = (_rule, value, callback) => {
//     const { form } = this.props

//     if (value && value !== form.getFieldValue('password')) {
//       callback('Nhập lại mật khẩu không đúng!');
//     } else {
//       callback();
//     }
//   };
//   render() {
//     const { form: { getFieldDecorator }, createAccount: { isLoading, isSuccess, message } } = this.props
//     return (
//       <div className="login-page">
//         <h1 className="login-page__title">
//           Đăng nhập
//         <div>Admin</div>
//         </h1>

//         <Form onSubmit={this.handleSubmit} className="login-form">
//           <Form.Item hasFeedback>
//             {getFieldDecorator('email', {
//               rules: [
//                 { required: true, message: 'Vui lòng nhập email!' },
//                 {
//                   type: 'email',
//                   message: 'Email không hợp lệ!',
//                 }],
//             })(
//               <Input
//                 prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 placeholder="Email"
//                 type="email"
//               />
//             )}
//           </Form.Item>
//           <Form.Item hasFeedback>
//             {getFieldDecorator('displayName', {
//               rules: [{ required: true, message: 'Vui lòng nhập tên!' },
//               { max: 20, message: "Tên không được vượt quá 20 ký tự!" },
//               { min: 3, message: "Tên phải dài hơn 2 ký tự!" }
//               ],
//             })(
//               <Input
//                 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 placeholder="Tên"
//               />
//             )}
//           </Form.Item>
//           <Form.Item hasFeedback>
//             {getFieldDecorator('password', {
//               rules: [
//                 {
//                   required: true,
//                   message: 'Vui lòng nhập mật khẩu!',
//                 },
//                 {
//                   min: 5, message: "Mật khẩu phải từ 5 ký tự trở lên"
//                 },
//                 {
//                   max: 20, message: "Mật khẩu tối đa là 20 ký tự"
//                 }
//                 // { validator: () => checkLengthPassword() }
//               ],
//             })(
//               <Input
//                 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 type="password"
//                 placeholder="Mật khẩu"
//               />
//             )}
//           </Form.Item>
//           <Form.Item hasFeedback>
//             {getFieldDecorator('repassword', {
//               rules: [
//                 { required: true, message: 'Vui lòng nhập lại mật khẩu!' },
//                 { validator: this.comparePassword },
//               ],
//             })(
//               <Input
//                 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 type="password"
//                 placeholder="Nhập lại mật khẩu"
//               />
//             )}
//           </Form.Item>
//           <div className="login-form__bottom">
//             <Button
//               type="primary"
//               htmlType="submit"
//               className="login-form-button btn-login"
//               loading={isLoading}
//             >
//               Tạo tài khoản
//           </Button>
//           </div>
//         </Form>
//         {!isLoading && isSuccess !== null && <div className="message--error">{message}</div>}
//       </div>
//     );
//   }
// }

export default Form.create({ name: 'CreateAdminComponent' })(CreateAdminComponent)
