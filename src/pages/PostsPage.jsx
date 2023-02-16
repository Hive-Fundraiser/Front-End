import React, { Fragment, useContext, useState } from "react";
import Filter from "../components/mainPages/PostsPage/Filter";
import Posts from "../components/mainPages/PostsPage/Posts";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Menu from "../components/mainPages/PostsPage/Menu";
import { CharityContext } from "../context/CharityProvider";
import { SearchContext } from "../context/SearchContext";

const PostsPage = () => {
  const { search, setSearch } = useContext(SearchContext);
  const charity = useContext(CharityContext);
  const searchedCharity = charity.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
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
      <Posts posts={searchedCharity} />
      <Footer />
    </Fragment>
  );
};

export default PostsPage;
