export default function First() {
  const leftImg = "./src/images/left.svg";
  const cloud = "./src/images/cloud.svg";
  const rightImg = "./src/images/rightBg.svg";
  return (
    <div className="home h-[530px] bg-bgColor overflow-hidden" id="home">
      <img src={cloud} alt="cloud" className=" relative h-[800px] scale-200" />
      <div className="content absolute left-0 right-0  top-64  flex justify-between ">
        <div className="left  absolute -left-96">
          <img src={leftImg} alt="left image" className=" a" />
        </div>
        <div className="text absolute left-72 -top-20  w-[730px]">
          <h1 className="text-center text-6xl font-black text-white pb-10 w-ful">
            IMAGINE A PLACE...
          </h1>
          <p className="text-center text-white text-lg pb-10">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className="buttons flex  items-center justify-center gap-10">
            <button className="bg-white hover:text-buttonColor hover:shadow-xl flex px-7 py-3 text-xl rounded-full transition-all">
              <div className="icons text-2xl pr-2">
                <iconify-icon icon="material-symbols:download"></iconify-icon>
              </div>
              Download for Windows
            </button>
            <button className="bg-blackButton hover:bg-hoverBlack text-white flex px-7 py-3 text-xl rounded-full hover:shadow-xl transition-all">
              Open discord in your browser
            </button>
          </div>
        </div>
        <div className="right absolute -right-96   ">
          <img src={rightImg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}
