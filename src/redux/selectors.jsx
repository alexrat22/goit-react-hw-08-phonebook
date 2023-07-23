export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilteredContacts = ({ contacts: { contacts }, filter }) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getIsFetchingCurrent = state => state.auth.isFetchingUser;
