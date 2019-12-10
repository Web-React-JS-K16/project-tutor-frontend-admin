/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import './ManagerAccountUser.scss'

import React, { useEffect } from 'react'
import * as moment from 'moment'
import { Table, Tag, Tabs, Avatar, Alert } from 'antd'
import { Link } from 'react-router-dom'

const { TabPane } = Tabs

const columns = [
  {
    title: 'Tên hiển thị',
    dataIndex: 'displayName',
    key: 'displayName',
    render: (_id, row) => (
      <span>
        <Avatar src={row.userId.avatar} />
        <span> </span>
        {row.userId.displayName}
      </span>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (_id, row) => <span>{row.userId.email}</span>,
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
    render: (_id, row) => {
      return <span>{row.userId.phone}</span>
    },
  },
  {
    title: 'Ngày sinh',
    key: 'birthday',
    dataIndex: 'birthday',
    render: (_id, row) => <span>{moment(row.userId.birthdate).format('L')}</span>,
  },
  {
    title: 'Trạng thái',
    key: 'status',
    dataIndex: 'status',
    render: (_id, row) => (
      <span>
        <Tag color={row.userId.isBlock ? 'red' : 'green'}>
          {row.userId.isBlock ? 'Bị khóa' : 'Không bị khóa'}
        </Tag>
        <Tag color={row.userId.isActive ? 'green' : 'red'}>
          {row.userId.isActive ? 'Đã xác thực' : 'Chưa xác thực'}{' '}
        </Tag>
      </span>
    ),
  },
  {
    title: '',
    dataIndex: 'isBlock',
    key: 'isBlock',
    render: (_id, row) => (
      <Link to="/" className={row.userId.isBlock ? 'unblock' : 'block'}>
        <span>{row.userId.isBlock ? 'Mở khóa' : 'Khóa'}</span>
      </Link>
    ),
  },
]

// eslint-disable-next-line react/prop-types
const ManagerAccountUser = ({
  students,
  loadingSt,
  messageInfoSt,
  loadingTc,
  teachers,
  messageInfoTc,
  getAllStudent,
  getAllTeacher,
  history,
}) => {
  useEffect(() => {
    getAllStudent()
    getAllTeacher()
  }, [getAllStudent, getAllTeacher])

  return (
    <>
      {messageInfoSt || messageInfoTc ? (
        <Alert
          message="Oops"
          description="Có lỗi trong quá trình xảy ra. Vui lòng thử lại"
          type="error"
          style={{
            width: '240px',
            margin: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ) : (
        <Tabs type="card">
          <TabPane tab="Tài khoản giáo viên" key="1">
            <Table
              columns={columns}
              dataSource={teachers}
              onRow={r => ({
                onClick: () => history.push(`${history.location.pathname}/${r.userId._id}`),
              })}
              className="table-account"
              loading={loadingTc}
            />
          </TabPane>
          <TabPane tab="Tài khoản học sinh" key="2">
            <Table
              columns={columns}
              dataSource={students}
              onRow={r => ({
                onClick: () => history.push(`${history.location.pathname}/${r.userId._id}`),
              })}
              className="table-account"
              loading={loadingSt}
            />
          </TabPane>
        </Tabs>
      )}
    </>
  )
}

export default ManagerAccountUser
