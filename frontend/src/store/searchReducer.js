/******************************** IMPORTS ********************************/
// local files
import { csrfFetch } from "./csrf";
import { normalizeArray } from "../component-resources/index";


/********************************* TYPES *********************************/
const SEARCH_SEARCH_ALL_PRODUCTS = 'SEARCH/SEARCH_ALL_PRODUCTS';


/**************************** ACTION CREATORS ****************************/
export const actionSearchAllProducts = (searchResults) => ({
    type: SEARCH_SEARCH_ALL_PRODUCTS,
    payload: searchResults
});


/***************************** THUNKS (API) ******************************/
export const thunkSearchAllProducts = (searchData) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/search`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' } ,
        body: JSON.stringify(searchData)
    });
    if (response.ok) {
        const searchResults = await response.json();
        dispatch(actionSearchAllProducts(searchResults))
        return searchResults
    }
}


/***************************** STATE SHAPE *******************************/
const initialState = {
    searchTerm: '',
    searchResults: {}
}


/******************************* REDUCER *********************************/
const searchReducer = (state = initialState, action) => {

    let newState = {...state};

    switch (action.type) {

        case SEARCH_SEARCH_ALL_PRODUCTS:
            newState.searchResults = { ...action.payload }
            newState.searchTerm = action.payload.Term
            newState.searchResults = normalizeArray(action.payload.Products)
            return newState

        default:
            return newState
    }

}


/******************************** EXPORTS ********************************/
export default searchReducer;
