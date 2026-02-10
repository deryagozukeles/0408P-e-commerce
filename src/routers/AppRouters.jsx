import { Switch,Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import Team from "../pages/Team";
import AboutPage from "../pages/AboutPage";

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
            <Route path="/team" >
                <Team/>
            </Route>
            <Route path="/about" >
                <AboutPage/>
            </Route>
        </Switch>
    )

}
export default AppRouters;