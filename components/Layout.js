import React from "react";
import Head from "next/head";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Jacks are going up</title>
        <link rel="shortcut icon" href="" />
      </Head>
      {children}
      <Footer/>
    </div>
  );
}

export default Layout;
