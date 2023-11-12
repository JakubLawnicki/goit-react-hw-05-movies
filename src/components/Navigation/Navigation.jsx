import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  padding: 20px;
  color: black;

  &.active {
    color: red;
  }
`;

export const Navigation = () => {
  return (
    <nav>
      <StyledLink to="/" end>
        HOME
      </StyledLink>
      <StyledLink to="/movies">MOVIES</StyledLink>
    </nav>
  );
};
