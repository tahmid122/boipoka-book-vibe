import React from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div className="p-5 md:p-10">
      <Banner />
      <Books />
    </div>
  );
};

export default Home;
