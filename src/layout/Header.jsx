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
  const { list } = useSelector((state) => state.categories);
  const womenCategories = list.filter((cat) => cat.gender === "k");
const menCategories = list.filter((cat) => cat.gender === "e");
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

          <nav className="hidden md:flex gap-6 text-sm relative">
  
            <NavLink to="/" className="hover:text-blue-500 transition">
              Home
            </NavLink>

            
           <div className="group relative">
  <NavLink
    to="/shop"
    className="hover:text-blue-500 transition"
  >
    Shop
  </NavLink>

  <div className="absolute left-0 top-full hidden group-hover:grid bg-white shadow-xl p-8 grid-cols-2 gap-16 z-50 min-w-[400px] border-t-2 border-blue-500">
    
    <div>
      <h3 className="font-bold mb-4">Kadın</h3>
      {womenCategories.map((cat) => (
        <Link
          key={cat.id}
          to={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`}
          className="block text-gray-600 hover:text-blue-500 mb-2"
        >
          {cat.title}
        </Link>
      ))}
    </div>

    <div>
      <h3 className="font-bold mb-4">Erkek</h3>
      {menCategories.map((cat) => (
        <Link
          key={cat.id}
          to={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`}
          className="block text-gray-600 hover:text-blue-500 mb-2"
        >
          {cat.title}
        </Link>
      ))}
    </div>

  </div>
            </div>

            <NavLink to="/about" className="hover:text-blue-500 transition">
              About
            </NavLink>

            <NavLink to="/blog" className="hover:text-blue-500 transition">
              Blog
            </NavLink>

            <NavLink to="/contact" className="hover:text-blue-500 transition">
              Contact
            </NavLink>

            <NavLink to="/team" className="hover:text-blue-500 transition">
              Team
            </NavLink>

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