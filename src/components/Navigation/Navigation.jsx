import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: inline-block;
  font-size: 22px;
  font-weight: 700;
  color: black;
  text-decoration: none;
  margin-right: 10px;
  padding: 12px;
  &:hover {
    color: blue;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
