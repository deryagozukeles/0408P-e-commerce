import {SET_CART,SET_PAYMENT,SET_ADDRESS,ADD_TO_CART, INCREASE_COUNT, DECREASE_COUNT, REMOVE_FROM_CART, TOGGLE_CHECKED,CLEAR_CART} from "../reducers/shoppingCartReducer";
export const setCart=(cart)=>({type:SET_CART,payload:cart});
export const setPayment=(payment)=>({type:SET_PAYMENT,payload:payment});
export const setAddress=(address)=>({type:SET_ADDRESS,payload:address});
export const addToCart=(product)=>({
    type:ADD_TO_CART,
    payload: product,
})
export const increaseCount = (id) => ({
  type: INCREASE_COUNT,
  payload: id,
});

export const decreaseCount = (id) => ({
  type: DECREASE_COUNT,
  payload: id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const toggleChecked = (id) => ({
  type: TOGGLE_CHECKED,
  payload: id,
});


export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};