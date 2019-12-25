/* eslint-disable no-underscore-dangle */
import * as moment from 'moment'
import apiUrl from './api-url'

export default class SkillService {
  static getSales = data => {
    let { endDate } = data
    const { mode } = data
    let type = 'statictis-skill-by-date'
    endDate = endDate ? moment(endDate).format('YYYY-MM-DD') : null
    switch (mode) {
      case 'week':
        type = 'statictis-skill-by-week'
        break
      case 'month':
        type = 'statictis-skill-by-month'
        break
      case 'three_month':
        type = 'statictis-skill-by-three-month'
        break
      default:
        type = 'statictis-skill-by-date'
    }
    const api = `${apiUrl}/admin/contract/${type}/${endDate}`
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
