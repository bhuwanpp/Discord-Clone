import React from 'react'

export default function Third() {
  const Img = './src/images/third.svg'

  return (
    <div className="services   bg-thirdBg flex justify-between  gap-20 px-12 py-32" id='services'>
      
        <div className="left text-textBold  tracking-wider pt-12">
          <h2 className='text-[40px] leading-[52px] font-bold w-[300px] pb-8 '>Where hanging out is easy</h2>
          <p className='text-lg w-[400px] leading-8'>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>

        </div>
        <div className="right w-full ">
          <img src={Img} alt="" />

        </div>

    </div>
  )
}
