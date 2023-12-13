/******************************** IMPORTS ********************************/
// local files
import { csrfFetch } from "./csrf";
import { normalizeArray } from "../component-resources/index";


/********************************* TYPES *********************************/
const ORDERS_CREATE_SINGLE_ORDER = 'ORDERS/CREATE_SINGLE_ORDER';
const ORDERS_READ_ALL_USER_ORDERS = 'ORDERS/READ_ALL_USER_ORDERS';


/**************************** ACTION CREATORS ****************************/
export const actionCreateSingleOrder = (newOrder) => ({
    type: ORDERS_CREATE_SINGLE_ORDER,
    payload: newOrder
});

export const actionReadAllUserOrders = (allOrders) => ({
    type: ORDERS_READ_ALL_USER_ORDERS,
    payload: allOrders
});


/***************************** THUNKS (API) ******************************/
export const thunkCreateSingleOrder = (orderData) => async (dispatch) => {
    const response = await csrfFetch(`/api/orders`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
    });
    if (response.ok) {
        const newOrder = await response.json()
        dispatch(actionCreateSingleOrder(newOrder))
        return newOrder;
    }
}

export const thunkReadAllUserOrders = () => async (dispatch) => {
    const response = await csrfFetch(`/api/orders`);
    if (response.ok) {
        const allOrders = await response.json();
        dispatch(actionReadAllUserOrders(allOrders.Orders))
        return allOrders
    }
}


/***************************** STATE SHAPE *******************************/
const initialState = {
    allOrdersByUser: {
        // Products: []
    }
}


/******************************* REDUCER *********************************/
const ordersReducer = (state = initialState, action) => {

    let newState = {...state};

    switch (action.type) {

        case ORDERS_CREATE_SINGLE_ORDER:
            newState.allOrdersByUser = {...state.allOrdersByUser}
            newState.allOrdersByUser[action.payload.id] = action.payload
            return newState

        case ORDERS_READ_ALL_USER_ORDERS:
            // action.payload.forEach((object) => {
            //     object.Products = normalizeArray(object.Products)
            // })

            newState.allOrdersByUser = normalizeArray(action.payload)
                // newState.allOrdersByUser.Products = [...action.payload.Products]
            return newState

        default:
            return newState
    }
}

/******************************** EXPORTS ********************************/
export default ordersReducer;
