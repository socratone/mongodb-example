import styled from '@emotion/styled';
import { useRef } from 'react';
import instance from '../lib/api';

const InsertOne = () => {
  const inputRef = useRef(null);

  const handleClick = async () => {
    const name = inputRef.current.value;
    await instance.post('/users', { name });
    inputRef.current.value = '';
  };

  return (
    <Container>
      <div>
        <TextInput ref={inputRef} />
      </div>
      <div>
        <Button onClick={handleClick}>요청</Button>
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 20px;
`;

const Button = styled.button`
  border: 0;
  background: dodgerblue;
  color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const TextInput = styled.input`
  padding: 10px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export default InsertOne;
