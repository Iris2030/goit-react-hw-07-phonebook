import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { getLoadingStatus } from '../../redux/contacts/selectors';
import s from './styles.module.css';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingStatus);

  return (
    <li  key={contact.id}  className={s.item}>{contact.name}: {contact.phone} 
    <button
      type="button"
      onClick={() => dispatch(deleteContact(contact.id))}
      className={s.button}
      disabled={isLoading}
    >
        delete
      </button>
    </li> 
  );
};
