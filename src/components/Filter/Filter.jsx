import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';
import { TextField } from '@mui/material';
import { FindContact } from './styles';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <>
      <FindContact>Find contacts by name</FindContact>
      <TextField
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
        variant="outlined"
        size="small"
        color="primary"
      />
    </>
  );
};

export default Filter;
