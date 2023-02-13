import styles from "./SelectedPost.module.css";

import post_0 from "./../../../images/LandingPage/SelectedPosts/post_0.svg";
import post_1 from "./../../../images/LandingPage/SelectedPosts/post_1.svg";
import post_2 from "./../../../images/LandingPage/SelectedPosts/post_2.svg";
import post_3 from "./../../../images/LandingPage/SelectedPosts/post_3.svg";
import post_4 from "./../../../images/LandingPage/SelectedPosts/post_4.svg";
import Post from "./../../shared/Post";
import { useContext } from "react";
import { CharityContext } from "../../../context/CharityProvider";
const posts = [
  {
    id: 0,
    img: post_0,
    title: "تیتر",
    description: "توضیحات",
    width: 100,
  },
  {
    id: 1,
    img: post_1,
    title: "تیتر",
    description: "توضیحات",
    width: 50,
  },
  {
    id: 2,
    img: post_2,
    title: "تیتر",
    description: "توضیحات",
    width: 50,
  },
  {
    id: 3,
    img: post_3,
    title: "تیتر",
    description: "توضیحات",
    width: 50,
  },
  {
    id: 4,
    img: post_4,
    title: "تیتر",
    description: "توضیحات",
    width: 50,
  },
];
const SelectedPosts = () => {
  const posts = useContext(CharityContext)
  const setPosts = (posts, start, end) => {
    return posts
      .slice(start, end)
      .map((post) => (
        <Post
          img={post.img}
          title={post.title}
          description={post.description}
          width={post.width}
        />
      ));
  };

  return (
    <div className={styles.parent}>
      <div className={styles.right}>{setPosts(posts, 1, posts.length)}</div>
      <div className={styles.left}>{setPosts(posts, 0, 1)}</div>
    </div>
  );
};

export default SelectedPosts;
