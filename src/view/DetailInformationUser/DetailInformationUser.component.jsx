/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import './DetailInformationUser.scss'

import React, { useEffect } from 'react'
import {
  PageHeader,
  Descriptions,
  Avatar,
  Tag,
  Alert,
  Button,
  Rate,
  Progress,
  Spin,
  Modal,
  Icon,
} from 'antd'
import NumberFormat from 'react-number-format'
import * as moment from 'moment'

const { confirm } = Modal

export const DetailInformationUser = ({
  user,
  errorInfo,
  loading,
  history,
  getInforUser,
  blockUnblockAccount,
}) => {
  useEffect(() => {
    const {
      location: { pathname },
    } = history

    const pathName = pathname.split('/')
    const id = pathName[pathName.length - 1]

    getInforUser(id)
  }, [getInforUser])

  const handleblockAccount = (_id, type) => {
    blockUnblockAccount({ _id, type })
  }

  const showConfirm = data => {
    confirm({
      title: `Bạn có muốn ${data.isBlock ? 'mở khóa' : 'khóa'} tài khoản này?`,
      okText: 'Có',
      okType: 'primary',
      cancelText: 'Hủy',
      cancelButtonProps: {
        type: 'link',
      },
      onOk() {
        handleblockAccount(data._id, data.isBlock)
      },
      onCancel() {},
    })
  }

  return (
    <PageHeader ghost={false} onBack={() => history.go(-1)} title="Thông tin chi tiết người dùng">
      {loading ? (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Spin indicator={<Icon size="large" type="loading" spin />} />
        </div>
      ) : errorInfo ? (
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
        <>
          {user ? (
            <>
              <div className="ant-page-header-content__ava">
                <Avatar size={64} src={user.userId.avatar} />
                <div className="ant-page-header-content__ava--text">
                  <p>{user.userId.displayName}</p>

                  <Tag color={user.userId.isActive ? 'green' : 'red'}>
                    {user.userId.isActive ? 'Đã xác thực' : 'Chưa xác thực'}{' '}
                  </Tag>
                </div>
              </div>
              <div className="ant-page-header-content__content">
                <div className="ant-page-header-content__description">
                  <Descriptions size="large" column={1}>
                    <Descriptions.Item label="Loại tài khoản">
                      {user.userId.typeID === 0 ? 'Học sinh' : 'Giáo viên'}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email">{user.userId.email}</Descriptions.Item>
                    <Descriptions.Item label="Giới tính">
                      {user.userId.gender === 'male' ? 'Nam' : 'Nữ'}
                    </Descriptions.Item>
                    <Descriptions.Item label="Số điện thoại">{user.userId.phone}</Descriptions.Item>
                    <Descriptions.Item label="Ngày sinh">
                      {moment(user.userId.birthdate).format('DD/MM/YYYY')}
                    </Descriptions.Item>
                    <Descriptions.Item label="Địa chỉ">
                      {user.userId.district ? `${user.userId.district.name}, ` : ''}
                      {user.userId.city ? `${user.userId.city.name}` : ''}
                    </Descriptions.Item>
                    {user.tags ? (
                      <Descriptions.Item label="Kĩ năng">
                        {user.tags.map(item => (
                          <Tag color="gold">{item._id.name}</Tag>
                        ))}
                      </Descriptions.Item>
                    ) : null}
                  </Descriptions>
                </div>
                {user.userId.typeID === 1 ? (
                  <div className="ant-page-header-content__description">
                    <Descriptions size="large" column={1}>
                      <Descriptions.Item label="Mức lương (VND/h)">
                        <NumberFormat
                          value={user.salary.$numberDecimal * 1000}
                          displayType="text"
                          thousandSeparator
                          prefix=""
                          renderText={value => <span>{value}</span>}
                        />
                      </Descriptions.Item>
                      <Descriptions.Item label="Công việc đã làm">{user.jobs}</Descriptions.Item>
                      <Descriptions.Item label="Số giờ đã làm">
                        {user.hoursWorked} h
                      </Descriptions.Item>
                      <Descriptions.Item label="Tỉ lệ đánh giá">
                        <Rate disabled defaultValue={user.ratings} />
                      </Descriptions.Item>
                      <Descriptions.Item label="Giới thiệu">{user.about}</Descriptions.Item>
                    </Descriptions>
                    <div>
                      <span>Tỉ lệ thành công</span>
                      <Progress percent={user.successRate} size="small" status="active" />
                    </div>
                  </div>
                ) : null}
                <div className="ant-page-header-content__message">
                  {user.userId.isBlock ? (
                    <>
                      <Alert
                        message=""
                        description="Tài khoản này đã bị khóa? Bạn có muốn mở khóa tài khoản."
                        type="error"
                      />
                      <Button type="primary" onClick={() => showConfirm(user.userId)}>
                        Mở khóa
                      </Button>
                    </>
                  ) : (
                    <>
                      <Alert
                        message=""
                        description="Bạn có muốn khóa tài khoản này?"
                        type="error"
                      />
                      <Button type="primary" onClick={() => showConfirm(user.userId)}>
                        Khóa
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : null}{' '}
        </>
      )}
    </PageHeader>
  )
}

export default DetailInformationUser
