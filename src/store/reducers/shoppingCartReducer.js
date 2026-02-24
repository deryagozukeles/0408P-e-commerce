const initialState={
    cart:[],
    payment:{},
    address:{}
};
export const SET_CART='SET_CART';
export const SET_PAYMENT='SET_PAYMENT';
export const SET_ADDRESS='SET_ADDRESS';
export const ADD_TO_CART="ADD_TO_CART";
export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const TOGGLE_CHECKED = "TOGGLE_CHECKED";
export const CLEAR_CART = "CLEAR_CART";

export const shoppingCartReducer=(state=initialState,action)=>{
    switch (action.type){
        case SET_CART:
            return{...state,cart:action.payload};
        case SET_PAYMENT:
            return {...state,payment:action.payload};
        case SET_ADDRESS:
            return {...state,address:action.payload};
        case CLEAR_CART:
            return {
                ...state,
                 cart: [], 
                };
        case ADD_TO_CART:{
            const product=action.payload;
            const existingItem=state.cart.find(
                (item)=> item.product.id===product.id);
                if(existingItem){
                    return{
                        ...state,
                        cart:state.cart.map((item)=>item.product.id===product.id
                    ?{...item,count:item.count+1} : item),
                    };
                }
                return{
                    ...state,
                    cart:[
                        ...state.cart,
                        {
                            count:1,
                            checked:true,
                            product,
                        },
                    ],
                };
            
        }
        case INCREASE_COUNT:
        return {
            ...state,
            cart: state.cart.map((item) =>
            item.product.id === action.payload
                ? { ...item, count: item.count + 1 }
                : item
            ),
        };

        case DECREASE_COUNT:
        return {
            ...state,
            cart: state.cart.map((item) =>
            item.product.id === action.payload && item.count > 1
                ? { ...item, count: item.count - 1 }
                : item
            ),
        };

        case REMOVE_FROM_CART:
        return {
            ...state,
            cart: state.cart.filter(
            (item) => item.product.id !== action.payload
            ),
        };

        case TOGGLE_CHECKED:
        return {
            ...state,
            cart: state.cart.map((item) =>
            item.product.id === action.payload
                ? { ...item, checked: !item.checked }
                : item
            ),
        };

        default:
            return state;
    }
};