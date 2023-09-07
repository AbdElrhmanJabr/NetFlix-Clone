import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/3ad4e24f-1469-409d-a5a2-7dfaf5b5bf21/PS-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
          className=" w-full h-[400px] object-cover"
        />
        <div className=" fixed left-0 top-0 bg-black/50 w-full h-[550px]"></div>
        <div className=" absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:5-xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
