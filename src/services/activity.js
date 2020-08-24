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

export const getActiviyStream = ({ token, activityId }) => {
  return new Promise((resolve, reject) => {
    apiFetch({
      baseUrl: `https://www.strava.com/`,
      endPoint: `api/v3/activities/${activityId}/streams`,
      method: FETCH_METHODS.GET,
      token,
      params: {
        keys: [`latlng`,`timer_time`,`altitude`,`distance`], 
        //https://rdrr.io/github/fawda123/rStrava/man/get_streams.html
        //"time", "latlng", "distance", "altitude", "velocity_smooth", "heartrate", "cadence", "watts", "temp", "moving", or "grade_smooth"
        key_by_type: true
      }
    })
      .then(res => {
        resolve(res);

      }).catch(e => {
        reject(e)
      })
  })
}