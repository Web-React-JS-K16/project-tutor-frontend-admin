/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import './DetailInformationUser.scss'

import React, { useEffect } from 'react'
import { PageHeader, Descriptions, Avatar, Tag, Alert, Button, Rate, Progress, Spin } from 'antd'
import * as moment from 'moment'

export const DetailInformationUser = ({ user, messageInfo, loading, history, getInforUser }) => {
  useEffect(() => {
    const {
      location: { pathname },
    } = history

    const pathName = pathname.split('/')
    const id = pathName[pathName.length - 1]

    getInforUser(id)
  }, [getInforUser])

  return (
    <PageHeader ghost={false} onBack={() => history.go(-1)} title="Thông tin chi tiết người dùng">
      {loading ? (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Spin size="large" />
        </div>
      ) : messageInfo ? (
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
                  <p>Nguyễn Văn A</p>
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
                    <Descriptions.Item label="Số điện thoại">{user.userId.phone}</Descriptions.Item>
                    <Descriptions.Item label="Ngày sinh">
                      {moment(user.userId.birthdate).format('L')}
                    </Descriptions.Item>
                    <Descriptions.Item label="Địa chỉ">
                      268 Lý Thái Tổ, quận 3, Hồ Chí Minh
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
                      <Descriptions.Item label="Mức lương (vnđ/h)">{user.salary}</Descriptions.Item>
                      <Descriptions.Item label="Công việc đã làm">{user.jobs}</Descriptions.Item>
                      <Descriptions.Item label="Số giờ đã làm">
                        {user.hoursWorked}
                      </Descriptions.Item>
                      <Descriptions.Item label="Tỉ lệ đánh giá">
                        <Rate disabled defaultValue={user.ratings} />
                      </Descriptions.Item>
                      <Descriptions.Item label="Giới thiệu">{user.about}</Descriptions.Item>
                    </Descriptions>
                    <div>
                      <span>Tỉ lệ thành công</span>
                      <Progress percent={50} size="small" status="active" />
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
                      <Button type="primary">Mở khóa</Button>
                    </>
                  ) : (
                    <>
                      <Alert
                        message=""
                        description="Bạn có muốn khóa tài khoản này?"
                        type="error"
                      />
                      <Button type="primary">Khóa</Button>
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
