/******************************** IMPORTS ********************************/
// local files
import { csrfFetch } from "./csrf";
import { normalizeArray } from "../component-resources/index";


/********************************* TYPES *********************************/
const PRODUCTS_READ_SINGLE_PRODUCT_DETAILS = 'PRODUCTS/READ_SINGLE_PRODUCT_DETAILS';
// const SEARCH_SEARCH_ALL_PRODUCTS = 'SEARCH/SEARCH_ALL_PRODUCTS';

/**************************** ACTION CREATORS ****************************/
export const actionReadSingleProductDetails = (singleProductDetails) => ({
    type: PRODUCTS_READ_SINGLE_PRODUCT_DETAILS,
    payload: singleProductDetails
});

// export const actionSearchAllProducts = (searchResults) => ({
//     type: SEARCH_SEARCH_ALL_PRODUCTS,
//     payload: searchResults
// });


/***************************** THUNKS (API) ******************************/
export const thunkReadSingleProductDetails = (productId) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${productId}`);
    if (response.ok) {
        const singleProductDetails = await response.json();
        dispatch(actionReadSingleProductDetails(singleProductDetails))
        return singleProductDetails
    }
}

// export const thunkSearchAllProducts = (searchData) => async (dispatch) => {
//     const response = await csrfFetch(`/api/products/search`, {
//         method: 'post',
//         headers: { 'Content-Type': 'application/json' } ,
//         body: JSON.stringify(searchData)
//     });
//     if (response.ok) {
//         const searchResults = await response.json();
//         dispatch(actionSearchAllProducts(searchResults))
//         return searchResults
//     }
// }

/***************************** STATE SHAPE *******************************/
const initialState = {
    singleProductDetails: {
        Department: {},
        ProductImages: {}
    },
    // searchAllProducts: {}
}




/******************************* REDUCER *********************************/
const productsReducer = (state = initialState, action) => {

    let newState = {...state};

    switch (action.type) {

        case PRODUCTS_READ_SINGLE_PRODUCT_DETAILS:
            newState.singleProductDetails = {...action.payload}
                newState.singleProductDetails.Department = {...action.payload.Department}
                const normalizeImgs = normalizeArray(action.payload.ProductImages)
                const copyArr = Object.values(normalizeImgs)
                newState.singleProductDetails.ProductImages = copyArr
            newState.searchAllProducts = { ...state.searchAllProducts }
            return newState

        // case SEARCH_SEARCH_ALL_PRODUCTS:
        //     newState.singleProductDetails = { ...state.singleProductDetails }
        //     newState.searchAllProducts = { ...action.payload }
        //     newState.searchAllProducts = normalizeArray(action.payload)
        //     return newState

        default:
            return newState
    }

}


/******************************** EXPORTS ********************************/
export default productsReducer;
