import css from "./SearchBar.module.css";
import { useEffect, useRef } from "react";
import { icons as sprite } from "../../shared/icons/index";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";

function SearchBar() {
  const location = useSelector(selectCampers);
  const inputRef = useRef(null);

  const setCursorToEnd = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
    }
  };
  useEffect(() => {
    if (location.length > 0 && inputRef.current) {
      inputRef.current.value = location[0].location;
      setCursorToEnd();
    }
  }, [location]);

  return (
    <div className={css.serachBarContainer}>
      <label
        className={css.labelLocation}
        htmlFor="location"
        onClick={setCursorToEnd}
      >
        Location
      </label>
      <div className={css.inputWrapper}>
        <span className={css.iconLocationContainer}>
          <svg width="20" height="20">
            <use xlinkHref={`${sprite}#map`} />
          </svg>
        </span>
        <input className={css.inputLocation} id="location" ref={inputRef} />
      </div>
    </div>
  );
}

export default SearchBar;
