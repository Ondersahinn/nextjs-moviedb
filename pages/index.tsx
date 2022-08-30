import React from "react";
import Head from "next/head";
import Header from "@components/header";
import UpComing from "@components/upcoming";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>TTG - Case</title>
        <meta name="description" content="TTG - Case" />
        <link rel="icon" href="https://developers.themoviedb.org/favicon.ico" />
      </Head>
      <div className="page-full-part">
        <div className="page-normal-part">
          <Header searchResultVisible={true} />
          <UpComing />
        </div>

      </div>
    </div>
  );
};

export default Home;
