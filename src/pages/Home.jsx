import BackToTop from "../components/BackToTop";
import About from "./About";
import First from "./First";
import Services from "./Services";

export default function Home() {
  return (
    <>
    <div className="main-home  grid" id='home'>
        <First/>
        <About/>
        <Services/>
    </div>
    <BackToTop/>
       
    </>
  )
}