import { apiFetch, FETCH_METHODS } from "./api";

export const getAthleteActivities = ({ token }) => {
  return new Promise((resolve, reject) => {
    apiFetch({
      baseUrl: `https://www.strava.com/`,
      endPoint: `api/v3/athlete/activities`,
      method: FETCH_METHODS.GET,
      token
    })
      .then(res => {
        resolve(res);

      }).catch(e => {
        reject(e)
      })
  })
}
