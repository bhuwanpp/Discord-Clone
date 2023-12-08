export default function Download() {
  const first = "./src/images/downloadImage/top.svg";
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
    </div>
  );
}
