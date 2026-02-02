import { Facebook, FacebookIcon, InstagramIcon, Twitter, TwitterIcon } from "lucide-react";

function Footer(){
    return(
        <footer className=" text-gray-600 mt-16">
            <div className="bg-gray-100 max-w-7xl mx-auto px-4 md:px-16 py-12">
                 <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 border-b pb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Bagande</h2>
                     <div className="flex gap-4">
                        <FacebookIcon className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" ></FacebookIcon>
                        <InstagramIcon className="w-5 h-5 cursor-pointer hover:text-pink-500 transition" ></InstagramIcon>
                        <TwitterIcon className="w-5 h-5 cursor-pointer hover:text-sky-500 transition" ></TwitterIcon>
                     </div>
                 </div>
                 <div className="grid grid-cols-1 bg-white sm:grid-cols-2 md:grid-cols-5 gap-8 py-10 text-sm text-left">
                         <div>
                            <h3 className="font-bold text-1xl text-gray-950 mb-3">Company Info</h3>
                            <ul className="space-y-2">
                                <li className="hover:text-gray-900 cursor-pointer">About Us</li>
                                <li className="hover:text-gray-900 cursor-pointer">Carrier</li>
                                <li className="hover:text-gray-900 cursor-pointer">We are hiring</li>
                                <li className="hover:text-gray-900 cursor-pointer">Blog</li>
                            </ul>
                         </div>
                         <div>
                            <h3 className="font-bold text-1xl text-gray-950 mb-3">Legal</h3>
                            <ul className="space-y-2">
                                <li className="hover:text-gray-900 cursor-pointer">About Us</li>
                                <li className="hover:text-gray-900 cursor-pointer">Carrier</li>
                                <li className="hover:text-gray-900 cursor-pointer">We are hiring</li>
                                <li className="hover:text-gray-900 cursor-pointer">Blog</li>
                            </ul>
                         </div>
                         <div>
                            <h3 className="font-bold text-1xl text-gray-950 mb-3">Features</h3>
                            <ul className="space-y-2">
                                <li className="hover:text-gray-900 cursor-pointer">Busniess Marketing</li>
                                <li className="hover:text-gray-900 cursor-pointer">User Analytic</li>
                                <li className="hover:text-gray-900 cursor-pointer">Live Chat</li>
                                <li className="hover:text-gray-900 cursor-pointer">Unlimited Support</li>
                            </ul>
                         </div>
                         <div>
                            <h3 className="font-bold text-1xl text-gray-950 mb-3">Resources</h3>
                            <ul className="space-y-2">
                                <li className="hover:text-gray-900 cursor-pointer">Ios & Android </li>
                                <li className="hover:text-gray-900 cursor-pointer">Watch a Demo</li>
                                <li className="hover:text-gray-900 cursor-pointer">Customers</li>
                                <li className="hover:text-gray-900 cursor-pointer">API</li>
                            </ul>
                         </div>
                          <div >
                            <h3 className="font-bold text-gray-950 mb-4">Get In Touch</h3>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none"
                                />
                                <button className="bg-blue-500 text-white px-4 rounded-r-md text-sm hover:bg-blue-600 transition">
                                    Subsicribe
                                </button>
                            </div>
                            <div>
                                <p className="text-xs">Lore imp sum dolor Amit</p>
                            </div>
                             
                          </div>
                      
                 </div>
                 <p className="text-xs text-gray-400 text-left pt-5">Made With Love By Finland All Right Reserved </p>

            </div>
           
        
        </footer>
    )

}
export default Footer;