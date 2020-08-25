import React, { useEffect } from 'react';
import qs from 'qs';

import MainLayout from '../../components/layout/main';
import useAuth from '../../hooks/auth';

const TokenPage = ({ location: { search } }) => {
  const { code } = qs.parse(search);
  const { getToken } = useAuth();

  useEffect(() => { getToken(code) }, [code, getToken]);

  return (
    <MainLayout>
      {`token: ${code}`}
    </MainLayout>
  )
}

export default TokenPage;
