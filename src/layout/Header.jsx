import {
  Menu,
  Search,
  ShoppingCart,
  User,
  Phone,
  Mail,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon
} from "lucide-react";
import { Link } from "react-router-dom";
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
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/pages">Pages</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Search size={18}/>
                        <User size={18} className="hidden md:block"/>
                        <ShoppingCart size={18}/>

                    </div>
                </div>
            </div>
        </header>
    )

}
export default Header;