import Post from "../../shared/Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
  const setPosts = (posts, start, end, width) => {
    return posts
      .slice(start, end)
      .map((post) => (
        <Post
          img={post.img}
          title={post.title}
          description={post.description}
          width={width}
        />
      ));
  };
  const postsType1 = (posts) => {
    return (
      <div className={styles.parent}>
        <div className={styles.type1_right}>{setPosts(posts, 0, 4, 50)}</div>
        <div className={styles.type1_left}>{setPosts(posts, 4, 5, 100)}</div>
      </div>
    );
  };
  const postsType2 = (posts) => {
    return (
      <div className={styles.parent}>
        <div className={styles.type2_right}>{setPosts(posts, 0, 2, 100)}</div>
        <div className={styles.type2_center}>{setPosts(posts, 2, 3, 100)}</div>
        <div className={styles.type2_left}>{setPosts(posts, 3, 5, 100)}</div>
      </div>
    );
  };
  const postsType3 = (posts) => {
    return (
      <div className={styles.parent}>
        <div className={styles.type3_right}>{setPosts(posts, 0, 1, 100)}</div>
        <div className={styles.type3_left}>{setPosts(posts, 1, 5, 50)}</div>
      </div>
    );
  };
  const handleTypes = (posts) => {
    let result = [];
    if (posts.length - 5 < 0) {
      return [
        <div className={styles.parent}>
          {setPosts(posts, 0, posts.length, 25)}
        </div>,
      ];
    }
    for (let i = 0; i < posts.length; i = i + 5) {
      if (i + 5 <= posts.length) {
        if (i % 5 === 0) {
          console.log(i / 5);
          console.log((i / 5) % 3);
          switch ((i / 5) % 3) {
            case 0:
              result.push(postsType1(posts.slice(i, i + 5)));
              break;
            case 1:
              result.push(postsType2(posts.slice(i, i + 5)));
              break;
            default:
              result.push(postsType3(posts.slice(i, i + 5)));
              break;
          }
        }
      } else {
        console.log("heree");
        result.push(
          <div className={styles.parent}>
            {setPosts(posts, i, posts.length, 25)}
          </div>
        );
        return result;
      }
    }
    return result;
  };
  return <div className={styles.posts}>{handleTypes(props.posts)}</div>;
};

export default Posts;
