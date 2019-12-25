/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import { DatePicker } from 'antd'

const { MonthPicker } = DatePicker

export const ByMonthComponent = props => {
  const { endDate, onChange, onOpenChange } = props
  return (
    <div>
      <MonthPicker
        value={endDate}
        placeholder="Chọn tháng"
        onChange={onChange}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}
