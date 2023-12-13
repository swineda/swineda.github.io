/******************************** IMPORTS ********************************/
// local files
import { csrfFetch } from "./csrf";
import { findItemIndex, normalizeArray } from "../component-resources/index";


/********************************* TYPES *********************************/
const FAVORITES_READ_FAVORITES = 'FAVORITES/READ_FAVORITES';
const FAVORITES_ADD_SINGLE_PRODUCT_TO_FAVORITES = 'FAVORITES/ADD_SINGLE_PRODUCT_TO_FAVORITES';
const FAVORITES_REMOVE_SINGLE_PRODUCT_FROM_FAVORITES = 'FAVORITES/REMOVE_SINGLE_PRODUCT_FROM_FAVORITES';


/**************************** ACTION CREATORS ****************************/
export const actionReadFavorites = (favorites) => ({
    type: FAVORITES_READ_FAVORITES,
    payload: favorites
});

export const actionAddSingleProductToFavorites = (newProduct) => ({
    type: FAVORITES_ADD_SINGLE_PRODUCT_TO_FAVORITES,
    payload: newProduct
});

export const actionRemoveSingleProductFromFavorites = (favoriteId) => ({
    type: FAVORITES_REMOVE_SINGLE_PRODUCT_FROM_FAVORITES,
    payload: favoriteId
});


/***************************** THUNKS (API) ******************************/
export const thunkReadFavorites = () => async (dispatch) => {
    const response = await csrfFetch(`/api/favorites`);
    if (response.ok) {
        const favorites = await response.json();
        dispatch(actionReadFavorites(favorites))
        return favorites
    }
}

export const thunkAddSingleProductToFavorites = (productId) => async (dispatch) => {
    const response = await csrfFetch(`/api/favorites`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productId)
    });
    if (response.ok) {
        const newProduct = await response.json()
        dispatch(actionAddSingleProductToFavorites(newProduct))
        return newProduct;
    }
}

export const thunkRemoveSingleProductFromFavorites = (favoriteId) => async (dispatch) => {
    const response = await csrfFetch(`/api/favorites/${favoriteId}`, {
        method: 'delete',
    });
    if (response.ok) {
        dispatch(actionRemoveSingleProductFromFavorites(favoriteId))
        return favoriteId;
    }
}


/***************************** STATE SHAPE *******************************/
const initialState = {
    allProductsByUser: {
        Products: []
    }
}


/******************************* REDUCER *********************************/
const favoritesReducer = (state = initialState, action) => {

    let newState = {...state};

    switch (action.type) {

        case FAVORITES_READ_FAVORITES:
            newState.allProductsByUser = {...action.payload}
                newState.allProductsByUser.Products = [...action.payload.Products]
            return newState

        case FAVORITES_ADD_SINGLE_PRODUCT_TO_FAVORITES:
            newState.allProductsByUser = {...state.allProductsByUser}
                // newState.allProductsByUser.subtotal = state.allProductsByUser.subtotal + action.payload.price
                newState.allProductsByUser.Products =  [...state.allProductsByUser.Products]
                newState.allProductsByUser.Products.push(action.payload)
            return newState

        case FAVORITES_REMOVE_SINGLE_PRODUCT_FROM_FAVORITES:
            newState.allProductsByUser = {...state.allProductsByUser}
                newState.allProductsByUser.Products = [...state.allProductsByUser.Products]
                // remove deleted product from product list
                let products = newState.allProductsByUser.Products
                let index = findItemIndex(products, action.payload)
                products.splice(index, 1)
                newState.allProductsByUser.Products = products
            return newState

        default:
            return newState
    }

}

/******************************** EXPORTS ********************************/
export default favoritesReducer;
