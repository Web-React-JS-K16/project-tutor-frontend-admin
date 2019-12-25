/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react'
import { DatePicker } from 'antd'

const { WeekPicker } = DatePicker

export const ByWeekComponent = props => {
  const { endDate, onOpenChange, onChange } = props
  return (
    <div>
      <WeekPicker
        value={endDate}
        placeholder="Chọn tuần"
        onChange={onChange}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}
