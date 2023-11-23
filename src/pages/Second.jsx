export default function Second() {
  const Img = './src/images/second.svg'
    return (
      <div className="about h-screen flex" id="about">
        <div className="left">
          <img src={Img} alt="" />

        </div>
        <div className="right">
          <h2>Create an invite-only place where you belong</h2>
          <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>

        </div>
        
      </div>
    )
  }