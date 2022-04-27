import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import Container from './Components/Container/Container';
import s from './App.module.css';
import { useFetchContactsQuery } from './redux/slice';
import { FaRegAddressBook } from 'react-icons/fa';




export default function App() {
  const { data, error, isFetching } = useFetchContactsQuery()


const contacts = useSelector(state =>  state.contacts)

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);


  return (
 
    <Container>
      <h1 className={s.title}>Phone Book <FaRegAddressBook style={{ width: 25, height: 25, marginLeft: '10px'}}/></h1>
      <Form contacts={data}/>

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList data={data}/>
    </Container>

  );
}


