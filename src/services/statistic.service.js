/* eslint-disable no-underscore-dangle */
import * as moment from 'moment'
import apiUrl from './api-url'

export default class StatisticService {
  static parameterizeObject = (obj, prefix) => {
    if (!obj) return ''
    const str = []
    Object.keys(obj).forEach(key => {
      if (obj[key]) {
        const formarKey = prefix ? `${prefix}[${key}]` : key
        const value = obj[key]
        str.push(
          value !== null && typeof value === 'object'
            ? this.parameterizeObject(value, formarKey)
            : `${encodeURIComponent(formarKey)}=${encodeURIComponent(value)}`
        )
      }
    })
    if (str.length === 0) return ''
    return `${str.join('&')}`
  }

  static parameterizeArray = (key, arr) => {
    if (!arr || arr.length === 0) return ''
    const array = arr.map(encodeURIComponent)
    return `&${key}[]=${array.join(`&${key}[]=`)}`
  }

  static getSalesByYear = data => {
    const { fromYear, endYear } = data
    const api = `${apiUrl}/admin/contract/statictis-by-year/${fromYear}/${endYear}`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        status = response.status
        return response.json()
      })
      .then(result => {
        if (status === 200) {
          return result
        }
        throw new Error(result.message)
      })
      .catch(err => {
        throw new Error(err.message)
      })
  }

  static getSales = data => {
    let { fromDate, endDate } = data
    const { type } = data
    fromDate = moment(fromDate).format('YYYY-MM-DD')
    endDate = moment(endDate).format('YYYY-MM-DD')
    const api = `${apiUrl}/admin/contract/${type}/${fromDate}/${endDate}`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        status = response.status
        return response.json()
      })
      .then(result => {
        if (status === 200) {
          return result
        }
        throw new Error(result.message)
      })
      .catch(err => {
        throw new Error(err.message)
      })
  }

  static getTeacherStatisticalData = filterConditions => {
    const { type, date, weekObj, monthObj, quarterObj } = filterConditions

    const query = `&${this.parameterizeObject({
      date,
    })}&${this.parameterizeObject(weekObj)}&${this.parameterizeObject(
      monthObj
    )}&${this.parameterizeObject(quarterObj)}`

    const api = `${apiUrl}/admin/teacher/statistics?type=${type}${query}`
    let status = 400
    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        status = response.status
        return response.json()
      })
      .then(result => {
        if (status !== 200) {
          throw new Error(result.message)
        }
        return result.payload
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}
