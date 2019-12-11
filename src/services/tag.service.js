import apiUrl from './api-url'

export default class TagService {
  static getAll = data => {
    const { limit, offset } = data
    const api = `${apiUrl}/admin/tag/${limit}/${offset}`
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

  static createTag = tag => {
    const api = `${apiUrl}/admin/tag`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'POST',
      body: JSON.stringify(tag),
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

  static editTag = tag => {
    const api = `${apiUrl}/admin/tag`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'PUT',
      body: JSON.stringify(tag),
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

  static deleteTag = tag => {
    const api = `${apiUrl}/admin/tag`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'DELETE',
      body: JSON.stringify(tag),
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
