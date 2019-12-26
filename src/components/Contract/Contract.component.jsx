/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import { Timeline, Descriptions, Tag, Divider, Icon, Avatar } from 'antd'
import * as moment from 'moment'
import NumberFormat from 'react-number-format'
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
        <Descriptions.Item label="Tổng số giờ">{contract.workingHour}&nbsp;h</Descriptions.Item>
        <Descriptions.Item label="Ngày kết thúc">
          {contract.endDate ? moment(contract.endDate).format('DD/MM/YYYY HH:MM') : null}
        </Descriptions.Item>
        <Descriptions.Item label="Sô tiền trên một giờ">
          <NumberFormat
            value={contract.costPerHour.$numberDecimal * 1000}
            displayType="text"
            thousandSeparator
            prefix=""
            renderText={value => <span>{value}&nbsp;VND/h</span>}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái">
          <Tag color={EContractType.color[contract.status]}>
            {EContractType.type[contract.status]}
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Chuyển tiền">
          <Tag color={contract.isPaid ? 'green' : 'red'}>
            {contract.isPaid ? 'Đã chuyển tiền' : 'Chưa chuyển tiền'}
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Kĩ năng">
          {contract.tags
            ? contract.tags.map(item => <Tag color="gold">{item._id.name}</Tag>)
            : null}
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
            {contract.teacherId.email || 'Chưa cập nhật gmail'}
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
              Chưa cập nhật giới tính
            </Timeline.Item>
          )}
          <Timeline.Item dot={<Icon type="phone" style={{ fontSize: '16px', color: '#faad14' }} />}>
            {contract.teacherId.phone || 'Chưa cập nhật số điện thoại'}
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="calendar" style={{ fontSize: '16px', color: '#faad14' }} />}
          >
            {moment(contract.teacherId.birthdate).format('DD/MM/YYYY') || 'Chưa cập nhật ngày sinh'}
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="environment" style={{ fontSize: '16px', color: '#faad14' }} />}
          >
            {contract.teacherId.district ? `${contract.teacherId.district.name}, ` : ''}
            {contract.teacherId.city ? `${contract.teacherId.city.name}` : ''}
            {!contract.teacherId.district && !contract.teacherId.city
              ? 'Chưa cập nhật địa chỉ'
              : ''}
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
            {contract.studentId.email || 'Chưa cập nhật gmail'}
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
              {' '}
              Chưa cập nhật giới tính
            </Timeline.Item>
          )}
          <Timeline.Item dot={<Icon type="phone" style={{ fontSize: '16px', color: '#faad14' }} />}>
            {contract.studentId.phone || 'Chưa cập nhật số điện thoại'}
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="calendar" style={{ fontSize: '16px', color: '#faad14' }} />}
          >
            {moment(contract.studentId.birthdate).format('DD/MM/YYYY') || 'Chưa cập nhật ngày sinh'}
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="environment" style={{ fontSize: '16px', color: '#faad14' }} />}
          >
            {contract.studentId.district ? `${contract.studentId.district.name}, ` : ''}
            {contract.studentId.city ? `${contract.studentId.city.name}` : ''}
            {!contract.studentId.district && !contract.studentId.city
              ? 'Chưa cập nhật địa chỉ'
              : ''}
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  </>
)
