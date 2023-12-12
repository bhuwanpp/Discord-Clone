import video from "../video/nitroVideo.webm";
export default function Nitro() {
  return (
    <div className="nitro ">
      <div className="top relative">
        <div className="video-container h-screen overflow-hidden relative px-16">
          <video
            src={video}
            controls={false}
            autoPlay
            loop
            muted
            className="w-screen h-full  -z-10 scale-175 pr-24 pt-28 relative   "
          ></video>
          <div className=" unleash absolute z-10  top-56   text-white w-[340px] ">
            <h1 className="text-6xl font-black pb-5">
              Unleash more fun with Nitro
            </h1>
            <p className="text-lg">
              Subscribe to Nitro to upgrade your emoji, personalize your
              profile, share bigger files, and so much more.
            </p>
          </div>
          {/* grids */}
        </div>
        <div className="grids px-16">
          {/* grid 1 */}
          <div className="grid1 text-white absolute -bottom-72 w-[561.71px] h-[416px]    rounded-lg p-5">
            <h2 className="uppercase text-3xl font-black italic">
              Nitro basic
            </h2>

            <div className="upload flex pt-3 text-lg">
              <div className="icon text-3xl pr-1">
                <iconify-icon icon="mdi:arrow-up-bold"></iconify-icon>
              </div>
              <p>50MB uploads</p>
            </div>
            <div className="emoji flex pt-2 text-lg">
              <i class="fa-solid fa-face-grin-wide text-xl pr-2 pl-1"></i>
              <p> Custom emoji anywhere</p>
            </div>
            <div className="emoji flex  pt-3 text-lg">
              <div className="icon  text-2xl pr-2 ">
                <iconify-icon icon="fluent:emoji-sparkle-24-filled"></iconify-icon>
              </div>
              Unlimited Super Reactions
              <p></p>
            </div>
            <div className="emoji flex  pt-2 pb-2 text-lg">
              <div className="icon text-2xl pr-1">
                <iconify-icon icon="fluent:fast-acceleration-20-filled"></iconify-icon>
              </div>

              <p>Special Nitro badge on your profile</p>
            </div>
            <div className="button pt-28">
              <button className="bg-white text-black w-full py-3 rounded-full text-xl font-semibold hover:shadow-xl hover:text-buttonColor transition-all">
                Subscribe
              </button>
            </div>
          </div>

          {/* grid 2 */}
          <div className="grid2 text-white absolute -bottom-72 right-16 w-[561.71px] h-[416px]   rounded-lg px-5 py-3">
            <h2 className="uppercase text-3xl font-black italic">Nitro</h2>

            <div className="upload flex pt-3 text-lg">
              <div className="icon text-3xl pr-1">
                <iconify-icon icon="mdi:arrow-up-bold"></iconify-icon>
              </div>
              <p>50MB uploads</p>
            </div>
            <div className="emoji flex pt-1 pl-1  text-lg item-center">
              <i class="fa-solid fa-face-grin-wide text-xl pr-2 pt-1"></i>
              <p> Custom emoji anywhere</p>
            </div>

            <div className="emoji flex  pt-1 pl-1 text-lg">
              <div className="icon  text-2xl pr-2 pt-1">
                <iconify-icon icon="fluent:emoji-sparkle-24-filled"></iconify-icon>
              </div>
              Unlimited Super Reactions
              <p></p>
            </div>

            <div className="emoji flex pt-1 pl-1 text-lg">
              <div className="icon  text-2xl  pr-2 pt-1">
                <iconify-icon icon="lucide:monitor-dot"></iconify-icon>
              </div>

              <p> HD video streaming</p>
            </div>
            <div className="emoji flex pt-1 pl-1 text-lg">
              <div className="icon  text-2xl  pr-2 pt-1">
                <iconify-icon icon="lucide:monitor-dot"></iconify-icon>
              </div>

              <p> 2 Server Boosts</p>
            </div>
            <div className="emoji flex pt-1 pl-1 text-lg">
              <div className="icon  text-2xl  pr-2 pt-1">
                <iconify-icon icon="lucide:monitor-dot"></iconify-icon>
              </div>

              <p>Custom profiles and more!</p>
            </div>

            <div className="emoji flex  pt-2 pb-2 text-lg">
              <div className="icon text-3xl pr-1">
                <iconify-icon icon="fluent:fast-acceleration-20-filled"></iconify-icon>
              </div>

              <p>Special Nitro badge on your profile</p>
            </div>
            <div className="button pt-1">
              <button className="bg-white text-black w-full py-3 rounded-full text-xl font-semibold hover:shadow-xl hover:text-buttonColor transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom pt-96">
        <h2>Popular Nitro Perks</h2>
      </div>
    </div>
  );
}
