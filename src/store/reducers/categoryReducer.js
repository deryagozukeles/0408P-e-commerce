import { SET_CATEGORY_LOADING , SET_CATEGORIES, SET_CATEGORY_ERROR} from "../actions/categoryActions";



const initialState={
    list:[],
    loading: false,
    error: null,
}
const categoryReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_CATEGORY_LOADING:
      return { ...state, loading: action.payload };
    case SET_CATEGORIES:
      return { ...state, list: action.payload };
    case SET_CATEGORY_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default categoryReducer;