import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import { Item, List, Click } from './styles';

const ContactList = ({ children }) => {
  const filtersContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contactsList = filtersContacts(contacts, filter);

  return (
    <>
      <div>
        <h2>Contacts</h2>
        {children}
        <ul>
          {contactsList.map(({ name, number, id }) => (
            <li key={id}>
              <Item>
                <List>{name}:</List>
                <List>{number}</List>
                <Click
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </Click>
              </Item>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
