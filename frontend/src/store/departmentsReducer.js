/******************************** IMPORTS ********************************/
// local files
import { csrfFetch } from "./csrf";
import { normalizeArray } from "../component-resources/index";


/********************************* TYPES *********************************/
const DEPARTMENTS_READ_ALL_DEPARTMENTS = 'DEPARTMENTS/READ_ALL_DEPARTMENTS';
const DEPARTMENTS_READ_SINGLE_DEPARTMENT_DETAILS = 'DEPARTMENTS/READ_SINGLE_DEPARTMENT_DETAILS';


/**************************** ACTION CREATORS ****************************/
export const actionReadAllDepartments = (allDepartments) => ({
    type: DEPARTMENTS_READ_ALL_DEPARTMENTS,
    payload: allDepartments
});

export const actionReadSingleDepartmentDetails = (singleDepartmentDetails) => ({
    type: DEPARTMENTS_READ_SINGLE_DEPARTMENT_DETAILS,
    payload: singleDepartmentDetails
});


/***************************** THUNKS (API) ******************************/
export const thunkReadAllDepartments = () => async (dispatch) => {
    const response = await csrfFetch(`/api/departments`);
    if (response.ok) {
        const allDepartments = await response.json();
        dispatch(actionReadAllDepartments(allDepartments.Departments))
        return allDepartments
    }
}

export const thunkReadSingleDepartmentDetails = (departmentId) => async (dispatch) => {
    const response = await csrfFetch(`/api/departments/${departmentId}/products`);
    if (response.ok) {
        const singleDepartmentDetails = await response.json();
        dispatch(actionReadSingleDepartmentDetails(singleDepartmentDetails))
        return singleDepartmentDetails
    }
}


/***************************** STATE SHAPE *******************************/
const initialState = {
    allDepartments: {},
    singleDepartmentDetails: {
        Products: []
    }
}


/******************************* REDUCER *********************************/
const departmentsReducer = (state = initialState, action) => {

    let newState = {...state};

    switch (action.type) {

        case DEPARTMENTS_READ_ALL_DEPARTMENTS:
            newState.allDepartments = {...action.payload}
            newState.singleDepartmentDetails = {...state.singleDepartmentDetails}
            return newState


        case DEPARTMENTS_READ_SINGLE_DEPARTMENT_DETAILS:
            newState.allDepartments = {...state.allDepartments}
            newState.singleDepartmentDetails = {...action.payload}
            newState.singleDepartmentDetails.Products = normalizeArray(action.payload.Products)
            return newState

        default:
            return newState
    }

}


/******************************** EXPORTS ********************************/
export default departmentsReducer;
