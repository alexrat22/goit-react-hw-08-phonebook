import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import ContactsForm from '../components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from '../components/ContactsList/contactslist';
import { getError, getIsLoading } from 'redux/selectors';
import Loader from '../components/Loader/Loader';
import {
  MainContainer,
  FormContainer,
  ContactsContainer,
  Title,
  TitleContacts,
} from './ContactsView.styled';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <FormContainer>
        <Title>Phonebook</Title>
        <ContactsForm />
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
