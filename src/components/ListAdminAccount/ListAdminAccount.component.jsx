/* eslint-disable react/prop-types */
import React from 'react'
import './ListAdminAccount.style.scss'
import UserService from '../../services/user.service'

class ListAdminAccount extends React.Component {
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
      <div className="list-admin-account">
        <div className="list-admin-account__content">
          {adminAccount.map((item, _index) => (
            <div>
              {_index}.{item.displayName} - {item.email}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default ListAdminAccount
