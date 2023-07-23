// import {
//   MainContainer,
//   FormContainer,
//   ContactsContainer,
//   Title,
//   TitleContacts,
// } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/operations';
//import { getError, getIsLoading } from 'redux/selectors';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
//import ContactForm from './ContactForm/ContactForm';
//import ContactsList from './ContactsList/contactslist';
//import Filter from './Filter/Filter';
//import Loader from './Loader/Loader';
import AppBar from './AppBar';
import HomeView from '../views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from '../views/LoginView';
import ContactsView from '../views/ContactsView';
import { getIsFetchingCurrent } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);
  //const isLoading = useSelector(getIsLoading);
  //const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomeView />} />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
}
