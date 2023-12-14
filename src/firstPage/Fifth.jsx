import React from "react";

export default function Fifth() {
  const Img1 = "./src/images/fifth.svg";
  const Img2 = "./src/images/fifthStar.svg";

  return (
    <div className="fifth bg-thirdBg px-12 py-32">
      <div className="top text-textBold   text-center px-32">
        <h2 className="text-[40px] leading-[52px] font-1000     pb-5 tracking-wider  uppercase">
          RELIABLE TECH FOR STAYING CLOSE
        </h2>
        <p className="text-lg  ">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
      </div>
      <div className="middle ">
        <img src={Img1} alt="img 1" className="w-full" />
      </div>
      <div className="bottom grid  justify-center relative">
        <img src={Img2} alt="star" className="w-full" />
        <h2 className="text-3xl leading-[52px] font-bold w-[400px] pb-8 -mt-8 pl-20   whitespace-nowrap">
          Ready to start your journey?
        </h2>
        <div className="button pl-32">
          <button className="bg-buttonColor flex px-7 py-3 text-xl rounded-full   text-white">
            <div className="icons text-2xl pr-2 ">
              <iconify-icon icon="material-symbols:download"></iconify-icon>
            </div>
            Download for Windows
          </button>
        </div>
      </div>
    </div>
  );
}
