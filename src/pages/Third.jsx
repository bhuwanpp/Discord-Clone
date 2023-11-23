import React from 'react'

export default function Third() {
  const Img = './src/images/third.svg'

  return (
    <div className="services h-screen flex" id='services'>
      
        <div className="left">
          <h2>Where hanging out is easy</h2>
          <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>

        </div>
        <div className="right">
          <img src={Img} alt="" />

        </div>

    </div>
  )
}
