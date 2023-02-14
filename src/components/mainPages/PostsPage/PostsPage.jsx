import React, { Fragment, useContext, useState } from "react";
import Filter from "./Filter";
import Posts from "./Posts";
import Footer from "./../../shared/Footer";
import Navbar from "../../shared/Navbar";
import Menu from "./Menu";
import post_0 from "./../../../images/LandingPage/SelectedPosts/post_0.svg";
import post_1 from "./../../../images/LandingPage/SelectedPosts/post_1.svg";
import post_2 from "./../../../images/LandingPage/SelectedPosts/post_2.svg";
import post_3 from "./../../../images/LandingPage/SelectedPosts/post_3.svg";
import post_4 from "./../../../images/LandingPage/SelectedPosts/post_4.svg";
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
const PostsPage = () => {
  const charity = useContext(CharityContext);
  const types = [
    "default",
    "search",
    "عام المنفعه",
    "آموزشی",
    "حیوانات",
    "محیط زیست",
    "کسب و کار",
    "پزشکی",
    "مراسم ختم",
    "اورژانسی",
    "عوام",
    "رقابتی",
    "خلاقانه",
    "آرزو ها",
    "ایمان",
    "سفر",
    "سایر",
  ];
  const [type, setType] = useState(["default"]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleType = () => {};
  return (
    <Fragment>
      <Navbar />
      <Filter
        type={type}
        handleType={handleType}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Menu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        types={types}
      />
      <Posts posts={charity} />
      <Footer />
    </Fragment>
  );
};

export default PostsPage;
