/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import './ManagerContract.scss'

import React, { useEffect, useState } from 'react'
import { Table, Tag, Spin, Rate } from 'antd'
import * as monment from 'moment'
import NumberFormat from 'react-number-format'
import CustomPagination from '../../components/Pagination/Pagination.component'
import EContractType from '../../enum/EContractType'

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
    render: endDate => <span>{monment(endDate).format('DD/MM/YYYY')}</span>,
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

  useEffect(() => {
    getAllContract({ limit: 10, offset: 1 }, getAllContractSuccess, getAllContractFailure)
  }, [getAllContract])

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
    getAllContract({ limit: pageSize, offset: page }, getAllContractSuccess, getAllContractFailure)
  }

  return (
    <div className="table-contract">
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
