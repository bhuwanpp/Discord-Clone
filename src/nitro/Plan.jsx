export default function Plan({
  title,
  imageSrc1,
  imageSrc2,
  subtitle1,
  subtitle2,
}) {
  return (
    <div>
      {/* bottom  */}
      <div className="bottom px-20 flex justify-between">
        <div className="features ">
          <h5>{title}</h5>
        </div>

        <div className="nitro flex items-center  gap-10">
          <div className="nitroImg">
            <img src={imageSrc1} alt="" />
            <p>{subtitle1}</p>
          </div>
          <div className="nitroimg2 -mt-3">
            <img src={imageSrc2} alt="" />
            <p>{subtitle2}</p>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-400 w-full "></div>
    </div>
  );
}
