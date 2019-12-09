/* eslint-disable react/prop-types */
import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import UserService from '../../services/user.service'
import './HomePage.style.scss'

class HomePageComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      adminAccount: [],
    }
  }

  async componentDidMount() {
    try {
      const result = await UserService.getAllAdmin()
      this.setState({ adminAccount: result.admin })
    } catch (err) {
      console.log('err: ', err)
    }
  }

  render() {
    const { adminAccount } = this.state
    return (
      <div>
        <div>
          <i>Demo</i>
        </div>
        <h1>TRANG CHỦ</h1>
        <div>
          <h2>DANH SÁCH TÀI KHOẢN ADMIN</h2>
          <div className="home-page__content">
            {adminAccount.map((item, _index) => (
              <div>
                {_index}.{item.displayName} - {item.email}
              </div>
            ))}
          </div>
        </div>
        <div className="home-page__btns">
          <Link to="/account/create">
            <Button typeHtml="button" type="primary">
              Tạo tài khoản
            </Button>
          </Link>
          <Link to="/login">
            <Button typeHtml="button" type="primary">
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomePageComponent
