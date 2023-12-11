import video from "../video/nitroVideo.webm";
export default function Nitro() {
  return (
    <div className="nitro">
      <div className="video-container h-screen overflow-hidden relative">
        <video
          src={video}
          controls={false}
          autoPlay
          loop
          muted
          className="w-screen h-full -z-10 scale-175 pr-24 pt-28   "
        ></video>
      </div>

      <div>Popular Nitro Perks</div>
    </div>
  );
}
