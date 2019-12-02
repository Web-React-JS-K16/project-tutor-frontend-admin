import apiUrl from './api-url'

export default class UserService {
  static login = user => {
    console.log('user: ', user)
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
}
