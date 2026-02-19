import { combineReducers } from "redux";
import { clientReducer } from "./reducers/clientReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { createStore } from "redux";
import categoryReducer from "./reducers/categoryReducer";

const rootReducer=combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart:shoppingCartReducer,
    categories: categoryReducer,
});
export const store=createStore(rootReducer,applyMiddleware(thunk,logger));