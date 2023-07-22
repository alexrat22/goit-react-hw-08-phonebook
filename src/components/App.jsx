import {
  MainContainer,
  FormContainer,
  ContactsContainer,
  Title,
  TitleContacts,
} from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/contactslist';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';
import AppBar from './UserMenu/AppBar';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <MainContainer>
      <AppBar />
      <FormContainer>
        <Title>Phonebook</Title>
        <ContactForm />
      </FormContainer>
      <ContactsContainer>
        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        <ContactsList />
        {isLoading && !error && <Loader />}
      </ContactsContainer>
    </MainContainer>
  );
}
