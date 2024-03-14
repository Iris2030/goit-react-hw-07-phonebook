import React, { useState } from 'react';
import s from "./Form.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { getLoadingStatus } from '../../redux/contacts/selectors';
// import styles from './styles.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getLoadingStatus);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = event => {
    const SET_VALUE_MAP = {
      name: setName,
      number: setPhone,
    };
    const { name, value } = event.target;
    SET_VALUE_MAP[name](value);
  };

  const isNameValid = () => /^[a-zA-Z' -]+$/.test(name);
  const isPhoneValid = () => /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(phone);

  const handlerAddContact = event => {
    event.preventDefault();
    if (!isNameValid()) {
      alert('Please enter a valid name');
      return;
    }
    if (!isPhoneValid()) {
      alert('Please enter a valid phone number');
      return;
    }
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };
  return (
     <form onSubmit={handlerAddContact}>
            <label className={s.label}>Name</label>
            <input
             className={s.input}
             value={name}
             onChange={handleInputChange}
             type="text"
             name="name"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
           />
     
           <label className={s.label}>Number</label>
           <input
             className={s.input}
             value={phone}
             onChange={handleInputChange}
             type="tel"
             name="number"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
           />
      
           <button className={s.button} type="submit" disabled={isLoading}>
             Add contact {isLoading && '...'}
           </button>  
         </form>
  );
};