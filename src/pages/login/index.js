import React from 'react';
import MainLayout from '../../components/layout/main';
const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;
console.log(process.env)
const LoginPage = () => (
    <MainLayout>
        <div className="App">
            <a href={`https://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URI}&approval_prompt=force&scope=read`}>Strava</a>
        </div>
    </MainLayout>
);

export default LoginPage;
