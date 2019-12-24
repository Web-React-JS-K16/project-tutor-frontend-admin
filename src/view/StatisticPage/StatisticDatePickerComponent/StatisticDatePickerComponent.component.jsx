/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable import/prefer-default-export */
import React from 'react'
// import { Bar } from 'react-chartjs-2'
import { DatePicker } from 'antd'

export const StatisticDatePickerComponent = props => {
  const {
    startValue,
    endValue,
    endOpen,
    disabledStartDate,
    handleStartOpenChange,
    onStartChange,
    disabledEndDate,
    onEndChange,
    handleEndOpenChange,
  } = props
  return (
    <div>
      <DatePicker
        disabledDate={disabledStartDate}
        format="DD-MM-YYYY"
        value={startValue}
        placeholder="Ngày bắt đầu"
        onChange={onStartChange}
        onOpenChange={handleStartOpenChange}
      />
      <DatePicker
        disabledDate={disabledEndDate}
        format="DD-MM-YYYY"
        value={endValue}
        placeholder="Ngày kết thúc"
        onChange={onEndChange}
        open={endOpen}
        onOpenChange={handleEndOpenChange}
      />
    </div>
  )
}
