export default function Fourth() {
    const Img = './src/images/fourth.svg'
      return (
        <div className="about h-screen  flex justify-between px-12 py-32" id="about">
          <div className="left">
            <img src={Img} alt=""  className="w-[650px]" />
  
          </div>
          <div className="righ text-textBold  tracking-wider pt-12">
            <h2 className="text-[40px] leading-[52px] font-bold w-[400px] pb-8">From few to a fandom</h2>
            <p className="text-lg w-[400px] leading-8">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
  
          </div>
          
        </div>
      )
    }