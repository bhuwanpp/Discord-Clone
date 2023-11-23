import React from 'react'

export default function Fifth() {
    const Img1 = './src/images/fifth.svg'
    const Img2 = './src/images/fifthStar.svg'

  return (
    <div className="fifth">
        <div className="top">
            <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
            <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
        </div>
        <div className="middle">
            <img src={Img1} alt="img 1" />

        </div>
        <div className="bottom">
            <img src={Img2} alt="star" />
            <h2>Ready to start your journey?</h2>
            <button className="bg-buttonColor flex px-7 py-3 text-xl rounded-full">
              <div className="icons text-2xl pr-2">
              <iconify-icon icon="material-symbols:download"></iconify-icon>
              </div>
              Download for Windows</button>
        </div>
    </div>
  )
}
