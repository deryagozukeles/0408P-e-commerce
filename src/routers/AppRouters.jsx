import { Switch,Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";

function AppRouters(){
    return(
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>
            <Route path="/shop" >
                <ShopPage/>
            </Route>
            <Route path="/product/:id" >
                <ProductDetail/>
            </Route>
            <Route path="/contact" >
                <Contact/>
            </Route>
        </Switch>
    )

}
export default AppRouters;