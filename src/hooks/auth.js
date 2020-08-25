import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as AuthService from '../services/auth';
import * as AuthActions from '../redux/actions/auth';

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

const useAuth = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  async function  getToken (authorization){
    const token = await AuthService.postToken({
      clientID: REACT_APP_CLIENT_ID,
      clientSecret: REACT_APP_CLIENT_SECRET,
      code: authorization,
    });
    dispatch(AuthActions.setAuth({ token }))
    push('/home');
  }

  return { getToken };
};

export default useAuth;


  /*       const activities = await activityService.getAthleteActivities({ token: auth.access_token });
        console.log(activities);
  
        const stream = await activityService.getActiviyStream({ token: auth.access_token, activityId: activities[0].id });
        console.log(stream); */