import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";

const Post = ({ img, title, description, width }) => {
    const navigate = useNavigate();
    const clickHandler = () =>{
        navigate("/page");
    }
  return (
    <div style={{ width: `${width}%` }} className={styles.post} onClick={clickHandler}>
      <div className={styles.parent}>
        <img className={styles.image} src={img} alt={title}  />
        <h3 className={styles.title}>{title}</h3>

      </div>
    </div>
  );
};

export default Post;
