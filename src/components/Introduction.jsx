import React from "react";

const Introduction = ({
  endPoint: { title, text, img, video },
  ifExist,
  videoAliment,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full mb-10 justify-center items-center border-b-8 border-b-[#2d2d2d] ">
        <div
          className={`${
            !ifExist
              ? "text-center lg:text-start order-1 mb-2"
              : "text-center lg:text-start mb-2"
          }`}
        >
          <h1 className="text-6xl font-bold mb-32">{title}</h1>
          <p className=" text-xl font-bold">{text}</p>
        </div>
        <div>
          <div className="relative">
            <img
              className=" relative z-10 object-cover h-full w-full"
              src={`${img}`}
              alt={`${title}`}
            ></img>
            {ifExist && (
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                src={`${video}`}
                className={`${
                  videoAliment
                    ? "absolute xs:top-[54px] z-6 sm:top-[100px] md:top-[135px] lg:top-[100px] xl:top-[145px]  h-[52%] w-[153%] right-[3px]"
                    : "absolute xs:top-[33px] z-6 sm:top-[60px] md:top-[67px] lg:top-[46px] xl:top-[77px]  h-[43%] w-[95%] right-[20px]"
                }`}
              ></video>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
