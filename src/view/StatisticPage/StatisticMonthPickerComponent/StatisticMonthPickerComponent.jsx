/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable import/prefer-default-export */
import React from 'react'
// import { Bar } from 'react-chartjs-2'
import { DatePicker } from 'antd'

const { MonthPicker } = DatePicker

export const StatisticMonthPickerComponent = props => {
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
      <MonthPicker
        disabledDate={disabledStartDate}
        value={startValue}
        placeholder="Tháng bắt đầu"
        onChange={onStartChange}
        onOpenChange={handleStartOpenChange}
      />
      <MonthPicker
        disabledDate={disabledEndDate}
        ư
        value={endValue}
        placeholder="Tháng kết thúc"
        onChange={onEndChange}
        open={endOpen}
        onOpenChange={handleEndOpenChange}
      />
    </div>
  )
}
