import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import instance from '../lib/api';

const FindOne = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    instance.get('/user').then(({ data }) => setUser(data));
  }, []);

  return <Container>{user && <div>{user.name}</div>}</Container>;
};

const Container = styled.section`
  padding: 20px;
`;

export default FindOne;
