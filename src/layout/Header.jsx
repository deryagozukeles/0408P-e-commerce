import {
  Menu,
  Search,
  ShoppingCart,
  User,
  Phone,
  Mail,
} from "lucide-react";
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
                <div className="flex items-center gap-4">
                    <span>Follow Us:</span>
                    <span>fb</span>
                    <span>in</span>
                    <span>tw</span>
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
                        <a href="#">Home</a>
                        <a href="#">Shop</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                        <a href="#">Pages</a>
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