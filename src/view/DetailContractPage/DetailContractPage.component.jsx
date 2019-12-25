/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import './DetailContractPage.scss'
import React, { useEffect, useState } from 'react'
import { message, Spin, PageHeader, Button, Steps, Divider, Icon } from 'antd'
import { ContractComponent } from '../../components/Contract/Contract.component'
import EContractType from '../../enum/EContractType'

const { Step } = Steps

export const DetailContractPage = ({ getDetailContract, changeStatusContract, history }) => {
  const [contract, setcontract] = useState(null)

  useEffect(() => {
    const {
      location: { pathname },
    } = history

    const pathName = pathname.split('/')
    const id = pathName[pathName.length - 1]
    getDetailContract({ id }, getDetailContractSuccess, getDetailContractFailure)
  }, [getDetailContract, history])

  const getDetailContractSuccess = ({ data }) => {
    setcontract(data[0])
  }

  const getDetailContractFailure = _message => {
    message.error(_message)
  }

  const changeStatusContractSuccess = ({ data, _message }) => {
    setcontract({ ...contract, status: data.status, endDate: data.endDate, isPaid: data.isPaid })
    message.success(_message)
  }

  const changeStatusContractFailure = _message => {
    message.error(_message)
  }

  const handleChangeStatusComplete = () => {
    changeStatusContract(
      { _id: contract._id, status: 5 },
      changeStatusContractSuccess,
      changeStatusContractFailure
    )
  }
  return (
    <>
      <PageHeader ghost={false} onBack={() => history.go(-1)} title="Thông tin chi tiết hợp đồng" />
      <div className="contract">
        {contract ? (
          <ContractComponent contract={contract} />
        ) : (
          <div style={{ textAlign: 'center' }}>
            <Spin indicator={<Icon type="loading" spin />} />
          </div>
        )}
      </div>
      {contract ? (
        <div className="contract" style={{ marginTop: '20px' }}>
          <h4>Trạng thái hợp đồng</h4>
          <Steps size="small" current={contract.status}>
            {Object.keys(EContractType.type).map(item => (
              <Step title={EContractType.type[item]} />
            ))}
          </Steps>
          {contract.status === 4 ? (
            <>
              <Divider dashed />
              <p>
                Hợp đồng đã được thanh toán, bạn vui lòng chuyển tiền cho giáo viên để hoàn tất hợp
                đồng.
              </p>
              <Button className="btn-complete-contract" onClick={handleChangeStatusComplete}>
                Chuyển tiền cho giáo viên
              </Button>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  )
}
