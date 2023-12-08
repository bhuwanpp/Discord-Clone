export default function Second() {
  const Img = './src/images/second.svg'
    return (
      <div className="about  flex justify-between px-12 py-32" id="about">
        <div className="left w-full">
          <img src={Img} alt="" />

        </div>
        <div className="right text-textBold  tracking-wider pt-12">
          <h2 className="text-[40px] leading-[52px] font-bold w-[400px] pb-8 ">Create an invite-only place where you belong</h2>
          <p className="text-lg w-[400px] leading-8">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>

        </div>
        
      </div>
    )
  }