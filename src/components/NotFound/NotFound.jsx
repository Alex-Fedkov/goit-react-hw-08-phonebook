import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Container, Text } from './styles';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <Text>NotFound</Text>
      <Button
        type="button"
        onClick={handleClick}
        variant="contained"
        size="large"
      >
        {' '}
        Go back{' '}
      </Button>
    </Container>
  );
};

export default NotFound;
