import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import Container from './Components/Container/Container';
import s from './App.module.css';
// import fetchContacts from './redux/operations';
// import { useDispatch } from 'react-redux';
import { useFetchContactsQuery } from './redux/slice';




export default function App() {
// const dispatch = useDispatch()
// dispatch(fetchContacts())
// const { data, error, isLoading } = useFetchContactsQuery()

const contacts = useSelector(state =>  state.contacts)

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <Form />

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList

      />
    </Container>
  );
}


