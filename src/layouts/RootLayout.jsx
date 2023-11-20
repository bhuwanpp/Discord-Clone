import { Outlet, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function RootLayout() {
  return (
    <div className="root-layout h-1">
      <header className="flex bg-bgColor">
        <div className="logo flex ">
        <i class="fa-brands fa-discord"></i>
        <h5>Discord</h5>
        </div>
        <nav className="flex">
          <Link   smooth to="home" className="cursor-pointer">Download</Link>
        <Link  smooth to="about" className="cursor-pointer">Nitro</Link>
          <Link  smooth to="services" className="cursor-pointer">Discover</Link>
          <Link  smooth to="services" className="cursor-pointer">Safety</Link>
          <Link  smooth to="services" className="cursor-pointer">Support</Link>
          <Link  smooth to="services" className="cursor-pointer">Blog</Link>
          <Link  smooth to="services" className="cursor-pointer">Careers</Link>
        </nav>
        <button className="rounded-full bg-white">Login</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}