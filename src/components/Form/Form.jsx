import { useState } from 'react';
import { LabelValue, Btn, FormField, Label, Input } from './Form.styled';
import PropTypes from 'prop-types';

const Form = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeInputHandler = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        throw new Error();
    }
  };

  const submitFormHandler = e => {
    e.preventDefault();
    addContact(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <FormField onSubmit={submitFormHandler}>
        <Label>
          <LabelValue>Name</LabelValue>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={changeInputHandler}
            value={name}
          />
        </Label>
        <Label>
          <LabelValue>Number</LabelValue>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={changeInputHandler}
            value={number}
          />
        </Label>

        <Btn type="submit" name="submit">
          Add contact
        </Btn>
      </FormField>
    </>
  );
};

export default Form;

Form.propTypes = {
  addContact: PropTypes.func,
};
