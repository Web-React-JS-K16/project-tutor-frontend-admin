import * as moment from 'moment'
import apiUrl from './api-url'

export default class ContractService {
  static getAll = data => {
    const { limit, offset, status } = data
    let { startDate, endDate } = data
    startDate = startDate ? moment(startDate).format('YYYY-MM-DD') : null
    endDate = endDate ? moment(endDate).format('YYYY-MM-DD') : null
    const api = `${apiUrl}/admin/contract/${limit}/${offset}/${status}/${startDate}/${endDate}`
    let statusRes = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        statusRes = response.status
        return response.json()
      })
      .then(result => {
        if (statusRes === 200) {
          return result
        }
        throw new Error(result.message)
      })
      .catch(err => {
        throw new Error(err.message)
      })
  }

  static getDetail = data => {
    const { id } = data
    const api = `${apiUrl}/admin/contract/${id}`
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

  static changeStatus = data => {
    const api =
      data.status === 3
        ? `${apiUrl}/admin/contract/change-status`
        : `${apiUrl}/admin/contract/change-status-complete`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'POST',
      body: JSON.stringify(data),
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
}
