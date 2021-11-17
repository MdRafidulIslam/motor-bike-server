import React from "react";
import ShowReview from "../../ShowReview/ShowReview";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <ShowReview></ShowReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
