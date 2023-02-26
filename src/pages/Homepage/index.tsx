import { useEffect, useState } from "react";
import Modals from "../../components/Modals/Modals";
import LoginForm from "../../components/Forms/LoginForm";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import Banner from "../../components/HomePage/Banner";
import AboutUs from "../../components/HomePage/About-us";
import FavoritePlaces from "../../components/HomePage/Favorite-place";
import BreakingNews from "../../components/HomePage/Breaking-new";
import Suggestions from "../../components/HomePage/Suggestion";
import Events from "../../components/HomePage/Events";
import Promotions from "../../components/HomePage/Promotions";
import Map from "../../components/HomePage/Map";

const Homepage = () => {
  const [wantSignIn, setWantSignedIn] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    console.log(wantSignIn);
  }, [wantSignIn]);
  return (
    <>
      <Header handleSignIn={() => setWantSignedIn(true)} signedIn={signedIn} />
      <Banner />
      <AboutUs />
      <FavoritePlaces />
      <BreakingNews />
      <Suggestions />
      <Events />
      <Promotions />
      <Map />
      <Footer />
      <Modals
        children={<LoginForm />}
        active={wantSignIn}
        handleClose={() => setWantSignedIn(false)}
      />
    </>
  );
};
export default Homepage;
