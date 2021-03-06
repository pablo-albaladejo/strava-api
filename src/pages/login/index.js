import React from 'react';
import MainLayout from '../../components/layout/main';
const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;

const LoginPage = () => (
    <MainLayout>
        <div className="App">
            <a href={`https://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REACT_APP_REDIRECT_URI)}&approval_prompt=force&scope=${encodeURIComponent('read,activity:read')}`}>Please, log in</a>
        </div>
    </MainLayout>
);

export default LoginPage;
