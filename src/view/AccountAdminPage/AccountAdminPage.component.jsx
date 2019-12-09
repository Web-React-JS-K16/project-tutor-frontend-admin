/* eslint react/prop-types: 0 */
import React from 'react'
import { Tabs } from 'antd'
import CreateAdminContainer from '../../components/CreateAdmin/CreateAdmin.container'
import ListAdminAccount from '../../components/ListAdminAccount/ListAdminAccount.component'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const AccountAdminPage = () => {
  return (
    <div className="account-page">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Danh sách tài khoản" key={1}>
          <ListAdminAccount />
        </TabPane>
        <TabPane tab="Tạo tài khoản" key={2}>
          <CreateAdminContainer />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default AccountAdminPage
