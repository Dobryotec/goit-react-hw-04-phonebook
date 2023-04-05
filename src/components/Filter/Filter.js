import { nanoid } from 'nanoid';
import css from './Filter.module.css';

function Filter({ value, onChange }) {
  const filterInputId = nanoid();

  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor={filterInputId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="filter"
        id={filterInputId}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Filter;
