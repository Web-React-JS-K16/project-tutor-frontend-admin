/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import './ManagerContract.scss'

import React, { useEffect, useState } from 'react'
import { Table, Tag, Spin, Rate, Select, Alert, Button } from 'antd'
import * as monment from 'moment'
import NumberFormat from 'react-number-format'
import CustomPagination from '../../components/Pagination/Pagination.component'
import EContractType from '../../enum/EContractType'
import { StatisticDatePickerComponent } from '../StatisticPage/StatisticDatePickerComponent/StatisticDatePickerComponent.component'

const { Option } = Select

const columns = [
  {
    title: 'Tên hợp đồng',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Giáo viên',
    dataIndex: 'teacher',
    key: 'teacher',
    render: (_id, row) => <span>{row.teacherId.displayName}</span>,
  },
  {
    title: 'Học sinh',
    dataIndex: 'student',
    key: 'student',
    render: (_id, row) => <span>{row.studentId.displayName}</span>,
  },
  {
    title: 'Ngày bắt đầu',
    dataIndex: 'startDate',
    key: 'startDate',
    render: startDate => <span>{monment(startDate).format('DD/MM/YYYY')}</span>,
  },
  {
    title: 'Ngày kết thúc',
    dataIndex: 'endDate',
    key: 'endDate',
    render: (_id, row) => (
      <span>{row.endDate ? monment(row.endDate).format('DD/MM/YYYY') : null}</span>
    ),
  },
  {
    title: 'Đánh giá',
    dataIndex: 'rating',
    key: 'rating',
    render: rating => <Rate disabled defaultValue={rating} style={{ fontSize: 16 }} />,
  },
  {
    title: 'Tổng tiền',
    dataIndex: 'tottal',
    key: 'tottal',
    render: (_id, row) => (
      <NumberFormat
        value={row.workingHour * row.costPerHour.$numberDecimal * 1000}
        displayType="text"
        thousandSeparator
        prefix=""
        renderText={value => <span>{value}&nbsp;VND</span>}
      />
    ),
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (_id, row) => (
      <span>
        <Tag color={EContractType.color[row.status]}>{EContractType.type[row.status]}</Tag>
        <Tag color={row.isPaid ? 'green' : 'red'} style={{ marginTop: '5px' }}>
          {row.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}
        </Tag>
      </span>
    ),
  },
]

// eslint-disable-next-line react/prop-types
const ManagerContract = ({ getAllContract, history }) => {
  const [dataTable, setData] = useState(null)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize] = useState(5)
  const [err, setErr] = useState(null)
  const [status, setStatus] = useState(-1)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [endOpen, setendOpen] = useState(false)

  useEffect(() => {
    getAllContract(
      { limit: 5, offset: 1, status, startDate, endDate },
      getAllContractSuccess,
      getAllContractFailure
    )
  }, [getAllContract, setStartDate, setEndDate])

  const getAllContractSuccess = ({ data, length }) => {
    setLoading(false)
    setData(data)
    setTotal(length)
  }

  const getAllContractFailure = _message => {
    setErr(_message)
    setLoading(false)
  }

  const onChangeTable = page => {
    setCurrentPage(page)
    getAllContract(
      { limit: pageSize, offset: page, status, startDate, endDate },
      getAllContractSuccess,
      getAllContractFailure
    )
  }

  const handleOnChangeSelect = value => {
    setStatus(value)
    getAllContract(
      { limit: pageSize, offset: currentPage, status: value, startDate, endDate },
      getAllContractSuccess,
      getAllContractFailure
    )
  }

  const disabledStartDate = _startDate => {
    if (!_startDate || !endDate) {
      return false
    }
    return _startDate.valueOf() > endDate.valueOf()
  }

  const disabledEndDate = _endDate => {
    if (!_endDate || !startDate) {
      return false
    }
    return _endDate.valueOf() <= startDate.valueOf()
  }

  const onStartChange = value => {
    setStartDate(value)
  }

  const onEndChange = value => {
    setEndDate(value)
  }

  const handleStartOpenChange = open => {
    if (!open) {
      setendOpen(true)
    }
  }

  const handleEndOpenChange = open => {
    setendOpen(open)
  }

  const handleClickButton = () => {
    getAllContract(
      { limit: pageSize, offset: currentPage, status, startDate, endDate },
      getAllContractSuccess,
      getAllContractFailure
    )
  }
  return (
    <div className="table-contract">
      {!loading ? (
        <div className="table-contract__header">
          <Select defaultValue={-1} style={{ width: 180 }} onChange={handleOnChangeSelect}>
            <Option value={-1}>Tất cả</Option>
            <Option value={0}>{EContractType.type[0]}</Option>
            <Option value={1}>{EContractType.type[1]}</Option>
            <Option value={2}>{EContractType.type[2]}</Option>
            <Option value={3}>{EContractType.type[3]}</Option>
            <Option value={4}>{EContractType.type[4]}</Option>
            <Option value={5}>{EContractType.type[5]}</Option>
          </Select>
          <div className="table-contract__header--picker">
            <StatisticDatePickerComponent
              startValue={startDate}
              endValue={endDate}
              endOpen={endOpen}
              disabledStartDate={disabledStartDate}
              onStartChange={onStartChange}
              handleStartOpenChange={handleStartOpenChange}
              disabledEndDate={disabledEndDate}
              onEndChange={onEndChange}
              handleEndOpenChange={handleEndOpenChange}
            />
            <Button onClick={handleClickButton}>Lọc</Button>
          </div>
        </div>
      ) : null}
      {loading ? (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Spin />
        </div>
      ) : err ? (
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
        <Table
          rowKey={record => record._id}
          columns={columns}
          dataSource={dataTable}
          loading={loading}
          pagination={false}
          onRow={r => {
            return {
              onClick: () => history.push(`${history.location.pathname}/${r._id}`),
            }
          }}
        />
      )}
      {!loading ? (
        <CustomPagination
          current={currentPage}
          total={total}
          onChange={onChangeTable}
          className="pagination-custom"
          pageSize={pageSize}
        />
      ) : null}
    </div>
  )
}

export default ManagerContract
