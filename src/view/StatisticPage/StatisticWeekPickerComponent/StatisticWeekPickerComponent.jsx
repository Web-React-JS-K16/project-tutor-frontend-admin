/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react'
import { DatePicker } from 'antd'

const { WeekPicker } = DatePicker

export const StatisticWeekPickerComponent = props => {
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
      <WeekPicker
        disabledDate={disabledStartDate}
        value={startValue}
        placeholder="Tuần bắt đầu"
        onChange={onStartChange}
        onOpenChange={handleStartOpenChange}
      />
      <WeekPicker
        disabledDate={disabledEndDate}
        value={endValue}
        placeholder="Tuần kết thúc"
        onChange={onEndChange}
        open={endOpen}
        onOpenChange={handleEndOpenChange}
      />
    </div>
  )
}
