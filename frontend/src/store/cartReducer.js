/******************************** IMPORTS ********************************/
// local files
import { csrfFetch } from "./csrf";
import { findItemIndex, normalizeArray } from "../component-resources/index";


/********************************* TYPES *********************************/
const CART_READ_CART = 'CART/READ_CART';
const CART_ADD_SINGLE_PRODUCT_TO_CART = 'CART/ADD_SINGLE_PRODUCT_TO_CART';
const CART_REMOVE_SINGLE_PRODUCT_FROM_CART = 'CART/REMOVE_SINGLE_PRODUCT_FROM_CART';


/**************************** ACTION CREATORS ****************************/
export const actionReadCart = (cart) => ({
    type: CART_READ_CART,
    payload: cart
});

export const actionAddSingleProductToCart = (newProduct) => ({
    type: CART_ADD_SINGLE_PRODUCT_TO_CART,
    payload: newProduct
});

export const actionRemoveSingleProductFromCart = (cartId) => ({
    type: CART_REMOVE_SINGLE_PRODUCT_FROM_CART,
    payload: cartId
});


/***************************** THUNKS (API) ******************************/
export const thunkReadCart = () => async (dispatch) => {
    const response = await csrfFetch(`/api/cart`);
    if (response.ok) {
        const cart = await response.json();
        dispatch(actionReadCart(cart))
        return cart
    }
}

export const thunkAddSingleProductToCart = (productId) => async (dispatch) => {
    const response = await csrfFetch(`/api/cart`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productId)
    });
    if (response.ok) {
        const newProduct = await response.json()
        dispatch(actionAddSingleProductToCart(newProduct))
        return newProduct;
    }
}

export const thunkRemoveSingleProductFromCart = (cartId) => async (dispatch) => {
    const response = await csrfFetch(`/api/cart/${cartId}`, {
        method: 'delete',
    });
    if (response.ok) {
        dispatch(actionRemoveSingleProductFromCart(cartId))
        return cartId;
    }
}


/***************************** STATE SHAPE *******************************/
const initialState = {
    allProductsByUser: {
        Products: []
    }
}


/******************************* REDUCER *********************************/
const cartReducer = (state = initialState, action) => {

    let newState = {...state};

    switch (action.type) {

        case CART_READ_CART:
            newState.allProductsByUser = {...action.payload}
                newState.allProductsByUser.Products = [...action.payload.Products]
            return newState

        case CART_ADD_SINGLE_PRODUCT_TO_CART:
            newState.allProductsByUser = {...state.allProductsByUser}
                // newState.allProductsByUser.subtotal = state.allProductsByUser.subtotal + action.payload.price
                newState.allProductsByUser.Products =  [...state.allProductsByUser.Products]
                newState.allProductsByUser.Products.push(action.payload)
            return newState

        case CART_REMOVE_SINGLE_PRODUCT_FROM_CART:
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
export default cartReducer;
