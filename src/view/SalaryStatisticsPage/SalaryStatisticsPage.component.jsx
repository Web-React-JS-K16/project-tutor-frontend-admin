/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/state-in-constructor */
/* eslint-disable import/prefer-default-export */

import React, { useEffect, useState } from 'react'
import { Row, Col, Spin, Icon, Select, DatePicker, Button, message, Empty } from 'antd'
import * as moment from 'moment'
import TeacherItem from '../../components/TeacherItem/TeacherItem.component'
import './SalaryStatisticsPage.style.scss'

const { Option } = Select
const { WeekPicker, MonthPicker } = DatePicker

const SalaryStatisticsPage = ({
  getTeacherStatisticalDataObj,
  getTeacherStatisticalData,
  onClearStatisticState,
}) => {
  const [type, setType] = useState('date')
  const [pickerData, setPickerData] = useState()
  const [quarterData, setQuarterData] = useState(1)
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    onClearStatisticState()
    getTeacherStatisticalData({ type: 'date', date: Date.now() })
  }, [onClearStatisticState, getTeacherStatisticalData])

  const onChangeStatisticalType = value => {
    setType(value)
    setPickerData(null)
    setQuarterData(1)
    if (value === 'all') {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }

  const checkDisabledBtn = value => {
    if (type === 'quarter') {
      if (quarterData && value) {
        setIsDisabled(false)
      } else {
        setIsDisabled(true)
      }
    } else if (value) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }

  const onChangePickerData = value => {
    setPickerData(value)
    checkDisabledBtn(value)
  }

  const onPanelChangePickerData = value => {
    setPickerData(value)
    checkDisabledBtn(value)
  }

  const onChangeQuarterData = value => {
    setQuarterData(value)
    checkDisabledBtn(value)
  }

  const onOkData = () => {
    const filterConditions = {
      type,
    }
    if (type === 'date') {
      filterConditions.date = pickerData.valueOf()
    } else if (type === 'week') {
      const week = pickerData.format('w')
      const year = pickerData.format('YYYY')
      filterConditions.weekObj = {
        weekObj: { week, year },
      }
    } else if (type === 'month') {
      const date = new Date(pickerData)
      filterConditions.monthObj = {
        monthObj: {
          month: date.getMonth().toString(),
          year: date.getFullYear(),
        },
      }
    } else if (type === 'quarter') {
      const date = new Date(pickerData)
      filterConditions.quarterObj = {
        quarterObj: {
          quarter: quarterData,
          year: date.getFullYear(),
        },
      }
    }
    getTeacherStatisticalData(filterConditions)
  }

  if (!getTeacherStatisticalDataObj.isLoading && getTeacherStatisticalDataObj.isSuccess === false) {
    message.error(getTeacherStatisticalDataObj.message)
  }

  return (
    <div className="salary-statistics-page">
      {getTeacherStatisticalDataObj.isLoading && (
        <div className="salary-statistics-page__loading">
          <Spin indicator={<Icon type="loading" spin />} />
        </div>
      )}

      <div className="salary-statistics-page__wrapper">
        <div className="salary-statistics-page__wrapper__header">
          <h3>Top 10 doanh thu của giáo viên</h3>
        </div>
        <Row>
          <div className="salary-statistics-page__wrapper__select-type">
            <Select defaultValue={type} style={{ width: 180 }} onChange={onChangeStatisticalType}>
              <Option value="date">Trong 1 ngày</Option>
              <Option value="week">Trong 1 tuần</Option>
              <Option value="month">Trong 1 tháng</Option>
              <Option value="quarter">Trong 1 quý</Option>
              <Option value="all">Tất cả</Option>
            </Select>
            {type === 'date' && (
              <DatePicker
                format="DD/MM/YYYY"
                defaultValue={moment(new Date(Date.now()), 'DD/MM/YYYY')}
                onChange={onChangePickerData}
                placeholder="Chọn ngày"
              />
            )}
            {type === 'week' && (
              <WeekPicker
                format="Tuần w YYYY"
                onChange={onChangePickerData}
                placeholder="Chọn tuần"
              />
            )}
            {type === 'month' && (
              <MonthPicker
                format="MM/YYYY"
                onChange={onChangePickerData}
                placeholder="Chọn tháng"
              />
            )}
            {type === 'quarter' && (
              <>
                <Select
                  defaultValue={quarterData}
                  style={{ width: 180 }}
                  onChange={onChangeQuarterData}
                >
                  <Option value={1}>Quý 1</Option>
                  <Option value={2}>Quý 2</Option>
                  <Option value={3}>Quý 3</Option>
                  <Option value={4}>Quý 4</Option>
                </Select>
                <DatePicker
                  mode="year"
                  format="YYYY"
                  value={pickerData}
                  onChange={onChangePickerData}
                  onPanelChange={onPanelChangePickerData}
                  placeholder="Chọn năm"
                />
              </>
            )}
            <Button onClick={onOkData} disabled={isDisabled} type="primary">
              Thống kê
            </Button>
          </div>
        </Row>
        {!getTeacherStatisticalDataObj.isLoading &&
          getTeacherStatisticalDataObj.isSuccess === true && (
            <Row>
              <div className="salary-statistics-page__wrapper__statistics">
                {getTeacherStatisticalDataObj.data.length === 0 && <Empty />}
                <Col>
                  {getTeacherStatisticalDataObj.data.map((element, index) => {
                    const rank = {
                      number: index,
                      salary: element.salary,
                    }
                    return (
                      <TeacherItem
                        key={element.teacher._id}
                        rank={rank}
                        teacher={element.teacher}
                      />
                    )
                  })}
                </Col>
              </div>
            </Row>
          )}
      </div>
    </div>
  )
}

SalaryStatisticsPage.propTypes = {}

export default SalaryStatisticsPage
