import Footer from "../components/Footer";
import Fifth from "./Fifth";
import First from "./First";
import Fourth from "./Fourth";
import Second from "./Second";
import Third from "./Third";

export default function Home() {
  return (
    <>
      <div className="main-home  grid" id="home">
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
      </div>
    </>
  );
}
