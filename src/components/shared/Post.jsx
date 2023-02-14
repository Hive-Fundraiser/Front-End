import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";

const Post = ({ dataChar, width, height }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/page/${dataChar.id}`);
  };
  const setHeight = () => {
    if (width === 100) {
      return "30vw";
    }
    return "15vw";
  };
  return (
    <div
      style={{ width: `${width}%` }}
      className={styles.post}
      onClick={clickHandler}
    >
      <div className={styles.parent}>
        <img
          className={styles.image}
          style={{ height: `${height}vw` }}
          src={dataChar.image}
          alt={dataChar.title}
        />
        <h3 className={styles.title}>{dataChar.title}</h3>
      </div>
    </div>
  );
};

export default Post;
