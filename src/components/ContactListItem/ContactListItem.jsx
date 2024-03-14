import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { getLoadingStatus } from '../../redux/contacts/selectors';
import s from './styles.module.css';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingStatus);

  return (
    <li  key={contact.id}  className={s.item}>{contact.name}:{contact.phone} 
    <button
      type="button"
      onClick={() => dispatch(deleteContact(contact.id))}
      className={s.button}
      disabled={isLoading}
    >
        delete
      </button>
    </li> 

    // <li key={contact.id}>
    //   <div className={styles['item-container']}>
    //     <span>{`${contact.name}: ${contact.phone}`}</span>
    //     <button
    //       className={styles.btn}
    //       type="button"
    //       disabled={isLoading}
    //       onClick={() => dispatch(deleteContact(contact.id))}
    //     >
    //       Delete
    //     </button>
    //   </div>
    // </li>
  );
};
