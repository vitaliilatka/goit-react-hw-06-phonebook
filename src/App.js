import { useState, useEffect } from 'react';
import shortId from 'shortid';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Container from './components/Container/Container';
import Filter from './components/Filter/Filter';
import './styles.css';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const addContact = (name, number) => {
  //   const normalizedName = name.toLowerCase();
  //   if (
  //     contacts.find(contact => contact.name.toLowerCase() === normalizedName)
  //   ) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   const newContact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };
  //   setContacts(prState => [newContact, ...prState]);
  // };
  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };
  // const deleteContact = contactId =>
  //   setContacts(prState => prState.filter(({ id }) => id !== contactId));

  // const normalizedFilter = filter.toLowerCase();
  // const filteredContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(normalizedFilter),
  // );


  return (
    <Container>
      <section className='Section'>
        <h1>Phonebook</h1>
        <ContactForm />
      </section>
      <section className='Section'>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContacts={deleteContacts}
        />
      </section>
    </Container>
  );
}

export default App;