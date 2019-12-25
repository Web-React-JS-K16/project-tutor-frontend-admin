/* eslint react/prop-types: 0 */
import './AccountAdminPage.scss'
import React from 'react'
import { Avatar, Icon } from 'antd'

const AccountAdminPage = ({ user }) => (
  <div className="account-page">
    <Avatar src={user.avatar} size={156} />
    <div>
      <Icon type="user" />
      <span>Tên hiển thị: {user.displayName}</span>
    </div>
  </div>
)

export default AccountAdminPage
