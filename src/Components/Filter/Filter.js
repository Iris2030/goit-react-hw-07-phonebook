import s from "./Filter.module.css";
// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {changeFilter} from '../../redux/actions'

export default function Filter() {
const value = useSelector(state => state.filter)
const dispatch = useDispatch()

  return (
    <div className={s.filter}>
      <label className={s.label}>Find contact by name</label>
      <input onChange={(event) => dispatch(changeFilter(event.target.value))} className={s.input} value={value} type="text" name="filter" />
    </div>
  );
};

// Filter.propTypes ={
//   value: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// }

