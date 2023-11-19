import styled from 'styled-components';
import style from './navigation.module.css';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 5px;

  &:hover {
    background-color: blue;
    color: white;
  }

  &.active {
    color: red;
  }
`;

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <StyledLink to="/" end>
        HOME
      </StyledLink>
      <StyledLink to="/movies">MOVIES</StyledLink>
    </nav>
  );
};

export default Navigation;
