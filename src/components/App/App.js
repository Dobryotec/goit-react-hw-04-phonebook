import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  const savedStorage = JSON.parse(localStorage.getItem('contacts'));
  const [contacts, setContacts] = useState(savedStorage ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filtredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const handleSubmit = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'filter') setFilter(value);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter value={filter} onChange={handleChange} />

      <ContactList contacts={filtredContacts()} onDelete={deleteContact} />
    </div>
  );
}
