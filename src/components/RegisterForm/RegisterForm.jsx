import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Form, Label } from './styles';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <TextField
          type="text"
          name="name"
          variant="outlined"
          size="small"
          color="primary"
          margin="dense"
        />
      </Label>
      <Label>
        Email
        <TextField
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
        <TextField
          type="password"
          name="password"
          variant="outlined"
          size="small"
          color="primary"
          margin="dense"
        />
      </Label>
      <Button type="submit" variant="contained" size="small">
        Register
      </Button>
    </Form>
  );
};
