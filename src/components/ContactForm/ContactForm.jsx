import React, { useState } from 'react';
import s from "./Form.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { getContacts, getLoadingStatus } from '../../redux/contacts/selectors';
// import styles from './styles.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
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

  const checkNameDuplicate = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handlerAddContact = event => {
    event.preventDefault();
    if (checkNameDuplicate(name)) {
      alert(`${name} is already in contacts`);
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
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
           />
      
           <button className={s.button} type="submit" disabled={isLoading}>
             Add contact {isLoading && '...'}
           </button>  
         </form>
  );
};






// import { useState } from "react";
// import s from "./Form.module.css";
// import PropTypes from "prop-types";
// import { useSelector, useDispatch } from "react-redux";
// import { addContact } from '../../redux/contacts/operations';
// import { useAddContactMutation } from "../../redux/slice";
// import Notiflix from "notiflix";
// import Loader from "../Loader/Loader";

// export const  ContactForm = () => {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [addContactMutation, { isLoading }] = useAddContactMutation();

//   const contacts = useSelector(state => state.contacts.items);
//   const dispatch = useDispatch();

//   const handleInput = (event) => {
//     const { name, value } = event.target;

//     switch (name) {
//       case "name":
//         setName(value);
//         break;

//       case "number":
//         setNumber(value);
//         break;

//       default:
//         return;
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const contactNames = contacts.map((contact) => contact.name);

//     if (contactNames.includes(name)) {
//       alert(`${name} is already in contacts`);
//       resetForm();
//       return;
//     }

//     addContactMutation({ name, number }); // Using Redux Toolkit Query mutation
//     Notiflix.Notify.success(`${name} added to contacts`);
//     resetForm();
//   };

//   const resetForm = () => {
//     setName("");
//     setNumber("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label className={s.label}>Name</label>
//       <input
//         className={s.input}
//         value={name}
//         onChange={handleInput}
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />

//       <label className={s.label}>Number</label>
//       <input
//         className={s.input}
//         value={number}
//         onChange={handleInput}
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
 
//       <button className={s.button} type="submit" disabled={isLoading}>
//         Add contact {isLoading && '...'}
//       </button>  
//     </form>
//   );
// }

// ContactForm.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };