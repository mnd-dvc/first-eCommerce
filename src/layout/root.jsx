import React from "react";
import Header from "./header";
import Footer from "./footer";
import Router from "../router";

function Root() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default Root;
