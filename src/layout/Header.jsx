import {
  Menu,
  Search,
  ShoppingCart,
  User,
  Phone,
  Mail,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  HeartIcon
} from "lucide-react";

import { NavLink } from "react-router-dom";
function Header(){
    return(
        <header className="w-full">
            <div className="hidden md:flex item-center justify-between bg-slate-900 text-white px-8 py-2 text-sm">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Phone size={14}/>
                        <span>(225) 555-0118 </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={14}/>
                        <span>michelle.river@example.com</span>
                    </div>
                </div>
                <div>
                   Fallow Us and get a change to win 80% off
                </div>
                <div className="flex gap-4">
                        <FacebookIcon className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" ></FacebookIcon>
                        <YoutubeIcon className="w-5 h-5 cursor-pointer hover:text-red-600 transition"></YoutubeIcon>
                        <InstagramIcon className="w-5 h-5 cursor-pointer hover:text-pink-500 transition" ></InstagramIcon>
                        <TwitterIcon className="w-5 h-5 cursor-pointer hover:text-sky-500 transition" ></TwitterIcon>
                     </div>
            </div>
            <div className="border-b">
                <div className="flex items-center justify-between px-4 py-3 md:px-8">
                    <button className="md:hidden">
                        <Menu size={24}/>
                    </button>
                    <div className="text-lg font-bold">
                        Bandage
                    </div>
                     <nav className="hidden md:flex gap-6 text-sm">
                        {[
                          { path: "/", label: "Home" },
                          { path: "/shop", label: "Shop" },
                          { path: "/about", label: "About" },
                          { path: "/blog", label: "Blog" },
                          { path: "/contact", label: "Contact" },
                          { path: "/pages", label: "Pages" }
                        ].map((item) => (
                          <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                              isActive
                                ? "text-blue-500 font-semibold"
                                : "text-gray-700 hover:text-blue-500 transition"
                            }
                          >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

                    <div className="flex items-center gap-4 text-blue-500">
            <NavLink
              to="/login"
              className="hidden md:flex items-center gap-1 text-sm hover:text-blue-700 transition"
            >
              <User size={24} />
              Login / Register
            </NavLink>

            <Search size={18} className="cursor-pointer hover:text-blue-700 transition" />
            <ShoppingCart size={18} className="cursor-pointer hover:text-blue-700 transition" />
            <HeartIcon size={18} className="cursor-pointer hover:text-blue-700 transition"/>
          </div>

                </div>
            </div>
        </header>
    )

}
export default Header;