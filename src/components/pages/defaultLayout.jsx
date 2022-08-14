import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../footer/footer";
import Header from "../header/header";
const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> <Footer />
    </>
  );
};

export default DefaultLayout;
