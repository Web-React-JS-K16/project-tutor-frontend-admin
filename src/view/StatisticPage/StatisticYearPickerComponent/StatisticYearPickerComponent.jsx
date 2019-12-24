/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import { DatePicker } from 'antd'

export const StatisticYearPickerComponent = props => {
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
        value={startValue}
        placeholder="Tuần bắt đầu"
        mode="year"
        onChange={onStartChange}
        onOpenChange={handleStartOpenChange}
      />
      <DatePicker
        disabledDate={disabledEndDate}
        value={endValue}
        placeholder="Tuần kết thúc"
        mode="year"
        onChange={onEndChange}
        open={endOpen}
        onOpenChange={handleEndOpenChange}
      />
    </div>
  )
}
