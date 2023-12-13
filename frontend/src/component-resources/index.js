/*************************************** FUNCTION TO NORMALIZE ARRAY ***************************************/
// normalize function to turn array of objects into object of objects:
// uses "id" specifically as key
// { 1: { id: 1, ...}, 2: { id: 2, ...}, 3: { id: 3 ...}, ... }
export function normalizeArray(arr) {
    let obj = {};
    if (Array.isArray(arr)) arr.forEach(el => obj[el.id] = el);
    return obj;
};


/**************************** FUNCTION TO FIND INDEX OF FIRST INSTANCE IN ARRAY ****************************/
// search array of objects
// for first object whose id-key matches provided ID-number
// return that element's index number
// *use when avoiding key-collisions*
export function findItemIndex(arr, idNo ) {
    for (let i = 0; i < arr.length; i++) {
     if (arr[i].id === idNo) {
       return i
     }
   }
}


/************************************ CALCULATE ESTIMATED SHIPPING DATE ************************************/
export function ShippingETA() {
    let today = Date()
}


/************************************** CALCULATE 5% REDCARD DISCOUNT **************************************/
export function calculateRedCardDiscount(subtotal) {
    let rawDiscount = subtotal * 0.05
    let discount = parseFloat(rawDiscount).toFixed(2)
    return discount
}


/********************************* CALCULATE GRAND TOTAL (AFTER DISCOUNTS) *********************************/
export function calculateGrandTotal(subtotal, discount) {
    let rawTotal = subtotal - discount
    let grandTotal = parseFloat(rawTotal).toFixed(2)
    return grandTotal
}


/*********************************** CONVERT ISO STRING TO "Month Year" ************************************/
export function convertDate(iso) {

    let year = iso.slice(0, 4);
    let month = iso.slice(5, 7);

    if (month == 1) {
        month = 'January'
    } else if (month == 2) {
        month = 'February'
    } else if (month == 3) {
        month = 'March'
    } else if (month == 4) {
        month = 'April'
    } else if (month == 5) {
        month = 'May'
    } else if (month == 6) {
        month = 'June'
    } else if (month == 7) {
        month = 'July'
    } else if (month == 8) {
        month = 'August'
    } else if (month == 9) {
        month = 'September'
    } else if (month == 10) {
        month = 'October'
    } else if (month == 11) {
        month = 'November'
    } else if (month == 12) {
        month = 'December'
    }

    return month.concat(' ', year)
}


/*********************************** CONVERT ISO STRING TO "Month Day, Year" ************************************/
export function convertExactDate(iso) {

    let year = iso.slice(0, 4);
    let month = iso.slice(5, 7);
    let day = iso.slice(8, 10);

    if (month == 1) {
        month = 'January'
    } else if (month == 2) {
        month = 'February'
    } else if (month == 3) {
        month = 'March'
    } else if (month == 4) {
        month = 'April'
    } else if (month == 5) {
        month = 'May'
    } else if (month == 6) {
        month = 'June'
    } else if (month == 7) {
        month = 'July'
    } else if (month == 8) {
        month = 'August'
    } else if (month == 9) {
        month = 'September'
    } else if (month == 10) {
        month = 'October'
    } else if (month == 11) {
        month = 'November'
    } else if (month == 12) {
        month = 'December'
    }

    if (day.length == 2 && day[0] == '0') {
        day = day[1]
    }

    return `${month} ${day}, ${year}`
}


/*********************************** CONVERT ISO STRING TO "Mon DD" ************************************/
export function convertInformalDate(iso) {

    let month = iso.slice(5, 7);
    let day = iso.slice(8, 10);

    if (month == 1) {
        month = 'Jan'
    } else if (month == 2) {
        month = 'Feb'
    } else if (month == 3) {
        month = 'Mar'
    } else if (month == 4) {
        month = 'Apr'
    } else if (month == 5) {
        month = 'May'
    } else if (month == 6) {
        month = 'Jun'
    } else if (month == 7) {
        month = 'Jul'
    } else if (month == 8) {
        month = 'Aug'
    } else if (month == 9) {
        month = 'Sep'
    } else if (month == 10) {
        month = 'Oct'
    } else if (month == 11) {
        month = 'Nov'
    } else if (month == 12) {
        month = 'Dec'
    }

    if (day[0] === '0') {
        day = day[1]
    }

    return `${month} ${day}`
}
