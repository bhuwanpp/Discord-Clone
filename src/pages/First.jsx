export default function First() {
  const leftImg = './src/images/left.svg'
  const cloud = './src/images/cloud.svg'
  const rightImg = './src/images/rightBg.svg'
    return (
      <div className="home h-screen bg-bgColor flex" id="home">
        <div className="left">
          <img src={leftImg} alt="left image" />
        </div>
        <div className="middle">
          <img src={cloud} alt="cloud" className="relative" />
          <h1>IMAGINE A PLACE...</h1>
          <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
          <div className="buttons flex">
            <button className="bg-white flex">
              <div className="icons pt-1 text-2xl">
              <iconify-icon icon="material-symbols:download"></iconify-icon>
              </div>
              Download for Window</button>
            <button className="bg-black text-white">Open discord in your browser</button>
          </div>
        </div>
        <div className="right">
          <img src={rightImg} alt="" />
        </div>
      </div>
    )
  }