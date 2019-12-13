import apiUrl from './api-url'

export default class UserService {
  static login = user => {
    const api = `${apiUrl}/admin/login`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'POST',
      body: JSON.stringify(user),
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
          return result.user
        }

        throw new Error(result.message)
      })
      .catch(err => {
        throw new Error(err.message)
      })
  }

  static createAccount = user => {
    const api = `${apiUrl}/admin/create`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'POST',
      body: JSON.stringify(user),
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

  static getAllAdmin = () => {
    const api = `${apiUrl}/admin/`
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

  static getAllUser = () => {
    const api = `${apiUrl}/admin/user`
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

  static getAllStudent = data => {
    const { limit, offset } = data
    const api = `${apiUrl}/admin/student/${limit}/${offset}`
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

  static getAllTeacher = data => {
    const { limit, offset } = data
    const api = `${apiUrl}/admin/teacher/${limit}/${offset}`
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

  static getInforUser = id => {
    const api = `${apiUrl}/admin/user/info/${id}`
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

  static blockUnBlockAccount = (_id, type) => {
    console.log(_id)
    const api = `${apiUrl}/admin/${type === true ? 'unblock-account' : 'block-account'}`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'POST',
      body: JSON.stringify({ _id }),
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
