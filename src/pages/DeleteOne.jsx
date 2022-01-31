import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import instance from '../lib/api';

const DeleteOne = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    instance.get('/users').then(({ data }) => setUsers(data));
  }, []);

  const handleRemove = async (id) => {
    await instance.delete(`/users/${id}`);
    setUsers((users) => users.filter((user) => user._id !== id));
  };

  return (
    <Container>
      {users.map((user) => (
        <Item key={user._id}>
          <ItemText>{user.name}</ItemText>
          <RemoveButton onClick={() => handleRemove(user._id)}>
            삭제
          </RemoveButton>
        </Item>
      ))}
    </Container>
  );
};

const Container = styled.section`
  padding: 20px;
`;

const Item = styled.div`
  border: 1px solid gainsboro;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ItemText = styled.div``;

const RemoveButton = styled.button`
  cursor: pointer;
`;

export default DeleteOne;
