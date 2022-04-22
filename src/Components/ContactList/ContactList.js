import ContactListItem from "../ContactListItem/ContactListItem";
import s from "./ContactList.module.css";
// import PropTypes from "prop-types";
import { useSelector } from "react-redux";


export default function ContactList() {

  const contacts = useSelector(state =>{
    return state.contacts.filter(contact =>{
        return contact.name.toLowerCase().includes(state.filter.toLowerCase())
      })

  })

  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}


// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };

