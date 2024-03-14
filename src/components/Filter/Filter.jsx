import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/selectors';
import { changeFilter } from '../../redux/filter/filterSlice';
import s from './styles.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handlerFilterChange = event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };
  return (
    <div className={s.filter}>
    <label className={s.label}>Find contact by name</label>
    <input 
     onChange={handlerFilterChange}
      className={s.input} 
      value={filter}
      type="text" 
      name="filter" />
  </div>
  );
};
