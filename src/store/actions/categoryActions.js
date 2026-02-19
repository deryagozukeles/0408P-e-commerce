export const SET_CATEGORIES="SET_CATEGORIES";
export const SET_CATEGORY_LOADING="SET_CATEGORY_LOADING";
export const SET_CATEGORY_ERROR="SET_CATEGORY_ERROR";
export const setCategories=(data)=>({
    type: SET_CATEGORIES,
    payload:data,
});
export const setCategoryLoading=(status)=>({
    type: SET_CATEGORY_LOADING,
    payload: status,
});
export const setCategoryError=(error)=>({
    type:SET_CATEGORY_ERROR,
    payload: error,
});