import { useEffect, useRef, useState } from "react";

export default function Download() {
  const first = "./src/images/downloadImage/top.svg";
  const ios = "./src/images/downloadImage/ios.svg";
  const android = "./src/images/downloadImage/android.svg";
  const linux = "./src/images/downloadImage/linux.svg";
  const mac = "./src/images/downloadImage/mac.svg";

  const moreInfoRef = useRef(null);

  const [button, showButton] = useState(false);
  const linuxClick = () => {
    showButton(true);
  };

  const handleClickOutside = (event) => {
    if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
      showButton(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="first flex gap-14 pl-14 pr-10 pt-44 pb-28 bg-blackButton text-white ">
        <div className="left">
          <h1 className=" text-6xl font-black text-white pb-10 w-[450px] ">
            GET DISCORD FOR ANY DEVICE
          </h1>
          <p className="text-lg pb-10 ">
            An adventure awaits. Hang out with your friends on our desktop app
            and keep the conversation going on mobile.
          </p>
          <div className="button flex  items-center gap-5">
            <button className="bg-buttonColor flex px-7 py-3 text-xl rounded-full   text-white">
              <div className="icons text-2xl pr-2 ">
                <iconify-icon icon="material-symbols:download"></iconify-icon>
              </div>
              Download for Windows
            </button>
            <p>Windows 7 or higher</p>
          </div>
        </div>
        <div className="right  pt-8">
          <img src={first} alt="first image" className="w-[950px]" />
        </div>
      </div>
      {/* middle */}
      <div className="middle relative pb-28 pt-10 pl-10">
        {/* iOS */}
        <div className="ios  h-[600px] w-[580px] bg-thirdBg pt-12 text-center overflow-hidden rounded-xl ">
          <h5 className="pb-8 text-3xl font-semibold">iOS</h5>
          <button className="bg-blackButton hover:bg-hoverBlack transition-all text-white text-xl font-semibold px-6 py-3 rounded-full hover:shadow-xl  ">
            Download
          </button>
          <div className="img  flex  justify-center pt-16">
            <img src={ios} alt="ios" className="" />
          </div>
        </div>

        {/* Android */}
        <div className="android absolute right-10 top-52   h-[600px] w-[580px]  bg-thirdBg pt-12 text-center overflow-hidden rounded-xl">
          <h5 className="pb-8 text-3xl font-semibold">Android</h5>
          <button className="bg-blackButton  hover:bg-hoverBlack transition-all  text-white text-xl font-semibold px-6 py-3 rounded-full hover:shadow-xl  ">
            Download
          </button>
          <div className="img  flex  justify-center pt-16">
            <img src={android} alt="ios" className="" />
          </div>
        </div>
        {/* linux */}
        <div className="linux mt-6   h-[600px] w-[580px]  bg-thirdBg pt-12 text-center overflow-hidden rounded-xl">
          <h5 className="pb-4 text-3xl font-semibold">linux</h5>
          <button
            onClick={linuxClick}
            className="bg-blackButton  hover:bg-hoverBlack relative  text-white text-xl font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all   "
          >
            Download
            <i className="fa-solid fa-chevron-down pl-2"></i>
            {/* absolute */}
            {button && (
              <div className="absolute left-0 top-16 bg-white h-28 w-44 text-start pl-5 pt-2 rounded-xl font-normal text-black">
                <p className="pt-3">deb</p>
                <p className="pt-2">tar.gz</p>
              </div>
            )}
          </button>
          <div className="img  flex  justify-center pt-16">
            <img src={linux} alt="ios" className="" />
          </div>
        </div>

        {/* Mac */}
        <div className="mac absolute right-10 bottom-60   h-[600px] w-[580px]  bg-thirdBg pt-12 text-center overflow-hidden rounded-xl">
          <h5 className="pb-8 text-3xl font-semibold">Mac</h5>
          <button className="bg-blackButton  hover:bg-hoverBlack transition-all  text-white text-xl font-semibold px-6 py-3 rounded-full hover:shadow-xl  ">
            Download
          </button>
          <div className="img  flex  justify-center pt-16">
            <img src={mac} alt="ios" className="" />
          </div>
        </div>
        {/* feeling  */}

        <div className="feeling mt-6 w-[580px] h-72     bg-thirdBg pt-12 px-8   rounded-xl">
          <h5 className="pb-4 text-3xl font-semibold">Feeling Experimental?</h5>
          <p className="pb-5 text-xl font-light">
            Try our Public Test Build and test new features before they launch.
          </p>
          <button
            onClick={linuxClick}
            className="bg-blackButton  hover:bg-hoverBlack relative  text-white text-xl font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all   "
          >
            Download Public Test Build
            <i className="fa-solid fa-chevron-down pl-2"></i>
            {/* absolute */}
            {button && (
              <div className="absolute left-0 top-16 bg-white h-52 w-96 text-start px-5 pt-2 rounded-xl font-normal text-black border z-20">
                <div className="grid">
                  <a
                    href="#"
                    className="hover:bg-gray-200 rounded-md pl-1 hover:underline hover:text-blue-500 "
                  >
                    Windows 32-bit
                  </a>
                  <a href="#">Windows 64-bit</a>
                  <a href="#">Linux dib</a>
                  <a href="#">Linux tar.gz</a>
                  <a href="#">Mac</a>
                  <a href="#">Windows 64-bit(Canary)</a>
                </div>
              </div>
            )}
          </button>
        </div>

        {/* finished  */}
      </div>
    </div>
  );
}
