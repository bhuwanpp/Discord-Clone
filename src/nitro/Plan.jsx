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
    <div>
      {/* bottom  */}
      <div className="bottom px-20 flex justify-between">
        <div className="features ">
          <h5 className="text-lg text-nitroText font-light" style={titleStyle}>
            {title}
          </h5>
        </div>

        <div className="nitro flex items-top   gap-10">
          <div className="nitroImg">
            <img src={imageSrc1} alt="" className="pr-20" style={imgStyle} />
            <p style={subtitleStyle} className="pr-9">
              {subtitle1}
            </p>
          </div>
          <div className="nitroimg2">
            <img src={imageSrc2} alt="" style={imgStyle} className="pr-8" />
            <p style={subtitleStyle} className="">
              {subtitle2}{" "}
            </p>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-400 w-full "></div>
    </div>
  );
}
