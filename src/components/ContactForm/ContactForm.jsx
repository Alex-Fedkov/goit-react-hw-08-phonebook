import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import toast from 'react-hot-toast';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import { Form, Label, AddButton } from './styles';

const Input = styled(TextField)`
  font-size: 22px;
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          variant="outlined"
          size="small"
          color="primary"
        />
        <Label htmlFor="number">Number</Label>
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          variant="outlined"
          size="small"
          color="primary"
        />
        <AddButton type="submit" variant="contained" size="medium">
          Add contact
        </AddButton>
      </Form>
    </div>
  );
};

export default ContactForm;
