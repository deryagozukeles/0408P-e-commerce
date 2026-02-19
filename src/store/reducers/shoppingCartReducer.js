const initialState={
    cart:[],
    payment:{},
    address:{}
};
export const SET_CART='SET_CART';
export const SET_PAYMENT='SET_PAYMENT';
export const SET_ADDRESS='SET_ADDRESS';
export const ADD_TO_CART="ADD_TO_CART";
export const shoppingCartReducer=(state=initialState,action)=>{
    switch (action.type){
        case SET_CART:
            return{...state,cart:action.payload};
        case SET_PAYMENT:
            return {...state,payment:action.payload};
        case SET_ADDRESS:
            return {...state,address:action.payload};
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
        default:
            return state;
    }
};