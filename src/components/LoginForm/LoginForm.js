import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Form, Label } from './styles';
import styled from 'styled-components';

const InputList = styled(TextField)`
  font-size: 22px;
  color: black;
`;

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <InputList
          type="email"
          name="email"
          variant="outlined"
          size="small"
          color="primary"
          margin="dense"
        />
      </Label>
      <Label>
        Password
        <InputList
          type="password"
          name="password"
          variant="outlined"
          size="small"
          color="primary"
          margin="dense"
        />
      </Label>
      <Button type="submit" variant="contained" size="small">
        LogIn
      </Button>
    </Form>
  );
};
