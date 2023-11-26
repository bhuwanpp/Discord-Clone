import { Outlet, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className=" bg-bgColor flex  justify-between items-center h-20 px-10">

        <div className="logo flex cursor-pointer">
        <i class="fa-brands fa-discord text-white text-2xl"></i>
        <h5 className="text-white font-black text-xl">Discord</h5>
        </div>

        <nav className="flex justify-between gap-8 text-white font-semibold">
          <Link   smooth to="home" className="cursor-pointer">Download</Link>
        <Link  smooth to="about" className="cursor-pointer">Nitro</Link>
          <Link  smooth to="services" className="cursor-pointer">Discover</Link>
          <Link  smooth to="services" className="cursor-pointer">Safety</Link>
          <Link  smooth to="services" className="cursor-pointer">Support</Link>
          <Link  smooth to="services" className="cursor-pointer">Blog</Link>
          <Link  smooth to="services" className="cursor-pointer">Careers</Link>
        </nav>

        <div className="button  ">
        <button className="rounded-full bg-white px-4 py-2 text-sm hover:shadow-xl">Login</button>
        </div>
        
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}