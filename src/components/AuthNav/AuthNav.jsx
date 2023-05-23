import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: inline-block;
  font-size: 22px;
  font-weight: 700;
  padding: 12px;
  color: black;
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    color: blue;
  }
`;

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">LogIn</StyledLink>
    </div>
  );
};
