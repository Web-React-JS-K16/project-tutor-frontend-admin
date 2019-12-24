/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */

import './DetailContractReport.scss'
import React, { useEffect, useState } from 'react'
import { message, Spin, PageHeader, Button, Alert, Descriptions } from 'antd'
import * as moment from 'moment'
import { ContractComponent } from '../../components/Contract/Contract.component'
import { Chat } from '../../components/Chat/Chat.component'

export const DetailReport = ({ getDetailReport, getMessage, changeStatusContract, history }) => {
  const [report, setReport] = useState(null)
  const [student, setStudent] = useState(null)
  const [teacher, setTeacher] = useState(null)
  const [contentMessage, setcontentMessage] = useState(null)

  const getMessageSuccess = ({ data }) => {
    setcontentMessage(data[0].message)
  }

  const getMessageFailure = _message => {
    message.error(_message)
  }
  const getDetailReportSuccess = ({ data }) => {
    const {
      contract: { teacherId, studentId },
    } = data[0]

    getMessage(
      {
        student: studentId._id,
        teacher: teacherId._id,
      },
      getMessageSuccess,
      getMessageFailure
    )
    setStudent({ _id: studentId._id, avatar: studentId.avatar, displayName: studentId.displayName })
    setTeacher({ _id: teacherId._id, avatar: teacherId.avatar, displayName: teacherId.displayName })
    setReport(data[0])
  }

  const getDetailReportFailure = _message => {
    message.error(_message)
  }

  useEffect(() => {
    const {
      location: { pathname },
    } = history

    const pathName = pathname.split('/')
    const id = pathName[pathName.length - 1]
    getDetailReport({ id }, getDetailReportSuccess, getDetailReportFailure)
  }, [getDetailReport, history])

  const changeStatusContractSuccess = ({ data, _message }) => {
    const { contract } = report
    contract.status = data.status
    const newReport = { ...data, contract }
    setReport(newReport)
    message.success(_message)
  }

  const changeStatusContractFailure = _message => {
    message.error(_message)
  }

  const handleChangeStatusComplete = () => {
    changeStatusContract(
      { _id: report.contract._id, status: 5 },
      changeStatusContractSuccess,
      changeStatusContractFailure
    )
  }

  const handleChangeStatusCancel = () => {
    changeStatusContract(
      { _id: report.contract._id, status: 3 },
      changeStatusContractSuccess,
      changeStatusContractFailure
    )
  }
  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => history.go(-1)}
        title="Thông tin chi tiết khiếu nại"
      />
      {report ? (
        <>
          <div className="report" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Descriptions title="Thông tin khiếu nại">
              <Descriptions.Item label="Tên hợp đồng">{report.contract.name}</Descriptions.Item>
              <Descriptions.Item label="Người tố cáo">
                {report.contract.studentId.displayName}
              </Descriptions.Item>
              <Descriptions.Item label="Người bị tố cáo">
                {report.contract.teacherId.displayName}
              </Descriptions.Item>
              <Descriptions.Item label="Ngày khiếu nại">
                {moment(report.createAt).format('DD/MM/YYYY HH:MM')}
              </Descriptions.Item>
              <Descriptions.Item label="Nội dung">{report.content}</Descriptions.Item>
            </Descriptions>
          </div>
          <div className="content">
            <div
              className="content__report content__report--contract"
              style={{ marginRight: '10px' }}
            >
              <ContractComponent contract={report.contract} />
            </div>
            <div
              className="content__report content__report--message"
              style={{ marginLeft: '10px' }}
            >
              {contentMessage ? (
                <Chat message={contentMessage} student={student} teacher={teacher} />
              ) : (
                <Alert
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                  }}
                  message="Tin nhắn"
                  description="Không có cuộc trò chuyện nào!"
                  type="info"
                />
              )}
            </div>
          </div>
          <div
            className="report"
            style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}
          >
            <h3>Hợp đồng này đã bị khiếu nại, bạn có thể chọn một trong hai lựa chọn sau: </h3>
            <div className="report__group-btn">
              <Button
                className="btn btn-complete-contract"
                onClick={handleChangeStatusComplete}
                disabled={report.contract.status === 5 || report.contract.status === 3}
              >
                Hoàn tất hợp đồng
              </Button>
              <Button
                className="btn btn-cancal-contract"
                onClick={handleChangeStatusCancel}
                disabled={report.contract.status === 3 || report.contract.status === 3}
              >
                Hoàn tiền cho người học
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <Spin />
        </div>
      )}
    </>
  )
}
