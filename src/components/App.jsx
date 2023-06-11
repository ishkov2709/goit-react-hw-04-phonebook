import { useEffect, useState } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import FilterInput from './FilterInput';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    const contactStorage = JSON.parse(localStorage.getItem('contacts'));
    if (contactStorage && !firstLoad) {
      setContacts(contactStorage);
      setFirstLoad(true);
      return;
    }

    const contactsToSave = JSON.stringify(contacts);
    localStorage.setItem('contacts', contactsToSave);
  }, [contacts, firstLoad]);

  const addContact = (name, number) => {
    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    }

    setContacts([{ id: nanoid(), name, number }, ...contacts]);
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
    setContacts([...contacts.filter(el => el.id !== id)]);
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
