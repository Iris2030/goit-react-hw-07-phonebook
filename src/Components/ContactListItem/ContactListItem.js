import s from './ContactListItem.module.css'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import {deleteContact} from '../../redux/actions'

export default function ContactListItem ({name,number,id}){
const dispatch = useDispatch()

    return <li  className={s.item}>{name}:{number} 
    <button onClick={() => dispatch(deleteContact(id))} className={s.button}>delete</button>
    </li> 
}


ContactListItem.propTypes = {
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // onDeleteContact: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  };

