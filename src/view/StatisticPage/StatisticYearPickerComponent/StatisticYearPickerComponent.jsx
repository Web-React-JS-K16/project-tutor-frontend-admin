/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import { Select } from 'antd'

const { Option } = Select
const dataYear = []
for (let index = 1990; index <= 2050; index++) {
  dataYear.push(index)
}
export const StatisticYearPickerComponent = props => {
  const { startValue, endValue, onStartChange, onEndChange } = props
  const startValueNow = startValue || new Date().getFullYear()
  const endValueNow = endValue || new Date().getFullYear()
  console.log('startValue', startValue, 'endValue', endValue)
  console.log('startValueNow', startValueNow, 'endValueNow', endValueNow)
  return (
    <div>
      <Select defaultValue={startValueNow} style={{ width: 120 }} onChange={onStartChange}>
        {dataYear.map((item, index) => (
          <Option value={item} key={index} disabled={item > endValueNow}>
            {item}
          </Option>
        ))}
      </Select>
      <Select defaultValue={endValueNow} style={{ width: 120 }} onChange={onEndChange}>
        {dataYear.map((item, index) => (
          <Option value={item} key={index} disabled={item < startValueNow}>
            {item}
          </Option>
        ))}
      </Select>
    </div>
  )
}
