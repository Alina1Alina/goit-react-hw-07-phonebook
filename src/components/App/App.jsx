import { Container } from './AppStyled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/FilterContacts';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </Container>
  );
};

export default App;
