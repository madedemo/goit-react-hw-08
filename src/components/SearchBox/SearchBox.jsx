import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";


const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectNameFilter);
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  }
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        onChange={handleChange}
        value={filters}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;

