const initialState={
    user:{},
    token: localStorage.getItem("token") || null,
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "light",
    language: "tr"
};
export const SET_USER='SET_USER';
export const SET_ROLES='SET_ROLES';
export const SET_THEME='SET_THEME';
export const SET_LANGUAGE='SET_LANGUAGE';
export const SET_ADDRESS_LIST='SET_ADDRESS_LIST';
export const SET_CREDIT_CARDS='SET_CREDIT_CARDS';
export const SET_TOKEN = "SET_TOKEN";
export const LOGOUT = "LOGOUT";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const clientReducer=(state=initialState,action)=>{
    switch (action.type){
        case SET_USER:
            return {...state, user:action.payload};
        case SET_TOKEN:
            return { ...state, token: action.payload };
        case SET_ROLES:
            return {...state, roles:action.payload};
        case SET_THEME:
            return {...state, theme:action.payload};
        case SET_LANGUAGE:
            return {...state, language:action.payload};
        case SET_ADDRESS_LIST:
            return {...state, addressList:action.payload};
        case SET_CREDIT_CARDS:
            return {...state, creditCards:action.payload};
        case LOGIN_SUCCESS: 
      return {
        ...state,
        user: action.payload,
        token: action.payload.token 
      };
        case LOGOUT:
             return {
                ...state,
                user: {},
                token: null,
                addressList: [],
                creditCards: [],
                roles: []
            };
        default:
            return state;
    }
}
