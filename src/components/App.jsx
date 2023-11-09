import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <nav>
        <StyledLink to="/" end>
          HOME
        </StyledLink>
        <StyledLink to="/movies">MOVIES</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
