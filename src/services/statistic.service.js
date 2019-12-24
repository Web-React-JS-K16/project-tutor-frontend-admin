/* eslint-disable no-underscore-dangle */
import * as moment from 'moment'
import apiUrl from './api-url'

export default class ReportService {
  static getSalesByDate = data => {
    let { fromDate, endDate } = data
    fromDate = moment(fromDate).format('YYYY-MM-DD')
    endDate = moment(endDate).format('YYYY-MM-DD')
    const api = `${apiUrl}/admin/contract/statictis-by-date/${fromDate}/${endDate}`
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
}
