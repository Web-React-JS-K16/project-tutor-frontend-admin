/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import './ManagerAccountUser.scss'

import React, { useEffect, useState } from 'react'
import * as moment from 'moment'
import { Table, Tag, Tabs, Avatar, Alert } from 'antd'
import { Link } from 'react-router-dom'
import CustomPagination from '../../components/Pagination/Pagination.component'

const { TabPane } = Tabs

const columnsTeacher = [
  {
    title: 'Tên hiển thị',
    dataIndex: 'displayName',
    key: 'displayName',
    width: 200,
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
    ellipsis: true,
    width: 200,
    render: (_id, row) => <span>{row.userId.email}</span>,
  },
  {
    title: 'Kĩ năng',
    dataIndex: 'tags',
    key: 'tags',
    width: 180,
    render: (_id, row) => (
      <span>
        {row.tags.slice(0, 5).map(item => (
          <Tag color="gold">{item._id.name}</Tag>
        ))}
      </span>
    ),
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
    width: 120,
    render: (_id, row) => {
      return <span>{row.userId.phone}</span>
    },
  },
  {
    title: 'Ngày sinh',
    key: 'birthday',
    dataIndex: 'birthday',
    width: 120,
    render: (_id, row) => <span>{moment(row.userId.birthdate).format('L')}</span>,
  },
  {
    title: 'Trạng thái',
    key: 'status',
    dataIndex: 'status',
    width: 120,
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
    width: 80,
    render: (_id, row) => (
      <Link to="/" className={row.userId.isBlock ? 'unblock' : 'block'}>
        <span>{row.userId.isBlock ? 'Mở khóa' : 'Khóa'}</span>
      </Link>
    ),
  },
]
const columnsStudent = [
  {
    title: 'Tên hiển thị',
    dataIndex: 'displayName',
    key: 'displayName',
    width: 200,
    ellipsis: true,
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
    ellipsis: true,
    width: 250,
    render: (_id, row) => <span>{row.userId.email}</span>,
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
    width: 120,
    render: (_id, row) => {
      return <span>{row.userId.phone}</span>
    },
  },
  {
    title: 'Ngày sinh',
    key: 'birthday',
    dataIndex: 'birthday',
    width: 120,
    render: (_id, row) => <span>{moment(row.userId.birthdate).format('L')}</span>,
  },
  {
    title: 'Trạng thái',
    key: 'status',
    dataIndex: 'status',
    width: 150,
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
    width: 80,
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
  lengthSt,
  messageInfoSt,
  loadingTc,
  lengthTc,
  teachers,
  messageInfoTc,
  getAllStudent,
  getAllTeacher,
  history,
}) => {
  const [currentPageTc, setCurrentPageTc] = useState(1)
  const [currentPageSt, setCurrentPageSt] = useState(1)
  const [pageSize] = useState(5)

  useEffect(() => {
    getAllStudent({ limit: pageSize, offset: currentPageSt })
    getAllTeacher({ limit: pageSize, offset: currentPageTc })
  }, [getAllStudent, getAllTeacher])

  const onChangeTableTeacher = page => {
    setCurrentPageTc(page)
    getAllTeacher({ limit: pageSize, offset: page })
  }

  const onChangeTableStudent = page => {
    setCurrentPageSt(page)
    getAllStudent({ limit: pageSize, offset: page })
  }
  return (
    <>
      {messageInfoSt || messageInfoTc ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height: '80vh',
          }}
        >
          <Alert
            message="Oops"
            description="Có lỗi trong quá trình xảy ra. Vui lòng thử lại"
            type="error"
          />
        </div>
      ) : (
        <Tabs type="card">
          <TabPane tab="Tài khoản giáo viên" key="1">
            <Table
              rowKey={record => record._id}
              columns={columnsTeacher}
              dataSource={teachers}
              onRow={r => ({
                onClick: () => history.push(`${history.location.pathname}/${r.userId._id}`),
              })}
              className="table-account"
              loading={loadingTc}
              pagination={false}
              scroll={{ x: true }}
            />
            {!loadingTc ? (
              <CustomPagination
                onChange={onChangeTableTeacher}
                total={lengthTc}
                current={currentPageTc}
                pageSize={pageSize}
                className="pagination-custom"
              />
            ) : null}
          </TabPane>
          <TabPane tab="Tài khoản học sinh" key="2">
            <Table
              rowKey={record => record._id}
              columns={columnsStudent}
              dataSource={students}
              onRow={r => ({
                onClick: () => history.push(`${history.location.pathname}/${r.userId._id}`),
              })}
              className="table-account"
              loading={loadingSt}
              pagination={false}
              scroll={{ x: true }}
            />
            {!loadingSt ? (
              <CustomPagination
                onChange={onChangeTableStudent}
                total={lengthSt}
                current={currentPageSt}
                pageSize={pageSize}
                className="pagination-custom"
              />
            ) : null}
          </TabPane>
        </Tabs>
      )}
    </>
  )
}

export default ManagerAccountUser
