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
import Gravatar from "react-gravatar"; 
import { NavLink, Link } from "react-router-dom"; 
import { useSelector } from "react-redux"; 
function Header() {
 
  const user = useSelector((state) => state.client.user);

  return (
    <header className="w-full">
      
      <div className="hidden md:flex items-center justify-between bg-slate-900 text-white px-8 py-2 text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>michelle.river@example.com</span>
          </div>
        </div>
        <div>Follow Us and get a chance to win 80% off</div>
        <div className="flex gap-4">
          <FacebookIcon className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" />
          <YoutubeIcon className="w-5 h-5 cursor-pointer hover:text-red-600 transition" />
          <InstagramIcon className="w-5 h-5 cursor-pointer hover:text-pink-500 transition" />
          <TwitterIcon className="w-5 h-5 cursor-pointer hover:text-sky-500 transition" />
        </div>
      </div>

     
      <div className="border-b">
        <div className="flex items-center justify-between px-4 py-3 md:px-8">
          <button className="md:hidden">
            <Menu size={24} />
          </button>
          
          <div className="text-lg font-bold">
            <Link to="/">Bandage</Link>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            {[
              { path: "/", label: "Home" },
              { path: "/shop", label: "Shop" },
              { path: "/about", label: "About" },
              { path: "/blog", label: "Blog" },
              { path: "/contact", label: "Contact" },
              { path: "/team", label: "Team" }
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
            {user && user.name ? (
             
              <div className="flex items-center gap-2 border-r pr-4">
                <Gravatar 
                  email={user.email} 
                  size={32} 
                  className="rounded-full border border-blue-500 shadow-sm" 
                  default="identicon" 
                />
                <span className="text-sm font-bold text-gray-700">{user.name}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <User size={18} />
                <div className="flex gap-1 text-sm font-bold">
                  <NavLink to="/login" className="hover:text-blue-700 transition">Login</NavLink>
                  <span>/</span>
                  <NavLink to="/signup" className="hover:text-blue-700 transition">Register</NavLink>
                </div>
              </div>
            )}

            <Search size={18} className="cursor-pointer hover:text-blue-700 transition" />
            <ShoppingCart size={18} className="cursor-pointer hover:text-blue-700 transition" />
            <HeartIcon size={18} className="cursor-pointer hover:text-blue-700 transition" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;