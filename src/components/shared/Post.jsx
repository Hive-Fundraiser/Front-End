import styles from "./Post.module.css";

const Post = ({ img, title, description, width }) => {
  return (
    <div style={{ width: `${width}%` }} className={styles.post}>
      <div className={styles.parent}>
        <img className={styles.image} src={img} alt={title} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Post;
