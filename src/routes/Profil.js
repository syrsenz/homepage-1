import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";

const Profil = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROFIL." text="This project is under maintenance" />
      <Footer />
    </div>
  );
};

export default Profil;
