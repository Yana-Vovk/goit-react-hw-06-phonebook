import './App.css';
import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import shortid from 'shortid';
import styles from './components/Styles.module.css';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts( parsedContacts );
    }
  }, []);

    useEffect((prevState) => {
    if (contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} already in contacts`);
      return;
    }

    const item = { id: shortid.generate(), name: name, number: number };
    setContacts([item, ...contacts]);
  };

  const nameSearch = () => {
    const lowerFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerFilter)
    );
  };

  const filterChange = e => {
    const { value } = e.currentTarget;
    setFilter (value);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) => (prevState.filter((contact) => contact.id !== contactId)
    ));
  };
 
    return (
      <div className={styles.Container}>
        <div>
          <h1 className={styles.ContainerHeading}>Phonebook</h1>
          <ContactForm
            onSubmit={addContact}
          />
        </div>
        <div>
          <h2 className={styles.ContainerHeading}>Contacts</h2>
          <div className={styles.boxFrame}>
          <Filter
            filter={filter}
              handleChange={filterChange}
            />
          <ContactList
            contacts={nameSearch()}
              onDeleteContact={deleteContact}
            />
            </div>
        </div>
      </div>
    )
}