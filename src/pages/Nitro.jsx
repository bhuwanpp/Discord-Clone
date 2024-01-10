import Perks from "../nitro/Perks";
import Plan from "../nitro/Plan";
import Questions from "../nitro/Questions";
import video from "../video/nitroVideo.webm";
export default function Nitro() {
  const imageNitroBasic =
    "https://assets-global.website-files.com/6257adef93867e50d84d30e2/633c0934aea58b4ddee274ec_Layer%201.svg";
  const imageNitro =
    "https://assets-global.website-files.com/6257adef93867e50d84d30e2/633c093f866ccfba517ff0d4_Centered.svg";
  const tick =
    "https://assets-global.website-files.com/6257adef93867e50d84d30e2/633c0bef3ac44f5d1acbb35b_Vector.svg";
  const cross =
    "https://assets-global.website-files.com/6257adef93867e50d84d30e2/633ec9dcc1ea3b16de0da9dc_Small.svg";
  const popular =
    "https://assets-global.website-files.com/6257adef93867e50d84d30e2/633c109da93ff46336b02e84_Tag.svg";
  return (
    <div className="nitro  ">
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
            <div className=" pt-28">
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
            <div className=" pt-1">
              <button className="bg-white text-black w-full py-3 rounded-full text-xl font-semibold hover:shadow-xl hover:text-buttonColor transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* components */}
      <Perks />
      <div className="bottom px-16 pb-10">
        {/* plan */}
        <div className="plan bg-thirdBg  px-16 pb-44 rounded-lg relative">
          {/* top */}
          <div className="top flex justify-center text-center  text-5xl font-bold  w-full  px-52 py-20">
            <h2 className="text-textBold">
              Pick the plan that works best for you
            </h2>
          </div>
          <div className="bottom relative">
            <Plan
              title="Features"
              imageSrc1={imageNitroBasic}
              imageSrc2={imageNitro}
              customStyles={{
                titleStyle: { fontWeight: "bold", fontSize: "20px" },
                imgStyle: {
                  paddingRight: "0px",
                  paddingLeft: "0px",
                },
              }}
            />
            <img
              src={popular}
              alt=""
              className="absolute right-7 -top-10 pr-2"
            />
            <Plan
              title="Unlimited Super Reactions"
              imageSrc1={tick}
              imageSrc2={tick}
            />
            <Plan
              title="Custom emoji anywhere and make them animated"
              imageSrc1={tick}
              imageSrc2={tick}
            />
            <Plan
              title="Custom stickers anywhere"
              imageSrc1={tick}
              imageSrc2={tick}
            />
            <Plan title="Custom App Icons" imageSrc1={tick} imageSrc2={tick} />
            <Plan
              title="Bigger file sharing"
              subtitle1="50MB"
              subtitle2="500MB"
            />
            <Plan
              title="HD streaming"
              imageSrc1={cross}
              subtitle2="Up to 4K and 60fps"
              customStyles={{
                subtitleStyle: {
                  fontSize: "15px",
                  marginRight: "-45px",
                },
                imgStyle: {
                  paddingRight: "35px",
                },
              }}
            />
            <Plan
              title={
                <>
                  2 Free Boosts
                  <br />+ 30% off extra Boosts
                </>
              }
              imageSrc1={cross}
              imageSrc2={tick}
              customStyles={{
                titleStyle: {
                  marginTop: "-5px",
                  marginBottom: "-5px",
                  lineHeight: "1.2",
                },
              }}
            />
            <Plan
              title="Animated avatar, banner, and profile theme"
              imageSrc1={cross}
              imageSrc2={tick}
            />
            <Plan
              title="Early access to Clips"
              imageSrc1={cross}
              imageSrc2={tick}
            />
            <Plan
              title="Custom server profiles"
              imageSrc1={cross}
              imageSrc2={tick}
            />
            <Plan
              title="Nitro badge on your profile"
              imageSrc1={tick}
              imageSrc2={tick}
            />
            <Plan
              title="Custom video backgrounds"
              imageSrc1={tick}
              imageSrc2={tick}
            />
            <Plan
              title="Join up to 200 servers"
              imageSrc1={cross}
              imageSrc2={tick}
            />
            <Plan
              title="Longer messages up to 4,000 characters"
              imageSrc1={cross}
              imageSrc2={tick}
            />
            <Plan
              title="Colors for your Discord Theme"
              imageSrc1={cross}
              imageSrc2={tick}
            />
            <Plan
              title="Custom sounds anywhere"
              imageSrc1={cross}
              imageSrc2={tick}
            />{" "}
            <Plan
              title="Personalized entrance sounds"
              imageSrc1={cross}
              imageSrc2={tick}
            />{" "}
            <Plan
              title="Shop member pricing and exclusive items"
              imageSrc1={cross}
              imageSrc2={tick}
            />
            <div className="buttons flex items-center gap-10 pt-8 absolute right-0">
              <button className="rounded-full bg-buttonColor hover:opacity-70 text-white px-10 py-2 text-sm hover:drop-shadow-2xl transition-all font-bold">
                <p> Subscribe Basic</p>
              </button>
              <button className="rounded-full bg-buttonColor hover:opacity-70 text-white px-10 py-2 text-sm hover:drop-shadow-2xl transition-all font-bold">
                Subscribe Nitro
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* questions  */}
      <Questions />
    </div>
  );
}
