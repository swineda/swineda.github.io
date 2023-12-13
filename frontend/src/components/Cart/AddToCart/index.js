/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Modal } from "../../../context/Modal";
// local files
import { thunkAddSingleProductToCart } from "../../../store/cartReducer";
import CartConfirmationModal from "../../Cart/CartConfirmationModal";
import "./AddToCart.css"


/******************************* COMPONENT *******************************/
function AddToCart({productId, text, cssSelector}) {

    // console.log("productId at AddComponent", productId)
    // console.log("cssSelector at AddComponent", cssSelector)

    /************ reducer/API communication ************/
    const dispatch = useDispatch();

    /****************** manage state *******************/
      const [showModal, setShowModal] = useState(false);

    /***************** handle events *******************/
    function addItem(productId) {

        let productData = {
            productId: productId
        }

        dispatch(thunkAddSingleProductToCart(productData))
        setShowModal(true)
    }

    /**************** render component *****************/
    return (
        // <div className="page-wrapper-container">
            // <div id="AddToCart-component">

            <>

                <button
                    className="AddToCart-button"
                    id={cssSelector}
                    type="submit"
                    onClick={(e) => addItem(productId)}
                    >
                    {text}
                </button>

                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CartConfirmationModal productId={productId} modalFunc={setShowModal}/>
                    </Modal>
                )}
            </>

            // </div>
        // </div>
    )
}


/******************************** EXPORTS ********************************/
export default AddToCart
