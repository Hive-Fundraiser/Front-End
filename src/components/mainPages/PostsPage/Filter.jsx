import styles from "./Filter.module.css";
import { useState } from "react";

import SearchIcon from "../../../images/PostsPage/search.svg";
const Filter = (props) => {
  const [value, setValue] = useState("");
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
    if (value.length > 3) {
      props.handler();
    }
  }
  const valueHandler = (e) => {
    setValue(e.target.value.trim());
  };
  return (
    <div className={styles.parent}>
      <div className={styles.inner_parent}>
        <img src={SearchIcon} alt="search icon" className={styles.search_btn} />
        <input
          type="text"
          value={value}
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
