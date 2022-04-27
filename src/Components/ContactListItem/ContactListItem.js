import s from './ContactListItem.module.css'
import PropTypes from "prop-types";
// import { useDispatch } from 'react-redux';
// import {deleteContact} from '../../redux/actions'

export default function ContactListItem ({name,number,id,onDelete}){
// const dispatch = useDispatch()

    return <li  className={s.item}>{name}:{number} 
    <button onClick={() => onDelete(id)} className={s.button}>delete</button>
    </li> 
}


ContactListItem.propTypes = {
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  };

