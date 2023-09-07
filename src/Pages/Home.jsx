import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId={"1"} title={"UpComing"} endPoint={requests.requestUpcoming} />
      <Row rowId={"2"} title={"Popular"} endPoint={requests.requestPopular} />
      <Row rowId={"3"} title={"Trending"} endPoint={requests.requestTrending} />
      <Row
        rowId={"4"}
        title={"Top Rated"}
        endPoint={requests.requestTopRated}
      />
      <Row rowId={"5"} title={"Horror"} endPoint={requests.requestHorror} />
    </>
  );
};

export default Home;
