import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Awards from "./Awards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
