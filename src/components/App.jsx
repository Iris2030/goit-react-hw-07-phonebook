import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import s from './styles.module.css';
import Container from './Container/Container';
import { FaRegAddressBook } from 'react-icons/fa';

export const App = () => {
  return (
    <Container>
    <h1 className={s.title}>Phone Book <FaRegAddressBook style={{ width: 25, height: 25, marginLeft: '10px'}}/></h1>
    <ContactForm/>

    <h2 className={s.title}>Contacts</h2>
    <Filter />
    <ContactList></ContactList>
  </Container>

    // <div className={styles['main-container']}>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </div>
  );
};
