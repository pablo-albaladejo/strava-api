import { apiFetch, FETCH_METHODS } from "./api";

export const postToken = ({ clientID, clientSecret, code }) => {
  return new Promise((resolve, reject) => {
    apiFetch({
      baseUrl: `https://www.strava.com/`,
      endPoint: `oauth/token`,
      method: FETCH_METHODS.POST,
      body: {
        client_id: clientID,
        client_secret: clientSecret,
        code
      }
    })
      .then(res => {
        resolve(res);

      }).catch(e => {
        reject(e)
      })
  })
}
