/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import { DatePicker } from 'antd'

export const ByDateComponent = props => {
  const { endDate, onOpenChange, onChange } = props
  return (
    <div>
      <DatePicker
        format="DD-MM-YYYY"
        value={endDate}
        placeholder="Chọn ngày"
        onChange={onChange}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}
