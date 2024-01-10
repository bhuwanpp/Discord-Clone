export default function Plan({
  title,
  imageSrc1,
  imageSrc2,
  subtitle1,
  subtitle2,
  customStyles = {},
}) {
  const { titleStyle = {}, imgStyle = {}, subtitleStyle = {} } = customStyles;
  return (
    <div className="pl-12 pr-0 ">
      {/* bottom  */}
      <div className="bottom flex justify-between items-center pr-10 ">
        <div className="features   pt-5 pb-5">
          <h5 className="text-lg text-nitroText font-light" style={titleStyle}>
            {title}
          </h5>
        </div>

        <div className="nitro flex item-start  text-center   gap-32">
          <div className="nitroImg">
            <img src={imageSrc1} alt="" className="pr-20" style={imgStyle} />
            <p style={subtitleStyle} className="pr-14 font-bold">
              {subtitle1}
            </p>
          </div>
          <div className="nitroImg2">
            <img src={imageSrc2} alt="" style={imgStyle} className="pr-10 " />
            <p style={subtitleStyle} className="pr-5  font-bold ">
              {subtitle2}{" "}
            </p>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-400 w-full  "></div>
    </div>
  );
}
