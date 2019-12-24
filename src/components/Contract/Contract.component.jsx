/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import { Timeline, Descriptions, Tag, Divider, Icon, Avatar } from 'antd'
import * as moment from 'moment'
import EContractType from '../../enum/EContractType'

export const ContractComponent = ({ contract }) => (
  <>
    <div className="contract__title">
      <h1>HỢP ĐỒNG DẠY HỌC</h1>
      <h2>{contract.name}</h2>
    </div>
    <div className="contract__information">
      <Descriptions size="big" column={2}>
        <Descriptions.Item label="Ngày bắt đầu">
          {moment(contract.startDate).format('DD/MM/YYYY HH:MM')}
        </Descriptions.Item>
        <Descriptions.Item label="Tổng số giờ">{contract.workingHour}</Descriptions.Item>
        <Descriptions.Item label="Ngày kết thúc">
          {moment(contract.endDate).format('DD/MM/YYYY HH:MM')}
        </Descriptions.Item>
        <Descriptions.Item label="Sô tiền trên một giờ">
          {contract.costPerHour.$numberDecimal} VND/h
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái">
          <Tag color={EContractType.color[contract.status]}>
            {EContractType.type[contract.status]}
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Thanh toán">
          <Tag color={contract.isPaid ? 'green' : 'red'}>
            {contract.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Nội dung">{contract.content}</Descriptions.Item>
      </Descriptions>
    </div>
    <Divider dashed />
    <div className="contract__content">
      <div className="contract__content--user contract__content-teacher">
        <div className="contract__content--title">
          <h3>GIÁO VIÊN</h3>
          <span>
            <Avatar size={32} src={contract.teacherId.avatar} />
            <span className="name">{contract.teacherId.displayName}</span>
          </span>
        </div>

        <Timeline>
          <Timeline.Item dot={<Icon type="mail" style={{ fontSize: '16px', color: '#faad14' }} />}>
            {contract.teacherId.email || '...'}
          </Timeline.Item>
          {contract.teacherId.gender === 'male' ? (
            <Timeline.Item dot={<Icon type="man" style={{ fontSize: '16px', color: '#faad14' }} />}>
              Nam
            </Timeline.Item>
          ) : contract.teacherId.gender === 'female' ? (
            <Timeline.Item
              dot={<Icon type="woman" style={{ fontSize: '16px', color: '#faad14' }} />}
            >
              Nữ
            </Timeline.Item>
          ) : (
            <Timeline.Item
              dot={<Icon type="woman" style={{ fontSize: '16px', color: '#faad14' }} />}
            >
              ...
            </Timeline.Item>
          )}
          <Timeline.Item dot={<Icon type="phone" style={{ fontSize: '16px', color: '#faad14' }} />}>
            {contract.teacherId.phone || '...'}
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="calendar" style={{ fontSize: '16px', color: '#faad14' }} />}
          >
            {moment(contract.teacherId.birthdate).format('DD/MM/YYYY') || '...'}
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="environment" style={{ fontSize: '16px', color: '#faad14' }} />}
          >
            {contract.teacherId.district ? `${contract.teacherId.district.name}, ` : ''}
            {contract.teacherId.city ? `${contract.teacherId.city.name}` : ''}
          </Timeline.Item>
        </Timeline>
      </div>
      <div className="contract__content--user contract__content-student">
        <div className="contract__content--title">
          <h3>HỌC SINH</h3>
          <span>
            <Avatar size={32} src={contract.studentId.avatar} />
            <span className="name">{contract.studentId.displayName}</span>
          </span>
        </div>

        <Timeline>
          <Timeline.Item dot={<Icon type="mail" style={{ fontSize: '16px', color: '#faad14' }} />}>
            {contract.studentId.email || '...'}
          </Timeline.Item>
          {contract.studentId.gender === 'male' ? (
            <Timeline.Item dot={<Icon type="man" style={{ fontSize: '16px', color: '#faad14' }} />}>
              Nam
            </Timeline.Item>
          ) : contract.studentId.gender === 'female' ? (
            <Timeline.Item
              dot={<Icon type="woman" style={{ fontSize: '16px', color: '#faad14' }} />}
            >
              Nữ
            </Timeline.Item>
          ) : (
            <Timeline.Item
              dot={<Icon type="woman" style={{ fontSize: '16px', color: '#faad14' }} />}
            >
              ...
            </Timeline.Item>
          )}
          <Timeline.Item dot={<Icon type="phone" style={{ fontSize: '16px', color: '#faad14' }} />}>
            {contract.studentId.phone || '...'}
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="calendar" style={{ fontSize: '16px', color: '#faad14' }} />}
          >
            {moment(contract.studentId.birthdate).format('DD/MM/YYYY') || '...'}
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="environment" style={{ fontSize: '16px', color: '#faad14' }} />}
          >
            {contract.studentId.district ? `${contract.studentId.district.name}, ` : ''}
            {contract.studentId.city ? `${contract.studentId.city.name}` : ''}
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  </>
)
