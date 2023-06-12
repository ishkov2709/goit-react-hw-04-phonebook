import { useEffect, useState } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import FilterInput from './FilterInput';
import { nanoid } from 'nanoid';

export const App = () => {
  const isContactStorage = JSON.parse(localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState(isContactStorage ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    }

    setContacts(prevState => [{ id: nanoid(), name, number }, ...prevState]);
  };

  const contactsFilterHandler = ({ currentTarget: { value } }) => {
    setFilter(value);
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(prevState => [...prevState.filter(el => el.id !== id)]);
  };

  const filteredContacts = filterContacts();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <Form addContact={addContact} />

        <h2>Contacts</h2>
        <h3>Find contact by name</h3>
        <FilterInput
          onChange={e => {
            contactsFilterHandler(e);
          }}
        />
        <Contacts contacts={filteredContacts} deleteContact={deleteContact} />
      </div>
    </div>
  );
};
