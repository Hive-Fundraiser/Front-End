import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Header from "../components/mainPages/LandingPage/Header";
import SelectedPosts from "../components/mainPages/LandingPage/SelectedPosts";
import Steps from "../components/mainPages/LandingPage/Steps";
import Trust from "../components/mainPages/LandingPage/Trust";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Steps />
      <Trust />
      <SelectedPosts />
      <Footer />
    </div>
  );
};

export default LandingPage;
