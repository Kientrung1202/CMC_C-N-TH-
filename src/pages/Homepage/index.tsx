import AboutUs from "../../components/HomePage/about-us";
import Banner from "../../components/HomePage/banner";
import BreakingNews from "../../components/HomePage/breaking-new";
import Events from "../../components/HomePage/events";
import Suggestions from "../../components/HomePage/suggestion";
import Map from "../../components/HomePage/map";
import Footer from "../../components/Layouts/Footer";
import Header from "../../components/Layouts/Header";
import Promotions from "../../components/HomePage/promotions";
import { useEffect, useState } from "react";
import Modals from "../../components/Modals/Modals";
import LoginForm from "../../components/Forms/LoginForm";

const Homepage = () => {
  const [wantSignIn, setWantSignedIn] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    console.log(wantSignIn);
  }, [wantSignIn]);
  return (
    <>
      <Header
        handleSignIn={() => setWantSignedIn(true)}
        signedIn={signedIn}
      ></Header>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <BreakingNews></BreakingNews>
      <Suggestions></Suggestions>
      <Events></Events>
      <Promotions></Promotions>
      <Map></Map>
      <Footer></Footer>
      <Modals
        children={<LoginForm />}
        active={wantSignIn}
        handleClose={() => setWantSignedIn(false)}
      />
    </>
  );
};
export default Homepage;
