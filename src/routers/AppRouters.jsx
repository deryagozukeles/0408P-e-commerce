import { Switch,Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

function AppRouters(){
    return(
        <Switch>
            <Route>
                <HomePage/>
            </Route>
        </Switch>
    )

}
export default AppRouters;