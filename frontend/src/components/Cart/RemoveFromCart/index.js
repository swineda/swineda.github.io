/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// local files
import { thunkReadCart, thunkRemoveSingleProductFromCart } from "../../../store/cartReducer";
import "./RemoveFromCart.css"


/******************************* COMPONENT *******************************/
function RemoveFromCart({cartId, text, cssSelector}) {

    // console.log("productId at AddComponent", productId)
    // console.log("cssSelector at AddComponent", cssSelector)

    /************ reducer/API communication ************/
    const dispatch = useDispatch();


    /***************** handle events *******************/
    function removeItem(cartId) {

        dispatch(thunkRemoveSingleProductFromCart(cartId))
    }

    /**************** render component *****************/
    return (
        // <div className="page-wrapper-container">
            // <div id="AddToCart-component">

                <button
                    className="RemoveFromCart-button"
                    id={cssSelector}
                    type="submit"
                    onClick={(e) => removeItem(cartId)}
                >
                    {text}
                </button>

            // </div>
        // </div>
    )
}


/******************************** EXPORTS ********************************/
export default RemoveFromCart
