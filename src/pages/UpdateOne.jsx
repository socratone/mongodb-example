import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import instance from '../lib/api';

const UpdateOne = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    instance.get('/users').then(({ data }) => setUsers(data));
  }, []);

  const handleUpdate = async (id, name) => {
    await instance.patch(`/users/${id}`, { name });
    setUsers((users) =>
      users.map((user) => {
        if (user._id === id) return { _id: id, name };
        return user;
      })
    );
  };

  return (
    <Container>
      {users.map((user) => (
        <Item
          key={user._id}
          initialValue={user.name}
          onClick={(value) => handleUpdate(user._id, value)}
        />
      ))}
    </Container>
  );
};

const Container = styled.section`
  padding: 20px;
`;

const Item = ({ initialValue, onClick }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = initialValue;
  }, [initialValue]);

  return (
    <ItemContainer>
      <TextInput ref={inputRef} />
      <EditButton onClick={() => onClick(inputRef.current.value)}>
        수정
      </EditButton>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  border: 1px solid gainsboro;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const TextInput = styled.input`
  padding: 10px;
  border: 1px solid gainsboro;
  border-radius: 5px;
`;

const EditButton = styled.button`
  cursor: pointer;
`;

export default UpdateOne;
