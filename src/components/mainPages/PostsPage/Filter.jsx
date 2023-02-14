import styles from "./Filter.module.css";
import { useContext , useState } from "react";

import SearchIcon from "../../../images/PostsPage/search.svg";
import { SearchContext } from "../../../context/SearchContext";
const Filter = (props) => {
  const [value, setValue] = useState("");
  const { search , setSearch } = useContext ( SearchContext )
  let typingTimer; //timer identifier
  const doneTypingInterval = 5000; //time in ms, 5 seconds for example

  const keyUpHandler = () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  };

  const keyDownHandler = () => {
    clearTimeout(typingTimer);
  };

  function doneTyping() {
    if (search.length > 3) {
      props.handler();
    }
  }
  const valueHandler = (e) => {
    setSearch(e.target.value.trim());
  };
  return (
    <div className={styles.parent}>
      <div className={styles.inner_parent}>
        <img src={SearchIcon} alt="search icon" className={styles.search_btn} />
        <input
          type="text"
          value={search}
          placeholder={"جست و جو در درخواست ها"}
          onChange={valueHandler}
          onKeyUp={keyUpHandler}
          onKeyDown={keyDownHandler}
        />
        <button
          className={styles.category_btn}
          onClick={() => {
            props.setIsMenuOpen(true);
          }}
        >
          فیلتر
        </button>
      </div>
    </div>
  );
};

export default Filter;
