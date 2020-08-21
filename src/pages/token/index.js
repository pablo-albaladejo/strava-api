import React from 'react';
import qs from 'qs';
import MainLayout from '../../components/layout/main';


const TokenPage = ({ location: { search } }) => {
  const { code } = qs.parse(search);

  return (
    <MainLayout>
      {`token: ${code}`}
    </MainLayout>
  )
}

export default TokenPage;
