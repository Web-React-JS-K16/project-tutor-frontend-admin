/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/state-in-constructor */
/* eslint-disable import/prefer-default-export */
import './StatisticPage.component.scss'

import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import { Select, message, Button } from 'antd'
import * as moment from 'moment'
import { StatisticDatePickerComponent } from './StatisticDatePickerComponent/StatisticDatePickerComponent.component'
import { StatisticWeekPickerComponent } from './StatisticWeekPickerComponent/StatisticWeekPickerComponent'
import { StatisticMonthPickerComponent } from './StatisticMonthPickerComponent/StatisticMonthPickerComponent'
import { StatisticYearPickerComponent } from './StatisticYearPickerComponent/StatisticYearPickerComponent'
import EStatisticType from '../../enum/EStatisticType'

const { Option } = Select

export class StatisticPage extends Component {
  state = {
    fromDate: moment('1/1/2017'),
    endDate: moment('11/30/2019'),
    fromYear: 2017,
    endYear: 2019,
    endOpen: false,
    mode: 'date',
    data: [],
  }

  componentWillMount = () => {
    const { getSales } = this.props
    const { fromDate, endDate, mode } = this.state
    getSales(
      { fromDate, endDate, type: EStatisticType[mode] },
      this.getSalesSuccess,
      this.getSalesFailure
    )
  }

  getSalesSuccess = ({ data }) => {
    this.setState({ data })
  }

  getSalesFailure = _message => {
    this.setState({ data: [] })
    message.error(_message)
  }

  disabledStartDate = fromDate => {
    const { endDate } = this.state
    if (!fromDate || !endDate) {
      return false
    }
    return fromDate.valueOf() > endDate.valueOf()
  }

  disabledEndDate = endDate => {
    const { fromDate } = this.state
    if (!endDate || !fromDate) {
      return false
    }
    return endDate.valueOf() <= fromDate.valueOf()
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    })
  }

  onStartChange = value => {
    this.onChange('fromDate', value)
  }

  onEndChange = value => {
    this.onChange('endDate', value)
  }

  onStartChangeYear = value => {
    this.onChange('fromYear', value)
  }

  onEndChangeYear = value => {
    this.onChange('endYear', value)
  }

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true })
    }
  }

  handleEndOpenChange = open => {
    this.setState({ endOpen: open })
  }

  handleChange = mode => {
    this.setState({ mode })
    const { getSales } = this.props
    const { fromDate, endDate } = this.state
    getSales(
      { fromDate, endDate, type: EStatisticType[mode] },
      this.getSalesSuccess,
      this.getSalesFailure
    )
  }

  handleClickButton = () => {
    const { getSales, getSalesByYear } = this.props
    const { fromDate, endDate, fromYear, endYear, mode } = this.state

    mode === 'year'
      ? getSalesByYear({ fromYear, endYear }, this.getSalesSuccess, this.getSalesFailure)
      : getSales(
          { fromDate, endDate, type: EStatisticType[mode] },
          this.getSalesSuccess,
          this.getSalesFailure
        )
  }

  render() {
    const { mode, fromDate, endDate, fromYear, endYear, endOpen, data } = this.state
    const dataMode = {
      date: {
        component: (
          <StatisticDatePickerComponent
            startValue={fromDate}
            endValue={endDate}
            endOpen={endOpen}
            disabledStartDate={this.disabledStartDate}
            onStartChange={this.onStartChange}
            handleStartOpenChange={this.handleStartOpenChange}
            disabledEndDate={this.disabledEndDate}
            onEndChange={this.onEndChange}
            handleEndOpenChange={this.handleEndOpenChange}
          />
        ),
        label: 'Biểu đồ doanh thu theo ngày',
        backgroundColor: 'rgba(165,223,223,.3)',
        borderColor: 'rgb(75, 192, 192)',
        format: 'DD-MM-YYYY',
        labelString: 'Ngày',
      },
      week: {
        component: (
          <StatisticWeekPickerComponent
            startValue={fromDate}
            endValue={endDate}
            endOpen={endOpen}
            disabledStartDate={this.disabledStartDate}
            onStartChange={this.onStartChange}
            handleStartOpenChange={this.handleStartOpenChange}
            disabledEndDate={this.disabledEndDate}
            onEndChange={this.onEndChange}
            handleEndOpenChange={this.handleEndOpenChange}
          />
        ),
        label: 'Biểu đồ doanh thu theo tuần',
        backgroundColor: 'rgba(255,177,193,.3)',
        borderColor: 'rgb(255,99,132)',
        labelString: 'Tuần thứ',
      },
      month: {
        component: (
          <StatisticMonthPickerComponent
            startValue={fromDate}
            endValue={endDate}
            endOpen={endOpen}
            disabledStartDate={this.disabledStartDate}
            onStartChange={this.onStartChange}
            handleStartOpenChange={this.handleStartOpenChange}
            disabledEndDate={this.disabledEndDate}
            onEndChange={this.onEndChange}
            handleEndOpenChange={this.handleEndOpenChange}
          />
        ),
        label: 'Biểu đồ doanh thu theo tháng',
        backgroundColor: 'rgba(255,230,170,.3)',
        borderColor: 'rgb(255,205,86)',
        format: 'MM-YYYY',
        labelString: 'Tháng',
      },
      year: {
        component: (
          <StatisticYearPickerComponent
            startValue={fromYear}
            endValue={endYear}
            onStartChange={this.onStartChangeYear}
            onEndChange={this.onEndChangeYear}
          />
        ),
        label: 'Biểu đồ doanh thu theo năm',
        backgroundColor: 'rgba(82, 196, 26,.3)',
        borderColor: 'rgb(82, 196, 26)',
        format: 'YYYY',
        labelString: 'Năm',
      },
    }
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: 'Doanh thu (triệu VND)',
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: dataMode[mode].labelString,
            },
          },
        ],
      },
    }
    const dataChart = {
      labels: data.map(item =>
        mode !== 'week' ? moment(item._id).format(dataMode[mode].format) : item._id
      ),
      datasets: [
        {
          label: dataMode[mode].label,
          data: data.map(item => item.total.$numberDecimal),
          backgroundColor: dataMode[mode].backgroundColor,
          borderColor: dataMode[mode].borderColor,
          borderWidth: 1,
        },
      ],
    }
    return (
      <div className="statistic">
        <div className="statistic__header">
          <h3>Biểu đồ doanh thu</h3>
          <div className="statistic__header--select">
            <Select defaultValue="date" style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="date">Theo ngày</Option>
              <Option value="week">Theo tuần</Option>
              <Option value="month">Theo tháng</Option>
              <Option value="year">Theo năm</Option>
            </Select>
            <div className="statistic__header--picker">
              {dataMode[mode].component}
              <Button onClick={this.handleClickButton}>Xem kết quả</Button>
            </div>
          </div>
        </div>
        <Bar data={dataChart} options={options} />
      </div>
    )
  }
}
