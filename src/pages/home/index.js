import React from 'react';
import { useSelector } from 'react-redux';

import MainLayout from '../../components/layout/main';

const LoginPage = () => {
    const auth = useSelector(state => state.auth);
    return (
        <MainLayout>
            {JSON.stringify(auth)}
        </MainLayout>
    )
};

export default LoginPage;
