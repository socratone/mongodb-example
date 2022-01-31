import styled from '@emotion/styled';
import { Link, Route, Routes } from 'react-router-dom';
import DeleteOne from './pages/DeleteOne';
import FindOne from './pages/FindOne';
import InsertOne from './pages/InsertOne';
import UpdateOne from './pages/UpdateOne';

function App() {
  return (
    <div>
      <Nav>
        <Link to="/find-one">FindOne</Link>
        <Link to="/insert-one">InsertOne</Link>
        <Link to="/update-one">UpdateOne</Link>
        <Link to="/delete-one">DeleteOne</Link>
      </Nav>
      <Routes>
        <Route path="/insert-one" element={<InsertOne />} />
        <Route path="/delete-one" element={<DeleteOne />} />
        <Route path="/update-one" element={<UpdateOne />} />
        <Route path="/find-one" element={<FindOne />} />
      </Routes>
    </div>
  );
}

const Nav = styled.nav`
  height: 50px;
  border-bottom: 1px solid gainsboro;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > * {
    margin-right: 10px;
  }
`;

export default App;
