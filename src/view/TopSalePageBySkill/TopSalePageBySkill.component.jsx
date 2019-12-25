/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
import './TopSalePageBySkill.scss'

import React, { Component } from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import { Select, message, Button } from 'antd'
import { ByDateComponent } from './ByDate/ByDate.component'
import { ByWeekComponent } from './ByWeek/ByWeek.component'
import { ByMonthComponent } from './ByMonth/BYMonth.component'

const { Option } = Select

const options = {
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        scaleLabel: {
          display: true,
          labelString: 'Triệu (VND)',
        },
      },
    ],
  },
}

export class TopSalePageBySkill extends Component {
  state = {
    endDate: null,
    endOpen: false,
    data: [],
    mode: 'all',
  }

  componentWillMount = () => {
    const { getSalesBykill } = this.props
    const { endDate, mode } = this.state
    getSalesBykill({ endDate, mode }, this.getSalesSuccess, this.getSalesFailure)
  }

  handleSelect = mode => {
    const { getSalesBykill } = this.props
    const { endDate } = this.state
    if (mode === 'all') {
      getSalesBykill({ endDate, mode }, this.getSalesSuccess, this.getSalesFailure)
    }
    this.setState({ mode, data: [], endDate: null })
  }

  getSalesSuccess = ({ data }) => {
    this.setState({ data })
  }

  getSalesFailure = _message => {
    this.setState({ data: [] })
    message.error(_message)
  }

  onChange = value => {
    this.setState({
      endDate: value,
    })
  }

  onOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true })
    }
  }

  handleClickButton = () => {
    const { endDate, mode } = this.state
    const { getSalesBykill } = this.props
    getSalesBykill({ endDate, mode }, this.getSalesSuccess, this.getSalesFailure)
  }

  render() {
    const { data, endDate, mode } = this.state

    const dataMode = {
      all: {
        component: <div />,
        label: `Top 10 kĩ năng doanh thu cao nhất`,
      },
      date: {
        component: (
          <ByDateComponent
            endDate={endDate}
            onOpenChange={this.onOpenChange}
            onChange={this.onChange}
          />
        ),
        label: `Top 10 kĩ năng doanh thu cao nhất trong ngày`,
      },
      week: {
        component: (
          <ByWeekComponent
            endDate={endDate}
            onOpenChange={this.onOpenChange}
            onChange={this.onChange}
          />
        ),
        label: `Top 10 kĩ năng doanh thu cao nhất trong tuần`,
      },
      month: {
        component: (
          <ByMonthComponent
            endDate={endDate}
            onOpenChange={this.onOpenChange}
            onChange={this.onChange}
          />
        ),
        label: `Top 10 kĩ năng doanh thu cao nhất trong tháng`,
      },
      three_month: {
        component: (
          <ByMonthComponent
            endDate={endDate}
            onOpenChange={this.onOpenChange}
            onChange={this.onChange}
          />
        ),
        label: `Top 10 kĩ năng doanh thu cao nhất trong 3 tháng`,
      },
    }

    const dataChart = {
      labels: data.map(item => item.name),
      datasets: [
        {
          label: dataMode[mode].label,
          data: data.map(item => item.cost),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(81, 194, 194, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(81, 194, 194, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }

    return (
      <div className="top-sales">
        <div className="top-sales__header">
          <h3>Biểu đồ doanh thu</h3>
          <div className="top-sales__header--select">
            <Select defaultValue="all" style={{ width: 120 }} onChange={this.handleSelect}>
              <Option value="all">Tất cả</Option>
              <Option value="date">Ngày</Option>
              <Option value="week">Tuần</Option>
              <Option value="month">30 Ngày</Option>
              <Option value="three_month">90 Ngày</Option>
            </Select>
            <div className="top-sales__header--picker">
              {dataMode[mode].component}
              {mode !== 'all' ? (
                <Button onClick={this.handleClickButton}>Xem kết quả</Button>
              ) : null}
            </div>
          </div>
        </div>
        <div className="top-sales__chart">
          <HorizontalBar data={dataChart} options={options} />
        </div>
      </div>
    )
  }
}
