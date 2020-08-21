import React, { useEffect } from 'react';
import qs from 'qs';
import MainLayout from '../../components/layout/main';
import * as authService from '../../services/auth';
import * as activityService from '../../services/activity';

const TokenPage = ({ location: { search } }) => {
  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;
  const { code } = qs.parse(search);

  useEffect(() => {
    async function getToken(authorization) {
      const auth = await authService.postToken({
        clientID: REACT_APP_CLIENT_ID,
        clientSecret: REACT_APP_CLIENT_SECRET,
        code: authorization,
      });
      console.log(auth);

      const activities =  await activityService.getAthleteActivities({token: auth.access_token});
      console.log(activities);
    }
    getToken(code);
  }, [REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, code]);


  return (
    <MainLayout>
      {`token: ${code}`}
    </MainLayout>
  )
}

export default TokenPage;
