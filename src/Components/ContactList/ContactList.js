import ContactListItem from "../ContactListItem/ContactListItem";
import s from "./ContactList.module.css";
// import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {useDeleteContactMutation } from '../../redux/slice';


export default function ContactList({data}) {
const [deleteContact] = useDeleteContactMutation()


  const contacts = useSelector(state =>{
    return data && data.filter(contact =>{
        return contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
      })
  })


  return (
    <ul className={s.list}>
      {data && contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.phone}
          onDelete={deleteContact}
        />
      ))}
    </ul>
  );
}


// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };

