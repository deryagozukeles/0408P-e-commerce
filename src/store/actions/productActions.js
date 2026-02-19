import axiosInstance from "../../api/axiosInstance";
import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  SET_CATEGORY_ID ,
  SET_ACTIVE_PRODUCT ,
} from "../reducers/productReducer";


export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (products) => ({ type: SET_PRODUCT_LIST, payload: products });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (state) => ({ type: SET_FETCH_STATE, payload: state });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setSort=(sort)=>({type: SET_SORT,payload : sort});
export const setCategoryId = (id) => ({
  type: SET_CATEGORY_ID,
  payload: id
});

export const setActiveProduct = (product) => ({ 
    type: SET_ACTIVE_PRODUCT, 
    payload: product 
});



export const fetchCategories = () => (dispatch) => {
  axiosInstance
    .get("/categories")
    .then((res) => {
      dispatch(setCategories(res.data));
    })
    .catch((err) => console.error("Kategori çekme hatası:", err));
};


export const fetchProducts = (page = 1, limit = 8) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SET_FETCH_STATE, payload: "FETCHING" });

      const { categoryId, filter, sort } = getState().product;

      const params = new URLSearchParams();

      if (categoryId) params.append("category", categoryId);
      if (filter) params.append("filter", filter);
      if (sort) params.append("sort", sort);

      params.append("limit", limit);

      const offset = (page - 1) * limit;
      params.append("offset", offset);

      const res = await axiosInstance.get(`/products?${params.toString()}`);
      

     dispatch(setProductList(res.data.products));
    dispatch(setTotal(res.data.total));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setFetchState("FAILED"));
  }
  };
};

export const fetchProductDetail = (productId) => async (dispatch) => {
  try {
    dispatch(setFetchState("FETCHING")); 
    const res = await axiosInstance.get(`/products/${productId}`);
    dispatch(setActiveProduct(res.data));
    dispatch(setFetchState("FETCHED")); 
  } catch (error) {
    console.error("Ürün detayı hatası:", error);
    dispatch(setFetchState("FAILED"));
  }
};