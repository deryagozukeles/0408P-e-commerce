import React, { useState, useRef, useEffect } from "react";
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
  HeartIcon,
  ChevronDown
} from "lucide-react";
import Gravatar from "react-gravatar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useHistory } from "react-router-dom";
import { logout } from "../store/actions/clientActions"; 
import { toast } from "react-toastify"; 

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const { cart } = useSelector((state) => state.shoppingCart);
  const user = useSelector((state) => state.client.user);
  const { list } = useSelector((state) => state.categories);

  const womenCategories = list.filter((cat) => cat.gender === "k");
  const menCategories = list.filter((cat) => cat.gender === "e");

  const handleLogout = () => {
   
    localStorage.removeItem("token");
    dispatch(logout());
    toast.success("Çıkış yapıldı.");
    history.push("/");
};

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalAmount = cart.reduce((total, item) => total + item.product.price * item.count, 0);
  const totalCount = cart.reduce((total, item) => total + item.count, 0);

  return (
    
    <header className="w-full flex flex-col m-0 p-0 border-none">
      
     
      <div className="hidden md:flex items-center justify-between bg-slate-900 text-white px-8 py-2 text-sm w-full">
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
          <FacebookIcon size={16} className="cursor-pointer hover:text-blue-500 transition" />
          <YoutubeIcon size={16} className="cursor-pointer hover:text-red-600 transition" />
          <InstagramIcon size={16} className="cursor-pointer hover:text-pink-500 transition" />
          <TwitterIcon size={16} className="cursor-pointer hover:text-sky-500 transition" />
        </div>
      </div>

     
      <div className="border-b bg-white w-full">
        <div className="flex items-center justify-between px-4 py-3 md:px-8 max-w-[1440px] mx-auto">
          
          <div className="flex items-center gap-4">
            <button className="md:hidden">
              <Menu size={24} />
            </button>
            <Link to="/" className="text-2xl font-bold  text-slate-800">
              Bandage
            </Link>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-bold text-gray-500">
            <NavLink exact to="/" activeClassName="text-blue-500" className="hover:text-blue-500 transition">Home</NavLink>
            
           
            <div className="group relative">
              <NavLink to="/shop" className="flex items-center gap-1 hover:text-blue-500 transition">
                Shop <ChevronDown size={12} />
              </NavLink>
              <div className="absolute left-0 top-full hidden group-hover:grid bg-white shadow-xl p-8 grid-cols-2 gap-16 z-50 min-w-[400px] border-t-2 border-blue-500">
                <div>
                  <h3 className="font-bold text-slate-800 mb-4">Kadın</h3>
                  {womenCategories.map((cat) => (
                    <Link key={cat.id} to={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`} className="block text-gray-600 hover:text-blue-500 mb-2 font-normal">{cat.title}</Link>
                  ))}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-4">Erkek</h3>
                  {menCategories.map((cat) => (
                    <Link key={cat.id} to={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`} className="block text-gray-600 hover:text-blue-500 mb-2 font-normal">{cat.title}</Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/about" className="hover:text-blue-500 transition">About</NavLink>
            <NavLink to="/blog" className="hover:text-blue-500 transition">Blog</NavLink>
            <NavLink to="/contact" className="hover:text-blue-500 transition">Contact</NavLink>
            <NavLink to="/team" className="hover:text-blue-500 transition">Team </NavLink>
          </nav>

          
          <div className="flex items-center gap-5 text-blue-500">
            
            {user && user.name ? (
              <div className="group relative flex items-center gap-2 cursor-pointer py-2">
                <Gravatar email={user.email} size={30} className="rounded-full border border-blue-500" default="identicon" />
                <span className="text-sm font-bold text-gray-700 hidden sm:inline">{user.name}</span>
                <ChevronDown size={14} className="text-gray-400" />
               
                <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-xl border rounded-lg py-2 z-[60] min-w-[160px]">
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition">
                    Siparişlerim
                  </Link>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition border-t">
                    Çıkış Yap
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-sm font-bold">
                <User size={16} />
                <NavLink to="/login" className="hover:underline">Login</NavLink>
                <span className="text-gray-300">/</span>
                <NavLink to="/signup" className="hover:underline">Register</NavLink>
              </div>
            )}

            <div className="flex items-center gap-4">
              <Search size={20} className="cursor-pointer" />
              
             
              <div className="relative" ref={cartRef}>
                <ShoppingCart size={20} onClick={() => setIsCartOpen(!isCartOpen)} className="cursor-pointer" />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                    {totalCount}
                  </span>
                )}

                
                {isCartOpen && (
                  <div className="absolute right-0 mt-3 w-[320px] bg-white shadow-2xl rounded-xl p-4 z-50 border">
                    <h3 className="font-bold text-gray-800 border-b pb-2 mb-3">Sepetim ({totalCount})</h3>
                    {cart.length === 0 ? (
                      <p className="text-sm text-gray-500 text-center py-4">Sepetiniz boş</p>
                    ) : (
                      <>
                        <div className="max-h-60 overflow-y-auto">
                          {cart.map((item) => (
                            <div key={item.product.id} className="flex gap-3 mb-3 pb-3 border-b border-gray-50 last:border-0">
                              <img src={item.product.images?.[0]?.url} alt="" className="w-12 h-12 object-cover rounded border" />
                              <div className="flex-1 text-xs">
                                <p className="font-medium text-gray-800 line-clamp-1">{item.product.name}</p>
                                <p className="text-gray-400 mt-1">Adet: {item.count}</p>
                                <p className="text-blue-500 font-bold">{item.product.price} TL</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between mt-4 font-bold text-sm">
                          <span>Toplam:</span>
                          <span className="text-orange-600">{totalAmount.toFixed(2)} TL</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          <Link to="/cart" onClick={() => setIsCartOpen(false)} className="bg-gray-100 text-gray-700 text-center py-2 rounded-md text-xs font-bold hover:bg-gray-200">Sepete Git</Link>
                          <Link to="/create-order" onClick={() => setIsCartOpen(false)} className="bg-orange-500 text-white text-center py-2 rounded-md text-xs font-bold hover:bg-orange-600">Ödeme Yap</Link>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>

              <HeartIcon size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;