import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Container from './components/Container/Container';
import Filter from './components/Filter/Filter';
import './styles.css';

function App() {
  return (
    <Container>
      <section className='Section'>
        <h1>Phonebook</h1>
        <ContactForm />
      </section>
      <section className='Section'>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </Container>
  );
}

export default App;