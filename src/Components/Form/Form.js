import { useState } from "react";
import s from "./Form.module.css";
import PropTypes from "prop-types";
// import { useSelector,useDispatch } from "react-redux";
// import {addContact} from '../../redux/actions'
import {useAddContactMutation} from "../../redux/slice";
import Notiflix from "notiflix";
import Loader from "../Loader/Loader";

 export default function Form({contacts}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [addContact,{isLoading}] = useAddContactMutation()

  // const contacts = useSelector(state =>state.contacts.items)
  // const dispatch = useDispatch()


  const handleInput = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
console.log(contacts);
    const contactNames = contacts.map((contact) => contact.name);

    if (contactNames.includes(event.currentTarget.name.value)) {
      alert(`${event.currentTarget.name.value} is alredy in contacts`);
      resetForm();
      return;
    }

    // dispatch(addContact(name, number))
    addContact(name, number)
    Notiflix.Notify.success(`${name} added to contacts`);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.label}>Name</label>
      <input
        className={s.input}
        value={name}
        onChange={handleInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label className={s.label}>Number</label>
      <input
        className={s.input}
        value={number}
        onChange={handleInput}
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
}

Form.propTypes = {
  // addContact: PropTypes.func.isRequired,
contacts: PropTypes.array.isRequired,
};

