let hostURL
if (process.env.NODE_ENV === 'production') {
  hostURL = 'https://tutor-back-end-admin.herokuapp.com/'
} else {
  hostURL = 'http://localhost:5000'
}

const apiUrl = hostURL

export default apiUrl
