/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import './ManagerReport.scss'

import React, { useEffect, useState } from 'react'
import { Table, Spin, Avatar, Icon } from 'antd'
import * as moment from 'moment'
import LinesEllipsis from 'react-lines-ellipsis'
import CustomPagination from '../../components/Pagination/Pagination.component'

const columns = [
  {
    title: 'Tên hợp đồng',
    dataIndex: 'name',
    key: 'name',
    width: 300,
    render: (_id, row) => <span>{row.contract.name}</span>,
  },
  {
    title: 'Nội dung',
    dataIndex: 'content',
    key: 'content',
    width: 250,
    render: content => (
      <LinesEllipsis text={content} maxLine="2" ellipsis="..." trimRight basedOn="letters" />
    ),
  },
  {
    title: 'Người tố cáo',
    dataIndex: 'student',
    key: 'student',
    render: (_id, row) => (
      <span>
        <Avatar src={row.contract.studentId.avatar} />
        <span> </span>
        {row.contract.studentId.displayName}
      </span>
    ),
  },
  {
    title: 'Người bị tố cáo',
    dataIndex: 'teacher',
    key: 'teacher',
    render: (_id, row) => (
      <span>
        <Avatar src={row.contract.teacherId.avatar} />
        <span> </span>
        {row.contract.teacherId.displayName}
      </span>
    ),
  },
  {
    title: 'Ngày tố cáo',
    dataIndex: 'day',
    key: 'day',
    render: createdAt => <span>{moment(createdAt).format('DD/MM/YYYY HH:MM')}</span>,
  },
]

const ManagerReport = ({ getAllReport, history }) => {
  const [dataTable, setData] = useState(null)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize] = useState(5)
  const [err, setErr] = useState(null)

  const getAllReportSuccess = ({ data, length }) => {
    setLoading(false)
    setData(data)
    setTotal(length)
  }

  const getAllReportFailure = _message => {
    setErr(_message)
    setLoading(false)
  }

  useEffect(() => {
    getAllReport({ limit: 5, offset: 1 }, getAllReportSuccess, getAllReportFailure)
  }, [getAllReport])

  const onChangeTable = page => {
    setCurrentPage(page)
    getAllReport({ limit: pageSize, offset: page }, getAllReportSuccess, getAllReportFailure)
  }

  return (
    <div className="table-report">
      {loading ? (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Spin indicator={<Icon type="loading" spin />} />
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
          rowKey={recode => recode._id}
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
export default ManagerReport
