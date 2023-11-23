export default function Fourth() {
    const Img = './src/images/fourth.svg'
      return (
        <div className="about h-screen flex" id="about">
          <div className="left w-full">
            <img src={Img} alt=""  />
  
          </div>
          <div className="right">
            <h2>From few to a fandom</h2>
            <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
  
          </div>
          
        </div>
      )
    }