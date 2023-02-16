import React from "react";
import Navbar from "../components/shared/Navbar";
import NotFoundSection from "../components/PageNotFound/NotFoundSection";
import Footer from "../components/shared/Footer";
const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <NotFoundSection />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
