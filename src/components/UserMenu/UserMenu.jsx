import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { Container, Name } from './styles';

const ButtonStyle = styled(Button)`
  border-radius: 5px;
  font-weight: 700;
  background-color: #300df5;
  cursor: pointer;
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Name>Welcome, {user.name}</Name>
      <ButtonStyle
        type="button"
        onClick={() => dispatch(logOut())}
        variant="contained"
        size="small"
      >
        LogOut
      </ButtonStyle>
    </Container>
  );
};
