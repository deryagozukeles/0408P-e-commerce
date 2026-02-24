import { Switch,Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import Team from "../pages/Team";
import AboutPage from "../pages/AboutPage";
import Signup from "../pages/Signup";
import Login from "../pages/LoginPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import ProtectedRoute from "../components/ProtectedRoute";
import CreateOrderPage from "../components/CreateOrderPage";
import OrderSuccessPage from "../pages/OrderSuccessPage";
import OrdersPage from "../pages/OrdersPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import BlogPage from "../pages/BlogPage";

function AppRouters(){
    const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
     
      axiosInstance.get("/verify") 
        .then(res => {
        
          dispatch(loginSuccess(res.data)); 
        })
        .catch(err => {
        
          localStorage.removeItem("token");
          console.error("Token geçersiz, lütfen tekrar giriş yapın.");
        });
    }
  }, [dispatch]);

    return(
        <Switch>
            <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" >
                <ProductDetail/>
            </Route>
            <Route path="/" exact>
                <HomePage/>
            </Route>
            <Route path="/shop" >
                <ShopPage/>
            </Route>
            <Route path="/shop/:gender/:categoryName/:categoryId" >
                <ShopPage/>
            </Route>
            <Route path="/contact" >
                <Contact/>
            </Route>
            <Route path="/cart" >
                <ShoppingCartPage/>
            </Route>
            <Route path="/team" >
                <Team/>
            </Route>
            <Route path="/blog" >
                <BlogPage/>
            </Route>
            <Route path="/about" >
                <AboutPage/>
            </Route>
            <Route path="/signup" >
                <Signup/>
            </Route>
            <Route path="/login" >
                <Login/>
            </Route>
            <ProtectedRoute path="/create-order" component={CreateOrderPage} />
             <ProtectedRoute path="/orders" component={OrdersPage} exact />
            <Route path="/order-success">
                <OrderSuccessPage />
            </Route>
            
        </Switch>
    )

}
export default AppRouters;