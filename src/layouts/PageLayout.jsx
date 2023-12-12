import { Outlet, NavLink } from "react-router-dom";
import Footer from "../components/Footer";

export default function PageLayout() {
  return (
    <div className="page-layout ">
      <header className=" z-10 bg-transparent absolute w-full flex justify-between items-center h-20 px-16">
        <NavLink to="/" className="logo flex cursor-pointer  ">
          <i class="fa-brands fa-discord text-white text-2xl"></i>
          <h5 className="text-white font-black text-xl">Discord</h5>
        </NavLink>

        <nav className="lg:flex hidden  justify-between gap-8 text-white font-semibold">
          <NavLink to="download" className="cursor-pointer hover:underline">
            Download
          </NavLink>
          <NavLink to="nitro" className="cursor-pointer hover:underline">
            Nitro
          </NavLink>
          <NavLink to="discover" className="cursor-pointer hover:underline">
            Discover
          </NavLink>
          <NavLink to="safety" className="cursor-pointer hover:underline">
            Safety
          </NavLink>
          <NavLink to="support" className="cursor-pointer hover:underline">
            Support
          </NavLink>
          <NavLink to="blog" className="cursor-pointer hover:underline">
            Blog
          </NavLink>
          <NavLink to="career" className="cursor-pointer hover:underline">
            Careers
          </NavLink>
        </nav>

        <div className="button  lg:pr-0 pr-14 ">
          <button className="rounded-full font-semibold bg-white px-4 py-2 text-sm hover:shadow-xl hover:text-buttonColor transition-all">
            Sign up
          </button>
        </div>
        <div className="hamburgar flex lg:hidden  cursor-pointer fixed right-10 ">
          <i className="fa-solid fa-bars  text-3xl text-white"></i>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
