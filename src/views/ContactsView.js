import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import ContactsForm from '../components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from '../components/ContactsList/contactslist';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <div>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
}
