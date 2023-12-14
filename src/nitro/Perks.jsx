export default function Perks() {
  return (
    <div>
      {/* popular */}
      <div className="bottom pt-96 px-16">
        <div className="h2 text-center pb-16">
          <h2 className="text-5xl font-bold">Popular Nitro Perks</h2>
        </div>
        <div className="perks grid grid-cols-2 gap-x-10 gap-y-10">
          {/* perk1 */}
          <div className="perk1 bg-thirdBg text-center px-20 py-10 h-[376px] rounded-lg">
            <h5 className="text-2xl font-bold pb-10 w-96">
              From clips to pics, share away with bigger file uploads
            </h5>
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/633bf534f7cda178e9b4cc8c_Project-Speedy-Uploader-Static.svg"
              alt="perk1"
            />
          </div>
          {/* perk2 */}
          <div className="perk1 bg-thirdBg text-center px-20 py-10 h-[376px] rounded-lg">
            <h5 className="text-2xl font-bold pb-10 w-96">
              Stream apps and games in sweet, sweet HD
            </h5>
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/633bf534b85e9008c06d873d_Project-Speedy-Streaming-Static.svg"
              alt="perk1"
            />
          </div>
          {/* perk3 */}
          <div className="perk1 bg-thirdBg text-center px-20 py-10 h-[376px] rounded-lg">
            <h5 className="text-2xl font-bold pb-10 w-96">
              Hype and meme with custom emoji anywhere
            </h5>
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/633bf5348529b3789de63d3c_Project-Speedy-Emoji-Static.svg"
              alt="perk1"
            />
          </div>
          {/* perk4 */}
          <div className="perk1 bg-thirdBg text-center px-20 py-10 h-[376px] rounded-lg">
            <h5 className="text-2xl font-bold pb-10 w-96">
              Unlock perks for your communities with 2 Server Boosts
            </h5>
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/633bf534f1f0854923a8e9c1_Frame%20881.svg"
              alt="perk1"
            />
          </div>
        </div>
        <div className="button  flex justify-center  py-10   ">
          <button className="  bg-textBold hover:bg-hoverBlack text-white px-6 py-3 rounded-full font-bold hover:shadow-xl  transform hover:translate-y-[-1px]  ">
            Show all perks
          </button>
        </div>
      </div>
    </div>
  );
}
